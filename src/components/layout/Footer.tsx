import { Link } from "react-router-dom"
import { motion } from "motion/react"
import { socialLinks } from "@/data/socials"
import { Container } from "./Container"

export function Footer() {
  return (
    <footer className="w-full py-16 border-t border-border mt-auto relative z-10">
      <Container className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12 md:gap-4">
        
        {/* Left Section */}
        <div className="flex flex-col gap-4 max-w-sm">
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 -ml-1"
          >
            <img src="/images/brand/hanif-logo.svg" alt="HANIF." className="h-7 w-auto" />
          </Link>
          <p className="text-foreground-secondary text-sm md:text-base leading-relaxed">
            Membangun sesuatu yang berguna dengan teknologi.
          </p>
        </div>

        {/* Right Section / Socials & Meta */}
        <div className="flex flex-col items-start md:items-end gap-8 md:gap-4">
          
          <div className="flex flex-wrap items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <motion.a
                  key={link.name}
                  whileHover={{ scale: 1.15, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  href={link.href}
                  target={link.name === 'Email' ? undefined : "_blank"}
                  rel={link.name === 'Email' ? undefined : "noopener noreferrer"}
                  aria-label={link.name}
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
                >
                  <Icon size={22} />
                </motion.a>
              )
            })}
          </div>
          
          <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-6 text-xs text-foreground-muted">
            <p>© {new Date().getFullYear()} Hanif.</p>
            <span className="hidden md:block w-1 h-1 rounded-full bg-border"></span>
            <p>Built with React.</p>
          </div>

        </div>

      </Container>
    </footer>
  )
}
