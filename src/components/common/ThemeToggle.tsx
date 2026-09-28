import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export const ThemeToggle: React.FC<{ className?: string }> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      type="button"
      id="theme-toggle"
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`relative group inline-flex items-center justify-center w-9 h-9 rounded-xl border border-neutral-300 dark:border-[#334155] bg-white dark:bg-[#0f172a] text-neutral-800 dark:text-[#f8fafc] hover:bg-neutral-950 hover:text-white hover:border-neutral-950 dark:hover:bg-white dark:hover:text-[#090d16] dark:hover:border-white active:bg-neutral-900 dark:active:bg-white dark:active:text-[#090d16] hover:shadow-sm active:scale-95 transition-all duration-200 cursor-pointer ${className}`}
    >
      {theme === 'dark' ? (
        <Sun size={17} className="text-amber-400 group-hover:text-[#090d16] group-active:text-[#090d16] transition-colors duration-200" />
      ) : (
        <Moon size={17} className="text-neutral-700 group-hover:text-white transition-colors duration-200" />
      )}
    </button>
  );
};
