import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Nosotros.css'

export default function Nosotros() {
  return (
    <div>
      <Helmet>
        <title>Nosotros - Sneakers Store | Nuestra Historia y Valores</title>
        <meta name="description" content="Conoce la historia de Sneakers Store. Desde 2025 ofreciendo zapatillas de calidad con pasión, compromiso e innovación. Descubre nuestros valores y misión." />
      </Helmet>

      <Navbar />
      
      <div className="nosotros-hero">
        <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=1400&h=400&fit=crop" alt="Sobre Nosotros" />
        <div className="nosotros-hero-overlay">
          <h1>SOMOS SNEAKERS STORE</h1>
          <p>Pasión por las zapatillas desde 2025</p>
        </div>
      </div>

      <div className="nosotros-container">
        
        <section className="nosotros-section">
          <div className="nosotros-content">
            <h2>Nuestra Historia</h2>
            <p>
              Sneakers Store nació de la pasión por las zapatillas y el deseo de ofrecer a nuestros clientes 
              los mejores modelos del mercado. Desde nuestros inicios en 2025, nos hemos comprometido a 
              brindar calidad, estilo y comodidad en cada par que vendemos.
            </p>
            <p>
              Lo que comenzó como un pequeño emprendimiento, hoy se ha convertido en una tienda de referencia 
              para los amantes de las zapatillas en todo el país. Trabajamos con las mejores marcas y 
              mantenemos un catálogo actualizado con las últimas tendencias.
            </p>
          </div>
          <div className="nosotros-image">
            <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&h=400&fit=crop" alt="Nuestra tienda" />
          </div>
        </section>

        <section className="nosotros-section">
          <div className="nosotros-image">
            <img src="https://images.unsplash.com/photo-1556906781-9a412961c28c?w=500&h=400&fit=crop" alt="Calidad" />
          </div>
          <div className="nosotros-content">
            <h2>Nuestra Misión</h2>
            <p>
              Inspirar una vida activa y con estilo, ofreciendo zapatillas de alta calidad que acompañen 
              cada paso de nuestros clientes. Creemos que el calzado correcto puede transformar tu día, 
              ya sea para entrenar, trabajar o salir con amigos.
            </p>
            <p>
              Nos esforzamos por crear experiencias memorables, desde la navegación en nuestra web hasta 
              el momento en que recibes tu pedido en casa. Tu satisfacción es nuestra prioridad.
            </p>
          </div>
        </section>

        <section className="nosotros-valores">
          <h2>Nuestros Valores</h2>
          <div className="valores-grid">
            <div className="valor-card">
              <span className="valor-icon">✨</span>
              <h3>Calidad</h3>
              <p>Solo trabajamos con productos 100% originales de las mejores marcas.</p>
            </div>
            <div className="valor-card">
              <span className="valor-icon">🤝</span>
              <h3>Confianza</h3>
              <p>Construimos relaciones duraderas con nuestros clientes basadas en la transparencia.</p>
            </div>
            <div className="valor-card">
              <span className="valor-icon">🚀</span>
              <h3>Innovación</h3>
              <p>Siempre buscamos mejorar y ofrecer nuevas formas de comprar.</p>
            </div>
            <div className="valor-card">
              <span className="valor-icon">💚</span>
              <h3>Compromiso</h3>
              <p>Nos comprometemos con cada cliente para garantizar su satisfacción total.</p>
            </div>
          </div>
        </section>

        <section className="nosotros-cta">
          <div className="cta-content">
            <h2>¿Listo para encontrar tus zapatillas perfectas?</h2>
            <p>Explora nuestro catálogo y descubre los mejores modelos para ti.</p>
            <a href="/" className="cta-btn">Ver Productos</a>
          </div>
          <div className="cta-images">
            <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=200&fit=crop" alt="Zapatillas 1" />
            <img src="https://images.unsplash.com/photo-1549298916-b41d501d3772?w=300&h=200&fit=crop" alt="Zapatillas 2" />
            <img src="https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=300&h=200&fit=crop" alt="Zapatillas 3" />
          </div>
        </section>

      </div>

      <Footer />
    </div>
  )
}
