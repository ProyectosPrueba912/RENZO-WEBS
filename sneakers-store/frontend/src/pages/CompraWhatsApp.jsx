import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './CompraEstilo.css'

const tabs = [
  { label: 'Compra Online', path: '/compra-online' },
  { label: 'Compra por WhatsApp', path: '/compra-whatsapp' },
  { label: 'Delivery a domicilio', path: '/compra-delivery' },
]

export default function CompraWhatsApp() {
  const phone = '51967460215'
  const message = encodeURIComponent('Hola, quiero realizar una compra 👟')

  return (
    <div>
      <Helmet>
        <title>Compra por WhatsApp - Sneakers Store | Asesoría Personalizada</title>
        <meta name="description" content="Compra por WhatsApp con asesoría personalizada. Escríbenos al +51 967 460 215. Horario: Lunes a Viernes 9AM-6PM, Sábados 9AM-2PM." />
      </Helmet>

      <Navbar />
      <div className="estilo-hero">
        <img src="https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=1400&h=400&fit=crop" alt="Compra por WhatsApp" />
        <div className="estilo-hero-overlay">
          <h1>COMPRA A TU ESTILO</h1>
          <p>De la manera más rápida y conveniente para ti.</p>
        </div>
      </div>

      <div className="estilo-tabs">
        {tabs.map(t => (
          <a key={t.path} href={t.path} className={`estilo-tab ${t.path === '/compra-whatsapp' ? 'active' : ''}`}>
            {t.label}
          </a>
        ))}
      </div>

      <div className="estilo-container">
        <h2>
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" stroke="#7a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{display: 'inline-block', verticalAlign: 'middle', marginRight: '8px'}}>
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
          ASISTENCIA PERSONALIZADA POR WHATSAPP
        </h2>
        <p className="estilo-intro">¿Prefieres ayuda directa? Chatea con nuestros asesores y realiza tu compra fácil, rápida y segura.</p>

        <div className="estilo-steps">
          <div className="step">
            <span className="step-num">1</span>
            <div>
              <h4>Escríbenos</h4>
              <p>Contáctanos al <strong>967 460 215</strong> o haz clic en el botón de WhatsApp.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">2</span>
            <div>
              <h4>Envíanos tus datos</h4>
              <p>DNI, nombre completo, teléfono, correo electrónico y dirección de entrega.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">3</span>
            <div>
              <h4>Elige tu método de pago</h4>
              <p>Te enviamos un link de pago seguro o los datos para transferencia bancaria.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-num">4</span>
            <div>
              <h4>Confirmamos tu pedido</h4>
              <p>Validamos el pago, emitimos tu comprobante y programamos el envío.</p>
            </div>
          </div>
        </div>

        <div className="estilo-info-box">
          <h3>Horario de atención</h3>
          <ul>
            <li>· Lunes a viernes: 9:00 a.m. – 6:00 p.m.</li>
            <li>· Sábados: 9:00 a.m. – 2:00 p.m.</li>
            <li>· Domingos y feriados: sin atención</li>
          </ul>
        </div>

        <div className="estilo-info-box warning">
          <h3>⚠ Importante</h3>
          <p>Nunca pedimos claves ni datos bancarios por WhatsApp. Validamos todos los pagos mediante comprobante.</p>
        </div>

        <div className="estilo-faq">
          <h3>Preguntas Frecuentes</h3>
          <div className="faq-item">
            <h4>¿Tienen WhatsApp Business?</h4>
            <p>Sí, nuestro número oficial es el +51 967 460 215 verificado con check verde.</p>
          </div>
          <div className="faq-item">
            <h4>¿Puedo enviar fotos de tallas o modelos?</h4>
            <p>¡Por supuesto! Manda capturas o fotos y te ayudamos a encontrar el producto.</p>
          </div>
          <div className="faq-item">
            <h4>¿Responden fuera de horario?</h4>
            <p>Respondemos solo en horario de atención. Fuera de ese horario puedes dejar tu consulta y te respondemos al día siguiente.</p>
          </div>
        </div>

        <a href={`https://wa.me/${phone}?text=${message}`} target="_blank" rel="noopener noreferrer" className="estilo-cta whatsapp">
          <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" style={{marginRight:'8px'}}>
            <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.472 2.027 7.77L0 32l8.43-2.007A15.93 15.93 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm7.27 19.463c-.398-.2-2.355-1.162-2.72-1.295-.366-.133-.632-.2-.898.2-.266.398-1.03 1.295-1.263 1.561-.232.266-.465.3-.863.1-.398-.2-1.682-.62-3.204-1.977-1.184-1.057-1.983-2.362-2.215-2.76-.232-.398-.025-.613.175-.812.18-.178.398-.465.597-.698.2-.232.266-.398.398-.664.133-.266.067-.498-.033-.698-.1-.2-.898-2.163-1.23-2.96-.324-.778-.653-.672-.898-.684l-.765-.013c-.266 0-.698.1-1.064.498-.366.398-1.396 1.363-1.396 3.326s1.43 3.857 1.629 4.123c.2.266 2.814 4.297 6.818 6.027.953.411 1.696.657 2.276.841.956.304 1.826.261 2.514.158.767-.114 2.355-.963 2.688-1.893.333-.93.333-1.727.233-1.893-.1-.166-.366-.266-.764-.465z"/>
          </svg>
          Escribir por WhatsApp
        </a>
      </div>

      <Footer />
    </div>
  )
}
