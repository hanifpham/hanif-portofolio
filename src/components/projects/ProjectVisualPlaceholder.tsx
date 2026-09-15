import { type Project } from "@/data/projects"

interface ProjectVisualPlaceholderProps {
  project: Project
  featured?: boolean
}

export function ProjectVisualPlaceholder({ project, featured = false }: ProjectVisualPlaceholderProps) {
  return (
    <div className="w-full h-full bg-surface-elevated/30 flex flex-col items-center justify-center p-8 text-center relative overflow-hidden group-hover:bg-surface-elevated/40 transition-colors duration-500">
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none" 
        style={{ 
          backgroundImage: featured 
            ? 'radial-gradient(ellipse at 50% 50%, var(--color-accent-blue) 0%, transparent 70%)' 
            : 'radial-gradient(circle at 50% 50%, var(--color-accent-blue) 0%, transparent 60%)' 
        }} 
      />
      
      {/* Subtle abstract grid/treatment */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <span className="text-sm font-semibold tracking-widest text-accent-blue uppercase mb-2 relative z-10">
        Project Visual
      </span>
      
      <h4 className={`font-bold text-foreground/50 relative z-10 ${featured ? 'text-3xl md:text-5xl' : 'text-2xl'}`}>
        {project.title}
      </h4>
      
      <div className="flex flex-wrap gap-2 justify-center mt-4 relative z-10">
        {project.technologies?.slice(0, featured ? 5 : 3).map(tech => (
          <span key={tech} className="text-xs font-medium text-foreground-muted px-2 py-1 rounded border border-border/50 bg-surface/50">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}
