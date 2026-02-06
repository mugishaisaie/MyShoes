// components/Filters.tsx
'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { PRICE_RANGES, GENDERS, TAGS, SHOE_SIZES } from '@/utils/constants';
import { Brand, Category } from '@/utils/types';

interface FiltersProps {
  brands: Brand[];
  categories: Category[];
  onFilterChange: (filters: FilterState) => void;
}

export interface FilterState {
  search: string;
  minPrice?: number;
  maxPrice?: number;
  gender?: string;
  brand?: string;
  category?: string;
  size?: string;
  tag?: string;
}

export function Filters({ brands, categories, onFilterChange }: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ search: '' });

  const handleFilterChange = (newFilters: Partial<FilterState>) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    onFilterChange(updated);
  };

  const hasActiveFilters = Object.values(filters).some(
    (v) => v !== '' && v !== undefined
  );

  return (
    <div>
      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden w-full mb-6 px-4 py-2 border border-border rounded-lg flex items-center justify-between"
      >
        <span>Filters {hasActiveFilters && `(${Object.values(filters).filter(Boolean).length})`}</span>
        <ChevronDown
          className={`w-4 h-4 transition ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {/* Filters Container */}
      <div
        className={`space-y-6 pb-6 ${
          isOpen ? 'block' : 'hidden md:block'
        }`}
      >
        {/* Search */}
        <div>
          <h3 className="font-semibold mb-3">Search</h3>
          <input
            type="text"
            placeholder="Search products..."
            value={filters.search}
            onChange={(e) => handleFilterChange({ search: e.target.value })}
            className="w-full px-3 py-2 border border-border rounded-lg text-sm"
          />
        </div>

        {/* Price Range */}
        <div>
          <h3 className="font-semibold mb-3">Price Range</h3>
          <div className="space-y-2">
            {PRICE_RANGES.map((range) => (
              <label
                key={range.label}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="price"
                  checked={
                    filters.minPrice === range.min &&
                    filters.maxPrice === range.max
                  }
                  onChange={() =>
                    handleFilterChange({
                      minPrice: range.min,
                      maxPrice: range.max,
                    })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm">{range.label}</span>
              </label>
            ))}
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="price"
                checked={filters.minPrice === undefined && filters.maxPrice === undefined}
                onChange={() =>
                  handleFilterChange({
                    minPrice: undefined,
                    maxPrice: undefined,
                  })
                }
                className="w-4 h-4"
              />
              <span className="text-sm">All Prices</span>
            </label>
          </div>
        </div>

        {/* Gender */}
        <div>
          <h3 className="font-semibold mb-3">Gender</h3>
          <div className="space-y-2">
            {GENDERS.map((g) => (
              <label key={g.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.gender === g.value}
                  onChange={() =>
                    handleFilterChange({
                      gender: filters.gender === g.value ? undefined : g.value,
                    })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm">{g.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Category */}
        {categories.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Category</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <label
                  key={cat._id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.category === cat._id}
                    onChange={() =>
                      handleFilterChange({
                        category:
                          filters.category === cat._id
                            ? undefined
                            : cat._id,
                      })
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{cat.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Brand */}
        {brands.length > 0 && (
          <div>
            <h3 className="font-semibold mb-3">Brand</h3>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {brands.map((brand) => (
                <label
                  key={brand._id}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    checked={filters.brand === brand._id}
                    onChange={() =>
                      handleFilterChange({
                        brand:
                          filters.brand === brand._id ? undefined : brand._id,
                      })
                    }
                    className="w-4 h-4"
                  />
                  <span className="text-sm">{brand.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}

        {/* Size */}
        <div>
          <h3 className="font-semibold mb-3">Size</h3>
          <div className="grid grid-cols-4 gap-2">
            {SHOE_SIZES.map((size) => (
              <button
                key={size}
                onClick={() =>
                  handleFilterChange({
                    size: filters.size === size ? undefined : size,
                  })
                }
                className={`py-2 px-2 rounded-lg text-sm font-medium transition ${
                  filters.size === size
                    ? 'bg-accent text-white'
                    : 'bg-secondary hover:bg-secondary/80'
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Tag */}
        <div>
          <h3 className="font-semibold mb-3">Tag</h3>
          <div className="space-y-2">
            {TAGS.map((t) => (
              <label key={t.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.tag === t.value}
                  onChange={() =>
                    handleFilterChange({
                      tag: filters.tag === t.value ? undefined : t.value,
                    })
                  }
                  className="w-4 h-4"
                />
                <span className="text-sm">{t.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={() => {
              setFilters({ search: '' });
              onFilterChange({ search: '' });
            }}
            className="w-full py-2 px-4 bg-secondary hover:bg-secondary/80 rounded-lg text-sm font-medium transition"
          >
            Clear All Filters
          </button>
        )}
      </div>
    </div>
  );
}
