// sanity/queries.ts
import { client, sanityEnabled } from './client';
import {
  mockProducts,
  mockCategories,
  mockBrands,
  mockStoreSettings,
} from './mockData';
import { Product, Category, Brand, StoreSettings } from '@/utils/types';

export async function getStoreSettings(): Promise<StoreSettings> {
  if (!sanityEnabled) {
    return mockStoreSettings;
  }

  try {
    const settings = await client.fetch(
      '*[_type == "storeSettings"][0]'
    );
    return settings || mockStoreSettings;
  } catch (error) {
    console.error('Error fetching store settings:', error);
    return mockStoreSettings;
  }
}

export async function getFeaturedProducts(): Promise<Product[]> {
  if (!sanityEnabled) {
    return mockProducts.filter((p) => p.isFeatured);
  }

  try {
    const products = await client.fetch(
      `*[_type == "product" && isFeatured == true] | order(createdAt desc)[0...8] {
        _id,
        name,
        slug,
        price,
        discountPrice,
        mainImage,
        variants,
        sizes,
        tags,
        isBestSeller,
        brand->,
        category->
      }`
    );
    return products || [];
  } catch (error) {
    console.error('Error fetching featured products:', error);
    return mockProducts.filter((p) => p.isFeatured);
  }
}

interface GetProductsOptions {
  search?: string;
  minPrice?: number;
  maxPrice?: number;
  gender?: string;
  brand?: string;
  category?: string;
  size?: string;
  tag?: string;
  sortBy?: 'newest' | 'price-asc' | 'price-desc' | 'popularity';
  limit?: number;
  offset?: number;
}

