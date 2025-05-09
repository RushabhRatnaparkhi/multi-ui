"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_12';

const Example_12 = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(150);
  const [strokeWidth, setStrokeWidth] = useState(8);

  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [value, max, size, strokeWidth]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(parseInt(e.target.value));
  };

  const handleMaxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMax(parseInt(e.target.value));
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(parseInt(e.target.value));
  };

  const handleStrokeWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStrokeWidth(parseInt(e.target.value));
  };

  const percentage = (value / max) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-cyan-400">Neon Glow Progress Bar</h1>
      
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl flex flex-col items-center border border-cyan-400/20">
        <div key={key} className="relative">
          <CircularProgressBar 
            value={value}
            max={max}
            size={size}
            strokeWidth={strokeWidth}
          />
        </div>
        
        <div className="mt-8 w-full max-w-md space-y-4">
          <div>
            <label htmlFor="value-slider" className="block text-sm font-medium text-cyan-400 mb-2">
              Value: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm font-medium text-cyan-400 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm font-medium text-cyan-400 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min="100" 
              max="300" 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm font-medium text-cyan-400 mb-2">
              Stroke Width: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min="4" 
              max="20" 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-xl w-full max-w-md border border-cyan-400/20">
        <h2 className="text-lg font-semibold mb-4 text-cyan-400">Features</h2>
        <ul className="list-disc pl-5 space-y-2 text-cyan-300">
          <li>Neon glow effect with SVG filters</li>
          <li>Pulsating outer ring animation</li>
          <li>Glowing text with shadow animation</li>
          <li>Dark theme with cyan accents</li>
          <li>Smooth progress transitions</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_12; 