import { cn } from "@/lib/utils"
import { useLocation } from "react-router-dom"
import Aurora from "./Aurora"

interface AuroraBackgroundProps {
  className?: string
}

export function AuroraBackground({ className }: AuroraBackgroundProps) {
  const location = useLocation()
  
  // Theme logic based on path
  let colorStops = ["#3B82F6", "#3B82F6", "#3B82F6"] // Default / Home
  
  if (location.pathname.startsWith("/projects")) {
    colorStops = ["#10B981", "#10B981", "#10B981"] // Project
  } else if (location.pathname === "/about") {
    colorStops = ["#7C3AED", "#7C3AED", "#7C3AED"] // About
  } else if (location.pathname === "/resume") {
    colorStops = ["#ffffff", "#ffffff", "#ffffff"] // Resume
  }

  return (
    <div 
      className={cn(
        "fixed inset-0 z-[-1] pointer-events-none overflow-hidden transition-opacity duration-1000",
        className
      )}
      aria-hidden="true"
    >
      <Aurora 
        colorStops={colorStops}
        blend={0.7}
        amplitude={1.0}
        speed={1}
      />
    </div>
  )
}
