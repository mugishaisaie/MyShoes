// app/shop/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { ProductGrid } from '@/components/ProductGrid';
import { Filters, FilterState } from '@/components/Filters';
import { getProducts, getBrands, getCategories } from '@/sanity/queries';
import { Product, Brand, Category } from '@/utils/types';
import { SORT_OPTIONS } from '@/utils/constants';

function ShopContent() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<Brand[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState<'newest' | 'price-asc' | 'price-desc' | 'popularity'>('newest');
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState<FilterState>({ search: '' });

  // Load initial data
  useEffect(() => {
    async function loadInitialData() {
      try {
        const [brandsData, catsData] = await Promise.all([
          getBrands(),
          getCategories(),
        ]);
        setBrands(brandsData);
        setCategories(catsData);
      } catch (error) {
        console.error('Error loading initial data:', error);
      }
    }

    loadInitialData();
  }, []);

  // Load products when filters change
  useEffect(() => {
    async function loadProducts() {
      setIsLoading(true);
      try {
        const productsData = await getProducts({
          ...filters,
          sortBy,
          limit: 12,
          offset: (currentPage - 1) * 12,
        });
        setProducts(productsData);
      } catch (error) {
        console.error('Error loading products:', error);
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, [filters, sortBy, currentPage]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
    setCurrentPage(1);
  };

  return (
    <>
      <HeroSection
        title="Shop Our Collection"
        subtitle="Find the perfect pair among our diverse selection"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <div className="md:col-span-1">
            <Filters
              brands={brands}
              categories={categories}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Products Section */}
          <div className="md:col-span-3">
            {/* Sort and Count */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
              <p className="text-sm text-muted-foreground">
                Showing {products.length > 0 ? (currentPage - 1) * 12 + 1 : 0}-
                {currentPage * 12} products
              </p>

              <select
                value={sortBy}
                onChange={(e) => {
                  setSortBy(e.target.value as any);
                  setCurrentPage(1);
                }}
                className="px-4 py-2 border border-border rounded-lg text-sm"
              >
                {SORT_OPTIONS.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Product Grid */}
            <ProductGrid products={products} isLoading={isLoading} />

            {/* Pagination */}
            {products.length > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 hover:bg-secondary transition"
                >
                  Previous
                </button>

                <button
                  onClick={() => setCurrentPage((p) => p + 1)}
                  disabled={products.length < 12}
                  className="px-4 py-2 border border-border rounded-lg disabled:opacity-50 hover:bg-secondary transition"
                >
                  Next
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ShopContent />
    </Suspense>
  );
}
