## QUICK START GUIDE - MY SHOES RWANDA

### 🚀 Get Started in 5 Minutes

#### 1. Install Dependencies

```bash
cd d:\MIsaie\PROJECTS\FULL-STACK\MY-SHOES
npm install
```

#### 2. Create Environment File

```bash
copy .env.local.example .env.local
```

Edit `.env.local` and fill in values (leave Sanity blank for mock data):

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=250788000000
```

#### 3. Run Development Server

```bash
npm run dev
```

Visit **http://localhost:3000** in your browser! 🎉

---

### 📱 What You Get Running Locally

✅ **Home Page** with featured products & testimonials
✅ **Shop Page** with filters, search, sorting, pagination
✅ **Product Details** with image gallery & size selection
✅ **Shopping Cart** with OrderIntent IDs
✅ **WhatsApp Checkout** (opens WhatsApp with prefilled message)
✅ **Size Guide** with international shoe size charts
✅ **Shipping & Returns** policy page
✅ **Contact Page** with form & business hours
✅ **Light/Dark Mode** toggle (persisted)
✅ **Mock Data** - 6 sample products automatically loaded

---

### 🎯 Using Mock Data (No Sanity Required!)

The app automatically uses mock data when Sanity is not configured.

**Mock Products Include:**

1. Premium Running Shoe Pro (Nike) - Sale, Featured
2. Classic Casual Sneaker (Adidas) - Popular, Featured
3. Elite Basketball High Top (Nike) - Sale
4. Women's Fitness Trainer (Puma) - New, Featured
5. Kids Adventure Explorer (New Balance) - New, Popular
6. Elegant Formal Oxford (Adidas) - Best Seller

**Try These:**

- Add product to cart, select color & size
- Test filters (price, gender, category, brand, tag)
- Click "Order on WhatsApp" (use fallback number)
- Test cart operations (quantity, remove, clear)

---

### 🌍 Setting Up Sanity CMS (Optional)

If you want to manage products in Sanity:

#### A. Create Sanity Project

1. Go to [sanity.io](https://www.sanity.io)
2. Create free account and new project
3. Get your **Project ID** and **Dataset name**

#### B. Update Environment

Edit `.env.local`:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

#### C. Deploy Schemas (Optional)

```bash
npm install -g @sanity/cli
sanity login
sanity deploy
```

#### D. Create Content

- Go to your Sanity Studio
- Create **Brands**: Nike, Adidas, Puma, New Balance
- Create **Categories**: Running, Casual, Formal, Sports
- Create **Products** with images, variants, sizes
- Create **Store Settings** with WhatsApp number

---

### 💬 WhatsApp Integration

#### How It Works

1. **Shop** → Select product, color, size
2. **Add to Cart** or **Order on WhatsApp**
3. System generates unique **Order Intent ID** (e.g., RW-SHOE-20240206143025-A7F2)
4. WhatsApp opens with **prefilled message** containing:
   - Order Intent ID for tracking
   - Product details & price
   - Subtotal
   - Prompt for delivery location
5. Customer sends message
6. Your team responds with payment details via WhatsApp
7. After payment, order shipped

#### Configure WhatsApp Number

**Option 1: Environment Variable** (Fallback)

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=250788000000
```

**Option 2: Sanity CMS** (Recommended)

- Create `storeSettings` document in Sanity
- Set `whatsappNumber` field
- App fetches from Sanity automatically

---

### 🎨 Customization Tips

#### Change Colors

Edit `app/globals.css` - change `--accent` color:

```css
:root {
  --accent: 0 84.2% 60.2%; /* Red - change these values */
}
```

#### Change Store Name

Update in `.env.local`:

```env
NEXT_PUBLIC_STORE_NAME=Your Store Name
```

Or create `storeSettings` in Sanity.

#### Add Products Quickly

Edit `sanity/mockData.ts` - add to `mockProducts` array.

#### Modify Filtering

Edit `components/Filters.tsx` - adjust available filters, ranges, options.

---

### 📦 Building for Production

#### Local Build Test

```bash
npm run build
npm run start
```

#### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Then set environment variables in Vercel Dashboard.

#### Deploy to Netlify

1. Connect GitHub repo to Netlify
2. Build command: `npm run build`
3. Publish directory: `.next`
4. Add env vars in Site Settings

#### Deploy Anywhere with Node.js

```bash
npm run build
npm start
```

---

### 🐛 Troubleshooting

#### "Products not showing"

- Check if NEXT_PUBLIC_SANITY_PROJECT_ID is set correctly
- Or leave it empty to use mock data
- Clear browser cache: Ctrl+Shift+Del

#### "WhatsApp not opening"

- Verify phone number format: 250xxxxxxxxx (no +)
- Open console (F12) and check for errors
- Test on mobile device

#### "Dark mode not working"

- Check browser localStorage: Open DevTools → Application → localStorage
- Look for `theme` key
- Clear and reload

#### "Cart items disappearing"

- localStorage might be disabled
- Check if `cart-storage` exists in localStorage
- Browser private mode disables localStorage

#### "Slow loading"

- Images are fetched from Sanity CDN
- Check network tab in DevTools
- Use smaller image files (< 500KB each)

---

### 📚 Key Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build           # Build for production
npm run start           # Run production build
npm run lint            # Run ESLint
npm run type-check      # Check TypeScript

# Optional: If using Sanity CLI
npm install -g @sanity/cli
sanity login            # Authenticate
sanity deploy           # Deploy schemas
```

---

### 📂 Project Structure at a Glance

```
my-shoes/
├── app/                 # Pages (home, shop, product, cart, etc)
├── components/          # Reusable components
├── sanity/              # CMS config, schemas, queries
├── utils/               # Helpers (cart, WhatsApp, types)
├── package.json
└── README.md
```

See **FILE_TREE.md** for complete structure.

---

### 🚀 Next Steps

1. ✅ Run `npm install` & `npm run dev`
2. ✅ Browse mock products (no Sanity needed!)
3. ✅ Test cart & WhatsApp integration
4. ✅ (Optional) Set up Sanity for custom content
5. ✅ Customize colors, copy, WhatsApp number
6. ✅ Deploy to Vercel/Netlify/your server

---

### 📞 Support

**Documentation Files:**

- `README.md` - Complete setup guide
- `FILE_TREE.md` - Project structure overview
- `QUICK_START.md` - This file

**Questions?**

- Check code comments for explanations
- Review Sanity docs: https://www.sanity.io/docs
- Next.js docs: https://nextjs.org/docs

---

### 💡 Pro Tips

1. **Filter Testing**: Use shop page filters to test category, brand, price, size
2. **Mobile Testing**: Use browser DevTools (F12 → Mobile icon)
3. **Dark Mode**: Click sun/moon icon in navbar
4. **Cart Persistence**: Reload page - cart items stay (localStorage)
5. **Order Intent IDs**: Each checkout generates unique ID for tracking

---

**Happy coding! 🎉 Your e-commerce store is ready to go!**
