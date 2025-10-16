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
- **Ecommerce Blocks**: Enhanced grid layouts, video spotlights, luxury product detail pages.
- **Navbar Design**: Sleek, dark, rounded pill-shaped navigation with search, GitHub link, and theme switcher.
- **Examples Preview Section**: Dynamic preview of component examples categorized by Web 3.0, Application & Admin UI, Marketing & Presentation, Content UI, and Ecommerce UI.
- **Achievements Section**: Stats section with community members, downloads, GitHub stars, and NPM downloads.
- **Ecommerce Enhancements**: Product listing filters, redesigned order details, interactive product previews, enhanced checkout flows, digital product overviews, grid ecommerce with full-size images and overlays, dark product overviews, and shopping cart redesigns. These include improved typography, visual hierarchy, interactive elements, and modern styling with features like glass-morphism and hover animations.

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

### Shopping Cart Enhancement (October 16, 2025)
- **Enhanced shopping-cart-01 Block**: Complete redesign with white card wrapper and consolidated cart items
- **Design Improvements**:
  - **White Card Container**: Entire shopping cart wrapped in rounded-2xl card with shadow-lg
  - **Larger Header**: Shopping bag icon increased to h-14 w-14 in primary/10 circular badge, 4xl title
  - **Free Shipping Badge**: Enhanced green pill badge with larger Truck icon and semibold text
  - **Consolidated Cart Items Card**: Single border-2 card containing all products with header and separators
  - **Card Structure**: Package icon with "Cart Items (2)" in bold xl font, separated from content
  - **Product Layout**: Larger images (h-36 w-36) in rounded-xl containers with muted/50 background
  - **Enhanced Info**: xl font for product names, gap-6 spacing, 2xl price display aligned right
  - **Status Badges**: Redesigned with better padding (px-3 py-1), Size badge with semibold value
  - **Quantity Controls**: h-10 selector (w-28) with medium font weight label
  - **Product Separators**: Visual dividers between products within the cart card
  - **Order Summary**: Border-2 card with sticky positioning, xl heading, 3xl total price
  - **Enhanced Sections**: Tag icon for promo code, Lock icon (h-5 w-5) in checkout button
  - **Free Shipping Info**: h-10 w-10 icon badge, semibold title, improved text sizing
- **Layout Structure**: Two-column layout - Cart Items (col-span-2) on left, Order Summary (col-span-1) on right
- **New Dependencies**: Badge and Separator components
- **Professional Typography**: Larger headings (xl to 4xl) and improved font hierarchy
- **Responsive Design**: Optimized for mobile with proper card stacking

### Dark Product Overview Enhancement (October 16, 2025)
- **Enhanced dark-product-overview-01 Block**: Modern UI/UX redesign with dark theme improvements
- **Product Image**: Updated with Unsplash portrait image for premium aesthetic
- **Design Improvements**:
  - **Shop Previewer Badge**: Outlined badge with white border and improved styling
  - **Larger Typography**: 4xl main heading for better visual impact
  - **Product Info**: Title with "New Arrival" green badge inline
  - **Star Rating**: 5-star display with review count (127 reviews)
  - **Enhanced Pricing**: 4xl price ($449.90) with strikethrough original ($599.90) and 25% OFF badge
  - **Free Shipping Banner**: Info box with Truck icon in white/10 background
  - **Interactive Wishlist**: Heart icon with toggle state and fill animation
  - **Enhanced CTAs**: Shopping Cart icon added to primary button
  - **Tabbed Content**: Icons added to tabs (Package, Shield, Truck) with relevant descriptions
  - **Image Container**: Glass-morphism effect with white/5 background, white/20 border, backdrop blur
  - **Hover Effects**: Image scales 105% with gradient overlay transition
- **New Dependencies**: Badge component
- **Improved Spacing**: Better padding (py-20) and gaps, max-width increased to 6xl

### Promotional Cards Enhancement (October 16, 2025)
- **Enhanced promotional-cards-01 Block**: Complete redesign with beauty/skincare product showcase layout
- **Design Pattern**: Two-column split layout (product showcase left, hero image right)
- **Left Column - Product Showcase**:
  - **Beige Background**: Elegant #e8e3dc cream color for luxury aesthetic
  - **Product Carousel**: 3 beauty products with smooth transitions (Active toning essence, Hydrating serum, Vitamin C moisturizer)
  - **Large Product Image**: 320px x 320px centered display with drop-shadow
  - **Product Info**: Title and price display below image
  - **Pagination Dots**: Interactive carousel indicators with active state (elongated pill shape)
  - **Dot Animation**: Active dot expands to w-8, inactive dots are circular w-2.5
- **Right Column - Hero Image**:
  - **Full-Cover Image**: Unsplash beauty/spa lifestyle image
  - **Text Overlay**: Large serif font headline "Revitalizes the Skin!"
  - **Typography**: 5xl/6xl font size with light weight, white color with drop-shadow
  - **Two-Line Layout**: Text broken for visual impact
- **Interactive Features**:
  - **Carousel Controls**: Click dots to switch between products
  - **Smooth Transitions**: 500ms duration for product image changes
  - **Hover Effects**: Pagination dots change color on hover
- **Layout Structure**: Grid layout with rounded-2xl container and shadow-xl
- **Responsive Design**: Stacks vertically on mobile (lg:grid-cols-2)
- **Unsplash Images**: High-quality beauty/skincare product and lifestyle photos

### Simple Product Details Enhancement (October 16, 2025)
- **Enhanced simple-product-details-01 Block**: Complete redesign with size selector and structured information sections
- **Product Image**: Updated with Unsplash portrait image with rounded-xl border and muted background
- **Product Description**: Professional copy - "Whether you're closing deals or attending formal events, its breathable lining and natural stretch keep you comfortable and sharp from day to night."
- **Design Improvements**:
  - **Size Selector**: Interactive button group with 6 sizes (XS, S, M, L, XL, XXL) with active state
  - **Enhanced Color Selector**: Larger circular swatches (h-8 w-8) with border, hover scale effect (110%)
  - **Better Typography**: Larger 3xl heading and 3xl price display for prominence
  - **Interactive Wishlist**: Heart icon with toggle state and fill animation
  - **More Info Section**: Accordion with Description, Delivery & Returns, and Contact Us
  - **Description Content**: Detailed product information about features and benefits
  - **Delivery Information**: Shipping options, timelines, and return policy details
  - **Contact Details**: Email, phone, and business hours information (single accordion icon)
  - **Similar Items Section**: Grid layout with product cards
  - **Similar Product Cards**: Hover effects with image scale (105%), product name, price, and size availability
  - **Product Images**: Unsplash fashion images (Black Bustier Top, Black High-Waist Jeans)
  - **Size Availability**: Text showing available sizes for each similar product
- **Layout Structure**: Main product section at top, two-column layout below (More Info left, Similar Items right)
- **New Dependencies**: Accordion, Badge, and Card components
- **Improved Spacing**: Better padding and gaps throughout, leading-relaxed text
- **Enhanced Interactivity**: Stateful size selection, favorite toggle, accordion expand/collapse
- **Responsive Design**: Optimized grid layout with sm:grid-cols-2 for similar items