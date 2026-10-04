import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sun, BatteryCharging, Cpu,
  Award, MessageSquare, Layers, ArrowRight,
} from 'lucide-react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { TelemetryHUD } from '../components/common/TelemetryHUD';
import { projectsData, ProjectItem } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';
import { ProjectMediaModal } from '../components/projects/ProjectMediaModal';

/* ── Rotating Hero Words ───────────────────────────────────────────── */
const ROTATING_WORDS = [
  'Efficient',
  'Innovative',
  'Modern',
  'Robust',
  'Scalable',
] as const;

/* ── Feature Cards ─────────────────────────────────────────────────── */
const features = [
  {
    icon: Sun,
    color: 'text-neutral-900 dark:text-white',
    bg: 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
    title: 'Solar PV & Microgrid Engineering',
    desc: 'From 12 kW residential arrays to 1.3 MWp utility-scale plants — sizing, layout, string architecture, and commissioning at 1,500 VDC.',
  },
  {
    icon: BatteryCharging,
    color: 'text-neutral-900 dark:text-white',
    bg: 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
    title: 'BESS & LiFePO4 Storage Architecture',
    desc: 'Industrial LiFePO4 cabinet integration with master-slave BMS, parallel inverter coupling, and autonomous grid-fallback orchestration.',
  },
  {
    icon: Cpu,
    color: 'text-neutral-900 dark:text-white',
    bg: 'bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700',
    title: 'IoT Edge Gateways & Cloud Analytics',
    desc: 'Modbus RTU → MQTT pipelines, Dockerized Python microservices, and real-time telemetry dashboards with anomaly detection.',
  },
];

/* ── Major Projects Selection (3 Featured Flagship Projects) ──────── */
const MAJOR_PROJECT_IDS = [
  'tatu-city-link-grid-tied',
  'mushroom-motors-hybrid',
  'prof-jacob-bifacial-carport',
];

const featuredProjects = MAJOR_PROJECT_IDS.map((id) =>
  projectsData.find((p) => p.id === id)!
).filter(Boolean);

