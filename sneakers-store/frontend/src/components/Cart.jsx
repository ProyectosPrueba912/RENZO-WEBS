import { useCart } from '../context/CartContext'
import './Cart.css'

const WHATSAPP_NUMBER = '51967460215'

export default function Cart() {
  const { items, isOpen, setIsOpen, removeItem, updateQty, totalItems, totalPrice, clearCart } = useCart()

  const buildWhatsAppMessage = () => {
    if (items.length === 0) return ''

    const lines = items.map(
      i => `• ${i.product.name} | Talla: ${i.size} | Cant: ${i.qty} | $${(i.product.price * i.qty).toFixed(2)}`
    )
    const msg =
      `Hola! Me gustaría hacer el siguiente pedido:\n\n` +
      lines.join('\n') +
      `\n\n*Total: $${totalPrice.toFixed(2)}*\n\n¿Está disponible?`

    return encodeURIComponent(msg)
  }

  const handleWhatsApp = () => {
    if (items.length === 0) return
    const msg = buildWhatsAppMessage()
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank')
  }

  return (
    <>
      {/* Overlay */}
      <div
        className={`cart-overlay ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(false)}
      />

      {/* Drawer */}
      <aside className={`cart-drawer ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>
            Mi carrito
            {totalItems > 0 && <span className="cart-count-badge">{totalItems}</span>}
          </h2>
          <button className="cart-close-btn" onClick={() => setIsOpen(false)} aria-label="Cerrar carrito">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart-empty">
            <svg viewBox="0 0 24 24" width="56" height="56" fill="none" stroke="#ccc" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
            <p>Tu carrito está vacío</p>
            <button className="cart-continue-btn" onClick={() => setIsOpen(false)}>
              Ver productos
            </button>
          </div>
        ) : (
          <>
            <div className="cart-items">
              {items.map(item => (
                <div className="cart-item" key={`${item.product.id}-${item.size}`}>
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="cart-item-img"
                  />
                  <div className="cart-item-info">
                    <p className="cart-item-name">{item.product.name}</p>
                    <p className="cart-item-size">Talla: <strong>{item.size}</strong></p>
                    <p className="cart-item-price">${(item.product.price * item.qty).toFixed(2)}</p>
                    <div className="cart-item-qty">
                      <button onClick={() => updateQty(item.product.id, item.size, item.qty - 1)}>−</button>
                      <span>{item.qty}</span>
                      <button onClick={() => updateQty(item.product.id, item.size, item.qty + 1)}>+</button>
                    </div>
                  </div>
                  <button
                    className="cart-item-remove"
                    onClick={() => removeItem(item.product.id, item.size)}
                    aria-label="Eliminar producto"
                  >
                    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 6L6 18M6 6l12 12"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart-footer">
              <div className="cart-total">
                <span>Total</span>
                <span className="cart-total-price">${totalPrice.toFixed(2)}</span>
              </div>

              <button className="cart-whatsapp-btn" onClick={handleWhatsApp}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.827L.057 23.882a.5.5 0 00.61.61l6.055-1.466A11.945 11.945 0 0012 24c6.626 0 12-5.373 12-12S18.626 0 12 0zm0 21.818a9.8 9.8 0 01-5.012-1.371l-.36-.214-3.716.9.916-3.614-.234-.372A9.814 9.814 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182S21.818 6.578 21.818 12 17.422 21.818 12 21.818z"/>
                </svg>
                Pedir por WhatsApp
              </button>

              <button className="cart-clear-btn" onClick={clearCart}>
                Vaciar carrito
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  )
}
