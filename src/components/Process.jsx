import { motion } from 'framer-motion'
import { MessageSquare, ClipboardList, Wrench, CheckCircle2 } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    number: '01',
    title: 'Contactanos',
    description: 'Llamanos, escribinos por WhatsApp o completá el formulario. Te respondemos en menos de 24 horas.',
    color: 'from-primary-500 to-primary-700',
  },
  {
    icon: ClipboardList,
    number: '02',
    title: 'Presupuesto',
    description: 'Evaluamos tu proyecto, te asesoramos y te entregamos un presupuesto detallado sin compromiso.',
    color: 'from-primary-600 to-primary-800',
  },
  {
    icon: Wrench,
    number: '03',
    title: 'Ejecutamos',
    description: 'Nuestro equipo profesional realiza el trabajo con materiales de primera calidad y limpieza total.',
    color: 'from-dark-700 to-dark-900',
  },
  {
    icon: CheckCircle2,
    number: '04',
    title: 'Garantía',
    description: 'Te entregamos el trabajo terminado con garantía escrita y soporte post-servicio.',
    color: 'from-green-500 to-emerald-700',
  },
]

export default function Process() {
  return (
    <section id="proceso" className="section bg-white relative">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <ClipboardList className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Cómo Trabajamos</span>
          </div>
          <h2 className="section-title">
            Un proceso <span className="gradient-text">simple y transparente</span>
          </h2>
          <p className="section-subtitle">
            Desde el primer contacto hasta la entrega final, te acompañamos en cada paso.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop only */}
          <div className="hidden lg:block absolute top-16 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200"></div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative">
            {steps.map((step, i) => {
              const Icon = step.icon
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className="flex flex-col items-center text-center">
                    {/* Icon circle */}
                    <div className="relative mb-6">
                      <div className={`relative w-32 h-32 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-xl shadow-primary-500/20 group-hover:scale-105 transition-transform duration-300`}>
                        <Icon className="w-12 h-12 text-white" strokeWidth={1.5} />
                      </div>
                      {/* Number badge */}
                      <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-white border-2 border-primary-200 flex items-center justify-center shadow-md">
                        <span className="text-sm font-bold gradient-text">{step.number}</span>
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-lg font-bold text-dark-900 mb-2 group-hover:text-primary-700 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-dark-500 leading-relaxed max-w-[220px]">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
