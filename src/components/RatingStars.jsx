import React from 'react'

export default function RatingStars({ value = 0 }) {
  const stars = [1,2,3,4,5]
  return (
    <div className="flex items-center" aria-label={`Rating ${value} out of 5`}>
      {stars.map(s => (
        <svg key={s} className={`h-4 w-4 ${s <= Math.round(value) ? 'text-yellow-400' : 'text-slate-300'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.165c.969 0 1.371 1.24.588 1.81l-3.37 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.371 2.455c-.785.57-1.84-.197-1.54-1.118l1.287-3.97a1 1 0 00-.364-1.118L2.642 9.397c-.783-.57-.38-1.81.588-1.81h4.165a1 1 0 00.95-.69l1.286-3.97z" />
        </svg>
      ))}
      <span className="ml-2 text-xs text-slate-600">{value.toFixed(1)}</span>
      <span className="ml-2 text-xs text-slate-600 dark:text-slate-400">{value.toFixed(1)}</span>
    </div>
  )
}
