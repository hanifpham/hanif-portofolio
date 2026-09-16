import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowUpRight, Cpu, Map, Scan, MapPin } from "lucide-react"
import { SiReact, SiGo, SiFlutter, SiLaravel } from "react-icons/si"
import { type Project } from "@/data/projects"
import { Container } from "@/components/layout/Container"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

interface ProjectListProps {
  projects: Project[]
}

const TechItem = ({ tech }: { tech: string }) => {
  const getIcon = (name: string) => {
    switch (name.toLowerCase()) {
      case 'react': return <SiReact className="w-3.5 h-3.5" />
      case 'go': return <SiGo className="w-3.5 h-3.5" />
      case 'flutter': return <SiFlutter className="w-3.5 h-3.5" />
      case 'laravel': return <SiLaravel className="w-3.5 h-3.5" />
      case 'yolov11': return <Scan className="w-3.5 h-3.5" />
      case 'gis': return <Map className="w-3.5 h-3.5" />
      case 'openstreetmap': return <MapPin className="w-3.5 h-3.5" />
      default: return <Cpu className="w-3.5 h-3.5" />
    }
  }
  
  return (
    <span className="inline-flex items-center gap-1.5 text-sm text-foreground-muted">
      {getIcon(tech)} <span>{tech}</span>
    </span>
  )
}

export function ProjectList({ projects }: ProjectListProps) {
  const shouldReduceMotion = useReducedMotion()

  if (projects.length === 0) {
    return (
      <Container className="pb-32">
        <div className="w-full rounded-3xl border border-dashed border-border bg-surface-elevated/20 py-32 flex flex-col items-center justify-center text-center px-6">
          <h3 className="text-2xl font-bold text-foreground mb-4">Selected work will appear here.</h3>
          <p className="text-lg text-foreground-secondary max-w-lg mx-auto">
            Portofolio proyek sedang dalam proses kurasi.
          </p>
        </div>
      </Container>
    )
  }

  const featured = projects[0] // ROADIS
  const remaining = projects.slice(1) // Appkonkos, Scrollify

  return (
    <Container className="pb-32 flex flex-col gap-16 md:gap-24">
      {/* Featured Project */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <Link 
            to={`/projects/${featured.slug}`}
            className="group flex flex-col lg:grid lg:grid-cols-[1.2fr_1fr] gap-8 lg:gap-16 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl items-start"
          >
            <div className="w-full aspect-4/3 md:aspect-video lg:aspect-auto lg:h-100 rounded-2xl overflow-hidden bg-surface/50 border border-border/40 flex items-center justify-center p-4 lg:p-8 transition-colors duration-500 group-hover:border-border/80 group-hover:bg-surface-elevated/40">
              {featured.image ? (
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  loading="lazy"
                  className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
              ) : (
                <ProjectVisualPlaceholder project={featured} featured />
              )}
            </div>
            
            <div className="flex flex-col gap-6 lg:py-8">
              <div className="flex flex-col gap-3">
                <span className="text-xs font-medium tracking-widest text-foreground-muted uppercase">Featured Project</span>
                <div className="flex items-center justify-between">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground flex items-center gap-3">
                    {featured.title}
                    <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-foreground-muted transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-blue" />
                  </h3>
                </div>
              </div>
              
              <p className="text-base md:text-lg text-foreground-secondary leading-[1.6]">
                {featured.description}
              </p>
              
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2">
                {featured.technologies?.map((tech, i) => (
                  <div key={tech} className="flex items-center gap-4">
                    <TechItem tech={tech} />
                    {i < featured.technologies!.length - 1 && (
                      <span className="text-foreground-muted/30 text-xs">·</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Link>
        </motion.div>
      )}

      {/* Remaining Projects */}
      {remaining.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {remaining.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1], delay: shouldReduceMotion ? 0 : index * 0.1 }}
            >
              <Link 
                to={`/projects/${project.slug}`}
                className="group flex flex-col gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl h-full"
              >
                <div className="w-full aspect-4/3 rounded-2xl overflow-hidden bg-surface/50 border border-border/40 flex items-center justify-center p-4 lg:p-8 transition-colors duration-500 group-hover:border-border/80 group-hover:bg-surface-elevated/40">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      loading="lazy"
                      className="w-full h-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                    />
                  ) : (
                    <ProjectVisualPlaceholder project={project} />
                  )}
                </div>
                
                <div className="flex flex-col gap-4 flex-1 pt-2">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center justify-between">
                      {project.title}
                      <ArrowUpRight className="w-5 h-5 text-foreground-muted transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-blue" />
                    </h3>
                  </div>
                  
                  <p className="text-base text-foreground-secondary leading-[1.6] line-clamp-3">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2 mt-auto">
                    {project.technologies?.map((tech, i) => (
                      <div key={tech} className="flex items-center gap-3">
                        <TechItem tech={tech} />
                        {i < project.technologies!.length - 1 && (
                          <span className="text-foreground-muted/30 text-xs">·</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      )}
    </Container>
  )
}
