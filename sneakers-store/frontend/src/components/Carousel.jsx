import './Carousel.css'

export default function Carousel() {
  return (
    <div className="carousel">
      <div className="video-slide">
        <video 
          className="hero-video"
          autoPlay 
          muted 
          loop 
          playsInline
        >
          <source src="/VideoPrueba.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5.
        </video>
        
        <div className="slide-overlay">
          <h2>Nueva Colección 2025</h2>
          <p>Zapatillas para cada estilo</p>
          <button className="slide-btn">Ver colección</button>
        </div>
      </div>
    </div>
  )
}
