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
## Recent Enhancements (October 16, 2025)

### FAQs Grid Enhancement
- **Enhanced faqs-grid-01 Block**: Complete UI redesign with contextual icons and improved visual hierarchy
- **Design Improvements**:
  - **Contextual Icons**: Each FAQ has a unique icon (ShoppingCart, CreditCard, Truck, Store, Package, RefreshCw)
  - **Icon Integration**: Icons in circular primary/10 background badges (h-12 w-12)
  - **Enhanced Cards**: Proper borders with hover effects (shadow-lg and border-primary/50)
  - **Better Typography**: Larger 4xl heading, xl question titles with regular weight (not bold)
  - **Improved Content**: Professional, concise answers replacing placeholder text
  - **Visual Hierarchy**: Icon badge at top, question title, then description
  - **Hover Effects**: Smooth transition with shadow and border color change
- **Card Structure**: Icon badge at top, regular weight question title, relaxed leading for descriptions
- **Grid Layout**: 3-column on desktop, 2-column on tablet, single column on mobile
- **New Dependencies**: Multiple lucide-react icons (ShoppingCart, CreditCard, Truck, Store, Package, RefreshCw)

### FAQ Left Title Enhancement
- **Enhanced faq-left-title-01 Block**: Increased padding on question cards for better spacing
- **Padding Update**: Changed from p-2 to p-6 on both CardHeader and CardContent elements
- **Visual Impact**: More spacious, cleaner card layout with better content breathing room

### Contact Sections Enhancement
- **Enhanced contact-sections-03 Block**: Complete UI redesign with modern styling and improved visual hierarchy
- **Design Improvements**:
  - **Enhanced Typography**: Larger 4xl heading, improved text sizes with base labels
  - **Better Form Inputs**: Increased input height (h-11) for better touch targets
  - **Gradient Background**: Dark section now uses gradient-to-br from-gray-900 to-black
  - **Icon Badges**: Contact info icons in circular white/10 background containers (h-10 w-10)
  - **Enhanced Spacing**: Increased padding (p-8 to p-12), better gap spacing (space-y-6)
  - **Social Media Icons**: Circular backgrounds with hover effects (bg-white/10 to bg-white/20)
  - **Improved Button**: Full width on mobile, auto width on desktop with lg size
  - **Enhanced Card**: Added shadow-xl for better elevation
  - **Fixed Message Area**: Set rows={5} and resize-none for consistent textarea
- **Visual Hierarchy**: Better contrast with white icons on dark backgrounds, improved spacing throughout
- **Hover Effects**: Smooth transitions on social media icons with background and text color changes
- **Responsive Design**: Optimized layout with better mobile-to-desktop transitions

### Contact Sections 04 Enhancement
- **Enhanced contact-sections-04 Block**: Modern UI redesign with improved visual hierarchy and interactive elements
- **Design Improvements**:
  - **Enhanced Typography**: Larger 5xl heading with better spacing (mb-6)
  - **Improved Subtitle**: Larger xl text with max-width constraint for better readability
  - **Enhanced Gradient**: Three-stop gradient (from-gray-900 via-gray-800 to-gray-900)
  - **Larger Icons**: Increased icon containers to h-16 w-16 with h-8 w-8 icons
  - **Better Shadows**: Card with shadow-2xl, icon boxes with shadow-lg
  - **Rounded Design**: Rounded-2xl card with rounded-xl icon containers
  - **Hover Effects**: Scale-105 transform on hover with group transitions
  - **Icon Shadow Enhancement**: Icons get shadow-xl on hover
  - **Better Spacing**: Increased vertical spacing (gap-y-12, mb-6, py-12)
  - **Improved Card Elevation**: Deeper card offset (-mt-24) for better depth
- **Typography Updates**: Bold xl titles, base-sized descriptions for better hierarchy
- **Responsive Design**: Optimized grid with lg:grid-cols-4 breakpoint
- **Interactive States**: Group hover effects with smooth transitions

### Contact Sections 04 Background Update
- **Background Image**: Replaced gradient with Unsplash 3D sphere/egg image
- **Image URL**: Modern black 3D sphere design for professional aesthetic
- **Overlay**: Added black/50 overlay to ensure text readability
- **Layout**: Image positioned absolutely with full coverage (object-cover)
