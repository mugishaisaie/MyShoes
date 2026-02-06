# My Shoes Rwanda - E-Commerce Store

A modern, production-ready e-commerce platform for selling shoes in Rwanda. Built with Next.js, TypeScript, Tailwind CSS, and Sanity CMS.

## Features

- **Modern UI/UX**: Built with shadcn/ui components and Framer Motion animations
- **Dark/Light Mode**: Theme switching with next-themes, user preference persisted
- **Sanity CMS**: Full product management with images, variants, sizes, and pricing
- **Product Catalog**:
  - Advanced filtering (price, size, color, brand, category, gender, tags)
  - Search functionality
  - Sorting (newest, price, popularity)
  - Skeleton loaders and responsive grid
- **Shopping Cart**:
  - Persistent localStorage storage
  - Add/update/remove items with variants (color + size)
  - Real-time subtotal calculation
- **WhatsApp Checkout**:
  - Direct WhatsApp ordering with prefilled messages
  - Unique Order Intent IDs for tracking
  - Delivery fee estimation
  - Payment instructions included in message
- **Responsive Design**: Mobile-first approach, works seamlessly on all devices
- **SEO Optimized**: Metadata, OpenGraph tags, structured data
- **Fallback Mode**: Works with mock data when Sanity is not configured

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn/ui
- **CMS**: Sanity (with fallback mock data)
- **State Management**: Zustand (cart) + React Context (theme)
- **Animations**: Framer Motion
- **Forms**: Native HTML with Sonner notifications
- **Authentication**: Environment variables

## Project Structure

```
my-shoes/
├── app/                    # Next.js app router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── globals.css        # Global styles
│   ├── page.tsx           # Home page
│   ├── shop/              # Product listing page
│   ├── product/[slug]/    # Product details page
│   ├── cart/              # Shopping cart page
│   ├── size-guide/        # Shoe size guide
│   ├── shipping-returns/  # Shipping and return policy
│   └── contact/           # Contact page
├── components/            # Reusable React components
│   ├── Providers.tsx      # Theme and notification providers
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── ProductCard.tsx    # Product card component
│   ├── ProductGrid.tsx    # Product grid layout
│   ├── Filters.tsx        # Product filters
│   ├── ImageGallery.tsx   # Product image gallery
│   ├── CartItem.tsx       # Cart item component
│   └── ...                # Other components
├── sanity/                # Sanity CMS configuration
│   ├── client.ts          # Sanity client setup
│   ├── queries.ts         # GROQ queries and fetch functions
│   ├── mockData.ts        # Mock data for fallback mode
│   └── schemas/           # Sanity document schemas
│       ├── product.ts
│       ├── category.ts
│       ├── brand.ts
│       └── storeSettings.ts
├── utils/                 # Utility functions
│   ├── types.ts           # TypeScript types
│   ├── cart.ts            # Cart state management (Zustand)
│   ├── whatsapp.ts        # WhatsApp integration helpers
│   └── constants.ts       # Constants (sizes, prices, etc.)
├── public/                # Static assets
├── package.json           # Dependencies
├── tsconfig.json          # TypeScript config
├── tailwind.config.ts     # Tailwind configuration
├── next.config.js         # Next.js config
└── README.md              # This file
```

## Installation

### Prerequisites

- Node.js 18+ and npm/yarn
- A Sanity account (optional - app works with mock data)

### 1. Clone and Install

```bash
cd my-shoes
npm install
```

### 2. Environment Setup

Copy `.env.local.example` to `.env.local` and fill in your values:

```bash
cp .env.local.example .env.local
```

**`.env.local` file:**

```env
# Sanity Configuration (Optional - can leave blank for mock data)
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
SANITY_READ_TOKEN=your_read_token_optional

# WhatsApp Configuration
NEXT_PUBLIC_WHATSAPP_NUMBER=250788000000

# Store Configuration
NEXT_PUBLIC_STORE_NAME=My Shoes Rwanda
NEXT_PUBLIC_CURRENCY=RWF
```

**Note**: If `NEXT_PUBLIC_SANITY_PROJECT_ID` is not set or is the placeholder value, the app automatically uses mock data.

### 3. Run Development Server

```bash
npm run dev
```

Visit `http://localhost:3000` in your browser.

## Sanity Configuration

### Setting Up Sanity (Optional)

If you want to use Sanity CMS instead of mock data:

