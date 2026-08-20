import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './LibroReclamaciones.css'

export default function LibroReclamaciones() {
  const [formData, setFormData] = useState({
    tipoDocumento: 'DNI',
    numeroDocumento: '',
    nombres: '',
    apellidos: '',
    telefono: '',
    email: '',
    direccion: '',
    tipoReclamo: 'reclamo',
    detalle: '',
    pedido: '',
    fechaIncidente: '',
    montoReclamado: '',
    accionSolicitada: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Su reclamo ha sido registrado. Recibirá una respuesta en un plazo máximo de 30 días calendario.')
    console.log('Reclamo enviado:', formData)
  }

  return (
    <div>
      <Helmet>
        <title>Libro de Reclamaciones - Sneakers Store</title>
        <meta name="description" content="Libro de Reclamaciones oficial de Sneakers Store. Presenta tu reclamo o queja conforme al Código de Protección y Defensa del Consumidor." />
      </Helmet>

      <Navbar />
      
      <div className="libro-hero">
        <div className="libro-hero-content">
          <img src="/libro-reclamaciones.jpg" alt="Libro de Reclamaciones" className="libro-hero-img" />
          <div>
            <h1>LIBRO DE RECLAMACIONES</h1>
            <p>Conforme a lo establecido en el Código de Protección y Defensa del Consumidor</p>
          </div>
        </div>
      </div>

      <div className="libro-container">
        
        <div className="libro-info">
          <h2>Información Importante</h2>
          <div className="info-grid">
            <div className="info-card">
              <h3>📋 ¿Qué es una queja?</h3>
              <p>Manifestación de insatisfacción no relacionada con los productos o servicios.</p>
            </div>
            <div className="info-card">
              <h3>⚠️ ¿Qué es un reclamo?</h3>
              <p>Manifestación de insatisfacción relacionada con los productos o servicios prestados.</p>
            </div>
            <div className="info-card">
              <h3>⏰ Tiempo de respuesta</h3>
              <p>Máximo 30 días calendario desde la presentación del reclamo.</p>
            </div>
            <div className="info-card">
              <h3>📞 Contacto directo</h3>
              <p>También puedes contactarnos al +51 967 460 215 o ventas@sneakersstore.com</p>
            </div>
          </div>
        </div>

        <form className="libro-form" onSubmit={handleSubmit}>
          <h2>Formulario de Reclamo</h2>
          
          <div className="form-section">
            <h3>Datos del Consumidor</h3>
            <div className="form-row">
              <div className="form-group">
                <label>Tipo de Documento *</label>
                <select name="tipoDocumento" value={formData.tipoDocumento} onChange={handleChange} required>
                  <option value="DNI">DNI</option>
                  <option value="CE">Carnet de Extranjería</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>
              <div className="form-group">
                <label>Número de Documento *</label>
                <input 
                  type="text" 
                  name="numeroDocumento" 
                  value={formData.numeroDocumento} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Nombres *</label>
                <input 
                  type="text" 
                  name="nombres" 
                  value={formData.nombres} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Apellidos *</label>
                <input 
                  type="text" 
                  name="apellidos" 
                  value={formData.apellidos} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Teléfono *</label>
                <input 
                  type="tel" 
                  name="telefono" 
                  value={formData.telefono} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <label>Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Dirección *</label>
              <input 
                type="text" 
                name="direccion" 
                value={formData.direccion} 
                onChange={handleChange} 
                required 
              />
            </div>
          </div>

          <div className="form-section">
            <h3>Detalle del Reclamo</h3>
            
            <div className="form-group">
              <label>Tipo *</label>
              <div className="radio-group">
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="tipoReclamo" 
                    value="reclamo" 
                    checked={formData.tipoReclamo === 'reclamo'} 
                    onChange={handleChange} 
                  />
                  Reclamo
                </label>
                <label className="radio-label">
                  <input 
                    type="radio" 
                    name="tipoReclamo" 
                    value="queja" 
                    checked={formData.tipoReclamo === 'queja'} 
                    onChange={handleChange} 
                  />
                  Queja
                </label>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Número de Pedido (si aplica)</label>
                <input 
                  type="text" 
                  name="pedido" 
                  value={formData.pedido} 
                  onChange={handleChange} 
                />
              </div>
              <div className="form-group">
                <label>Fecha del Incidente *</label>
                <input 
                  type="date" 
                  name="fechaIncidente" 
                  value={formData.fechaIncidente} 
                  onChange={handleChange} 
                  required 
                />
              </div>
            </div>

            <div className="form-group">
              <label>Monto Reclamado (si aplica)</label>
              <input 
                type="number" 
                step="0.01" 
                name="montoReclamado" 
                value={formData.montoReclamado} 
                onChange={handleChange} 
                placeholder="0.00" 
              />
            </div>

            <div className="form-group">
              <label>Detalle del Reclamo *</label>
              <textarea 
                name="detalle" 
                value={formData.detalle} 
                onChange={handleChange} 
                rows="4" 
                placeholder="Describa detalladamente su reclamo o queja..."
                required 
              />
            </div>

            <div className="form-group">
              <label>Acción Solicitada *</label>
              <textarea 
                name="accionSolicitada" 
                value={formData.accionSolicitada} 
                onChange={handleChange} 
                rows="3" 
                placeholder="¿Qué acción espera que tomemos para resolver su reclamo?"
                required 
              />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Enviar Reclamo
          </button>
        </form>

      </div>

      <Footer />
    </div>
  )
}