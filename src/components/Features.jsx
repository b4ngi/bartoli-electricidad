import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import {
  ShieldCheck,
  Award,
  Clock,
  Wrench,
  ThumbsUp,
  Users,
  Sparkles,
  TrendingUp
} from 'lucide-react'

const features = [
  {
    icon: ShieldCheck,
    title: 'Trabajos Garantizados',
    description: 'Todos nuestros trabajos cuentan con garantía escrita. Si algo no funciona, lo solucionamos sin costo adicional.',
    metric: '100%',
    metricLabel: 'Garantía',
  },
  {
    icon: Award,
    title: 'Profesionales Matriculados',
    description: 'Equipo de electricistas matriculados con amplia experiencia y capacitación continua en nuevas tecnologías.',
    metric: '15+',
    metricLabel: 'Años',
  },
  {
    icon: Clock,
    title: 'Servicio Rápido',
    description: 'Atendemos urgencias las 24 horas. Tiempos de respuesta rápidos y trabajos entregados en tiempo y forma.',
    metric: '24/7',
    metricLabel: 'Disponibilidad',
  },
  {
    icon: ThumbsUp,
    title: 'Presupuesto Sin Cargo',
    description: 'Te visitamos, evaluamos tu proyecto y te entregamos un presupuesto detallado sin compromiso.',
    metric: '0$',
    metricLabel: 'Presupuesto',
  },
]

const stats = [
  { icon: Users, value: '500+', label: 'Clientes felices' },
  { icon: Wrench, value: '1200+', label: 'Trabajos realizados' },
  { icon: TrendingUp, value: '98%', label: 'Recomendación' },
  { icon: Sparkles, value: '4.9', label: 'Calificación' },
]

export default function Features() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })

  return (
    <section id="features" className="section relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-primary-50/30 to-white"></div>

      <div className="container-custom relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
              <Award className="w-3.5 h-3.5 text-primary-600" />
              <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Por qué elegirnos</span>
            </div>

            <h2 className="section-title text-left">
              La confianza de cientos de{' '}
              <span className="gradient-text">familias y empresas</span>
            </h2>

            <p className="text-lg text-dark-500 leading-relaxed mb-8">
              En Bartoli Electricidad combinamos experiencia, profesionalismo y tecnología para ofrecerte el mejor servicio. Cada proyecto es único y nos esforzamos por superar tus expectativas.
            </p>

            <div ref={ref} className="grid sm:grid-cols-2 gap-5">
              {features.map((feature, i) => {
                const Icon = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="group p-5 bg-white rounded-2xl border border-dark-100 hover:border-primary-200 transition-all hover:shadow-xl hover:shadow-primary-500/5"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary-600" strokeWidth={2} />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold gradient-text">{feature.metric}</div>
                        <div className="text-[10px] uppercase tracking-wider text-dark-400 font-medium">{feature.metricLabel}</div>
                      </div>
                    </div>
                    <h3 className="font-bold text-dark-900 mb-1.5">{feature.title}</h3>
                    <p className="text-sm text-dark-500 leading-relaxed">{feature.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right visual - Stats dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              {/* Main card */}
              <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 rounded-3xl shadow-2xl overflow-hidden p-8 flex flex-col justify-between">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                  backgroundSize: '30px 30px'
                }}></div>

                <div className="relative">
                  <div className="text-xs uppercase tracking-widest text-primary-300 mb-2 font-semibold">Nuestros números</div>
                  <div className="text-3xl font-bold text-white">Resultados que hablan</div>
                </div>

                <div className="relative grid grid-cols-2 gap-4">
                  {stats.map((stat, i) => {
                    const Icon = stat.icon
                    return (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 + i * 0.1, duration: 0.4 }}
                        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4"
                      >
                        <Icon className="w-5 h-5 text-primary-300 mb-2" />
                        <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                        <div className="text-xs text-white/60">{stat.label}</div>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Decorative element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-500/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary-400/20 rounded-full blur-3xl"></div>
              </div>

              {/* Floating element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl border border-dark-100"
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4 text-green-600" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-dark-900">Certificados</div>
                    <div className="text-[10px] text-dark-500">100% garantizado</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
