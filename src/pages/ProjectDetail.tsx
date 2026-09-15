import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug } from "@/data/projects"
import { ProjectDetailHero } from "@/components/projects/ProjectDetailHero"
import { ProjectDetailContent } from "@/components/projects/ProjectDetailContent"
import { Container } from "@/components/layout/Container"
import { buttonVariants } from "@/components/ui/Button"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug || "")

  if (!project) {
    return (
      <div className="flex flex-col min-h-screen pt-32 pb-16 items-center justify-center">
        <Container className="text-center flex flex-col items-center gap-6">
          <div className="w-20 h-20 rounded-full bg-surface-elevated flex items-center justify-center mb-4">
            <span className="text-3xl font-light text-foreground-muted">404</span>
          </div>
          <h1 className="text-4xl font-bold text-foreground">Project not found.</h1>
          <p className="text-lg text-foreground-secondary max-w-md">
            Proyek yang Anda cari mungkin telah dipindahkan atau belum tersedia.
          </p>
          <div className="mt-8">
            <Link 
              to="/projects"
              className={buttonVariants({ variant: "secondary", className: "h-12 px-8 gap-2" })}
            >
              <ArrowLeft size={18} /> Back to Projects
            </Link>
          </div>
        </Container>
      </div>
    )
  }

  return (
    <div className="flex flex-col w-full min-h-screen">
      <ProjectDetailHero project={project} />
      
      {/* Only render content section if at least one detail field exists */}
      {(project.overview || project.problem || project.solution || project.challenges || project.result || project.liveUrl || project.githubUrl) && (
        <ProjectDetailContent project={project} />
      )}

      <Container className="pb-32 flex justify-center mt-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-foreground-secondary hover:text-foreground transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-4 py-2"
        >
          <ArrowLeft size={18} className="transition-transform duration-300 group-hover:-translate-x-1" />
          Back to Projects
        </Link>
      </Container>
    </div>
  )
}
