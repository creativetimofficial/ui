# Publishing Guide for @creative-tim/ui

## Package Naming Structure

### npm Package Name
- **Package**: `@creative-tim/ui`
- **Organization**: `@creative-tim`
- **Repository**: `ui`

### Binary Names (what gets installed)
- Primary: `creative-tim-ui`
- Alias: `creative-tim`

### How Users Run It
```bash
# Recommended (uses package name)
npx @creative-tim/ui@latest add button

# Alternative (using binary name)
npx creative-tim-ui@latest add button
npx creative-tim@latest add button
```

All three work, but `npx @creative-tim/ui@latest` is the recommended format for branding consistency.

## Pre-Publishing Checklist

### 1. Verify Package Information
```bash
cd /Users/alexandrupaduraru/Developer/ct-ui/packages/cli
cat package.json | grep -A 3 "name\|version\|author"
```

Should show:
- `"name": "@creative-tim/ui"`
- `"version": "0.1.0-beta.0"`
- `"author"`: Creative Tim details

### 2. Build the Package
```bash
cd /Users/alexandrupaduraru/Developer/ct-ui/packages/cli
npm run build
```

### 3. Test Locally
```bash
# Test commands
node dist/index.js --version  # Should show: 0.1.0-beta.0
node dist/index.js --help     # Should show Creative Tim branding
node dist/index.js init --help
node dist/index.js add --help
```

### 4. Create Package Tarball
```bash
npm pack
# Creates: creative-tim-ui-0.1.0-beta.0.tgz
```

### 5. Test Installation (Optional but Recommended)
```bash
# In a test directory
cd /tmp
mkdir test-cli && cd test-cli
npm install /Users/alexandrupaduraru/Developer/ct-ui/packages/cli/creative-tim-ui-0.1.0-beta.0.tgz

# Test it
npx @creative-tim/ui --version
npx @creative-tim/ui init
```

## Publishing Commands

### Login to npm (If not already logged in)
```bash
npm whoami
# If not logged in:
npm login
```

### Publish Beta Version
```bash
cd /Users/alexandrupaduraru/Developer/ct-ui/packages/cli

# Ensure you're on the right version
npm version 0.1.0-beta.0 --no-git-tag-version

# Build
npm run build

# Publish with beta tag
npm publish --access public --tag beta
```

### Verify Publication
```bash
# Check on npm
npm view @creative-tim/ui

# View beta version
npm view @creative-tim/ui@beta

# Test installation from npm
npx @creative-tim/ui@beta --version
npx @creative-tim/ui@beta init --help
```

## Post-Publishing

### 1. Test from npm
```bash
# In a fresh Next.js project
cd /tmp
npx create-next-app@latest test-app
cd test-app

# Install components using the CLI
npx @creative-tim/ui@beta init
npx @creative-tim/ui@beta add button
npx @creative-tim/ui@beta add software-purchase-01
```

### 2. Update Documentation
- Update website with installation instructions
- Announce on social media
- Update README with npm badge

### 3. Monitor
- Check npm page: https://www.npmjs.com/package/@creative-tim/ui
- Monitor downloads: https://npm-stat.com/charts.html?package=@creative-tim/ui
- Watch for issues: https://github.com/creativetimofficial/ui/issues

## Version Management

### Publishing More Beta Versions
```bash
# Increment beta version
npm version prerelease --preid=beta
# 0.1.0-beta.0 → 0.1.0-beta.1

npm run build
npm publish --access public --tag beta
```

### Publishing Stable Version
```bash
# Remove beta tag
npm version 0.1.0 --no-git-tag-version

npm run build
npm publish --access public

# Now users can install with:
npx @creative-tim/ui@latest add button
```

## Troubleshooting

### Error: 403 Forbidden
```bash
# Check if package name is available
npm search @creative-tim/ui

# Verify you're logged in
npm whoami

# Check organization access
# Make sure you have publish rights to @creative-tim org
```

### Error: Version already exists
```bash
# Increment version
npm version patch
npm publish --access public --tag beta
```

### Error: Organization not found
```bash
# Create @creative-tim organization at:
# https://www.npmjs.com/org/create

# Or publish without scope (not recommended):
# Change package name to "creative-tim-ui" (no @scope)
```

## Important URLs

- **npm Package**: https://www.npmjs.com/package/@creative-tim/ui
- **GitHub Repo**: https://github.com/creativetimofficial/ui
- **Website**: https://creative-tim.com/ui
- **Issues**: https://github.com/creativetimofficial/ui/issues

