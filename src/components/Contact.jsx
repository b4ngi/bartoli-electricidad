import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useState } from 'react'
import {
  Send,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Instagram,
  Clock,
  CheckCircle2,
  AlertCircle
} from 'lucide-react'

const services = [
  'Instalación Residencial',
  'Instalación Comercial',
  'Cámaras de Seguridad',
  'Emergencia 24/7',
  'Mantenimiento',
  'Iluminación LED',
  'Porteros y Redes',
  'Otro',
]

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 })
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!form.name || !form.phone || !form.message) {
      setStatus({ type: 'error', message: 'Por favor completá nombre, teléfono y mensaje.' })
      return
    }

    setSubmitting(true)

    // Simulate submission
    setTimeout(() => {
      setStatus({ type: 'success', message: '¡Mensaje enviado! Te contactaremos a la brevedad.' })
      setForm({ name: '', phone: '', email: '', service: '', message: '' })
      setSubmitting(false)
      setTimeout(() => setStatus({ type: '', message: '' }), 5000)
    }, 1200)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Teléfono',
      value: '+54 9 11 0000 0000',
      href: 'tel:+5491100000000',
      color: 'from-primary-500 to-primary-700',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: 'Envianos un mensaje',
      href: 'https://wa.me/5491100000000?text=Hola%20Bartoli%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n',
      color: 'from-green-500 to-emerald-600',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      value: '@electricista_bartoli',
      href: 'https://www.instagram.com/electricista_bartoli/',
      color: 'from-pink-500 via-red-500 to-yellow-500',
    },
    {
      icon: Mail,
      title: 'Email',
      value: 'contacto@bartoli-electricidad.com',
      href: 'mailto:contacto@bartoli-electricidad.com',
      color: 'from-primary-600 to-primary-800',
    },
  ]

  return (
    <section id="contacto" className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-grid-pattern opacity-30"></div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-50 border border-primary-100 mb-4">
            <MessageCircle className="w-3.5 h-3.5 text-primary-600" />
            <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">Contacto</span>
          </div>
          <h2 className="section-title">
            Pedí tu <span className="gradient-text">presupuesto gratis</span>
          </h2>
          <p className="section-subtitle">
            Completa el formulario y nos pondremos en contacto a la brevedad. Sin compromiso.
          </p>
        </motion.div>

        <div ref={ref} className="grid lg:grid-cols-5 gap-8">
          {/* Contact info - left side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="p-6 bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900 rounded-2xl text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '30px 30px'
              }}></div>

              <div className="relative">
                <h3 className="text-2xl font-bold mb-2">Información de Contacto</h3>
                <p className="text-sm text-white/70 mb-6">Estamos disponibles para ayudarte con tu proyecto.</p>

                <div className="space-y-3">
                  {contactInfo.map((info) => {
                    const Icon = info.icon
                    return (
                      <a
                        key={info.title}
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl border border-white/10 transition-all group"
                      >
                        <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${info.color} flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="text-[10px] uppercase tracking-wider text-white/50 font-semibold">{info.title}</div>
                          <div className="text-sm font-medium truncate">{info.value}</div>
                        </div>
                      </a>
                    )
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-primary-300" />
                    <span className="text-sm font-semibold text-white/90">Horarios</span>
                  </div>
                  <div className="text-sm text-white/70 space-y-1">
                    <div className="flex justify-between">
                      <span>Lunes a Viernes</span>
                      <span className="font-medium text-white">8:00 - 19:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados</span>
                      <span className="font-medium text-white">9:00 - 14:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Emergencias</span>
                      <span className="font-medium text-yellow-300">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-primary-50 rounded-2xl border border-primary-100">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-primary-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-dark-900 mb-1">Zona de cobertura</div>
                  <p className="text-sm text-dark-600">
                    Trabajamos en toda la zona norte de Buenos Aires y CABA. Consultanos por tu zona.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form - right side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-white p-6 md:p-8 rounded-2xl border border-dark-100 shadow-soft">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">
                    Nombre <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="w-full px-4 py-3 bg-dark-50/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-1.5">
                    Teléfono <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+54 9 11 ..."
                    className="w-full px-4 py-3 bg-dark-50/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-700 mb-1.5">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-dark-50/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-dark-700 mb-1.5">
                  Servicio de interés
                </label>
                <select
                  name="service"
                  value={form.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-dark-50/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
                >
                  <option value="">Seleccioná un servicio</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-dark-700 mb-1.5">
                  Mensaje <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Contanos brevemente qué necesitás..."
                  className="w-full px-4 py-3 bg-dark-50/50 border border-dark-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
                  required
                />
              </div>

              {status.message && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`mb-4 p-3 rounded-lg flex items-center gap-2 text-sm ${
                    status.type === 'success'
                      ? 'bg-green-50 text-green-800 border border-green-200'
                      : 'bg-red-50 text-red-800 border border-red-200'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  )}
                  <span>{status.message}</span>
                </motion.div>
              )}

              <button
                type="submit"
                disabled={submitting}
                className="btn-primary w-full text-base disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? (
                  <>
                    <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Consulta
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <p className="text-xs text-dark-400 text-center mt-4">
                Al enviar este formulario aceptás ser contactado por nuestro equipo comercial.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
