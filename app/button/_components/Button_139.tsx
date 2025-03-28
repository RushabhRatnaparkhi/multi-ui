'use client';

import React from 'react';
import styled from 'styled-components';

interface TwitterButtonProps {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button = styled.button`
  background: transparent;
  position: relative;
  padding: 5px 15px;
  display: flex;
  align-items: center;
  font-size: 17px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  border: 1px solid #1DA1F2;
  border-radius: 25px;
  outline: none;
  overflow: hidden;
  color: #1DA1F2;
  transition: color 0.3s 0.1s ease-out;
  text-align: center;

  span {
    margin: 10px;
  }

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    content: '';
    border-radius: 50%;
    display: block;
    width: 20em;
    height: 20em;
    left: -5em;
    text-align: center;
    transition: box-shadow 0.5s ease-out;
    z-index: -1;
  }

  &:hover {
    color: #fff;
    border: 1px solid #1DA1F2;
  }

  &:hover::before {
    box-shadow: inset 0 0 0 10em #1DA1F2;
  }
`;

const TwitterIcon = () => (
  <svg viewBox="0 0 16 16" className="bi bi-twitter" fill="currentColor" height={16} width={16} xmlns="http://www.w3.org/2000/svg">
    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
  </svg>
);

const TwitterButton: React.FC<TwitterButtonProps> = ({
  children = 'Twitter',
  className = '',
  onClick
}) => {
  return (
    <Button className={className} onClick={onClick}>
      <TwitterIcon />
      <span>{children}</span>
    </Button>
  );
};

export default TwitterButton; 