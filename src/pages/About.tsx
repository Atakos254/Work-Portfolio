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
          <h2 id="skills-heading" className="text-2xl font-black text-neutral-950 mb-8 flex items-center gap-2.5 tracking-tight">
            <Cpu className="text-neutral-900 w-6 h-6" />
            Technical Competencies Matrix
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((cat, ci) => {
              const Icon = iconMap[cat.icon] ?? Zap;
              return (
                <motion.div
                  key={ci}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: ci * 0.1 }}
                  className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2.5 rounded-xl border bg-neutral-100 border-neutral-200">
                      <Icon className="w-5 h-5 text-neutral-900" />
                    </div>
                    <h3 className="text-base font-bold text-neutral-950">{cat.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <span key={si} className="skill-chip">{skill}</span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Downloads */}
        <section aria-labelledby="downloads-heading" className="bg-neutral-50 border border-neutral-200 rounded-2xl p-8 shadow-sm">
          <h2 id="downloads-heading" className="text-lg font-bold text-neutral-950 mb-5 flex items-center gap-2">
            <Download className="text-neutral-900 w-5 h-5" />
            Downloadable Documents
          </h2>
          <div className="flex flex-wrap gap-3">
            <a
              href="/docs/Emmanuel_Atakos_CV.pdf"
              download
              aria-label="Download Emmanuel's CV / Resume PDF"
              className="btn-primary"
            >
              <Download size={15} />
              Download CV / Resume
            </a>
            <a
              href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
              download
              aria-label="Download Solar PV Project Experience Report PDF"
              className="btn-secondary"
            >
              <Download size={15} />
              Project Experience Report
            </a>
            {profileData.contact.linkedin && (
              <a
                href={profileData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn profile"
                className="btn-secondary"
              >
                <ExternalLink size={15} />
                LinkedIn Profile
              </a>
            )}
            {profileData.contact.github && (
              <a
                href={profileData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub profile"
                className="btn-secondary"
              >
                <ExternalLink size={15} />
                GitHub Profile
              </a>
            )}
          </div>
          <p className="text-xs text-neutral-500 mt-4 font-medium">
            Drop the PDF files into <code className="text-neutral-800 bg-neutral-200 px-1.5 py-0.5 rounded font-mono">/public/docs/</code> folder in the project directory.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;
