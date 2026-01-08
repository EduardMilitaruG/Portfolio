import Section from '../layout/Section'

const skills = [
  'JavaScript / TypeScript',
  'React / Node.js',
  'HTML5 / CSS3',
  'PostgreSQL / MySQL',
  'Python / APIs REST',
  'Git / GitHub'
]

export default function About() {
  return (
    <Section id="about">
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-6">
            Sobre mí
          </h2>

          <div className="space-y-4 text-text-secondary">
            <p>
              Soy desarrollador con más de 1 año de experiencia en el desarrollo de aplicaciones web, APIs REST y automatización de procesos.
            </p>

            <p>
              He participado en proyectos para organismos públicos y empresas locales,
               involucrándome en todo el ciclo de vida del software:
                desde el análisis funcional y diseño de la solución, hasta el despliegue y soporte en producción
            </p>

            <p>
              Me enfoco en escribir código limpio, construir soluciones eficientes y trabajar en equipos colaborativos
              orientados a crear productos reales que aporten valor al negocio.
            </p>

            <p>
              Además, cuento con conocimientos en sistemas IoT, integrando hardware y software en proyectos de monitoreo remoto y automatización.
            </p>
          </div>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold text-text-primary mb-4">
            Tecnologías
          </h3>

          <ul className="grid grid-cols-2 gap-2">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center gap-2 text-text-secondary text-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
