# Creative Tim Registry Structure

## Package Organization

**ONE npm package**: `@creative-tim/ui`

All components are installed through a **single npm package** (`@creative-tim/ui`) to ensure unified download counts, better SEO, and simpler maintenance. The registry is organized into logical categories for better organization and discoverability.

## Component Categories

### 1. UI Components - Foundational Building Blocks
**Type**: `registry:ui`
**Path Pattern**: `creative-tim-ui/ui/{component-name}.tsx` OR `components/ui/{component-name}.tsx`
**Installation**: `npx @creative-tim/ui@latest add {component-name}`

Examples:
```bash
npx @creative-tim/ui@latest add button
npx @creative-tim/ui@latest add card
npx @creative-tim/ui@latest add dialog
```

File paths in registry:
- `button` → `components/ui/button.tsx`
- `card` → `components/ui/card.tsx`
- `dialog` → `components/ui/dialog.tsx`

### 2. Blocks - Pre-built Component Sections
**Type**: `registry:block`
**Path Pattern**: `creative-tim-ui/blocks/{block-name}/page.tsx`
**Installation**: `npx @creative-tim/ui@latest add {block-name}`

Examples:
```bash
npx @creative-tim/ui@latest add software-purchase-01
npx @creative-tim/ui@latest add testimonials-01
npx @creative-tim/ui@latest add web3-02
```

File paths in registry:
- `software-purchase-01` → `creative-tim-ui/blocks/software-purchase-01/page.tsx`
- `testimonials-01` → `creative-tim-ui/blocks/testimonials-01/page.tsx`
- `web3-02` → `creative-tim-ui/blocks/web3-02/page.tsx`

### 3. Agents - AI Agent Components (Future)
**Type**: `registry:agent`
**Path Pattern**: `creative-tim-ui/agents/{agent-name}/page.tsx`
**Installation**: `npx @creative-tim/ui@latest add {agent-name}`

Examples (future):
```bash
npx @creative-tim/ui@latest add voice-chat-agent
npx @creative-tim/ui@latest add transcriber-agent
```

## Registry JSON Files

The build system generates separate registry JSON files for organization:

- `/r/ui.json` - All UI components (for documentation/filtering)
- `/r/blocks.json` - All blocks (for documentation/filtering)
- `/r/agents.json` - All agents (future)
- `/r/all.json` - Everything combined
- `/r/{component-name}.json` - Individual component files

## Installation Examples

### Using Creative Tim CLI (Recommended)
```bash
# Install UI components
npx @creative-tim/ui@latest add button card dialog

# Install blocks
npx @creative-tim/ui@latest add software-purchase-01 testimonials-01

# Install agents (future)
npx @creative-tim/ui@latest add voice-chat-agent

# Install everything
npx @creative-tim/ui@latest add all
```

### Using shadcn CLI
```bash
# Install individual components
npx shadcn@latest add https://creative-tim.com/ui/r/button.json
npx shadcn@latest add https://creative-tim.com/ui/r/software-purchase-01.json

# Install all components
npx shadcn@latest add https://creative-tim.com/ui/r/all.json
```

## Benefits of Single Package Approach

1. **Unified Download Counts**: All installs count towards one package on npm
2. **Better SEO**: Single package page gets all traffic and rankings
3. **Simpler Maintenance**: One package to publish, version, and maintain
4. **Clear Branding**: `@creative-tim/ui` is the only name users need to remember
5. **Organized Registry**: Components still organized by type for discoverability
6. **Flexible Installation**: CLI can auto-detect component types
7. **Cost Effective**: No need for multiple npm organization packages
8. **Easier Migration**: Users don't need to switch packages to install different component types

## How the CLI Works

The `@creative-tim/ui` CLI automatically detects component types:

