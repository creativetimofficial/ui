# Creative Tim UI Component Library

## Overview
Creative Tim UI is a comprehensive React component library built on top of shadcn/ui, designed for building audio and agentic applications. It functions as a monorepo providing pre-built, customizable components such as orbs, waveforms, voice agents, audio players, and conversation interfaces. The project serves as both a documentation website and a component registry, allowing developers to install components via CLI. The library prioritizes developer experience through a streamlined installation process, extensive documentation, and ready-to-use examples. Components are designed for easy integration with full customization capabilities via Tailwind CSS and TypeScript.

## User Preferences
Preferred communication style: Simple, everyday language.

## System Architecture

### Monorepo Structure
- **Build System**: Turborepo for orchestrating builds.
- **Package Manager**: pnpm with workspace support.
- **Workspaces**: `apps/*` (www documentation site) and `packages/*`.

### Frontend Architecture
- **Framework**: Next.js 13+ with App Router and React Server Components.
- **Styling**: Tailwind CSS v3.4 with custom themes and CSS variables.
- **Component Philosophy**: Radix UI primitives styled using shadcn/ui patterns.
- **TypeScript**: Strict mode enabled.
- **Font System**: Custom fonts (Geist, Waldenburg) with variable font support.

### Component Registry System
- **Schema Validation**: Zod schemas for type-safe component definitions.
- **Dynamic Component Loading**: React.lazy for code-splitting.
- **File Structure**: Components organized by type (ui, blocks, examples, hooks, lib).
- **Installation Mechanism**: JSON-based registry at `/r/*.json` endpoints for CLI consumption.

### Documentation System
- **Content Management**: Fumadocs MDX with frontmatter schema.
- **Code Highlighting**: Shiki with custom transformers.
- **Syntax Support**: Automatic package manager translation (npm/yarn/pnpm/bun).
- **Navigation**: Auto-generated table of contents.

### Theme System
- **Multi-theme Support**: CSS variable-based theming with various color schemes.
- **Dark Mode**: next-themes integration.
- **Theme Persistence**: LocalStorage-based.
- **Responsive Metadata**: Dynamic meta theme-color updates.

### State Management
- **Client State**: Jotai for atomic state management.
- **URL State**: Next.js router for navigation and search parameters.
- **Theme State**: Context API for active theme provider.

### Build & Registry System
- **Registry Builder**: Custom TypeScript scripts (`build-registry.mts`) to scan components, generate registry JSON, extract metadata, and rewrite import paths.
- **Code Transformation**: ts-morph for AST manipulation.

### Analytics & Tracking
- **Analytics Provider**: Vercel Analytics.
- **Event System**: Custom tracking for component installs, views, and interactions.
- **Middleware Tracking**: Server-side tracking for registry API requests.

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

### Modal Blocks Addition (October 14, 2025)
- **New Category**: Added "Modals" category to the component registry (visible at /blocks/modals)
- **Component Conversion**: Created 11 modal blocks using shadcn UI design system
  - modals-01: Alert modal with confirmation input for reset settings
  - modals-02: Edit profile modal with form inputs and preferences
  - modals-03: Invite members modal with team management
  - modals-04: Update product modal with image gallery and form
  - modals-05: Upload files modal with drag and drop
  - modals-06: Publish capsule collection modal with metadata display
  - modals-07: Change collection visibility settings modal
  - modals-08: Disable collection lock rules modal with alert and impact list
  - modals-09: Transfer showroom ownership modal with form fields and warning
  - modals-10: Permanently remove archive modal with effects list
  - modals-11: Confirm vault deletion modal with text input verification
- **Registry Integration**: All modal blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Category Configuration**: Added "Modals" category to registry-categories.ts for blocks page navigation
- **Design Pattern**: Modal blocks using shadcn UI primitives (Dialog, Button, Input, Select, Textarea, Checkbox, Radio Group, Avatar, Dropdown Menu, Card) with responsive layouts
- **Fashion/Collection Focus**: Latest modals (06-11) designed for fashion vault and collection management with confirmation workflows, alerts, and destructive actions
- **Total Registry Items**: Registry now contains 151+ total items (136+ blocks plus UI components, examples, and hooks)

### Testimonial Blocks Addition (October 14, 2025)
- **New Category**: Added "Testimonials" category to the component registry (visible at /blocks/testimonials)
- **Component Conversion**: Migrated 17 testimonial blocks from Material Tailwind to shadcn UI design system
  - testimonials-01: Simple centered testimonials with avatars
  - testimonials-02: Testimonial cards with social proof badges
  - testimonials-03: Testimonial with statistics and metrics
  - testimonials-04: Three column testimonials with star ratings
  - testimonials-05: Dark testimonials with avatar and star ratings
  - testimonials-06: Company logo testimonial with large quote
  - testimonials-07: Interactive testimonials with profile switcher
  - testimonials-08: Light testimonials with star ratings
  - testimonials-09: Customer story with large heading and avatar
  - testimonials-10: Monochromatic testimonials with company logos
  - testimonials-11: Testimonial cards with focus state
  - testimonials-12: Grid layout testimonials with company logos
  - testimonials-13: Dark card testimonial with rounded avatar
  - testimonials-14: Light testimonials with card shadow
  - testimonials-15: Testimonials with submit button
  - testimonials-16: Dark carousel testimonials with navigation
  - testimonials-17: Background image carousel testimonials
