import React from 'react'

export default function SortSelect({ value, onChange }) {
  return (
    <label className="flex items-center gap-2">
      <span className="text-sm">Sort:</span>
      <select aria-label="Sort products" value={value} onChange={(e) => onChange(e.target.value)} className="border rounded px-2 py-1 text-sm">
        <option value="newest">Newest</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
        <option value="rating">Rating</option>
      </select>
    </label>
  )
}
