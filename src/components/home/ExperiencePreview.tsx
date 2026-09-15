import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { experience } from "@/data/experience"

export function ExperiencePreview() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-200"
        >
          <SectionHeading 
            eyebrow="Experience"
            title="My Journey."
          />
          
          <div className="mt-16">
            {experience.length > 0 ? (
              <div className="flex flex-col gap-12">
                {/* Timeline goes here */}
              </div>
            ) : (
              <div className="border-l border-border pl-8 py-4">
                <p className="text-foreground-secondary italic">
                  Informasi riwayat perjalanan sedang disiapkan.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
