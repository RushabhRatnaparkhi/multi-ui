import React, { useState, useEffect, useRef, forwardRef, ReactNode } from "react";
import { motion } from "framer-motion";

// Menubar Component
export const Menubar: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const menubarRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsVisible((prev) => !prev);
  const closeMenu = () => setIsVisible(false);

  // Close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menubarRef.current && !menubarRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible]);

  return (
    <div ref={menubarRef} className="relative inline-block">
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, {
          toggleMenu,
          isVisible,
          closeMenu,
        })
      )}
    </div>
  );
};

// MenubarTrigger Component
export const MenubarTrigger = forwardRef<HTMLButtonElement, { children: ReactNode; toggleMenu?: () => void }>(
  ({ children, toggleMenu }, ref) => {
    return (
      <button
        ref={ref}
        onClick={toggleMenu}
        className="px-5 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg transform transition duration-300 hover:scale-105"
      >
        {children}
      </button>
    );
  }
);

MenubarTrigger.displayName = "MenubarTrigger";

// MenubarContent Component
export const MenubarContent: React.FC<{ children: React.ReactNode; isVisible?: boolean; closeMenu?: () => void }> = ({
  children,
  isVisible = false,
  closeMenu,
}) => {
  return (
    <div className="relative">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="absolute top-full left-0 mt-2 w-60 bg-gradient-to-r from-gray-800 to-gray-700 text-white shadow-lg rounded-xl z-10"
        >
          <ul className="py-2">{React.Children.map(children, (child) => React.cloneElement(child as React.ReactElement, { onClick: closeMenu }))}</ul>
        </motion.div>
      )}
    </div>
  );
};

// MenubarItem Component
export const MenubarItem: React.FC<{ children: ReactNode; onClick?: () => void }> = ({ children, onClick }) => {
  return (
    <li onClick={onClick} className="px-5 py-3 hover:bg-gray-600 cursor-pointer transform transition duration-300">
      {children}
    </li>
  );
};

// MenubarSub Component (submenu handling)
export const MenubarSub: React.FC<{ label: ReactNode; children: React.ReactNode }> = ({ label, children }) => {
  const [isSubmenuVisible, setIsSubmenuVisible] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  const toggleSubmenu = () => {
    setIsSubmenuVisible((prev) => !prev);
  };

  const closeSubmenu = () => setIsSubmenuVisible(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (submenuRef.current && !submenuRef.current.contains(event.target as Node)) {
        closeSubmenu();
      }
    };

    if (isSubmenuVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSubmenuVisible]);

  return (
    <div className="relative">
      <MenubarItem onClick={toggleSubmenu}>{label}</MenubarItem>

      {isSubmenuVisible && (
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 20 }}
          className="absolute left-full top-0 mt-2 w-56 bg-gradient-to-l from-purple-500 to-blue-600 text-white shadow-lg rounded-xl z-10"
          ref={submenuRef}
        >
          <ul className="py-2">{children}</ul>
        </motion.div>
      )}
    </div>
  );
};

// MenubarSeparator Component
export const MenubarSeparator: React.FC = () => {
  return <hr className="my-2 border-gray-600" />;
};

// MenubarCheckboxItem Component
export const MenubarCheckboxItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (checked: boolean, value: string) => void;
  value?: string;
  id?: string;
  disabled?: boolean;
}> = ({ children, checked = false, onChange, value = "", id, disabled = false }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(e.target.checked, value);
    }
  };

  return (
    <li className="px-5 py-3 hover:bg-gray-600 cursor-pointer transform transition duration-300">
      <label className="flex items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          disabled={disabled}
          className="mr-2"
        />
        {children}
      </label>
    </li>
  );
};

// MenubarRadioGroup Component
export const MenubarRadioGroup: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <ul>{children}</ul>;
};

// MenubarRadioItem Component
export const MenubarRadioItem: React.FC<{
  children: React.ReactNode;
  checked?: boolean;
  onChange?: (value: string) => void;
  value?: string;
  id?: string;
  disabled?: boolean;
}> = ({ children, checked = false, onChange, value = "", id, disabled = false }) => {
  const handleChange = () => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <li onClick={handleChange} className="px-5 py-3 hover:bg-gray-600 cursor-pointer transform transition duration-300">
      <label className="flex items-center">
        <input
          type="radio"
          checked={checked}
          onChange={handleChange}
          value={value}
          id={id}
          disabled={disabled}
          className="mr-2"
        />
        {children}
      </label>
    </li>
  );
};

// MenubarShortcut Component
export const MenubarShortcut: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <span className="text-gray-400 text-sm ml-auto">{children}</span>;
};