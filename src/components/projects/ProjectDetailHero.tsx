import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { type Project } from "@/data/projects"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

interface ProjectDetailHeroProps {
  project: Project
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-32 pb-16 md:pt-48 md:pb-24">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-8 md:gap-16"
        >
          <div className="flex flex-col gap-6 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-foreground leading-[1.1]">
              {project.title}
            </h1>
            <p className="text-base md:text-lg text-foreground-secondary leading-[1.6] max-w-175">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-8 py-8 border-y border-border/50">
            {project.role && (
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-foreground-muted">Role</span>
                <span className="text-base text-foreground-secondary">{project.role}</span>
              </div>
            )}
            
            {project.category && (
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-foreground-muted">Category</span>
                <span className="text-base text-foreground-secondary">{project.category}</span>
              </div>
            )}

            {project.platform && project.platform.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-foreground-muted">Platform</span>
                <span className="text-base text-foreground-secondary">{project.platform.join(", ")}</span>
              </div>
            )}

            {project.year && (
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-foreground-muted">Year</span>
                <span className="text-base text-foreground-secondary">{project.year}</span>
              </div>
            )}

            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-col gap-2">
                <span className="text-sm font-semibold tracking-widest uppercase text-foreground-muted">Technologies</span>
                <span className="text-base text-foreground-secondary">{project.technologies.join(", ")}</span>
              </div>
            )}
          </div>

          <div className="w-full overflow-hidden rounded-2xl border border-border/40 aspect-video md:aspect-21/9 relative mt-4">
            {project.image ? (
              <img 
                src={project.image} 
                alt={`${project.title} Hero Image`}
                className="w-full h-full object-cover"
              />
            ) : (
              <ProjectVisualPlaceholder project={project} featured />
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
