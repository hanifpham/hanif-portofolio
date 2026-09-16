import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight, ArrowUpRight, Cpu, Map, Scan, MapPin } from "lucide-react"
import { SiReact, SiGo, SiFlutter, SiLaravel } from "react-icons/si"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/Button"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

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
    <span className="flex items-center gap-1.5 text-sm font-medium text-foreground-secondary">
      {getIcon(tech)} {tech}
    </span>
  )
}

export function SelectedProjects() {
  const shouldReduceMotion = useReducedMotion()
  const displayProjects = projects.slice(0, 3)

  if (displayProjects.length === 0) return null

  const featured = displayProjects[0] // ROADIS
  const remaining = displayProjects.slice(1) // Appkonkos, Scrollify

  return (
    <section id="selected-work" className="py-24 md:py-32 scroll-mt-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16 md:gap-24"
        >
          <div className="flex justify-between items-end">
            <SectionHeading 
              eyebrow="Selected Work"
              title="Things I've built."
            />
            <Link 
              to="/projects" 
              className="hidden md:inline-flex items-center gap-2 text-foreground font-medium hover:text-accent-blue transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-2 py-1"
            >
              View All Projects <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
          
          <div className="flex flex-col gap-16 md:gap-24">
            {/* Featured Project */}
            {featured && (
              <Link 
                to={`/projects/${featured.slug}`}
                className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl"
              >
                <div className="w-full md:w-[55%] aspect-video md:aspect-4/3 rounded-2xl overflow-hidden bg-surface-elevated/20 border border-border/50 shrink-0 flex items-center justify-center p-4 lg:p-8 transition-colors duration-500 group-hover:border-border group-hover:bg-surface-elevated/40">
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
                
                <div className="w-full md:w-[45%] flex flex-col gap-6 lg:gap-8 py-4">
                  <div className="flex flex-col gap-3">
                    <span className="text-sm font-semibold tracking-widest text-foreground-muted uppercase">01 / Featured</span>
                    <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground flex items-center gap-3">
                      {featured.title}
                      <ArrowUpRight className="w-6 h-6 md:w-8 md:h-8 text-foreground-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-blue" />
                    </h3>
                  </div>
                  
                  <p className="text-base md:text-lg text-foreground-secondary leading-[1.6]">
                    {featured.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-3 pt-2">
                    {featured.technologies?.map(tech => (
                      <TechItem key={tech} tech={tech} />
                    ))}
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Projects */}
            {remaining.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
                {remaining.map((project, index) => (
                  <Link 
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="group flex flex-col gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl"
                  >
                    <div className="w-full aspect-video rounded-2xl overflow-hidden bg-surface-elevated/20 border border-border/50 shrink-0 flex items-center justify-center p-4 lg:p-8 transition-colors duration-500 group-hover:border-border group-hover:bg-surface-elevated/40">
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
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-2">
                        <span className="text-sm font-semibold tracking-widest text-foreground-muted uppercase">0{index + 2}</span>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground flex items-center gap-2">
                          {project.title}
                          <ArrowUpRight className="w-5 h-5 text-foreground-muted transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent-blue" />
                        </h3>
                      </div>
                      
                      <p className="text-base text-foreground-secondary leading-[1.6] line-clamp-3">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-x-5 gap-y-2 pt-1">
                        {project.technologies?.map(tech => (
                          <TechItem key={tech} tech={tech} />
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
          
          <div className="md:hidden flex justify-center mt-4">
            <Link 
              to="/projects"
              className={buttonVariants({ variant: "secondary", className: "w-full justify-center h-14" })}
            >
              View All Projects
            </Link>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
