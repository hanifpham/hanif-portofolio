import { useState, useEffect } from "react"
import { motion, AnimatePresence, useReducedMotion } from "motion/react"

const phrases = [
  "website yang bermakna.",
  "aplikasi yang berguna.",
  "pengalaman digital.",
  "ide menjadi nyata."
]

export function RotatingText() {
  const [index, setIndex] = useState(0)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    if (shouldReduceMotion) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [shouldReduceMotion])

  if (shouldReduceMotion) {
    return (
      <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground w-full max-w-full whitespace-normal sm:whitespace-nowrap wrap-break-word">
        {phrases[0]}
      </div>
    )
  }

  return (
    <div className="relative h-16 sm:h-12 md:h-16 lg:h-24 w-full block">
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 flex items-start sm:items-center justify-start w-full"
        >
          <div className="text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground w-full max-w-full whitespace-normal sm:whitespace-nowrap wrap-break-word">
            {phrases[index]}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
