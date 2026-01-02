import React, { useState } from 'react';
import { List, ChevronRight, ChevronDown } from 'lucide-react';

export const TableOfContents: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const links = [
    { id: 'features', text: 'FF Advance Server Features' },
    { id: 'significance', text: 'Significance of Downloading FF Advance Server' },
    { id: 'register', text: 'FF Advance Server Registration Process' },
    { id: 'offers', text: 'What FF Advance Server Offers' },
    { id: 'reward', text: '1000 Diamonds Reward' },
    { id: 'download-ob', text: 'Downloading FF Advance Server' },
    { id: 'ob51', text: 'FF Advance Server OB51' },
    { id: 'upcoming', text: 'What Does the FF Advance Server Have in Store for the Upcoming OB Version?' },
    { id: 'eligibility', text: 'Eligibility for Playing FF Advance Server' },
    { id: 'vs-free-fire', text: 'FF Advance Server vs Free Fire' },
    { id: 'new-things', text: 'New Things in FF Advance Server' },
    { id: 'pros-cons', text: 'Pros and Cons of FF Advance Server' },
    { id: 'install', text: 'How to Download & Install FF Advance Server APK' },
    { id: 'why-download', text: 'Why should you download the FF Advance Server' },
    { id: 'download-details', text: 'Downloading Details of FF Advance Server APK' },
    { id: 'faq', text: 'Frequently Asked Questions' },
  ];

  return (
    <div className="bg-gaming-card/50 border border-slate-700 rounded-xl my-8 max-w-4xl mx-auto backdrop-blur-sm overflow-hidden transition-all hover:border-gaming-primary/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 bg-slate-800/40 hover:bg-slate-800/60 transition-colors cursor-pointer group focus:outline-none"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gaming-primary/10 rounded-lg group-hover:bg-gaming-primary/20 transition-colors">
             <List className="text-gaming-primary w-5 h-5" />
          </div>
          <h3 className="text-lg font-bold text-white uppercase tracking-wider">Table of Contents</h3>
        </div>
        <div className={`bg-slate-800 rounded-full p-1 transition-transform duration-500 ease-in-out border border-slate-700 group-hover:border-slate-600 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
           <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-white" />
        </div>
      </button>
      
      <div 
        className={`transition-all duration-500 ease-in-out origin-top overflow-hidden transform ${
          isOpen 
            ? 'max-h-[1200px] opacity-100 scale-100 translate-y-0' 
            : 'max-h-0 opacity-0 scale-95 -translate-y-2'
        }`}
      >
        <nav className="grid md:grid-cols-2 gap-x-8 gap-y-2 p-6 border-t border-slate-700/50 bg-gaming-darker/30">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className="group flex items-start py-1.5 text-sm text-slate-400 hover:text-white transition-colors"
              onClick={(e) => {
                e.preventDefault();
                const element = document.getElementById(link.id);
                if (element) {
                  const headerOffset = 100;
                  const elementPosition = element.getBoundingClientRect().top;
                  const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                  
                  window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                  });
                }
              }}
            >
              <ChevronRight className="w-3.5 h-3.5 mt-0.5 mr-2 text-gaming-primary/50 group-hover:text-gaming-primary transition-colors flex-shrink-0" />
              <span className="group-hover:text-gaming-primary transition-colors leading-tight">
                {link.text}
              </span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};