import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CompraEstilo.css'

const tabs = [
  { label: 'Compra Online', path: '/compra-online' },
  { label: 'Compra por WhatsApp', path: '/compra-whatsapp' },
  { label: 'Delivery a domicilio', path: '/compra-delivery' },
]

export default function CompraDelivery() {
  return (
    <div>
      <Helmet>
        <title>Delivery a Domicilio - Sneakers Store | Envío Rápido y Seguro</title>
        <meta name="description" content="Delivery rápido a todo el Perú. Lima: 1-2 días, Provincias: 3-5 días. Envío gratis en pedidos superiores a S/100. Rastrea tu pedido en tiempo real." />
      </Helmet>

      <Navbar />
      <div className="estilo-hero">
        <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&h=400&fit=crop" alt="Delivery" />
        <div className="estilo-hero-overlay">
          <h1>COMPRA A TU ESTILO</h1>
          <p>De la manera más rápida y conveniente para ti.</p>
        </div>
      </div>

      <div className="estilo-tabs">
        {tabs.map(t => (
          <a key={t.path} href={t.path} className={`estilo-tab ${t.path === '/compra-delivery' ? 'active' : ''}`}>
            {t.label}
          </a>
        ))}
      </div>

      <div className="estilo-container">
        <h2>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#7a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '8px'}}>
            <rect x="1" y="3" width="15" height="13"/>
            <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
            <circle cx="5.5" cy="18.5" r="2.5"/>
            <circle cx="18.5" cy="18.5" r="2.5"/>
          </svg>
          DELIVERY RÁPIDO A DOMICILIO
        </h2>
        <p className="estilo-intro">Recibe tus zapatillas directamente en la puerta de tu casa, sin salir de donde estás.</p>

        <div className="estilo-steps">
          <div className="step">
            <span className="step-num">1</span>
            <div>
              <h4>Realiza tu pedido</h4>
              <p>Compra online o por WhatsApp e indica tu dirección de entrega completa.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <div>
              <h4>Confirmamos el pago</h4>
              <p>Una vez validado el pago, procesamos tu pedido de inmediato.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <h4>Preparamos tu paquete</h4>
              <p>Empacamos tu pedido con cuidado y lo entregamos al courier.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">4</span>
            <div>
              <h4>Recibe en casa</h4>
              <p>Te enviamos el número de seguimiento para que rastrees tu pedido en tiempo real.</p>
            </div>
          </div>
        </div>

        <div className="estilo-info-box">
          <h3>Tiempos de entrega</h3>
          <ul>
            <li>· Lima Metropolitana: 1 a 2 días hábiles</li>
            <li>· Provincias: 3 a 5 días hábiles</li>
            <li>· Envío gratis en pedidos superiores a S/100</li>
          </ul>
        </div>

        <div className="estilo-info-box">
          <h3>Cobertura de entrega</h3>
          <ul>
            <li>· Lima y Callao: cobertura total</li>
            <li>· Arequipa, Trujillo, Piura, Cusco y más</li>
            <li>· Consulta disponibilidad para tu distrito</li>
          </ul>
        </div>

        <div className="estilo-info-box warning">
          <h3>▫ Para recibir tu pedido necesitas</h3>
          <ul>
            <li>• Documento de identidad vigente (DNI o pasaporte)</li>
            <li>• Estar presente en la dirección indicada</li>
            <li>• Tener el número de pedido a mano</li>
          </ul>
        </div>

        <div className="estilo-faq">
          <h3>Preguntas Frecuentes</h3>
          <div className="faq-item">
            <h4>¿Qué pasa si no estoy en casa al momento de la entrega?</h4>
            <p>El courier intentará comunicarse contigo. Si no hay respuesta, dejará un aviso para reprogramar la entrega.</p>
          </div>
          <div className="faq-item">
            <h4>¿Puedo cambiar la dirección después de hacer el pedido?</h4>
            <p>Sí, pero solo antes de que el pedido sea despachado. Contáctanos de inmediato por WhatsApp.</p>
          </div>
          <div className="faq-item">
            <h4>¿El delivery tiene costo adicional?</h4>
            <p>Es gratis en pedidos mayores a S/100. Pedidos menores tienen un costo de S/10 en Lima y S/15 en provincias.</p>
          </div>
        </div>

        <a href="/" className="estilo-cta">Ver productos</a>
      </div>

      <Footer />
    </div>
  )
}
