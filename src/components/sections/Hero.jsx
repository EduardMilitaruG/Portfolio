import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import Button from '../ui/Button'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="max-w-5xl mx-auto px-6 pt-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-accent font-medium mb-4">Hola, soy</p>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary mb-6 text-balance">
            Gheorghe Eduard Militaru
          </h1>

          <p className="text-xl sm:text-2xl text-text-secondary mb-4">
            QA Engineer & Frontend Developer
          </p>

          <p className="max-w-xl mx-auto text-text-secondary mb-10 text-balance">
            Automatización de pruebas con Playwright y Cypress. Interfaces modernas con React y TypeScript. 2+ años entregando software de calidad en producción.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href="#projects" size="lg">
              Ver Proyectos
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              Contacto
            </Button>
          </div>
        </motion.div>

        <motion.a
          href="#projects"
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-text-secondary hover:text-text-primary transition-colors"
          aria-label="Scroll to projects"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.a>
      </div>
    </section>
  )
}
