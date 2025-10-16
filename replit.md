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
- **Testimonial Layouts**: Redesigned multi-testimonial grid layout with 5-star ratings, professional avatars, and integrated stats.

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
### Testimonials 03 Stats Bar Update
- **Repositioned Stats**: Moved stats bar from bottom to above testimonials cards for better visual flow
- **Plain Design**: Removed card container (border, background, rounded corners) for cleaner appearance
- **Responsive Dividers**: Vertical dividers only show on desktop (hidden md:block) for better mobile experience
- **Flexible Layout**: flex-wrap layout allows stats to stack on mobile with gap-8 md:gap-12 spacing
- **Visual Hierarchy**: Stats positioned between header and testimonials creates logical content flow

### Testimonials 04 Complete Redesign
- **Enhanced Header Section**:
  - Added centered heading "What Our Users Say" (text-3xl md:text-4xl)
  - Descriptive subtitle "Trusted by thousands of developers and designers worldwide"
  - Increased top section margin (mb-16) for better spacing
- **Circular Avatar Design**:
  - Changed from square to circular avatars with rounded-full (h-24 w-24)
  - Added 4px border around avatars for definition
  - Decorative quote icon badge positioned at bottom-right of avatar
  - Quote icon with primary color and shadow for visual interest
  - Scale animation on hover (group-hover:scale-105)
- **Card Improvements**:
  - Added visible card borders with hover effects (border-border/50 hover:border-border)
  - Shadow animation on hover (hover:shadow-lg)
  - Increased card padding (p-8) for better content breathing room
  - Better gap spacing (gap-8) between cards
- **Typography Enhancements**:
  - Larger name text (text-xl font-semibold)
  - Role text with muted color and proper spacing (mb-6)
  - Quote text with relaxed leading and subtle opacity (text-foreground/80)
  - Better vertical rhythm throughout
- **Star Rating Refinement**:
  - Positioned ratings between name/role and quote for better flow
  - Smaller stars (h-4 w-4) for subtle appearance
  - Updated empty star styling (fill-muted text-muted)
  - All testimonials show 5-star ratings
- **Avatar Images**:
  - Sarah Johnson (Product Designer)
  - Michael Chen (Tech Lead at Stripe)
  - Emma Rodriguez (Frontend Developer)
  - Professional Unsplash images with proper alt text
- **Content Updates**:
  - Professional, realistic testimonial quotes
  - Diverse roles and perspectives
  - Emphasis on component quality, documentation, and production readiness
- **Section Spacing**: Increased py-16 to py-20 for more breathing room

### Testimonials 05 Dark Theme Redesign
- **Enhanced Header Section**:
  - Updated heading to "Trusted by Professionals" (text-3xl md:text-4xl)
  - New subtitle: "Hear what developers and designers say about our component library"
  - Better text hierarchy with white/70 opacity for subtitle
- **Glassmorphism Card Design**:
  - Semi-transparent cards with bg-white/5 and backdrop-blur-sm
  - Subtle borders (border-white/10) with hover effects (hover:border-white/20)
  - Background brightens on hover (hover:bg-white/10)
  - Smooth transitions for all interactive states
- **Avatar Enhancements**:
  - Circular avatars (h-20 w-20) with white/20 border
  - Quote badge with primary color positioned at bottom-right
  - Same professional Unsplash images as testimonials-04:
    - Sarah Johnson (Product Designer)
    - Michael Chen (Tech Lead at Stripe)
    - Emma Rodriguez (Frontend Developer)
- **Typography & Colors**:
  - White text for names (text-white)
  - Muted role text (text-white/60)
  - Quote text with white/80 opacity for readability
  - Increased card padding (p-8) for better spacing
- **Star Rating Refinement**:
  - Positioned between name/role and quote
  - Smaller stars (h-4 w-4) for subtle appearance
  - Yellow filled stars with white/20 for empty stars
  - All testimonials show 5-star ratings
- **Content Updates**:
  - Professional testimonial quotes about component quality
  - Emphasis on design process, documentation, and enterprise use
- **Section Spacing**: Increased py-16 to py-20, mb-20 to mb-16

### Testimonials 06 UI Improvements
- **Enhanced Card Design**:
  - Added visible card border (border-border/50) with shadow-lg for depth
  - Overflow-hidden for cleaner image rendering
  - Professional workspace image from Unsplash
- **Image Section**:
  - Professional workspace photo showing collaboration
  - Full-height image with object-cover (min-h-[500px] on desktop)
  - Responsive grid layout (1 column mobile, 5/7 split desktop)
- **Badge Enhancement**:
  - Added decorative badge with quote icon
  - Primary color scheme with bg-primary/10
  - "Client Testimonial" label in uppercase with tracking-wide
  - Rounded-full design with proper padding
- **Typography Improvements**:
  - Updated heading to "Trusted by Industry Leaders" (text-3xl md:text-4xl)
  - Professional testimonial quote with better line height
  - Larger quote text (text-lg) with relaxed leading
  - Better opacity (text-foreground/80) for hierarchy
- **Star Rating Addition**:
  - 5-star rating display with yellow filled stars (h-5 w-5)
  - Positioned between quote and author for visual flow
  - Clean gap spacing (gap-1)
- **Avatar & Author Section**:
  - Larger avatar (h-14 w-14) with 2px border
  - Professional headshot from Unsplash
  - Author: Sarah Mitchell, VP of Engineering at TechCorp
  - Better spacing with gap-4
- **Content Updates**:
  - Realistic, professional testimonial quote
  - Focus on component quality and development workflow
  - Enterprise-level endorsement
- **Spacing Enhancements**:
  - Section padding increased to py-20
  - Card content padding (p-8 md:p-12 lg:p-16) scales with screen size
  - Better gap spacing (gap-8) in grid
