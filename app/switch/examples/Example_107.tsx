"use client";

import React, { useState } from "react";
import Switch from "../_components/Switch_107";

const SwitchExample107 = () => {
  const [workoutTracking, setWorkoutTracking] = useState(true);
  const [heartRateMonitor, setHeartRateMonitor] = useState(true);
  const [gpsTracking, setGpsTracking] = useState(false);
  const [achievementBadges, setAchievementBadges] = useState(true);

  return (
    <div className="w-full rounded-xl bg-gradient-to-br from-red-400 to-orange-500 p-1">
      <div className="rounded-lg bg-white p-6 dark:bg-gray-900">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Workout Tracking Settings
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Customize your fitness experience
          </p>
        </div>

        <div className="space-y-6">
          {/* Workout Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Workout Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {workoutTracking
                    ? "Track exercises and sets"
                    : "Basic workout logging"}
                </p>
              </div>
              <Switch
                checked={workoutTracking}
                onChange={setWorkoutTracking}
              />
            </div>
            {workoutTracking && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Detailed exercise tracking and history
              </div>
            )}
          </div>

          {/* Heart Rate Monitor */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Heart Rate Monitor
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {heartRateMonitor
                    ? "Real-time heart rate tracking"
                    : "Basic workout stats"}
                </p>
              </div>
              <Switch
                checked={heartRateMonitor}
                onChange={setHeartRateMonitor}
              />
            </div>
            {heartRateMonitor && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Monitor heart rate zones and intensity
              </div>
            )}
          </div>

          {/* GPS Tracking */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  GPS Tracking
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {gpsTracking
                    ? "Track outdoor activities"
                    : "Indoor workouts only"}
                </p>
              </div>
              <Switch
                checked={gpsTracking}
                onChange={setGpsTracking}
              />
            </div>
            {gpsTracking && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Map your running and cycling routes
              </div>
            )}
          </div>

          {/* Achievement Badges */}
          <div className="rounded-lg border border-gray-200 p-4 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium text-gray-900 dark:text-white">
                  Achievement Badges
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {achievementBadges
                    ? "Earn fitness milestones"
                    : "Basic progress view"}
                </p>
              </div>
              <Switch
                checked={achievementBadges}
                onChange={setAchievementBadges}
              />
            </div>
            {achievementBadges && (
              <div className="mt-4 text-sm text-red-600 dark:text-red-400">
                • Unlock badges for reaching goals
              </div>
            )}
          </div>

          {/* Settings Summary */}
          <div className="rounded-lg bg-gray-50 p-4 dark:bg-gray-800">
            <h4 className="mb-3 text-sm font-medium text-gray-900 dark:text-white">
              Workout Settings Summary
            </h4>
            <div className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <p>• {workoutTracking ? "Detailed tracking on" : "Basic logging"}</p>
              <p>• {heartRateMonitor ? "Heart rate tracking on" : "Basic stats"}</p>
              <p>• {gpsTracking ? "GPS tracking on" : "Indoor only"}</p>
              <p>• {achievementBadges ? "Achievements on" : "Basic progress"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwitchExample107; 