import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Home, FolderKanban, User, FileText, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { name: "Home", path: "/", icon: Home },
  { name: "Projects", path: "/projects", icon: FolderKanban },
  { name: "About", path: "/about", icon: User },
  { name: "Resume", path: "/resume", icon: FileText },
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
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full bg-white/3 border border-white/8 text-foreground-secondary hover:text-foreground hover:bg-white/8 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-surface/82 backdrop-blur-[20px] flex flex-col px-6 pt-28 pb-12 md:hidden overflow-y-auto"
          >
            {/* Subtle Aurora Ambient Glow inside menu */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-[80px] pointer-events-none" />

            <nav className="flex flex-col gap-3 w-full relative z-10 mt-4">
              {NAV_LINKS.map((link, i) => {
                const isActive = link.path === "/" 
                  ? location.pathname === "/" 
                  : location.pathname.startsWith(link.path);
                const Icon = link.icon;
                
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 15, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, transition: { duration: 0.15 } }}
                    transition={{ duration: 0.3, delay: i * 0.06, ease: "easeOut" }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => {
                        if (isActive) {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                        setMobileMenuOpen(false);
                      }}
                      className={cn(
                        "group flex items-center justify-between w-full p-2 pr-5 rounded-2xl border transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue",
                        isActive
                          ? "bg-white/8 border-accent-blue/20"
                          : "bg-white/2 border-white/6 hover:bg-white/5"
                      )}
                      aria-current={isActive ? "page" : undefined}
                    >
                      <div className="flex items-center gap-4">
                        <div className={cn(
                          "flex items-center justify-center w-12 h-12 rounded-xl transition-transform duration-300 group-active:scale-95",
                          isActive ? "bg-linear-to-br from-accent-violet/20 to-accent-blue/20 text-accent-blue" : "bg-white/5 text-foreground-secondary"
                        )}>
                          <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
                        </div>
                        <span className={cn(
                          "text-lg tracking-wide transition-colors",
                          isActive ? "font-semibold text-foreground" : "font-medium text-foreground-secondary group-hover:text-foreground"
                        )}>
                          {link.name}
                        </span>
                      </div>
                      
                      {/* Active State / Playful Accent */}
                      {isActive ? (
                        <div className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-linear-to-r from-accent-violet to-accent-blue shadow-[0_0_8px_rgba(91,140,255,0.8)]" />
                        </div>
                      ) : (
                        <ArrowRight size={18} className="text-white/20 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" />
                      )}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-auto pt-12 text-center relative z-10"
            >
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-white/30">
                Build · Create · Explore
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
