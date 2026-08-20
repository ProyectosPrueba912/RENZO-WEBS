import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null)

export function CartProvider({ children }) {
  const [items, setItems] = useState([])       // { product, size, qty }
  const [isOpen, setIsOpen] = useState(false)

  const addItem = (product, size) => {
    setItems(prev => {
      const existing = prev.find(i => i.product.id === product.id && i.size === size)
      if (existing) {
        return prev.map(i =>
          i.product.id === product.id && i.size === size
            ? { ...i, qty: i.qty + 1 }
            : i
        )
      }
      return [...prev, { product, size, qty: 1 }]
    })
    setIsOpen(true)
  }

  const removeItem = (productId, size) => {
    setItems(prev => prev.filter(i => !(i.product.id === productId && i.size === size)))
  }

  const updateQty = (productId, size, qty) => {
    if (qty < 1) {
      removeItem(productId, size)
      return
    }
    setItems(prev =>
      prev.map(i =>
        i.product.id === productId && i.size === size ? { ...i, qty } : i
      )
    )
  }

  const clearCart = () => setItems([])

  const totalItems = items.reduce((acc, i) => acc + i.qty, 0)
  const totalPrice = items.reduce((acc, i) => acc + i.product.price * i.qty, 0)

  return (
    <CartContext.Provider value={{ items, isOpen, setIsOpen, addItem, removeItem, updateQty, clearCart, totalItems, totalPrice }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
