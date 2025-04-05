import type React from "react"
import { cn } from "@/lib/utils"

interface CyberCardProps {
  className?: string
  children: React.ReactNode
  glowColor?: "purple" | "blue" | "pink" | "green" | "yellow"
  variant?: "default" | "outline"
}

export function CyberCard({
  className,
  children,
  glowColor = "purple",
  variant = "default",
  ...props
}: CyberCardProps) {
  const glowColors = {
    purple: "before:shadow-[0_0_15px_rgba(162,0,255,0.5)]",
    blue: "before:shadow-[0_0_15px_rgba(0,179,255,0.5)]",
    pink: "before:shadow-[0_0_15px_rgba(255,0,193,0.5)]",
    green: "before:shadow-[0_0_15px_rgba(0,255,234,0.5)]",
    yellow: "before:shadow-[0_0_15px_rgba(255,234,0,0.5)]",
  }

  const borderColors = {
    purple: "border-cyber-purple",
    blue: "border-cyber-blue",
    pink: "border-cyber-pink",
    green: "border-cyber-green",
    yellow: "border-cyber-yellow",
  }

  const variants = {
    default: "bg-background/80 backdrop-blur-sm",
    outline: "bg-transparent",
  }

  return (
    <div
      className={cn(
        "relative border-2 p-6 rounded-md",
        variants[variant],
        borderColors[glowColor],
        "before:content-[''] before:absolute before:inset-0 before:rounded-md before:-z-10",
        glowColors[glowColor],
        "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2 after:h-[2px] after:bg-white after:shadow-[0_0_10px_2px_rgba(162,0,255,0.8)] after:animate-cyber-pulse",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

