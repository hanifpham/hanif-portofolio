import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"

export function AboutIntro() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 md:gap-8 max-w-4xl"
        >
          <span className="text-sm font-semibold tracking-widest text-accent-blue uppercase">
            About Me
          </span>
          
          <div className="flex flex-col gap-4">
            <h1 className="text-[36px] md:text-[42px] lg:text-[56px] font-bold tracking-tight text-foreground leading-[1.1]">
              Saya Hanif.
            </h1>
            
            <h2 className="text-lg md:text-xl lg:text-[24px] font-medium text-foreground-secondary leading-snug">
              Web Developer & Software Developer.
            </h2>
          </div>
          
          <div className="mt-2">
            <p className="text-base md:text-lg text-foreground-secondary leading-relaxed max-w-175">
              Saya suka membangun sesuatu yang berguna dengan teknologi, dengan perhatian pada 
              bagaimana sesuatu bekerja dan bagaimana sesuatu terasa.
            </p>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
