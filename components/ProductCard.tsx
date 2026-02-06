// components/ProductCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Product } from '@/utils/types';
import { formatRWF } from '@/utils/whatsapp';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const image = product.mainImage || product.images?.[0];
  const imageUrl = image
    ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${image.asset._ref.split('-')[1]}-${image.asset._ref.split('-')[2]}.${image.asset._ref.split('-')[3]}`
    : '/placeholder-shoe.jpg';

  const hasDiscount = !!product.discountPrice;
  const discountPercent = hasDiscount
    ? Math.round(((product.price - product.discountPrice!) / product.price) * 100)
    : 0;

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.2 }}
    >
      <Link href={`/product/${product.slug.current}`}>
        <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
          {/* Image Container */}
          <div className="relative aspect-square bg-gray-100 dark:bg-slate-700 overflow-hidden">
            <Image
              src={imageUrl}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Tags */}
            <div className="absolute top-3 left-3 flex gap-2">
              {product.tags?.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="bg-accent text-white text-xs font-bold px-2 py-1 rounded capitalize"
                >
                  {tag}
                </span>
              ))}
              {hasDiscount && (
                <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -{discountPercent}%
                </span>
              )}
            </div>

            {/* Stock Indicator */}
            {!product.sizes.some((s) => s.inStock) && (
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                <span className="text-white font-bold text-lg">Out of Stock</span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-xs text-muted-foreground mb-1 capitalize">
              {product.gender}
            </p>
            <h3 className="font-semibold text-sm line-clamp-2 mb-2">
              {product.name}
            </h3>

            {/* Colors Preview */}
            {product.variants && product.variants.length > 0 && (
              <div className="flex gap-2 mb-3">
                {product.variants.slice(0, 3).map((v) => (
                  <div
                    key={v.colorName}
                    className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
                    style={{
                      backgroundColor: v.colorHex || '#ccc',
                    }}
                    title={v.colorName}
                  />
                ))}
                {product.variants.length > 3 && (
                  <span className="text-xs text-muted-foreground">
                    +{product.variants.length - 3}
                  </span>
                )}
              </div>
            )}

            {/* Price */}
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-accent">
                {formatRWF(product.discountPrice || product.price)}
              </span>
              {hasDiscount && (
                <span className="text-xs text-muted-foreground line-through">
                  {formatRWF(product.price)}
                </span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
