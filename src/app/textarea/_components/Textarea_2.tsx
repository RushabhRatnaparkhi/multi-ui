"use client"

import * as React from "react"
import { motion } from "framer-motion"

interface AnimatedTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string
  animate?: boolean
  containerClassName?: string
  labelClassName?: string
  errorClassName?: string
}

const AnimatedTextarea = React.forwardRef<HTMLTextAreaElement, AnimatedTextareaProps>(
  (
    {
      className = "",
      containerClassName = "",
      labelClassName = "",
      errorClassName = "",
      label,
      error,
      animate = true,
      required,
      ...props
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)
    const [hasValue, setHasValue] = React.useState(false)

    const handleFocus = () => setIsFocused(true)
    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false)
      setHasValue(!!e.target.value)
    }

    return (
      <div className={`relative w-full ${containerClassName}`}>
        {label && (
          <motion.label
            initial={false}
            animate={{
              y: isFocused || hasValue ? -20 : 10,
              scale: isFocused || hasValue ? 0.85 : 1,
              color: isFocused ? "#2563EB" : "#374151",
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className={`absolute left-3 text-sm font-medium ${
              error ? "text-red-500" : "text-gray-700"
            } ${labelClassName}`}
          >
            {label}
            {required && <span className="ml-1 text-red-500">*</span>}
          </motion.label>
        )}
        <motion.div
          className="relative"
          initial={false}
          animate={{
            borderColor: isFocused ? "#2563EB" : error ? "#DC2626" : "#D1D5DB",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <textarea
            ref={ref}
            className={[
              "w-full rounded-lg border px-4 pt-6 pb-2 text-gray-900",
              "focus:outline-none focus:ring-2",
              "placeholder-transparent",
              "dark:bg-gray-950 dark:text-gray-100",
              "disabled:cursor-not-allowed disabled:opacity-50",
              error
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-blue-500",
              className,
            ].join(" ")}
            onFocus={handleFocus}
            onBlur={handleBlur}
            {...props}
          />
        </motion.div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`mt-2 text-sm text-red-500 ${errorClassName}`}
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)
AnimatedTextarea.displayName = "AnimatedTextarea"

export { AnimatedTextarea }