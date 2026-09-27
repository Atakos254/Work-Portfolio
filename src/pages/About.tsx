import React from 'react';
import { profileData } from '../data/profile';
import { skillCategories } from '../data/skills';
import {
  Award, GraduationCap, ShieldCheck, Sun, Zap, Cpu, Download, ExternalLink,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const iconMap: Record<string, React.ElementType> = {
  Sun, Zap, Cpu, ShieldCheck,
};

const credentials = [
  {
    title: 'Engineers Board of Kenya (EBK)',
    detail: 'Graduate Engineer Registration No. B25236',
    icon: Award,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
  },
  {
    title: 'Institution of Engineers of Kenya (IEK)',
    detail: 'Graduate Engineer Member',
    icon: ShieldCheck,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
  },
  {
    title: 'JKUAT — B.Sc. Electrical & Electronics Engineering',
    detail: 'Jomo Kenyatta University of Agriculture & Technology',
    icon: GraduationCap,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
  },
  {
    title: 'ALX Africa — Data Science Program',
    detail: 'Machine Learning, Python, Predictive Analytics',
    icon: Cpu,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
  },
  {
    title: 'Project Management Institute (PMI)',
    detail: 'PMP Candidate — PMI Methodologies',
    icon: Zap,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
  },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-14 sm:mb-16">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">About</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-3 tracking-tight">Skills &amp; Credentials</h1>
          <p className="text-neutral-600 max-w-2xl text-base leading-relaxed">
            Professional registrations, academic credentials, and a deep technical competency matrix spanning
            solar PV engineering, BESS architecture, embedded IoT, and data analytics.
          </p>
        </div>

        {/* Bio */}
        <div className="bg-white border border-neutral-200 rounded-2xl p-8 mb-12 shadow-sm">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h2 className="text-xl font-bold text-neutral-950 mb-4">Engineering Philosophy</h2>
              <p className="text-neutral-600 leading-relaxed mb-4 text-sm sm:text-base">
                {profileData.summary}
              </p>
              <p className="text-neutral-500 leading-relaxed text-sm">
                I believe in engineering solutions that are not just technically sound but practically reliable
                under real-world conditions — from coastal saline environments to high-altitude UV exposure and
                urban grid instability. Every system I commission is designed to operate with zero-compromise
                safety, maximum efficiency, and long-term maintainability.
              </p>
            </div>
            <div className="space-y-3">
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-950 font-mono">{profileData.metrics.totalSolarCapacityMWp}</div>
                <div className="text-xs text-neutral-500 mt-1 font-medium">Solar PV Installed</div>
              </div>
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-950 font-mono">{profileData.metrics.totalBatteryStorageKWh}</div>
                <div className="text-xs text-neutral-500 mt-1 font-medium">LiFePO4 Storage Deployed</div>
              </div>
              <div className="bg-neutral-50 p-4 rounded-xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-950 font-mono">{profileData.metrics.iotGatewaysDeployed}</div>
                <div className="text-xs text-neutral-500 mt-1 font-medium">IoT Telemetry Nodes</div>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials */}
        <section aria-labelledby="credentials-heading" className="mb-16">
          <h2 id="credentials-heading" className="text-2xl font-black text-neutral-950 mb-8 flex items-center gap-2.5 tracking-tight">
            <Award className="text-neutral-900 w-6 h-6" />
            Professional Registrations &amp; Credentials
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {credentials.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm hover:shadow-card-hover hover:border-neutral-900 transition-all"
                >
                  <div className={clsx('inline-flex p-2.5 rounded-xl border mb-4', c.bg)}>
                    <Icon className={clsx('w-5 h-5', c.color)} />
                  </div>
                  <div className="text-sm font-bold text-neutral-950 mb-1">{c.title}</div>
                  <div className="text-xs text-neutral-500 leading-relaxed font-medium">{c.detail}</div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Skills Matrix */}
        <section aria-labelledby="skills-heading" className="mb-16">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 mb-8">
            <div>
              <h2 id="skills-heading" className="text-2xl font-black text-neutral-950 flex items-center gap-2.5 tracking-tight">
                <Cpu className="text-neutral-900 w-6 h-6" />
                Technical Competencies Matrix
              </h2>
              <p className="text-sm text-neutral-500 mt-1">
                Comprehensive engineering capabilities grouped across core functional disciplines.
              </p>
            </div>
            <div className="text-xs font-semibold text-neutral-500 bg-neutral-100 border border-neutral-200 px-3 py-1.5 rounded-lg self-start sm:self-auto">
              {skillCategories.length} Domains &bull; {skillCategories.reduce((acc, c) => acc + c.skills.length, 0)} Core Competencies
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6 items-stretch">
            {skillCategories.map((cat, ci) => {
              const Icon = iconMap[cat.icon] ?? Zap;
              return (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: ci * 0.1 }}
                  className="bg-white border border-neutral-200 rounded-2xl p-6 sm:p-7 shadow-sm hover:border-neutral-400 hover:shadow-md transition-all flex flex-col h-full"
                >
                  <div className="flex items-center justify-between gap-3 mb-5 pb-4 border-b border-neutral-100">
                    <div className="flex items-center gap-3">
                      <div className="p-2.5 rounded-xl border bg-neutral-50 border-neutral-200">
                        <Icon className="w-5 h-5 text-neutral-900" />
                      </div>
                      <h3 className="text-base font-bold text-neutral-950">{cat.category}</h3>
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 border border-neutral-200 px-2 py-0.5 rounded-md whitespace-nowrap">
                      {cat.skills.length} skills
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 content-start flex-1">
                    {cat.skills.map((skill, si) => (
                      <span key={si} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Downloads & Online Profiles */}
        <section aria-labelledby="downloads-heading" className="bg-neutral-50 border border-neutral-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h2 id="downloads-heading" className="text-lg font-bold text-neutral-950 mb-1 flex items-center gap-2">
                <Download className="text-neutral-900 w-5 h-5" />
                Downloadable Documents &amp; Online Profiles
              </h2>
              <p className="text-xs sm:text-sm text-neutral-500">
                Official CV, project experience reports, and professional profiles.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="/docs/Emmanuel_Atakos_CV.pdf"
                download
                aria-label="Download Emmanuel's CV / Resume PDF"
                className="btn-primary"
              >
                <Download size={15} />
                <span>CV / Resume</span>
              </a>
              <a
                href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
                download
                aria-label="Download Solar PV Project Experience Report PDF"
                className="btn-secondary"
              >
                <Download size={15} />
                <span>Project Experience Report</span>
              </a>

              {profileData.contact.linkedin && (
                <a
                  href={profileData.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emmanuel's LinkedIn profile"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm font-semibold text-neutral-800
                             hover:bg-neutral-950 hover:text-white hover:border-neutral-950
                             shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-neutral-900 group-hover:fill-white transition-colors shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ExternalLink size={12} className="text-neutral-400 group-hover:text-white/80 transition-colors shrink-0" />
                </a>
              )}
              {profileData.contact.github && (
                <a
                  href={profileData.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Emmanuel's GitHub profile"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-neutral-300 bg-white text-sm font-semibold text-neutral-800
                             hover:bg-neutral-950 hover:text-white hover:border-neutral-950
                             shadow-sm hover:shadow-md hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 group"
                >
                  <svg className="w-4 h-4 fill-neutral-900 group-hover:fill-white transition-colors shrink-0" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                  </svg>
                  <span>GitHub</span>
                  <ExternalLink size={12} className="text-neutral-400 group-hover:text-white/80 transition-colors shrink-0" />
                </a>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
