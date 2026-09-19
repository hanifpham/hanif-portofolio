import { useState, useEffect } from "react"
import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { FileText, ExternalLink, Download } from "lucide-react"

export function ResumeViewer() {
  const shouldReduceMotion = useReducedMotion()
  const [isDesktop, setIsDesktop] = useState(true)

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768)
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  return (
    <section className="pb-32">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-full"
        >
          {isDesktop ? (
            <div className="w-full h-[75vh] md:h-[85vh] rounded-2xl overflow-hidden border border-border/40 bg-surface-elevated/30 shadow-[0_8px_32px_rgba(0,0,0,0.12)] relative backdrop-blur-sm">
              <iframe
                src="/resume.pdf"
                title="Hanif Resume"
                className="w-full h-full border-none"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center w-full rounded-3xl border border-white/10 bg-surface-elevated/40 backdrop-blur-md p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-accent-blue/10 rounded-full blur-[60px] pointer-events-none" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent-violet/10 rounded-full blur-[60px] pointer-events-none" />

              <div className="relative z-10 flex flex-col items-center text-center w-full">
                <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-accent-violet/20 to-accent-blue/20 flex items-center justify-center mb-6 shadow-inner">
                  <FileText className="text-accent-blue w-8 h-8" />
                </div>

                <h2 className="text-xl font-bold tracking-tight text-foreground mb-1">
                  HANIF KHOLILULLOH
                </h2>
                <p className="text-xs font-medium tracking-widest uppercase text-foreground-secondary/70 mb-4">
                  Resume Preview
                </p>

                <p className="text-foreground-secondary mb-8 text-sm max-w-65 leading-relaxed">
                  Curriculum vitae dan pengalaman profesional saya.
                </p>

                <div className="flex flex-col gap-3 w-full sm:max-w-xs">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-accent-blue text-white font-semibold shadow-lg hover:bg-accent-blue/90 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-accent-blue active:scale-[0.98]"
                    aria-label="Open Resume"
                  >
                    <ExternalLink size={20} />
                    <span>Open Resume</span>
                  </a>
                  
                  <a
                    href="/resume.pdf"
                    download="Hanif-Kholilulloh-Resume.pdf"
                    className="w-full flex items-center justify-center gap-2 h-14 rounded-xl bg-white/5 border border-white/10 text-foreground hover:bg-white/10 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-background focus-visible:ring-white/20 active:scale-[0.98]"
                    aria-label="Download Resume"
                  >
                    <Download size={20} />
                    <span>Download Resume</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </Container>
    </section>
  )
}
