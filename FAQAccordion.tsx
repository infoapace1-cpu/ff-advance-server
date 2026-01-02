import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  index: number;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className={`border rounded-xl overflow-hidden transition-all duration-300 ${
        isOpen 
          ? 'bg-slate-900/80 border-gaming-primary/50 shadow-[0_0_15px_rgba(249,115,22,0.1)]' 
          : 'bg-gaming-darker border-slate-800 hover:border-slate-600'
      }`}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-5 text-left focus:outline-none group"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-4">
          <div 
            className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              isOpen 
                ? 'bg-gaming-primary text-white scale-110 shadow-lg' 
                : 'bg-slate-800 text-slate-400 group-hover:bg-slate-700'
            }`}
          >
            Q{index + 1}
          </div>
          <h4 className={`text-lg font-bold pr-4 transition-colors duration-300 ${
            isOpen ? 'text-white' : 'text-slate-300 group-hover:text-white'
          }`}>
            {question}
          </h4>
        </div>
        
        <div className={`flex-shrink-0 p-1 rounded-full transition-all duration-300 ${
          isOpen ? 'bg-gaming-primary/20 rotate-180' : 'bg-slate-800 group-hover:bg-slate-700'
        }`}>
          <ChevronDown className={`w-5 h-5 transition-colors ${
            isOpen ? 'text-gaming-primary' : 'text-slate-400 group-hover:text-white'
          }`} />
        </div>
      </button>
      
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-5 pt-0 pl-[4.5rem] pr-6 pb-6 text-slate-400 leading-relaxed border-t border-transparent">
           <div className="h-px w-full bg-slate-800/50 mb-4" />
           {answer}
        </div>
      </div>
    </div>
  );
};

export const FAQAccordion: React.FC<{ items: { question: string; answer: string }[] }> = ({ items }) => {
  return (
    <div className="max-w-3xl mx-auto flex flex-col gap-4">
      {items.map((item, idx) => (
        <FAQItem key={idx} index={idx} {...item} />
      ))}
    </div>
  );
};