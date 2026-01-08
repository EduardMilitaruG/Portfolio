import { createNoise2D } from 'simplex-noise'

export function createTopographicRenderer(canvas) {
  const ctx = canvas.getContext('2d')
  const noise2D = createNoise2D()

  let animationId = null
  let time = 0

  const config = {
    scale: 0.003,
    levels: [0.2, 0.35, 0.5, 0.65, 0.8],
    cellSize: 8,
    lineWidth: 2,
    baseOpacity: 0.06,
    animationSpeed: 0.00002,
    color: { r: 100, g: 130, b: 160 }
  }

  function resize() {
    const dpr = Math.min(window.devicePixelRatio, 2)
    const rect = canvas.getBoundingClientRect()
    canvas.width = rect.width * dpr
    canvas.height = rect.height * dpr
    ctx.scale(dpr, dpr)
    canvas.style.width = `${rect.width}px`
    canvas.style.height = `${rect.height}px`
  }

  function generateNoiseField(width, height, t) {
    const cols = Math.ceil(width / config.cellSize) + 1
    const rows = Math.ceil(height / config.cellSize) + 1
    const field = []

    for (let y = 0; y < rows; y++) {
      field[y] = []
      for (let x = 0; x < cols; x++) {
        const nx = x * config.cellSize * config.scale
        const ny = y * config.cellSize * config.scale
        field[y][x] = (noise2D(nx + t, ny + t) + 1) / 2
      }
    }
    return { field, cols, rows }
  }

  function lerp(a, b, t) {
    return a + (b - a) * t
  }

  function getContourSegments(field, cols, rows, threshold) {
    const segments = []

    for (let y = 0; y < rows - 1; y++) {
      for (let x = 0; x < cols - 1; x++) {
        const tl = field[y][x]
        const tr = field[y][x + 1]
        const br = field[y + 1][x + 1]
        const bl = field[y + 1][x]

        const tlAbove = tl >= threshold
        const trAbove = tr >= threshold
        const brAbove = br >= threshold
        const blAbove = bl >= threshold

        const caseIndex = (tlAbove ? 8 : 0) | (trAbove ? 4 : 0) | (brAbove ? 2 : 0) | (blAbove ? 1 : 0)

        if (caseIndex === 0 || caseIndex === 15) continue

        const px = x * config.cellSize
        const py = y * config.cellSize
        const cs = config.cellSize

        const topT = (threshold - tl) / (tr - tl)
        const rightT = (threshold - tr) / (br - tr)
        const bottomT = (threshold - bl) / (br - bl)
        const leftT = (threshold - tl) / (bl - tl)

        const top = { x: px + lerp(0, cs, topT), y: py }
        const right = { x: px + cs, y: py + lerp(0, cs, rightT) }
        const bottom = { x: px + lerp(0, cs, bottomT), y: py + cs }
        const left = { x: px, y: py + lerp(0, cs, leftT) }

        switch (caseIndex) {
          case 1: case 14: segments.push([left, bottom]); break
          case 2: case 13: segments.push([bottom, right]); break
          case 3: case 12: segments.push([left, right]); break
          case 4: case 11: segments.push([top, right]); break
          case 5:
            segments.push([left, top])
            segments.push([bottom, right])
            break
          case 6: case 9: segments.push([top, bottom]); break
          case 7: case 8: segments.push([left, top]); break
          case 10:
            segments.push([top, right])
            segments.push([left, bottom])
            break
        }
      }
    }
    return segments
  }

  function render() {
    const width = canvas.width / (window.devicePixelRatio || 1)
    const height = canvas.height / (window.devicePixelRatio || 1)

    ctx.clearRect(0, 0, width, height)

    const { field, cols, rows } = generateNoiseField(width, height, time)

    config.levels.forEach((level, i) => {
      const opacity = config.baseOpacity * (1 - i * 0.15)
      ctx.strokeStyle = `rgba(${config.color.r}, ${config.color.g}, ${config.color.b}, ${opacity})`
      ctx.lineWidth = config.lineWidth
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'

      const segments = getContourSegments(field, cols, rows, level)

      ctx.beginPath()
      segments.forEach(([start, end]) => {
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
      })
      ctx.stroke()
    })

    time += config.animationSpeed
    animationId = requestAnimationFrame(render)
  }

  function start() {
    resize()
    window.addEventListener('resize', resize)
    render()
  }

  function stop() {
    if (animationId) {
      cancelAnimationFrame(animationId)
    }
    window.removeEventListener('resize', resize)
  }

  return { start, stop, resize }
}
