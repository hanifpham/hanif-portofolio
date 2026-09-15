import { type Project } from "@/data/projects"
import { FeaturedProject } from "./FeaturedProject"
import { ProjectCard } from "./ProjectCard"
import { Container } from "@/components/layout/Container"

interface ProjectListProps {
  projects: Project[]
}

export function ProjectList({ projects }: ProjectListProps) {
  if (projects.length === 0) {
    return (
      <Container className="pb-32">
        <div className="w-full rounded-3xl border border-dashed border-border bg-surface-elevated/20 py-32 flex flex-col items-center justify-center text-center px-6">
          <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center mb-8">
            <svg className="w-6 h-6 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m3.75 9v6m3-3H9m1.5-12H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-4">Selected work will appear here.</h3>
          <p className="text-lg text-foreground-secondary max-w-lg mx-auto">
            Portofolio proyek sedang dalam proses kurasi dan akan segera diunggah.
          </p>
        </div>
      </Container>
    )
  }

  const featuredProjects = projects.filter(p => p.featured)
  const regularProjects = projects.filter(p => !p.featured)

  return (
    <Container className="pb-32 flex flex-col">
      {featuredProjects.map(project => (
        <FeaturedProject key={project.slug} project={project} />
      ))}
      
      {regularProjects.length > 0 && (
        <div className="flex flex-col gap-20 md:gap-32">
          {regularProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      )}
    </Container>
  )
}
