import { motion, useReducedMotion } from "motion/react"
import { Container } from "@/components/layout/Container"
import { music } from "@/data/music"

export function MusicSection() {
  const shouldReduceMotion = useReducedMotion()

  // Helper to extract Spotify ID from URL or URI
  const getSpotifyIframeUrl = (urlOrUri: string) => {
    // If it's already an embed URL, return it
    if (urlOrUri.includes('spotify.com/embed')) return urlOrUri;
    
    // Extract ID from standard URL (https://open.spotify.com/track/12345)
    const urlMatch = urlOrUri.match(/spotify\.com\/(track|album|playlist)\/([a-zA-Z0-9]+)/);
    if (urlMatch) {
      return `https://open.spotify.com/embed/${urlMatch[1]}/${urlMatch[2]}?utm_source=generator`;
    }
    
    // Extract from URI (spotify:track:12345)
    const uriMatch = urlOrUri.match(/spotify:(track|album|playlist):([a-zA-Z0-9]+)/);
    if (uriMatch) {
      return `https://open.spotify.com/embed/${uriMatch[1]}/${uriMatch[2]}?utm_source=generator`;
    }
    
    return urlOrUri; // Fallback
  }

  return (
    <section className="pb-32 md:pb-48 bg-surface-elevated/10">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-12 md:gap-16"
        >
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8 lg:gap-16 items-start pt-8 border-t border-border/20">
            {/* Label Column */}
            <div className="w-full lg:w-48 shrink-0 lg:pt-1">
              <h3 className="text-sm font-semibold tracking-widest text-accent-blue uppercase">
                2. Music
              </h3>
            </div>

            {/* Content Column */}
            <div className="flex-1 flex flex-col gap-8 md:gap-10 w-full">
              <p className="text-xl md:text-2xl text-foreground-secondary leading-relaxed max-w-2xl">
                Music is one of the things that keeps me company outside the world of coding.
              </p>

              <div className="w-full max-w-4xl">
                {music && music.length > 0 ? (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {music.map((track, i) => (
                      <motion.div 
                        key={track.id} 
                        initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: shouldReduceMotion ? 0 : i * 0.1 }}
                        className="w-full rounded-2xl overflow-hidden bg-surface shadow-sm border border-border/50 hover:border-accent-blue/40 transition-colors duration-300 group hover:shadow-[0_8px_30px_rgba(var(--accent-blue-rgb),0.05)]"
                      >
                        <iframe 
                          src={getSpotifyIframeUrl(track.spotifyUrl)} 
                          width="100%" 
                          height="152" 
                          frameBorder="0" 
                          allowFullScreen={false} 
                          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                          loading="lazy"
                          className="rounded-2xl transition-transform duration-500 group-hover:scale-[1.02]"
                        ></iframe>
                      </motion.div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 md:p-12 rounded-2xl border border-dashed border-border/50 bg-surface-elevated/10 text-center">
                    <p className="text-foreground-secondary italic">
                      Belum ada lagu yang ditambahkan. Data lagu dari Spotify akan ditampilkan di sini.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
