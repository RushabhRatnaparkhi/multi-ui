"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface RadioOption {
  value: string;
  label: string;
}

interface RadioGroupProps {
  options: RadioOption[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}

export const HorizontalRadioGroupSlideZoomWave: React.FC<RadioGroupProps> = ({
  options,
  name,
  selectedValue,
  onChange,
}) => {
  return (
    <div className="flex space-x-10">
      {options.map((option, index) => (
        <label
          key={option.value}
          className="flex flex-col items-center cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="hidden"
          />
          <motion.div
            className={`w-10 h-10 rounded-full border-2 ${
              selectedValue === option.value
                ? "border-purple-500"
                : "border-gray-300"
            } flex items-center justify-center`}
            initial={{ x: 0, scale: 1, rotate: 0 }}
            animate={{
              ...(index === 0 && selectedValue === option.value
                ? { x: [-5, 5, -5] }
                : {}),
              ...(index === 1 && selectedValue === option.value
                ? { scale: [1, 1.2, 1] }
                : {}),
              ...(index === 2 && selectedValue === option.value
                ? { rotate: [0, 15, -15, 0] }
                : {}),
            }}
            transition={{
              duration: 0.5,
              repeat: selectedValue === option.value ? Infinity : 0,
              repeatType: "loop",
            }}
          >
            {selectedValue === option.value && (
              <motion.div
                className="w-4 h-4 bg-purple-500 rounded-full"
                layoutId="selected"
              />
            )}
          </motion.div>
          <span className="text-gray-800 mt-2">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

const App: React.FC = () => {
  const [selected, setSelected] = useState<string>("option1");

  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold mb-4">Select an Option:</h1>
      <HorizontalRadioGroupSlideZoomWave
        options={options}
        name="slideZoomWaveExample"
        selectedValue={selected}
        onChange={setSelected}
      />
    </div>
  );
};

export default App;
