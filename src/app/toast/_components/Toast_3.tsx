import React, { useMemo } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { animationVariants, themeClasses, positionClasses, textColor, useToastTimer } from "./utils";
import { ToastProps } from "./toast-context";

const Toast_3: React.FC<ToastProps> = ({
  message,
  close,
  icon = "🔔", // Default icon
  position = "top-right",
  theme = "dark", // Default theme
  duration = 4000,
  animationType = "slide",
  autoDismiss = true,
  onHoverPause = true,
  actionButton,
  stack,
}) => {
  const { handleMouseEnter, handleMouseLeave } = useToastTimer(
    autoDismiss,
    duration,
    close,
    onHoverPause
  );

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={animationVariants[animationType]}
      transition={{ type: "spring", stiffness: 120, damping: 20 }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={clsx(
        `flex items-center justify-between p-4 rounded-lg shadow-lg border-2 z-50`,
        "w-[300px] h-[80px]", // Fixed dimensions
        themeClasses[theme],  // Background gradient based on theme
        positionClasses[position],
        stack ? "static" : "fixed"
      )}
    >
      {/* Icon */}
      <div className="text-xl mr-4">{icon}</div>

      {/* Message */}
      <div className={clsx("flex-1 text-center text-base font-medium", textColor[theme])}>
        {message}
      </div>

      {/* Action Button */}
      {actionButton && (
        <button
          onClick={actionButton.onClick}
          className="ml-4 px-3 py-1 bg-red-600 text-white rounded hover:bg-red-700"
        >
          {actionButton.label}
        </button>
      )}

      {/* Close Button */}
      <button
        onClick={close}
        className="ml-4 text-lg font-bold focus:outline-none hover:opacity-80"
        aria-label="Close Toast"
      >
        ×
      </button>
    </motion.div>
  );
};

// Wrap the component with React.memo for memoization
export default React.memo(Toast_3);