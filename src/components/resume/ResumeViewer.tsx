import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"

export function ResumeViewer() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          <div className="w-full h-[75vh] md:h-[85vh] rounded-2xl overflow-hidden border border-border/40 bg-surface-elevated/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative backdrop-blur-sm">
            <iframe
              src="/resume.pdf"
              title="Hanif Resume"
              className="w-full h-full border-none"
              loading="lazy"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
