// components/Footer.tsx
import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center font-bold text-sm">
                MS
              </div>
              <span className="font-bold text-lg">My Shoes</span>
            </div>
            <p className="text-sm text-gray-300">
              Premium footwear for every occasion, delivered across Rwanda.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-bold mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/shop" className="hover:text-white transition">
                  All Products
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=new" className="hover:text-white transition">
                  New Arrivals
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=sale" className="hover:text-white transition">
                  Sale
                </Link>
              </li>
              <li>
                <Link href="/shop?tag=popular" className="hover:text-white transition">
                  Popular
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-bold mb-4">Information</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <Link href="/size-guide" className="hover:text-white transition">
                  Size Guide
                </Link>
              </li>
              <li>
                <Link href="/shipping-returns" className="hover:text-white transition">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-accent" />
                <span>+250 788 000 000</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-accent" />
                <a href="mailto:info@myshoes.rw" className="hover:text-white transition">
                  info@myshoes.rw
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                <span>Kigali, Rwanda</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>&copy; 2024 My Shoes Rwanda. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
