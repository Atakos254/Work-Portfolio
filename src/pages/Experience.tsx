import React from 'react';
import { workExperience, EmploymentType } from '../data/experience';
import { MapPin, Calendar, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const typeBadge: Record<EmploymentType, string> = {
  'Full-Time':  'badge-emerald',
  'Contract':   'badge-neutral',
  'Internship': 'badge-cyan',
  'Attachment': 'badge-blue',
};

const Experience: React.FC = () => {
  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">Career Timeline</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-3 tracking-tight">Professional Experience</h1>
          <p className="text-neutral-600 max-w-2xl text-base leading-relaxed">
            A progressive track record in solar PV engineering, industrial automation, IoT telemetry, and electrical engineering —
            from internship to senior site engineer on megawatt-scale projects.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line (Center on desktop, left on mobile) */}
          <div className="absolute left-3 lg:left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-neutral-200" />

          <div className="space-y-12">
            {workExperience.map((exp, idx) => {
              const isLeft = idx % 2 === 0;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="relative"
                >
                  {/* Center Node (Desktop) */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-7 z-10 hidden lg:flex items-center justify-center">
                    <div className="timeline-dot" />
                  </div>
                  {/* Left Node (Mobile) */}
                  <div className="absolute left-3 -translate-x-1/2 top-7 z-10 lg:hidden">
                    <div className="timeline-dot" />
                  </div>

                  {/* 2-Column Grid */}
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 pl-8 lg:pl-0 items-start">
                    {/* Left slot */}
                    {isLeft ? (
                      <div className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm hover:shadow-card-hover hover:border-neutral-900 transition-all duration-300">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className={typeBadge[exp.type]}>{exp.type}</span>
                          {exp.period.includes('Present') && (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 font-semibold">
                              Current Role
                            </span>
                          )}
                        </div>

                        <h2 className="text-lg font-bold text-neutral-950 mb-1">{exp.role}</h2>
                        <div className="text-neutral-900 font-semibold text-sm mb-3">{exp.company}</div>

                        <div className="flex flex-wrap gap-4 text-xs text-neutral-500 mb-5 font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-neutral-500" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-neutral-500" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2.5">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed">
                              <CheckCircle2 size={15} className="text-neutral-900 shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}

                    {/* Right slot */}
                    {!isLeft ? (
                      <div className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm hover:shadow-card-hover hover:border-neutral-900 transition-all duration-300">
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                          <span className={typeBadge[exp.type]}>{exp.type}</span>
                          {exp.period.includes('Present') && (
                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-neutral-100 text-neutral-800 border border-neutral-200 font-semibold">
                              Current Role
                            </span>
                          )}
                        </div>

                        <h2 className="text-lg font-bold text-neutral-950 mb-1">{exp.role}</h2>
                        <div className="text-neutral-900 font-semibold text-sm mb-3">{exp.company}</div>

                        <div className="flex flex-wrap gap-4 text-xs text-neutral-500 mb-5 font-medium">
                          <span className="flex items-center gap-1.5">
                            <Calendar size={13} className="text-neutral-500" />
                            {exp.period}
                          </span>
                          <span className="flex items-center gap-1.5">
                            <MapPin size={13} className="text-neutral-500" />
                            {exp.location}
                          </span>
                        </div>

                        <ul className="space-y-2.5">
                          {exp.bullets.map((b, bi) => (
                            <li key={bi} className="flex items-start gap-2.5 text-sm text-neutral-600 leading-relaxed">
                              <CheckCircle2 size={15} className="text-neutral-900 shrink-0 mt-0.5" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <div className="hidden lg:block" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <p className="text-slate-500 mb-5 text-sm">Want the full picture?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
              download
              className="btn-primary"
              aria-label="Download experience report"
            >
              Download Experience Report
            </a>
            <Link to="/about" className="btn-secondary">
              View Skills & Credentials
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
