import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Instagram, ExternalLink } from 'lucide-react'

const INSTAGRAM_USERNAME = 'electricista_bartoli'
const INSTAGRAM_URL = `https://www.instagram.com/${INSTAGRAM_USERNAME}/`

export default function InstagramFeed() {
  useEffect(() => {
    // Elfsight carga el widget automáticamente con su script async
    if (window.ElfsightWidget) {
      window.ElfsightWidget.init()
    }
  }, [])

  return (
    <section id="trabajos" className="section relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-dark-50/40 to-white"></div>
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-dark-200 to-transparent"></div>

      <div className="container-custom relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-50 via-red-50 to-amber-50 border border-pink-200/60 mb-4">
              <Instagram className="w-3.5 h-3.5 text-pink-600" />
              <span className="text-xs font-semibold text-pink-700 uppercase tracking-wider">Instagram</span>
            </div>
            <h2 className="section-title text-left">
              Nuestros <span className="gradient-text">trabajos</span>
            </h2>
            <p className="text-base md:text-lg text-dark-500 max-w-xl">
                    Seguinos en Instagram para ver nuestros últimos proyectos.
            </p>
          </div>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 hover:opacity-90 text-white rounded-lg text-sm font-semibold shadow-lg shadow-pink-500/20 transition-all whitespace-nowrap"
          >
            <Instagram className="w-4 h-4" />
            @{INSTAGRAM_USERNAME}
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto"
        >
          <div
            className="elfsight-app-8ef572d7-6eb8-40ea-a27f-f68eae49a7ec"
            data-elfsight-app-lazy
          ></div>
        </motion.div>
      </div>
    </section>
  )
}
