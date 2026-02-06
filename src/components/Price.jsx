import React from 'react'
import { formatRWF } from '../utils/price'

export default function Price({ price, oldPrice }) {
  return (
    <div className="text-right">
      <div className="text-sm font-semibold">{formatRWF(price)}</div>
      {oldPrice && <div className="text-xs text-slate-500 line-through">{formatRWF(oldPrice)}</div>}
      {oldPrice && <div className="text-xs text-slate-500 dark:text-slate-400 line-through">{formatRWF(oldPrice)}</div>}
    </div>
  )
}
