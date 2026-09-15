import { ResumeHeader } from "@/components/resume/ResumeHeader"
import { ResumeViewer } from "@/components/resume/ResumeViewer"

export default function Resume() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <ResumeHeader />
      <ResumeViewer />
    </div>
  )
}
