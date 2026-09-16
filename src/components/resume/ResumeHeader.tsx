import { motion, useReducedMotion } from "motion/react"
import { Download, ExternalLink } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/Button"

export function ResumeHeader() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-4 pb-8 md:pt-8 md:pb-12">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-12 justify-between items-start md:items-end border-b border-border/50 pb-8"
        >
          <div className="flex flex-col gap-4">
            <span className="text-sm font-semibold tracking-widest text-accent-blue uppercase">
              Resume
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
              My Resume
            </h1>
            <p className="text-lg text-foreground-secondary max-w-xl">
              My professional background, experience, education, and skills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto shrink-0">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer"
              className={buttonVariants({ variant: "primary", className: "h-12 px-6 gap-2 w-full sm:w-auto justify-center" })}
            >
              <ExternalLink size={18} />
              Open in New Tab
            </a>
            <a 
              href="/resume.pdf" 
              download="Hanif_Resume.pdf"
              className={buttonVariants({ variant: "secondary", className: "h-12 px-6 gap-2 w-full sm:w-auto justify-center" })}
            >
              <Download size={18} />
              Download Resume
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