export async function getProducts(options: GetProductsOptions = {}): Promise<Product[]> {
  if (!sanityEnabled) {
    return filterAndSortMockProducts(mockProducts, options);
  }

  try {
    let query = '*[_type == "product"';
    const filters: string[] = [];

    if (options.search) {
      const searchLower = options.search.toLowerCase();
      filters.push(
        `(lower(name) match "*${searchLower}*" || lower(description) match "*${searchLower}*")`
      );
    }

    if (options.minPrice !== undefined) {
      filters.push(`price >= ${options.minPrice}`);
    }

    if (options.maxPrice !== undefined) {
      filters.push(`price <= ${options.maxPrice}`);
    }

    if (options.gender) {
      filters.push(`gender == "${options.gender}"`);
    }

    if (options.brand) {
      filters.push(`brand->slug.current == "${options.brand}"`);
    }

    if (options.category) {
      filters.push(`category->slug.current == "${options.category}"`);
    }

    if (options.tag) {
      filters.push(`"${options.tag}" in tags`);
    }

    if (options.size) {
      filters.push(`"${options.size}" in sizes[].sizeLabel`);
    }

    if (filters.length > 0) {
      query += ' && ' + filters.join(' && ');
    }

    query += ']';

    // Sorting
    if (options.sortBy === 'price-asc') {
      query += ' | order(price asc)';
    } else if (options.sortBy === 'price-desc') {
      query += ' | order(price desc)';
    } else if (options.sortBy === 'popularity') {
      query += ' | order(isBestSeller desc, createdAt desc)';
    } else {
      query += ' | order(createdAt desc)';
    }

    // Pagination
    const limit = options.limit || 12;
    const offset = options.offset || 0;
    query += `[${offset}...${offset + limit}]`;

    query += ` {
      _id,
      name,
      slug,
      price,
      discountPrice,
      mainImage,
      variants,
      sizes,
      tags,
      isBestSeller,
      brand->,
      category->
    }`;

    const products = await client.fetch(query);
    return products || [];
  } catch (error) {
    console.error('Error fetching products:', error);
    return filterAndSortMockProducts(mockProducts, options);
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  if (!sanityEnabled) {
    return (
      mockProducts.find((p) => p.slug.current === slug) || null
    );
  }

  try {
    const product = await client.fetch(
      `*[_type == "product" && slug.current == $slug][0] {
        _id,
        name,
        slug,
        description,
        price,
        discountPrice,
        mainImage,
        images,
        variants,
        sizes,
        tags,
        isFeatured,
        isBestSeller,
        brand->,
        category->
      }`,
      { slug }
    );
    return product || null;
  } catch (error) {
    console.error('Error fetching product:', error);
    return mockProducts.find((p) => p.slug.current === slug) || null;
  }
}

export async function getRelatedProducts(
  categoryId: string,
  productId: string,
  limit: number = 4
): Promise<Product[]> {
  if (!sanityEnabled) {
    return mockProducts.filter(
      (p) =>
        p.category._ref === categoryId &&
        p._id !== productId
    );
  }

  try {
    const products = await client.fetch(
      `*[_type == "product" && category._ref == $categoryId && _id != $productId] | order(createdAt desc)[0...${limit}] {
        _id,
        name,
        slug,
        price,
        discountPrice,
        mainImage,
        variants,
        tags,
        brand->,
        category->
      }`,
      { categoryId, productId }
    );
    return products || [];
  } catch (error) {
    console.error('Error fetching related products:', error);
    return mockProducts.filter(
      (p) =>
        p.category._ref === categoryId &&
        p._id !== productId
    );
  }
}

export async function getCategories(): Promise<Category[]> {
  if (!sanityEnabled) {
    return mockCategories;
  }

  try {
    const categories = await client.fetch(
      `*[_type == "category"] | order(name asc) {
        _id,
        name,
        slug,
        description,
        image
      }`
    );
    return categories || mockCategories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return mockCategories;
  }
}

export async function getBrands(): Promise<Brand[]> {
  if (!sanityEnabled) {
    return mockBrands;
  }

  try {
    const brands = await client.fetch(
      `*[_type == "brand"] | order(name asc) {
        _id,
        name,
        slug,
        logo
      }`
    );
    return brands || mockBrands;
  } catch (error) {
    console.error('Error fetching brands:', error);
    return mockBrands;
  }
}

// Helper function to filter and sort mock products
function filterAndSortMockProducts(
  products: Product[],
  options: GetProductsOptions
): Product[] {
  let filtered = [...products];

  // Search filter
  if (options.search) {
    const searchLower = options.search.toLowerCase();
    filtered = filtered.filter(
      (p) =>
        p.name.toLowerCase().includes(searchLower) ||
        (p.description && p.description.toLowerCase().includes(searchLower))
    );
  }

  // Price filter
  if (options.minPrice !== undefined) {
    filtered = filtered.filter((p) => p.price >= options.minPrice!);
  }
  if (options.maxPrice !== undefined) {
    filtered = filtered.filter((p) => p.price <= options.maxPrice!);
  }

  // Gender filter
  if (options.gender) {
    filtered = filtered.filter((p) => p.gender === options.gender);
  }

  // Brand filter (mock comparison)
  if (options.brand) {
    filtered = filtered.filter((p) => p.brand._ref.includes(options.brand!));
  }

  // Category filter
  if (options.category) {
    filtered = filtered.filter((p) => p.category._ref.includes(options.category!));
  }

  // Size filter
  if (options.size) {
    filtered = filtered.filter((p) =>
      p.sizes.some((s) => s.sizeLabel === options.size)
    );
  }

  // Tag filter
  if (options.tag) {
    filtered = filtered.filter((p) => p.tags.includes(options.tag!));
  }

  // Sorting
  if (options.sortBy === 'price-asc') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (options.sortBy === 'price-desc') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (options.sortBy === 'popularity') {
    filtered.sort((a, b) => {
      if (a.isBestSeller !== b.isBestSeller)
        return b.isBestSeller ? 1 : -1;
      return (
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
      );
    });
  } else {
    filtered.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    );
  }

  // Pagination
  const limit = options.limit || 12;
  const offset = options.offset || 0;
  return filtered.slice(offset, offset + limit);
}
