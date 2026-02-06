// components/HeroSection.tsx
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface HeroSectionProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
}

export function HeroSection({
  title = 'Premium Shoes for Every Step',
  subtitle = 'Discover our exclusive collection of comfortable and stylish footwear',
  ctaText = 'Shop Now',
  ctaHref = '/shop',
}: HeroSectionProps) {
  return (
    <div className="relative min-h-[500px] bg-gradient-to-br from-accent/10 to-accent/5 dark:from-accent/5 dark:to-background flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: -360,
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto px-4 text-center py-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 text-foreground"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl text-muted-foreground mb-8"
        >
          {subtitle}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Link
            href={ctaHref}
            className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-lg font-semibold transition group"
          >
            {ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
