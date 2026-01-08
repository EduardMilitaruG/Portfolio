import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function Section({
  id,
  children,
  className,
  containerClassName,
  ...props
}) {
  return (
    <section
      id={id}
      className={clsx('py-20 md:py-32', className)}
      {...props}
    >
      <motion.div
        className={clsx('max-w-5xl mx-auto px-6', containerClassName)}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  )
}
