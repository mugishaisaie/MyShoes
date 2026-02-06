// utils/cart.ts
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartItem, CartState } from './types';

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (item: CartItem) => {
        set((state) => {
          const existingItem = state.items.find((i) => i.id === item.id);
          if (existingItem) {
            return {
              items: state.items.map((i) =>
                i.id === item.id ? { ...i, qty: i.qty + item.qty } : i
              ),
            };
          }
          return {
            items: [...state.items, item],
          };
        });
      },

      removeItem: (id: string) => {
        set((state) => ({
          items: state.items.filter((i) => i.id !== id),
        }));
      },

      updateQty: (id: string, qty: number) => {
        if (qty <= 0) {
          get().removeItem(id);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.id === id ? { ...i, qty } : i
          ),
        }));
      },

      clearCart: () => {
        set({ items: [] });
      },

      getTotalPrice: () => {
        return get().items.reduce((total, item) => total + item.price * item.qty, 0);
      },

      getTotalDiscountPrice: () => {
        return get().items.reduce((total, item) => {
          const price = item.discountPrice || item.price;
          return total + price * item.qty;
        }, 0);
      },

      getItemCount: () => {
        return get().items.reduce((count, item) => count + item.qty, 0);
      },
    }),
    {
      name: 'cart-storage',
    }
  )
);
