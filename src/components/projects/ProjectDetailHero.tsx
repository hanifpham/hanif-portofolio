import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowLeft, ExternalLink, GitBranch, Cpu, Map, Scan, MapPin } from "lucide-react"
import { SiReact, SiGo, SiFlutter, SiLaravel } from "react-icons/si"
import { Container } from "@/components/layout/Container"
import { type Project } from "@/data/projects"
import { buttonVariants } from "@/components/ui/Button"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

interface ProjectDetailHeroProps {
  project: Project
}

const TechItem = ({ tech }: { tech: string }) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'react': return <SiReact className="w-4 h-4" />
      case 'go': return <SiGo className="w-4 h-4" />
      case 'flutter': return <SiFlutter className="w-4 h-4" />
      case 'laravel': return <SiLaravel className="w-4 h-4" />
      case 'yolov11': return <Scan className="w-4 h-4" />
      case 'gis': return <Map className="w-4 h-4" />
      case 'openstreetmap': return <MapPin className="w-4 h-4" />
      default: return <Cpu className="w-4 h-4" />
    }
  }
  
  return (
    <span className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-surface-elevated/30 border border-border/50 text-sm font-medium text-foreground-secondary">
      {getIcon(tech)} {tech}
    </span>
  )
}

export function ProjectDetailHero({ project }: ProjectDetailHeroProps) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="pt-4 pb-12 md:pt-8 md:pb-16">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-12 md:gap-16"
        >
          {/* Back Navigation */}
          <div>
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 text-sm font-medium text-foreground-muted hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md py-1"
            >
              <ArrowLeft size={16} className="transition-transform duration-300 group-hover:-translate-x-1" />
              Back to Projects
            </Link>
          </div>

          {/* Header Info */}
          <div className="flex flex-col gap-8 max-w-4xl">
            <div className="flex flex-col gap-4">
              {/* Category / Year */}
              <div className="flex items-center gap-3">
                {project.category && (
                  <span className="text-sm font-semibold tracking-widest text-accent-blue uppercase">
                    {project.category}
                  </span>
                )}
                {project.category && project.year && (
                  <span className="text-foreground-muted/50">•</span>
                )}
                {project.year && (
                  <span className="text-sm font-semibold tracking-widest text-foreground-muted uppercase">
                    {project.year}
                  </span>
                )}
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.1]">
                {project.title}
              </h1>
            </div>

            {/* Overview */}
            <p className="text-lg md:text-xl text-foreground-secondary leading-[1.6]">
              {project.description}
            </p>

            {/* Technology Stack */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-2">
                {project.technologies.map(tech => (
                  <TechItem key={tech} tech={tech} />
                ))}
              </div>
            )}

            {/* Links */}
            {(project.liveUrl || project.githubUrl) && (
              <div className="flex flex-wrap gap-4 pt-4">
                {project.liveUrl && (
                  <a 
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "primary", className: "h-12 px-6 gap-2" })}
                  >
                    <ExternalLink size={18} /> Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={buttonVariants({ variant: "secondary", className: "h-12 px-6 gap-2" })}
                  >
                    <GitBranch size={18} /> View Source
                  </a>
                )}
              </div>
            )}
          </div>

          {/* Large Screenshot */}
          <div className="w-full aspect-video md:aspect-video lg:aspect-21/9 rounded-2xl overflow-hidden bg-surface-elevated/20 border border-border/50 flex items-center justify-center p-4 md:p-8 lg:p-12">
            {project.image ? (
              <img 
                src={project.image} 
                alt={`${project.title} screenshot`}
                loading="lazy"
                className="w-full h-full object-contain"
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
