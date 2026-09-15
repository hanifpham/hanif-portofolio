import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { 
  SiHtml5, SiCss, SiJavascript, SiReact, SiTailwindcss, SiBootstrap,
  SiPhp, SiLaravel, SiMysql,
  SiFlutter,
  SiGit, SiGithub, SiFigma, SiDocker,
  SiGo, SiOpenstreetmap
} from "react-icons/si"
import { Search } from "lucide-react"

const TECH_CATEGORIES = [
  {
    title: "FRONTEND",
    items: [
      { name: "HTML", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
      { name: "CSS", icon: SiCss, color: "group-hover:text-[#1572B6]" },
      { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
      { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
      { name: "Bootstrap", icon: SiBootstrap, color: "group-hover:text-[#7952B3]" },
    ]
  },
  {
    title: "BACKEND",
    items: [
      { name: "PHP", icon: SiPhp, color: "group-hover:text-[#777BB4]" },
      { name: "Laravel", icon: SiLaravel, color: "group-hover:text-[#FF2D20]" },
      { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
    ]
  },
  {
    title: "MOBILE",
    items: [
      { name: "Flutter", icon: SiFlutter, color: "group-hover:text-[#02569B]" },
    ]
  },
  {
    title: "TOOLS",
    items: [
      { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
      { name: "GitHub", icon: SiGithub, color: "group-hover:text-[#181717]" },
      { name: "Figma", icon: SiFigma, color: "group-hover:text-[#F24E1E]" },
      { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]" },
    ]
  },
  {
    title: "EXPLORING / PROJECT TECHNOLOGIES",
    items: [
      { name: "Go", icon: SiGo, color: "group-hover:text-[#00ADD8]" },
      { name: "YOLOv11", icon: Search, color: "group-hover:text-[#00FFFF]" }, // Using lucide Search as fallback
      { name: "GIS", icon: Search, color: "group-hover:text-[#4CAF50]" }, // Using lucide Search as fallback
      { name: "OpenStreetMap", icon: SiOpenstreetmap, color: "group-hover:text-[#7EBC6F]" },
    ]
  }
]

export function FullTechStack() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-surface-elevated/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16"
        >
          <SectionHeading 
            title="TECH STACK"
            description="Technologies I use."
          />

          <div className="flex flex-col gap-12 md:gap-16 mt-4">
            {TECH_CATEGORIES.map((category) => (
              <div key={category.title} className="flex flex-col md:flex-row gap-6 md:gap-12 items-start border-t border-border/40 pt-8 first:border-0 first:pt-0">
                <div className="w-full md:w-64 shrink-0">
                  <h3 className="text-sm font-semibold tracking-widest text-foreground-secondary uppercase mt-4">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-4 w-full">
                  {category.items.map((tech, i) => {
                    const Icon = tech.icon
                    return (
                      <motion.div
                        key={tech.name}
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : (i * 0.05) }}
                        className="group flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-elevated/30 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:-translate-y-1"
                      >
                        <Icon className={`w-5 h-5 text-foreground-muted transition-colors duration-300 ${tech.color}`} />
                        <span className="text-sm font-medium text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                          {tech.name}
                        </span>
                      </motion.div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
