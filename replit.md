# Creative Tim UI Component Library

## Overview

Creative Tim UI is a comprehensive React component library built on top of shadcn/ui, specifically designed for building audio and agentic applications. The project is a monorepo that provides pre-built, customizable components including orbs, waveforms, voice agents, audio players, and conversation interfaces. It serves as both a documentation website and a component registry that developers can install via CLI.

The library emphasizes developer experience with a streamlined installation process, comprehensive documentation, and ready-to-use examples. Components are designed to be copy-paste friendly while maintaining full customization capabilities through Tailwind CSS and TypeScript.

## User Preferences

Preferred communication style: Simple, everyday language.

## Recent Changes

### Replit Migration (October 13, 2025)
- **Platform Migration**: Successfully migrated from Vercel to Replit
- **Port Configuration**: Updated dev and start scripts to use port 5000 with 0.0.0.0 binding for Replit compatibility
- **Workflow Setup**: Configured development workflow to run Next.js server from `apps/www` directory
- **Deployment**: Configured autoscale deployment with build and start commands targeting the monorepo structure
- **Environment Variables**: ELEVENLABS_API_KEY configured for voice functionality
- **Known Warnings**: Cross-origin warnings may appear in Next.js 15.3.1 logs but don't affect functionality (future Next.js versions will require allowedDevOrigins configuration)

### Billing Blocks Addition (October 13, 2025)
- **New Category**: Added "Billing" category to the component registry (visible at /blocks/billing)
- **Component Conversion**: Migrated 5 billing blocks from Material Tailwind to shadcn UI design system
  - billing-information-01: Billing information management form
  - card-display-01: Credit card display component
  - payment-method-01: Payment method selection interface
  - transaction-history-01: Transaction history table with filtering
  - invoices-01: Invoices management with download functionality
- **Registry Integration**: All billing blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Design Consistency**: Components now use shadcn UI primitives (Card, Table, Button, Input, Select) for consistency with the rest of the library

### Blog Sections Addition (October 13, 2025)
- **New Category**: Added "Blog Sections" category to the component registry (visible at /blocks/blog-sections)
- **Component Conversion**: Migrated 6 blog section blocks from Material Tailwind to shadcn UI design system
  - simple-blog-content-01: Simple blog content cards with author avatars
  - blog-cards-layout-01: Blog cards grid with "View More" button
  - blog-post-preview-tags-01: Blog posts with tag badges
  - highlighted-blog-posts-01: Highlighted blog posts with icons and image overlays
  - blog-rectangular-images-01: Blog posts with rectangular images and author info
  - large-blog-preview-01: Large hero-style blog post preview
- **Registry Integration**: All blog section blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Design Consistency**: Components use shadcn UI primitives (Avatar, Badge, Button, Card) and Lucide icons for consistency

### Ecommerce Blocks Addition (October 13, 2025)
- **New Category**: Added "Ecommerce" category to the component registry (visible at /blocks/ecommerce)
- **Component Conversion**: Migrated 14 ecommerce blocks from Material Tailwind to shadcn UI design system
  - simple-product-details-01: Simple product details grid with cards
  - grid-ecommerce-01: Product grid with filtering options
  - promotional-cards-01: Promotional product cards
  - order-history-01: Order history table with status badges
  - empty-shopping-cart-01: Empty cart state with illustration
  - digital-product-overview-01: Digital product with plan selection using radio groups
  - product-description-01: Product page with image gallery and size selection
  - dark-product-overview-01: Dark themed product overview with tabs
  - shopping-cart-01: Shopping cart with order summary and checkout
  - checkout-01: Checkout form with shipping and payment details
  - complex-product-description-01: Product description with accordion sections
  - interactive-product-preview-01: Interactive room preview with product overlay
  - order-details-01: Order details page with timeline and delivery tracking
  - product-details-01: Product details with image carousel navigation
- **Registry Integration**: All ecommerce blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Design Consistency**: Components use shadcn UI primitives (Button, Card, Input, Select, Checkbox, RadioGroup, Tabs, Accordion) and Lucide icons for consistency

### CLI Rebranding (October 13, 2025)
- **Package Name Change**: Rebranded CLI from `@elevenlabs/agents-cli` to `@creative-tim/ui`
- **Documentation Updates**: Updated all references across README, MDX docs, command-menu, and block-viewer components
- **CLI Location**: The CLI package is external to this repository and needs to be created/forked separately
- **Installation Command**: Components now install via `npx @creative-tim/ui@latest components add <component-name>`

### FAQs Blocks Addition (October 14, 2025)
- **New Category**: Added "FAQs" category to the component registry (visible at /blocks/faqs)
- **Component Conversion**: Migrated 6 FAQ blocks from Material Tailwind to shadcn UI design system
  - simple-faq-01: Simple FAQ with dividers (no accordion)
  - faqs-list-01: FAQ list with accordion component for expand/collapse
  - faq-left-title-01: FAQ with left-aligned title and card grid layout
  - faqs-grid-cta-01: FAQ grid with CTA section at the bottom
  - faqs-cards-icons-01: FAQ cards with Lucide icons and CTA
  - faqs-grid-01: Simple FAQ grid layout with ghost cards
- **Registry Integration**: All FAQ blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Design Consistency**: Components use shadcn UI primitives (Accordion, Card, Button) and Lucide icons (ShoppingCart, CreditCard, Users) for consistency

