import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sun, Battery, MapPin, FileText, Activity, Calendar, Zap, Cpu,
  Camera, Film
} from 'lucide-react';
import { GithubIcon } from '../common/GithubIcon';
import { ProjectItem } from '../../data/projects';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
  onOpenMedia?: (project: ProjectItem) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0, onOpenMedia }) => {
  const navigate = useNavigate();

  // Determine exactly 3 balanced, concise technical specs for every project
  const isIot = project.category === 'IoT & Automation';
  const isGridTiedNoStorage = project.category === 'Utility Grid-Tied' && project.dcArchitecture;

  const formatBriefSpec = (val: string): string => {
    if (!val) return '';
    let clean = val.includes('(') ? val.split('(')[0].trim() : val.trim();
    clean = clean.replace(/^(None\s*)$/i, 'Grid-Tied');
    clean = clean.replace(/1,500 VDC High-Voltage DC Bus/i, '1,500 VDC Bus');
    clean = clean.replace(/Sub-Station Meter Network & Telemetry Ingestion/i, 'Sub-Station Meter Net');
    clean = clean.replace(/Multi-Point Power Monitoring/i, 'Smart Meters (Modbus)');
    clean = clean.replace(/Real-Time Cloud Dashboards & Analytics/i, 'Cloud Dashboards');
    clean = clean.replace(/Station Power Coupling Subsystem/i, 'Power Coupling');
    clean = clean.replace(/AC & DC EV Fast-Charger Coupling/i, 'AC & DC Fast Chargers');
    clean = clean.replace(/Bidirectional MQTT Cloud Telemetry & NVS/i, 'MQTT Telemetry');
    clean = clean.replace(/Demand Profiling & Logging/i, 'Demand Profiling');
    clean = clean.replace(/Capacity Sizing Models/i, 'Capacity Sizing');
    clean = clean.replace(/Phase Balancing & Harmonics/i, 'Phase Balancing');
    clean = clean.replace(/\s+Battery$/i, '');
    return clean;
  };

  const isPowerAnalysis = project.id === 'power-analysis-dynamic-load-calculations';

  const specs = isPowerAnalysis
    ? [
        { label: 'Profiling', icon: Activity, brief: formatBriefSpec(project.pvArray),          fullText: project.pvArray },
        { label: 'Sizing',    icon: Zap,      brief: formatBriefSpec(project.inverterCapacity), fullText: project.inverterCapacity },
        { label: 'Quality',   icon: Cpu,      brief: formatBriefSpec(project.batteryStorage),   fullText: project.batteryStorage },
      ]
    : isIot
    ? [
        { label: 'System',    icon: Activity, brief: formatBriefSpec(project.pvArray),          fullText: project.pvArray },
        { label: 'Hardware',  icon: Cpu,      brief: formatBriefSpec(project.inverterCapacity), fullText: project.inverterCapacity },
        { label: 'Telemetry', icon: Zap,      brief: formatBriefSpec(project.batteryStorage),   fullText: project.batteryStorage },
      ]
    : [
        { label: 'Solar PV',  icon: Sun,      brief: formatBriefSpec(project.pvArray),          fullText: project.pvArray },
        { label: 'Inverter',  icon: Zap,      brief: formatBriefSpec(project.inverterCapacity), fullText: project.inverterCapacity },
        {
          label: isGridTiedNoStorage ? 'DC Bus' : 'Storage',
          icon: isGridTiedNoStorage ? Activity : Battery,
          brief: formatBriefSpec(isGridTiedNoStorage ? project.dcArchitecture! : project.batteryStorage),
          fullText: isGridTiedNoStorage ? project.dcArchitecture! : project.batteryStorage,
        },
      ];


  const handleMediaClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onOpenMedia) {
      onOpenMedia(project);
    } else {
      navigate(`/projects/${project.id}`);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="group flex flex-col h-full bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl overflow-hidden
                 hover:border-neutral-900 dark:hover:border-neutral-500 transition-all duration-300 hover:shadow-card-hover
                 hover:-translate-y-1"
    >
      {/* ── Visual Media Header (16:9 standard ratio) ──────────── */}
      <div
        onClick={handleMediaClick}
        className="relative aspect-video w-full bg-neutral-950 overflow-hidden cursor-pointer group/media select-none shrink-0"
      >
        {/* Cover Photo */}
        <img
          src={project.coverImage || project.imagePlaceholder}
          alt={project.title}
          style={project.coverImagePosition ? { objectPosition: project.coverImagePosition } : undefined}
          className="w-full h-full object-cover group-hover/media:scale-105 transition-transform duration-500"
          onError={e => {
            e.currentTarget.style.display = 'none';
            const fb = e.currentTarget.parentElement?.querySelector('.card-fallback');
            if (fb) fb.classList.remove('hidden');
          }}
        />

        {/* Blueprint / Schematic Fallback Graphic */}
        <div className="card-fallback hidden absolute inset-0 flex flex-col items-center justify-center p-4 text-center bg-gradient-to-br from-neutral-900 via-neutral-850 to-neutral-950 text-white">
          <div className="p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-2 group-hover/media:scale-110 transition-transform">
            {isIot ? <Cpu className="w-5 h-5 text-cyan-400" /> : <Sun className="w-5 h-5 text-amber-400" />}
          </div>
          <span className="text-xs font-bold text-neutral-200 line-clamp-1">{project.client}</span>
          <span className="text-[11px] text-neutral-400 font-mono mt-0.5">{project.category}</span>
        </div>

        {/* Top Category Badge Overlay */}
        <div className="absolute top-3 left-3 pointer-events-none">
          <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold tracking-wide backdrop-blur-md bg-neutral-950/75 text-white border border-white/15 shadow-sm">
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Balanced Content Block ──────────────────────────────── */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        {/* Top Content (Metadata, Title, Narrative) */}
        <div>
          {/* Header Row: Client & Status */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 dark:text-neutral-400 truncate">
              {project.client}
            </span>
            <span
              className={clsx(
                'inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full font-medium shrink-0',
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

          {/* Title - locked to 2 lines height with vertical centering */}
          <h3 className="text-base font-bold text-neutral-950 dark:text-white group-hover:text-neutral-700 dark:group-hover:text-neutral-300 transition-colors mb-2 leading-snug line-clamp-2 min-h-[2.5rem] sm:min-h-[2.75rem] flex items-center">
            {project.title}
          </h3>

          {/* Location & Period - clean single line */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 dark:text-neutral-400 mb-3 h-4 truncate">
            <span className="inline-flex items-center gap-1 truncate">
              <MapPin size={12} className="text-neutral-400 dark:text-neutral-500 shrink-0" />
              <span className="truncate">{project.location}</span>
            </span>
            <span className="text-neutral-300 dark:text-neutral-600">•</span>
            <span className="inline-flex items-center gap-1 shrink-0">
              <Calendar size={12} className="text-neutral-400 dark:text-neutral-500 shrink-0" />
              <span>{project.period}</span>
            </span>
          </div>

          {/* Summary Narrative - locked to 2 clean lines */}
          <p className="text-xs text-neutral-600 dark:text-neutral-300 line-clamp-2 mb-3.5 leading-relaxed h-[2.25rem] overflow-hidden">
            {project.summary}
          </p>
        </div>

        {/* Bottom Content (Specs Panel, Tech Tags, Action CTAs) */}
        <div className="mt-auto">
          {/* Structured Key Technical Specs Box */}
          <div className="bg-neutral-50/90 dark:bg-neutral-900/80 rounded-xl border border-neutral-200/80 dark:border-neutral-800 p-2.5 mb-3.5 divide-y divide-neutral-200/60 dark:divide-neutral-800">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="flex items-center justify-between gap-2 py-1.5 first:pt-0 last:pb-0 text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-medium shrink-0">
                    <Icon className="w-3.5 h-3.5 text-neutral-600 dark:text-neutral-400 shrink-0" />
                    <span className="text-[11px]">{spec.label}</span>
                  </div>
                  <span
                    className="text-neutral-900 dark:text-white font-semibold text-xs truncate text-right font-mono"
                    title={spec.fullText}
                  >
                    {spec.brief}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Technology Tags - clean uniform row */}
          <div className="flex items-center gap-1.5 mb-3.5 h-6 overflow-hidden">
            {project.technologies.slice(0, 3).map((tech, i) => (
              <span
                key={i}
                className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 font-medium truncate max-w-[130px]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-neutral-50 dark:bg-neutral-800/60 text-neutral-400 dark:text-neutral-400 shrink-0 font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action CTAs: Balanced Twin Buttons + Optional GitHub Link */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleMediaClick}
              aria-label={`View photos and video for ${project.title}`}
              className="btn-secondary flex-1 text-xs h-9 py-0 px-2 sm:px-3.5 group/media-btn"
            >
              {project.media?.some(m => m.type === 'video') ? (
                <Film className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover/media-btn:text-white dark:group-hover/media-btn:text-[#090d16] group-active/media-btn:text-white dark:group-active/media-btn:text-[#090d16] transition-colors" />
              ) : (
                <Camera className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover/media-btn:text-white dark:group-hover/media-btn:text-[#090d16] group-active/media-btn:text-white dark:group-active/media-btn:text-[#090d16] transition-colors" />
              )}
              <span>Media</span>
            </button>
            <Link
              to={`/projects/${project.id}`}
              aria-label={`View engineering specs for ${project.title}`}
              className="btn-primary flex-1 text-xs h-9 py-0 px-2 sm:px-3.5 group/specs-btn"
            >
              <FileText className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover/specs-btn:text-white dark:group-hover/specs-btn:text-[#090d16] group-active/specs-btn:text-white dark:group-active/specs-btn:text-[#090d16] transition-colors" />
              <span>View Specs</span>
            </Link>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                title="View GitHub Repository"
                aria-label={`View ${project.title} on GitHub`}
                className="btn-secondary h-9 w-9 p-0 flex items-center justify-center shrink-0 text-neutral-600 dark:text-neutral-300 hover:text-white dark:hover:text-[#090d16] hover:bg-neutral-900 dark:hover:bg-white transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};


