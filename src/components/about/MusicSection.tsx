import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";
import { music } from "@/data/music";


export function MusicSection() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pb-32 md:pb-48 bg-surface-elevated/5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-12 md:gap-16"
        >
          <div className="flex flex-col gap-8 md:gap-10 pt-12 border-t border-border/20 relative w-full">
            {/* Sparkle decorative element */}
            <div className="absolute top-0 right-10 -translate-y-1/2 opacity-20 hidden md:block">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-accent-blue animate-pulse"><path d="M12 3v18M3 12h18M5.636 5.636l12.728 12.728M5.636 18.364l12.728-12.728"/></svg>
            </div>

            <div className="flex flex-col gap-3">
              <h3 className="text-sm font-semibold tracking-widest text-accent-blue uppercase drop-shadow-sm">
                2. Music
              </h3>
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl font-medium">
                My favorite songs right now. 🎶
              </p>
            </div>

            <div className="w-full">
              {music && music.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 w-full">
                  {music.map((track, i) => (
                    <motion.div 
                      key={track.id} 
                      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : i * 0.08, type: "spring", stiffness: 100 }}
                      className="w-full"
                    >
                      <iframe 
                        src={`https://open.spotify.com/embed/track/${track.spotifyTrackId}?utm_source=generator`}
                        width="100%" 
                        height="152" 
                        frameBorder="0" 
                        allowFullScreen={false} 
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                        loading="lazy"
                        style={{ borderRadius: '12px' }}
                        title={`Spotify Embed: ${track.title} by ${track.artist}`}
                      ></iframe>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="p-8 md:p-12 rounded-3xl border-2 border-dashed border-border/40 bg-surface-elevated/10 text-center shadow-sm">
                  <p className="text-foreground-secondary italic font-medium">
                    Belum ada lagu yang ditambahkan.
                  </p>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
