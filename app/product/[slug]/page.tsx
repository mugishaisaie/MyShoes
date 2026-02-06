// app/product/[slug]/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ShoppingCart, Heart, Share2, ChevronRight } from 'lucide-react';
import { toast } from 'sonner';
import { ImageGallery } from '@/components/ImageGallery';
import { ProductGrid } from '@/components/ProductGrid';
import { getProductBySlug, getRelatedProducts } from '@/sanity/queries';
import { useCart } from '@/utils/cart';
import { formatRWF, getWhatsAppUrl } from '@/utils/whatsapp';
import { Product } from '@/utils/types';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;

  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // Form state
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);

  const { addItem } = useCart();

  // Load product
  useEffect(() => {
    async function loadProduct() {
      try {
        const data = await getProductBySlug(slug);
        if (data) {
          setProduct(data);
          setSelectedColor(data.variants[0]?.colorName || '');
          setSelectedSize(data.sizes[0]?.sizeLabel || '');

          // Load related products
          const related = await getRelatedProducts(
            data.category._ref,
            data._id,
            4
          );
          setRelatedProducts(related);
        }
      } catch (error) {
        console.error('Error loading product:', error);
        toast.error('Failed to load product');
      } finally {
        setIsLoading(false);
      }
    }

    loadProduct();
  }, [slug]);

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-200 dark:bg-slate-700 aspect-square rounded-lg animate-pulse" />
          <div className="space-y-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <div
                key={i}
                className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4 animate-pulse"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Product Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The product you're looking for doesn't exist.
        </p>
        <Link
          href="/shop"
          className="text-accent hover:text-accent/80 font-semibold"
        >
          Back to Shop
        </Link>
      </div>
    );
  }

  const availableSize = product.sizes.find((s) => s.sizeLabel === selectedSize);
  const isOutOfStock = !availableSize?.inStock;
  const price = product.discountPrice || product.price;
  const imageArray = product.images && product.images.length > 0
    ? product.images
    : product.mainImage
    ? [product.mainImage]
    : [];

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size');
      return;
    }

    if (isOutOfStock) {
      toast.error('This size is out of stock');
      return;
    }

    const cartItem = {
      id: `${product._id}_${selectedColor}_${selectedSize}`,
      productId: product._id,
      slug: product.slug.current,
      name: product.name,
      image: product.mainImage,
      price: product.price,
      discountPrice: product.discountPrice,
      selectedColor,
      selectedSize,
      qty: quantity,
      brandName: typeof product.brand === 'string' ? product.brand : product.brand?.name,
    };

    addItem(cartItem);
    toast.success(`Added ${product.name} to cart!`);
  };

  const handleWhatsAppOrder = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size');
      return;
    }

    if (isOutOfStock) {
      toast.error('This size is out of stock');
      return;
    }

    const message = `Hi! I'm interested in:\n\n*${product.name}*\n- Color: ${selectedColor}\n- Size: ${selectedSize}\n- Quantity: ${quantity}\n- Price: ${formatRWF(price * quantity)}\n\nPlease confirm availability and provide payment details.`;

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '250788000000';
    const url = getWhatsAppUrl(whatsappNumber, message);

    if (url) {
      window.open(url, '_blank');
    } else {
      toast.error('WhatsApp number not configured');
    }
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/shop" className="hover:text-foreground transition">
            Shop
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link
            href={`/shop?category=${product.category?._id || ''}`}
            className="hover:text-foreground transition capitalize"
          >
            {typeof product.category === 'string' ? product.category : product.category?.name}
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span>{product.name}</span>
        </div>
      </div>

      {/* Product */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Images */}
          <div>
            {imageArray.length > 0 ? (
              <ImageGallery images={imageArray} title={product.name} />
            ) : (
              <div className="aspect-square bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">No images</span>
              </div>
            )}
          </div>

          {/* Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <p className="text-sm text-muted-foreground uppercase mb-2">
                {product.gender}
              </p>
              <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
              <p className="text-muted-foreground mb-4">
                {typeof product.brand === 'string' ? product.brand : product.brand?.name}
              </p>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
                <span className="text-3xl font-bold text-accent">
                  {formatRWF(price)}
                </span>
                {product.discountPrice && (
                  <>
                    <span className="text-lg text-muted-foreground line-through">
                      {formatRWF(product.price)}
                    </span>
                    <span className="text-sm font-bold text-red-500">
                      Save{' '}
                      {Math.round(
                        ((product.price - product.discountPrice) /
                          product.price) *
                          100
                      )}
                      %
                    </span>
                  </>
                )}
              </div>

              {/* Stock Status */}
              {!product.sizes.some((s) => s.inStock) ? (
                <p className="text-red-500 font-semibold mb-4">Out of Stock</p>
              ) : (
                <p className="text-green-600 dark:text-green-400 font-semibold mb-4">
                  In Stock
                </p>
              )}
            </div>

            {/* Description */}
            {product.description && (
              <div>
                <p className="text-muted-foreground">{product.description}</p>
              </div>
            )}

            {/* Color Selection */}
            {product.variants && product.variants.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Color</h3>
                <div className="flex gap-3">
                  {product.variants.map((color) => (
                    <button
                      key={color.colorName}
                      onClick={() => setSelectedColor(color.colorName)}
                      className={`group text-center transition ${
                        selectedColor === color.colorName
                          ? 'ring-2 ring-accent rounded-lg p-1'
                          : ''
                      }`}
                    >
                      <div
                        className="w-12 h-12 rounded-lg border-2 border-gray-300 dark:border-gray-600 shadow-sm group-hover:shadow-md transition"
                        style={{
                          backgroundColor: color.colorHex || '#ccc',
                        }}
                        title={color.colorName}
                      />
                      <p className="text-xs mt-2 text-center">
                        {color.colorName}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 0 && (
              <div>
                <h3 className="font-semibold mb-3">Size</h3>
                <div className="grid grid-cols-5 gap-2">
                  {product.sizes.map((size) => (
                    <button
                      key={size.sizeLabel}
                      onClick={() => setSelectedSize(size.sizeLabel)}
                      disabled={!size.inStock}
                      className={`py-2 px-3 rounded-lg text-sm font-medium transition ${
                        selectedSize === size.sizeLabel
                          ? 'bg-accent text-white'
                          : size.inStock
                          ? 'bg-secondary hover:bg-secondary/80'
                          : 'bg-gray-100 dark:bg-slate-700 text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      {size.sizeLabel}
                    </button>
                  ))}
                </div>
                <Link
                  href="/size-guide"
                  className="text-sm text-accent hover:text-accent/80 mt-2 inline-block"
                >
                  Size Guide
                </Link>
              </div>
            )}

            {/* Quantity */}
            <div>
              <h3 className="font-semibold mb-3">Quantity</h3>
              <div className="flex items-center gap-3 w-fit bg-secondary rounded-lg p-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-background rounded transition"
                >
                  −
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-background rounded transition"
                >
                  +
                </button>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4">
              <button
                onClick={handleAddToCart}
                disabled={isOutOfStock}
                className="w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 disabled:opacity-50 text-foreground px-6 py-3 rounded-lg font-semibold transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Add to Cart
              </button>

              <button
                onClick={handleWhatsAppOrder}
                disabled={isOutOfStock}
                className="w-full flex items-center justify-center gap-2 bg-accent hover:bg-accent/90 disabled:opacity-50 text-white px-6 py-3 rounded-lg font-semibold transition"
              >
                <ShoppingCart className="w-5 h-5" />
                Order on WhatsApp
              </button>
            </div>

            {/* Info */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
              <div>
                <p className="text-sm text-muted-foreground mb-1">SKU</p>
                <p className="font-mono text-sm">{product._id}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Category</p>
                <p className="text-sm capitalize">
                  {typeof product.category === 'string'
                    ? product.category
                    : product.category?.name}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-16 border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold mb-8">Related Products</h2>
            <ProductGrid products={relatedProducts} />
          </div>
        </section>
      )}
    </>
  );
}
