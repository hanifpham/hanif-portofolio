import { Link } from "react-router-dom";
import { GlitchText } from "@/components/effects/GlitchText";
import { Container } from "@/components/layout/Container";
import { motion } from "motion/react";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-[80vh] items-center justify-center relative">
      <Container className="text-center flex flex-col items-center gap-12 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center justify-center gap-4 select-none"
        >
          <GlitchText speed={1.2} enableShadows={true}>404</GlitchText>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">Page Not Found</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-10"
        >
          <p className="text-sm md:text-base text-foreground-secondary max-w-md leading-relaxed">
            Oops! The page you are looking for has either vanished into cyberspace or never existed.
          </p>

          <Link 
            to="/"
            className="px-6 py-3 border border-border text-foreground hover:bg-surface-elevated hover:border-foreground/30 transition-colors font-medium text-sm rounded-md inline-flex items-center gap-2"
          >
            Return to Home
          </Link>
        </motion.div>
      </Container>
    </div>
  );
}