- **Registry Integration**: All testimonial blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Category Configuration**: Added "Testimonials" category to registry-categories.ts for blocks page navigation
- **Design Pattern**: Testimonial blocks using shadcn UI primitives (Avatar, Badge, Button, Card) with responsive layouts and interactive features
- **Total Registry Items**: Registry now contains 140+ total items (125+ blocks plus UI components, examples, and hooks)

### Footer Blocks Addition (October 14, 2025)
- **New Category**: Added "Footers" category to the component registry (visible at /blocks/footers)
- **Component Conversion**: Migrated 15 footer blocks from Material Tailwind to shadcn UI design system
  - footers-01: Simple footer with social links
  - footers-02: Footer with navigation links and subscription
  - footers-03: Website footer with CTA
  - footers-04: Simple dark footer with newsletter signup
  - footers-05: Complex dark footer with language/currency selectors
  - footers-06: Advanced light footer with navigation columns
  - footers-07: Simple footer with country selection
  - footers-08: Simple footer with version number badge
  - footers-09: Footer with notification and CTA
  - footers-10: Footer with page links
  - footers-11: Website footer with statement quote
  - footers-12: Website footer with navigation links
  - footers-13: Simple centered website footer with social icons
  - footers-14: Website footer for apps with download buttons
  - footers-15: Website footer with quote
- **Registry Integration**: All footer blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Category Configuration**: Added "Footers" category to registry-categories.ts for blocks page navigation
- **Design Pattern**: Footer blocks using shadcn UI primitives (Button, Badge, Card, Checkbox, Input, Label, Select) with responsive layouts

### CRUD Blocks Addition (October 14, 2025)
- **New Category**: Added "CRUDs" category to the component registry (visible at /blocks/cruds)
- **Component Creation**: Built 3 CRUD form blocks from JSON specifications using shadcn UI components
  - cruds-01: Edit Apparel Item form with product name, brand, price, category (select), and description (textarea)
  - cruds-02: Update Retail Staff Profile form with username, email, and password fields
  - cruds-03: Stylist Account Settings with profile photo upload, personal details, role selection, and permissions
- **Registry Integration**: All CRUD blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Category Configuration**: Added "CRUDs" category to registry-categories.ts for blocks page navigation
- **Design Pattern**: Form-based blocks using shadcn UI primitives (Button, Card, Input, Label, Select, Textarea) with responsive layouts
- **Visual Enhancements**: Applied UX improvements to all CRUD blocks
  - Added descriptive text below card titles for better context (e.g., "Update product information, pricing, and categorization for your fashion inventory")
  - Ensured all Select dropdown components occupy full container width (`className="w-full"`) for consistent form layout

### Web3 Blocks Addition (October 14, 2025)
- **New Category**: Added "Web3" category to the component registry (visible at /blocks/web3)
- **Component Conversion**: Migrated 5 Web3/NFT/Crypto themed blocks from Material Tailwind to shadcn UI design system
  - web3-01: NFT collection preview with pixel art gallery
  - web3-02: NFT creator profile with collection gallery and follow button
  - web3-03: Top crypto auctions with countdown timers and bid information
  - web3-04: Trending NFT collections with gradient overlay cards
  - web3-05: Top NFT creators with time filter and image grids
- **Registry Integration**: All web3 blocks registered in registry-blocks.ts with proper metadata and CLI installation support
- **Category Configuration**: Added "Web3" category to registry-categories.ts for blocks page navigation
- **Design Consistency**: Components use shadcn UI primitives (Avatar, Badge, Button, Card, Select) and Lucide icons for consistency

### Private Registry Authentication (October 14, 2025)
- **Authentication System**: Implemented private component registry following shadcn authentication patterns
- **API Route**: Created `/api/r/[name]/route.ts` for authenticated component access with API key validation
- **Private Components**: Marked testimonials-03 and testimonials-04 as private components requiring API_KEY authentication
- **Middleware Enhancement**: Updated middleware.ts to redirect private component requests to authenticated API route
- **Authentication Methods**: Supports multiple authentication patterns:
  - Bearer token via Authorization header
  - API key via X-API-Key header
  - Query parameter token (?token=)
  - Environment variable (API_KEY in .env.local)
- **Security Features**: 
  - 401 Unauthorized for missing/invalid API keys with helpful error messages
  - Private components served through authenticated endpoint
  - Public components continue to work without authentication
  - Registry metadata includes "private: true" flag in meta object
- **Documentation**: Created comprehensive private-registry.md guide with usage examples, security best practices, and error handling
- **Environment Setup**: Added .env.example with API_KEY configuration template
- **Total Private Components**: 2 components (testimonials-03, testimonials-04) secured with authentication