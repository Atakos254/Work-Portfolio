import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  Layers, Sun, Battery, Zap, MapPin, Calendar, Building2,
  CheckCircle2, ChevronLeft, ChevronRight, Activity, Cpu, Award,
  AlertTriangle, Target, Lightbulb, Camera, Film, Play, Maximize2,
} from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectMediaModal } from '../components/projects/ProjectMediaModal';
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
  const [selectedMediaIndex, setSelectedMediaIndex] = useState<number | null>(null);

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
          <Layers size={16} /> Back to All Projects
        </Link>
      </div>
    );
  }

  const badgeClass = categoryColors[project.category] ?? 'badge-neutral';

  const specs = [
    { icon: Sun,        label: 'PV Array (DC)',          val: project.pvArray,            color: 'text-neutral-900 dark:text-white' },
    { icon: Zap,        label: 'Inverter Output (AC)',    val: project.inverterCapacity,   color: 'text-neutral-900 dark:text-white' },
    ...(project.inverterBrand ? [{ icon: Cpu, label: 'Inverter Brand', val: project.inverterBrand, color: 'text-neutral-900 dark:text-white' }] : []),
    { icon: Battery,    label: 'Battery Storage (BESS)',  val: project.batteryStorage,     color: 'text-neutral-900 dark:text-white' },
    { icon: Activity,   label: 'DC Architecture',         val: project.dcArchitecture ?? 'Standard Low-Voltage DC', color: 'text-neutral-900 dark:text-white' },
    { icon: Building2,  label: 'Employer / Contractor',   val: project.employerContractor, color: 'text-neutral-900 dark:text-white' },
  ];

  return (
    <div className="min-h-screen py-8 sm:py-16 lg:py-20 bg-white dark:bg-[#090d16] transition-colors">
      <div className="section-wrapper">
        {/* Breadcrumb */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-1.5 sm:gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-5 sm:mb-8 overflow-hidden"
          aria-label="Breadcrumb"
        >
          <Link to="/" className="hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0">Home</Link>
          <ChevronRight size={12} className="shrink-0" />
          <Link to="/projects" className="hover:text-neutral-950 dark:hover:text-white transition-colors shrink-0">Projects</Link>
          <ChevronRight size={12} className="shrink-0" />
          <span className="text-neutral-800 dark:text-neutral-200 truncate max-w-[130px] sm:max-w-xs font-medium">{project.title}</span>
        </motion.nav>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 sm:mb-10"
        >
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
            <span className={badgeClass}>{project.category}</span>
            <span
              className={clsx(
                'inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full font-medium',
                project.status === 'Completed'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800/60'
                  : project.status === 'Continuous'
                  ? 'bg-cyan-50 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/60'
                  : 'bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800/60'
              )}
            >
              <span
                className={clsx(
                  'w-1.5 h-1.5 rounded-full',
                  project.status === 'Completed'
                    ? 'bg-emerald-500'
                    : project.status === 'Continuous'
                    ? 'bg-cyan-500 animate-pulse'
                    : 'bg-amber-500 animate-pulse'
                )}
              />
              {project.status}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-neutral-950 dark:text-white leading-tight mb-2 tracking-tight">
            {project.title}
          </h1>

          {project.subtitle && (
            <p className="text-sm sm:text-lg font-medium text-emerald-600 dark:text-emerald-400 mb-4">
              {project.subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-3 sm:gap-5 text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
            <span className="flex items-center gap-1.5">
              <Building2 size={15} className="text-neutral-500 dark:text-neutral-400" /> {project.client}
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin size={15} className="text-neutral-500 dark:text-neutral-400" /> {project.location}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar size={15} className="text-neutral-500 dark:text-neutral-400" /> {project.period}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6 sm:space-y-8">
            {/* System Overview & Engineering Narrative */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              aria-labelledby="overview-heading"
              className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-7 shadow-sm space-y-6"
            >
              <div>
                <h2 id="overview-heading" className="text-lg font-bold text-neutral-950 dark:text-white mb-3 flex items-center gap-2">
                  <Activity className="w-5 h-5 text-neutral-900 dark:text-white" />
                  System Overview &amp; Engineering Narrative
                </h2>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed text-sm sm:text-base">{project.summary}</p>
              </div>

              {project.narrative && (
                <div className="pt-5 border-t border-neutral-100 dark:border-neutral-800 space-y-3">
                  {/* The Operational Challenge */}
                  <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-1.5">
                      <div className="p-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-700 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60">
                        <AlertTriangle className="w-3.5 h-3.5" />
                      </div>
                      The Operational Challenge
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {project.narrative.challenge}
                    </p>
                  </div>

                  {/* The Engineering Solution & Purpose */}
                  <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-1.5">
                      <div className="p-1 rounded-md bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/60">
                        <Lightbulb className="w-3.5 h-3.5" />
                      </div>
                      The Engineering Solution &amp; System Purpose
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {project.narrative.solution}
                    </p>
                  </div>

                  {/* Commissioned Impact & Outcomes */}
                  <div className="p-4 rounded-xl bg-neutral-50/70 dark:bg-neutral-900/60 border border-neutral-200 dark:border-neutral-800">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-neutral-900 dark:text-neutral-100 mb-1.5">
                      <div className="p-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
                        <Target className="w-3.5 h-3.5" />
                      </div>
                      Commissioned Impact &amp; Operational Value
                    </div>
                    <p className="text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                      {project.narrative.impact}
                    </p>
                  </div>
                </div>
              )}
            </motion.section>

            {/* Field Installation Photos & Video Gallery */}
            {project.media && project.media.length > 0 && (
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                aria-labelledby="media-gallery-heading"
                className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-7 shadow-sm"
              >
                <div className="flex items-center justify-between mb-5">
                  <h2 id="media-gallery-heading" className="text-lg font-bold text-neutral-950 dark:text-white flex items-center gap-2">
                    <Camera className="w-5 h-5 text-neutral-900 dark:text-white" />
                    Field Installation Photos &amp; Video
                  </h2>
                  <span className="text-xs text-neutral-500 dark:text-neutral-400 font-semibold">
                    {project.media.length} Available
                  </span>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {project.media.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => setSelectedMediaIndex(idx)}
                      className="group/item relative rounded-xl overflow-hidden bg-neutral-900 aspect-[16/10] border border-neutral-200 dark:border-neutral-800 cursor-pointer shadow-subtle hover:border-neutral-900 dark:hover:border-neutral-500 transition-all select-none"
                    >
                      {item.type === 'video' ? (
                        <div className="relative w-full h-full bg-neutral-950 flex items-center justify-center">
                          <video
                            src={encodeURI(item.url)}
                            preload="metadata"
                            muted
                            playsInline
                            className="w-full h-full object-cover pointer-events-none opacity-80 group-hover/item:opacity-100 group-hover/item:scale-105 transition-all duration-300"
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-10 h-10 rounded-full bg-neutral-950/85 border border-white/25 flex items-center justify-center text-white backdrop-blur-sm shadow-xl group-hover/item:scale-110 transition-transform">
                              <Play className="w-4 h-4 text-emerald-400 fill-emerald-400 ml-0.5" />
                            </div>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={encodeURI(item.url)}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover/item:scale-105 transition-transform duration-300"
                          onError={e => {
                            e.currentTarget.style.display = 'none';
                            const fb = e.currentTarget.parentElement?.querySelector('.detail-media-fallback');
                            if (fb) fb.classList.remove('hidden');
                          }}
                        />
                      )}
                      <div className="detail-media-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-3 text-center bg-gradient-to-br from-neutral-900 to-neutral-950 text-neutral-400">
                        {item.type === 'video' ? <Film className="w-6 h-6 text-emerald-400 mb-1" /> : <Camera className="w-6 h-6 text-neutral-300 mb-1" />}
                        <span className="text-xs font-bold text-white line-clamp-1">{item.title}</span>
                      </div>

                      {/* Badge */}
                      <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded-md bg-neutral-950/75 backdrop-blur-md border border-white/10 text-[10px] text-white font-semibold flex items-center gap-1">
                        {item.type === 'video' ? (
                          <>
                            <Play className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                            <span>Video</span>
                          </>
                        ) : (
                          <>
                            <Camera className="w-2.5 h-2.5 text-neutral-300" />
                            <span>Photo</span>
                          </>
                        )}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover/item:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-bold text-white">
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>View</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.section>
            )}

            {/* Responsibilities */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              aria-labelledby="responsibilities-heading"
              className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-7 shadow-sm"
            >
              <h2 id="responsibilities-heading" className="text-lg font-bold text-neutral-950 dark:text-white mb-5 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-neutral-900 dark:text-white" />
                Core Responsibilities &amp; Installation Scope
              </h2>
              <ul className="space-y-3">
                {project.responsibilities.map((r, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-700 dark:text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-neutral-900 dark:text-emerald-400 shrink-0 mt-0.5" />
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
              className="bg-neutral-50 dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-7 shadow-sm"
            >
              <h2 id="highlights-heading" className="text-lg font-bold text-neutral-950 dark:text-white mb-5 flex items-center gap-2">
                <Award className="w-5 h-5 text-neutral-900 dark:text-white" />
                Engineering Highlights &amp; Technical Triumphs
              </h2>
              <ul className="space-y-3">
                {project.keyHighlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-neutral-800 dark:text-neutral-200 font-medium">
                    <Zap className="w-4 h-4 text-neutral-900 dark:text-amber-400 shrink-0 mt-0.5" />
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
              <h2 id="tech-heading" className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-4">
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
            <div className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-6 shadow-sm lg:sticky lg:top-24">
              <h2 className="text-xs font-bold uppercase tracking-widest text-neutral-500 dark:text-neutral-400 mb-5">
                Technical Specifications
              </h2>
              <div className="space-y-3">
                {specs.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <div key={i} className="metric-pill flex-col items-start gap-1.5 p-3">
                      <div className="flex items-center gap-2">
                        <Icon className={`w-4 h-4 ${s.color} shrink-0`} />
                        <span className="text-[10px] text-neutral-500 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                          {s.label}
                        </span>
                      </div>
                      <span className="text-xs sm:text-sm text-neutral-900 dark:text-white font-semibold leading-snug font-mono break-all sm:break-normal">{s.val}</span>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-100 dark:border-neutral-800">
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
        <div className="flex flex-col sm:flex-row gap-4 mt-12 sm:mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
          {prev ? (
            <Link
              to={`/projects/${prev.id}`}
              aria-label={`Previous project: ${prev.title}`}
              className="flex-1 bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-neutral-900 dark:hover:border-neutral-500 transition-all group"
            >
              <div className="flex items-center gap-2 text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                <ChevronLeft size={14} />
                Previous Project
              </div>
              <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors line-clamp-2">
                {prev.title}
              </div>
            </Link>
          ) : <div className="flex-1" />}

          {next && (
            <Link
              to={`/projects/${next.id}`}
              aria-label={`Next project: ${next.title}`}
              className="flex-1 bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4 sm:p-5 shadow-sm hover:border-neutral-900 dark:hover:border-neutral-500 transition-all group text-left sm:text-right"
            >
              <div className="flex items-center justify-start sm:justify-end gap-2 text-xs text-neutral-400 dark:text-neutral-500 mb-2">
                Next Project
                <ChevronRight size={14} />
              </div>
              <div className="text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-950 dark:group-hover:text-white transition-colors line-clamp-2">
                {next.title}
              </div>
            </Link>
          )}
        </div>

        {/* Media Lightbox Modal */}
        {selectedMediaIndex !== null && (
          <ProjectMediaModal
            project={project}
            initialIndex={selectedMediaIndex}
            onClose={() => setSelectedMediaIndex(null)}
          />
        )}
      </div>
    </div>
  );
};

export default ProjectDetail;