/* ── Home Page ─────────────────────────────────────────────────────── */
const Home: React.FC = () => {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true });
  const [wordIndex, setWordIndex] = useState(0);
  const [activeMediaProject, setActiveMediaProject] = useState<ProjectItem | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative overflow-hidden bg-white dark:bg-[#090d16] transition-colors"
        aria-labelledby="hero-heading"
      >
        <div className="section-wrapper pt-2 sm:pt-4 lg:pt-5 pb-4 sm:pb-6 lg:pb-7 relative z-10 w-full">
          <div className="grid lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-8 items-center">

            {/* Left Content Column */}
            <motion.div
              className="lg:col-span-7 text-center lg:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center justify-center gap-2 mb-2.5 sm:mb-3 px-3 py-1 rounded-full bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/80 dark:border-neutral-800 mx-auto lg:mx-0">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span className="text-[11px] sm:text-xs text-neutral-700 dark:text-neutral-300 font-semibold tracking-wide">
                  Solar PV Engineer
                </span>
              </div>

              <h1
                id="hero-heading"
                aria-label={`Engineering ${ROTATING_WORDS[wordIndex]} Systems`}
                className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-[1.08] tracking-tight mb-2.5 sm:mb-3.5 text-neutral-950 dark:text-white select-none"
              >
                <span className="block">Engineering</span>
                <span className="relative block h-[1.15em] overflow-hidden text-[#5b6e88] dark:text-[#8ea4c2]">
                  <AnimatePresence>
                    <motion.span
                      key={ROTATING_WORDS[wordIndex]}
                      initial={{ y: '100%', opacity: 0 }}
                      animate={{ y: '0%', opacity: 1 }}
                      exit={{ y: '-100%', opacity: 0 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute inset-0 flex items-center justify-center lg:justify-start"
                    >
                      {ROTATING_WORDS[wordIndex]}
                    </motion.span>
                  </AnimatePresence>
                </span>
                <span className="block">
                  Systems<span className="text-[#5b6e88] dark:text-[#8ea4c2]">.</span>
                </span>
              </h1>

              <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base leading-relaxed mb-4 sm:mb-5 max-w-xl mx-auto lg:mx-0">
                I craft efficient, high-performance systems with a focus on clean engineering, system stability, and enduring reliability.
              </p>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap justify-center lg:justify-start items-center gap-2 sm:gap-2.5 w-full">
                <Link to="/projects" id="hero-cta-projects" className="btn-primary text-xs sm:text-sm py-2.5 px-3 sm:px-4 justify-center">
                  <Layers size={15} />
                  Explore Projects
                </Link>
                <Link to="/about" id="hero-cta-credentials" className="btn-secondary text-xs sm:text-sm py-2.5 px-3 sm:px-4 justify-center">
                  <Award size={15} />
                  View Credentials
                </Link>
                <Link to="/contact" id="hero-cta-contact" className="btn-secondary col-span-2 sm:col-span-1 text-xs sm:text-sm py-2.5 px-3 sm:px-4 justify-center">
                  <MessageSquare size={15} />
                  Let's Talk
                </Link>
              </div>
            </motion.div>

            {/* Right Photo Column */}
            {/* Right Photo Column — Fluid Wobble Blob Frame */}
            <motion.div
              className="lg:col-span-5 flex flex-col items-center lg:items-end justify-center mt-3 sm:mt-4 lg:mt-0 mb-2 lg:mb-0"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="relative w-full max-w-[200px] xs:max-w-[240px] sm:max-w-[280px] lg:max-w-[320px] xl:max-w-[340px]">
                {/* Single fluid wobble picture frame */}
                <div className="relative w-full aspect-square overflow-hidden border-2 sm:border-[3px] border-neutral-300 dark:border-neutral-700 bg-neutral-100 dark:bg-[#0e1422] shadow-2xl shadow-neutral-900/10 dark:shadow-black/60 animate-blob-wobble transition-all group">
                  <img
                    src="/images/emmanuel-atakos.jpg?v=3"
                    alt="Emmanuel Thomas Atakos — Electrical, Solar PV & BESS Engineer"
                    className="w-full h-full object-cover object-[center_16%] scale-105 group-hover:scale-110 transition-transform duration-700 ease-out select-none"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Metrics HUD ──────────────────────────────────────────── */}
      <TelemetryHUD />

      {/* ── Featured Major Projects ─────────────────────────────── */}
      <section className="py-8 sm:py-16 lg:py-20 bg-neutral-50/70 dark:bg-[#0c101c] border-y border-neutral-200/80 dark:border-neutral-800/80 transition-colors" aria-labelledby="featured-projects-heading">
        <div className="section-wrapper">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6 sm:mb-12">
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-2">
                Flagship Engineering
              </div>
              <h2 id="featured-projects-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 dark:text-white tracking-tight">
                Major Projects Showcase
              </h2>
              <p className="text-neutral-600 dark:text-neutral-400 max-w-xl text-sm sm:text-base leading-relaxed mt-2">
                Proven field execution across utility-scale solar PV, industrial commercial microgrids, and high-capacity residential storage.
              </p>
            </div>
            <Link
              to="/projects"
              id="home-view-all-projects"
              className="inline-flex items-center gap-2 text-sm font-bold text-neutral-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group shrink-0 self-start sm:self-auto"
            >
              <span>View All 16 Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {featuredProjects.map((project, i) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={i}
                onOpenMedia={setActiveMediaProject}
              />
            ))}
          </div>

          <div className="mt-8 sm:mt-12 text-center">
            <Link
              to="/projects"
              id="home-explore-all-projects-btn"
              className="btn-primary w-full sm:w-auto inline-flex text-xs sm:text-sm py-2.5 px-6 shadow-md justify-center"
            >
              <Layers size={16} />
              Explore Complete Project Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* ── Core Engineering Disciplines ─────────────────────────── */}
      <section className="py-8 sm:py-16 lg:py-20 bg-white dark:bg-[#090d16] transition-colors" aria-labelledby="disciplines-heading">
        <div className="section-wrapper">
          <div className="text-center mb-6 sm:mb-12">
            <div className="text-xs font-bold tracking-widest text-neutral-500 dark:text-neutral-400 uppercase mb-2">
              Capabilities & Focus
            </div>
            <h2 id="disciplines-heading" className="text-2xl sm:text-3xl lg:text-4xl font-black text-neutral-950 dark:text-white mb-2.5 tracking-tight">
              Core Engineering Disciplines
            </h2>
            <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Specialised across the full clean energy & smart-grid technology stack — from high-voltage field commissioning to cloud data pipelines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 rounded-2xl p-4.5 sm:p-6 lg:p-7 shadow-sm hover:shadow-card-hover hover:border-neutral-900 dark:hover:border-neutral-600 transition-all duration-300 group"
                >
                  <div className={`inline-flex p-2.5 sm:p-3 rounded-xl border mb-3.5 sm:mb-5 ${f.bg}`}>
                    <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${f.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 dark:text-white mb-2 group-hover:text-neutral-900 dark:group-hover:text-neutral-200 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Interactive Media Lightbox Modal */}
      <ProjectMediaModal
        project={activeMediaProject}
        onClose={() => setActiveMediaProject(null)}
      />
    </>
  );
};

export default Home;
