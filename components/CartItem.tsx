// components/CartItem.tsx
'use client';

import Image from 'next/image';
import { X, Plus, Minus } from 'lucide-react';
import { CartItem as CartItemType } from '@/utils/types';
import { formatRWF } from '@/utils/whatsapp';
import { useCart } from '@/utils/cart';

interface CartItemProps {
  item: CartItemType;
}

export function CartItem({ item }: CartItemProps) {
  const { updateQty, removeItem } = useCart();

  const imageUrl = item.image
    ? `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${item.image.asset._ref.split('-')[1]}-${item.image.asset._ref.split('-')[2]}.${item.image.asset._ref.split('-')[3]}`
    : '/placeholder-shoe.jpg';

  const itemTotal = (item.discountPrice || item.price) * item.qty;

  return (
    <div className="flex gap-4 py-4 border-b border-border">
      {/* Image */}
      <div className="relative w-24 h-24 bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={imageUrl}
          alt={item.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Details */}
      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <h3 className="font-semibold text-sm">{item.name}</h3>
          <p className="text-xs text-muted-foreground">
            {item.selectedColor} • Size {item.selectedSize}
          </p>
        </div>

        <div className="mt-auto flex items-center justify-between">
          {/* Quantity Controls */}
          <div className="flex items-center gap-2 bg-secondary rounded-lg p-1">
            <button
              onClick={() => updateQty(item.id, item.qty - 1)}
              className="p-1 hover:bg-background rounded transition"
            >
              <Minus className="w-4 h-4" />
            </button>
            <span className="w-6 text-center text-sm">{item.qty}</span>
            <button
              onClick={() => updateQty(item.id, item.qty + 1)}
              className="p-1 hover:bg-background rounded transition"
            >
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Price */}
          <div className="text-right">
            <div className="font-semibold text-sm">
              {formatRWF(itemTotal)}
            </div>
            {item.discountPrice && (
              <div className="text-xs text-muted-foreground line-through">
                {formatRWF(item.price * item.qty)}
              </div>
            )}
          </div>

          {/* Remove */}
          <button
            onClick={() => removeItem(item.id)}
            className="ml-4 p-2 hover:bg-secondary rounded transition text-muted-foreground hover:text-foreground"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
