# Creative Tim UI Component Library

## Overview
Creative Tim UI is a comprehensive React component library built on shadcn/ui, designed for audio and agentic applications. It functions as a monorepo providing customizable components like orbs, waveforms, voice agents, audio players, and conversation interfaces. The project serves as a documentation website and component registry, allowing CLI-based component installation. It emphasizes developer experience through streamlined installation, extensive documentation, and examples, with components designed for easy integration and full customization via Tailwind CSS and TypeScript.

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
- **Font System**: Geist font family with variable font support.

### Component Registry System
- **Schema Validation**: Zod schemas for type-safe definitions.
- **Dynamic Component Loading**: React.lazy for code-splitting.
- **File Structure**: Components organized by type (ui, blocks, examples, hooks, lib).
- **Installation Mechanism**: JSON-based registry at `/r/*.json` endpoints for CLI consumption.

### Documentation System
- **Content Management**: Fumadocs MDX with frontmatter schema.
- **Code Highlighting**: Shiki with custom transformers.
- **Syntax Support**: Automatic package manager translation.

### Theme System
- **Multi-theme Support**: CSS variable-based theming.
- **Dark Mode**: next-themes integration.
- **Theme Persistence**: LocalStorage-based.

### State Management
- **Client State**: Jotai for atomic state management.
- **URL State**: Next.js router for navigation and search parameters.

### Build & Registry System
- **Registry Builder**: Custom TypeScript scripts to scan components, generate registry JSON, extract metadata, and rewrite import paths using ts-morph.

### Analytics & Tracking
- **Analytics Provider**: Vercel Analytics.
- **Event System**: Custom tracking for component installs, views, and interactions.
- **Middleware Tracking**: Server-side tracking for registry API requests.

### Private Registry & PRO Features
- **Authentication System**: API key validation for private component access via `/api/r/[name]/route.ts`.
- **Authentication Methods**: Supports Bearer token, X-API-Key header, query parameter, and environment variable (`API_KEY`).
- **PRO Component Restrictions**: UI elements (install command, code tab) are disabled for PRO components without appropriate access.

### UI/UX Decisions and Features
- **Ecommerce Blocks**: Includes enhanced grid layouts with full-size images, overlay designs, glass-morphism effects, and hover animations. Features like video spotlights with product cards and luxury product detail pages with comprehensive information and size/color selectors.
- **Navbar Design**: Sleek, dark, rounded pill-shaped navigation bar with search, GitHub link, and theme switcher.
- **Examples Preview Section**: Dynamic preview of component examples categorized by Web 3.0, Application & Admin UI, Marketing & Presentation, Content UI, and Ecommerce UI, displayed in a responsive grid.
- **Achievements Section**: A stats section with community members, cumulative downloads, GitHub stars, and monthly NPM downloads, using Lucide icons and shadcn/ui Card components.

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
- **Changesets**: Version management.
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
- **YouTube IFrame Player API**: For video embedding.

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

### Digital Product Overview Enhancement (October 16, 2025)
- **Enhanced digital-product-overview-01 Block**: Modern UI/UX redesign with improved visual hierarchy
- **Image Integration**: Added Creative Tim header thumbnail image with hover effects
- **Design Improvements**:
  - **Enhanced Product Image**: Rounded-2xl container with shadow, hover scale effect (105%), gradient overlay on hover
  - **Better Title Section**: Larger heading (3xl) with "Best Seller" badge, improved description text
  - **Stats Bar**: Consolidated ratings (4.9/5 stars) and sales (1,234) in a single highlighted bar with separator
  - **Plan Cards Redesign**: Card-style version selectors with borders, hover effects, and "Popular" badge
  - **Improved Typography**: Better font hierarchy, clearer descriptions for each version
  - **Pricing Display**: Larger price (2xl) with "one-time" label for clarity
  - **Enhanced Buttons**: Icons added (ShoppingCart, Eye) for better visual cues
  - **Modern Spacing**: Improved gaps and padding throughout
- **New Components**: Badge component added for "Best Seller" and "Popular" labels
- **Visual Effects**: Smooth transitions, hover states, and modern rounded corners throughout

### Grid Ecommerce Block Enhancement (October 16, 2025)
- **Enhanced grid-ecommerce-01 Block**: Redesigned with full-size images and overlaid content
- **Design Improvements**:
  - **Full-size Images**: Images now fill entire card area (h-96) with no padding
  - **Overlay Design**: Text and CTAs positioned over images with gradient overlay
  - **Gradient Effects**: Dark gradient from bottom to top for better text readability
  - **White Text Styling**: All text converted to white for contrast against images
  - **Enhanced Buttons**: Glass-morphism effect buttons with backdrop blur
  - **Hover Animations**: Image scale effect (105%) and shadow transitions on hover
  - **Featured Card**: Large horizontal card with split layout (image + content overlay)
- **Modern Effects**: Smooth transitions, hover states, and backdrop blur effects