```bash
# CLI auto-detects these are UI components
npx @creative-tim/ui@latest add button card

# CLI auto-detects these are blocks
npx @creative-tim/ui@latest add software-purchase-01 testimonials-01

# Or be explicit with paths
npx @creative-tim/ui@latest add ui/button
npx @creative-tim/ui@latest add blocks/software-purchase-01
```

## Registry Endpoints

All endpoints serve the same npm package but filtered by type:

- `https://creative-tim.com/ui/r/ui.json` - UI components only
- `https://creative-tim.com/ui/r/blocks.json` - Blocks only  
- `https://creative-tim.com/ui/r/agents.json` - Agents only (future)
- `https://creative-tim.com/ui/r/all.json` - All components
- `https://creative-tim.com/ui/r/{name}.json` - Individual component

---

## Component Installation Methods

### Current Method: Using shadcn CLI

Your registry currently works with the shadcn CLI out of the box:

```bash
# Install individual components
npx shadcn@latest add https://creative-tim.com/ui/r/button.json
npx shadcn@latest add https://creative-tim.com/ui/r/software-purchase-01.json

# Install all components
npx shadcn@latest add https://creative-tim.com/ui/r/all.json
```

**Pros:**
- ✅ Works immediately (no CLI development needed)
- ✅ Users familiar with shadcn already know the pattern
- ✅ No maintenance required
- ✅ Registry files already compatible

**Cons:**
- ❌ Longer commands (requires full URLs)
- ❌ No Creative Tim npm package stats
- ❌ Less brand visibility

### Future Method: Custom Creative Tim CLI

To enable shorter commands like `npx @creative-tim/ui@latest add button`, you need to:

