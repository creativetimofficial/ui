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

### Achievements Section on Home Page (October 16, 2025)
- **Added "Remarkable Achievements" Section**: New stats section below the header on the home page
- **Features**:
  - Centered heading and description
  - 4 achievement cards in responsive grid (1 col mobile, 2 col tablet, 4 col desktop)
  - Each card displays: Lucide icon, large stat number, label, and description
  - Stats showcased:
    - 2.6M+ Community Members (Users icon)
    - 8.6M+ Cumulative Downloads (Download icon)
    - 48,000+ Github Cumulative Stars (Star icon)
    - 280,000+ Monthly NPM Downloads (Package icon)
- **Components Used**: shadcn/ui Card component, Lucide React icons
- **Styling**: Text-left alignment in cards, muted-foreground for icons and descriptions

### Ecommerce Sections Blocks (October 15, 2025)

#### ecommerce-sections-01: Video Spotlight with Product Cards
- **Description**: YouTube video background with horizontal product cards overlay
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
- **Dependencies**: Button (shadcn UI component), YouTube IFrame Player API
- **Use Case**: Perfect for showcasing capsule collections, seasonal lookbooks, or featured product campaigns with immersive video backgrounds

#### ecommerce-sections-02: Luxury Product Detail Page
- **Description**: Premium product detail page with image gallery and comprehensive product information
- **Features**:
  - Vertical thumbnail gallery (6 images) on the left side for desktop
  - Large centered product image viewer
  - Horizontal thumbnail carousel for mobile/tablet (4 visible)
  - Product details section including:
    - "Trending Now" badge
    - Product title: "Artisan Leather Crossbody" with elegant typography
    - Price display ($385.00) with star rating (4.7)
    - Color selector with 6 color swatches (Black, Cream, Forest Green, Gray, Navy Blue, Brown)
    - Product description with features
    - Demo store disclaimer with "Maison Atelier" link
    - Dual CTA buttons: "Add to Cart" (outline) and "Buy it Now" (filled)
    - Feature icons grid: Crossbody style, Premium leather, Adjustable strap, Crafted in France
    - Functional accordion "More Information" section with expandable content (Materials & Care, Dimensions, Shipping & Returns)
  - Responsive layout adapting to mobile, tablet, and desktop
  - Clean, minimal design with neutral color palette
  - All text uses normal casing (not uppercase)
- **Dependencies**: Badge, Button (shadcn UI components)
- **Registry Integration**: Successfully added to registry-blocks.ts under ecommerce category
- **Use Case**: Ideal for luxury fashion brands, high-end product showcases, and premium ecommerce stores requiring detailed product presentation

#### complex-product-description-01: Enhanced with Size Selector (October 15, 2025)
- **Description**: Premium product detail block with complete shopping experience
- **Enhancements**:
  - **Size Selector**: Interactive size options (XS, S, M, L, XL) with active state styling
  - **Visual Design**: Inspired by ecommerce-sections-02 with neutral color palette
  - **"New Arrival" Badge**: Clean badge component at top
  - **Improved Star Ratings**: Using Star icons with proper fill states
  - **Enhanced Color Selector**: 40x40px swatches with ring selection indicator
  - **Feature Icons Grid**: 4-feature 2-column layout (Premium materials, Free shipping, Returns, Warranty)
  - **Interactive Favorite Button**: Heart icon that fills when clicked
  - **Better Accordion**: Cleaner styling with detailed content (Features, Care, Shipping, Warranty)
  - **Vertical Thumbnail Gallery**: Left-side gallery for desktop with better spacing
- **Dependencies**: Badge, Button, Accordion (shadcn UI components)
- **Use Case**: Perfect for fashion ecommerce with size-specific products requiring detailed product information and multiple view angles

#### product-description-01: Dropdown Selectors & 3-Column Features (October 15, 2025)
- **Description**: Enhanced ecommerce product page with dropdown selectors and organized feature display
- **Latest Updates**:
  - **Side-by-Side Dropdowns**: Color and Size dropdowns aligned horizontally on the same line
  - **Size Selector Dropdown**: Numbers (32, 34, 36, 38, 40, 42, 44) instead of buttons
  - **Color Selector Dropdown**: Shows color dot with name in dropdown options (Black, White, Gray, Navy, Brown)
  - **3-Column Feature Layout**: Icons centered at top with text below in white cards
  - **Features Displayed**: Free shipping over $150, Easy 30-day returns, 1-year warranty
- **Core Features**:
  - **Breadcrumb Navigation**: Clean breadcrumb trail with chevron separators (Home > Women > Outerwear > Product)
  - **"Limited Edition" Badge**: Professional badge component for product status
  - **Enhanced Layout**: Better spacing, larger product image (500px), cleaner thumbnail gallery
  - **Star Ratings**: Using Star icons with proper fill states and review count
  - **Interactive Favorite**: Heart button that fills when clicked
  - **Detailed Content**: Product description and key features list with bullet points
  - **Professional Copy**: Water-resistant fabric, premium insulation, adjustable features
  - **Neutral Color Palette**: Consistent neutral-50/900 design
- **Dependencies**: Badge, Button, Select (shadcn UI components)
- **Use Case**: Ideal for luxury fashion ecommerce requiring streamlined product selection with dropdown controls and clear feature presentation