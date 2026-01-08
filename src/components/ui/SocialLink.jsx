import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function SocialLink({ href, icon: Icon, label, className }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={clsx(
        'inline-flex items-center justify-center w-10 h-10 rounded-full',
        'text-text-secondary hover:text-text-primary',
        'bg-bg-secondary hover:bg-border',
        'border border-border hover:border-accent/30',
        'transition-colors',
        className
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Icon size={20} />
    </motion.a>
  )
}
