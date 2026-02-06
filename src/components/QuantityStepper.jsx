import React from 'react'

export default function QuantityStepper({ qty, setQty, max = 99 }) {
  function dec() {
    setQty(Math.max(1, qty - 1))
  }
  function inc() {
    setQty(Math.min(max, qty + 1))
  }
  return (
    <div className="inline-flex items-center border rounded overflow-hidden">
      <button aria-label="Decrease quantity" onClick={dec} className="px-3 py-1">-</button>
      <div className="px-4 py-1">{qty}</div>
      <button aria-label="Increase quantity" onClick={inc} className="px-3 py-1">+</button>
    </div>
  )
}