1. **Create a CLI package** in `packages/cli/`
2. **Build the CLI** (can fork shadcn's CLI or build custom)
3. **Publish to npm** (see section below)

**Pros:**
- ✅ Shorter, cleaner commands
- ✅ Own npm download statistics
- ✅ Custom branding and features
- ✅ Better developer experience

**Cons:**
- ❌ Requires CLI development effort
- ❌ Ongoing maintenance needed
- ❌ Need to publish and version manage

---

## Publishing CLI to npm (Future)

**Note:** This section applies only if you build a custom CLI package. The registry JSON files are deployed with your website, not published to npm.

### Prerequisites

1. **npm Account**
   - Create an account at [npmjs.com](https://www.npmjs.com/)
   - Verify your email address

2. **npm Organization (Optional but Recommended)**
   - Create `@creative-tim` organization on npm
   - Benefits: Brand protection, team collaboration, package grouping

3. **Local Setup**
   ```bash
   # Login to npm
   npm login
   
   # Verify you're logged in
   npm whoami
   ```

### What Gets Published to npm

**ONLY the CLI tool** gets published to npm, NOT the blocks/components:

| Component | Published To | Purpose |
|-----------|-------------|---------|
| CLI Tool | npm (`@creative-tim/ui`) | Installation utility |
| Registry JSONs | Your website (`/r/*.json`) | Component definitions |
| Source Code | GitHub | Development & contributions |

### Package Configuration

Your CLI package's `package.json` should look like this:

```json
{
  "name": "@creative-tim/ui",
  "version": "0.1.0",
  "description": "A comprehensive component library built on shadcn/ui for modern web applications",
  "author": "Creative Tim <hello@creative-tim.com>",
  "license": "MIT",
  "repository": {
    "type": "git",
    "url": "https://github.com/creativetimofficial/ui.git"
  },
  "homepage": "https://creative-tim.com/ui",
  "bugs": {
    "url": "https://github.com/creativetimofficial/ui/issues"
  },
  "keywords": [
    "creative-tim",
    "ui",
    "components",
    "react",
    "nextjs",
    "tailwindcss",
    "shadcn",
    "blocks",
    "templates"
  ],
  "main": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "bin": {
    "creative-tim": "./dist/cli.js"
  },
  "files": [
    "dist",
    "README.md",
    "LICENSE"
  ],
  "publishConfig": {
    "access": "public"
  }
}
```

### Publishing Process

#### 1. Create the CLI Package First

```bash
# Create the CLI package directory
mkdir -p packages/cli
cd packages/cli

# Initialize package
npm init --scope=@creative-tim

# Install dependencies
npm install commander picocolors prompts ora fs-extra

# Build your CLI (see shadcn/ui CLI for reference)
```

#### 2. First-Time Publishing

```bash
# Navigate to your CLI package directory
cd packages/cli

# Build your package
npm run build

# Test the package locally
npm pack
# This creates creative-tim-ui-0.1.0.tgz - test it locally first

# Test it works
npm install -g ./creative-tim-ui-0.1.0.tgz
creative-tim add button

# If tests pass, publish to npm
npm publish --access public
```

#### 3. Updating Versions

Follow [Semantic Versioning](https://semver.org/):
- **MAJOR** (1.0.0): Breaking changes
- **MINOR** (0.1.0): New features, backward compatible
- **PATCH** (0.0.1): Bug fixes

```bash
# Patch release (0.1.0 -> 0.1.1)
npm version patch
npm publish

# Minor release (0.1.0 -> 0.2.0)
npm version minor
npm publish

# Major release (0.1.0 -> 1.0.0)
npm version major
npm publish
```

#### 4. Automated Publishing with GitHub Actions

Create `.github/workflows/publish.yml`:

```yaml
name: Publish to npm

on:
  release:
    types: [published]

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - uses: actions/setup-node@v4
        with:
          node-version: '18'
          registry-url: 'https://registry.npmjs.org'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build
        run: npm run build
      
      - name: Publish to npm
        run: npm publish --access public
        env:
          NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}
```

**Setup**:
1. Generate npm token: https://www.npmjs.com/settings/[username]/tokens
2. Add token to GitHub repository secrets as `NPM_TOKEN`
3. Create a GitHub release to trigger publishing

### Beta/Alpha Releases

For testing before stable release:

```bash
# Publish beta version
npm version prerelease --preid=beta
# Creates: 0.1.0 -> 0.1.1-beta.0
npm publish --tag beta

# Install beta version
npx @creative-tim/ui@beta add button

# Publish alpha version
npm version prerelease --preid=alpha
npm publish --tag alpha
```

### Post-Publishing Checklist

- [ ] Verify package on npmjs.com: `https://www.npmjs.com/package/@creative-tim/ui`
- [ ] Test installation: `npx @creative-tim/ui@latest --version`
- [ ] Update documentation with new version
- [ ] Create GitHub release with changelog
- [ ] Announce on social media/blog
- [ ] Monitor npm download stats

### Version Management Best Practices

1. **Use Changesets** (Recommended for monorepos)
   ```bash
   npm install -D @changesets/cli
   npx changeset init
   
   # Create a changeset
   npx changeset
   
   # Version packages
   npx changeset version
   
   # Publish
   npx changeset publish
   ```

2. **Keep a CHANGELOG.md**
   - Document all changes for each version
   - Follow [Keep a Changelog](https://keepachangelog.com/) format

3. **Git Tags**
   ```bash
   # Tag releases
   git tag -a v0.1.0 -m "Release v0.1.0"
   git push origin v0.1.0
   ```

### Monitoring & Analytics

- **npm stats**: https://npm-stat.com/charts.html?package=@creative-tim/ui
- **npm trends**: https://npmtrends.com/@creative-tim/ui
- **Bundle size**: https://bundlephobia.com/package/@creative-tim/ui

### Troubleshooting

**Error: 403 Forbidden**
```bash
# Check if package name is available
npm search @creative-tim/ui

# Verify authentication
npm whoami

# Re-login
npm logout
npm login
```

**Error: Version already exists**
```bash
# Bump version
npm version patch
npm publish
```

**Error: Organization not found**
```bash
# Create organization on npmjs.com first
# Or publish without organization scope
```

