import { cn } from "@/utils/cn"

export const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  return (
    <div
      className={cn(
        'relative z-10 overflow-hidden rounded-lg backdrop-blur-2xl p-4 shadow-card bg-white/10 border border-white/20 after:absolute after:inset-0 after:bg-[url(/logo.svg)] after:bg-no-repeat after:bg-contain after:bg-center after:opacity-5 after:pointer-events-none',
        className,
      )}
    >
      {children}
    </div>
  )
}
