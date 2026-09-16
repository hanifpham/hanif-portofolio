import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiPhp,
  SiJavascript,
  SiMysql,
  SiGit,
  SiDocker,
  SiFigma,
  SiReact,
  SiLaravel,
  SiFlutter,
  SiGo,
  SiTailwindcss,
  SiGithub,
} from "react-icons/si";

const technologies = [
  { name: "HTML", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "group-hover:text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "group-hover:text-[#F7DF1E]" },
  { name: "PHP", icon: SiPhp, color: "group-hover:text-[#777BB4]" },
  { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
  { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  { name: "Laravel", icon: SiLaravel, color: "group-hover:text-[#FF2D20]" },
  { name: "Flutter", icon: SiFlutter, color: "group-hover:text-[#02569B]" },
  { name: "Go", icon: SiGo, color: "group-hover:text-[#00ADD8]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "group-hover:text-[#06B6D4]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "group-hover:text-[#7952B3]" },
  { name: "Git", icon: SiGit, color: "group-hover:text-[#F05032]" },
  { name: "GitHub", icon: SiGithub, color: "group-hover:text-[#181717]" },
  { name: "Docker", icon: SiDocker, color: "group-hover:text-[#2496ED]" },
  { name: "Figma", icon: SiFigma, color: "group-hover:text-[#F24E1E]" },
];

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-12 md:gap-16"
        >
          <SectionHeading
            title="Tech Stack."
            description="Teknologi dan alat yang biasa saya gunakan."
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 md:gap-4 pt-8 border-t border-border/20">
            {technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.9, y: shouldReduceMotion ? 0 : 10 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 15,
                    delay: shouldReduceMotion ? 0 : i * 0.05,
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    rotate: [-1, 1, -1, 0], 
                    transition: { duration: 0.3 } 
                  }}
                  className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-surface-elevated/10 hover:bg-surface-elevated/40 border border-transparent hover:border-border/50 transition-colors duration-300"
                >
                  <div className={`w-10 h-10 shrink-0 rounded-lg bg-surface-elevated flex items-center justify-center border border-border/50 group-hover:border-border/80 transition-all duration-300 group-hover:shadow-md`}>
                    <Icon className={`w-5 h-5 text-foreground-muted transition-colors duration-300 ${tech.color}`} />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
