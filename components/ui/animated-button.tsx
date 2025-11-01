"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Button, type ButtonProps } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface AnimatedButtonProps extends ButtonProps {
  iconLeft?: React.ReactNode
  iconRight?: React.ReactNode
  hoverScale?: number
  pulseOnRender?: boolean
}

export const AnimatedButton = React.forwardRef<HTMLButtonElement, AnimatedButtonProps>(
  ({ className, children, iconLeft, iconRight, hoverScale = 1.03, pulseOnRender = false, ...props }, ref) => {
    return (
      <motion.div
        initial={pulseOnRender ? { scale: 1 } : undefined}
        animate={pulseOnRender ? { scale: [1, 1.05, 1] } : undefined}
        transition={pulseOnRender ? { duration: 1.5, times: [0, 0.5, 1], repeat: 0 } : undefined}
        whileHover={{ scale: hoverScale }}
        whileTap={{ scale: 0.98 }}
        className="inline-block"
      >
        <Button ref={ref} className={cn("relative overflow-hidden group", className)} {...props}>
          {iconLeft && (
            <motion.span
              className="mr-2 inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: -2, rotate: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {iconLeft}
            </motion.span>
          )}

          <motion.span
            initial={{ y: 0 }}
            whileHover={{ y: [0, -2, 0] }}
            transition={{ duration: 0.5, times: [0, 0.5, 1] }}
          >
            {children}
          </motion.span>

          {iconRight && (
            <motion.span
              className="ml-2 inline-flex"
              initial={{ x: 0 }}
              whileHover={{ x: 2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {iconRight}
            </motion.span>
          )}

          <motion.span
            className="absolute inset-0 bg-white/10 opacity-0"
            initial={{ opacity: 0, scale: 0 }}
            whileTap={{ opacity: 0.3, scale: 2, transition: { duration: 0.5 } }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
          />
        </Button>
      </motion.div>
    )
  },
)
AnimatedButton.displayName = "AnimatedButton"
