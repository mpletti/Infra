import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "destructive" | "ghost"
  size?: "default" | "sm" | "lg"
  asChild?: boolean
  href?: string
}

export function CyberButton({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  href,
  children,
  ...props
}: CyberButtonProps) {
  const baseStyles =
    "relative inline-flex items-center justify-center font-bold uppercase tracking-wider border-2 transition-all duration-300 overflow-hidden"

  const variants = {
    default: "bg-transparent border-cyber-purple text-cyber-purple hover:bg-cyber-purple hover:text-black",
    outline: "bg-transparent border-cyber-blue text-cyber-blue hover:bg-cyber-blue hover:text-black",
    destructive: "bg-transparent border-cyber-pink text-cyber-pink hover:bg-cyber-pink hover:text-black",
    ghost: "bg-transparent border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black",
  }

  const sizes = {
    default: "h-10 px-4 py-2 text-sm",
    sm: "h-8 px-3 text-xs",
    lg: "h-12 px-6 text-base",
  }

  const buttonStyles = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    "before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-200%] hover:before:translate-x-[200%] before:transition-transform before:duration-700",
    "after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-2 after:h-[2px] after:bg-white after:shadow-[0_0_10px_2px_rgba(162,0,255,0.8)] after:animate-cyber-pulse",
    className,
  )

  if (href) {
    return (
      <Link href={href} className={buttonStyles}>
        {children}
      </Link>
    )
  }

  return (
    <button className={buttonStyles} {...props}>
      {children}
    </button>
  )
}

