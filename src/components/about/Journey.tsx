import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { experience } from "@/data/experience"

export function Journey() {
  const shouldReduceMotion = useReducedMotion()

  if (!experience || experience.length === 0) return null

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16 max-w-4xl"
        >
          <SectionHeading 
            eyebrow="Experience"
            title="My Journey."
          />
          
          <div className="flex flex-col gap-12">
            {experience.length > 0 ? (
              <div className="flex flex-col gap-12 border-l border-border/50 pl-6 md:pl-10 ml-2 md:ml-4">
                {/* Timeline rendering will go here when data is populated */}
              </div>
            ) : (
              <div className="py-12 border-l-2 border-border/50 pl-6 md:pl-8">
                <h3 className="text-xl font-medium text-foreground mb-3">Dokumentasi Perjalanan</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  Riwayat pengalaman dan perjalanan profesional sedang dalam tahap penyusunan. 
                  Ruang ini didedikasikan untuk menceritakan evolusi peran dan tanggung jawab 
                  saya di masa mendatang.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
