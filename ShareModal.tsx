import React, { useState, useEffect } from 'react';
import { X, Copy, Check, Facebook, Twitter, Linkedin, MessageCircle, Share2 } from 'lucide-react';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
  url?: string;
  title?: string;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  isOpen,
  onClose,
  url = typeof window !== 'undefined' ? window.location.href : '',
  title = document.title
}) => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) setCopied(false);
  }, [isOpen]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-gaming-card border border-slate-700 rounded-2xl p-6 w-full max-w-md shadow-2xl transform transition-all scale-100 opacity-100 animate-in fade-in zoom-in duration-200">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors bg-slate-800/50 p-1 rounded-full hover:bg-slate-700"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
          <Share2 className="w-5 h-5 text-gaming-primary" />
          Share Guide
        </h3>
        <p className="text-slate-400 text-sm mb-6">
          Share this Free Fire Advance Server guide with your friends.
        </p>

        {/* Copy Link Section */}
        <div className="flex items-center gap-2 mb-6 bg-gaming-darker p-1.5 rounded-lg border border-slate-700 focus-within:border-gaming-primary/50 transition-colors">
          <input 
            type="text" 
            value={url} 
            readOnly 
            className="bg-transparent border-none text-slate-300 text-sm flex-1 px-3 focus:outline-none truncate"
          />
          <button
            onClick={handleCopy}
            className={`flex items-center gap-2 px-4 py-2 rounded-md text-sm font-bold transition-all ${
              copied 
                ? 'bg-green-500/20 text-green-400' 
                : 'bg-gaming-primary hover:bg-gaming-primaryHover text-white shadow-lg shadow-gaming-primary/20'
            }`}
          >
            {copied ? <><Check className="w-4 h-4" /> Copied</> : <><Copy className="w-4 h-4" /> Copy</>}
          </button>
        </div>

        {/* Social Share Buttons */}
        <div className="grid grid-cols-4 gap-4">
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#1877F2]/10 flex items-center justify-center text-[#1877F2] group-hover:bg-[#1877F2] group-hover:text-white transition-all border border-[#1877F2]/20 group-hover:scale-110">
              <Facebook className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-medium">Facebook</span>
          </a>
          
          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-500 group-hover:bg-sky-500 group-hover:text-white transition-all border border-sky-500/20 group-hover:scale-110">
              <Twitter className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-medium">Twitter</span>
          </a>

          <a
            href={`https://api.whatsapp.com/send?text=${encodeURIComponent(title + ' ' + url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:bg-[#25D366] group-hover:text-white transition-all border border-[#25D366]/20 group-hover:scale-110">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-medium">WhatsApp</span>
          </a>
           
           <a
            href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 group"
          >
            <div className="w-12 h-12 rounded-full bg-[#0A66C2]/10 flex items-center justify-center text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-all border border-[#0A66C2]/20 group-hover:scale-110">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-xs text-slate-400 group-hover:text-white transition-colors font-medium">LinkedIn</span>
          </a>
        </div>
      </div>
    </div>
  );
};