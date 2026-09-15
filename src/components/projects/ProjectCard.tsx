import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { type Project } from "@/data/projects"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article 
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center"
    >
      <div className="w-full md:w-1/2 overflow-hidden rounded-2xl border border-border/40 aspect-4/3 md:aspect-16/10 relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title} 
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <ProjectVisualPlaceholder project={project} />
        )}
      </div>

      <div className="w-full md:w-1/2 flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground-muted tracking-widest">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          {project.category && (
            <span className="text-accent-blue text-sm font-medium tracking-wide uppercase">
              {project.category}
            </span>
          )}
        </div>

        <p className="text-base md:text-lg text-foreground-secondary leading-[1.6] max-w-175">
          {project.description}
        </p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-foreground-muted">
            {project.technologies.map((tech, i) => (
              <span key={tech} className="flex items-center">
                {tech}
                {i < project.technologies!.length - 1 && <span className="mx-3 opacity-50">·</span>}
              </span>
            ))}
          </div>
        )}

        <div className="mt-4">
          <Link 
            to={`/projects/${project.slug}`}
            className="inline-flex items-center gap-2 text-foreground font-medium hover:text-accent-blue transition-colors group/link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 -ml-1"
          >
            View Project
            <ArrowRight size={18} className="transition-transform duration-300 group-hover/link:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
}
