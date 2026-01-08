import { clsx } from 'clsx'

export default function TechBadge({ children, className }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full',
        'bg-accent/10 text-accent border border-accent/20',
        className
      )}
    >
      {children}
    </span>
  )
}
