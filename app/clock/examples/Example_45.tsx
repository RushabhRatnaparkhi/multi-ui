"use client"

import React, { useState } from 'react';
import Clock_45 from '../_components/Clock_45';
import { FaToggleOn, FaToggleOff, FaWineGlass } from 'react-icons/fa6';

const Example_45: React.FC = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="flex items-center space-x-2 bg-transparent border-none cursor-pointer"
          >
            {darkMode ? (
              <FaToggleOn className="text-2xl text-blue-400" />
            ) : (
              <FaToggleOff className="text-2xl text-gray-400" />
            )}
            <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
          </button>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <FaWineGlass className="mr-2 text-slate-400" />
            Glass Shatter Clock
          </h1>
          <p className="text-lg opacity-80">
            An elegant clock with glass shattering animations during digit transitions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12">
          <div className={`p-6 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className="text-xl font-semibold mb-4">Shattered Glass</h2>
            <div className="flex justify-center items-center py-8">
              <Clock_45 />
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Clock Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <span className="text-slate-400 mr-2">•</span>
              <span>Glass shattering animation on digit change</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2">•</span>
              <span>Flying glass shards with rotation effects</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2">•</span>
              <span>Elegant slate color scheme</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2">•</span>
              <span>Realistic glass reflections and highlights</span>
            </li>
            <li className="flex items-start">
              <span className="text-slate-400 mr-2">•</span>
              <span>Staggered shard animations with varying delays</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Example_45; 