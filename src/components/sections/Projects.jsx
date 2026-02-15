import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import Section from '../layout/Section'
import Card from '../ui/Card'
import TechBadge from '../ui/TechBadge'
import Button from '../ui/Button'
import { projects } from '../../data/projects'

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
}

export default function Projects() {
  return (
    <Section id="projects">
      <div className="mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Proyectos
        </h2>
        <p className="text-text-secondary max-w-2xl">
          Una selección de proyectos recientes.
        </p>
      </div>

      <motion.div
        className="grid md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
      >
        {projects.map((project) => (
          <motion.div key={project.id} variants={itemVariants}>
            <Card className="h-full flex flex-col">
              <div className="aspect-video bg-bg-primary relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent" />
                <div className="absolute inset-0 flex items-center justify-center text-text-secondary">
                  <span className="text-sm">Preview</span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-display text-xl font-semibold text-text-primary mb-2">
                  {project.title}
                </h3>

                <p className="text-text-secondary text-sm mb-4 flex-1">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <TechBadge key={tech}>{tech}</TechBadge>
                  ))}
                </div>

                <div className="flex gap-3">
                  {project.github && (
                    <Button
                      href={project.github}
                      variant="ghost"
                      size="sm"
                    >
                      <Github size={16} />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      href={project.demo}
                      variant="ghost"
                      size="sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  )
}
