import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/Button"

export function ContactCTA() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 text-center relative overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight text-foreground">
            Let's build something <span className="text-gradient">useful.</span>
          </h2>
          <p className="text-xl text-foreground-secondary max-w-2xl">
            Punya ide, proyek, atau peluang menarik? Mari berdiskusi tentang bagaimana 
            kita bisa bekerja sama.
          </p>
          <a href="mailto:hanifkholilulloh03@gmail.com" className={buttonVariants({ variant: "primary", className: "h-14 px-10 text-lg mt-4" })}>
            Get in Touch &rarr;
          </a>
        </motion.div>
      </Container>
    </section>
  )
}
