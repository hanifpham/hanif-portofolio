import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProjectListHeader() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-8 pb-12 md:pt-12 md:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading 
            eyebrow="PROJECTS"
            title="Selected work, experiments, and things I've built along the way."
            as="h1"
          />
        </motion.div>
      </Container>
    </section>
  )
}
