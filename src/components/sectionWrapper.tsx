import { cn } from "@/utils/cn"
import { useEffect, useState } from "react"

export const SectionWrapper = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const [randomPosition, setRandomPosition] = useState({ x: 0, y: 0, size: 50 })

  useEffect(() => {
    const x = Math.floor(Math.random() * 70)
    const y = Math.floor(Math.random() * 70)
    const size = Math.floor(Math.random() * 50) + 50
    setRandomPosition({ x, y, size })
  }, [])

  return (
    <div
      style={{
        '--logo-x': `${randomPosition.x}%`,
        '--logo-y': `${randomPosition.y}%`,
        '--logo-size': `${randomPosition.size}%`,
      } as React.CSSProperties}
      className={cn(
        'relative z-10 overflow-hidden rounded-lg backdrop-blur-2xl p-4 shadow-card bg-white/10 border border-white/20 after:absolute after:inset-0 after:bg-[url(/logo.svg)] after:bg-no-repeat after:bg-contain after:opacity-5 after:pointer-events-none after:translate-x-[var(--logo-x)] after:translate-y-[var(--logo-y)] after:w-[var(--logo-size)] after:h-[var(--logo-size)]',
        className,
      )}
    >
      {children}
    </div>
  )
}
