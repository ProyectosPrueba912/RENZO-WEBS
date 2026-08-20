import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './Contacto.css'

const faqData = [
  {
    question: '¿Cuánto demora el envío?',
    answer: 'Lima: 1-3 días hábiles. Provincias: 3-5 días hábiles.'
  },
  {
    question: '¿Puedo cambiar o devolver un producto?',
    answer: 'Sí, tienes 30 días para cambios y devoluciones con el producto en perfecto estado.'
  },
  {
    question: '¿Los productos son originales?',
    answer: 'Sí, todos nuestros productos son 100% originales y vienen con garantía.'
  },
  {
    question: '¿Qué métodos de pago aceptan?',
    answer: 'Aceptamos tarjetas de débito/crédito, transferencias bancarias, Yape y Plin.'
  }
]

export default function Contacto() {
  const phone = '51967460215'
  const message = encodeURIComponent('Hola, tengo una consulta')
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div>
      <Helmet>
        <title>Contacto - Sneakers Store | Escríbenos o Llámanos</title>
        <meta name="description" content="Contáctanos por WhatsApp, email o teléfono. Horario: Lunes a Viernes 9AM-6PM, Sábados 9AM-2PM. +51 967 460 215 | ventas@sneakersstore.com" />
      </Helmet>

      <Navbar />
      
      <div className="contacto-hero">
        <img src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1400&h=400&fit=crop" alt="Contacto" />
        <div className="contacto-hero-overlay">
          <h1>CONTÁCTANOS</h1>
          <p>Estamos aquí para ayudarte</p>
        </div>
      </div>

      <div className="contacto-container">
        
        <div className="contacto-intro">
          <h2>¿Tienes alguna pregunta?</h2>
          <p>Nuestro equipo está listo para atenderte. Elige el canal que prefieras y te responderemos lo antes posible.</p>
        </div>

        <div className="contacto-grid">
          
          <div className="contacto-card">
            <span className="contacto-icon contacto-icon--svg">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="#7a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
              </svg>
            </span>
            <h3>WhatsApp</h3>
            <p>Chatea con nosotros en tiempo real</p>
            <p className="contacto-detail">+51 967 460 215</p>
            <a 
              href={`https://wa.me/${phone}?text=${message}`} 
              target="_blank" 
              rel="noopener noreferrer"
              className="contacto-btn"
            >
              Escribir ahora
            </a>
          </div>

          <div className="contacto-card">
            <span className="contacto-icon contacto-icon--svg">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="#7a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </span>
            <h3>Email</h3>
            <p>Envíanos un correo electrónico</p>
            <p className="contacto-detail">ventas@sneakersstore.com</p>
            <a href="mailto:ventas@sneakersstore.com" className="contacto-btn">
              Enviar email
            </a>
          </div>

          <div className="contacto-card">
            <span className="contacto-icon contacto-icon--svg">
              <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="none" stroke="#7a1a1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </span>
            <h3>Teléfono</h3>
            <p>Llámanos directamente</p>
            <p className="contacto-detail">+51 967 460 215</p>
            <a href="tel:+51967460215" className="contacto-btn">
              Llamar ahora
            </a>
          </div>

        </div>

        <div className="contacto-faq">
          <h3>Preguntas Frecuentes</h3>
          <div className="faq-accordion">
            {faqData.map((item, index) => (
              <div
                key={index}
                className={`faq-accordion-item ${openIndex === index ? 'active' : ''}`}
              >
                <button
                  className="faq-accordion-question"
                  onClick={() => toggleQuestion(index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-accordion-icon">
                    {openIndex === index ? '−' : '+'}
                  </span>
                </button>
                {openIndex === index && (
                  <div className="faq-accordion-answer">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}
