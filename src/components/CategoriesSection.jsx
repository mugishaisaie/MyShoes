import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoriesSection() {
  const categories = [
    {
      name: "Men's Shoes",
      slug: 'men',
      image: 'https://picsum.photos/seed/mencat/400/300',
      description: 'Stylish and comfortable shoes for every occasion',
      color: 'from-blue-500 to-blue-600'
    },
    {
      name: "Women's Shoes",
      slug: 'women',
      image: 'https://picsum.photos/seed/womencat/400/300',
      description: 'Elegant designs perfect for your lifestyle',
      color: 'from-pink-500 to-pink-600'
    },
    {
      name: "Children's Shoes",
      slug: 'kids',
      image: 'https://picsum.photos/seed/kidscat/400/300',
      description: 'Fun and durable shoes for active kids',
      color: 'from-green-500 to-green-600'
    }
  ]

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">Shop by Category</h2>
          <p className="text-slate-600 text-lg">Find the perfect shoes for everyone</p>
                     <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 dark:from-slate-900 to-white dark:to-slate-950">
                     <h2 className="text-3xl sm:text-4xl font-bold text-primary dark:text-white mb-4">Shop by Category</h2>
                     <p className="text-slate-600 dark:text-slate-400 text-lg">Find the perfect shoes for everyone</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((category) => (
            <Link key={category.slug} to={`/shop`} className="group">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-300">
                {/* Image */}
                <div className="relative h-64 overflow-hidden bg-slate-200">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-40 transition duration-300`}></div>
                </div>

                {/* Content */}
                <div className={`bg-gradient-to-br ${category.color} text-white p-6 relative`}>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{category.name}</h3>
                  <p className="text-sm opacity-90 mb-4">{category.description}</p>
                  <div className="inline-flex items-center gap-2 font-semibold">
                    <span>Explore</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
