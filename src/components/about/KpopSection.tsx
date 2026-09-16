import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { kpopInterests } from "@/data/interests"

export function KpopSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-surface-elevated/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-12 md:gap-16"
        >
          <SectionHeading 
            title="When I'm Not Coding."
          />

          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-start pt-8 border-t border-border/40">
            {/* Label Column */}
            <div className="w-full lg:w-48 shrink-0 lg:pt-1">
              <h3 className="text-sm font-semibold tracking-widest text-accent-blue uppercase">
                1. K-Pop
              </h3>
            </div>

            {/* Content Column */}
            <div className="flex-1 flex flex-col gap-8 md:gap-10 w-full">
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl">
                A small part of what I enjoy outside coding.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl">
                {kpopInterests.map(interest => (
                  <div key={interest.id} className="flex flex-col gap-4 group cursor-pointer">
                    <div className="w-full aspect-3/2 overflow-hidden rounded-xl bg-surface-elevated/30 border border-border/50 flex items-center justify-center relative transition-colors duration-500 group-hover:border-accent-blue/40 shadow-sm group-hover:shadow-[0_8px_30px_rgba(var(--accent-blue-rgb),0.1)]">
                      {interest.image ? (
                        <img 
                          src={interest.image} 
                          alt={interest.name}
                          loading="lazy"
                          className="w-full h-full object-cover opacity-80 mix-blend-luminosity transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                        />
                      ) : (
                        <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase group-hover:text-accent-blue transition-colors">
                          {interest.name} Visual
                        </span>
                      )}
                      
                      {/* Subtle playful detail */}
                      <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/20 to-transparent opacity-60"></div>
                      <div className="absolute bottom-4 right-4 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 text-accent-blue bg-background/50 backdrop-blur-md p-2 rounded-full border border-accent-blue/20">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-1 px-1">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-accent-blue transition-colors">{interest.name}</h3>
                      {interest.note && (
                        <p className="text-sm text-foreground-secondary leading-relaxed">
                          {interest.note}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
