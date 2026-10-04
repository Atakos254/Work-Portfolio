import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from '../common/ThemeToggle';
import { EngineeringLogo } from '../common/EngineeringLogo';

const navLinks = [
  { to: '/',           label: 'Home' },
  { to: '/projects',   label: 'Projects' },
  { to: '/experience', label: 'Experience' },
  { to: '/about',      label: 'Skills & Credentials' },
  { to: '/contact',    label: 'Contact' },
];

export const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 dark:bg-[#090d16]/95 backdrop-blur-xl border-b border-neutral-200/90 dark:border-neutral-800 shadow-sm'
          : 'bg-white/85 dark:bg-[#090d16]/85 backdrop-blur-md border-b border-neutral-100 dark:border-neutral-800/80'
      }`}
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo / Name Badge */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Emmanuel Atakos — Home">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-950 dark:bg-white text-white dark:text-neutral-950 shadow-sm transition-all duration-200 group-hover:scale-105">
              <EngineeringLogo className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-neutral-950 dark:text-white tracking-wide group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors">
                EMMANUEL ATAKOS
              </div>
              <div className="hidden sm:block text-[11px] text-neutral-500 dark:text-neutral-400 font-medium italic">
                “Engineers create the world that never was”
              </div>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map(link => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                    isActive
                      ? 'text-neutral-950 dark:text-white bg-neutral-100 dark:bg-neutral-800 font-semibold'
                      : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/60'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
            <ThemeToggle />
            <a
              href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
              download
              aria-label="Download Project Report PDF"
              className="btn-secondary text-xs py-2 px-3.5"
            >
              <Download size={14} />
              Download CV
            </a>
            <Link to="/contact" className="btn-primary text-xs py-2 px-4" aria-label="Get in Touch">
              <Mail size={14} />
              Get in Touch
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              aria-expanded={open}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-300 dark:border-[#334155] bg-white dark:bg-[#0f172a] text-neutral-900 dark:text-[#f8fafc] hover:bg-neutral-950 hover:text-white hover:border-neutral-950 dark:hover:bg-white dark:hover:text-[#090d16] dark:hover:border-white active:bg-neutral-900 dark:active:bg-white dark:active:text-[#090d16] transition-all cursor-pointer"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer & Backdrop */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop for tapping outside */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 top-16 bg-neutral-950/50 backdrop-blur-xs z-40 lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-down Drawer */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="relative z-50 lg:hidden overflow-hidden bg-white/98 dark:bg-[#0e1422]/98 backdrop-blur-xl border-b border-neutral-200 dark:border-neutral-800 shadow-xl"
            >
              <nav className="section-wrapper py-3.5 flex flex-col gap-1" aria-label="Mobile navigation">
                {navLinks.map(link => (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    end={link.to === '/'}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `px-4 py-3 rounded-xl text-sm font-medium transition-all flex items-center justify-between active:scale-[0.99] ${
                        isActive
                          ? 'text-neutral-950 dark:text-white bg-neutral-100 dark:bg-neutral-800/80 font-bold'
                          : 'text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800/50'
                      }`
                    }
                  >
                    <span>{link.label}</span>
                    <span className="text-xs text-neutral-400 dark:text-neutral-500 font-mono">→</span>
                  </NavLink>
                ))}
                <div className="flex gap-2 pt-3 border-t border-neutral-100 dark:border-neutral-800 mt-1">
                  <a
                    href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
                    download
                    onClick={() => setOpen(false)}
                    className="btn-secondary flex-1 justify-center text-xs py-2.5"
                  >
                    <Download size={14} /> Download CV
                  </a>
                  <Link
                    to="/contact"
                    onClick={() => setOpen(false)}
                    className="btn-primary flex-1 justify-center text-xs py-2.5"
                  >
                    <Mail size={14} /> Get in Touch
                  </Link>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};
