## PROJECT STRUCTURE - MY SHOES RWANDA

Complete e-commerce site built with Next.js 14, TypeScript, Tailwind CSS, and Sanity CMS.

### File Tree

```
my-shoes/
│
├── 📁 app/                          # Next.js App Router pages
│   ├── layout.tsx                   # Root layout with providers & theme
│   ├── globals.css                  # Global styles & CSS variables
│   ├── page.tsx                     # Home page (hero, featured, categories, testimonials)
│   │
│   ├── 📁 shop/
│   │   └── page.tsx                 # Product listing with filters & sorting
│   │
│   ├── 📁 product/[slug]/
│   │   └── page.tsx                 # Product details, image gallery, variants
│   │
│   ├── 📁 cart/
│   │   └── page.tsx                 # Shopping cart, summary, WhatsApp checkout
│   │
│   ├── 📁 size-guide/
│   │   └── page.tsx                 # International shoe size chart & tips
│   │
│   ├── 📁 shipping-returns/
│   │   └── page.tsx                 # Shipping info, fees, return policy, FAQs
│   │
│   └── 📁 contact/
│       └── page.tsx                 # Contact form, hours, FAQs, WhatsApp
│
├── 📁 components/                   # Reusable React components
│   ├── Providers.tsx                # Theme & notification providers
│   ├── Navbar.tsx                   # Sticky navigation with cart badge
│   ├── Footer.tsx                   # Footer with links & contact info
│   ├── ProductCard.tsx              # Product card with image, price, tags
│   ├── ProductGrid.tsx              # Grid layout with skeleton loaders
│   ├── Filters.tsx                  # Advanced product filters
│   ├── HeroSection.tsx              # Reusable hero banner component
│   ├── CartItem.tsx                 # Cart item row with qty controls
│   ├── ImageGallery.tsx             # Product image gallery with thumbnails
│   └── SkeletonCard.tsx             # Skeleton loader for loading state
│
├── 📁 sanity/                       # Sanity CMS configuration
│   ├── client.ts                    # Sanity client initialization
│   ├── queries.ts                   # GROQ queries & data fetching
│   ├── mockData.ts                  # Fallback mock data (no Sanity needed)
│   │
│   └── 📁 schemas/                  # Document type schemas
│       ├── product.ts               # Product document schema
│       ├── category.ts              # Category document schema
│       ├── brand.ts                 # Brand document schema
│       └── storeSettings.ts         # Store configuration schema
│
├── 📁 utils/                        # Utility functions
│   ├── types.ts                     # TypeScript interfaces & types
│   ├── cart.ts                      # Zustand cart store with localStorage
│   ├── whatsapp.ts                  # WhatsApp integration helpers
│   ├── constants.ts                 # Constants (sizes, prices, etc.)
│   └── hooks.ts                     # Custom React hooks
│
├── 📁 public/                       # Static assets
│   └── (placeholder for images)
│
├── Configuration Files
│   ├── .env.local.example           # Environment variables template
│   ├── .env.local                   # Local environment (git ignored)
│   ├── .gitignore                   # Git ignore rules
│   ├── .prettierrc                  # Code formatting config
│   ├── .eslintrc.json               # Eslint configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── next.config.js               # Next.js configuration
│   ├── tailwind.config.ts           # Tailwind CSS configuration
│   ├── postcss.config.mjs           # PostCSS configuration
│   └── package.json                 # Dependencies & scripts
│
└── Documentation
    ├── README.md                    # Complete setup & usage guide
    └── FILE_TREE.md                 # This file
```

### Key Files Explained

#### Pages

- **page.tsx** (Home): Hero section, featured products carousel, category grid, testimonials
- **shop/page.tsx**: Product listing with client-side filtering, sorting, pagination
- **product/[slug]/page.tsx**: Single product page with image gallery, variants, related products
- **cart/page.tsx**: Cart items, summary, WhatsApp checkout integration
- **size-guide/page.tsx**: Shoe size charts (adult & kids), measurement tips
- **shipping-returns/page.tsx**: Delivery info, return policy, FAQs
- **contact/page.tsx**: Contact form, business hours, WhatsApp direct chat

