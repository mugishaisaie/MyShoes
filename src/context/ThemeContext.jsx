import React, { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('theme_mode')
    if (stored) {
      const dark = stored === 'dark'
      setIsDark(dark)
      applyTheme(dark)
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDark(prefersDark)
      applyTheme(prefersDark)
    }
  }, [])

  function applyTheme(dark) {
    const html = document.documentElement
    if (dark) {
      html.classList.add('dark')
    } else {
      html.classList.remove('dark')
    }
  }

  function toggleTheme() {
    setIsDark(prev => {
      const newValue = !prev
      applyTheme(newValue)
      localStorage.setItem('theme_mode', newValue ? 'dark' : 'light')
      return newValue
    })
  }

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
