import { cn } from "@/utils/cn"

export const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        'relative z-10 overflow-hidden rounded-lg bg-contentBg p-4 shadow-card',
        className,
      )}
    >
      {children}
    </div>
  )
}
