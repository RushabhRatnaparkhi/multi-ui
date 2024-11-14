"use client";
import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

interface DropdownOption {
  label: string;
  disabled?: boolean;
}

interface DropdownProps {
  label: string;
  options: DropdownOption[];
}

const Header = styled.header`
  height: 5rem;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: #fffffa;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavList = styled.ul`
  display: flex;
  justify-content: center;
  column-gap: 2rem;
`;

const Dropdown = styled.li`
  position: relative;
`;

const DropdownButton = styled.button<{ isOpen: boolean }>`
  border: 2px solid #0d41e1;
  color: #0d41e1;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background: transparent;
  cursor: pointer;
  background: ${({ isOpen }) => (isOpen ? "#0d41e1" : "transparent")};
  color: ${({ isOpen }) => (isOpen ? "#fff" : "#0d41e1")};
  transition: background 0.3s, color 0.3s;
`;

const DropdownMenu = styled(motion.ul)`
  position: absolute;
  background: #fffffa;
  border-radius: 5px;
  bottom: 0;
  left: 0;
  transform: translateY(calc(100% + 0.75rem));
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  min-width: 150px;
  z-index: 1050;
  padding: 0.5rem 0;
  list-style: none;
`;

const DropdownMenuItem = styled.li`
  position: relative;
  font-size: 0.85rem;

  &:not(:last-of-type)::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 85%;
    height: 1px;
    background: #ccc;
    transform: translateX(calc(15% / 2));
  }

  a {
    font-size: 0.85rem;
    padding: 0.5rem 1rem;
    display: flex;
    justify-content: space-between;
    text-decoration: none;
    color: inherit;
    position: relative;

    &:hover {
      color: #0d41e1;
    }

    &:hover::before {
      transform: translateX(0);
      opacity: 1;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 0.2rem;
      background: #0d41e1;
      transition: all ease-in 200ms;
      transform: translateX(-100%);
      opacity: 0;
    }
  }

  &.disabled {
    pointer-events: none;
    color: #ccc;
  }
`;

const Main = styled.main`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Dropdown_1: React.FC<DropdownProps> = ({ label, options }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <NavList>
      <Dropdown>
        <DropdownButton
          isOpen={openIndex !== null}
          onClick={() => handleDropdownToggle(openIndex === null ? -1 : openIndex)}
        >
          {label}
        </DropdownButton>
        <DropdownMenu
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: openIndex !== null ? 1 : 0,
            height: openIndex !== null ? "auto" : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          {options.map((option, index) => (
            <DropdownMenuItem
              key={index}
              className={option.disabled ? "disabled" : ""}
            >
              <a href="#" onClick={e => option.disabled && e.preventDefault()}>
                {option.label}{" "}
                <i className="fa-solid fa-star"></i>
              </a>
            </DropdownMenuItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </NavList>
  );
};

export default Dropdown_1;