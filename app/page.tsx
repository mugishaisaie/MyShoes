// app/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { getFeaturedProducts } from '@/sanity/queries';
import { Product } from '@/utils/types';

export default function Home() {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadFeatured() {
      try {
        const products = await getFeaturedProducts();
        setFeaturedProducts(products.slice(0, 8));
      } catch (error) {
        console.error('Error loading featured products:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadFeatured();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section className="bg-secondary/50 dark:bg-slate-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: 'Fast Delivery',
                description: 'Nationwide delivery in 2-3 days',
              },
              {
                icon: RotateCcw,
                title: '30-Day Returns',
                description: 'Easy returns and exchanges',
              },
              {
                icon: Shield,
                title: 'Secure',
                description: 'Safe WhatsApp ordering process',
              },
              {
                icon: Star,
                title: 'Quality',
                description: 'Premium brands and authentic',
              },
            ].map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-accent" />
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold mb-2">Featured Products</h2>
              <p className="text-muted-foreground">
                Handpicked selection of our best-selling shoes
              </p>
            </div>
            <Link
              href="/shop"
              className="flex items-center gap-2 text-accent hover:text-accent/80 transition group"
            >
              View All
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <ProductGrid products={featuredProducts} isLoading={isLoading} />
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 bg-secondary/50 dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">Shop by Category</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Running Shoes', href: '/shop?category=running-shoes' },
              { name: 'Casual Shoes', href: '/shop?category=casual-shoes' },
              { name: 'Formal Shoes', href: '/shop?category=formal-shoes' },
              { name: 'Sports Shoes', href: '/shop?category=sports-shoes' },
            ].map((cat) => (
              <motion.div
                key={cat.name}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  href={cat.href}
                  className="block p-6 bg-background border border-border rounded-lg text-center hover:shadow-lg transition"
                >
                  <h3 className="font-semibold text-lg">{cat.name}</h3>
                  <p className="text-sm text-accent mt-2">Explore →</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-8 text-center">What Customers Say</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Sarah K.',
                location: 'Kigali',
                text: 'Excellent quality shoes and super fast delivery. Highly recommend!',
                rating: 5,
              },
              {
                name: 'Jean M.',
                location: 'Kigali',
                text: 'Found exactly what I was looking for at a great price.',
                rating: 5,
              },
              {
                name: 'David P.',
                location: 'Gisenyi',
                text: 'Great selection and the WhatsApp ordering is so convenient.',
                rating: 5,
              },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 border border-border rounded-lg"
              >
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      className="w-4 h-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
                <p className="mb-4 text-sm">{review.text}</p>
                <p className="font-semibold text-sm">{review.name}</p>
                <p className="text-xs text-muted-foreground">{review.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-accent/10 to-accent/5 dark:from-accent/5 dark:to-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your Perfect Shoes?
          </h2>
          <p className="text-muted-foreground mb-8">
            Browse our collection and order directly via WhatsApp.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition"
          >
            Shop Now
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </>
  );
}
