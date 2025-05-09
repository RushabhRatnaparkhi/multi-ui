'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const InkEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          className="absolute inset-0 pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Ink drops */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{
                width: `${20 + Math.random() * 30}px`,
                height: `${20 + Math.random() * 30}px`,
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`,
                background: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '50%',
                filter: 'blur(10px)',
              }}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.5, 1],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: 2 + Math.random(),
                delay: i * 0.2,
                repeat: Infinity,
                repeatDelay: 3,
              }}
            />
          ))}
          
          {/* Brush stroke */}
          <motion.div
            className="absolute inset-x-0 h-1"
            style={{
              top: '50%',
              background: 'rgba(0, 0, 0, 0.1)',
              filter: 'blur(2px)',
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{
              scaleX: [0, 1, 1],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_69: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="relative w-[380px] rounded-2xl overflow-hidden bg-white"
        style={{
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-gray-800">Zen Simplicity</h3>
          <p className="text-gray-600">Find peace in minimalism</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl overflow-hidden bg-white"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <InkEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-4"
            animate={isHovered ? {
              scale: [1, 1.05, 1],
            } : {
              scale: 1,
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gray-50 flex items-center justify-center p-4">
              <svg className="w-full h-full text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 text-gray-800"
            style={{
              fontFamily: 'Noto Serif',
            }}
          >
            Zen Simplicity
          </motion.h3>
          <motion.p className="text-gray-600">
            Find peace in minimalism
          </motion.p>
        </motion.div>

        <motion.div
          className="space-y-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            'Mindful Design',
            'Peaceful Interface',
            'Focused Content',
          ].map((feature, i) => (
            <motion.div
              key={feature}
              className="flex items-center space-x-3"
              initial={false}
              animate={isHovered ? {
                x: 10,
                transition: { delay: i * 0.1 },
              } : {
                x: 0,
              }}
            >
              <div className="w-1 h-1 rounded-full bg-gray-300" />
              <div className="text-gray-600">{feature}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-gray-900 text-white font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: '#111827',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Explore
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-gray-900 text-gray-900 font-medium"
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(17, 24, 39, 0.05)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_69; 