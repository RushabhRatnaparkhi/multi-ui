import React, { useState } from "react";
import { motion } from "framer-motion";

interface RatingProps {
  max?: number; // Maximum number of hearts, default is 5
  onRatingChange?: (rating: number) => void; // Callback for rating changes
  fillColor?: string; // Fill color for selected hearts
  borderColor?: string; // Border color for hearts
}

const AnimatedHeartRating: React.FC<RatingProps> = ({
  max = 5,
  onRatingChange,
  fillColor = "currentColor",
  borderColor = "currentColor",
}) => {
  const [rating, setRating] = useState<number>(0); // Store the rating state

  const handleRating = (heartIndex: number) => {
    // Update rating on heart click
    setRating(heartIndex);
    if (onRatingChange) onRatingChange(heartIndex);
  };

  return (
    <div className="flex items-center space-x-2">
      {Array.from({ length: max }, (_, index) => (
        <motion.button
          key={index}
          onClick={() => handleRating(index + 1)} // Add 1 because index is 0-based
          whileHover={{
            scale: 1.2, // Slightly increase size
            rotate: 10, // Rotate slightly
            boxShadow: "0px 0px 15px rgba(255, 0, 0, 0.6)", // Glow effect on hover
            transition: { type: "spring", stiffness: 300 },
          }}
          whileTap={{
            scale: 0.9, // Shrink on tap
            rotate: 180, // Rotate 180 degrees on tap
            transition: { type: "spring", stiffness: 400 },
          }}
          animate={{
            scale: index < rating ? 1.3 : 1, // Larger scale for selected hearts
            opacity: index < rating ? 1 : 0.6, // More opacity for selected hearts
            transition: { type: "spring", stiffness: 300 },
          }}
          className="focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill={index < rating ? fillColor : "none"} // Filled heart based on rating
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke={borderColor} // Border color for hearts
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
            />
          </svg>
        </motion.button>
      ))}
    </div>
  );
};

export default AnimatedHeartRating;
