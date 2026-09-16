import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  SiReact,
  SiLaravel,
  SiTailwindcss,
  SiHtml5,
  SiPhp,
  SiMysql,
  SiCss,
} from "react-icons/si";

const CURATED_TECH = [
  { name: "HTML", icon: SiHtml5, color: "group-hover:text-[#E34F26]" },
  { name: "CSS", icon: SiCss, color: "group-hover:text-[#1572B6]" },
  { name: "PHP", icon: SiPhp, color: "group-hover:text-[#777BB4]" },
  { name: "MySQL", icon: SiMysql, color: "group-hover:text-[#4479A1]" },
  { name: "Laravel", icon: SiLaravel, color: "group-hover:text-[#FF2D20]" },
  { name: "React", icon: SiReact, color: "group-hover:text-[#61DAFB]" },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "group-hover:text-[#06B6D4]",
  },
];

export function TechStack() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="py-24 md:py-32 bg-surface-elevated/20 overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col md:flex-row gap-12 md:gap-8 justify-between items-start md:items-end"
        >
          <SectionHeading eyebrow="Capabilities" title="Tech Stack" />

          <Link
            to="/about#tech-stack"
            className="group flex items-center gap-2 text-sm font-medium text-foreground-secondary hover:text-accent-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1 py-1"
          >
            View full stack
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>

        <div className="mt-16 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {CURATED_TECH.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  key={tech.name}
                  initial={{
                    opacity: 0,
                    scale: shouldReduceMotion ? 1 : 0.9,
                    y: shouldReduceMotion ? 0 : 10,
                  }}
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
                    transition: { duration: 0.3 },
                  }}
                  className="group flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-xl bg-surface-elevated/10 hover:bg-surface-elevated/40 border border-transparent hover:border-border/50 transition-colors duration-300 cursor-default"
                >
                  <div
                    className={`w-10 h-10 md:w-12 md:h-12 shrink-0 rounded-lg bg-surface-elevated flex items-center justify-center border border-border/50 group-hover:border-border/80 transition-all duration-300 group-hover:shadow-md`}
                  >
                    <Icon
                      className={`w-5 h-5 md:w-6 md:h-6 text-foreground-muted transition-colors duration-300 ${tech.color}`}
                    />
                  </div>
                  <span className="text-sm md:text-base font-semibold text-foreground-secondary group-hover:text-foreground transition-colors duration-300">
                    {tech.name}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
