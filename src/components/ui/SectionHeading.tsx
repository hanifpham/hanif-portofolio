import { cn } from "@/lib/utils"

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  className?: string
  align?: "left" | "center"
  as?: "h1" | "h2"
}

export function SectionHeading({ 
  eyebrow, 
  title, 
  description, 
  className,
  align = "left",
  as: Component = "h2"
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-4", align === "center" && "items-center text-center", className)}>
      {eyebrow && (
        <span className="text-sm font-medium tracking-widest uppercase text-accent-blue">
          {eyebrow}
        </span>
      )}
      <Component className="text-[40px] md:text-5xl font-bold tracking-tight text-foreground leading-[1.1]">
        {title}
      </Component>
      {description && (
        <p className="text-base md:text-lg text-foreground-secondary max-w-175 leading-[1.6]">
          {description}
        </p>
      )}
    </div>
  )
}
