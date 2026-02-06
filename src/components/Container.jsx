import React from 'react'

export default function Container({ children }) {
  return (
    <div className="mx-auto w-full px-4 sm:px-6" style={{ maxWidth: '1100px' }}>
      {children}
    </div>
  )
}
