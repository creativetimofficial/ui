# Creative Tim UI Component Library

## Overview
Creative Tim UI is a comprehensive React component library built on top of shadcn/ui. It's designed for building audio and agentic applications, functioning as a monorepo that provides pre-built, customizable components such as orbs, waveforms, voice agents, audio players, and conversation interfaces. The project serves as both a documentation website and a component registry, allowing developers to install components via CLI. The library prioritizes developer experience through streamlined installation, extensive documentation, and ready-to-use examples, with components designed for easy integration and full customization via Tailwind CSS and TypeScript.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
- **Build System**: Turborepo for orchestration.
- **Package Manager**: pnpm with workspace support.
- **Workspaces**: `apps/*` (documentation site) and `packages/*`.

### Frontend Architecture
- **Framework**: Next.js 13+ with App Router and React Server Components.
- **Styling**: Tailwind CSS v3.4 with custom themes and CSS variables.
- **Component Philosophy**: Radix UI primitives styled using shadcn/ui patterns.
- **TypeScript**: Strict mode enabled.
- **Font System**: Custom fonts (Geist, Waldenburg) with variable font support.

### Component Registry System
- **Schema Validation**: Zod schemas for type-safe definitions.
- **Dynamic Component Loading**: React.lazy for code-splitting.
- **File Structure**: Components organized by type (ui, blocks, examples, hooks, lib).
- **Installation Mechanism**: JSON-based registry at `/r/*.json` endpoints for CLI consumption.

### Documentation System
- **Content Management**: Fumadocs MDX with frontmatter schema.
- **Code Highlighting**: Shiki with custom transformers.
- **Syntax Support**: Automatic package manager translation.
- **Navigation**: Auto-generated table of contents.

### Theme System
- **Multi-theme Support**: CSS variable-based theming.
- **Dark Mode**: next-themes integration.
- **Theme Persistence**: LocalStorage-based.
- **Responsive Metadata**: Dynamic meta theme-color updates.

### State Management
- **Client State**: Jotai for atomic state management.
- **URL State**: Next.js router for navigation and search parameters.
- **Theme State**: Context API for active theme provider.

### Build & Registry System
- **Registry Builder**: Custom TypeScript scripts to scan components, generate registry JSON, extract metadata, and rewrite import paths.
- **Code Transformation**: ts-morph for AST manipulation.

### Analytics & Tracking
- **Analytics Provider**: Vercel Analytics.
- **Event System**: Custom tracking for component installs, views, and interactions.
- **Middleware Tracking**: Server-side tracking for registry API requests.

### Private Registry & PRO Features
- **Authentication System**: API key validation for private component access via `/api/r/[name]/route.ts`.
- **Authentication Methods**: Supports Bearer token, X-API-Key header, query parameter, and environment variable (`API_KEY`).
- **PRO Component Restrictions**: UI elements (install command, code tab) are disabled for PRO components without appropriate access, displaying upgrade prompts.

## External Dependencies

### Core UI Libraries
- **Radix UI**: Headless UI primitives.
- **shadcn/ui**: Base component patterns.
- **Motion**: Animation library.
- **Three.js + React Three Fiber**: 3D rendering for orb components.

### ElevenLabs Integration
- **@elevenlabs/elevenlabs-js**: Official JavaScript SDK.
- **@elevenlabs/react**: React components and hooks for voice/audio features.

### Development Tools
- **ESLint**: Code quality.
- **Prettier**: Code formatting.
- **Commitlint**: Conventional commits.
- **Changesets**: Version management and changelog generation.
- **Puppeteer**: Headless browser for component screenshot capture.

### Build Pipeline
- **TypeScript**: Type checking.
- **Vite**: Testing infrastructure via Vitest.
- **TSX**: TypeScript execution for build scripts.
- **PostCSS + Autoprefixer**: CSS processing.

### Content Processing
- **MDX**: fumadocs-mdx for documentation.
- **Rehype**: HTML transformations.
- **Shiki**: Syntax highlighting.

### Third-party Services
- **Vercel**: Analytics and deployment.
- **GitHub**: Version control.
- **Upstash Redis**: Caching layer.

### Media & Assets
- **next/image**: Optimized image delivery.
- **Lucide Icons**: Icon library.
- **Tabler Icons**: Additional icon set.

### Form & Data
- **React Hook Form**: Form state management.
- **Zod**: Runtime type validation.
- **@hookform/resolvers**: Zod integration for form validation.

### Utility Libraries
- **clsx + tailwind-merge**: Conditional className composition.
- **date-fns**: Date manipulation.
- **class-variance-authority**: Variant-based component APIs.

## Recent Changes

### Ecommerce Sections Block (October 15, 2025)
- **New Component**: Added `ecommerce-sections-01` block with YouTube video background and product showcase
- **Features**:
  - YouTube IFrame Player API integration with autoplay, muted, loop support
  - Play/pause controls positioned in top-left corner (circular button)
  - Three horizontal product cards with compact layout:
    - 64x64px product thumbnails on the left
    - Brand name, title, and price in the center
    - Shopping bag and shuffle icons on the right
  - Footer CTA button: "VIEW ALL PRODUCTS" with outline style
  - Responsive grid layout (1 column mobile, 2 columns tablet, 3 columns desktop)
  - Gradient overlay for better text readability
  - Clean white cards with rounded corners
- **Video Source**: YouTube video (YCIuEU2y8XI) embedded via YouTube IFrame Player API
- **Registry Integration**: Successfully added to registry-blocks.ts under ecommerce category
- **Dependencies**: Button (shadcn UI component), YouTube IFrame Player API
- **Use Case**: Perfect for showcasing capsule collections, seasonal lookbooks, or featured product campaigns with immersive YouTube video backgrounds