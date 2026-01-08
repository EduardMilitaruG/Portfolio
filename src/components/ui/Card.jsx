import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function Card({ children, className, hover = true, ...props }) {
  return (
    <motion.div
      className={clsx(
        'bg-bg-secondary border border-border rounded-xl overflow-hidden',
        className
      )}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </motion.div>
  )
}
