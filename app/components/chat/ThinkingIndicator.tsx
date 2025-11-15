"use client";

import { Sparkles, Brain, Zap } from "lucide-react";

export default function ThinkingIndicator() {
  return (
    <div className="flex gap-3 items-start animate-slide-up mb-6">
      {/* Avatar with pulsing effect */}
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-full shadow-lg bg-gradient-to-br from-primary-500 to-accent-500 animate-pulse">
        {/* Outer glow ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 opacity-30 blur-md animate-ping"></div>
        <Brain className="h-5 w-5 text-white relative z-10" />
      </div>

      {/* Thinking bubble with advanced animation */}
      <div className="flex flex-col gap-1 max-w-[80%]">
        <div className="relative rounded-2xl px-5 py-3.5 backdrop-blur-xl bg-gradient-to-br from-gray-800/95 to-gray-900/95 border border-primary-500/30 shadow-2xl overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 via-accent-500/5 to-primary-500/5 animate-gradient bg-[length:200%_100%]"></div>

          {/* Content */}
          <div className="relative flex items-center gap-3">
            {/* Rotating spark icon */}
            <Zap className="w-4 h-4 text-primary-400 animate-pulse" />

            {/* Advanced animated dots */}
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full animate-bounce shadow-lg shadow-primary-500/50" style={{ animationDelay: '0ms', animationDuration: '0.6s' }}></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full animate-bounce shadow-lg shadow-primary-500/50" style={{ animationDelay: '0.1s', animationDuration: '0.6s' }}></div>
              <div className="w-2.5 h-2.5 bg-gradient-to-br from-primary-400 to-accent-400 rounded-full animate-bounce shadow-lg shadow-primary-500/50" style={{ animationDelay: '0.2s', animationDuration: '0.6s' }}></div>
            </div>

            <span className="text-sm font-medium bg-gradient-to-r from-primary-300 to-accent-300 bg-clip-text text-transparent">
              Analyzing
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
