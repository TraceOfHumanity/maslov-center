import { cn } from "@/utils/cn"

export const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        'relative z-10 overflow-hidden rounded-lg backdrop-blur-2xl p-4 shadow-card bg-white/10 border border-white/20',
        className,
      )}
    >
      {children}
    </div>
  )
}
