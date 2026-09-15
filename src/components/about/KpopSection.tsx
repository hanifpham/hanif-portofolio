import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { kpopInterests } from "@/data/interests"

export function KpopSection() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-surface-elevated/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16"
        >
          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
              When I'm not coding.
            </h2>
            <p className="text-lg text-foreground-secondary">
              Sedikit ruang untuk hal-hal yang saya nikmati di luar layar editor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 mt-8">
            {kpopInterests.map(interest => (
              <div key={interest.id} className="flex flex-col gap-6 group">
                <div className="w-full aspect-square md:aspect-4/3 overflow-hidden rounded-2xl bg-surface border border-border flex items-center justify-center relative">
                  {interest.image ? (
                    <img 
                      src={interest.image} 
                      alt={interest.name}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <span className="text-sm font-medium tracking-widest text-foreground-muted uppercase">
                      {interest.name} Visual
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col gap-2">
                  <h3 className="text-2xl font-bold text-foreground">{interest.name}</h3>
                  {interest.note && (
                    <p className="text-foreground-secondary leading-relaxed">
                      {interest.note}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
