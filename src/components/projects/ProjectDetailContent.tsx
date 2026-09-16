import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { type Project } from "@/data/projects"

interface ProjectDetailContentProps {
  project: Project
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pb-24 md:pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto flex flex-col gap-16 md:gap-24"
        >
          {project.overview && (
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <h2 className="text-sm font-semibold tracking-widest text-foreground-muted uppercase md:pt-1.5">Overview</h2>
              <div className="text-lg md:text-xl text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.overview}
              </div>
            </div>
          )}

          {project.problem && (
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <h2 className="text-sm font-semibold tracking-widest text-foreground-muted uppercase md:pt-1.5">The Problem</h2>
              <div className="text-lg md:text-xl text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.problem}
              </div>
            </div>
          )}

          {project.solution && (
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <h2 className="text-sm font-semibold tracking-widest text-foreground-muted uppercase md:pt-1.5">The Solution</h2>
              <div className="text-lg md:text-xl text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.solution}
              </div>
            </div>
          )}
          
          {project.role && (
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <h2 className="text-sm font-semibold tracking-widest text-foreground-muted uppercase md:pt-1.5">My Role</h2>
              <div className="text-lg md:text-xl text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.role}
              </div>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <h2 className="text-sm font-semibold tracking-widest text-foreground-muted uppercase md:pt-1.5">Key Challenges</h2>
              <ul className="list-disc list-outside ml-6 md:ml-4 text-lg md:text-xl text-foreground-secondary leading-relaxed space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="pl-2">{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.result && (
            <div className="flex flex-col md:grid md:grid-cols-[1fr_3fr] gap-4 md:gap-12">
              <h2 className="text-sm font-semibold tracking-widest text-foreground-muted uppercase md:pt-1.5">The Result</h2>
              <div className="text-lg md:text-xl text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.result}
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
