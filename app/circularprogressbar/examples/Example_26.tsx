"use client";
import React, { useState, useEffect } from 'react';
import CircularProgressBar from '../_components/CircularProgressBar_26';

const Example_26 = () => {
  const [value, setValue] = useState(50);
  const [max, setMax] = useState(100);
  const [key, setKey] = useState(0);
  const [size, setSize] = useState(250);
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
        Tech Progress Ring
      </h1>
      
      <div className="bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-lg p-8 rounded-xl shadow-2xl flex flex-col items-center border border-indigo-500/20">
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
            <label htmlFor="value-slider" className="block text-sm font-medium text-indigo-300 mb-2">
              Progress: {value} ({percentage.toFixed(1)}%)
            </label>
            <input 
              id="value-slider"
              type="range" 
              min="0" 
              max={max} 
              value={value} 
              onChange={handleValueChange}
              className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
          
          <div>
            <label htmlFor="max-slider" className="block text-sm font-medium text-indigo-300 mb-2">
              Maximum Value: {max}
            </label>
            <input 
              id="max-slider"
              type="range" 
              min="50" 
              max="200" 
              value={max} 
              onChange={handleMaxChange}
              className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="size-slider" className="block text-sm font-medium text-indigo-300 mb-2">
              Size: {size}px
            </label>
            <input 
              id="size-slider"
              type="range" 
              min="150" 
              max="400" 
              value={size} 
              onChange={handleSizeChange}
              className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>

          <div>
            <label htmlFor="stroke-width" className="block text-sm font-medium text-indigo-300 mb-2">
              Ring Width: {strokeWidth}px
            </label>
            <input 
              id="stroke-width"
              type="range" 
              min="4" 
              max="16" 
              value={strokeWidth} 
              onChange={handleStrokeWidthChange}
              className="w-full h-2 bg-gray-700/50 rounded-lg appearance-none cursor-pointer"
            />
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gradient-to-br from-gray-800/50 to-gray-700/50 backdrop-blur-lg p-6 rounded-xl shadow-2xl w-full max-w-md border border-indigo-500/20">
        <h2 className="text-lg font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-blue-400">
          Tech Features
        </h2>
        <ul className="list-disc pl-5 space-y-2 text-indigo-300">
          <li>Rotating dashed outer ring</li>
          <li>Spring-animated percentage display</li>
          <li>Smooth progress transitions</li>
          <li>Indigo accent highlights</li>
          <li>Minimalist tech aesthetic</li>
        </ul>
      </div>
    </div>
  );
};

export default Example_26; 