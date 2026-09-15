import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

const areas = [
  {
    title: "Web Development",
    description: "Building web applications with React/Laravel."
  },
  {
    title: "Mobile Development",
    description: "Building mobile applications with Flutter."
  },
  {
    title: "Software Development",
    description: "Building systems with technologies such as Go."
  },
  {
    title: "Exploring AI & GIS",
    description: "Exploring computer vision and geospatial technology through projects such as ROADIS."
  }
]

export function WhatIDo() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16"
        >
          <SectionHeading 
            eyebrow="Expertise"
            title="What I Do."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {areas.map((area, index) => (
              <div key={index} className="flex flex-col gap-4 pt-6 border-t border-border">
                <h3 className="text-xl font-bold text-foreground">{area.title}</h3>
                <p className="text-foreground-secondary leading-relaxed">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
