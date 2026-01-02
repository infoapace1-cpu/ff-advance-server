import React, { useMemo } from 'react';

export const FireBackground: React.FC = () => {
  // Generate random embers with different positions and speeds
  const embers = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 3 + Math.random() * 5, // Random duration between 3s and 8s
      delay: Math.random() * -5, // Random start delay
    }));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
      {embers.map((ember) => (
        <div
          key={ember.id}
          className="ember"
          style={{
            left: `${ember.left}%`,
            '--duration': `${ember.duration}s`,
            '--delay': `${ember.delay}s`,
          } as React.CSSProperties}
        />
      ))}
      {/* Bottom glow gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gaming-primary/10 to-transparent" />
    </div>
  );
};