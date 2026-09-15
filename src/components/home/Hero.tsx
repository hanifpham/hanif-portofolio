import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { Mail } from "lucide-react";
import { FaGithub, FaInstagram, FaTiktok, FaFacebookF } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { RotatingText } from "./RotatingText";
import { Globe } from "@/components/effects/Globe";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.15,
        delayChildren: shouldReduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 20, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 20,
        mass: 1,
      },
    },
  };

  const hoverAnim = shouldReduceMotion ? {} : { scale: 1.15, y: -4 };
  const tapAnim = shouldReduceMotion ? {} : { scale: 0.95 };

  return (
    <section className="relative py-10 md:py-16 flex flex-col items-center justify-center min-h-[calc(100vh-160px)] overflow-hidden">
      <Container className="flex flex-col lg:flex-row items-center lg:items-center text-left gap-12 lg:gap-8 w-full max-w-300">
        {/* LEFT COLUMN: Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex-1 flex flex-col items-start w-full lg:w-[60%] z-10"
        >
          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4 mb-8">
            <motion.a
              whileHover={hoverAnim}
              whileTap={tapAnim}
              href="https://github.com/#"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
            >
              <FaGithub size={22} />
            </motion.a>
            <motion.a
              whileHover={hoverAnim}
              whileTap={tapAnim}
              href="https://instagram.com/#"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
            >
              <FaInstagram size={22} />
            </motion.a>
            <motion.a
              whileHover={hoverAnim}
              whileTap={tapAnim}
              href="https://tiktok.com/#"
              target="_blank"
              rel="noreferrer"
              aria-label="TikTok"
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
            >
              <FaTiktok size={20} />
            </motion.a>
            <motion.a
              whileHover={hoverAnim}
              whileTap={tapAnim}
              href="https://facebook.com/#"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
            >
              <FaFacebookF size={20} />
            </motion.a>
            <motion.a
              whileHover={hoverAnim}
              whileTap={tapAnim}
              href="mailto:hello@example.com"
              aria-label="Email"
              className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
            >
              <Mail size={22} />
            </motion.a>
          </motion.div>

          {/* Heading (H1) */}
          <motion.div variants={itemVariants} className="w-full flex flex-col mb-4">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-foreground leading-[1.1]">
              Hi, I'm Hanif.
            </h1>
          </motion.div>

          {/* Subtitle / Role */}
          <motion.div variants={itemVariants} className="mb-6">
            <p className="text-[18px] md:text-[20px] text-foreground-secondary font-medium tracking-wide">
              Computer Engineering + Software Developer
            </p>
          </motion.div>

          {/* Rotating Text Line */}
          <motion.div variants={itemVariants} className="w-full mb-8 flex flex-row items-center gap-2">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Saya membangun 
            </span>
            <div className="flex-1">
              <RotatingText />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            <Link
              to="/projects"
              className={buttonVariants({
                variant: "primary",
                className: "h-12 px-8 text-sm md:text-base rounded-xl",
              })}
            >
              View Projects
            </Link>
            <Link
              to="/about"
              className={buttonVariants({
                variant: "ghost",
                className: "h-12 px-8 text-sm md:text-base rounded-xl backdrop-blur-sm",
              })}
            >
              About Me
            </Link>
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN: 3D Globe */}
        <div className="flex-1 w-full lg:w-[40%] relative flex items-center justify-center pointer-events-auto">
          <Globe />
        </div>
      </Container>
    </section>
  );
}
