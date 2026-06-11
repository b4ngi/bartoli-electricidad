import { Zap, Instagram, Facebook, Mail, Phone, MapPin, ArrowUp } from 'lucide-react'

const footerLinks = {
  servicios: [
    { name: 'Instalaciones Residenciales', href: '#servicios' },
    { name: 'Cámaras de Seguridad', href: '#servicios' },
    { name: 'Instalaciones Comerciales', href: '#servicios' },
    { name: 'Emergencias 24/7', href: '#servicios' },
    { name: 'Mantenimiento', href: '#servicios' },
    { name: 'Iluminación LED', href: '#servicios' },
  ],
  empresa: [
    { name: 'Sobre Nosotros', href: '#features' },
    { name: 'Cómo Trabajamos', href: '#proceso' },
    { name: 'Nuestros Trabajos', href: '#trabajos' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Contacto', href: '#contacto' },
  ],
}

const socials = [
  {
    icon: Instagram,
    href: 'https://www.instagram.com/electricista_bartoli/',
    label: 'Instagram',
    color: 'hover:bg-gradient-to-br hover:from-pink-500 hover:via-red-500 hover:to-yellow-500',
  },
  {
    icon: Facebook,
    href: '#',
    label: 'Facebook',
    color: 'hover:bg-primary-700',
  },
  {
    icon: Mail,
    href: 'mailto:contacto@bartoli-electricidad.com',
    label: 'Email',
    color: 'hover:bg-primary-600',
  },
  {
    icon: Phone,
    href: 'tel:+5491100000000',
    label: 'Teléfono',
    color: 'hover:bg-green-600',
  },
]

export default function Footer() {
  const handleLinkClick = (e, href) => {
    if (href.startsWith('#')) {
      e.preventDefault()
      const el = document.querySelector(href)
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-dark-950 text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-primary-950/30"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-500/50 to-transparent"></div>
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl"></div>

      <div className="container-custom relative">
        {/* Main footer content */}
        <div className="py-16 grid lg:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="lg:col-span-5">
            <a href="#hero" onClick={(e) => handleLinkClick(e, '#hero')} className="flex items-center gap-2 mb-5">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg shadow-primary-500/30">
                <Zap className="w-5 h-5 text-white" strokeWidth={2.5} fill="white" />
              </div>
              <div>
                <div className="font-display font-bold text-xl text-white leading-none">Bartoli</div>
                <div className="text-[10px] uppercase tracking-widest text-primary-300 font-semibold">Electricidad</div>
              </div>
            </a>

            <p className="text-dark-300 text-sm leading-relaxed mb-6 max-w-md">
              Soluciones eléctricas profesionales, instalación de cámaras de seguridad y servicios de mantenimiento para hogares y empresas. Calidad, confianza y compromiso en cada trabajo.
            </p>

            <div className="space-y-3 mb-6">
              <a
                href="tel:+5491100000000"
                className="flex items-center gap-3 text-sm text-dark-200 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-dark-800 group-hover:bg-primary-600 flex items-center justify-center transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span>+54 9 11 0000 0000</span>
              </a>
              <a
                href="mailto:contacto@bartoli-electricidad.com"
                className="flex items-center gap-3 text-sm text-dark-200 hover:text-white transition-colors group"
              >
                <div className="w-9 h-9 rounded-lg bg-dark-800 group-hover:bg-primary-600 flex items-center justify-center transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span>contacto@bartoli-electricidad.com</span>
              </a>
              <div className="flex items-center gap-3 text-sm text-dark-200">
                <div className="w-9 h-9 rounded-lg bg-dark-800 flex items-center justify-center">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Zona Norte - Buenos Aires, Argentina</span>
              </div>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-2">
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-10 h-10 rounded-lg bg-dark-800 border border-dark-700 flex items-center justify-center text-dark-300 hover:text-white transition-all ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Services links */}
          <div className="lg:col-span-4 grid sm:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Servicios</h4>
              <ul className="space-y-2.5">
                {footerLinks.servicios.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-dark-300 hover:text-primary-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-2.5">
                {footerLinks.empresa.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={(e) => handleLinkClick(e, link.href)}
                      className="text-sm text-dark-300 hover:text-primary-300 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="lg:col-span-3">
            <div className="p-6 bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl shadow-xl shadow-primary-500/20">
              <Zap className="w-8 h-8 text-yellow-300 mb-3" fill="currentColor" />
              <h4 className="font-bold text-white text-lg mb-2">¿Necesitás ayuda urgente?</h4>
              <p className="text-sm text-primary-100 mb-4">
                Servicio de emergencia 24/7. Atendemos cuando lo necesitás.
              </p>
              <a
                href="https://wa.me/5491100000000?text=Necesito%20una%20emergencia%20el%C3%A9ctrica"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-white text-primary-700 font-semibold text-sm rounded-lg hover:bg-primary-50 transition-colors"
              >
                <Phone className="w-4 h-4" />
                Llamar Ahora
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-dark-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-dark-400 text-center sm:text-left">
            © {new Date().getFullYear()} Bartoli Electricidad. Todos los derechos reservados.
          </p>

          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-dark-400 hover:text-white transition-colors">
              Términos
            </a>
            <a href="#" className="text-xs text-dark-400 hover:text-white transition-colors">
              Privacidad
            </a>
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-dark-800 hover:bg-primary-600 flex items-center justify-center text-white transition-colors"
              aria-label="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
