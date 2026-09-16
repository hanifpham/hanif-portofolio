import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"

const areas = [
  {
    title: "Web Development",
    description: "Membangun antarmuka dan pengalaman web yang responsif dan interaktif."
  },
  {
    title: "Software Development",
    description: "Merancang sistem dan arsitektur backend yang tangguh."
  },
  {
    title: "UI/UX",
    description: "Menciptakan desain yang fungsional, estetis, dan berpusat pada pengguna."
  },
  {
    title: "AI / Computer Vision",
    description: "Eksplorasi kecerdasan buatan dan pemrosesan citra."
  },
  {
    title: "Mobile Development",
    description: "Mengembangkan aplikasi mobile yang mulus dan performan."
  }
]

export function WhatIDo() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-surface-elevated/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16 md:gap-24"
        >
          <SectionHeading 
            title="What I Do."
            description="Area fokus yang saya kerjakan dan pelajari."
          />
          
          <div className="flex flex-col gap-0 border-t border-border/40">
            {areas.map((area, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : index * 0.1 }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-8 md:py-10 border-b border-border/40 hover:border-accent-blue/30 transition-colors duration-300"
              >
                <div className="flex items-center gap-6 md:w-1/3">
                  <span className="text-sm font-mono text-foreground-muted group-hover:text-accent-blue transition-colors duration-300">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-white transition-colors duration-300">
                    {area.title}
                  </h3>
                </div>
                
                <div className="mt-4 md:mt-0 md:w-1/2 flex items-center justify-between">
                  <p className="text-foreground-secondary leading-relaxed">
                    {area.description}
                  </p>
                  
                  {/* Subtle interaction detail */}
                  <div className="hidden md:flex opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent-blue">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
