import React, { useState } from "react";

interface MenuItem {
  id: number;
  label: string;
  icon: string;
  link: string;
}

interface Popup9Props {
  menuItems: MenuItem[];
}

const Popup9: React.FC<Popup9Props> = ({ menuItems }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex items-center justify-center h-screen bg-gray-800">
      <div className="relative">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-500 text-white rounded-full flex items-center justify-center shadow-md hover:rotate-90 transition-transform duration-300"
        >
          {isOpen ? "×" : "+"}
        </button>

        {/* Fan Menu */}
        <div
          className={`absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-500 ${
            isOpen ? "scale-100 opacity-100" : "scale-50 opacity-0 pointer-events-none"
          }`}
        >
          {menuItems.map((item, index) => {
            const angle = index * 45 - 45; // Spread items in an arc
            const x = Math.cos((angle * Math.PI) / 180) * 100; // X position
            const y = Math.sin((angle * Math.PI) / 180) * 100; // Y position

            return (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ transform: `translate(${x}px, ${y}px)` }}
                className={`absolute bg-gradient-to-r from-blue-400 to-purple-600 text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-transform duration-500 delay-${index * 100}`}
              >
                <span>{item.icon}</span>
                <span className="sr-only">{item.label}</span>
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Popup9;
