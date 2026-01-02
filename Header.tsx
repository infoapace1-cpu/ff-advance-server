import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X, Gamepad2, ChevronRight, Search } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when resizing to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const term = searchQuery.toLowerCase();
    // Select potential text containers within the main content
    const elements = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, li, td');
    
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i] as HTMLElement;
      
      // Skip header elements and hidden elements
      if (el.closest('header') || el.closest('footer') || el.offsetParent === null) continue;

      // Check for direct text content match
      if (el.textContent && el.textContent.toLowerCase().includes(term)) {
        // Scroll to element
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Visual cue (Highlight)
        const originalTransition = el.style.transition;
        const originalBg = el.style.backgroundColor;
        
        el.style.transition = 'background-color 0.5s ease';
        el.style.backgroundColor = 'rgba(249, 115, 22, 0.3)'; // Gaming primary color with opacity
        
        // Remove highlight after animation
        setTimeout(() => {
          el.style.backgroundColor = originalBg;
          setTimeout(() => {
            el.style.transition = originalTransition;
          }, 500);
        }, 1500);

        // Close mobile menu if open
        setIsMobileMenuOpen(false);
        break; // Stop at first match
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent ${
        isScrolled || isMobileMenuOpen 
          ? 'bg-gaming-darker/95 backdrop-blur-md shadow-lg py-3 border-slate-800' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center relative z-20">
        <div className="flex items-center gap-2 text-white font-bold text-xl md:text-2xl tracking-tighter">
          <div className="p-2 bg-gaming-primary rounded-lg shadow-[0_0_10px_rgba(249,115,22,0.5)]">
            <Gamepad2 className="w-6 h-6" />
          </div>
          <a href="#" className="hover:opacity-90 transition-opacity">
            FF<span className="text-gaming-primary">Advance</span>Server
          </a>
        </div>

        {/* Desktop Nav & Search */}
        <div className="hidden md:flex items-center gap-8">
          <nav className="flex gap-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-gaming-primary transition-colors uppercase tracking-wide py-2"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Search Bar */}
          <div className={`relative flex items-center transition-all duration-300 ${isSearchOpen ? 'w-64' : 'w-10'}`}>
             <button 
                onClick={() => {
                  setIsSearchOpen(!isSearchOpen);
                  if (!isSearchOpen) setTimeout(() => document.getElementById('desktop-search-input')?.focus(), 100);
                }}
                className={`p-2 rounded-full hover:bg-slate-800 transition-colors z-10 ${isSearchOpen ? 'text-gaming-primary' : 'text-slate-300'}`}
                aria-label="Toggle search"
             >
               <Search className="w-5 h-5" />
             </button>
             <form 
               onSubmit={handleSearch}
               className={`absolute right-0 top-0 bottom-0 flex items-center bg-slate-900/90 border border-slate-700 rounded-full overflow-hidden transition-all duration-300 ${isSearchOpen ? 'w-full opacity-100 pl-10 pr-2' : 'w-0 opacity-0 pointer-events-none'}`}
             >
                <input 
                  id="desktop-search-input"
                  type="text" 
                  placeholder="Search..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent border-none text-sm text-white placeholder-slate-500 focus:outline-none w-full h-full py-2"
                />
             </form>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2 hover:bg-slate-800 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-gaming-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay (Backdrop) */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        style={{ zIndex: 10 }}
        onClick={() => setIsMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Mobile Nav Menu */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-gaming-darker border-b border-slate-800 shadow-2xl overflow-hidden transition-all duration-300 ease-in-out origin-top z-20 ${
          isMobileMenuOpen ? 'max-h-[90vh] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'
        }`}
      >
        <div className="flex flex-col p-4 space-y-4">
          {/* Mobile Search */}
          <form onSubmit={handleSearch} className="relative">
             <input 
               type="text" 
               placeholder="Search content..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2 pl-4 pr-10 text-white placeholder-slate-500 focus:outline-none focus:border-gaming-primary transition-colors"
             />
             <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-gaming-primary" aria-label="Search">
               <Search className="w-4 h-4" />
             </button>
          </form>

          <div className="space-y-1">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="group flex items-center justify-between py-3 px-4 text-slate-300 hover:bg-slate-800 hover:text-gaming-primary rounded-lg transition-colors font-medium border border-transparent hover:border-slate-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};