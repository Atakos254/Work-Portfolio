export type EmploymentType = 'Full-Time' | 'Contract' | 'Internship' | 'Attachment';

export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: EmploymentType;
  bullets: string[];
}

export const workExperience: WorkExperience[] = [
  {
    period: 'May 2026 – Present',
    role: 'Solar PV Engineer',
    company: 'Voltifix New Energy SEZ Limited',
    location: 'Nairobi, Kenya',
    type: 'Full-Time',
    bullets: [
      'Lead sizing, layout engineering, and field installation for hybrid C&I solar PV systems and BESS up to 150 kW AC / 336 kWh.',
      'Deploy, configure, and troubleshoot AC & DC EV charging infrastructure ensuring strict compliance with Kenya electrical standards.',
      'Direct string interconnections, DC/AC protection switchgear, earthing, bonding, and inverter commissioning.',
      'Prepare engineering documentation, Single-Line Diagrams (SLDs), and test inspection sheets for statutory certifications.',
    ],
  },
  {
    period: 'October 2024 – May 2026',
    role: 'Electrical & Automation Engineer',
    company: 'Digital Qatalyst',
    location: 'Nairobi & Dubai',
    type: 'Full-Time',
    bullets: [
      'Integrated smart power meters and IoT edge gateways using Modbus RTU, MQTT, and Dockerized Python pipelines.',
      'Analyzed electrical telemetry (harmonics, power factor, reactive load) to identify anomalies and optimize operational uptime.',
      'Built real-time telemetry dashboards and predictive maintenance reporting tools for commercial facilities.',
    ],
  },
  {
    period: 'Nov 2022 – Nov 2023',
    role: 'Intern Electrical Engineer',
    company: 'Brent Networks',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    bullets: [
      'Assisted senior engineers in preventive maintenance (PRM) across commercial electrical panels and sub-distribution boards.',
      'Conducted on-site inspection of solar PV installations, testing open-circuit voltages (Voc) and short-circuit currents (Isc).',
      'Documented field observations and upheld rigorous safety and LOTO (Lockout/Tagout) protocols.',
    ],
  },
  {
    period: '2019 – 2021',
    role: 'Electrical Engineering Trainee / Attachee',
    company: 'Magnum Electrical Technology & Rivatex East Africa',
    location: 'Nairobi & Eldoret, Kenya',
    type: 'Attachment',
    bullets: [
      'Supported industrial panel layout design, AutoCAD electrical drafting, and motor control circuits (DOL, Star-Delta).',
      'Participated in plant-wide electrical maintenance, lighting systems, and safety inspections.',
    ],
  },
];
