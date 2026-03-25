import Section from '../layout/Section'

const skills = [
  'Playwright / Cypress',
  'Jest / Supertest',
  'React / TypeScript',
  'Node.js / APIs REST',
  'HTML5 / CSS3 / Tailwind',
  'PostgreSQL / SQLite',
  'Docker / GitHub Actions',
  'Python / Automatización'
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
              QA Engineer y Frontend Developer con más de 2 años de experiencia en automatización de pruebas, desarrollo web y entrega de software de calidad en producción.
            </p>

            <p>
              He trabajado en proyectos para organismos públicos y empresas locales, cubriendo todo el ciclo: análisis funcional, desarrollo, testing automatizado y despliegue en producción.
            </p>

            <p>
              Especializado en Playwright, Cypress y Jest para suites de testing E2E, unitarias e integración. En frontend, construyo interfaces modernas con React y TypeScript enfocadas en rendimiento y accesibilidad.
            </p>

            <p>
              Trilingüe (español, inglés, rumano). Abierto a posiciones en Valencia, Madrid, remoto o fuera de España.
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
