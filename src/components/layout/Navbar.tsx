import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Download, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
          ? 'bg-white/95 backdrop-blur-xl border-b border-neutral-200/90 shadow-sm'
          : 'bg-white/85 backdrop-blur-md border-b border-neutral-100'
      }`}
    >
      <div className="section-wrapper">
        <div className="flex items-center justify-between h-16 lg:h-18">

          {/* Logo / Name Badge */}
          <Link to="/" className="flex items-center gap-3 group" aria-label="Emmanuel Atakos — Home">
            <div className="relative flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-950 text-white shadow-sm">
              <span className="font-black text-sm tracking-tight">EA</span>
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-bold text-neutral-950 tracking-wide group-hover:text-neutral-700 transition-colors">
                EMMANUEL ATAKOS
              </div>
              <div className="text-[11px] text-neutral-500 font-medium italic">
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
                      ? 'text-neutral-950 bg-neutral-100 font-semibold'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-2.5">
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

          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => setOpen(v => !v)}
              aria-label={open ? 'Close menu' : 'Open menu'}
              className="w-9 h-9 flex items-center justify-center rounded-xl border border-neutral-200 hover:border-neutral-400 transition-colors text-neutral-900"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-b border-neutral-200 shadow-lg"
          >
            <nav className="section-wrapper py-4 flex flex-col gap-1" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  end={link.to === '/'}
                  className={({ isActive }) =>
                    `px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                      isActive
                        ? 'text-neutral-950 bg-neutral-100 font-semibold'
                        : 'text-neutral-700 hover:text-neutral-950 hover:bg-neutral-50'
                    }`
                  }
                >
                  {link.label}
                </NavLink>
              ))}
              <div className="flex gap-2 pt-3 border-t border-neutral-100 mt-2">
                <a
                  href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
                  download
                  className="btn-secondary flex-1 justify-center text-xs py-2.5"
                >
                  <Download size={14} /> Download CV
                </a>
                <Link to="/contact" className="btn-primary flex-1 justify-center text-xs py-2.5">
                  <Mail size={14} /> Get in Touch
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
