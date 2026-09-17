import React, { useState, useMemo } from 'react';
import { Search, Filter, Zap, Sun } from 'lucide-react';
import { projectsData } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { motion, AnimatePresence } from 'framer-motion';

const ALL = 'All Projects';
const categories = [ALL, 'C&I Solar & BESS', 'Utility Grid-Tied', 'Residential Hybrid', 'IoT & Automation'] as const;
type Filter = typeof categories[number];

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<Filter>(ALL);
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return projectsData.filter(p => {
      const matchCat = activeCategory === ALL || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.client.toLowerCase().includes(q) ||
        p.technologies.some(t => t.toLowerCase().includes(q)) ||
        p.location.toLowerCase().includes(q) ||
        p.summary.toLowerCase().includes(q);
      return matchCat && matchSearch;
    });
  }, [activeCategory, search]);

  // Dynamic total kWp on screen
  const totalKWp = useMemo(() => {
    return filtered.reduce((acc, p) => {
      const match = p.pvArray.match(/[\d,]+\.?\d*\s*(?:kWp|MWp|MWp DC)/i);
      if (!match) return acc;
      const num = parseFloat(match[0].replace(',', ''));
      const isMW = /MWp/i.test(match[0]);
      return acc + (isMW ? num * 1000 : num);
    }, 0);
  }, [filtered]);

  return (
    <div className="min-h-screen py-16 sm:py-20">
      <div className="section-wrapper">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">Project Portfolio</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 mb-3 tracking-tight">Engineering Project Showcase</h1>
          <p className="text-neutral-600 max-w-2xl text-base leading-relaxed">
            A comprehensive record of solar PV installations, battery storage systems, IoT telemetry deployments,
            and embedded engineering projects.
          </p>
        </div>

        {/* Stats Banner */}
        <div className="bg-neutral-50 border border-neutral-200 rounded-2xl p-5 mb-10 flex flex-wrap gap-8 items-center shadow-subtle">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200">
              <Sun className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Filtered Capacity</div>
              <div className="text-xl font-black text-neutral-950 font-mono">
                {totalKWp >= 1000
                  ? `${(totalKWp / 1000).toFixed(2)} MWp`
                  : `${totalKWp.toFixed(1)} kWp`}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-neutral-100 text-neutral-900 border border-neutral-200">
              <Zap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs text-neutral-500 font-medium">Projects Shown</div>
              <div className="text-xl font-black text-neutral-950 font-mono">{filtered.length}</div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
            <input
              id="project-search"
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search by client, tech, location…"
              aria-label="Search projects"
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-neutral-200
                         text-sm text-neutral-900 placeholder:text-neutral-400
                         focus:outline-none focus:border-neutral-900 focus:ring-2 focus:ring-neutral-900/10 shadow-subtle transition-all"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2" role="tablist" aria-label="Project category filter">
            {categories.map(cat => (
              <button
                key={cat}
                role="tab"
                aria-selected={activeCategory === cat}
                onClick={() => setActiveCategory(cat as Filter)}
                id={`filter-${cat.replace(/[^a-zA-Z]/g, '-')}`}
                className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-neutral-950 text-white border-neutral-950 shadow-sm'
                    : 'bg-white text-neutral-600 border-neutral-200 hover:text-neutral-950 hover:border-neutral-400 shadow-subtle'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            <motion.div
              key={activeCategory + search}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24 text-neutral-500"
            >
              <Filter className="w-10 h-10 mx-auto mb-3 opacity-30" />
              <p className="text-lg font-semibold text-neutral-700">No projects match your filters.</p>
              <button
                onClick={() => { setSearch(''); setActiveCategory(ALL); }}
                className="mt-4 text-sm font-semibold text-neutral-900 hover:underline"
              >
                Clear all filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Projects;
