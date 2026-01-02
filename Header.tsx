
import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from './constants';
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
    const elements = document.querySelectorAll(
      'p, h1, h2, h3, h4, h5, h6, li, td'
    );

    for (const el of Array.from(elements)) {
      const element = el as HTMLElement;
      if (
        element.closest('header') ||
        element.closest('footer') ||
        element.offsetParent === null
      )
        continue;

      if (element.textContent?.toLowerCase().includes(term)) {
        element.scrollIntoView({ behavior: 'smooth', block: 'center' });

        const originalBg = element.style.backgroundColor;
        element.style.backgroundColor = 'rgba(249,115,22,0.3)';
        setTimeout(() => {
          element.style.backgroundColor = originalBg;
        }, 1500);

        setIsMobileMenuOpen(false);
        break;
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-gaming-darker/95 backdrop-blur-md border-b border-slate-800'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center h-16">
        <div className="flex items-center gap-2 text-white font-bold text-xl">
          <Gamepad2 className="w-6 h-6 text-gaming-primary" />
          FF<span className="text-gaming-primary">Advance</span>Server
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-300 hover:text-gaming-primary transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gaming-darker border-t border-slate-800">
          <div className="p-4 space-y-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 px-3 rounded hover:bg-slate-800 text-slate-300"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
