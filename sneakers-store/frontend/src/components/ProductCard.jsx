import { useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const [isHovered, setIsHovered] = useState(false)
  
  // Usar la segunda imagen si existe, sino repetir la primera
  const hoverImage = product.images && product.images[1] ? product.images[1] : product.image

  return (
    <Link 
      to={`/product/${product.id}`} 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="image-container">
        <img 
          src={product.image} 
          alt={product.name} 
          loading="lazy"
          className={`product-image ${isHovered ? 'fade-out' : 'fade-in'}`}
        />
        <img 
          src={hoverImage} 
          alt={`${product.name} - Vista 2`} 
          loading="lazy"
          className={`product-image product-image-hover ${isHovered ? 'fade-in' : 'fade-out'}`}
        />
      </div>
      <div className="card-info">
        <h3>{product.name}</h3>
        <div className="price-row">
          <span className="final-price">${product.price}</span>
        </div>
      </div>
    </Link>
  )
}
