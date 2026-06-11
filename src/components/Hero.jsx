import { motion } from 'framer-motion'
import { ArrowRight, Star, CheckCircle2, Camera, Cpu, Wrench, Shield, Zap, Cable, Lightbulb } from 'lucide-react'

const stats = [
  { value: '+15', label: 'Años de experiencia' },
  { value: '+500', label: 'Clientes satisfechos' },
  { value: '24/7', label: 'Servicio de guardia' },
  { value: '100%', label: 'Garantía escrita' },
]

const highlights = [
  { icon: Zap, label: 'Electricidad' },
  { icon: Camera, label: 'Cámaras CCTV' },
  { icon: Cpu, label: 'Domótica' },
  { icon: Shield, label: 'Alarmas' },
  { icon: Wrench, label: 'Mantenimiento' },
  { icon: Lightbulb, label: 'Iluminación LED' },
  { icon: Cable, label: 'Redes y Porteros' },
  { icon: Wrench, label: 'Urgencias 24/7' },
]

export default function Hero() {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-primary-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl"></div>

      <div className="container-custom relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary-200 shadow-soft mb-6"
          >
            <span className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" />
              ))}
            </span>
            <span className="text-sm font-medium text-dark-700">4.9/5 en satisfacción</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-dark-900 leading-[1.05] text-balance mb-6"
          >
            Soluciones eléctricas{' '}
            <span className="gradient-text relative">
              profesionales
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" preserveAspectRatio="none">
                <path d="M0 5 Q50 0, 100 4 T200 5" stroke="url(#grad)" strokeWidth="3" fill="none" />
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#2563eb" />
                    <stop offset="100%" stopColor="#1e40af" />
                  </linearGradient>
                </defs>
              </svg>
            </span>{' '}
            para tu hogar y empresa
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-dark-500 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Instalaciones eléctricas, cámaras de seguridad y mantenimiento con la mejor calidad, garantía y atención personalizada.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
          >
            <a href="#contacto" className="btn-primary text-base">
              Solicitar Presupuesto Gratis
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#servicios" className="btn-secondary text-base">
              Ver Servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-dark-600"
          >
            {['Sin costo inicial', 'Respuesta en 24hs', 'Garantía escrita'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-primary-600" />
                <span className="font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-16 md:mt-20 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center p-4 md:p-5 bg-white/80 backdrop-blur-sm rounded-xl border border-dark-100 shadow-soft">
                <div className="text-2xl md:text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-xs text-dark-500 mt-1 leading-tight">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Highlights strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10 md:mt-12 max-w-5xl mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:gap-x-10">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.label}
                  className="flex items-center gap-2 text-sm font-medium text-dark-700"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-50 border border-primary-100 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary-600" strokeWidth={2} />
                  </div>
                  <span>{item.label}</span>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
