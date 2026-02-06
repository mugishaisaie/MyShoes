import React, { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import products from '../data/products'
import RatingStars from '../components/RatingStars'
import Price from '../components/Price'
import QuantityStepper from '../components/QuantityStepper'
import { useCartDispatch } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = products.find(p => p.slug === slug)
  const dispatch = useCartDispatch()
  const [selectedImage, setSelectedImage] = useState(product ? product.images[0] : '')
  const [size, setSize] = useState('')
  const [color, setColor] = useState('')
  const [qty, setQty] = useState(1)

  if (!product) {
    return <div>Product not found</div>
  }
     if (!product) {
       return <div className="text-center py-16 dark:text-slate-300">Product not found</div>
     }

  function addToCart() {
    if (!size || !color) return
    dispatch({ type: 'add', payload: { product, size, color, qty } })
    alert('Added to cart')
  }

  const related = products.filter(p => (p.category === product.category || p.brand === product.brand) && p.id !== product.id).slice(0,4)

  return (
    <div className="py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <div className="border rounded overflow-hidden">
            <img src={selectedImage} alt={product.name} className="w-full h-96 object-cover" />
            <div className="p-3 flex gap-2">
              {product.images.map(img => (
                <button key={img} onClick={() => setSelectedImage(img)} className="w-20 h-20 border rounded overflow-hidden focus:ring-2">
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm text-slate-600">{product.brand}</p>
          <div className="mt-2 flex items-center justify-between">
            <RatingStars value={product.rating} />
            <div className="text-sm text-slate-600">{product.reviewCount} reviews</div>
          </div>

          <div className="mt-4">
            <Price price={product.priceRWF} oldPrice={product.oldPriceRWF} />
            <div className={`mt-2 text-sm ${product.stock > 0 ? 'text-green-600' : 'text-red-600'}`}>
              {product.stock > 0 ? `${product.stock} in stock` : 'Out of stock'}
            </div>
          </div>

          <div className="mt-4 space-y-4">
            <div>
              <label className="block text-sm font-medium">Size</label>
              <div className="flex flex-wrap gap-2 mt-2">
                {product.sizes.map(s => (
                  <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 border rounded ${size === s ? 'bg-primary text-white' : ''}`}>{s}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Color</label>
              <div className="flex gap-2 mt-2">
                {product.colors.map(c => (
                  <button key={c} onClick={() => setColor(c)} className={`px-3 py-1 border rounded ${color === c ? 'bg-primary text-white' : ''}`}>{c}</button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium">Quantity</label>
              <div className="mt-2">
                <QuantityStepper qty={qty} setQty={setQty} max={product.stock} />
              </div>
            </div>

            <div>
              <button disabled={!size || !color || product.stock === 0} onClick={addToCart} className="w-full px-4 py-2 bg-accent text-white rounded disabled:opacity-50">Add to cart</button>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Description</h4>
            <p className="text-sm text-slate-700 mt-2">{product.description}</p>
            <ul className="list-disc ml-5 mt-2 text-sm text-slate-700">
                         <h4 className="font-semibold dark:text-white">Description</h4>
                           <p className="text-sm text-slate-700 dark:text-slate-300 mt-2">{product.description}</p>
                           <ul className="list-disc ml-5 mt-2 text-sm text-slate-700 dark:text-slate-300">
              {product.features.map((f, i) => <li key={i}>{f}</li>)