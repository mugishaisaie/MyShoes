import React, { useMemo, useState } from 'react'
import categories from '../data/categories'

export default function FiltersPanel({ filters, setFilters, brands, availableSizes, colors }) {
  const [open, setOpen] = useState(false)
  const localToggle = () => setOpen(v => !v)

  function onChange(e) {
    const { name, value, type, checked } = e.target
    if (type === 'checkbox') {
      setFilters(prev => ({ ...prev, [name]: checked }))
    } else {
      setFilters(prev => ({ ...prev, [name]: value }))
    }
  }

  function onClear() {
    setFilters({
      search: '',
      category: '',
      brand: '',
      minPrice: '',
      maxPrice: '',
      size: '',
      color: '',
      inStock: false
    })
  }

  return (
    <aside className="md:col-span-1">
      <div className="flex items-center justify-between md:hidden mb-2">
        <h4 className="font-semibold">Filters</h4>
        <button onClick={localToggle} className="text-accent">{open ? 'Close' : 'Open'}</button>
      </div>

      <div className={`${open ? 'block' : 'hidden'} md:block space-y-4 border rounded p-4`}>
          <div className={`${open ? 'block' : 'hidden'} md:block space-y-4 border dark:border-slate-700 rounded p-4 dark:bg-slate-800`}>
        <div>
          <label className="block text-xs font-medium">Search</label>
          <input name="search" value={filters.search} onChange={onChange} className="w-full border rounded px-2 py-1 text-sm" placeholder="Name or brand" />
                 <input name="search" value={filters.search} onChange={onChange} className="w-full border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm" placeholder="Name or brand" />
        </div>

        <div>
          <label className="block text-xs font-medium">Category</label>
          <select name="category" value={filters.category} onChange={onChange} className="w-full border rounded px-2 py-1 text-sm">
            <option value="">All</option>
            {categories.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium">Brand</label>
          <select name="brand" value={filters.brand} onChange={onChange} className="w-full border rounded px-2 py-1 text-sm">
            <option value="">All</option>
            {brands.map(b => <option key={b} value={b}>{b}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium">Price range (RWF)</label>
          <div className="flex gap-2">
            <input name="minPrice" value={filters.minPrice} onChange={onChange} placeholder="Min" className="w-1/2 border rounded px-2 py-1 text-sm" type="number" />
            <input name="maxPrice" value={filters.maxPrice} onChange={onChange} placeholder="Max" className="w-1/2 border rounded px-2 py-1 text-sm" type="number" />
               <select name="category" value={filters.category} onChange={onChange} className="w-full border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm">
               <select name="brand" value={filters.brand} onChange={onChange} className="w-full border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm">
                 <input name="minPrice" value={filters.minPrice} onChange={onChange} placeholder="Min" className="w-1/2 border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm" type="number" />
                 <input name="maxPrice" value={filters.maxPrice} onChange={onChange} placeholder="Max" className="w-1/2 border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm" type="number" />
          </div>
        </div>

        <div>
          <label className="block text-xs font-medium">Size</label>
          <select name="size" value={filters.size} onChange={onChange} className="w-full border rounded px-2 py-1 text-sm">
            <option value="">Any</option>
            {availableSizes.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label className="block text-xs font-medium">Color</label>
          <select name="color" value={filters.color} onChange={onChange} className="w-full border rounded px-2 py-1 text-sm">
            <option value="">Any</option>
            {colors.map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <div className="flex items-center gap-2">
          <input id="inStock" name="inStock" type="checkbox" checked={filters.inStock} onChange={onChange} />
          <label htmlFor="inStock" className="text-sm">In stock only</label>
                 <select name="size" value={filters.size} onChange={onChange} className="w-full border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm">
                 <select name="color" value={filters.color} onChange={onChange} className="w-full border dark:border-slate-600 dark:bg-slate-700 dark:text-white rounded px-2 py-1 text-sm">
                   <label htmlFor="inStock" className="text-sm dark:text-slate-300">In stock only</label>
        </div>

        <div className="flex gap-2">
          <button onClick={onClear} className="px-3 py-1 border rounded text-sm">Clear filters</button>
        </div>
      </div>
    </aside>
  )
}
