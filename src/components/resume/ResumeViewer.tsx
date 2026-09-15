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
          className="w-full flex justify-center"
        >
          <div className="w-full max-w-250 h-[70vh] md:h-[85vh] rounded-2xl overflow-hidden border border-border bg-surface-elevated/20 shadow-sm relative">
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
