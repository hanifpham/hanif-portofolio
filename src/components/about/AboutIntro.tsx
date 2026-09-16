import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/layout/Container";

export function AboutIntro() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="pt-8 pb-20 md:pt-16 md:pb-32">
      <Container>
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 lg:gap-24 items-center md:items-start">
          {/* Text Content - Left Side */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.7,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="flex flex-col gap-6 md:gap-8 w-full md:w-[55%] lg:w-[60%]"
          >
            <span className="text-sm font-semibold tracking-widest text-accent-blue uppercase">
              About Me
            </span>

            <div className="flex flex-col gap-4">
              <h1 className="text-[40px] md:text-[48px] lg:text-[64px] font-bold tracking-tight text-foreground leading-[1.1]">
                Saya Hanif.
              </h1>

              <h2 className="text-xl md:text-2xl font-medium text-foreground-secondary leading-snug">
                Web Developer & Software Developer.
              </h2>
            </div>

            <div className="mt-2 relative">
              {/* Playful/Cool subtle detail */}
              <div
                className="absolute -left-6 top-2 text-accent-blue/30 hidden md:block select-none"
                aria-hidden="true"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p className="text-base md:text-lg lg:text-xl text-foreground-secondary leading-relaxed max-w-xl md:pl-2">
                Saya suka membangun sesuatu yang berguna dengan teknologi,
                dengan perhatian pada bagaimana sesuatu bekerja dan bagaimana
                sesuatu terasa.
              </p>
            </div>
          </motion.div>

          {/* Photo Content - Right Side */}
          <motion.div
            initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: shouldReduceMotion ? 0 : 0.8,
              delay: shouldReduceMotion ? 0 : 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full md:w-[45%] lg:w-[40%] flex justify-center md:justify-end"
          >
            <div className="relative group w-full max-w-[320px] md:max-w-none md:w-[90%] aspect-4/5">
              {/* Subtle decorative background element */}
              <div className="absolute inset-0 bg-accent-blue/5 rounded-3xl translate-x-3 translate-y-3 md:translate-x-4 md:translate-y-4 -z-10 border border-accent-blue/10 transition-transform duration-500 group-hover:translate-x-5 group-hover:translate-y-5"></div>

              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-border/50 bg-surface-elevated/30 shadow-[0_8px_32px_rgba(0,0,0,0.4)] transition-all duration-500 group-hover:border-border/80 group-hover:shadow-[0_8px_40px_rgba(0,0,0,0.6)]">
                <img
                  src="/images/profile/hanif.png"
                  alt="Hanif's Portrait"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  onError={(e) => {
                    // Fallback to placeholder if image doesn't exist
                    const target = e.target as HTMLImageElement;
                    target.src =
                      "https://placehold.co/800x1000/11131A/626773?text=Photo+Placeholder\n(images/profile/hanif.png)";
                  }}
                />
              </div>

              {/* Subtle playful detail */}
              <motion.div
                className="absolute -right-6 bottom-12 hidden lg:flex items-center gap-2 rotate-90 origin-bottom-right"
                whileHover={{ rotate: 95 }}
                transition={{ duration: 0.3 }}
              >
                <span className="text-xs font-medium text-foreground-muted tracking-widest uppercase bg-background/80 backdrop-blur-sm px-2 py-1 rounded-sm border border-border/50">
                  Hello World
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
