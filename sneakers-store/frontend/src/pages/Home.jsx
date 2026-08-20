import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Carousel from '../components/Carousel'
import ProductCard from '../components/ProductCard'
import SkeletonCard from '../components/SkeletonCard'
import Footer from '../components/Footer'
import './Home.css'

const CATEGORIES_LIST = ['Hombre', 'Mujer', 'Niños']
const SIZES = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]
const BRANDS = ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Converse', 'Vans', 'Fila', 'Under Armour', 'Asics']

export default function Home() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedSizes, setSelectedSizes] = useState([])
  const [selectedBrands, setSelectedBrands] = useState([])
  const [priceMin, setPriceMin] = useState(0)
  const [priceMax, setPriceMax] = useState(200)
  const [showFilters, setShowFilters] = useState(true)
  
  // Controlar secciones expandidas
  const [expandedSections, setExpandedSections] = useState({
    category: true,
    size: false,
    brand: false,
    price: true
  })

  const [searchParams] = useSearchParams()
  const categoryParam = searchParams.get('category')

  useEffect(() => {
    setLoading(true)
    fetch('http://localhost:8000/products')
      .then(r => r.json())
      .then(data => { 
        setProducts(data)
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam)
    }
  }, [categoryParam])

  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const toggleSize = (size) => {
    setSelectedSizes(prev => 
      prev.includes(size) ? prev.filter(s => s !== size) : [...prev, size]
    )
  }

  const toggleBrand = (brand) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    )
  }

  const clearFilters = () => {
    setSearch('')
    setSelectedCategory(null)
    setSelectedSizes([])
    setSelectedBrands([])
    setPriceMin(0)
    setPriceMax(200)
  }

  // Filtrado
  const filtered = products
    .filter(p => p.name.toLowerCase().includes(search.toLowerCase()))
    .filter(p => !selectedCategory || p.category === selectedCategory)
    .filter(p => selectedBrands.length === 0 || selectedBrands.some(brand => p.name.includes(brand)))
    .filter(p => p.price >= priceMin && p.price <= priceMax)

  const categories = [
    { name: 'Hombre', image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop&q=80' },
    { name: 'Mujer',  image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&h=400&fit=crop&q=80' },
    { name: 'Niños',  image: 'https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=600&h=400&fit=crop&q=80' },
  ]

  const buyStyles = [
    { title: '🛒 Online',    desc: 'Compra desde donde estés, 24/7.',              image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&q=80', link: '/compra-online' },
    { title: '💬 WhatsApp', desc: 'Escríbenos y te asesoramos al instante.',       image: 'https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=600&h=400&fit=crop&q=80', link: '/compra-whatsapp' },
    { title: '🚚 Delivery',  desc: 'Recibe tu pedido en la puerta de tu casa.',    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop&q=80', link: '/compra-delivery' },
  ]

  return (
    <div>
      <Helmet>
        <title>Sneakers Store - Zapatillas de Calidad para Hombre, Mujer y Niños</title>
        <meta name="description" content="Compra las mejores zapatillas deportivas y casuales. Envío gratis en pedidos superiores a S/100. Compra online, por WhatsApp o con delivery a domicilio." />
      </Helmet>

      <Navbar />
      <div className="carousel-wrapper">
        <Carousel />
      </div>

      {/* Categorías */}
      <section className="categories-section fade-in">
        <div className="categories-grid">
          {categories.map(cat => (
            <a
              key={cat.name}
              href="#productos"
              className="category-card"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCategory(cat.name)
                document.getElementById('productos')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <img src={cat.image} alt={cat.name} loading="lazy" />
              <div className="category-overlay"><span>{cat.name}</span></div>
            </a>
          ))}
        </div>
      </section>

      {/* Productos con filtro lateral */}
      <section className="section fade-in" id="productos">
        <div className="products-header">
          <button className="filter-toggle-desktop" onClick={() => setShowFilters(!showFilters)}>
            {showFilters ? '← Ocultar Filtros' : 'Mostrar Filtros →'}
          </button>
        </div>

        <div className="products-layout">
          {/* Sidebar de filtros */}
          {showFilters && (
            <aside className="filters-sidebar">
              <div className="filters-header">
                <h3>FILTROS</h3>
                <button className="clear-filters" onClick={clearFilters}>Limpiar</button>
              </div>

            {/* Categoría */}
            <div className="filter-section">
              <div className="filter-title" onClick={() => toggleSection('category')}>
                <span>CATEGORÍA</span>
                <span className="toggle-icon">{expandedSections.category ? '−' : '+'}</span>
              </div>
              {expandedSections.category && (
                <div className="filter-content">
                  {CATEGORIES_LIST.map(cat => (
                    <label key={cat} className="filter-option">
                      <input
                        type="radio"
                        name="category"
                        checked={selectedCategory === cat}
                        onChange={() => setSelectedCategory(cat)}
                      />
                      <span>{cat}</span>
                    </label>
                  ))}
                  {selectedCategory && (
                    <button className="remove-filter" onClick={() => setSelectedCategory(null)}>
                      ✕ {selectedCategory}
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Tamaño */}
            <div className="filter-section">
              <div className="filter-title" onClick={() => toggleSection('size')}>
                <span>TAMAÑO</span>
                <span className="toggle-icon">{expandedSections.size ? '−' : '+'}</span>
              </div>
              {expandedSections.size && (
                <div className="filter-content">
                  <div className="size-grid">
                    {SIZES.map(size => (
                      <button
                        key={size}
                        className={`size-filter-btn ${selectedSizes.includes(size) ? 'active' : ''}`}
                        onClick={() => toggleSize(size)}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Marca */}
            <div className="filter-section">
              <div className="filter-title" onClick={() => toggleSection('brand')}>
                <span>MARCA</span>
                <span className="toggle-icon">{expandedSections.brand ? '−' : '+'}</span>
              </div>
              {expandedSections.brand && (
                <div className="filter-content">
                  {BRANDS.map(brand => (
                    <label key={brand} className="filter-option">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                      />
                      <span>{brand}</span>
                    </label>
                  ))}
                </div>
              )}
            </div>

            {/* Rango de Precio */}
            <div className="filter-section">
              <div className="filter-title" onClick={() => toggleSection('price')}>
                <span>RANGO DE PRECIO</span>
                <span className="toggle-icon">{expandedSections.price ? '−' : '+'}</span>
              </div>
              {expandedSections.price && (
                <div className="filter-content">
                  <div className="price-inputs">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceMin}
                      onChange={(e) => setPriceMin(Number(e.target.value))}
                    />
                    <span>-</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceMax}
                      onChange={(e) => setPriceMax(Number(e.target.value))}
                    />
                  </div>
                  <div className="price-range-display">
                    ${priceMin} — ${priceMax}
                  </div>
                </div>
              )}
            </div>
          </aside>
          )}

          {/* Grid de productos */}
          <div className="products-main">
            {loading ? (
              <div className="products-grid">
                {[...Array(8)].map((_, i) => <SkeletonCard key={i} />)}
              </div>
            ) : filtered.length > 0 ? (
              <div className="products-grid">
                {filtered.map(p => <ProductCard key={p.id} product={p} />)}
              </div>
            ) : (
              <div className="no-results">
                <span>😕</span>
                <p>No encontramos zapatillas con esos filtros.</p>
                <button onClick={clearFilters}>Limpiar filtros</button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3 formas de compra */}
      <section className="section other-details fade-in">
        <h2 className="section-title">3 Formas de Compra</h2>
        <div className="details-grid">
          {buyStyles.map(style => (
            <div key={style.title} className="detail-item">
              <img src={style.image} alt={style.title} loading="lazy" />
              <div className="detail-overlay">
                <h3>{style.title}</h3>
                <p>{style.desc}</p>
                <a href={style.link} className="detail-btn">Ver Más</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
