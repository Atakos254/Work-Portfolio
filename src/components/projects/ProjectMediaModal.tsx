import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play, Camera, Film, FileText, Image as ImageIcon } from 'lucide-react';
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
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

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

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX === null || mediaList.length <= 1) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        // Swipe left -> next
        setActiveIndex(prev => (prev + 1) % mediaList.length);
      } else {
        // Swipe right -> prev
        setActiveIndex(prev => (prev - 1 + mediaList.length) % mediaList.length);
      }
    }
    setTouchStartX(null);
  };

  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-neutral-950/85 backdrop-blur-md dark"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-5xl bg-neutral-900 border border-neutral-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[94vh] sm:max-h-[92vh]"
          onClick={e => e.stopPropagation()}
        >
          {/* Header Bar */}
          <div className="flex items-center justify-between px-3 sm:px-5 py-2.5 sm:py-4 border-b border-neutral-800 bg-neutral-900/90 text-white">
            <div className="flex items-center gap-2 sm:gap-3 pr-2 sm:pr-4 truncate">
              <span className="text-[10px] sm:text-xs px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full bg-neutral-800 border border-neutral-700 text-neutral-300 font-semibold shrink-0">
                {project.category}
              </span>
              <h3 className="text-xs sm:text-base font-bold text-white truncate">
                {project.title}
              </h3>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
              <Link
                to={`/projects/${project.id}`}
                onClick={onClose}
                className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-[#0f172a] hover:bg-white text-[#f8fafc] hover:text-[#090d16] active:bg-white active:text-[#090d16] border border-[#334155] hover:border-white text-[11px] sm:text-xs font-semibold transition-all shadow-sm cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 shrink-0" />
                <span className="hidden xs:inline">Full Case Study</span>
                <span className="xs:hidden">Specs</span>
              </Link>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="p-1.5 sm:p-2 rounded-xl bg-[#0f172a] hover:bg-white text-[#f8fafc] hover:text-[#090d16] active:bg-white active:text-[#090d16] border border-[#334155] hover:border-white transition-all shadow-sm cursor-pointer"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Main Media Viewer Stage with Touch Swipe */}
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative flex-1 bg-black flex items-center justify-center min-h-[220px] sm:min-h-[400px] max-h-[48vh] sm:max-h-[62vh] overflow-hidden group select-none"
          >
            {currentMedia.type === 'video' ? (
              <div className="relative w-full h-full flex items-center justify-center bg-black">
                <video
                  key={currentMedia.url}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="metadata"
                  className="w-full h-full max-h-[48vh] sm:max-h-[60vh] object-contain"
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.parentElement?.querySelector('.modal-video-fallback');
                    if (fb) fb.classList.remove('hidden');
                  }}
                >
                  <source src={encodeURI(currentMedia.url)} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="modal-video-fallback hidden flex flex-col items-center justify-center p-6 sm:p-8 text-center text-neutral-400">
                  <div className="p-3 sm:p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 mb-3 text-emerald-400">
                    <Film className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">{currentMedia.title}</h4>
                  <p className="text-xs text-neutral-400 max-w-md">
                    Unable to stream video: <code className="text-neutral-300 bg-neutral-800 px-1.5 py-0.5 rounded">{currentMedia.url}</code>
                  </p>
                </div>
              </div>
            ) : (
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  key={currentMedia.url}
                  src={encodeURI(currentMedia.url)}
                  alt={currentMedia.title}
                  className="w-full h-full max-h-[48vh] sm:max-h-[60vh] object-contain pointer-events-none"
                  onError={e => {
                    e.currentTarget.style.display = 'none';
                    const fb = e.currentTarget.parentElement?.querySelector('.modal-fallback');
                    if (fb) fb.classList.remove('hidden');
                  }}
                />
                <div className="modal-fallback hidden flex flex-col items-center justify-center p-6 sm:p-8 text-center text-neutral-400">
                  <div className="p-3 sm:p-4 rounded-2xl bg-neutral-800/80 border border-neutral-700 mb-3 text-neutral-300">
                    <ImageIcon className="w-8 h-8 sm:w-10 sm:h-10" />
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white mb-1">{currentMedia.title}</h4>
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
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(prev => (prev - 1 + mediaList.length) % mediaList.length);
                  }}
                  aria-label="Previous media"
                  className="absolute left-1.5 sm:left-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-[#0f172a]/80 sm:bg-[#0f172a]/90 hover:bg-white active:bg-white text-[#f8fafc] hover:text-[#090d16] active:text-[#090d16] border border-[#334155] hover:border-white transition-all shadow-lg cursor-pointer z-10"
                >
                  <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveIndex(prev => (prev + 1) % mediaList.length);
                  }}
                  aria-label="Next media"
                  className="absolute right-1.5 sm:right-3 top-1/2 -translate-y-1/2 p-2 sm:p-2.5 rounded-full bg-[#0f172a]/80 sm:bg-[#0f172a]/90 hover:bg-white active:bg-white text-[#f8fafc] hover:text-[#090d16] active:text-[#090d16] border border-[#334155] hover:border-white transition-all shadow-lg cursor-pointer z-10"
                >
                  <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </>
            )}

            {/* Media Type Badge in corner */}
            <div className="absolute top-2.5 left-2.5 sm:top-3 sm:left-3 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-lg bg-neutral-900/80 backdrop-blur-md border border-neutral-700 text-[11px] sm:text-xs font-semibold text-neutral-200 flex items-center gap-1.5 pointer-events-none">
              {currentMedia.type === 'video' ? (
                <>
                  <Film className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-400" />
                  <span>Video ({activeIndex + 1}/{mediaList.length})</span>
                </>
              ) : (
                <>
                  <Camera className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400" />
                  <span>Photo ({activeIndex + 1}/{mediaList.length})</span>
                </>
              )}
            </div>
          </div>

          {/* Caption & Navigation Drawer */}
          <div className="p-3 sm:p-5 bg-neutral-900 border-t border-neutral-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-4">
            <div className="flex-1 pr-1 sm:pr-2">
              <h4 className="text-xs sm:text-sm font-bold text-white mb-0.5">{currentMedia.title}</h4>
              {currentMedia.caption && (
                <p className="text-[11px] sm:text-xs text-neutral-400 leading-relaxed line-clamp-2 sm:line-clamp-none">{currentMedia.caption}</p>
              )}
            </div>

            {/* Thumbnail selector */}
            {mediaList.length > 1 && (
              <div
                className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto max-w-full py-1 px-0.5 shrink-0 no-scrollbar touch-pan-x"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
              >
                {mediaList.map((m, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIndex(idx)}
                    aria-label={`View media ${idx + 1}: ${m.title}`}
                    className={`relative w-12 h-8 sm:w-14 sm:h-10 rounded-lg overflow-hidden border transition-all shrink-0 cursor-pointer ${
                      activeIndex === idx
                        ? 'border-emerald-400 ring-2 ring-emerald-500/40 scale-105 opacity-100 shadow-md'
                        : 'border-neutral-700/80 opacity-60 hover:opacity-100 hover:border-neutral-500'
                    }`}
                  >
                    <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-[10px] text-neutral-300">
                      {m.type === 'image' ? (
                        <img
                          src={encodeURI(m.url)}
                          alt={m.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <div className="w-full h-full flex flex-col items-center justify-center bg-neutral-900 text-emerald-400 gap-0.5">
                          <Play className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-emerald-400/40 text-emerald-400" />
                          <span className="text-[7px] sm:text-[8px] font-bold tracking-tight text-neutral-300">VIDEO</span>
                        </div>
                      )}
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
