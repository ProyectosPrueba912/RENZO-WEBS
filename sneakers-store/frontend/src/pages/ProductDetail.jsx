import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import ProductCard from '../components/ProductCard'
import Footer from '../components/Footer'
import { useCart } from '../context/CartContext'
import './ProductDetail.css'

const SIZES = [35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45]

export default function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [related, setRelated] = useState([])
  const [added, setAdded] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedSize, setSelectedSize] = useState(null)
  const { addItem } = useCart()

  useEffect(() => {
    fetch(`https://renzo-webs.onrender.com/products/${id}`)
      .then(r => r.json())
      .then(data => {
        setProduct(data)
        setSelectedImage(0)
        return fetch(`https://renzo-webs.onrender.com/products?category=${data.category}`)
      })
      .then(r => r.json())
      .then(all => setRelated(all.filter(p => p.id !== parseInt(id)).slice(0, 3)))
  }, [id])

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Por favor selecciona una talla')
      return
    }
    addItem(product, selectedSize)
    setAdded(true)
    setTimeout(() => setAdded(false), 2500)
  }

  if (!product) return <div className="loading">Cargando...</div>

  const finalPrice = product.price.toFixed(2)

  return (
    <div>
      <Helmet>
        <title>{product.name} - Sneakers Store</title>
        <meta name="description" content={`${product.name} - ${product.description}. Precio: $${finalPrice}`} />
      </Helmet>

      <Navbar />

      <div className="detail-container">
        <nav className="breadcrumb">
          <Link to="/">Inicio</Link> &rsaquo; <Link to={`/?category=${product.category}`}>{product.category}</Link> &rsaquo; <span>{product.name}</span>
        </nav>

        <div className="detail-main">
          <div className="detail-image-section">
            <div className="main-image">
              <img src={product.images[selectedImage]} alt={product.name} loading="eager" />
            </div>
            <div className="image-thumbnails">
              {product.images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className={selectedImage === idx ? 'active' : ''}
                  onClick={() => setSelectedImage(idx)}
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="detail-info">
            <h1>{product.name}</h1>
            <div className="detail-price">
              <span className="final-price">${finalPrice}</span>
            </div>

            {/* Selector de talla */}
            <div className="size-selector">
              <h3>Selecciona tu talla</h3>
              <div className="sizes-grid">
                {SIZES.map(size => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              className={`buy-btn ${added ? 'added' : ''}`}
              onClick={handleAddToCart}
            >
              {added ? '✓ Agregado al carrito' : 'Agregar al carrito'}
            </button>

            <div className="detail-extra">
              <h3>Detalles del producto</h3>
              <p>{product.description}</p>
              <ul>
                <li>Categoría: {product.category}</li>
                <li>Género: {product.gender}</li>
                <li>Envío disponible a todo el país</li>
                <li>Garantía de 30 días</li>
              </ul>
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="related-section">
            <h2 className="section-title">Otros productos</h2>
            <div className="related-grid">
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}
