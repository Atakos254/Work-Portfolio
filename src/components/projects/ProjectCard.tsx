import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Sun, Battery, MapPin, ArrowRight, Activity, Calendar, Zap, Cpu,
  Camera, Play, Maximize2
} from 'lucide-react';
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
    clean = clean.replace(/\s+Battery$/i, '');
    return clean;
  };

  const specs = isIot
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

  const mediaList = project.media || [];
  const hasVideo = mediaList.some(m => m.type === 'video');

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
      className="group flex flex-col h-full bg-white border border-neutral-200 rounded-2xl overflow-hidden
                 hover:border-neutral-900 transition-all duration-300 hover:shadow-card-hover
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

        {/* Hover Quick-Preview Overlay */}
        <div className="absolute inset-0 bg-neutral-950/45 opacity-0 group-hover/media:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2 text-xs font-bold text-white backdrop-blur-[2px]">
          <div className="px-3.5 py-1.5 rounded-full bg-white text-neutral-950 flex items-center gap-1.5 shadow-lg transform -translate-y-1 group-hover/media:translate-y-0 transition-transform">
            {hasVideo ? <Play className="w-3.5 h-3.5 fill-neutral-950" /> : <Maximize2 className="w-3.5 h-3.5" />}
            <span>View Photos &amp; Video</span>
          </div>
        </div>
      </div>

      {/* ── Balanced Content Block ──────────────────────────────── */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        {/* Top Content (Metadata, Title, Narrative) */}
        <div>
          {/* Header Row: Client & Status */}
          <div className="flex items-center justify-between gap-2 mb-2">
            <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-500 truncate">
              {project.client}
            </span>
            <span
              className={clsx(
                'inline-flex items-center gap-1.5 text-[11px] px-2.5 py-0.5 rounded-full font-medium shrink-0',
                project.status === 'Completed'
                  ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                  : 'bg-amber-50 text-amber-700 border border-amber-200'
              )}
            >
              <span
                className={clsx(
                  'w-1.5 h-1.5 rounded-full',
                  project.status === 'Completed' ? 'bg-emerald-500' : 'bg-amber-500 animate-pulse'
                )}
              />
              {project.status}
            </span>
          </div>

          {/* Title - locked to 2 lines height with vertical centering */}
          <h3 className="text-base font-bold text-neutral-950 group-hover:text-neutral-700 transition-colors mb-2 leading-snug line-clamp-2 h-[2.75rem] flex items-center">
            {project.title}
          </h3>

          {/* Location & Period - clean single line */}
          <div className="flex items-center gap-2 text-xs text-neutral-500 mb-3 h-4 truncate">
            <span className="inline-flex items-center gap-1 truncate">
              <MapPin size={12} className="text-neutral-400 shrink-0" />
              <span className="truncate">{project.location}</span>
            </span>
            <span className="text-neutral-300">•</span>
            <span className="inline-flex items-center gap-1 shrink-0">
              <Calendar size={12} className="text-neutral-400 shrink-0" />
              <span>{project.period}</span>
            </span>
          </div>

          {/* Summary Narrative - locked to 2 clean lines */}
          <p className="text-xs text-neutral-600 line-clamp-2 mb-3.5 leading-relaxed h-[2.25rem] overflow-hidden">
            {project.summary}
          </p>
        </div>

        {/* Bottom Content (Specs Panel, Tech Tags, Action CTAs) */}
        <div className="mt-auto">
          {/* Structured Key Technical Specs Box */}
          <div className="bg-neutral-50/90 rounded-xl border border-neutral-200/80 p-2.5 mb-3.5 divide-y divide-neutral-200/60">
            {specs.map((spec, i) => {
              const Icon = spec.icon;
              return (
                <div key={i} className="flex items-center justify-between gap-2 py-1.5 first:pt-0 last:pb-0 text-xs">
                  <div className="flex items-center gap-1.5 text-neutral-500 font-medium shrink-0">
                    <Icon className="w-3.5 h-3.5 text-neutral-600 shrink-0" />
                    <span className="text-[11px]">{spec.label}</span>
                  </div>
                  <span
                    className="text-neutral-900 font-semibold text-xs truncate text-right font-mono"
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
                className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200 font-medium truncate max-w-[130px]"
              >
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-neutral-50 text-neutral-400 shrink-0 font-medium">
                +{project.technologies.length - 3}
              </span>
            )}
          </div>

          {/* Action CTAs: Balanced Twin Buttons */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleMediaClick}
              aria-label={`View photos and video for ${project.title}`}
              className="group/media-btn flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl
                         bg-white border border-neutral-300 text-xs font-semibold text-neutral-800
                         hover:bg-neutral-950 hover:text-white hover:border-neutral-950
                         active:bg-neutral-900 active:text-white active:border-neutral-900
                         transition-all duration-200 h-9 shadow-xs"
            >
              <Camera className="w-3.5 h-3.5 text-neutral-500 group-hover/media-btn:text-white group-active/media-btn:text-white transition-colors" />
              <span>Media</span>
            </button>
            <Link
              to={`/projects/${project.id}`}
              aria-label={`View engineering specs for ${project.title}`}
              className="group/specs-btn flex-1 inline-flex items-center justify-center gap-2 px-3.5 py-2 rounded-xl
                         bg-white border border-neutral-300 text-xs font-semibold text-neutral-900
                         hover:bg-neutral-950 hover:text-white hover:border-neutral-950
                         active:bg-neutral-900 active:text-white active:border-neutral-900
                         transition-all duration-200 h-9 shadow-xs"
            >
              <span>View Specs</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-500 group-hover/specs-btn:text-white group-hover/specs-btn:translate-x-1 group-active/specs-btn:text-white transition-all" />
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};


