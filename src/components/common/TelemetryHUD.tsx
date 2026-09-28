import React, { useEffect, useRef, useState } from 'react';
import { Sun, BatteryCharging, Zap, Radio } from 'lucide-react';
import { profileData } from '../../data/profile';
import { motion, useInView } from 'framer-motion';

interface HudItem {
  label: string;
  val: string;
  sub: string;
  icon: React.ElementType;
  color: string;
  borderColor: string;
  glowClass: string;
}

function useCountUp(target: string, inView: boolean) {
  const [display, setDisplay] = useState('0');
  useEffect(() => {
    if (!inView) return;
    const match = target.match(/[\d.]+/);
    if (!match) { setDisplay(target); return; }
    const end = parseFloat(match[0]);
    const suffix = target.replace(match[0], '');
    const duration = 1800;
    const start = performance.now();
    const raf = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      const ease = 1 - Math.pow(1 - t, 3);
      const current = end * ease;
      setDisplay((current % 1 === 0 || current > 10 ? Math.floor(current) : current.toFixed(2)) + suffix);
      if (t < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target]);
  return display;
}

const HudCard: React.FC<{ item: HudItem; delay: number }> = ({ item, delay }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const counted = useCountUp(item.val, inView);
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="relative p-3 sm:p-4 lg:p-4.5 rounded-2xl bg-white dark:bg-[#0e1422] border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-card-hover hover:border-neutral-300 dark:hover:border-neutral-600 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative flex items-center justify-between mb-1.5 sm:mb-2">
        <span className="text-[10px] sm:text-[11px] uppercase tracking-wide sm:tracking-wider text-neutral-500 dark:text-neutral-400 font-semibold truncate pr-1">
          {item.label}
        </span>
        <div className={`p-1 sm:p-1.5 rounded-lg shrink-0 ${item.borderColor}`}>
          <Icon className={`w-3.5 h-3.5 ${item.color}`} />
        </div>
      </div>
      <div className="text-lg xs:text-xl sm:text-2xl lg:text-3xl font-black tracking-tight text-neutral-950 dark:text-white font-mono">
        {counted}
      </div>
      <div className="text-[10px] sm:text-xs text-neutral-500 dark:text-neutral-400 mt-0.5 sm:mt-1 truncate">{item.sub}</div>
    </motion.div>
  );
};

export const TelemetryHUD: React.FC = () => {
  const items: HudItem[] = [
    {
      label: 'Solar Installed',
      val: profileData.metrics.totalSolarCapacityMWp,
      sub: 'Peak DC Generation',
      icon: Sun,
      color: 'text-neutral-900 dark:text-white',
      borderColor: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700',
      glowClass: '',
    },
    {
      label: 'BESS Deployed',
      val: profileData.metrics.totalBatteryStorageKWh,
      sub: 'LiFePO4 Storage',
      icon: BatteryCharging,
      color: 'text-neutral-900 dark:text-white',
      borderColor: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700',
      glowClass: '',
    },
    {
      label: 'DC Bus Rating',
      val: '1,500 VDC',
      sub: 'Utility Architecture',
      icon: Zap,
      color: 'text-neutral-900 dark:text-white',
      borderColor: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700',
      glowClass: '',
    },
    {
      label: 'Telemetry Nodes',
      val: profileData.metrics.iotGatewaysDeployed,
      sub: 'MQTT & Modbus Gateways',
      icon: Radio,
      color: 'text-neutral-900 dark:text-white',
      borderColor: 'bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-700',
      glowClass: '',
    },
  ];

  return (
    <div className="w-full pt-0 pb-8 sm:pb-10 lg:pb-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#090d16] transition-colors">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {items.map((item, idx) => (
            <HudCard key={idx} item={item} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};
