// components/ImageGallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { SanityImage } from '@/utils/types';

interface ImageGalleryProps {
  images: SanityImage[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="aspect-square bg-gray-100 dark:bg-slate-700 rounded-lg flex items-center justify-center">
        <span className="text-muted-foreground">No images available</span>
      </div>
    );
  }

  const currentImage = images[selectedIndex];
  const imageUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${currentImage.asset._ref.split('-')[1]}-${currentImage.asset._ref.split('-')[2]}.${currentImage.asset._ref.split('-')[3]}`;

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-square bg-gray-100 dark:bg-slate-700 rounded-lg overflow-hidden">
        <Image
          src={imageUrl}
          alt={`${title} - ${selectedIndex + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, 50vw"
          priority
        />

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === 0 ? images.length - 1 : prev - 1
                )
              }
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() =>
                setSelectedIndex((prev) =>
                  prev === images.length - 1 ? 0 : prev + 1
                )
              }
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-2 rounded-full transition"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="grid grid-cols-5 gap-2">
          {images.map((image, index) => {
            const thumbUrl = `https://cdn.sanity.io/images/${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}/${image.asset._ref.split('-')[1]}-${image.asset._ref.split('-')[2]}.${image.asset._ref.split('-')[3]}?w=100&h=100&fit=crop`;
            return (
              <button
                key={index}
                onClick={() => setSelectedIndex(index)}
                className={`relative aspect-square rounded-lg overflow-hidden border-2 transition ${
                  selectedIndex === index
                    ? 'border-accent'
                    : 'border-transparent hover:border-gray-300'
                }`}
              >
                <Image
                  src={thumbUrl}
                  alt={`${title} thumbnail ${index + 1}`}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
