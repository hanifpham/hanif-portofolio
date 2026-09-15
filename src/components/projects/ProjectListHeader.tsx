import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

export function ProjectListHeader() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <SectionHeading 
            eyebrow="Selected Work"
            title="Things I've built."
            description="Beberapa hal yang saya bangun, dari aplikasi web dan mobile hingga sistem yang menggabungkan AI dan GIS."
          />
        </motion.div>
      </Container>
    </section>
  )
}
