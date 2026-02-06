import React, { createContext, useContext, useReducer, useEffect } from 'react'

const CartStateContext = createContext()
const CartDispatchContext = createContext()

const STORAGE_KEY = 'myshoes_cart_v1'

function cartReducer(state, action) {
  switch (action.type) {
    case 'hydrate':
      return action.payload
    case 'add': {
      const { product, size, color, qty } = action.payload
      const key = `${product.id}_${size}_${color}`
      const existing = state.items.find(i => i.key === key)
      let items
      if (existing) {
        items = state.items.map(i => i.key === key ? { ...i, qty: Math.min(i.qty + qty, product.stock) } : i)
      } else {
        items = [...state.items, {
          key,
          productId: product.id,
          slug: product.slug,
          name: product.name,
          brand: product.brand,
          size,
          color,
          priceRWF: product.priceRWF,
          image: product.images[0],
          qty,
          stock: product.stock
        }]
      }
      return { ...state, items }
    }
    case 'updateQty': {
      const { key, qty } = action.payload
      const items = state.items.map(i => i.key === key ? { ...i, qty: Math.max(1, Math.min(qty, i.stock)) } : i)
      return { ...state, items }
    }
    case 'remove': {
      const items = state.items.filter(i => i.key !== action.payload.key)
      return { ...state, items }
    }
    case 'clear':
      return { ...state, items: [] }
    default:
      return state
  }
}

const initialState = { items: [] }

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState)

  useEffect(() => {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      try {
        const parsed = JSON.parse(raw)
        dispatch({ type: 'hydrate', payload: parsed })
      } catch (e) {
        // ignore
      }
    }
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
  }, [state])

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  )
}

export function useCart() {
  return useContext(CartStateContext)
}
export function useCartDispatch() {
  return useContext(CartDispatchContext)
}
