import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 px-4 border-t border-slate-900">
      <ScrollReveal className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        <div className="max-w-md">
          <h4 className="text-white font-bold text-lg mb-4">Safety & Legal Disclaimer</h4>
          <p className="text-slate-500 text-sm leading-relaxed">
            This website is not affiliated with, endorsed by, or connected to Garena International or Free Fire. 
            All trademarks, logos, and images belong to their respective owners. 
            This site provides informational content and educational guides only and does not host any APK files illegally.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <span className="text-slate-400 text-sm">© {new Date().getFullYear()} FFAdvanceServer Guide</span>
          <div className="flex gap-4 text-sm text-gaming-primary">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Use</a>
            <a href="#" className="hover:underline">Contact</a>
          </div>
        </div>

      </ScrollReveal>
    </footer>
  );
};