import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Zap, Phone } from 'lucide-react'

const navLinks = [
  { name: 'Inicio', href: '#hero' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Nosotros', href: '#features' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Trabajos', href: '#trabajos' },
  { name: 'Testimonios', href: '#testimonios' },
  { name: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const top = element.getBoundingClientRect().top + window.pageYOffset - offset
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-soft border-b border-dark-100'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          <a
            href="#hero"
            onClick={(e) => handleLinkClick(e, '#hero')}
            className="flex items-center gap-2 group"
          >
<div className="relative group cursor-pointer">
  {/* Usamos drop-shadow en lugar de box-shadow para que la sombra siga la forma de la imagen */}
  <img 
    src="/logo1.png" 
    alt="Logo Electricidad" 
    className="w-11 h-11 object-contain drop-shadow-md group-hover:drop-shadow-xl transition-all duration-300"
  />
  
  {/* El puntito amarillo se reposiciona ligeramente para encajar con la forma circular */}
  <div className="absolute top-0 right-0 w-3 h-3 bg-yellow-400 rounded-full animate-pulse border-2 border-white"></div>
</div>
            <div>
              <div className="font-display font-bold text-lg text-dark-900 leading-none">Bartoli</div>
              <div className="text-[10px] uppercase tracking-widest text-primary-600 font-semibold">Electricidad</div>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-dark-600 hover:text-primary-600 rounded-lg hover:bg-primary-50/50 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+5491100000000"
              className="flex items-center gap-2 text-sm font-medium text-dark-700 hover:text-primary-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>Llamanos</span>
            </a>
            <a
              href="#contacto"
              onClick={(e) => handleLinkClick(e, '#contacto')}
              className="btn-primary !py-2.5 !px-5 text-sm"
            >
              Pedí tu Presupuesto
            </a>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-dark-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white border-t border-dark-100 overflow-hidden"
          >
            <div className="container-custom py-4 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="block px-4 py-3 text-base font-medium text-dark-700 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-3 space-y-2 border-t border-dark-100 mt-3">
                <a
                  href="tel:+5491100000000"
                  className="flex items-center gap-2 px-4 py-3 text-base font-medium text-dark-700"
                >
                  <Phone className="w-4 h-4" />
                  Llamanos ahora
                </a>
                <a
                  href="#contacto"
                  onClick={(e) => handleLinkClick(e, '#contacto')}
                  className="btn-primary w-full"
                >
                  Pedí tu Presupuesto
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
