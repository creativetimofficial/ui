import "dotenv/config";
import jsonServer from "json-server";
import cors from "cors";
import cookieParser from 'cookie-parser';
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";

// -------------------- Env & Defaults --------------------
const {
  JWT_SECRET = process.env.JWT_SECRET,
  ACCESS_TTL_SEC = process.env.ACCESS_TTL_SEC,      // 15 minutes
  REFRESH_TTL_SEC = process.env.REFRESH_TTL_SEC,  // 7 days
  CLIENT_ORIGIN = process.env.CLIENT_ORIGIN,
  PORT = "4001",               // match your NEXT_PUBLIC_API_URL host:port
} = process.env;

const ACCESS_TTL = parseInt(ACCESS_TTL_SEC, 10);
const REFRESH_TTL = parseInt(REFRESH_TTL_SEC, 10);

// -------------------- App & DB Setup --------------------
const app = jsonServer.create();
const router = jsonServer.router("db.json");
const middlewares = jsonServer.defaults({ noCors: true });

const defaultData = {
  users: [],
  revoked_tokens: [],
  password_resets: [],
};

const adapter = new JSONFile("db.json");
const db = new Low(adapter, defaultData);
await db.read();
db.data.users ??= [];
db.data.revoked_tokens ??= [];
db.data.password_resets ??= [];

// -------------------- CORS (with credentials) --------------------
const corsOptions = {
  origin: CLIENT_ORIGIN, // must be explicit when using credentials
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
};
app.use(cors(corsOptions));
app.use(
  cors({
    origin: CLIENT_ORIGIN,    // must be the exact origin when using credentials
    credentials: true,
    methods: ['GET','POST','PUT','PATCH','DELETE','OPTIONS'],
    allowedHeaders: ['Content-Type','Authorization'],
  })
);
app.options('*', cors({ origin: CLIENT_ORIGIN, credentials: true }));
app.use(cookieParser());

// -------------------- Middleware --------------------
app.use(jsonServer.bodyParser);
app.use(middlewares);

// Optional request log to debug routes
app.use((req, _res, next) => {
  console.log(req.method, req.url);
  next();
});

// -------------------- Helpers --------------------
function signAccessToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, typ: "access" },
    JWT_SECRET,
    { expiresIn: ACCESS_TTL }
  );
}

function signRefreshToken(user) {
  return jwt.sign(
    { sub: user.id, email: user.email, typ: "refresh", jti: nanoid() },
    JWT_SECRET,
    { expiresIn: REFRESH_TTL }
  );
}

function setRefreshCookie(res, token, maxAgeMs) {
  res.cookie('refresh_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: false,         // true in production if using HTTPS
    maxAge: maxAgeMs,
    path: '/',             // adjust if needed
  });
}

function sanitizeUser(u) {
  const { password, ...safe } = u;
  return safe;
}

function authz(req) {
  const h = req.headers.authorization || "";
  const token = h.startsWith("Bearer ") ? h.slice(7) : null;
  if (!token) return null;
  try {
    const payload = jwt.verify(token, JWT_SECRET);
    return payload;
  } catch {
    return null;
  }
}

async function getUserByEmail(email) {
  await db.read();
  return db.data.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
}

async function getUserById(id) {
  await db.read();
  return db.data.users.find((u) => u.id === id);
}

async function createUser({
  email,
  password,
  name,
  provider = "email",
  google_sub = null,
}) {
  await db.read();
  const nextId = db.data.users.length
    ? Math.max(...db.data.users.map((u) => u.id)) + 1
    : 1;
  const now = new Date().toISOString();
  const newUser = {
    id: nextId,
    email,
    password, // ⚠️ mock only (no hashing)
    name,
    provider,
    google_sub,
    created_at: now,
    updated_at: now,
  };
  db.data.users.push(newUser);
  await db.write();
  return newUser;
}

async function upsertGoogleUser({ email, name, google_sub }) {
  await db.read();
  let user =
    db.data.users.find((u) => u.google_sub === google_sub) ||
    db.data.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  if (user) {
    user.google_sub = google_sub;
    user.provider = "google";
    user.name = user.name || name;
    user.updated_at = new Date().toISOString();
    await db.write();
    return user;
  }
  return createUser({
    email,
    password: nanoid(),
    name,
    provider: "google",
    google_sub,
  });
}

async function revokeToken(token) {
  await db.read();
  db.data.revoked_tokens.push({
    token,
    revoked_at: new Date().toISOString(),
  });
  await db.write();
}

async function isRevoked(token) {
  await db.read();
  return !!db.data.revoked_tokens.find((t) => t.token === token);
}

// -------------------- AUTH Routes --------------------



// POST /api/v1/auth/register
app.post(["/api/v1/auth/register", "/register"], async (req, res) => {
  const { email, password, name } = req.body || {};
  if (!email || !password)
    return res
      .status(422)
      .json({ message: "email și password sunt obligatorii" });

  const existing = await getUserByEmail(email);
  if (existing) return res.status(409).json({ message: "Email deja folosit" });

  const user = await createUser({ email, password, name });
  const access_token = signAccessToken(user);
  const refresh_token = signRefreshToken(user);
  setRefreshCookie(res, refresh_token, REFRESH_TTL * 1000);

  res.json({ user: sanitizeUser(user), access_token, refresh_token });
});

