import { type ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ContainerProps {
  children: ReactNode
  className?: string
  as?: React.ElementType
}

export function Container({ children, className, as: Component = "div" }: ContainerProps) {
  return (
    <Component className={cn("mx-auto w-full max-w-300 px-6 md:px-12", className)}>
      {children}
    </Component>
  )
}
