import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, MapPin, ArrowRight, Activity, Calendar } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface ProjectCardProps {
  project: ProjectItem;
  index?: number;
}

const categoryColors: Record<string, string> = {
  'C&I Solar & BESS':   'badge-neutral',
  'Utility Grid-Tied':  'badge-blue',
  'Residential Hybrid': 'badge-emerald',
  'IoT & Automation':   'badge-cyan',
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index = 0 }) => {
  const badgeClass = categoryColors[project.category] ?? 'badge-neutral';

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.07 }}
      className="group flex flex-col bg-white border border-neutral-200 rounded-2xl overflow-hidden
                 hover:border-neutral-900 transition-all duration-300 hover:shadow-card-hover
                 hover:-translate-y-1"
    >
      <div className="p-6 flex-1 flex flex-col">
        {/* Header row */}
        <div className="flex items-start justify-between gap-2 mb-3">
          <span className={clsx(badgeClass, 'text-[11px]')}>{project.category}</span>
          <span
            className={clsx(
              'text-[11px] px-2.5 py-0.5 rounded-full font-medium',
              project.status === 'Completed'
                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : 'bg-neutral-100 text-neutral-700 border border-neutral-200'
            )}
          >
            {project.status}
          </span>
        </div>

        <h3 className="text-base font-bold text-neutral-950 group-hover:text-neutral-900 transition-colors mb-1 leading-snug">
          {project.title}
        </h3>
        <p className="text-xs font-semibold text-neutral-500 mb-2">{project.client}</p>

        <div className="flex flex-wrap items-center gap-3 text-xs text-neutral-500 mb-4">
          <span className="flex items-center gap-1">
            <MapPin size={11} className="text-neutral-500 shrink-0" />
            {project.location}
          </span>
          <span className="flex items-center gap-1">
            <Calendar size={11} className="text-neutral-500 shrink-0" />
            {project.period}
          </span>
        </div>

        <p className="text-sm text-neutral-600 line-clamp-2 mb-4 leading-relaxed flex-1">
          {project.summary}
        </p>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-1 gap-2 pt-4 border-t border-neutral-100 mb-4">
          <div className="metric-pill">
            <Sun className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
            <span className="text-neutral-800 text-xs truncate font-medium">{project.pvArray}</span>
          </div>
          <div className="metric-pill">
            <Battery className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
            <span className="text-neutral-800 text-xs truncate font-medium">{project.batteryStorage}</span>
          </div>
          {project.dcArchitecture && (
            <div className="metric-pill">
              <Activity className="w-3.5 h-3.5 text-neutral-700 shrink-0" />
              <span className="text-neutral-800 text-xs truncate font-medium">{project.dcArchitecture}</span>
            </div>
          )}
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-[11px] px-2.5 py-0.5 rounded-md bg-neutral-100 text-neutral-700 border border-neutral-200 font-medium"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 rounded-md bg-neutral-50 text-neutral-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action CTA */}
        <Link
          to={`/projects/${project.id}`}
          aria-label={`View engineering specs for ${project.title}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl
                     bg-neutral-50 border border-neutral-200 text-xs font-semibold text-neutral-900
                     group-hover:bg-neutral-950 group-hover:text-white group-hover:border-neutral-950
                     transition-all duration-200"
        >
          <span>View Engineering Specs</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};
