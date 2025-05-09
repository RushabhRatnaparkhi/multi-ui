"use client"

import React, { useState } from 'react';
import Clipboard from '../_components/Clipboard_76';
import { FaSun, FaMoon, FaDna, FaVial, FaArrowRotateRight, FaPalette, FaAtom } from 'react-icons/fa6';

const Example_76: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const clipboardExamples = [
    {
      text: "DNA helix clipboard",
      onCopy: () => console.log("Copied: DNA helix clipboard")
    },
    {
      text: "Genetic code example",
      onCopy: () => console.log("Copied: Genetic code example")
    },
    {
      text: "Molecular biology demo",
      onCopy: () => console.log("Copied: Molecular biology demo")
    },
    {
      text: "Double helix button",
      onCopy: () => console.log("Copied: Double helix button")
    }
  ];

  return (
    <div className={`min-h-screen p-8 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-end mb-6">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${darkMode ? 'bg-gray-800 text-yellow-400' : 'bg-gray-200 text-gray-800'}`}
          >
            {darkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
          </button>
        </div>

        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">DNA Helix Clipboard</h1>
          <p className="text-lg opacity-80">
            A biological clipboard component featuring rotating DNA strands and floating molecules.
            Hover over the buttons to reveal the genetic animation effect.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {clipboardExamples.map((example, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}
            >
              <Clipboard text={example.text} onCopy={example.onCopy} />
            </div>
          ))}
        </div>

        <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800/50' : 'bg-white'} shadow-lg mb-8`}>
          <h2 className="text-2xl font-bold mb-4">DNA Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaDna /></span>
              <span>Rotating DNA helix strands</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaVial /></span>
              <span>Floating molecule particles</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaArrowRotateRight /></span>
              <span>Rotating icon animation</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-400"><FaPalette /></span>
              <span>Pink genetic color scheme</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-pink-500"><FaAtom /></span>
              <span>Pulsing base pair effect</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_76; 