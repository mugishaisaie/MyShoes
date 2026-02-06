import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import { useTheme } from '../context/ThemeContext'
import { Badge } from './Badge'
import { useState } from 'react'

export default function Header() {
  const cart = useCart()
  const { isDark, toggleTheme } = useTheme()
  const navigate = useNavigate()
  const [query, setQuery] = useState('')

  const itemsCount = cart.items.reduce((s, i) => s + i.qty, 0)

  function onSearch(e) {
    e.preventDefault()
    if (query.trim()) {
      navigate(`/shop?search=${encodeURIComponent(query.trim())}`)
      setQuery('')
    } else {
      navigate('/shop')
    }
  }

  return (
    <header className="sticky top-0 z-30 bg-white dark:bg-slate-900 border-b dark:border-slate-800">
      <div className="mx-auto flex items-center justify-between px-4 py-3" style={{ maxWidth: '1100px' }}>
        <div className="flex items-center gap-4">
          <Link to="/" className="text-lg font-bold text-primary dark:text-white">My Shoes Rwanda</Link>
          <nav className="hidden md:flex gap-3 items-center">
            <NavLink to="/" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700 dark:text-slate-300'}>Home</NavLink>
            <NavLink to="/shop" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700 dark:text-slate-300'}>Shop</NavLink>
            <NavLink to="/size-guide" className={({isActive}) => isActive ? 'text-accent font-semibold' : 'text-slate-700 dark:text-slate-300'}>Size Guide</NavLink>
          </nav>
        </div>

        <form onSubmit={onSearch} className="flex-1 mx-4 hidden sm:flex">
          <label htmlFor="site-search" className="sr-only">Search products</label>
          <input id="site-search" value={query} onChange={(e) => setQuery(e.target.value)} className="w-full border dark:border-slate-700 dark:bg-slate-800 dark:text-white rounded-l px-3 py-2 focus:ring-2 focus:ring-indigo-300" placeholder="Search by name or brand..." />
          <button type="submit" className="bg-primary dark:bg-slate-800 text-white px-3 rounded-r hover:bg-slate-800 dark:hover:bg-slate-700">Search</button>
        </form>

        <div className="flex items-center gap-3">
          <button onClick={toggleTheme} aria-label="Toggle dark mode" className="p-2 rounded hover:bg-slate-100 dark:hover:bg-slate-800 transition">
            {isDark ? (
              <svg className="w-6 h-6 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4.293 1.707a1 1 0 011.414-1.414l.707.707a1 1 0 01-1.414 1.414l-.707-.707zm2 2a1 1 0 011.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zm2 2a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414-1.414l.707-.707zM10 9a1 1 0 100 2 1 1 0 000-2zmm0 2a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 20 20">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
            )}
          </button>

          <Link to="/cart" className="relative inline-flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-700 dark:text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4" />
            </svg>
            <span className="sr-only">Cart</span>
            <span className="text-sm hidden sm:inline dark:text-slate-300">Cart</span>
            <span className="ml-1">
              <span className="inline-flex items-center justify-center px-2 py-1 text-xs font-medium bg-accent text-white rounded-full">
                {itemsCount}
              </span>
            </span>
          </Link>
        </div>
      </div>
    </header>
  )
}

