"use client"

import type * as React from "react"
import { motion, type MotionProps } from "framer-motion"
import { cn } from "@/lib/utils"

interface AnimatedIconProps extends React.HTMLAttributes<HTMLDivElement> {
  icon: React.ReactNode
  hoverEffect?: "pulse" | "rotate" | "bounce" | "shake" | "scale"
  hoverColor?: string
  motionProps?: MotionProps
}

export function AnimatedIcon({
  icon,
  hoverEffect = "pulse",
  hoverColor,
  className,
  motionProps,
  ...props
}: AnimatedIconProps) {
  const getHoverAnimation = () => {
    switch (hoverEffect) {
      case "pulse":
        return { scale: [1, 1.1, 1] }
      case "rotate":
        return { rotate: [0, 10, -10, 0] }
      case "bounce":
        return { y: [0, -5, 0] }
      case "shake":
        return { x: [0, -3, 3, -3, 0] }
      case "scale":
        return { scale: 1.2 }
      default:
        return { scale: 1.1 }
    }
  }

  const getTransition = () => {
    if (hoverEffect === "scale") {
      return { type: "spring", stiffness: 300, damping: 10 }
    }

    return {
      duration: 0.6,
      times: hoverEffect === "shake" ? [0, 0.25, 0.5, 0.75, 1] : [0, 0.5, 1],
      ease: "easeInOut",
    }
  }

  return (
    <motion.div
      className={cn(
        "inline-flex items-center justify-center transition-colors",
        hoverColor && `hover:text-${hoverColor}`,
        className,
      )}
      whileHover={getHoverAnimation()}
      transition={getTransition()}
      {...motionProps}
      {...props}
    >
      {icon}
    </motion.div>
  )
}
