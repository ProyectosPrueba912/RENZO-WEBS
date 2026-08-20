import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ProductDetail from './pages/ProductDetail'
import CompraOnline from './pages/CompraOnline'
import CompraWhatsApp from './pages/CompraWhatsApp'
import CompraDelivery from './pages/CompraDelivery'
import Nosotros from './pages/Nosotros'
import Contacto from './pages/Contacto'
import LibroReclamaciones from './pages/LibroReclamaciones'
import NotFound from './pages/NotFound'
import WhatsAppButton from './components/WhatsAppButton'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/compra-online" element={<CompraOnline />} />
        <Route path="/compra-whatsapp" element={<CompraWhatsApp />} />
        <Route path="/compra-delivery" element={<CompraDelivery />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/libro-reclamaciones" element={<LibroReclamaciones />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <WhatsAppButton />
    </BrowserRouter>
  )
}
