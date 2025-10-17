## Overview
Creative Tim UI is a comprehensive React component library built on shadcn/ui, designed for modern web applications. It functions as a monorepo providing customizable components for ecommerce, marketing, and application interfaces. The project serves as a documentation website and component registry, allowing CLI-based component installation. It emphasizes developer experience through streamlined installation, extensive documentation, and examples, with components designed for easy integration and full customization via Tailwind CSS and TypeScript. The project aims to provide a rich set of UI/UX with a strong focus on modern design trends and user interaction.

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
- **Home Page Background**: Entire home page uses bg-stone-50 for a warm, elegant stone/beige background.
- **Ecommerce Blocks**: Enhanced grid layouts, video spotlights, luxury product detail pages, redesigned shopping cart, dark product overviews, and grid ecommerce with modern photography.
- **Navbar Design**: Sleek, dark, rounded pill-shaped navigation with custom favicon logo (favicon-32x32.png, rounded-full) and brand text (text-base) on left, vertical separator, nav links (Docs, Examples), with search, GitHub link, theme switcher, and Get Started button on right.
- **AI Platform Logo Section**: Header section below CTAs displaying "Ready to be imported in" (font-semibold, normal case) with 6 authentic AI platform logo images (OpenAI, Claude, v0, Replit, Bolt, Lovable) starting at 50% opacity with grayscale, transitioning to full color on hover.
- **Examples Preview Section**: Dynamic preview of component examples categorized by Web 3.0, Application & Admin UI, Marketing & Presentation, Content UI, and Ecommerce UI.
- **Achievements Section**: Stats section with community members, downloads, GitHub stars, and NPM downloads.
- **Enhanced Interactive Elements**: Interactive size and color selectors, wishlist toggles, accordion sections, and carousel pagination with smooth transitions.
- **Modern Styling**: Incorporates professional typography, improved visual hierarchy, glass-morphism effects, and hover animations across various components.
- **Responsive Design**: All UI components are optimized for mobile, tablet, and desktop viewing.
- **Testimonial Layouts**: Redesigned multi-testimonial grid layout with 5-star ratings, professional avatars, and integrated stats.
- **Card Display Enhancements**: Dark/light card designs with gradient hover effects, improved chip card visuals, optimized typography, and interactive animations.
- **Payment Method UI**: Default card indicators, 2-column grid layout for cards, improved typography, interactive hover effects, and primary "Add New Card" button.
- **Invoices UI**: Content wrapped in white card container, overdue badges in red (destructive), and professional layout.
- **Transaction History UI**: Icon display fix with proper alignment and color-coding (green for increasing, red for decreasing, black/white for pending), wrapped in white card container for visual separation.

## External Dependencies

### Core UI Libraries
- **Radix UI**: Headless UI primitives.
- **shadcn/ui**: Base component patterns.
- **Motion**: Animation library.

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
### Application & Admin UI Thumbnails
- **Thumbnail Integration**: All Application & Admin UI category cards now display actual preview images from Creative Tim's public assets repository on GitHub
- **Images Source**: https://raw.githubusercontent.com/creativetimofficial/public-assets/refs/heads/master/david-ui/thumbs/
- **Optimized Display**: Using Next.js Image component with responsive sizing for optimal loading performance
- **Configured Examples**: Widgets, Charts, Tables, Modals, Account, Billing, Tables Headers, Tables Footers, KPI Cards, Sidebars, Dropdowns, and User Profile all have dedicated thumbnail images

### Marketing & Presentation Thumbnails
- **Thumbnail Integration**: All Marketing & Presentation category cards now display actual preview images from Creative Tim's public assets repository
- **Configured Examples**: Hero Sections, Testimonial Sections, Popup Sections, Authentication, Onboarding Sections, Navbars, Contact Sections, Team Sections, Newsletter, Footers, and Coming Soon Sections all have dedicated thumbnail images

