import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost"
}

export function buttonVariants({ variant = "primary", className }: { variant?: "primary" | "secondary" | "ghost", className?: string } = {}) {
  return cn(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-blue disabled:pointer-events-none disabled:opacity-50",
    "h-10 px-4 py-2",
    {
      "bg-foreground text-background hover:bg-foreground/90": variant === "primary",
      "bg-surface-elevated border border-border hover:bg-surface-elevated/80 hover:border-border-hover text-foreground": variant === "secondary",
      "hover:bg-surface-elevated hover:text-foreground text-foreground-secondary": variant === "ghost",
    },
    className
  )
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={buttonVariants({ variant, className })}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
