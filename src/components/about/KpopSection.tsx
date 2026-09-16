import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { kpopInterests } from "@/data/interests"

export function KpopSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-24 md:pt-32 pb-8 md:pb-12 bg-surface-elevated/5">
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

          <div className="flex flex-col gap-8 md:gap-10 pt-12 border-t border-border/40 relative w-full">
            {/* Playful elements */}
            <div className="absolute top-0 right-10 -translate-y-1/2 opacity-30 hidden md:block text-pink-400 rotate-12">
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-widest text-accent-blue uppercase drop-shadow-sm">
                1. K-Pop
              </h3>
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl font-medium">
                A small part of what I enjoy outside coding. ✨
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full">
              {kpopInterests.map((interest, i) => (
                <motion.div 
                  key={interest.id}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 100 }}
                  className="flex flex-col gap-4 group cursor-pointer w-full"
                >
                  <div className="w-full aspect-3/2 overflow-hidden rounded-3xl bg-surface-elevated/20 shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-2 border-border/40 flex items-center justify-center relative transition-all duration-500 hover:border-pink-300/40 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(244,114,182,0.15)]">
                    {interest.image ? (
                      <img 
                        src={interest.image} 
                        alt={interest.name}
                        loading="lazy"
                        className="w-full h-full object-cover opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                      />
                    ) : (
                      <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase group-hover:text-pink-400 transition-colors">
                        {interest.name} Visual
                      </span>
                    )}
                    
                    <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500"></div>
                    
                    {/* Heart action icon */}
                    <div className="absolute bottom-4 right-4 opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 text-pink-400 bg-white/10 backdrop-blur-md p-2.5 rounded-full shadow-lg border border-pink-200/20">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                      </svg>
                    </div>
                  </div>
                  
                  <div className="flex flex-col gap-1 px-2">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-pink-400 transition-colors drop-shadow-sm">{interest.name}</h3>
                    {interest.note && (
                      <p className="text-sm text-foreground-secondary leading-relaxed font-medium">
                        {interest.note}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
