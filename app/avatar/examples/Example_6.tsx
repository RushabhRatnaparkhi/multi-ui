"use client";

import React from 'react';
import Avatar from '../_components/Avatar_6';

export default function AvatarExample6() {
  const avatarImages = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=500&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop",
  ];

  return (
    <div className="p-4 min-h-screen bg-gradient-to-br from-gray-900 to-gray-800">
      <h2 className="text-2xl font-bold text-white mb-6">Ripple Effect Avatar</h2>
      
      <div className="flex flex-col space-y-8 max-w-2xl mx-auto">
        {/* Different sizes */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Size Variations</h3>
          <div className="flex space-x-12 items-center">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Small Avatar" 
                size="sm" 
              />
              <span className="text-white mt-2">Small</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Medium Avatar" 
                size="md" 
              />
              <span className="text-white mt-2">Medium</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[0]} 
                alt="Large Avatar" 
                size="lg" 
              />
              <span className="text-white mt-2">Large</span>
            </div>
          </div>
        </div>

        {/* Different ripple colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">Ripple Color Variations</h3>
          <div className="flex space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Default Ripple" 
                size="md" 
              />
              <span className="text-white mt-2">Default</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Purple Ripple" 
                size="md" 
                rippleColor="purple-500"
              />
              <span className="text-white mt-2">Purple</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[1]} 
                alt="Green Ripple" 
                size="md" 
                rippleColor="green-500"
              />
              <span className="text-white mt-2">Green</span>
            </div>
          </div>
        </div>

        {/* More ripple colors */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-semibold text-white">More Ripple Colors</h3>
          <div className="flex space-x-12">
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Red Ripple" 
                size="md" 
                rippleColor="red-500"
              />
              <span className="text-white mt-2">Red</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Yellow Ripple" 
                size="md" 
                rippleColor="yellow-500"
              />
              <span className="text-white mt-2">Yellow</span>
            </div>
            <div className="flex flex-col items-center">
              <Avatar 
                src={avatarImages[2]} 
                alt="Pink Ripple" 
                size="md" 
                rippleColor="pink-500"
              />
              <span className="text-white mt-2">Pink</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 