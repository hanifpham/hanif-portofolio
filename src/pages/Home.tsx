import { Hero } from "@/components/home/Hero"
import { SelectedProjects } from "@/components/home/SelectedProjects"
import { AboutSnapshot } from "@/components/home/AboutSnapshot"
import { TechStack } from "@/components/home/TechStack"
import { ExperiencePreview } from "@/components/home/ExperiencePreview"
import { experience } from "@/data/experience"
import { ContactCTA } from "@/components/home/ContactCTA"

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <SelectedProjects />
      <AboutSnapshot />
      <TechStack />
      {experience.length > 0 && <ExperiencePreview />}
      <ContactCTA />
    </div>
  )
}
