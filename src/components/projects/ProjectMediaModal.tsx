import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Camera, Film, ExternalLink, Image as ImageIcon } from 'lucide-react';
import { ProjectItem } from '../../data/projects';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectMediaModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  initialIndex?: number;
}

export const ProjectMediaModal: React.FC<ProjectMediaModalProps> = ({
  project,
  onClose,
  initialIndex = 0,
}) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  useEffect(() => {
    setActiveIndex(initialIndex);
  }, [initialIndex, project]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight' && project?.media && project.media.length > 1) {
        setActiveIndex(prev => (prev + 1) % project.media!.length);
      }
      if (e.key === 'ArrowLeft' && project?.media && project.media.length > 1) {
        setActiveIndex(prev => (prev - 1 + project.media!.length) % project.media!.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, project]);

  if (!project) return null;

  const mediaList = project.media && project.media.length > 0
    ? project.media
    : [
        {
          type: 'image' as const,
          url: project.coverImage || project.imagePlaceholder,
          title: `${project.title} — Overview`,
          caption: `${project.pvArray} | ${project.inverterCapacity}`,
        },
      ];

  const currentMedia = mediaList[activeIndex] || mediaList[0];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-neutral-950/85 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-neutral-800 bg-neutral-900/90 text-white">
            <div className="flex items-center gap-3 pr-4 truncate">
              <span className="text-xs px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 font-semibold shrink-0">
                {project.category}
              </span>
              <h3 className="text-sm sm:text-base font-bold text-white truncate">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <Link
                to={`/projects/${project.id}`}
                onClick={onClose}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-800 hover:bg-neutral-700 border border-neutral-700 text-xs font-semibold text-neutral-200 transition-colors"
              >
                <span>Full Case Study</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-2 rounded-xl bg-neutral-800/80 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Main Media Viewer Stage */}
          <div className="relative flex-1 bg-black flex items-center justify-center min-h-[260px] sm:min-h-[420px] max-h-[62vh] overflow-hidden group">
            {currentMedia.type === 'video' ? (
              <video
                key={currentMedia.url}
                src={currentMedia.url}
                controls
                autoPlay
                playsInline
                className="w-full h-full max-h-[60vh] object-contain"
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  key={currentMedia.url}
                  src={currentMedia.url}
                  alt={currentMedia.title}
                  className="w-full h-full max-h-[60vh] object-contain"
                  onError={e => {
                    // Fallback graphic if physical photo file is not yet dropped into disk folder
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.parentElement?.querySelector('.modal-fallback');
                    if (fb) fb.classList.remove('hidden');
                  }}
                />
                <div className="modal-fallback hidden flex flex-col items-center justify-center p-8 text-center text-neutral-400">
                  <div className="p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 mb-3 text-neutral-300">
                    <ImageIcon className="w-10 h-10" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-1">{currentMedia.title}</h4>
                  <p className="text-xs text-neutral-400 max-w-md">
                    Photo file location: <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded">{currentMedia.url}</code>
                  </p>
                  <p className="text-xs text-neutral-500 mt-2">
                    Drop your installation picture into the project folder to view it live here.
                  </p>
                </div>
              </div>
            )}

            {/* Prev / Next Arrows */}
            {mediaList.length > 1 && (
              <>
                <button
                  onClick={() => setActiveIndex(prev => (prev - 1 + mediaList.length) % mediaList.length)}
                  aria-label="Previous media"
                  className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 opacity-80 hover:opacity-100 transition-all shadow-lg"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setActiveIndex(prev => (prev + 1) % mediaList.length)}
                  aria-label="Next media"
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700 opacity-80 hover:opacity-100 transition-all shadow-lg"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}

            {/* Media Type Badge in corner */}
            <div className="absolute top-3 left-3 px-2.5 py-1 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-xs font-semibold text-neutral-200 flex items-center gap-1.5">
              {currentMedia.type === 'video' ? (
                <>
                  <Film className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Video Clip ({activeIndex + 1}/{mediaList.length})</span>
                </>
              ) : (
                <>
                  <Camera className="w-3.5 h-3.5 text-blue-400" />
                  <span>Installation Photo ({activeIndex + 1}/{mediaList.length})</span>
                </>
              )}
            </div>
          </div>

          {/* Caption & Navigation Drawer */}
          <div className="p-4 sm:p-5 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex-1 pr-2">
              <h4 className="text-sm font-bold text-white mb-0.5">{currentMedia.title}</h4>
              {currentMedia.caption && (
                <p className="text-xs text-neutral-400 leading-relaxed">{currentMedia.caption}</p>
              )}
            </div>

            {/* Thumbnail selector */}
            {mediaList.length > 1 && (
              <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 sm:pb-0 shrink-0">
                {mediaList.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    className={`relative w-14 h-10 rounded-lg overflow-hidden border transition-all shrink-0 ${
                      activeIndex === idx
                        ? 'border-white ring-2 ring-white/30 scale-105'
                        : 'border-neutral-700 opacity-60 hover:opacity-100'
                    }`}
                  >
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-300">
                      {m.type === 'video' ? <Play className="w-4 h-4 text-emerald-400" /> : <Camera className="w-4 h-4 text-neutral-400" />}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
