import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { getProjectBySlug } from "@/data/projects"
import { ProjectDetailHero } from "@/components/projects/ProjectDetailHero"
import { ProjectDetailContent } from "@/components/projects/ProjectDetailContent"
import { Container } from "@/components/layout/Container"
import NotFound from "@/pages/NotFound"

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = getProjectBySlug(slug || "")

  if (!project) {
    return <NotFound />
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
