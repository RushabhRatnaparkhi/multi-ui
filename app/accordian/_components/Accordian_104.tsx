'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled, { keyframes } from 'styled-components';

const nebulaPulse = keyframes`
  0% { transform: scale(1) rotate(0deg); opacity: 0.3; }
  50% { transform: scale(1.5) rotate(180deg); opacity: 0.6; }
  100% { transform: scale(1) rotate(360deg); opacity: 0.3; }
`;

const starTwinkle = keyframes`
  0%, 100% { opacity: 0.2; transform: scale(0.8); }
  50% { opacity: 0.8; transform: scale(1.2); }
`;

const Container = styled.div`
  padding: 1rem;
  background: linear-gradient(135deg, #16213e 0%, #1a1b3b 100%);
  min-height: 100%;
  position: relative;
  overflow: hidden;
`;

const NebulaButton = styled(motion.button)`
  width: 100%;
  background: rgba(26, 27, 59, 0.6);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 182, 193, 0.3);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  overflow: hidden;
  border-radius: 20px;
  text-align: left;
  margin: 1rem 0;
  box-shadow: 
    0 0 30px rgba(255, 182, 193, 0.2),
    inset 0 0 20px rgba(255, 182, 193, 0.1);

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: radial-gradient(
      circle at 50% 50%,
      rgba(255, 182, 193, 0.2),
      transparent 70%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const ContentWrapper = styled(motion.div)`
  overflow: hidden;
  margin: 0.5rem 0;
  position: relative;
`;

const Content = styled.div`
  background: rgba(26, 27, 59, 0.4);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 182, 193, 0.2);
  padding: 1.5rem;
  color: #fff;
  position: relative;
  border-radius: 20px;
  box-shadow: 
    0 0 20px rgba(255, 182, 193, 0.15),
    inset 0 0 15px rgba(255, 182, 193, 0.1);
`;

const Title = styled.span`
  font-size: 1.125rem;
  font-weight: 500;
  background: linear-gradient(45deg, #ffb6c1, #ffc0cb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 15px rgba(255, 182, 193, 0.5);
  z-index: 1;
  position: relative;
`;

const IconWrapper = styled(motion.div)`
  color: #ffb6c1;
  font-size: 1.25rem;
  text-shadow: 0 0 10px rgba(255, 182, 193, 0.5);
`;

const NebulaDust = styled(motion.div)<{ size: number; color: string; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: ${props => props.color};
  border-radius: 50%;
  filter: blur(2px);
  animation: ${nebulaPulse} ${props => 8 + props.delay}s linear infinite;
  animation-delay: ${props => props.delay}s;
`;

const Star = styled(motion.div)<{ size: number; delay: number }>`
  position: absolute;
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 10px #fff, 0 0 20px #ffb6c1;
  animation: ${starTwinkle} ${props => 2 + props.delay}s ease-in-out infinite;
  animation-delay: ${props => props.delay}s;
`;

interface AccordionProps {
  items: {
    title: string;
    content: string;
  }[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const nebulaColors = [
    'rgba(255, 182, 193, 0.3)',
    'rgba(255, 192, 203, 0.3)',
    'rgba(255, 218, 224, 0.3)',
  ];

  return (
    <Container>
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <NebulaButton
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {[...Array(5)].map((_, i) => (
              <NebulaDust
                key={i}
                size={40 + Math.random() * 40}
                color={nebulaColors[i % nebulaColors.length]}
                delay={i * 0.8}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <Star
                key={i}
                size={2 + Math.random() * 2}
                delay={i * 0.3}
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                }}
              />
            ))}
            <div className="flex justify-between items-center">
              <Title>{item.title}</Title>
              <IconWrapper
                animate={{ 
                  rotate: openIndex === index ? 180 : 0,
                  scale: openIndex === index ? 1.2 : 1
                }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                ▼
              </IconWrapper>
            </div>
          </NebulaButton>
          <AnimatePresence>
            {openIndex === index && (
              <ContentWrapper
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Content>
                  {item.content}
                </Content>
              </ContentWrapper>
            )}
          </AnimatePresence>
        </div>
      ))}
    </Container>
  );
} 