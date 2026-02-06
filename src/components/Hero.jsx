import React from 'react'
import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section className="hero-bg relative overflow-hidden py-24 sm:py-32 md:py-40">
      <div className="mx-auto px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left content */}
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight animate-slide-in-up">
              Step Into Style
            </h1>
            <p className="text-lg text-slate-200 animate-slide-in-up" style={{ animationDelay: '0.2s' }}>
              Premium shoes designed for Rwanda. Walk with confidence, comfort, and style on every street.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-up" style={{ animationDelay: '0.4s' }}>
              <Link to="/shop" className="px-8 py-3 bg-accent text-white rounded font-semibold hover:bg-red-600 transition text-center">
                Shop Now
              </Link>
              <Link to="/size-guide" className="px-8 py-3 border-2 border-white text-white rounded font-semibold hover:bg-white hover:text-primary transition text-center">
                Size Guide
              </Link>
            </div>
          </div>

          {/* Right side - Animated cards */}
          <div className="relative h-80 md:h-96">
            {/* Card 1 */}
            <div className="absolute top-0 right-0 w-48 h-64 bg-gradient-to-br from-accent to-red-600 rounded-lg shadow-2xl transform hover:scale-105 transition animate-fade-in-scale" style={{ animationDelay: '0.2s' }}>
              <div className="p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold">1000+</h3>
                  <p className="text-sm opacity-90">Happy Customers</p>
                </div>
                <svg className="w-12 h-12 opacity-50" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
                </svg>
              </div>
            </div>

            {/* Card 2 */}
            <div className="absolute bottom-0 left-0 w-48 h-64 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg shadow-2xl transform hover:scale-105 transition animate-fade-in-scale" style={{ animationDelay: '0.4s' }}>
              <div className="p-6 h-full flex flex-col justify-between text-white">
                <div>
                  <h3 className="text-2xl font-bold">Fast</h3>
                  <p className="text-sm opacity-90">Local Delivery</p>
                </div>
                <svg className="w-12 h-12 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background shapes */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-400 rounded-full opacity-10 blur-3xl"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-accent rounded-full opacity-10 blur-3xl"></div>
    </section>
  )
}