### Complete Rebranding from ElevenLabs to Creative Tim (October 14, 2025)
- **Homepage Branding**: Updated homepage title and heading from "ElevenLabs UI" to "Creative Tim UI"
- **Registry Folder**: Renamed folder from `apps/www/registry/elevenlabs-ui` to `apps/www/registry/creative-tim-ui`
- **Import Paths**: Updated all 141+ import paths from `@/registry/elevenlabs-ui` to `@/registry/creative-tim-ui` across TypeScript, TSX, and MDX files
- **GitHub Repository**: Updated all references from `github.com/elevenlabs/ui` to `github.com/creativetimofficial/ui`
- **Twitter/Social**: Changed Twitter creator handle from `@elevenlabsio` to `@creativetim`
- **Documentation Updates**: 
  - Updated all MDX documentation files (setup.mdx, troubleshooting.mdx, index.mdx, component docs)
  - Changed component descriptions from "ElevenLabs agents" to "voice agents" for platform-agnostic language
  - Updated docs sidebar CTA from "Deploy with ElevenLabs" to "Deploy with Creative Tim"
- **CLI Commands**: Updated block-viewer to show correct shadcn CLI URL (`ui.creative-tim.com`)
- **Site Configuration**: Updated footer, site config, and metadata throughout the application
- **Preserved Dependencies**: Kept @elevenlabs/* npm packages intact as they are external audio processing dependencies
- **Build System**: Successfully rebuilt registry and restarted server with all changes applied

## System Architecture

### Monorepo Structure
- **Build System**: Turborepo for orchestrating builds across workspaces
- **Package Manager**: pnpm with workspace support for managing dependencies
- **Workspaces**: Separated into `apps/*` (www documentation site) and `packages/*`

### Frontend Architecture
- **Framework**: Next.js 13+ with App Router and React Server Components
- **Styling**: Tailwind CSS v3.4 with custom theme system and CSS variables
- **Component Philosophy**: Radix UI primitives wrapped with custom styling, following shadcn/ui patterns
- **TypeScript**: Strict mode enabled across the codebase
- **Font System**: Custom fonts (Geist, Waldenburg) with variable font support

### Component Registry System
- **Schema Validation**: Zod schemas (`registryItemSchema`) for type-safe component definitions
- **Dynamic Component Loading**: React.lazy for code-splitting and on-demand loading
- **File Structure**: Components organized by type (ui, blocks, examples, hooks, lib)
- **Installation Mechanism**: JSON-based registry served at `/r/*.json` endpoints for CLI consumption

### Documentation System
- **Content Management**: Fumadocs MDX for documentation with frontmatter schema
- **Code Highlighting**: Shiki with custom transformers for syntax highlighting
- **Syntax Support**: Automatic package manager translation (npm/yarn/pnpm/bun) in code blocks
- **Navigation**: Auto-generated table of contents with intersection observer for active section tracking

### Theme System
- **Multi-theme Support**: CSS variable-based theming with multiple color schemes (default, scaled, mono, blue, green, amber, rose, purple)
- **Dark Mode**: next-themes integration with system preference detection
- **Theme Persistence**: LocalStorage-based theme state management
- **Responsive Metadata**: Dynamic meta theme-color updates based on active theme

### State Management
- **Client State**: Jotai for atomic state management (config, layout preferences)
- **URL State**: Next.js router for navigation and search parameters
- **Theme State**: Context API for active theme provider

### Build & Registry System
- **Registry Builder**: Custom TypeScript scripts (`build-registry.mts`) that:
  - Scans component files and generates registry JSON
  - Extracts dependencies and metadata
  - Creates dynamic index with lazy-loaded components
  - Rewrites import paths for portability
- **Code Transformation**: ts-morph for AST manipulation and import rewriting
- **File Processing**: Validates and processes component files through Zod schemas

### Analytics & Tracking
- **Analytics Provider**: Vercel Analytics for event tracking
- **Event System**: Custom event tracking for component installs, views, and interactions
- **Middleware Tracking**: Server-side tracking for registry API requests

## External Dependencies

### Core UI Libraries
- **Radix UI**: Complete set of headless UI primitives (@radix-ui/react-*)
- **shadcn/ui**: Base component patterns and schema definitions
- **Motion**: Animation library for interactive components
- **Three.js + React Three Fiber**: 3D rendering for orb components (@react-three/fiber, @react-three/drei)

### ElevenLabs Integration
- **@elevenlabs/elevenlabs-js**: Official JavaScript SDK for audio processing
- **@elevenlabs/react**: React-specific components and hooks for voice/audio features

### Development Tools
- **ESLint**: Next.js config with Tailwind plugin for code quality
- **Prettier**: Code formatting with import sorting plugin
- **Commitlint**: Conventional commits enforcement
- **Changesets**: Version management and changelog generation
- **Puppeteer**: Headless browser for component screenshot capture

### Build Pipeline
- **TypeScript**: Type checking with strict mode
- **Vite**: Testing infrastructure via Vitest
- **TSX**: TypeScript execution for build scripts
- **PostCSS + Autoprefixer**: CSS processing

### Content Processing
- **MDX**: fumadocs-mdx for documentation content
- **Rehype**: HTML transformations for code blocks and components
- **Shiki**: Syntax highlighting with dual theme support (light/dark)

### Third-party Services
- **Vercel**: Analytics and deployment platform
- **GitHub**: Version control and package registry
- **Upstash Redis**: Caching layer (REST API via environment variables)

### Media & Assets
- **next/image**: Optimized image delivery
- **Lucide Icons**: Icon library for UI components
- **Tabler Icons**: Additional icon set

### Form & Data
- **React Hook Form**: Form state management
- **Zod**: Runtime type validation and schema definitions
- **@hookform/resolvers**: Zod integration for form validation

### Utility Libraries
- **clsx + tailwind-merge**: Conditional className composition
- **date-fns**: Date manipulation and formatting
- **class-variance-authority**: Variant-based component APIs