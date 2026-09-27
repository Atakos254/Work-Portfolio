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
    period: 'June 2026 – Present',
    role: 'Solar PV Engineer',
    company: 'Voltifix New Energy SEZ Limited',
    location: 'Nairobi, Kenya',
    type: 'Full-Time',
    bullets: [
      'Handle solar PV system design, installation, testing, and commissioning, including panel layout, inverter setup, cabling, protection devices, and system checks.',
      'Install, commission, configure, and troubleshoot AC and DC electric vehicle (EV) charging stations, ensuring compliance with electrical standards and manufacturer specifications.',
      'Conduct system inspections and performance assessments while ensuring compliance with technical specifications and safety standards.',
      'Prepare technical documentation, installation records, and commissioning reports for completed projects.',
      'Coordinate with engineers, suppliers, and installation teams to ensure timely project delivery.',
    ],
  },
  {
    period: 'October 2024 – May 2026',
    role: 'Electrical & Automation Engineer',
    company: 'Digital Qatalyst',
    location: 'Nairobi & Dubai',
    type: 'Full-Time',
    bullets: [
      'Supported deployment, commissioning, and monitoring of energy systems using smart meters and IoT gateways for real-time electrical consumption tracking.',
      'Troubleshot electrical and energy system faults to improve reliability, equipment performance, and operational uptime.',
      'Analysed power and energy consumption data to support fault detection, load behaviour assessment, preventive maintenance, and energy optimisation.',
      'Prepared technical reports, dashboards, and system performance documentation to support operational and engineering decisions.',
      'Developed edge-to-cloud telemetry pipelines and Dockerized microservices utilizing Python, MQTT, and Modbus RTU protocols.',
    ],
  },
  {
    period: 'January 2023 – December 2023',
    role: 'Intern Electrical Engineer',
    company: 'Brent Networks',
    location: 'Nairobi, Kenya',
    type: 'Internship',
    bullets: [
      'Supported electrical installation, maintenance, and fault-finding activities across operational systems.',
      'Assisted with preventive maintenance inspections to identify defects, reduce downtime, and support reliable operations.',
      'Provided solar and renewable energy system support, including monitoring, basic troubleshooting, and performance improvement.',
      'Conducted electrical testing, documented maintenance observations, and followed safety procedures during field activities and inspections.',
      'Enforced Lockout/Tagout (LOTO) protocols and verified electrical circuit isolation during maintenance and testing procedures.',
    ],
  },
  {
    period: '2019 – 2021',
    role: 'Electrical Engineering Trainee / Attachee',
    company: 'Magnum Electrical Technology & Rivatex East Africa',
    location: 'Nairobi & Eldoret, Kenya',
    type: 'Attachment',
    bullets: [
      'Assisted with electrical wiring, lighting, and control system installations in commercial environments using detailed wiring diagrams.',
      'Supported electrical maintenance technicians in industrial plant operations, assisting with routine equipment checks and safety compliance.',
      'Prepared electrical schematic and panel layout support drawings using AutoCAD for industrial control systems.',
      'Provided hands-on support during installation of electrical switchgear, motor control panels (DOL, Star-Delta), and sub-distribution boards.',
      'Implemented circuit efficiency improvements and energy-saving adjustments aligned with electrical safety requirements and site procedures.',
    ],
  },
];
