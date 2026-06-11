import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  Zap,
  Camera,
  Wrench,
  Home,
  Building2,
  AlertTriangle,
  Lightbulb,
  Cable,
  ArrowRight,
  Check
} from 'lucide-react'

const services = [
  {
    icon: Home,
    title: 'Instalaciones Residenciales',
    description: 'Diseño y ejecución de instalaciones eléctricas completas para tu hogar, con materiales de primera calidad y cumplimiento de normativas.',
    features: ['Cableado estructurado', 'Tableros y disyuntores', 'Tomas e iluminación', 'Puesta a tierra'],
    color: 'from-primary-500 to-primary-700',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: Camera,
    title: 'Cámaras de Seguridad',
    description: 'Sistemas de videovigilancia CCTV de alta definición para proteger tu hogar o negocio, con monitoreo remoto desde tu celular.',
    features: ['Cámaras 4K HD', 'Visión nocturna', 'Acceso remoto 24/7', 'Almacenamiento en la nube'],
    color: 'from-dark-700 to-dark-900',
    bgColor: 'bg-dark-50',
    iconColor: 'text-dark-700',
    popular: true,
  },
  {
    icon: Building2,
    title: 'Instalaciones Comerciales',
    description: 'Soluciones eléctricas para locales, oficinas, galpones y fábricas. Proyectos a medida con eficiencia energética.',
    features: ['Proyectos industriales', 'Tableros trifásicos', 'Distribución de cargas', 'Iluminación LED'],
    color: 'from-primary-600 to-primary-800',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: AlertTriangle,
    title: 'Emergencias 24/7',
    description: 'Servicio de guardia eléctrica permanente. Atendemos cortocircuitos, fallas y urgencias los 365 días del año.',
    features: ['Respuesta inmediata', 'Diagnóstico rápido', 'Reparación urgente', 'Disponibilidad total'],
    color: 'from-red-500 to-red-700',
    bgColor: 'bg-red-50',
    iconColor: 'text-red-600',
  },
  {
    icon: Wrench,
    title: 'Mantenimiento',
    description: 'Mantenimiento preventivo y correctivo para mantener tus instalaciones seguras y funcionando perfectamente.',
    features: ['Revisión periódica', 'Termografía', 'Medición de aislación', 'Informes técnicos'],
    color: 'from-dark-600 to-dark-800',
    bgColor: 'bg-dark-50',
    iconColor: 'text-dark-600',
  },
  {
    icon: Lightbulb,
    title: 'Iluminación LED',
    description: 'Diseño e instalación de sistemas de iluminación LED eficientes, modernos y decorativos para cada ambiente.',
    features: ['Iluminación interior', 'Iluminación exterior', 'Ahorro energético', 'Diseño personalizado'],
    color: 'from-yellow-500 to-amber-600',
    bgColor: 'bg-amber-50',
    iconColor: 'text-amber-600',
  },
  {
    icon: Cable,
    title: 'Porteros y Redes',
    description: 'Instalación de porteros eléctricos, videoporteros y redes de datos para una conectividad total.',
    features: ['Porteros eléctricos', 'Videoporteros IP', 'Cableado de red', 'WiFi profesional'],
    color: 'from-primary-500 to-primary-700',
    bgColor: 'bg-primary-50',
    iconColor: 'text-primary-600',
  },
  {
    icon: Zap,
    title: 'Energía y Ahorro',
    description: 'Asesoramiento en eficiencia energética, instalación de paneles solares y optimización del consumo eléctrico.',
    features: ['Paneles solares', 'Medición inteligente', 'Asesoramiento técnico', 'Ahorro garantizado'],
    color: 'from-green-500 to-emerald-700',
    bgColor: 'bg-green-50',
    iconColor: 'text-green-600',
  },
]

function ServiceCard({ service, index }) {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const Icon = service.icon

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative"
    >
      {service.popular && (
        <div className="absolute -top-3 right-4 z-10 px-3 py-1 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-xs font-semibold rounded-full shadow-lg">
          Más solicitado
        </div>
      )}

      <div className="relative h-full p-6 bg-white rounded-2xl border border-dark-100 hover:border-primary-200 transition-all duration-300 hover:shadow-2xl hover:shadow-primary-500/10 hover:-translate-y-1 overflow-hidden">
        {/* Background gradient on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`}></div>

        {/* Icon */}
        <div className={`relative inline-flex w-14 h-14 rounded-2xl ${service.bgColor} items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
          <Icon className={`w-7 h-7 ${service.iconColor}`} strokeWidth={2} />
        </div>

        {/* Content */}
        <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-dark-500 leading-relaxed mb-4">
          {service.description}
        </p>

        {/* Features */}
        <ul className="space-y-2 mb-5">
          {service.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2 text-xs text-dark-600">
              <Check className="w-3.5 h-3.5 text-primary-500 flex-shrink-0 mt-0.5" strokeWidth={3} />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Link */}
        <a
          href="#contacto"
          onClick={(e) => {
            e.preventDefault()
            const el = document.querySelector('#contacto')
            if (el) {
              const top = el.getBoundingClientRect().top + window.pageYOffset - 80
              window.scrollTo({ top, behavior: 'smooth' })
            }
          }}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary-600 hover:text-primary-700 group/link"
        >
          Consultar
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="servicios" className="section bg-white relative">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <Zap className="w-3.5 h-3.5 text-primary-600" fill="currentColor" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Nuestros Servicios</span>
          </div>
          <h2 className="section-title">
            Soluciones integrales en <span className="gradient-text">electricidad y seguridad</span>
          </h2>
          <p className="section-subtitle">
            Brindamos servicios profesionales con la mejor calidad, atención personalizada y garantía en cada trabajo.
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* CTA bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-dark-500 mb-4">¿Necesitas un servicio que no ves en la lista?</p>
          <a
            href="#contacto"
            onClick={(e) => {
              e.preventDefault()
              const el = document.querySelector('#contacto')
              if (el) {
                const top = el.getBoundingClientRect().top + window.pageYOffset - 80
                window.scrollTo({ top, behavior: 'smooth' })
              }
            }}
            className="btn-primary"
          >
            Contactanos por un trabajo personalizado
            <ArrowRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
