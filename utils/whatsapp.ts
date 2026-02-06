// utils/whatsapp.ts
import { CartItem } from './types';

/**
 * Generate a unique Order Intent ID
 * Format: RW-SHOE-YYYYMMDDHHMISS-XXXX (4 random chars)
 */
export function generateOrderIntentId(): string {
  const now = new Date();
  const timestamp = now
    .toISOString()
    .replace(/[-:.Z]/g, '')
    .slice(0, 14); // YYYYMMDDHHmmss
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `RW-SHOE-${timestamp}-${random}`;
}

/**
 * Format currency value (RWF)
 */
export function formatRWF(value: number): string {
  return new Intl.NumberFormat('rw-RW', {
    style: 'currency',
    currency: 'RWF',
    minimumFractionDigits: 0,
  }).format(value);
}

/**
 * Build WhatsApp message for checkout
 */
export function buildWhatsAppMessage(
  items: CartItem[],
  subtotal: number,
  orderIntentId: string,
  storeName: string,
  paymentInstructions?: string
): string {
  let message = `*Order from ${storeName}*\n\n`;
  message += `📦 *Order Intent ID:* ${orderIntentId}\n\n`;
  message += `*Items:*\n`;

  items.forEach((item, index) => {
    const itemTotal = (item.discountPrice || item.price) * item.qty;
    message += `${index + 1}. ${item.name}\n`;
    message += `   Color: ${item.selectedColor} | Size: ${item.selectedSize}\n`;
    message += `   Price: ${formatRWF(item.discountPrice || item.price)} × ${item.qty} = ${formatRWF(itemTotal)}\n`;
  });

  message += `\n*Subtotal:* ${formatRWF(subtotal)}\n`;
  message += `\n⚠️ *Delivery:* To be calculated based on your location\n`;
  message += `📍 *Please provide:* Your name, phone number, and delivery address\n`;

  if (paymentInstructions) {
    message += `\n*Payment Instructions:*\n${paymentInstructions}\n`;
  }

  message += `\n✅ We will confirm your order and provide payment details.`;

  return message;
}

/**
 * Get WhatsApp URL for checkout
 */
export function getWhatsAppUrl(phoneNumber: string, message: string): string {
  if (!phoneNumber) {
    return '';
  }

  // Remove any non-digit characters
  const cleanPhone = phoneNumber.replace(/\D/g, '');

  // Encode message
  const encodedMessage = encodeURIComponent(message);

  return `https://wa.me/${cleanPhone}?text=${encodedMessage}`;
}

/**
 * Get WhatsApp URL for product inquiry
 */
export function getProductWhatsAppUrl(
  phoneNumber: string,
  productName: string,
  selectedColor: string,
  selectedSize: string,
  price: number
): string {
  if (!phoneNumber) {
    return '';
  }

  const message = `Hi! I'm interested in the *${productName}*\nColor: ${selectedColor}\nSize: ${selectedSize}\nPrice: ${formatRWF(price)}`;
  return getWhatsAppUrl(phoneNumber, message);
}
