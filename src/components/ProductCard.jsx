import React from 'react'
import { Link } from 'react-router-dom'
import RatingStars from './RatingStars'
import Price from './Price'

export default function ProductCard({ product }) {
  return (
    <article className="border rounded-md overflow-hidden hover:shadow transition">
      <Link to={`/product/${product.slug}`} aria-label={`View ${product.name}`}>
        <img src={product.images[0]} alt={product.name} className="w-full h-56 object-cover" />
      </Link>
      <div className="p-3">
        <h3 className="text-sm font-semibold"><Link to={`/product/${product.slug}`}>{product.name}</Link></h3>
        <p className="text-xs text-slate-500">{product.brand}</p>
             <article className="border dark:border-slate-700 rounded-md overflow-hidden hover:shadow dark:hover:shadow-lg transition dark:bg-slate-800">
               <p className="text-xs text-slate-500 dark:text-slate-400">{product.brand}</p>