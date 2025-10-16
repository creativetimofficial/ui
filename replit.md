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
### Testimonials 17 UI Improvements with Background Image
- **New Background Image**:
  - Added Unsplash background: cosmic/space-themed image
  - URL: https://images.unsplash.com/photo-1638438134099-a91e5373aaf0
  - Gradient overlay with from-black/80 to-black/60 for better text readability
  - Added backdrop-blur-sm for subtle blur effect
- **Enhanced Typography**:
  - Added decorative Quote icon (h-12 w-12) with white/30 opacity
  - Larger quote text (text-xl md:text-2xl) with relaxed leading
  - Improved name/role layout with bullet separator on desktop
  - Better text hierarchy with font-semibold name and muted role
- **Logo Card Enhancement**:
  - Logo wrapped in glassmorphism container (bg-white/10 with backdrop-blur)
  - Rounded corners (rounded-xl) with padding (p-8)
  - Centered display for better visual balance
  - Larger logo size (h-16 md:h-20)
- **Improved Navigation Dots**:
  - Active dot expands horizontally (w-8) for better visibility
  - Inactive dots are circular (w-2 h-2) with hover states
  - Better spacing (gap-3) and transitions
  - Added aria-labels for accessibility
- **Enhanced Arrow Buttons**:
  - Larger icons (h-8 w-8) for better clickability
  - Improved hover states (hover:bg-white/20)
  - Better positioning (left-4, right-4)
  - Added aria-labels for accessibility
- **Card Improvements**:
  - Increased border radius to rounded-2xl for modern look
  - Better padding (p-6, px-6 py-12 md:px-12 md:py-16)
  - Overflow hidden for clean background display
- **Section Spacing**: Increased py-16 to py-20 for more breathing room
- **Images Preserved**: Netflix and Coinbase logos kept as requested

### Testimonials 07 Content Updates
- **Updated Avatars**: Replaced with professional Unsplash images from testimonials-04
  - Sarah Johnson (Product Designer)
  - Michael Chen (Tech Lead at Stripe)
  - Emma Rodriguez (Frontend Developer)
- **Improved Testimonial Text**: Updated quotes to focus on component library benefits
  - Component quality and design workflow acceleration
  - Documentation, TypeScript support, and enterprise features
  - Production-ready components and cohesive design system
- **Enhanced Title**: Changed from "Work with us" to "What Developers Say"
- **Consistent Design Pattern**: Aligns with other testimonial blocks using professional avatars and relevant content

### Testimonials 09 Content Updates
- **Updated Left Image**: Replaced with professional Unsplash image from Sarah Johnson
  - URL: https://images.unsplash.com/photo-1716662318479-a9c0f1cd1a0e (professional woman in business attire)
- **Improved Headline**: Changed from "Awesome services! Fast and secure." to "Revolutionary component library for modern design"
- **Enhanced Testimonial Text**: Updated quote to focus on component library benefits
  - Design team transformation and workflow acceleration
  - Attention to detail and seamless integration
  - Production-ready components with exceptional quality
- **Updated Attribution**: Changed to "Sarah Johnson, Design Director, Spotify"
- **Spotify Logo Preserved**: Kept the original Spotify logo as requested
- **Consistent Design Pattern**: Aligns with component library focus across all testimonial blocks

### Testimonials 01 Content Updates
- **Updated Avatars**: Replaced with professional Unsplash images from testimonials-04
  - Sarah Johnson (Product Designer)
  - Michael Chen (Tech Lead at Stripe)
  - Emma Rodriguez (Frontend Developer)
- **Improved Testimonial Text**: Updated quotes to focus on component library benefits
  - Component quality and design workflow acceleration
  - Documentation, TypeScript support, and enterprise features
  - Production-ready components and cohesive design system
- **Consistent Design Pattern**: Aligns with other testimonial blocks using professional avatars and relevant content

### Card Display 01 UI Improvements
- **Enhanced Visual Design**:
  - Dark card: Solid black background for clean, modern look
  - Light card: Clean white with improved shadow for elevation
  - Added subtle gradient overlay that appears on hover
- **Chip Card Element**: 
  - Golden gradient chip card visual (yellow-400 to yellow-600)
  - Realistic appearance with gradient overlay effect
  - Smaller size (h-10 w-14) for balanced proportions
- **Improved Wifi Icon**:
  - Wrapped in rounded container with subtle background
  - Dark card: white/10 background
  - Light card: gray-100 background
- **Better Typography**:
  - Compact card numbers (text-lg) with tracking (0.2em) - fits on single row
  - Bold font weight for card numbers and user info
  - Uppercase labels with better tracking for professional look
  - Color-coded labels (gray-400 for dark, gray-500 for light)
  - Smaller user info text (text-sm) for balanced layout
- **Optimized Spacing**:
  - Compact padding (p-6) for sleeker appearance
  - Better gap spacing between elements (gap-6)
  - Improved layout structure with justify-between
- **Interactive Effects**:
  - Hover scale animation (scale-[1.02])
  - Enhanced shadow on hover (hover:shadow-2xl)
  - Mastercard logo scales up on hover (hover:scale-110)
  - Smooth transitions on all interactive elements
- **Professional Polish**:
  - Larger mastercard logo (h-10)
  - Better visual hierarchy with font sizes and weights
  - Improved container max-width (max-w-5xl)

### Payment Method 01 UI Improvements
- **Default Card Indicator**:
  - Primary-colored badge in top-right corner with checkmark icon
  - "Default" label for easy identification
  - Positioned absolutely for clean look
- **Enhanced Card Layout**:
  - Single column layout for better mobile experience
  - Larger cards (p-6) with better spacing
  - Card logos in gray-50 rounded containers (h-12 w-16)
  - Visible card brand logos (Visa/Mastercard)
- **Improved Typography**:
  - Larger title (text-2xl font-bold) for "Payment Methods"
  - Bold card numbers (font-bold) with wider tracking
  - Card type labels with capitalize and muted color
- **Interactive Elements**:
  - Hover border color change (border-primary/50)
  - Action buttons appear on hover (opacity-0 to opacity-100)
  - Edit and delete buttons with tooltips
  - Shadow lift on hover (hover:shadow-md)
- **Better Button Styling**:
  - Primary "Add New Card" button instead of outline
  - Destructive red color for delete with hover background
  - Larger icon buttons (h-9 w-9)
- **Professional Polish**:
  - Group hover effects for smooth interactions
  - Transition-all for fluid animations
  - Better visual hierarchy with spacing
