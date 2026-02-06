import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t mt-8">
        <footer className="bg-slate-50 dark:bg-slate-900 border-t dark:border-slate-800 mt-8">
      <div className="mx-auto px-4 py-10" style={{ maxWidth: '1100px' }}>
        <div className="flex flex-col md:flex-row md:justify-between gap-6">
          <div>
            <h4 className="font-bold">My Shoes Rwanda</h4>
            <p className="text-sm text-slate-600 mt-2">Local e-commerce demo — buy shoes, pay on delivery, WhatsApp checkout.</p>
            <p className="text-sm mt-3">© {new Date().getFullYear()} My Shoes Rwanda</p>
                       <h4 className="font-bold dark:text-white">My Shoes Rwanda</h4>
                       <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">Local e-commerce demo — buy shoes, pay on delivery, WhatsApp checkout.</p>
                       <p className="text-sm mt-3 text-slate-600 dark:text-slate-400">© {new Date().getFullYear()} My Shoes Rwanda</p>
          </div>

          <div>
            <h5 className="font-semibold">Contact</h5>
            <p className="text-sm text-slate-600 mt-2">Phone: +250 78 000 0000</p>
            <p className="text-sm">Email: support@myshoes.rw</p>
            <p className="text-sm mt-2">WhatsApp: <a className="text-accent" href="https://wa.me/250780000000">Chat with us</a></p>
          </div>

          <div>
            <h5 className="font-semibold">Quick Links</h5>
            <ul className="text-sm mt-2 space-y-1">
              <li><Link to="/shop" className="text-slate-700">Shop</Link></li>
              <li><Link to="/size-guide" className="text-slate-700">Size Guide</Link></li>
              <li><a className="text-slate-700" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a></li>
                         <h5 className="font-semibold dark:text-white">Contact</h5>
     