"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Card, type CardProps } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface AnimatedCardProps extends CardProps {
  hoverEffect?: "lift" | "glow" | "border" | "scale" | "tilt"
  clickEffect?: boolean
}

export const AnimatedCard = React.forwardRef<HTMLDivElement, AnimatedCardProps>(
  ({ className, children, hoverEffect = "lift", clickEffect = true, ...props }, ref) => {
    const getHoverStyles = () => {
      switch (hoverEffect) {
        case "lift":
          return "hover:shadow-lg hover:-translate-y-1"
        case "glow":
          return "hover:shadow-lg hover:shadow-purple-200/50"
        case "border":
          return "hover:border-purple-400"
        case "scale":
          return "" // We'll handle this with Framer Motion
        case "tilt":
          return "" // We'll handle this with Framer Motion
        default:
          return "hover:shadow-lg hover:-translate-y-1"
      }
    }

    if (hoverEffect === "tilt") {
      return (
        <motion.div
          whileHover={{
            rotateX: 2,
            rotateY: 2,
            z: 1,
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
          }}
          whileTap={clickEffect ? { scale: 0.98 } : undefined}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Card ref={ref} className={cn("transition-all duration-300", className)} {...props}>
            {children}
          </Card>
        </motion.div>
      )
    }

    if (hoverEffect === "scale") {
      return (
        <motion.div
          whileHover={{ scale: 1.02 }}
          whileTap={clickEffect ? { scale: 0.98 } : undefined}
          transition={{ type: "spring", stiffness: 300, damping: 10 }}
        >
          <Card ref={ref} className={cn("transition-all duration-300", className)} {...props}>
            {children}
          </Card>
        </motion.div>
      )
    }

    return (
      <motion.div whileTap={clickEffect ? { scale: 0.98 } : undefined}>
        <Card ref={ref} className={cn("transition-all duration-300", getHoverStyles(), className)} {...props}>
          {children}
        </Card>
      </motion.div>
    )
  },
)
AnimatedCard.displayName = "AnimatedCard"
