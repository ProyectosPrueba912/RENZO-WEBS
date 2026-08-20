import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import './NotFound.css'

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <div className="notfound-container">
        <span className="notfound-emoji">👟</span>
        <h1>404</h1>
        <h2>Página no encontrada</h2>
        <p>Parece que esta página se perdió en el camino... como un par sin su zapatilla.</p>
        <Link to="/" className="notfound-btn">Volver al inicio</Link>
      </div>
      <Footer />
    </div>
  )
}
