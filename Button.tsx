import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  const baseStyles = "px-6 py-3 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 transform hover:-translate-y-1 active:translate-y-0 relative overflow-hidden";
  
  const variants = {
    // Added animate-pulse-slow for a breathing effect on the primary action
    primary: "bg-gaming-primary hover:bg-gaming-primaryHover text-white shadow-[0_0_15px_rgba(249,115,22,0.5)] hover:shadow-[0_0_25px_rgba(249,115,22,0.8)] border border-white/10",
    secondary: "bg-gaming-accent text-gaming-darker hover:bg-yellow-300 shadow-lg shadow-gaming-accent/30",
    outline: "border-2 border-gaming-primary text-gaming-primary hover:bg-gaming-primary hover:text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Shine effect for primary button */}
      {variant === 'primary' && (
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      )}
      {children}
    </button>
  );
};