import React from 'react'
import { useCart, useCartDispatch } from '../context/CartContext'
import { formatRWF } from '../utils/price'
import QuantityStepper from '../components/QuantityStepper'
import { Link } from 'react-router-dom'

export default function Cart() {
  const cart = useCart()
  const dispatch = useCartDispatch()

  function updateQty(key, qty) {
    dispatch({ type: 'updateQty', payload: { key, qty } })
  }
  function removeItem(key) {
    dispatch({ type: 'remove', payload: { key } })
  }
  function clearCart() {
    dispatch({ type: 'clear' })
  }

  const subtotal = cart.items.reduce((s, i) => s + i.qty * i.priceRWF, 0)

  function checkoutWhatsapp() {
    if (cart.items.length === 0) return
    let message = `Hello My Shoes Rwanda,%0AI would like to place an order:%0A%0A`
    cart.items.forEach(i => {
      message += `• ${i.name} — Size: ${i.size}, Color: ${i.color}, Qty: ${i.qty} — ${formatRWF(i.priceRWF)}%0A`
    })
    message += `%0ASubtotal: ${formatRWF(subtotal)}%0A`
    message += `%0ADelivery location: [Please enter delivery address here]%0A%0AThank you!`

    // Replace the phone number below with your store number.
    const phone = '+250780000000'
    const url = `https://wa.me/${phone.replace(/\+/g,'')}/?text=${message}`
    window.open(url, '_blank')
  }

  return (
    <div className="py-8">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.items.length === 0 ? (
        <div className="p-8 text-center text-slate-600">
          Your cart is empty. <Link to="/shop" className="text-accent">Continue shopping</Link>
        </div>
        <div className="p-8 text-center text-slate-600 dark:text-slate-400">
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            {cart.items.map(item => (
              <div key={item.key} className="border rounded p-3 flex gap-4 items-center">
                <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-sm text-slate-600">{item.brand}</div>
                  <div className="text-sm mt-1">Size: {item.size} • Color: {item.color}</div>
                                 <div key={item.key} className="border dark:border-slate-700 dark:bg-slate-800 rounded p-3 flex gap-4 items-center">
                                   <div className="text-sm text-slate-600 dark:text-slate-400">{item.brand}</div>
                                   <div className="text-sm mt-1 dark:text-slate-300">Size: {item.size} • Color: {item.color}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <QuantityStepper qty={item.qty} setQty={(q)=>updateQty(item.key,q)} max={item.stock} />
                    <button onClick={() => removeItem(item.key)} className="text-sm text-red-500">Remove</button>
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-semibold">{formatRWF(item.priceRWF)}</div>
                  <div className="text-sm text-slate-600">{formatRWF(item.priceRWF * item.qty)}</div>
                </div>
              </div>
            ))}
          </div>

          <aside className="border rounded p-4">
            <h3 className="font-semibold">Order summary</h3>
            <div className="mt-4">
              <div className="flex justify-between"><span>Subtotal</span><span>{formatRWF(subtotal)}</span></div>
              <div className="mt-2 text-sm text-slate-600">Delivery calculated on confirmation.</div>
                         <aside className="border dark:border-slate-700 dark:bg-slate-800 round