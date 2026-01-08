import { motion } from 'framer-motion'
import { clsx } from 'clsx'

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className,
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-bg-primary'

  const variants = {
    primary: 'bg-accent text-white hover:bg-accent-hover',
    secondary: 'bg-bg-secondary text-text-primary border border-border hover:border-accent/50',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-bg-secondary'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm gap-1.5',
    md: 'px-4 py-2 text-sm gap-2',
    lg: 'px-6 py-3 text-base gap-2'
  }

  const classes = clsx(baseStyles, variants[variant], sizes[size], className)

  const MotionComponent = href ? motion.a : motion.button

  return (
    <MotionComponent
      href={href}
      target={href?.startsWith('http') ? '_blank' : undefined}
      rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      className={classes}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </MotionComponent>
  )
}
