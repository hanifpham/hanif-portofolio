import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { ArrowRight } from "lucide-react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { SiReact, SiLaravel, SiFlutter, SiGo, SiTailwindcss, SiGit, SiFigma } from "react-icons/si"

const CURATED_TECH = [
  { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "Laravel", icon: SiLaravel, color: "group-hover:text-[#FF2D20]" },
  { name: "Flutter", icon: SiFlutter, color: "group-hover:text-[#02569B]" },
  { name: "Go", icon: SiGo, color: "group-hover:text-[#00ADD8]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
  { name: "Figma", icon: SiFigma, color: "group-hover:text-[#F24E1E]" },
]

export function TechStack() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32 bg-surface-elevated/20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-start md:items-end"
        >
          <SectionHeading 
            eyebrow="Capabilities"
            title="Tech Stack"
          />
          
          <Link 
            to="/about"
            className="group flex items-center gap-2 text-sm font-medium text-foreground-secondary hover:text-accent-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 py-1"
          >
            View full stack
            <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
        
        <div className="mt-16 overflow-hidden">
          {/* Subtle animated row of technologies */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="flex flex-wrap gap-4 md:gap-6"
          >
            {CURATED_TECH.map((tech) => {
              const Icon = tech.icon
              return (
                <div 
                  key={tech.name} 
                  className="group flex items-center gap-3 px-5 py-3 md:px-6 md:py-4 rounded-xl bg-surface-elevated/30 border border-border/50 hover:border-border transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.03)] hover:-translate-y-1"
                >
                  <Icon className={`w-5 h-5 md:w-6 md:h-6 text-foreground-muted transition-colors duration-300 ${tech.color}`} />
                  <span className="text-sm md:text-base font-medium text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </div>
              )
            })}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
