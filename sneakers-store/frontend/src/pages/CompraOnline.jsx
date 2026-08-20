import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CompraEstilo.css'

const tabs = [
  { label: 'Compra Online', path: '/compra-online' },
  { label: 'Compra por WhatsApp', path: '/compra-whatsapp' },
  { label: 'Delivery a domicilio', path: '/compra-delivery' },
]

export default function CompraOnline() {
  return (
    <div>
      <Helmet>
        <title>Compra Online - Sneakers Store | Compra 24/7 desde Casa</title>
        <meta name="description" content="Compra zapatillas online las 24 horas. Paga con tarjeta, Yape, Plin o transferencia. Envío gratis en pedidos superiores a S/100. Lima: 1-3 días." />
      </Helmet>

      <Navbar />
      <div className="estilo-hero">
        <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1400&h=400&fit=crop" alt="Compra Online" />
        <div className="estilo-hero-overlay">
          <h1>COMPRA A TU ESTILO</h1>
          <p>De la manera más rápida y conveniente para ti.</p>
        </div>
      </div>

      <div className="estilo-tabs">
        {tabs.map(t => (
          <a key={t.path} href={t.path} className={`estilo-tab ${t.path === '/compra-online' ? 'active' : ''}`}>
            {t.label}
          </a>
        ))}
      </div>

      <div className="estilo-container">
        <h2>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#7a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '8px'}}>
            <circle cx="9" cy="21" r="1"/>
            <circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          COMPRA ONLINE
        </h2>
        <p className="estilo-intro">Realiza tu compra desde la comodidad de tu hogar, disponible las 24 horas del día, los 7 días de la semana.</p>

        <div className="estilo-steps">
          <div className="step">
            <span className="step-num">1</span>
            <div>
              <h4>Elige tus zapatillas</h4>
              <p>Navega por nuestro catálogo y selecciona el modelo, talla y color que prefieras.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <div>
              <h4>Agrega al carrito</h4>
              <p>Haz clic en "Comprar ahora" y revisa tu pedido antes de continuar.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <h4>Elige tu método de pago</h4>
              <p>Aceptamos tarjetas de débito y crédito, transferencias bancarias, Yape y Plin.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">4</span>
            <div>
              <h4>Confirma tu pedido</h4>
              <p>Recibirás un correo de confirmación con el número de seguimiento de tu envío.</p>
            </div>
          </div>
        </div>

        <div className="estilo-info-box">
          <h3>Medios de pago aceptados</h3>
          <ul>
            <li>· Tarjetas de débito y crédito (Visa, Mastercard)</li>
            <li>· Transferencia bancaria</li>
            <li>· Yape y Plin</li>
            <li>· Pago en efectivo (agentes)</li>
          </ul>
        </div>

        <div className="estilo-info-box">
          <h3>Tiempos de entrega</h3>
          <ul>
            <li>▫ Lima: 1 a 3 días hábiles</li>
            <li>▫ Provincias: 3 a 5 días hábiles</li>
            <li>▫ Envío gratis en pedidos superiores a S/100</li>
          </ul>
        </div>

        <div className="estilo-faq">
          <h3>Preguntas Frecuentes</h3>
          <div className="faq-item">
            <h4>¿Es seguro comprar online?</h4>
            <p>Sí, utilizamos conexión SSL y encriptación de datos. Nunca almacenamos información de tarjetas.</p>
          </div>
          <div className="faq-item">
            <h4>¿Puedo cambiar mi pedido después de comprarlo?</h4>
            <p>Puedes modificarlo dentro de las primeras 2 horas contactándonos por WhatsApp o email.</p>
          </div>
          <div className="faq-item">
            <h4>¿Cómo sé si mi pedido fue confirmado?</h4>
            <p>Recibirás un correo electrónico de confirmación con los detalles y el número de seguimiento.</p>
          </div>
        </div>

        <a href="/" className="estilo-cta">Ver productos</a>
      </div>

      <Footer />
    </div>
  )
}
