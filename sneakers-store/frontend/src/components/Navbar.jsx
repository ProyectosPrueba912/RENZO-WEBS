import { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useCart } from '../context/CartContext'
import Cart from './Cart'
import './Navbar.css'
import './Cart.css'

const allLinks = [
  { 
    label: 'Lo Nuevo', 
    path: '/?category=Lo Nuevo',
    dropdown: null
  },
  { 
    label: 'Hombre', 
    path: '/?category=Hombre',
    dropdown: [
      { label: 'Zapatillas Deportivas', path: '/?category=Hombre&type=deportivas' },
      { label: 'Zapatillas Casuales', path: '/?category=Hombre&type=casuales' },
      { label: 'Zapatillas Running', path: '/?category=Hombre&type=running' },
      { label: 'Ver Todo Hombre', path: '/?category=Hombre' },
    ]
  },
  { 
    label: 'Mujer', 
    path: '/?category=Mujer',
    dropdown: [
      { label: 'Zapatillas Deportivas', path: '/?category=Mujer&type=deportivas' },
      { label: 'Zapatillas Casuales', path: '/?category=Mujer&type=casuales' },
      { label: 'Zapatillas Running', path: '/?category=Mujer&type=running' },
      { label: 'Ver Todo Mujer', path: '/?category=Mujer' },
    ]
  },
  { 
    label: 'Niños', 
    path: '/?category=Niños',
    dropdown: [
      { label: 'Niños (6-12 años)', path: '/?category=Niños&age=6-12' },
      { label: 'Bebés (0-5 años)', path: '/?category=Niños&age=0-5' },
      { label: 'Ver Todo Niños', path: '/?category=Niños' },
    ]
  },
  { 
    label: 'Nosotros', 
    path: '/nosotros',
    dropdown: null
  },
  { 
    label: 'Contacto', 
    path: '/contacto',
    dropdown: null
  },
]

export default function Navbar() {
  const [dropdown, setDropdown] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [closeTimeout, setCloseTimeout] = useState(null)
  const navigate = useNavigate()
  const location = useLocation()
  const { totalItems, setIsOpen } = useCart()
  
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMouseEnter = (name) => {
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
    setDropdown(name)
  }

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setDropdown(null)
    }, 150)
    setCloseTimeout(timeout)
  }

  const handleLinkClick = (path) => {
    navigate(path)
    setDropdown(null)
    if (closeTimeout) {
      clearTimeout(closeTimeout)
      setCloseTimeout(null)
    }
  }

  return (
    <>
      <div className="top-banner">
        <p>ENVÍOS GRATIS POR PEDIDOS SUPERIORES A $100 — VER TÉRMINOS AQUÍ</p>
      </div>

      <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!isHome ? 'fixed-nav' : ''}`}>
        <div className="nav-inner">

          {/* Links izquierda */}
          <ul className="nav-group-left">
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('Niños')}
              onMouseLeave={handleMouseLeave}
            >
              <span onClick={() => handleLinkClick('/?category=Niños')}>
                NIÑOS
              </span>
              {dropdown === 'Niños' && (
                <div className="dropdown">
                  <span onClick={() => handleLinkClick('/?category=Niños&age=6-12')}>Niños (6-12 años)</span>
                  <span onClick={() => handleLinkClick('/?category=Niños&age=0-5')}>Bebés (0-5 años)</span>
                  <span onClick={() => handleLinkClick('/?category=Niños')}>Ver Todo Niños</span>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('Hombre')}
              onMouseLeave={handleMouseLeave}
            >
              <span onClick={() => handleLinkClick('/?category=Hombre')}>
                HOMBRE
              </span>
              {dropdown === 'Hombre' && (
                <div className="dropdown">
                  <span onClick={() => handleLinkClick('/?category=Hombre&type=deportivas')}>Zapatillas Deportivas</span>
                  <span onClick={() => handleLinkClick('/?category=Hombre&type=casuales')}>Zapatillas Casuales</span>
                  <span onClick={() => handleLinkClick('/?category=Hombre&type=running')}>Zapatillas Running</span>
                  <span onClick={() => handleLinkClick('/?category=Hombre')}>Ver Todo Hombre</span>
                </div>
              )}
            </li>
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('Mujer')}
              onMouseLeave={handleMouseLeave}
            >
              <span onClick={() => handleLinkClick('/?category=Mujer')}>
                MUJER
              </span>
              {dropdown === 'Mujer' && (
                <div className="dropdown">
                  <span onClick={() => handleLinkClick('/?category=Mujer&type=deportivas')}>Zapatillas Deportivas</span>
                  <span onClick={() => handleLinkClick('/?category=Mujer&type=casuales')}>Zapatillas Casuales</span>
                  <span onClick={() => handleLinkClick('/?category=Mujer&type=running')}>Zapatillas Running</span>
                  <span onClick={() => handleLinkClick('/?category=Mujer')}>Ver Todo Mujer</span>
                </div>
              )}
            </li>
          </ul>

          {/* Logo centro */}
          <Link to="/" className="logo">
            <span className="logo-script">Sneakers</span>
            <span className="logo-sub">Since 2025</span>
          </Link>

          {/* Links derecha */}
          <ul className="nav-group-right">
            <li 
              className="nav-item"
              onMouseEnter={() => handleMouseEnter('Servicios')}
              onMouseLeave={handleMouseLeave}
            >
              <span>SERVICIOS</span>
              {dropdown === 'Servicios' && (
                <div className="dropdown">
                  <span onClick={() => handleLinkClick('/compra-online')}>Compra Online</span>
                  <span onClick={() => handleLinkClick('/compra-whatsapp')}>Compra por WhatsApp</span>
                  <span onClick={() => handleLinkClick('/compra-delivery')}>Delivery</span>
                </div>
              )}
            </li>
            <li className="nav-item">
              <span onClick={() => handleLinkClick('/nosotros')}>
                NOSOTROS
              </span>
            </li>
            <li className="nav-item">
              <span onClick={() => handleLinkClick('/contacto')}>
                CONTACTO
              </span>
            </li>
          </ul>

        </div>
      </nav>

      {/* Carrito flotante en esquina */}
      <button className="cart-floating-btn" onClick={() => setIsOpen(true)} aria-label="Abrir carrito">
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        {totalItems > 0 && (
          <span className="cart-floating-count">{totalItems}</span>
        )}
      </button>

      <Cart />
    </>
  )
}
