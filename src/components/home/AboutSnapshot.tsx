import { Link } from "react-router-dom"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { buttonVariants } from "@/components/ui/Button"

export function AboutSnapshot() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <section className="py-24 md:py-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-start"
        >
          <div className="flex-1">
            <SectionHeading 
              eyebrow="About Me"
              title="Building with purpose."
            />
          </div>
          <div className="flex-1 flex flex-col gap-6 text-lg text-foreground-secondary leading-relaxed">
            <p>
              Sebagai seorang Web & Software Developer, saya menikmati proses menerjemahkan 
              masalah kompleks menjadi antarmuka yang sederhana dan fungsional.
            </p>
            <p>
              Fokus saya saat ini adalah mengembangkan sistem yang stabil, scalable, dan memiliki 
              estetika desain yang berpusat pada kenyamanan pengguna.
            </p>
            <div className="mt-4">
              <Link to="/about" className={buttonVariants({ variant: "secondary", className: "px-6" })}>
                Lebih lanjut tentang saya &rarr;
              </Link>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
