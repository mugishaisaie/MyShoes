import React from 'react'

export default function Drawer({ open, onClose, children }) {
  if (!open) return null
  return (
    <div className="fixed inset-0 z-40">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-80 bg-white p-4 overflow-auto shadow">
        <button className="mb-2 text-sm text-slate-600" onClick={onClose}>Close</button>
        {children}
      </div>
    </div>
  )
}