// POST /api/v1/auth/login
app.post(["/api/v1/auth/login", "/login"], async (req, res) => {
  const { email, password } = req.body || {};
  const user = await getUserByEmail(email || "");
  if (!user || user.password !== password)
    return res.status(401).json({ message: "Credențiale invalide" });

  const access_token = signAccessToken(user);
  const refresh_token = signRefreshToken(user);
  setRefreshCookie(res, refresh_token, REFRESH_TTL * 1000);

  res.json({ user: sanitizeUser(user), access_token, refresh_token });
});

// POST /api/v1/auth/google  (MOCK: sets refresh cookie like classic login)
app.post(["/api/v1/auth/google", "/google"], async (req, res) => {
  const { token } = req.body || {};
  if (!token) return res.status(422).json({ message: "token lipsă" });

  let payload;
  try {
    payload = typeof token === "string" ? JSON.parse(token) : token;
  } catch {
    return res
      .status(400)
      .json({ message: "token invalid (mock așteaptă JSON cu {email,name,sub})" });
  }

  const { email, name, sub } = payload || {};
  if (!email || !sub) {
    return res
      .status(400)
      .json({ message: "token mock trebuie să conțină email și sub" });
  }

  // create/update Google user
  const user = await upsertGoogleUser({
    email,
    name: name || email.split("@")[0],
    google_sub: sub,
  });

  // issue tokens
  const access_token = signAccessToken(user);
  const refresh_token = signRefreshToken(user);

  // ✅ set refresh cookie exactly like the classic login
  setRefreshCookie(res, refresh_token, REFRESH_TTL * 1000);

  // return same shape as login (keeps parity with Rails response)
  return res.json({
    user: sanitizeUser(user),
    access_token,
    refresh_token,
  });
});



// POST /api/v1/auth/logout  — clear refresh cookie & revoke tokens
app.post(["/api/v1/auth/logout", "/logout"], async (req, res) => {
  const h = req.headers.authorization || "";
  const at = h.startsWith("Bearer ") ? h.slice(7) : null;
  if (at) await revokeToken(at);

  const rt = req.cookies?.refresh_token;
  if (rt) await revokeToken(rt);

  res.clearCookie("refresh_token", { httpOnly: true, sameSite: "lax", secure: false, path: "/" });
  return res.json({ success: true });
});


// POST /api/v1/auth/refresh  — cookie-based (no body)
app.post(["/api/v1/auth/refresh", "/refresh"], async (req, res) => {
  const refresh_token = req.cookies?.refresh_token;
  if (!refresh_token) return res.status(401).json({ message: "No refresh token" });

  try {
    const payload = jwt.verify(refresh_token, JWT_SECRET);
    if (payload.typ !== "refresh") return res.status(401).json({ message: "tip token greșit" });
    if (await isRevoked(refresh_token)) return res.status(401).json({ message: "refresh token revocat" });

    const user = await getUserById(payload.sub);
    if (!user) return res.status(401).json({ message: "user inexistent" });

    await revokeToken(refresh_token);               // rotate
    const new_access  = signAccessToken(user);
    const new_refresh = signRefreshToken(user);
    setRefreshCookie(res, new_refresh, REFRESH_TTL * 1000);

    return res.json({ access_token: new_access });  // only access in body
  } catch {
    return res.status(401).json({ message: "refresh token invalid sau expirat" });
  }
});



// GET /api/v1/auth/me
app.get(["/api/v1/auth/me", "/me"], async (req, res) => {
  const payload = authz(req);
  if (!payload || payload.typ !== "access")
    return res.status(401).json({ message: "Unauthorized" });
  if (await isRevoked((req.headers.authorization || "").slice(7))) {
    return res.status(401).json({ message: "Token revocat" });
  }
  const user = await getUserById(payload.sub);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json({ user: sanitizeUser(user) });
});

// -------------------- Password Reset (mock) --------------------
app.post(
  ["/api/v1/auth/forgot-password", "/forgot-password"],
  async (req, res) => {
    const { email } = req.body || {};
    const user = email ? await getUserByEmail(email) : null;
    if (!user)
      return res.json({
        message: "Dacă emailul există, vei primi un link de resetare",
      });

    const token = nanoid();
    await db.read();
    db.data.password_resets.push({
      id: nanoid(),
      user_id: user.id,
      token,
      created_at: new Date().toISOString(),
      consumed_at: null,
    });
    await db.write();

    // In mock, return token for testing the UI
    res.json({ message: "Reset email sent (mock)", token });
  }
);

app.post(
  ["/api/v1/auth/reset-password", "/reset-password"],
  async (req, res) => {
    const { token, password } = req.body || {};
    if (!token || !password)
      return res
        .status(422)
        .json({ message: "token și password sunt obligatorii" });

    await db.read();
    const prIndex = db.data.password_resets.findIndex(
      (r) => r.token === token && !r.consumed_at
    );
    if (prIndex === -1)
      return res.status(400).json({ message: "token invalid sau folosit" });

    const pr = db.data.password_resets[prIndex];
    const user = await getUserById(pr.user_id);
    if (!user) return res.status(404).json({ message: "user inexistent" });

    user.password = password;
    user.updated_at = new Date().toISOString();
    db.data.password_resets[prIndex].consumed_at = new Date().toISOString();
    await db.write();

    res.json({ message: "Parola a fost actualizată" });
  }
);

// -------------------- Mount json-server router for other CRUD --------------------
app.use("/api", router);

// -------------------- Start --------------------
app.listen(Number(PORT), () => {
  console.log(`Mock AUTH API on http://localhost:${PORT}`);
});
