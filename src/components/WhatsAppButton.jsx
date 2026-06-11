import { motion } from 'framer-motion'
import { MessageCircle, X } from 'lucide-react'
import { useState, useEffect } from 'react'

export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setShowTooltip(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [dismissed])

  const handleClick = (e) => {
    e.preventDefault()
    setDismissed(true)
    setShowTooltip(false)
    window.open(
      'https://wa.me/5491100000000?text=Hola%20Bartoli%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios',
      '_blank'
    )
  }

  const dismissTooltip = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setShowTooltip(false)
    setDismissed(true)
  }

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-40"
    >
      {showTooltip && !dismissed && (
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          className="absolute bottom-20 right-0 w-72 bg-white rounded-2xl shadow-2xl border border-dark-100 p-4"
        >
          <button
            onClick={dismissTooltip}
            className="absolute top-2 right-2 w-6 h-6 rounded-full bg-dark-100 hover:bg-dark-200 flex items-center justify-center text-dark-500"
            aria-label="Cerrar"
          >
            <X className="w-3 h-3" />
          </button>
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <div>
              <div className="font-semibold text-dark-900 text-sm">¿Necesitas ayuda?</div>
              <p className="text-xs text-dark-500 mt-0.5">
                Escribinos por WhatsApp y te respondemos a la brevedad.
              </p>
              <div className="text-[10px] text-primary-600 font-semibold mt-2">
                Respuesta en minutos ⚡
              </div>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute -bottom-2 right-7 w-4 h-4 bg-white border-r border-b border-dark-100 transform rotate-45"></div>
        </motion.div>
      )}

      <motion.a
        href="https://wa.me/5491100000000"
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative flex items-center justify-center w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg shadow-green-500/30 hover:shadow-xl hover:shadow-green-500/40 transition-all"
        aria-label="WhatsApp"
      >
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60 animate-ping"></span>
        <MessageCircle className="w-6 h-6 relative z-10" fill="currentColor" />
      </motion.a>
    </motion.div>
  )
}
