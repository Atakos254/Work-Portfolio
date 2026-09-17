import React from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft, Sun, Battery, Zap, MapPin, Calendar, Building2,
  CheckCircle2, ChevronLeft, ChevronRight, Activity, Cpu, Award,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const categoryColors: Record<string, string> = {
  'C&I Solar & BESS':   'badge-neutral',
  'Utility Grid-Tied':  'badge-blue',
  'Residential Hybrid': 'badge-emerald',
  'IoT & Automation':   'badge-cyan',
};

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const index = projectsData.findIndex(p => p.id === id);
  const project = projectsData[index];
  const prev = index > 0 ? projectsData[index - 1] : null;
  const next = index < projectsData.length - 1 ? projectsData[index + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6 text-center px-4">
        <div className="text-6xl font-black text-neutral-300">404</div>
        <h1 className="text-2xl font-bold text-neutral-950">Project Not Found</h1>
        <p className="text-neutral-500">This project doesn't exist or the URL is incorrect.</p>
        <Link to="/projects" className="btn-primary">
          <ArrowLeft size={16} /> Back to All Projects
        </Link>
      </div>
    );
  }

  const badgeClass = categoryColors[project.category] ?? 'badge-neutral';

  const specs = [
    { icon: Sun,        label: 'PV Array (DC)',          val: project.pvArray,            color: 'text-neutral-900' },
    { icon: Zap,        label: 'Inverter Output (AC)',    val: project.inverterCapacity,   color: 'text-neutral-900' },
    { icon: Battery,    label: 'Battery Storage (BESS)',  val: project.batteryStorage,     color: 'text-neutral-900' },
    { icon: Activity,   label: 'DC Architecture',         val: project.dcArchitecture ?? 'Standard Low-Voltage DC', color: 'text-neutral-900' },
    { icon: Building2,  label: 'Employer / Contractor',   val: project.employerContractor, color: 'text-neutral-900' },
  ];

  return (
    <div className="min-h-screen py-16 sm:py-20 bg-white">
      <div className="section-wrapper">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs text-neutral-500 mb-8"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-neutral-950 transition-colors">Home</Link>
          <ChevronRight size={12} />
          <Link to="/projects" className="hover:text-neutral-950 transition-colors">Projects</Link>
          <ChevronRight size={12} />
          <span className="text-neutral-800 truncate max-w-xs font-medium">{project.title}</span>
        </motion.nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className={badgeClass}>{project.category}</span>
            <span
              className={clsx(
                'badge-emerald',
                project.status !== 'Completed' && 'bg-neutral-100 text-neutral-800 border-neutral-200'
              )}
            >
              {project.status}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 leading-tight mb-4 tracking-tight">
            {project.title}
          </h1>

          <div className="flex flex-wrap gap-5 text-sm text-neutral-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Building2 size={15} className="text-neutral-500" /> {project.client}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-neutral-500" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-neutral-500" /> {project.period}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* System Overview */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              aria-labelledby="overview-heading"
              className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm"
            >
              <h2 id="overview-heading" className="text-lg font-bold text-neutral-950 mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-neutral-900" />
                System Overview &amp; Engineering Narrative
              </h2>
              <p className="text-neutral-600 leading-relaxed text-sm sm:text-base">{project.summary}</p>
            </motion.section>

            {/* Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              aria-labelledby="responsibilities-heading"
              className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm"
            >
              <h2 id="responsibilities-heading" className="text-lg font-bold text-neutral-950 mb-5 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-neutral-900" />
                Core Responsibilities &amp; Installation Scope
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    {r}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Key Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              aria-labelledby="highlights-heading"
              className="bg-neutral-50 border border-neutral-200 rounded-2xl p-7 shadow-sm"
            >
              <h2 id="highlights-heading" className="text-lg font-bold text-neutral-950 mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-neutral-900" />
                Engineering Highlights &amp; Technical Triumphs
              </h2>
              <ul className="space-y-3">
                {project.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <Zap className="w-4 h-4 text-neutral-900 shrink-0 mt-0.5" />
                    {h}
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Technologies Used */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              aria-labelledby="tech-heading"
            >
              <h2 id="tech-heading" className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-4">
                Technologies &amp; Equipment
              </h2>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t, i) => (
                  <span key={i} className="skill-chip">{t}</span>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar — Technical Specs */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <div className="bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm sticky top-24">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-5">
                Technical Specifications
              </h2>
              <div className="space-y-3">
                {specs.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="metric-pill flex-col items-start gap-1.5 p-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${s.color} shrink-0`} />
                        <span className="text-[10px] text-neutral-500 uppercase tracking-wider font-semibold">
                          {s.label}
                        </span>
                      </div>
                      <span className="text-sm text-neutral-900 font-semibold leading-snug">{s.val}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100">
                <Link
                  to="/contact"
                  className="btn-primary w-full justify-center text-sm"
                  aria-label="Enquire about this project"
                >
                  <Zap size={14} />
                  Enquire About This Project
                </Link>
              </div>
            </div>
          </motion.aside>
        </div>

        {/* Prev / Next Navigation */}
        <div className="flex flex-col sm:flex-row gap-4 mt-16 pt-8 border-t border-neutral-200">
          {prev ? (
            <Link
              to={`/projects/${prev.id}`}
              aria-label={`Previous project: ${prev.title}`}
              className="flex-1 bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm hover:border-neutral-900 transition-all group"
            >
              <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                <ChevronLeft size={14} />
                Previous Project
              </div>
              <div className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors line-clamp-2">
                {prev.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {next && (
            <Link
              to={`/projects/${next.id}`}
              aria-label={`Next project: ${next.title}`}
              className="flex-1 bg-white border border-neutral-200 rounded-2xl p-5 shadow-sm hover:border-neutral-900 transition-all group text-right"
            >
              <div className="flex items-center justify-end gap-2 text-xs text-neutral-400 mb-2">
                Next Project
                <ChevronRight size={14} />
              </div>
              <div className="text-sm font-semibold text-neutral-800 group-hover:text-neutral-950 transition-colors line-clamp-2">
                {next.title}
              </div>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