#### Components

- **Navbar.tsx**: Sticky header with theme toggle, search prompt area, cart icon badge
- **Footer.tsx**: Multiple columns, contact info, social links, policies
- **ProductCard.tsx**: Displays product image, name, price, discounts, color preview
- **Filters.tsx**: Search, price range, category, brand, size, gender, tags filters
- **ImageGallery.tsx**: Main image with thumbnail carousel and navigation buttons
- **CartItem.tsx**: Line item with qty controls, remove button, price calc

#### Sanity

- **schemas/product.ts**:
  - Fields: name, slug, description, brand (ref), category (ref), gender
  - Price, discountPrice, images array, color variants, sizes
  - Tags (new/sale/popular), featured/bestSeller flags, createdAt
- **schemas/storeSettings.ts**:
  - storeName, whatsappNumber, currency, deliveryFees (Kigali/other)
  - paymentInstructions, returnPolicy, socialLinks

- **queries.ts**: 7 main GROQ queries with mock fallback
  - getStoreSettings, getFeaturedProducts, getProducts (with filters)
  - getProductBySlug, getRelatedProducts, getCategories, getBrands

#### Utils

- **types.ts**: TypeScript interfaces (Product, CartItem, StoreSettings, etc.)
- **cart.ts**: Zustand store with localStorage persistence, cart operations
- **whatsapp.ts**:
  - generateOrderIntentId() - Creates unique order IDs
  - formatRWF() - Currency formatting
  - buildWhatsAppMessage() - Constructs prefilled WhatsApp message
  - getWhatsAppUrl() - Generates wa.me links

### Key Features by File

#### State Management

- Cart state: Zustand (`/utils/cart.ts`)
- Theme state: next-themes (built into Providers)
- Filter state: React local state in Filters component & pages

#### Animations

- Page transitions: Framer Motion (motion.div)
- Hover effects: whileHover prop on cards & buttons
- Entrance animations: initial → animate lifecycle
- All animations are subtle, ~2-3 property transform

#### Styling

- Tailwind CSS utilities
- Dark mode support via `dark:` prefix
- CSS variables for theming (`--accent`, `--border`, etc.)
- responsive design with sm, md, lg breakpoints

#### SEO

- Metadata in layout & pages
- OpenGraph tags in Home page
- Product schema on product page
- Sitemap generation ready

#### Performance

- Next.js Image component (lazy loading, optimization)
- Dynamic imports for provider components
- Route-based code splitting (automatic)
- Skeleton loaders for better UX

### Environment Variables

```env
# Sanity (optional - works without it)
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_READ_TOKEN=  # optional, only for private datasets

# WhatsApp & Store
NEXT_PUBLIC_WHATSAPP_NUMBER=250788000000
NEXT_PUBLIC_STORE_NAME=My Shoes Rwanda
NEXT_PUBLIC_CURRENCY=RWF
```

### Development Workflow

1. **Install**: `npm install`
2. **Setup**: Copy `.env.local.example` → `.env.local` (can leave Sanity blank for mock data)
3. **Run**: `npm run dev`
4. **Build**: `npm run build` then `npm start`

### File Sizes (Approximate)

- Total components: ~1,500 lines
- Total pages: ~1,200 lines
- Sanity queries: ~400 lines
- Utils & types: ~600 lines
- Configuration: ~300 lines
- **Total: ~4,000 lines of production-ready code**

### Dependencies Summary

- **Next.js 14**: App Router, Image optimization, API routes
- **TypeScript 5**: Type safety and developer experience
- **Tailwind CSS 3**: Utility-first styling
- **Framer Motion 10**: Smooth animations
- **next-themes**: Dark mode with persistence
- **Zustand 4**: Lightweight state management
- **Sanity**: Headless CMS client
- **Sonner**: Toast notifications
- **Radix UI**: Accessible components foundation

---

**All files are production-ready and can be deployed to Vercel, Netlify, or any Node.js environment!**
