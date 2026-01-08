import { useEffect, useRef } from 'react'
import { createTopographicRenderer } from '../../utils/topographicGenerator'

export default function TopographicBackground() {
  const canvasRef = useRef(null)
  const rendererRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Skip on mobile for performance
    const isMobile = window.matchMedia('(max-width: 768px)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (isMobile || prefersReducedMotion) {
      return
    }

    rendererRef.current = createTopographicRenderer(canvas)
    rendererRef.current.start()

    return () => {
      if (rendererRef.current) {
        rendererRef.current.stop()
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    />
  )
}
