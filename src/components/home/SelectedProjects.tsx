import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { projects } from "@/data/projects"
import { buttonVariants } from "@/components/ui/Button"
import { ProjectVisualPlaceholder } from "@/components/projects/ProjectVisualPlaceholder"

export function SelectedProjects() {
  const shouldReduceMotion = useReducedMotion()
  const displayProjects = projects.slice(0, 3)

  if (displayProjects.length === 0) return null

  const featured = displayProjects[0] // ROADIS
  const remaining = displayProjects.slice(1) // Appkonkos, Scrollify

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16"
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
          
          <div className="flex flex-col gap-12">
            {/* Featured Project */}
            {featured && (
              <Link 
                to={`/projects/${featured.slug}`}
                className="group flex flex-col md:flex-row gap-8 lg:gap-16 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl"
              >
                <div className="w-full md:w-3/5 aspect-video md:aspect-4/3 rounded-2xl overflow-hidden border border-border shrink-0">
                  {featured.image ? (
                    <img 
                      src={featured.image} 
                      alt={featured.title} 
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  ) : (
                    <ProjectVisualPlaceholder project={featured} featured />
                  )}
                </div>
                
                <div className="w-full md:w-2/5 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    <span className="text-sm font-semibold tracking-widest text-accent-blue uppercase">01 / Featured</span>
                    <h3 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground group-hover:text-accent-blue transition-colors">{featured.title}</h3>
                  </div>
                  
                  <p className="text-base md:text-lg text-foreground-secondary leading-[1.6] max-w-175">
                    {featured.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mt-2">
                    {featured.technologies?.map(tech => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-surface border border-border text-sm text-foreground-secondary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            )}

            {/* Remaining Projects */}
            {remaining.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                {remaining.map((project, index) => (
                  <Link 
                    key={project.slug}
                    to={`/projects/${project.slug}`}
                    className="group flex flex-col gap-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-xl"
                  >
                    <div className="w-full aspect-video rounded-2xl overflow-hidden border border-border shrink-0">
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
                    
                    <div className="flex flex-col gap-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-semibold tracking-widest text-foreground-muted uppercase">0{index + 2}</span>
                        <h3 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent-blue transition-colors">{project.title}</h3>
                      </div>
                      
                      <p className="text-base md:text-lg text-foreground-secondary leading-[1.6] line-clamp-3 max-w-175">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies?.slice(0, 4).map(tech => (
                          <span key={tech} className="px-2 py-1 rounded bg-surface border border-border text-xs text-foreground-secondary">
                            {tech}
                          </span>
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
