import React from 'react'
import products from '../data/products'
import ProductCard from '../components/ProductCard'
import Hero from '../components/Hero'
import CategoriesSection from '../components/CategoriesSection'
import { Link } from 'react-router-dom'

export default function Home() {
  const featured = products.filter(p => p.isFeatured).slice(0, 6)
  return (
    <div>
      <Hero />
      <CategoriesSection />
      
      <div className="mx-auto px-4 sm:px-6 py-8" style={{ maxWidth: '1100px' }}>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">Featured Products</h2>
            <Link to="/shop" className="text-accent">See all</Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {featured.map(p => <ProductCard key={p.id} product={p} />)}
          </div>
        </section>
      </div>
    </div>
  )
}
