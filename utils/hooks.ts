/**
 * Zustand cart store with localStorage persistence
 * Client-side only - uses dynamic import to avoid hydration mismatches
 */

import { useEffect, useState } from 'react';
import { useCart } from '@/utils/cart';

export function useHydrationAwareCart() {
  const [isMounted, setIsMounted] = useState(false);
  const cart = useCart();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return {
      items: [],
      getItemCount: () => 0,
      getTotalDiscountPrice: () => 0,
    };
  }

  return cart;
}
