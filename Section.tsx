import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
  altBackground?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  id, 
  title, 
  subtitle, 
  className = '', 
  children,
  altBackground = false
}) => {
  return (
    <section 
      id={id} 
      className={`py-16 px-4 md:px-8 lg:px-16 ${altBackground ? 'bg-gaming-card' : 'bg-gaming-darker'} ${className}`}
    >
      <ScrollReveal className="max-w-6xl mx-auto">
        {(title || subtitle) && (
          <div className="text-center mb-12 group cursor-default">
            {title && (
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight transition-transform duration-300 ease-out group-hover:scale-105 inline-block">
                {title} <span className="text-gaming-primary transition-colors duration-300 group-hover:text-gaming-accent">.</span>
              </h2>
            )}
            {subtitle && (
              <p className="text-gaming-muted text-lg max-w-2xl mx-auto">
                {subtitle}
              </p>
            )}
            {/* Underline: Expands, changes to accent color (yellow), and glows on hover */}
            <div className="h-1 w-20 bg-gaming-primary mx-auto mt-6 rounded-full transition-all duration-300 ease-out group-hover:w-32 group-hover:bg-gaming-accent group-hover:shadow-[0_0_20px_rgba(250,204,21,0.6)]"></div>
          </div>
        )}
        {children}
      </ScrollReveal>
    </section>
  );
};