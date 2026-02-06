import React, { useMemo, useState, useEffect } from 'react'
import productsData from '../data/products'
import FiltersPanel from '../components/FiltersPanel'
import ProductCard from '../components/ProductCard'
import SortSelect from '../components/SortSelect'
import LoadingGrid from '../components/LoadingGrid'
import { useSearchParams, useNavigate } from 'react-router-dom'

export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams()
  const navigate = useNavigate()

  // Load initial filter state from URL
  const [filters, setFilters] = useState({
    search: searchParams.get('search') || '',
    category: searchParams.get('category') || '',
    brand: searchParams.get('brand') || '',
    minPrice: searchParams.get('minPrice') || '',
    maxPrice: searchParams.get('maxPrice') || '',
    size: searchParams.get('size') || '',
    color: searchParams.get('color') || '',
    inStock: searchParams.get('inStock') === 'true'
  })
  const [sort, setSort] = useState(searchParams.get('sort') || 'newest')
  const [loading, setLoading] = useState(true)

  // simulate loading
  useEffect(() => {
    setLoading(true)
    const t = setTimeout(() => setLoading(false), 350)
    return () => clearTimeout(t)
  }, [searchParams.toString()])

  // Sync filters -> URL
  useEffect(() => {
    const p = {}
    if (filters.search) p.search = filters.search
    if (filters.category) p.category = filters.category
    if (filters.brand) p.brand = filters.brand
    if (filters.minPrice) p.minPrice = filters.minPrice
    if (filters.maxPrice) p.maxPrice = filters.maxPrice
    if (filters.size) p.size = filters.size
    if (filters.color) p.color = filters.color
    if (filters.inStock) p.inStock = 'true'
    if (sort) p.sort = sort
    setSearchParams(p)
    // eslint-disable-next-line
  }, [filters, sort])

  const brands = useMemo(() => {
    const b = Array.from(new Set(productsData.map(p => p.brand)))
    return b
  }, [])

  const availableSizes = useMemo(() => {
    const s = new Set()
    productsData.forEach(p => p.sizes.forEach(sz => s.add(sz)))
    return Array.from(s).sort((a,b)=>a-b)
  }, [])

  const colors = useMemo(() => {
    const c = new Set()
    productsData.forEach(p => p.colors.forEach(cl => c.add(cl)))
    return Array.from(c)
  }, [])

  const filtered = useMemo(() => {
    let list = [...productsData]
    const f = filters
    if (f.search) {
      const q = f.search.toLowerCase()
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    }
    if (f.category) list = list.filter(p => p.category === f.category)
    if (f.brand) list = list.filter(p => p.brand === f.brand)
    if (f.minPrice) list = list.filter(p => p.priceRWF >= Number(f.minPrice))
    if (f.maxPrice) list = list.filter(p => p.priceRWF <= Number(f.maxPrice))
    if (f.size) list = list.filter(p => p.sizes.includes(Number(f.size)))
    if (f.color) list = list.filter(p => p.colors.includes(f.color))
    if (f.inStock) list = list.filter(p => p.stock > 0)

    // sorting
    if (sort === 'newest') {
      list.sort((a,b)=> new Date(b.createdAt) - new Date(a.createdAt))
    } else if (sort === 'price-low') {
      list.sort((a,b)=> a.priceRWF - b.priceRWF)
    } else if (sort === 'price-high') {
      list.sort((a,b)=> b.priceRWF - a.priceRWF)
    } else if (sort === 'rating') {
      list.sort((a,b)=> b.rating - a.rating)
    }
    return list
  }, [filters, sort])

  return (
    <div className="py-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-2xl font-bold">Shop</h1>
        <SortSelect value={sort} onChange={setSort} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-1">
          <FiltersPanel filters={filters} setFilters={setFilters} brands={brands} availableSizes={availableSizes} colors={colors} />
        </div>

        <div className="md:col-span-3">
          {loading ? (
            <LoadingGrid />
          ) : (
            <>
              {filtered.length === 0 ? (
                <div className="p-8 text-center text-slate-600">
                  No products match your filters.
                               <div className="p-8 text-center text-slate-600 dark:text-slate-400">
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filtered.map(p => <ProductCard key={p.id} product={p} />)}
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
