import { AboutIntro } from "@/components/about/AboutIntro"
import { Philosophy } from "@/components/about/Philosophy"
import { WhatIDo } from "@/components/about/WhatIDo"
import { TechStack } from "@/components/about/FullTechStack"
import { CurrentlyExploring } from "@/components/about/CurrentlyExploring"
import { KpopSection } from "@/components/about/KpopSection"
import { MusicSection } from "@/components/about/MusicSection"
import { ContactCTA } from "@/components/home/ContactCTA"

export default function About() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <AboutIntro />
      <Philosophy />
      <WhatIDo />
      <TechStack />
      <CurrentlyExploring />
      
      {/* 
        The personal sections transition starts here.
        "When I'm not coding." and "What I'm listening to"
      */}
      <KpopSection />
      <MusicSection />
      
      <ContactCTA />
    </div>
  )
}
