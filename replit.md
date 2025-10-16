# Creative Tim UI Component Library

## Overview
Creative Tim UI is a comprehensive React component library built on shadcn/ui, designed for audio and agentic applications. It functions as a monorepo providing customizable components like orbs, waveforms, voice agents, audio players, and conversation interfaces. The project serves as a documentation website and component registry, allowing CLI-based component installation. It emphasizes developer experience through streamlined installation, extensive documentation, and examples, with components designed for easy integration and full customization via Tailwind CSS and TypeScript. The project aims to provide a rich set of UI/UX for ecommerce, marketing, and application interfaces, with a strong focus on modern design trends and user interaction.

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
- **Installation Mechanism**: JSON-based registry at `/r/*.json` endpoints for CLI consumption.

### Documentation System
- **Content Management**: Fumadocs MDX with frontmatter schema.
- **Code Highlighting**: Shiki with custom transformers.

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
- **Authentication System**: API key validation for private component access.
- **Authentication Methods**: Supports Bearer token, X-API-Key header, query parameter, and environment variable (`API_KEY`).
- **PRO Component Restrictions**: UI elements (install command, code tab) are disabled for PRO components without appropriate access.

### UI/UX Decisions and Features
- **Ecommerce Blocks**: Enhanced grid layouts, video spotlights, luxury product detail pages, redesigned shopping cart, dark product overviews, and grid ecommerce with modern photography.
- **Navbar Design**: Sleek, dark, rounded pill-shaped navigation with search, GitHub link, and theme switcher.
- **Examples Preview Section**: Dynamic preview of component examples categorized by Web 3.0, Application & Admin UI, Marketing & Presentation, Content UI, and Ecommerce UI.
- **Achievements Section**: Stats section with community members, downloads, GitHub stars, and NPM downloads.
- **Enhanced Interactive Elements**: Interactive size and color selectors, wishlist toggles, accordion sections, and carousel pagination with smooth transitions.
- **Modern Styling**: Incorporates professional typography, improved visual hierarchy, glass-morphism effects, and hover animations across various components.
- **Responsive Design**: All UI components are optimized for mobile, tablet, and desktop viewing.

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
### Footers 03 Font Weight Update
- **Regular Font Weight**: Changed Home, About Us, Blog, and Service links from font-semibold to regular (default) weight
- **Visual Impact**: Lighter, cleaner appearance for footer navigation
- **Maintained**: Copyright text and Sign in button remain unchanged

### Footers 04 Font Weight Update
- **Regular Font Weight**: Changed About Us, Careers, Press, Blog, Pricing links from font-medium to regular (default) weight
- **Copyright Text**: Changed "All rights reserved. Copyright..." from font-medium to regular weight
- **Visual Impact**: Lighter, cleaner appearance for footer navigation and copyright text
- **Maintained**: "Creative Tim" branding and social media icons remain unchanged

### Footers 05 Font Weight Update
- **Regular Font Weight**: Changed all link texts from font-medium to regular (default) weight
- **Updated Sections**: Company, Pages, Legal, and Resources link items
- **Already Regular**: "The latest news..." text and "All rights reserved..." text were already regular weight
- **Visual Impact**: Lighter, cleaner appearance for footer navigation links
- **Maintained**: Section headings remain font-semibold for hierarchy

### Footers 06 Font Weight Update
- **Regular Font Weight**: Changed all link texts from font-medium to regular (default) weight
- **Updated Sections**: Company, Pages, Legal, and Resources link items
- **Already Regular**: Copyright text "© 2025 Creative Tim. All Rights Reserved." was already regular weight
- **Visual Impact**: Lighter, cleaner appearance for footer navigation links
- **Maintained**: Section headings remain font-semibold, brand name "Creative Tim" remains font-semibold

### Footers 11 Font Weight Update
- **Regular Font Weight**: Changed all link texts from font-medium to regular (default) weight
- **Updated Sections**: Company, Pages, and Legal link items
- **Already Regular**: Quote text and copyright text were already regular weight
- **Visual Impact**: Lighter, cleaner appearance for footer navigation links
- **Maintained**: Section headings remain font-semibold, brand name "Creative Tim" remains font-semibold

### Footers 14 UI Improvements
- **Typography Hierarchy**: Increased brand name to text-2xl for better prominence
- **Regular Font Weight**: Changed navigation links from font-semibold to regular with hover transitions
- **Improved Layout**: Changed from flex to grid layout (lg:grid-cols-2) for better responsiveness
- **Enhanced Spacing**: Increased top padding from pt-16 to pt-20, adjusted gaps (gap-12 lg:gap-8)
- **Official-Style App Buttons**: 
  - Black backgrounds (bg-black) with no borders (border-0) for sleek appearance
  - More rounded corners (rounded-xl) for modern look
  - "GET IT ON" uppercase text for Google Play, "Download on the" uppercase for App Store
  - Larger store names (text-xl font-semibold) with tight leading
  - Small uppercase labels (text-[10px] font-normal uppercase tracking-wide)
  - Enhanced hover states (hover:bg-white/10)
  - Large prominent icons (h-14 w-14) for better visibility
  - Increased padding (py-4, gap-4) for better button proportions
  - Responsive grid layout (sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2)
- **Bottom Section**: Improved footer bottom layout with flex-col on mobile, flex-row on desktop, better order management (order-1/order-2)
- **Visual Refinement**: Added transition-colors to links, "Get the App" title now text-white, improved gap spacing between links (gap-x-8)
