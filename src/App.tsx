import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import About from "@/pages/About";
import Resume from "@/pages/Resume";
import NotFound from "@/pages/NotFound";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AuroraBackground } from "@/components/effects/AuroraBackground";
import { GrainOverlay } from "@/components/effects/GrainOverlay";
import { PageTransition } from "@/components/layout/PageTransition";
import { useEffect, useState } from "react";
import { LoadingScreen } from "@/components/effects/LoadingScreen";

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      // Need a small timeout to ensure the DOM is updated on cross-page navigation
      setTimeout(() => {
        const id = location.hash.replace("#", "");
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, location.hash]);
  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageTransition>
              <Home />
            </PageTransition>
          }
        />
        <Route
          path="/projects"
          element={
            <PageTransition>
              <Projects />
            </PageTransition>
          }
        />
        <Route
          path="/projects/:slug"
          element={
            <PageTransition>
              <ProjectDetail />
            </PageTransition>
          }
        />
        <Route
          path="/about"
          element={
            <PageTransition>
              <About />
            </PageTransition>
          }
        />
        <Route
          path="/resume"
          element={
            <PageTransition>
              <Resume />
            </PageTransition>
          }
        />
        <Route
          path="*"
          element={
            <PageTransition>
              <NotFound />
            </PageTransition>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  const [isAppReady, setIsAppReady] = useState(false);

  useEffect(() => {
    if (!isAppReady) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isAppReady]);

  return (
    <Router>
      <ScrollToTop />
      
      {!isAppReady && <LoadingScreen onComplete={() => setIsAppReady(true)} />}

      <div className="relative min-h-screen flex flex-col selection:bg-accent-blue selection:text-background">
        <GrainOverlay />
        <AuroraBackground />

        <Navbar />

        <main className="flex-1 pt-28 pb-16 w-full mx-auto z-10 relative flex flex-col">
          <AnimatedRoutes />
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
