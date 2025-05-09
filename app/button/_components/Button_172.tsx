'use client';

import React from 'react';
import styled, { keyframes, css } from 'styled-components';

interface BlackHoleButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const singularity = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    filter: brightness(1);
  }
  50% {
    transform: rotate(180deg) scale(0.6);
    filter: brightness(0.5);
  }
  100% {
    transform: rotate(360deg) scale(1);
    filter: brightness(1);
  }
`;

const gravitationalLensing = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
    opacity: 0.3;
  }
  50% {
    transform: rotate(-180deg) scale(1.2);
    opacity: 0.6;
  }
  100% {
    transform: rotate(-360deg) scale(1);
    opacity: 0.3;
  }
`;

const generateAccretionStyles = (index: number) => {
  const rotation = index * (360 / 15);
  const scale = 1 + (index * 0.1);
  const delay = index * 0.1;
  
  return css`
    transform: rotate(${rotation}deg) scale(${scale});
    animation: ${gravitationalLensing} 4s ease-in-out infinite;
    animation-delay: ${delay}s;
  `;
};

const ButtonContainer = styled.div`
  position: relative;
  width: fit-content;
  perspective: 1000px;
`;

const AccretionDisk = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  border: 2px solid transparent;
  border-radius: 50%;
  background: linear-gradient(
    45deg,
    rgba(255, 0, 0, 0.2),
    rgba(255, 165, 0, 0.2),
    rgba(255, 255, 0, 0.2)
  );
  transform-origin: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
  mix-blend-mode: screen;

  ${[...Array(15)].map((_, i) => css`
    &:nth-child(${i + 1}) {
      ${generateAccretionStyles(i)}
    }
  `)}
`;

const EventHorizon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 40px;
  height: 40px;
  background: black;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 
    0 0 20px rgba(0, 0, 0, 0.8),
    0 0 40px rgba(0, 0, 0, 0.6),
    0 0 60px rgba(0, 0, 0, 0.4);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.3s ease;
`;

const Button = styled.button`
  background: linear-gradient(145deg, #000000, #1a1a1a);
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 4px;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  overflow: visible;
  z-index: 1;

  &:hover {
    transform: translateY(-2px);
    animation: ${singularity} 3s infinite;
    box-shadow: 
      0 5px 15px rgba(0, 0, 0, 0.6),
      0 0 30px rgba(0, 0, 0, 0.4);

    & ~ ${AccretionDisk} {
      opacity: 1;
    }

    & ~ ${EventHorizon} {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(1px);
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      to bottom right,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const BlackHoleButton: React.FC<BlackHoleButtonProps> = ({
  children = 'Black Hole',
  className = '',
  onClick
}) => {
  return (
    <ButtonContainer className={className}>
      <Button onClick={onClick}>
        {children}
      </Button>
      <EventHorizon />
      {[...Array(15)].map((_, i) => (
        <AccretionDisk key={i} />
      ))}
    </ButtonContainer>
  );
};

export default BlackHoleButton; 