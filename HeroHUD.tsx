import React from 'react';
import { Crosshair, Target, Radio } from 'lucide-react';

export const HeroHUD: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Rotating Radar/Scope Ring - Top Right */}
      <div className="absolute -top-20 -right-20 md:-top-32 md:-right-32 w-[500px] h-[500px] md:w-[800px] md:h-[800px] opacity-[0.07]">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_20s_linear_infinite]">
          {/* Outer dashed ring */}
          <circle cx="50" cy="50" r="49" fill="none" stroke="#f97316" strokeWidth="0.2" strokeDasharray="4 2" />
          <circle cx="50" cy="50" r="44" fill="none" stroke="#f97316" strokeWidth="0.5" strokeDasharray="12 12" />
          {/* Inner ring */}
          <circle cx="50" cy="50" r="30" fill="none" stroke="#facc15" strokeWidth="0.3" strokeDasharray="8 8" opacity="0.8" />
          {/* Cross lines */}
          <line x1="50" y1="5" x2="50" y2="95" stroke="#fff" strokeWidth="0.1" />
          <line x1="5" y1="50" x2="95" y2="50" stroke="#fff" strokeWidth="0.1" />
          {/* Decorative arcs */}
          <path d="M50 10 A40 40 0 0 1 90 50" fill="none" stroke="#f97316" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
          <path d="M50 90 A40 40 0 0 1 10 50" fill="none" stroke="#f97316" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      {/* Counter-rotating Element - Bottom Left */}
      <div className="absolute -bottom-40 -left-20 w-[400px] h-[400px] opacity-[0.05]">
         <svg viewBox="0 0 100 100" className="w-full h-full animate-[spin_25s_linear_infinite_reverse]">
          <rect x="25" y="25" width="50" height="50" fill="none" stroke="#facc15" strokeWidth="0.5" transform="rotate(45 50 50)" />
          <circle cx="50" cy="50" r="35" fill="none" stroke="#fff" strokeWidth="0.2" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Floating Tactical Icons */}
      <div className="absolute top-1/4 left-10 md:left-20 opacity-20 animate-pulse">
        <Crosshair className="w-8 h-8 text-gaming-primary" />
      </div>
      <div className="absolute bottom-1/3 right-10 opacity-20 animate-pulse" style={{ animationDelay: '1s' }}>
        <Target className="w-12 h-12 text-gaming-accent" />
      </div>
      <div className="absolute top-32 right-1/4 opacity-10 animate-bounce" style={{ animationDuration: '3s' }}>
        <Radio className="w-6 h-6 text-white" />
      </div>

      {/* Safe Zone Shrinking Circle Animation */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] border border-blue-400/10 rounded-full animate-[ping_4s_cubic-bezier(0,0,0.2,1)_infinite] pointer-events-none" />
    </div>
  );
};