1. Create a Sanity project at [sanity.io](https://www.sanity.io)
2. Get your Project ID and Dataset name
3. Create `sanity.json` in the root (optional, for local studio):
   ```json
   {
     "projectId": "your-project-id",
     "dataset": "production"
   }
   ```
4. Deploy schemas to Sanity:
   ```bash
   npm run sanity:deploy
   ```
5. Update `.env.local` with your credentials

### Sanity Schemas

Schemas are defined in `/sanity/schemas/`:

- **product**: Main product document
- **category**: Product categories
- **brand**: Shoe brands
- **storeSettings**: WhatsApp number, delivery fees, policies

### Creating Content in Sanity

1. Visit your Sanity project studio
2. Create documents for:
   - Categories (e.g., "Running Shoes", "Casual")
   - Brands (e.g., "Nike", "Adidas")
   - Products with images, variants, sizes
   - Store Settings (WhatsApp number, fees)

## WhatsApp Integration

### Configuration

1. **Set WhatsApp Number in Sanity**:
   - Create a "storeSettings" document in your Sanity studio
   - Add your WhatsApp number in format: `250788000000` (no +)

2. **Or use Environment Variable**:
   - Set `NEXT_PUBLIC_WHATSAPP_NUMBER` in `.env.local`

### How It Works

1. Customer selects product, color, size, and quantity
2. Clicks "Order on WhatsApp" or "Checkout on WhatsApp"
3. WhatsApp opens with prefilled message containing:
   - Order Intent ID (unique identifier)
   - Product details
   - Quantity and prices
   - Delivery note prompt
   - Payment instructions
4. Customer sends message and your team responds with payment details
5. After payment, order is confirmed and dispatched

### Order Intent ID Format

Generated as: `RW-SHOE-YYYYMMDDHHMISS-XXXX` (timestamp + random chars)

Example: `RW-SHOE-20240206143025-A7F2`

## Filtering & Search

The shop page includes:

- **Text Search**: Search by product name or description
- **Price Range**: Preset ranges or custom minimum/maximum
- **Category**: Filter by shoe type
- **Brand**: Multiple brand selection
- **Gender**: Men, Women, Kids, Unisex
- **Size**: 35-46 (EU sizes)
- **Tag**: New, Sale, Popular
- **Sorting**: Newest, Price (asc/desc), Popularity

## Cart Management

- **Add to Cart**: Requires selecting color and size
- **Persistent Storage**: Cart saved to browser localStorage
- **Cart Badge**: Displays item count in navbar
- **Quantity Controls**: +/- buttons to adjust quantity
- **Remove Items**: Delete individual items from cart
- **Clear Cart**: Remove all items after WhatsApp checkout

## Deployment

### Deploy to Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

```bash
npm run build
npm start
```

### Deploy to Other Platforms

Ensure environment variables are set for production:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_WHATSAPP_NUMBER`

## Building for Production

```bash
npm run build
npm start
```

## Performance Optimizations

- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Static generation for product pages when possible
- **Bundle Analysis**: Keep client bundles lean with tree-shaking

## SEO

- Metadata per page
- OpenGraph tags for social sharing
- Product schema (JSON-LD) on product pages
- Sitemap and robots.txt (add manually)
- Accessible forms and semantic HTML

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Hydration Errors with Theme

Solved with `suppressHydrationWarning` in layout and proper `ThemeProvider` setup.

### Sanity Connection Issues

1. Check `NEXT_PUBLIC_SANITY_PROJECT_ID` is set correctly
2. Verify dataset exists in your Sanity project
3. Check API version matches your Sanity version
4. Look for CORS issues - add your domain to Sanity CORS settings

### Mock Data Not Showing

- Ensure `NEXT_PUBLIC_SANITY_PROJECT_ID` is NOT set or is placeholder
- Check browser console for errors
- Clear browser cache and localStorage

### WhatsApp Not Opening

- Verify phone number format (250xxxxxxxxx)
- Check if WhatsApp is installed on device
- Try on mobile device
- Ensure message encoding is correct

## API Routes

This project uses Sanity's read-only API for fetching products. No custom API routes are needed.

### Sanity Queries

All queries are in `sanity/queries.ts`:

- `getStoreSettings()` - Fetch store configuration
- `getFeaturedProducts()` - Get featured products
- `getProducts(options)` - Get products with filters
- `getProductBySlug(slug)` - Get single product
- `getRelatedProducts(categoryId, productId)` - Get related items
- `getCategories()` - Get all categories
- `getBrands()` - Get all brands

## Development Mode with Mock Data

To work entirely offline with mock data:

```bash
# Don't set NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local
npm run dev
```

The app will automatically use mock products, categories, and brands from `sanity/mockData.ts`.

## Contributing

Feel free to submit issues and enhancement requests!

## License

MIT License - See LICENSE file for details

## Support

For issues or questions:

- 📧 Email: info@myshoes.rw
- 💬 WhatsApp: +250 788 000 000
- 🐛 GitHub Issues: Create an issue in the repository

---

**Built with ❤️ for Rwanda's shoe enthusiasts**