### Content UI Thumbnails
- **Thumbnail Integration**: All Content UI category cards now display actual preview images from Creative Tim's public assets repository
- **Configured Examples**: FAQs, Feature Sections, Stats Sections, Content Sections, Cards, Error Sections, Maintenance Sections, Blog Sections, Logo Sections, and Calendar Sections all have dedicated thumbnail images

### Ecommerce UI Thumbnails
- **Thumbnail Integration**: All Ecommerce UI category cards now display actual preview images from Creative Tim's public assets repository
- **Configured Examples**: Banner Sections, Ecommerce Sections, Product List Sections, Customer Overview Sections, Pricing Sections, Categories, and Order Sections all have dedicated thumbnail images

### Web 3.0 Thumbnails
- **Thumbnail Integration**: All Web 3.0 category cards now display actual preview images from Creative Tim's public assets repository
- **Configured Examples**: Web 3.0 Login, Web 3.0 Charts, and Web 3.0 Cards all have dedicated thumbnail images
- **Complete Coverage**: ALL home page example cards (43 total) now feature real preview thumbnails from the Creative Tim public assets repository

### Showcase Masonry Section
- **Location**: Home page, positioned below CTAs and above Achievements section
- **Layout**: Responsive masonry grid (1 column mobile, 2 tablet, 3 desktop)
- **Featured Components**:
  - Order Summary card with product items and pricing breakdown
  - Transaction History with calendar dropdown and 2 transaction examples
  - Third-Party Integrations card with GitHub accordion item
  - Order Timeline showing order progress steps
  - Product card (Zegna cardigan) with favorite heart button
  - Personal Information form with name, email, phone, and profession inputs
  - Testimonial card with 5-star rating
- **Purpose**: Visual showcase of real component examples in an attractive masonry layout

### Coming Soon Cards Feature
- **Badge UI Component**: Added Badge component import from the registry
- **Coming Soon Flag**: Added `comingSoon` boolean field to example interface
- **Available Cards** (10 cards clickable and active):
  - Web 3.0: Web 3.0 Cards
  - Application & Admin UI: Account, Billing, Modals
  - Marketing & Presentation: Contact Sections, Footers, Testimonial Sections
  - Content UI: FAQs, Blog Sections
  - Ecommerce UI: Ecommerce Sections
- **Disabled Cards**: All other cards (33 cards) marked as "Coming Soon" with overlay and badge
- **Visual Treatment**: Cards with `comingSoon: true` display:
  - Clear thumbnail image (no blur)
  - Black overlay (40% opacity)
  - "Soon" badge centered on overlay
  - Cursor set to not-allowed
  - Click disabled (no Link wrapper)

### Testimonials Section
- **Location**: Home page, positioned after blocks section with thumbnails, before page navigation
- **Design**: Modern carousel with animations focused on quotes
- **Featured Testimonials**: 4 professional testimonials from Creative Tim partners and CEOs:
  - Eugen Tudorache - CTO @Updivision
  - Robert Tatoi - Founder @PlayVertical
  - Fredy Andrei - CEO @Simmmple
  - Rares Toma - CEO @Loopple
- **Carousel Features**:
  - Auto-rotating carousel (5-second intervals)
  - Previous/Next navigation buttons
  - Dot indicators for all testimonials
  - Click on dots to jump to specific testimonial
- **Animation Details**:
  - Smooth fade-in/fade-out transitions between testimonials
  - Staggered animations: quote icon → quote text → author info
  - Spring animation for quote icon appearance
  - Motion-powered using framer-motion library
- **Visual Design**:
  - Large, prominent quote display (2xl to 4xl responsive text)
  - Glassmorphism card with gradient background
  - Rounded card with backdrop blur effect
  - Centered layout with quote icon in circular badge
  - Author avatar with name, role, and company below quote
- **Section Heading**: "Loved by Developers & Designers"
- **Purpose**: Social proof showcasing trust from professionals building with Creative Tim UI
