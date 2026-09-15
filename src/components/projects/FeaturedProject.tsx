import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, ExternalLink, GitBranch } from "lucide-react"
import { type Project } from "@/data/projects"
import { buttonVariants } from "@/components/ui/Button"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

interface FeaturedProjectProps {
  project: Project
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.article 
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col gap-8 md:gap-12 mb-24 md:mb-32"
    >
      <div className="w-full overflow-hidden rounded-2xl border border-border/40 aspect-video relative">
        {project.image ? (
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <ProjectVisualPlaceholder project={project} featured />
        )}
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-between items-start">
        <div className="flex flex-col gap-4 max-w-2xl">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 text-xs font-semibold tracking-widest uppercase bg-accent-blue/10 text-accent-blue rounded-full border border-accent-blue/20">
              Featured Project
            </span>
            {project.year && (
              <span className="text-sm font-medium text-foreground-muted">{project.year}</span>
            )}
          </div>
          
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            {project.title}
          </h3>
          
          <p className="text-base md:text-lg text-foreground-secondary leading-[1.6]">
            {project.description}
          </p>
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {project.technologies.map(tech => (
                <span key={tech} className="px-3 py-1 rounded-full bg-surface border border-border text-sm text-foreground-secondary">
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="flex flex-col sm:flex-row md:flex-col gap-4 w-full sm:w-auto md:min-w-50">
          <Link 
            to={`/projects/${project.slug}`}
            className={buttonVariants({ variant: "primary", className: "h-12 w-full justify-center md:justify-start gap-2" })}
          >
            View Case Study <ArrowRight size={18} />
          </Link>
          
          {(project.liveUrl || project.githubUrl) && (
            <div className="flex gap-4 sm:w-full">
              {project.liveUrl && (
                <a 
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary", className: "h-12 flex-1 gap-2" })}
                >
                  <ExternalLink size={18} /> Live
                </a>
              )}
              {project.githubUrl && (
                <a 
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonVariants({ variant: "secondary", className: "h-12 flex-1 gap-2" })}
                >
                  <GitBranch size={18} /> Source
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}
