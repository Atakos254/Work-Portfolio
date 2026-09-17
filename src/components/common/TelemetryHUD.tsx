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
      className="relative p-6 rounded-2xl bg-white border border-neutral-200 shadow-sm hover:shadow-card-hover hover:border-neutral-300 transition-all duration-300 group overflow-hidden"
    >
      <div className="relative flex items-center justify-between mb-3">
        <span className="text-xs uppercase tracking-wider text-neutral-500 font-semibold">
          {item.label}
        </span>
        <div className={`p-2 rounded-xl ${item.borderColor}`}>
          <Icon className={`w-4 h-4 ${item.color}`} />
        </div>
      </div>
      <div className="text-3xl lg:text-4xl font-black tracking-tight text-neutral-950 font-mono">
        {counted}
      </div>
      <div className="text-xs text-neutral-500 mt-1.5">{item.sub}</div>
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
      color: 'text-neutral-900',
      borderColor: 'bg-neutral-100 text-neutral-900 border border-neutral-200',
      glowClass: '',
    },
    {
      label: 'BESS Deployed',
      val: profileData.metrics.totalBatteryStorageKWh,
      sub: 'LiFePO4 Storage',
      icon: BatteryCharging,
      color: 'text-neutral-900',
      borderColor: 'bg-neutral-100 text-neutral-900 border border-neutral-200',
      glowClass: '',
    },
    {
      label: 'DC Bus Rating',
      val: '1,500 VDC',
      sub: 'Utility Architecture',
      icon: Zap,
      color: 'text-neutral-900',
      borderColor: 'bg-neutral-100 text-neutral-900 border border-neutral-200',
      glowClass: '',
    },
    {
      label: 'Telemetry Nodes',
      val: profileData.metrics.iotGatewaysDeployed,
      sub: 'MQTT & Modbus Gateways',
      icon: Radio,
      color: 'text-neutral-900',
      borderColor: 'bg-neutral-100 text-neutral-900 border border-neutral-200',
      glowClass: '',
    },
  ];

  return (
    <div className="w-full py-10 px-4 border-y border-neutral-200 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, idx) => (
            <HudCard key={idx} item={item} delay={idx * 0.1} />
          ))}
        </div>
      </div>
    </div>
  );
};
