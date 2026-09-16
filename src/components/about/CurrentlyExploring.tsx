import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"

export function CurrentlyExploring() {
  const shouldReduceMotion = useReducedMotion()

  const topics = [
    "AI Integration",
    "Mobile Development",
    "Design Systems",
    "Machine Learning"
  ]

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-8 md:gap-16 items-start md:items-center py-12 border-y border-border/50"
        >
          <h2 className="text-lg font-bold text-foreground min-w-48 whitespace-nowrap">
            Currently Exploring
          </h2>
          
          <div className="flex flex-wrap gap-3">
            {topics.map(topic => (
              <span 
                key={topic} 
                className="px-4 py-2 rounded-full bg-surface-elevated/50 border border-border text-sm text-foreground-secondary font-medium tracking-wide"
              >
                {topic}
              </span>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
