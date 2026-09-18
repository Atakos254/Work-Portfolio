import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ExternalLink, Home, Layers, Briefcase, Award, Zap } from 'lucide-react';
import { profileData } from '../../data/profile';

const footerLinks = [
  { label: 'Home',                 to: '/',           icon: Home },
  { label: 'Projects',             to: '/projects',   icon: Layers },
  { label: 'Experience',           to: '/experience', icon: Briefcase },
  { label: 'Skills & Credentials', to: '/about',      icon: Award },
  { label: 'Contact',              to: '/contact',    icon: Mail },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50/70 mt-24">
      <div className="section-wrapper py-14">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 lg:gap-14">

          {/* Brand & Credentials */}
          <div className="md:max-w-sm lg:max-w-md">
            <div className="flex items-center gap-3 mb-4 h-9">
              <div className="w-9 h-9 rounded-xl bg-neutral-950 flex items-center justify-center shadow-sm shrink-0">
                <span className="text-white font-black text-sm">EA</span>
              </div>
              <div>
                <div className="text-sm font-bold text-neutral-950 tracking-tight">EMMANUEL ATAKOS</div>
                <div className="text-[10px] text-neutral-500 uppercase tracking-widest font-semibold">Solar PV &amp; Electrical Engineer</div>
              </div>
            </div>
            <p className="text-neutral-600 text-sm leading-relaxed mb-4 max-w-sm">
              {profileData.tagline}
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="badge-neutral">EBK Reg: B25236</span>
              <span className="badge-neutral">IEK Graduate Member</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="h-9 flex items-center mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Quick Links</h3>
            </div>
            <ul className="space-y-3">
              {footerLinks.map(link => {
                const Icon = link.icon;
                return (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className="text-sm text-neutral-600 hover:text-neutral-950 transition-colors flex items-center gap-2.5 font-medium group"
                    >
                      <Icon size={14} className="text-neutral-400 group-hover:text-neutral-950 transition-colors shrink-0" />
                      <span>{link.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <div className="h-9 flex items-center mb-4">
              <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-500">Contact</h3>
            </div>
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
            <div className="flex gap-2.5 mt-5 flex-wrap">
              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emmanuel's LinkedIn profile"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-800
                             hover:bg-neutral-950 hover:text-white hover:border-neutral-950
                             shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <svg className="w-3.5 h-3.5 fill-neutral-900 group-hover:fill-white transition-colors shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ExternalLink size={11} className="text-neutral-400 group-hover:text-white/80 transition-colors shrink-0" />
                </a>
              )}
              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emmanuel's GitHub profile"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-neutral-300 bg-white text-xs font-semibold text-neutral-800
                             hover:bg-neutral-950 hover:text-white hover:border-neutral-950
                             shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <svg className="w-3.5 h-3.5 fill-neutral-900 group-hover:fill-white transition-colors shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                  <ExternalLink size={11} className="text-neutral-400 group-hover:text-white/80 transition-colors shrink-0" />
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
