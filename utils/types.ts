// utils/types.ts

export interface Product {
  _id: string;
  _type: 'product';
  name: string;
  slug: { current: string };
  description?: string;
  brand: { _ref: string; _type: 'reference' } & Brand;
  category: { _ref: string; _type: 'reference' } & Category;
  gender: 'men' | 'women' | 'kids' | 'unisex';
  price: number;
  discountPrice?: number;
  mainImage?: SanityImage;
  images?: SanityImage[];
  variants: Variant[];
  sizes: Size[];
  tags: string[];
  isFeatured: boolean;
  isBestSeller: boolean;
  createdAt: string;
}

export interface Variant {
  colorName: string;
  colorHex?: string;
  images?: SanityImage[];
}

export interface Size {
  sizeLabel: string;
  inStock: boolean;
  stockQty?: number;
}

export interface Category {
  _id: string;
  _type: 'category';
  name: string;
  slug: { current: string };
  description?: string;
  image?: SanityImage;
}

export interface Brand {
  _id: string;
  _type: 'brand';
  name: string;
  slug: { current: string };
  logo?: SanityImage;
  description?: string;
}

export interface StoreSettings {
  _id: string;
  _type: 'storeSettings';
  storeName: string;
  whatsappNumber: string;
  defaultCurrency: string;
  deliveryFees: {
    kigali: number;
    other: number;
  };
  paymentInstructions: string;
  returnPolicy?: string;
  socialLinks?: {
    instagram?: string;
    facebook?: string;
    twitter?: string;
  };
}

export interface SanityImage {
  _type: 'image';
  asset: {
    _ref: string;
    _type: 'reference';
  };
  crop?: any;
  hotspot?: any;
}

// Cart Types
export interface CartItem {
  id: string; // productId_color_size for uniqueness
  productId: string;
  slug: string;
  name: string;
  image?: SanityImage;
  price: number;
  discountPrice?: number;
  selectedColor: string;
  selectedSize: string;
  qty: number;
  brandName?: string;
}

export interface CartState {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getTotalDiscountPrice: () => number;
  getItemCount: () => number;
}
