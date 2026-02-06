// app/cart/page.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag } from 'lucide-react';
import { toast } from 'sonner';
import { CartItem } from '@/components/CartItem';
import { useCart } from '@/utils/cart';
import { buildWhatsAppMessage, getWhatsAppUrl, generateOrderIntentId, formatRWF } from '@/utils/whatsapp';
import { getStoreSettings } from '@/sanity/queries';
import { useEffect, useState } from 'react';
import { StoreSettings } from '@/utils/types';

export default function CartPage() {
  const { items, clearCart, getTotalDiscountPrice } = useCart();
  const [settings, setSettings] = useState<StoreSettings | null>(null);

  useEffect(() => {
    async function loadSettings() {
      const data = await getStoreSettings();
      setSettings(data);
    }
    loadSettings();
  }, []);

  if (items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <ShoppingBag className="w-16 h-16 mb-4 mx-auto text-muted-foreground" />
          <h1 className="text-3xl font-bold mb-2">Your Cart is Empty</h1>
          <p className="text-muted-foreground mb-6">
            Start shopping to add items to your cart
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Continue Shopping
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  const subtotal = getTotalDiscountPrice();
  const deliveryFee = 2000; // Kigali default
  const total = subtotal + deliveryFee;
  const orderIntentId = generateOrderIntentId();

  const handleWhatsAppCheckout = () => {
    if (!settings?.whatsappNumber) {
      toast.error('WhatsApp number not configured');
      return;
    }

    const message = buildWhatsAppMessage(
      items,
      subtotal,
      orderIntentId,
      settings.storeName || 'My Shoes Rwanda',
      settings.paymentInstructions
    );

    const url = getWhatsAppUrl(settings.whatsappNumber, message);
    if (url) {
      window.open(url, '_blank');
      clearCart();
      toast.success('Order sent! Check WhatsApp for confirmation.');
    } else {
      toast.error('Could not open WhatsApp');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="lg:col-span-2"
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden border border-border">
            {items.map((item) => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>

          <button
            onClick={clearCart}
            className="mt-4 text-sm text-muted-foreground hover:text-foreground transition"
          >
            Clear Cart
          </button>
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="sticky top-24 h-fit"
        >
          <div className="bg-white dark:bg-slate-800 rounded-lg border border-border p-6">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="space-y-3 mb-4 pb-4 border-b border-border">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="font-medium">{formatRWF(subtotal)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">
                  Delivery (Kigali)
                </span>
                <span className="font-medium">{formatRWF(deliveryFee)}</span>
              </div>
            </div>

            <div className="flex justify-between items-center mb-6">
              <span className="font-bold text-lg">Total</span>
              <span className="text-2xl font-bold text-accent">
                {formatRWF(total)}
              </span>
            </div>

            <p className="text-xs text-muted-foreground mb-4 text-center">
              Order Intent ID: <span className="font-mono font-semibold">{orderIntentId}</span>
            </p>

            <button
              onClick={handleWhatsAppCheckout}
              className="w-full bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-lg font-semibold transition mb-3"
            >
              Checkout on WhatsApp
            </button>

            <Link
              href="/shop"
              className="block text-center text-sm text-accent hover:text-accent/80 font-medium transition"
            >
              Continue Shopping
            </Link>

            {/* Info */}
            <div className="mt-6 pt-6 border-t border-border text-xs text-muted-foreground space-y-2">
              <p>
                📍 Provide your location in WhatsApp to get accurate delivery fees
              </p>
              <p>
                ⏱️ Delivery typically takes 2–3 days for Kigali
              </p>
              <p>
                💳 Payment details will be provided after order confirmation
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
