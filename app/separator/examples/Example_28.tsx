"use client";

import React, { useState } from "react";
import ParticleSeparator from "../_components/Separator_28";

const SeparatorExample = () => {
  const [orientation, setOrientation] = useState<"horizontal" | "vertical">("horizontal");
  const [thickness, setThickness] = useState(24);
  const [color, setColor] = useState("#a855f7");
  const [animated, setAnimated] = useState(true);

  return (
    <div className="w-full space-y-8 p-4">
      {/* Controls */}
      <div className="space-y-4 rounded-lg bg-gray-100 p-4 dark:bg-gray-800">
        <h2 className="text-lg font-semibold">Customize Particle Separator</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium">Orientation</label>
            <select
              className="mt-1 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 dark:border-gray-600 dark:bg-gray-700"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value as "horizontal" | "vertical")}
            >
              <option value="horizontal">Horizontal</option>
              <option value="vertical">Vertical</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Thickness</label>
            <input
              type="range"
              min="16"
              max="40"
              value={thickness}
              onChange={(e) => setThickness(Number(e.target.value))}
              className="mt-1 block w-full"
            />
            <span className="text-sm text-gray-500">{thickness}px</span>
          </div>
          <div>
            <label className="block text-sm font-medium">Color</label>
            <input
              type="color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              className="mt-1 h-10 w-full"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Animated</label>
            <input
              type="checkbox"
              checked={animated}
              onChange={(e) => setAnimated(e.target.checked)}
              className="mt-2 h-5 w-5"
            />
          </div>
        </div>
      </div>

      {/* Example with light background */}
      <div className="space-y-4 rounded-lg bg-white p-6 dark:bg-gray-900">
        <h3 className="text-center text-lg font-medium">Particle Separator Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The Particle Separator creates a dynamic division with floating particles.
              Perfect for modern and interactive interface designs.
            </p>
          </div>
          <ParticleSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-600 dark:text-gray-300">
              The animated particles create a mesmerizing effect,
              ideal for engaging and interactive user experiences.
            </p>
          </div>
        </div>
      </div>

      {/* Example with dark background */}
      <div className="space-y-4 rounded-lg bg-gray-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Dark Mode Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-gray-300">
              Against dark backgrounds, the Particle Separator creates a magical
              atmosphere with its floating particle effects.
            </p>
          </div>
          <ParticleSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-gray-300">
              The particles become more vibrant in dark mode,
              creating an enchanting visual experience.
            </p>
          </div>
        </div>
      </div>

      {/* Example with gradient background */}
      <div className="space-y-4 rounded-lg bg-gradient-to-r from-purple-900 to-violet-900 p-6">
        <h3 className="text-center text-lg font-medium text-white">Gradient Background Example</h3>
        <div className={orientation === "horizontal" ? "space-y-4" : "flex gap-4"}>
          <div className="flex-1">
            <p className="text-white">
              The Particle Separator adds a magical element to gradient backgrounds,
              perfect for creating immersive and engaging interfaces.
            </p>
          </div>
          <ParticleSeparator
            orientation={orientation}
            thickness={thickness}
            color={color}
            animated={animated}
          />
          <div className="flex-1">
            <p className="text-white">
              The combination of gradient backgrounds and floating particles creates
              a captivating visual effect that draws users in.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeparatorExample; 