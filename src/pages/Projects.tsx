import { projects } from "@/data/projects"
import { ProjectListHeader } from "@/components/projects/ProjectListHeader"
import { ProjectList } from "@/components/projects/ProjectList"

export default function Projects() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <ProjectListHeader />
      <ProjectList projects={projects} />
    </div>
  )
}
