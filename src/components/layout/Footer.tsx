import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Zap, ExternalLink } from 'lucide-react';
import { profileData } from '../../data/profile';

const footerLinks = [
  { label: 'Home',                 to: '/' },
  { label: 'Projects',             to: '/projects' },
  { label: 'Experience',           to: '/experience' },
  { label: 'Skills & Credentials', to: '/about' },
  { label: 'Contact',              to: '/contact' },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/70 mt-24">
      <div className="section-wrapper py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-xl bg-neutral-950 flex items-center justify-center shadow-sm">
                <span className="text-white font-black text-sm">EA</span>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-950">EMMANUEL ATAKOS</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Solar PV &amp; IoT Engineer</div>
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge-neutral">EBK Reg: B25236</span>
              <span className="badge-neutral">IEK Graduate</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">Quick Links</h3>
            <ul className="space-y-2.5">
              {footerLinks.map(link => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-1.5 font-medium"
                  >
                    <Zap size={11} className="text-neutral-400" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">Contact</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profileData.contact.email}`}
                  className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
                  aria-label="Send email to Emmanuel"
                >
                  <Mail size={14} className="text-neutral-500 shrink-0" />
                  {profileData.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${profileData.contact.phone}`}
                  className="flex items-center gap-2.5 text-sm text-neutral-600 hover:text-neutral-950 transition-colors font-medium"
                  aria-label="Call Emmanuel"
                >
                  <Phone size={14} className="text-neutral-500 shrink-0" />
                  {profileData.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm text-neutral-600 font-medium">
                <MapPin size={14} className="text-neutral-500 shrink-0" />
                {profileData.contact.location}
              </li>
            </ul>
            <div className="flex gap-2 mt-5 flex-wrap">
              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emmanuel's LinkedIn profile"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-neutral-600
                             hover:border-neutral-900 hover:text-neutral-950 bg-white shadow-subtle transition-all font-medium"
                >
                  <ExternalLink size={12} /> LinkedIn
                </a>
              )}
              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emmanuel's GitHub profile"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-neutral-200 text-xs text-neutral-600
                             hover:border-neutral-900 hover:text-neutral-950 bg-white shadow-subtle transition-all font-medium"
                >
                  <ExternalLink size={12} /> GitHub
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-neutral-200 mt-12 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-500 font-medium">
          <p>© {year} Emmanuel Thomas Atakos. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <Zap size={10} className="text-neutral-400" />
            EBK Registration No. B25236 · IEK Graduate Engineer Member
          </p>
        </div>
      </div>
    </footer>
  );
};
