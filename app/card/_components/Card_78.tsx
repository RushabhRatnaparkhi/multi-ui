'use client';
import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const GridEffect: React.FC<{ isHovered: boolean }> = ({ isHovered }) => {
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
          {/* Grid background */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: `
                linear-gradient(transparent 0%, rgba(236, 72, 153, 0.1) 2%, transparent 3%),
                linear-gradient(90deg, transparent 0%, rgba(236, 72, 153, 0.1) 2%, transparent 3%)
              `,
              backgroundSize: '40px 40px',
              transform: 'perspective(500px) rotateX(60deg)',
              transformOrigin: 'center 110%',
            }}
            animate={{
              backgroundPosition: ['0px 0px', '0px 40px'],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear',
            }}
          />

          {/* Neon glow */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(236, 72, 153, 0.2), transparent 70%)',
              filter: 'blur(20px)',
            }}
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const Card_78: React.FC = () => {
  const [mounted, setMounted] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div 
        className="relative w-[380px] rounded-2xl backdrop-blur-sm overflow-hidden"
        style={{
          background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.9))',
          boxShadow: '0 8px 32px rgba(236, 72, 153, 0.2)',
        }}
      >
        {/* Static content for SSR */}
        <div className="relative p-6">
          <h3 className="text-xl font-bold text-pink-500">SYNTHWAVE</h3>
          <p className="text-pink-400">Back to the 80s</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="relative w-[380px] rounded-2xl backdrop-blur-sm cursor-pointer overflow-hidden"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={false}
      animate={{ opacity: 1 }}
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{ scale: 0.98 }}
      style={{
        background: 'linear-gradient(145deg, rgba(31, 41, 55, 0.95), rgba(17, 24, 39, 0.9))',
        boxShadow: '0 8px 32px rgba(236, 72, 153, 0.2)',
        border: '1px solid rgba(236, 72, 153, 0.2)',
      }}
    >
      <GridEffect isHovered={isHovered} />

      <div className="relative p-6">
        <motion.div
          className="mb-6 text-center"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="w-24 h-24 mx-auto mb-4"
            animate={isHovered ? {
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            } : {
              rotate: 0,
              scale: 1,
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center p-4">
              <svg className="w-full h-full text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
              </svg>
            </div>
          </motion.div>
          <motion.h3
            className="text-2xl font-bold mb-2 bg-clip-text text-transparent"
            style={{
              backgroundImage: 'linear-gradient(135deg, #EC4899, #9333EA)',
              fontFamily: 'Press Start 2P',
              fontSize: '1.5rem',
              letterSpacing: '0.1em',
            }}
          >
            SYNTHWAVE
          </motion.h3>
          <motion.p className="text-pink-400">
            Back to the 80s
          </motion.p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 gap-4 mb-6"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {[
            { label: 'SCORE', value: '1,000,000' },
            { label: 'LEVEL', value: 'MAX' },
            { label: 'POWER', value: '100%' },
            { label: 'TIME', value: '88:88' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-lg p-3 border border-pink-500/20"
              initial={false}
              animate={isHovered ? {
                scale: 1.05,
                transition: { delay: i * 0.1 },
              } : {
                scale: 1,
              }}
            >
              <div className="text-pink-400 text-sm font-bold" style={{ fontFamily: 'Press Start 2P', fontSize: '0.7rem' }}>{stat.label}</div>
              <div className="text-white font-bold" style={{ fontFamily: 'Press Start 2P', fontSize: '0.8rem' }}>{stat.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center space-x-4"
          animate={isHovered ? { y: -2 } : { y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold"
            style={{ fontFamily: 'Press Start 2P', fontSize: '0.8rem' }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 0 20px rgba(236, 72, 153, 0.5)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            PLAY NOW
          </motion.button>
          <motion.button
            className="px-6 py-2 rounded-lg border-2 border-pink-500 text-pink-400 font-bold"
            style={{ fontFamily: 'Press Start 2P', fontSize: '0.8rem' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
          >
            HIGH SCORE
          </motion.button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Card_78; 