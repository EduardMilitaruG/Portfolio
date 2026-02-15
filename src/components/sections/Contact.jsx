import { Github, Linkedin, Mail } from 'lucide-react'
import Section from '../layout/Section'
import SocialLink from '../ui/SocialLink'
import Button from '../ui/Button'

const socialLinks = [
  {
    href: 'https://github.com/EduardMilitaruG',
    icon: Github,
    label: 'GitHub'
  },
  {
    href: 'https://www.linkedin.com/in/eduardmilitaru/',
    icon: Linkedin,
    label: 'LinkedIn'
  },
  {
    href: 'mailto:eduardmilitarug@gmail.com',
    icon: Mail,
    label: 'Email'
  }
]

export default function Contact() {
  return (
    <Section id="contact">
      <div className="text-center max-w-xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-4">
          Contacto
        </h2>

        <p className="text-text-secondary mb-8">
          ¿Tienes un proyecto en mente o simplemente quieres saludar?
          No dudes en escribirme.
        </p>

        <Button href="mailto:eduardmilitarug@gmail.com" size="lg" className="mb-10">
          <Mail size={18} />
          Enviar email
        </Button>

        <div className="flex items-center justify-center gap-4">
          {socialLinks.map((link) => (
            <SocialLink
              key={link.label}
              href={link.href}
              icon={link.icon}
              label={link.label}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}
