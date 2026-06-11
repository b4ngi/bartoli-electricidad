import { motion } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState, useEffect } from 'react'

const testimonials = [
  {
    name: 'María González',
    role: 'Propietaria - San Isidro',
    avatar: 'MG',
    rating: 5,
    text: 'Excelente trabajo. Me instalaron el sistema de cámaras en toda la casa y quedó impecable. Muy profesionales, prolijos y con un trato cálido. Los recomiendo 100%.',
    service: 'Cámaras de Seguridad',
    color: 'from-primary-500 to-primary-700',
  },
  {
    name: 'Carlos Rodríguez',
    role: 'Dueño de local comercial',
    avatar: 'CR',
    rating: 5,
    text: 'Contraté a Bartoli para la instalación eléctrica completa de mi local. Cumplieron en tiempo y forma, con materiales de primera. Ya los llamé para otro trabajo.',
    service: 'Instalación Comercial',
    color: 'from-dark-700 to-dark-900',
  },
  {
    name: 'Lucía Fernández',
    role: 'Vecina de Martínez',
    avatar: 'LF',
    rating: 5,
    text: 'Los llamé un domingo a la noche por una urgencia eléctrica y vinieron rapidísimo. Problema resuelto en 30 minutos. Honestos y con precios justos.',
    service: 'Emergencia 24/7',
    color: 'from-red-500 to-red-700',
  },
  {
    name: 'Roberto Silva',
    role: 'Administrador - Edificio',
    avatar: 'RS',
    rating: 5,
    text: 'Llevo más de 3 años confiando en Bartoli para el mantenimiento eléctrico de nuestro edificio. Siempre cumplen y son muy responsables. Un servicio de excelencia.',
    service: 'Mantenimiento',
    color: 'from-amber-500 to-amber-700',
  },
  {
    name: 'Patricia Méndez',
    role: 'Arquitecta',
    avatar: 'PM',
    rating: 5,
    text: 'Trabajan con mucho criterio y me asesoran siempre en las mejores soluciones. Han hecho proyectos de iluminación LED hermosos en mis obras. Los recomiendo siempre.',
    service: 'Iluminación LED',
    color: 'from-primary-600 to-primary-800',
  },
  {
    name: 'Diego Martín',
    role: 'Propietario - Tigre',
    avatar: 'DM',
    rating: 5,
    text: 'Me cambiaron todo el tablero eléctrico y modernizaron la instalación de mi casa. Trabajo impecable, con certificado y garantía. Muy conformes con el resultado.',
    service: 'Instalación Residencial',
    color: 'from-green-500 to-emerald-700',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(3)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setItemsPerPage(1)
      else if (window.innerWidth < 1024) setItemsPerPage(2)
      else setItemsPerPage(3)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const maxIndex = Math.max(0, testimonials.length - itemsPerPage)

  useEffect(() => {
    if (current > maxIndex) setCurrent(maxIndex)
  }, [itemsPerPage, current, maxIndex])

  const next = () => setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  const prev = () => setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))

  return (
    <section id="testimonios" className="section relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-50/50 to-white"></div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-primary-200 mb-4 shadow-soft">
            <Star className="w-3.5 h-3.5 text-yellow-500" fill="currentColor" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Testimonios</span>
          </div>
          <h2 className="section-title">
            Lo que dicen nuestros <span className="gradient-text">clientes</span>
          </h2>
          <p className="section-subtitle">
            Más de 500 clientes confían en nosotros. Estas son algunas de sus experiencias.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${current * (100 / itemsPerPage)}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="flex"
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="flex-shrink-0 px-3"
                  style={{ width: `${100 / itemsPerPage}%` }}
                >
                  <div className="h-full p-6 bg-white rounded-2xl border border-dark-100 hover:border-primary-200 transition-all hover:shadow-xl hover:shadow-primary-500/5">
                    <div className="flex items-center justify-between mb-4">
                      <Quote className="w-8 h-8 text-primary-100" fill="currentColor" />
                      <div className="flex items-center gap-0.5">
                        {[...Array(t.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 text-yellow-400" fill="currentColor" />
                        ))}
                      </div>
                    </div>

                    <p className="text-dark-700 leading-relaxed mb-6 text-sm">
                      "{t.text}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-dark-100">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                          {t.avatar}
                        </div>
                        <div>
                          <div className="font-semibold text-dark-900 text-sm">{t.name}</div>
                          <div className="text-xs text-dark-500">{t.role}</div>
                        </div>
                      </div>
                      <span className="text-[10px] px-2 py-1 rounded-full bg-primary-50 text-primary-700 font-semibold uppercase tracking-wider">
                        {t.service}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-3 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white border border-dark-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-dark-700 hover:text-primary-600 transition-all shadow-soft"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-1.5">
              {Array.from({ length: maxIndex + 1 }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all ${
                    current === i
                      ? 'w-8 bg-primary-600'
                      : 'w-2 bg-dark-200 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white border border-dark-200 hover:border-primary-300 hover:bg-primary-50 flex items-center justify-center text-dark-700 hover:text-primary-600 transition-all shadow-soft"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
