import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { music } from "@/data/music"

export function MusicSection() {
  const shouldReduceMotion = useReducedMotion()

  if (!music || music.length === 0) return null

  return (
    <section className="pt-12 pb-32 md:pb-48 bg-surface-elevated/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-16 max-w-4xl mx-auto md:mx-0"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              What I'm listening to
            </h2>
          </div>

          <div className="flex flex-col">
            {music.length > 0 ? (
              <div className="flex flex-col gap-2">
                {music.map((track, index) => (
                  <div 
                    key={track.id} 
                    className="group flex flex-row items-center gap-6 p-4 rounded-xl hover:bg-surface transition-colors"
                  >
                    <span className="text-sm font-medium text-foreground-muted w-6 text-right">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    
                    {track.cover ? (
                      <div className="w-12 h-12 rounded bg-surface-elevated overflow-hidden shrink-0">
                        <img src={track.cover} alt={`${track.title} cover`} className="w-full h-full object-cover" loading="lazy" />
                      </div>
                    ) : (
                      <div className="w-12 h-12 rounded bg-surface border border-border shrink-0 flex items-center justify-center">
                        <svg className="w-4 h-4 text-foreground-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                        </svg>
                      </div>
                    )}
                    
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <h4 className="text-base font-bold text-foreground truncate">{track.title}</h4>
                      <span className="text-sm text-foreground-secondary truncate">{track.artist}</span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 md:p-12 rounded-2xl border border-dashed border-border bg-surface-elevated/30 text-center">
                <p className="text-foreground-secondary italic">
                  Daftar putar sedang kosong. Entri musik harian akan ditampilkan di sini.
                </p>
              </div>
            )}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
