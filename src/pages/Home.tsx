import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Sun, BatteryCharging, Cpu, Zap,
  ChevronRight, Award, Activity,
} from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { TelemetryHUD } from '../components/common/TelemetryHUD';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData } from '../data/projects';

/* ── Feature Cards ─────────────────────────────────────────────────── */
const features = [
  {
    icon: Sun,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
    title: 'Solar PV & Microgrid Engineering',
    desc: 'From 12 kW residential arrays to 1.4 MWp utility-scale plants — sizing, layout, string architecture, and commissioning at 1,500 VDC.',
  },
  {
    icon: BatteryCharging,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
    title: 'BESS & LiFePO4 Storage Architecture',
    desc: 'Industrial LiFePO4 cabinet integration with master-slave BMS, parallel inverter coupling, and autonomous grid-fallback orchestration.',
  },
  {
    icon: Cpu,
    color: 'text-neutral-900',
    bg: 'bg-neutral-100 border-neutral-200',
    title: 'IoT Edge Gateways & Cloud Analytics',
    desc: 'Modbus RTU → MQTT pipelines, Dockerized Python microservices, and real-time telemetry dashboards with anomaly detection.',
  },
];

/* ── Home Page ─────────────────────────────────────────────────────── */
const Home: React.FC = () => {
  const heroRef = useRef(null);
  const inView = useInView(heroRef, { once: true });

  const flagshipProjects = [
    projectsData.find(p => p.id === 'rainbow-resort-hybrid')!,
    projectsData.find(p => p.id === 'tatu-city-link-grid-tied')!,
    projectsData.find(p => p.id === 'industry-4-energy-iot')!,
  ].filter(Boolean);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section
        ref={heroRef}
        className="relative min-h-[calc(78vh-64px)] flex items-center justify-center overflow-hidden bg-white"
        aria-labelledby="hero-heading"
      >
        <div className="section-wrapper py-20 lg:py-28 relative z-10 w-full max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full bg-neutral-100 border border-neutral-200/80 mx-auto">
              <span className="text-xs text-neutral-700 font-medium italic">
                “Scientists discover the world that exists; engineers create the world that never was.”
              </span>
              <span className="text-[11px] text-neutral-500 font-normal">
                — Theodore von Kármán
              </span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.14] tracking-tight mb-6 text-neutral-950 text-balance max-w-4xl mx-auto"
            >
              Engineering Scalable Solar PV, Utility Microgrids &amp; Real-Time IoT Telemetry
            </h1>

            <p className="text-neutral-600 text-lg sm:text-xl leading-relaxed mb-9 max-w-3xl mx-auto">
              Hands-on field engineer with <strong className="text-neutral-950 font-semibold">1.65+ MWp</strong> solar installed,{' '}
              <strong className="text-neutral-950 font-semibold">1,500 VDC</strong> utility systems, multi-parallel hybrid inverters,
              and <strong className="text-neutral-950 font-semibold">EBK Graduate Registration (B25236)</strong>.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-9">
              <Link to="/projects" id="hero-cta-projects" className="btn-primary">
                Explore Projects (1.65+ MWp)
                <ArrowRight size={16} />
              </Link>
              <Link to="/about" id="hero-cta-credentials" className="btn-secondary">
                <Award size={16} />
                View EBK Credentials
              </Link>
              <Link to="/contact" id="hero-cta-contact" className="btn-secondary">
                Contact Me
              </Link>
            </div>

            {/* Credential pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'EBK Reg: B25236', color: 'badge-neutral' },
                { label: 'IEK Graduate Member', color: 'badge-neutral' },
                { label: 'JKUAT B.Sc. Eng.', color: 'badge-neutral' },
              ].map(c => (
                <span key={c.label} className={c.color}>{c.label}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Metrics HUD ──────────────────────────────────────────── */}
      <TelemetryHUD />

      {/* ── Core Engineering Disciplines ─────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="disciplines-heading">
        <div className="section-wrapper">
          <div className="text-center mb-16">
            <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">
              Capabilities & Focus
            </div>
            <h2 id="disciplines-heading" className="text-3xl sm:text-4xl font-black text-neutral-950 mb-3 tracking-tight">
              Core Engineering Disciplines
            </h2>
            <p className="text-neutral-600 max-w-2xl mx-auto text-base">
              Specialised across the full clean energy & smart-grid technology stack — from high-voltage field commissioning to cloud data pipelines.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white border border-neutral-200 rounded-2xl p-7 shadow-sm hover:shadow-card-hover hover:border-neutral-900 transition-all duration-300 group"
                >
                  <div className={`inline-flex p-3 rounded-xl border mb-5 ${f.bg}`}>
                    <Icon className={`w-6 h-6 ${f.color}`} />
                  </div>
                  <h3 className="text-base font-bold text-neutral-950 mb-2.5 group-hover:text-neutral-900 transition-colors">
                    {f.title}
                  </h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Featured Projects ─────────────────────────────────────── */}
      <section className="py-24 bg-neutral-50/70 border-y border-neutral-200" aria-labelledby="featured-heading">
        <div className="section-wrapper">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="text-xs font-bold tracking-widest text-neutral-500 uppercase mb-2">
                Flagship Projects
              </div>
              <h2 id="featured-heading" className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
                Recent Engineering Work
              </h2>
            </div>
            <Link to="/projects" className="btn-secondary shrink-0" aria-label="View all 8 projects">
              View All 8 Projects
              <ChevronRight size={16} />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flagshipProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonial ──────────────────────────────────────────── */}
      <section className="py-24 bg-white" aria-labelledby="testimonial-heading">
        <div className="section-wrapper max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-neutral-50 border border-neutral-200 text-center relative overflow-hidden shadow-sm"
          >
            <Activity className="w-8 h-8 text-neutral-900 mx-auto mb-5" />
            <blockquote className="text-lg sm:text-xl text-neutral-800 font-medium italic leading-relaxed mb-6" id="testimonial-heading">
              "Emmanuel consistently demonstrates exceptional technical depth — from high-voltage DC string architecture
              to precise BMS commissioning. His ability to translate engineering principles into reliable field
              installations is outstanding."
            </blockquote>
            <div>
              <div className="text-sm font-bold text-neutral-950">Paul Mwangi</div>
              <div className="text-xs text-neutral-500">Technical Manager — Voltifix New Energy SEZ Limited</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-20 border-t border-neutral-200 bg-neutral-50/60">
        <div className="section-wrapper text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl sm:text-3xl font-black text-neutral-950 mb-3 tracking-tight">
              Have a solar or IoT project in mind?
            </h2>
            <p className="text-neutral-600 mb-8 max-w-lg mx-auto text-base">
              From feasibility study to field commissioning — let's engineer it right.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link to="/contact" className="btn-primary">
                <Zap size={16} />
                Start a Conversation
              </Link>
              <a
                href="/docs/Emmanuel_Atakos_Project_Experience_Report.pdf"
                download
                className="btn-secondary"
                aria-label="Download experience report PDF"
              >
                Download Experience Report
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
