import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/" },
  { name: "Projects", path: "/projects" },
  { name: "About", path: "/about" },
  { name: "Resume", path: "/resume" },
];

export function Navbar() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll state for navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle Escape key to close mobile menu
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-6 pointer-events-none">
        <motion.nav
          initial={false}
          animate={{
            backgroundColor: isScrolled
              ? "rgba(11, 12, 17, 0.85)"
              : "rgba(11, 12, 17, 0.4)",
            borderColor: isScrolled
              ? "rgba(255, 255, 255, 0.12)"
              : "rgba(255, 255, 255, 0.05)",
            backdropFilter: isScrolled ? "blur(16px)" : "blur(8px)",
            boxShadow: isScrolled
              ? "0 10px 30px -10px rgba(0, 0, 0, 0.5)"
              : "0 0 0 rgba(0, 0, 0, 0)",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="pointer-events-auto flex items-center justify-between w-full max-w-170 h-16 px-6 rounded-full border border-transparent"
        >
          {/* Logo */}
          <Link
            to="/"
            onClick={() => {
              if (location.pathname === "/") {
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue rounded-md px-1"
            aria-label="Hanif Home"
          >
            <img
              src="/images/brand/hanif-logo.svg"
              alt="HANIF."
              className="h-5 md:h-6 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6">
            {NAV_LINKS.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => {
                    if (isActive) {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                    isActive
                      ? "bg-surface-elevated text-foreground"
                      : "text-foreground-secondary hover:text-foreground hover:bg-surface",
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile Navigation Toggle */}
          <button
            className="md:hidden text-foreground-secondary hover:text-foreground p-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </motion.nav>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center pt-24 pb-12 px-6 md:hidden"
          >
            <nav className="flex flex-col items-center gap-6 w-full max-w-sm">
              {NAV_LINKS.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => {
                      if (isActive) {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                      setMobileMenuOpen(false);
                    }}
                    className={cn(
                      "text-2xl font-semibold tracking-tight transition-colors w-full text-center py-4 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                      isActive
                        ? "text-accent-blue bg-surface"
                        : "text-foreground-secondary hover:text-foreground hover:bg-surface/50",
                    )}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
