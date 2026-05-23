'use client';

import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const NavigationBar = () => {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
    
    if (initialDark) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const newDark = !isDark;
    setIsDark(newDark);
    if (newDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    // Initial render logic remains consistent to avoid hydration mismatch
    return (
      <nav 
        aria-label="Primary Navigation"
        className="fixed top-8 left-1/2 -translate-x-1/2 w-fit min-w-[320px] max-w-[95vw] z-[999] px-8 py-3.5 flex items-center gap-12 bg-white/10 backdrop-blur-2xl border border-white/30 rounded-full shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] ring-1 ring-black/5"
      >
        <div className="flex-shrink-0">
          <span className="font-display text-xl tracking-tighter uppercase font-medium whitespace-nowrap text-ink">
            Pixel <span className="text-gold">&</span> Grid
          </span>
        </div>
      </nav>
    );
  }

  return (
    <nav aria-label="Primary Navigation" className="fixed top-8 left-1/2 -translate-x-1/2 w-fit min-w-[320px] max-w-[95vw] z-[999] px-8 py-3.5 flex items-center justify-between gap-12 bg-white/70 dark:bg-black/50 backdrop-blur-xl border border-black/5 dark:border-white/10 rounded-full shadow-[0_12px_40px_rgba(0,0,0,0.08)] dark:shadow-[0_12px_40px_rgba(0,0,0,0.4)] transition-all duration-500">
      <div className="flex-shrink-0">
        <span className="font-display text-xl tracking-tighter uppercase font-medium whitespace-nowrap text-ink">
          Pixel <span className="text-gold">&</span> Grid
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        {[
          { name: 'Studio', href: '#about' },
          { name: 'Services', href: '#services' },
          { name: 'Process', href: '#process' }
        ].map((item) => (
          <a 
            key={item.name} 
            href={item.href}
            aria-label={`Navigate to ${item.name} section`}
            className="font-mono text-[9px] uppercase tracking-[0.2em] text-ink/75 hover:text-gold transition-colors relative group whitespace-nowrap"
          >
            {item.name}
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-[1.5px] bg-gold group-hover:w-1 group-hover:h-1 group-hover:rounded-full transition-all duration-300" />
          </a>
        ))}
      </div>

      <div className="flex items-center gap-6">
        {/* Day/Night Toggle - Clean icon transition */}
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-ink/5 dark:hover:bg-paper/10 transition-all text-ink flex items-center justify-center cursor-none"
          aria-label="Toggle theme"
        >
          {isDark ? <Sun className="w-4 h-4 text-gold" /> : <Moon className="w-4 h-4 text-ink" />}
        </button>

        <div className="flex-shrink-0">
          <a 
            href="#contact"
            aria-label="Start a project enquiry"
            className="font-mono text-[9px] uppercase tracking-[0.2em] bg-ink text-paper dark:bg-paper dark:text-ink px-6 py-2.5 rounded-full hover:bg-gold hover:text-ink transition-all duration-300 whitespace-nowrap cursor-none"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
