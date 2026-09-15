import { motion, useReducedMotion } from "motion/react"
import { ExternalLink, GitBranch } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/Button"
import { type Project } from "@/data/projects"

interface ProjectDetailContentProps {
  project: Project
}

export function ProjectDetailContent({ project }: ProjectDetailContentProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl mx-auto flex flex-col gap-16 md:gap-24"
        >
          {project.overview && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Overview</h2>
              <div className="text-lg text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.overview}
              </div>
            </div>
          )}

          {project.problem && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">The Problem</h2>
              <div className="text-lg text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.problem}
              </div>
            </div>
          )}

          {project.solution && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">The Solution</h2>
              <div className="text-lg text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.solution}
              </div>
            </div>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">Key Challenges</h2>
              <ul className="list-disc list-outside ml-6 text-lg text-foreground-secondary leading-relaxed space-y-3">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="pl-2">{challenge}</li>
                ))}
              </ul>
            </div>
          )}

          {project.result && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight">The Result</h2>
              <div className="text-lg text-foreground-secondary leading-relaxed space-y-4 whitespace-pre-wrap">
                {project.result}
              </div>
            </div>
          )}

          {(project.liveUrl || project.githubUrl) && (
            <div className="flex flex-col sm:flex-row gap-6 pt-8 border-t border-border/50">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "primary", className: "h-14 px-8 gap-2 text-base" })}
                >
                  <ExternalLink size={20} /> Live Demo
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary", className: "h-14 px-8 gap-2 text-base" })}
                >
                  <GitBranch size={20} /> View Source
                </a>
              )}
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
