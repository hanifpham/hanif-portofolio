import { Link } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import type { Variants } from "motion/react";
import { buttonVariants } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { socialLinks } from "@/data/socials";
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
          className="flex-1 flex flex-col items-start w-full lg:w-[60%] z-10 order-2 lg:order-1"
        >
          {/* Social Icons */}
          <motion.div variants={itemVariants} className="flex gap-4 mb-8">
            {socialLinks.map((link) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.name}
                  whileHover={hoverAnim}
                  whileTap={tapAnim}
                  href={link.href}
                  target={link.name === 'Email' ? undefined : "_blank"}
                  rel={link.name === 'Email' ? undefined : "noreferrer"}
                  aria-label={link.name}
                  className="w-12 h-12 rounded-xl flex items-center justify-center bg-surface-elevated/30 border border-border/50 text-foreground hover:text-accent-blue transition-colors backdrop-blur-sm"
                >
                  <Icon size={link.name === 'TikTok' || link.name === 'X' ? 20 : 22} />
                </motion.a>
              );
            })}
          </motion.div>

          {/* Heading (H1) */}
          <motion.div variants={itemVariants} className="w-full flex flex-col mb-4 min-w-0">
            <h1 className="text-5xl md:text-7xl lg:text-[80px] font-bold tracking-tight text-foreground leading-[1.1] text-balance wrap-break-word w-full">
              Hi, I'm Hanif.
            </h1>
          </motion.div>

          {/* Subtitle / Role */}
          <motion.div variants={itemVariants} className="mb-6 w-full min-w-0">
            <p className="text-[18px] md:text-[20px] text-foreground-secondary font-medium tracking-wide text-balance wrap-break-word w-full">
              Computer Engineering + Software Developer
            </p>
          </motion.div>

          {/* Rotating Text Line */}
          <motion.div variants={itemVariants} className="w-full mb-8 flex flex-col sm:flex-row sm:items-center sm:flex-wrap gap-1 sm:gap-2 min-w-0">
            <span className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground wrap-break-word w-full sm:w-auto">
              Saya membangun 
            </span>
            <div className="w-full sm:flex-1 min-w-0">
              <RotatingText />
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 mt-8 w-full sm:w-auto"
          >
            <a
              href="#selected-work"
              className={buttonVariants({
                variant: "primary",
                className: "h-12 px-8 text-sm md:text-base rounded-xl",
              })}
            >
              View My Work
            </a>
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
        <div className="flex-1 w-full lg:w-[40%] relative flex items-center justify-center pointer-events-auto order-1 lg:order-2 mb-4 lg:mb-0">
          <Globe />
        </div>
      </Container>
    </section>
  );
}
