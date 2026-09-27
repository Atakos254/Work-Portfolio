export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: 'Electrical, Solar PV & Battery Energy Storage (BESS)',
    icon: 'Sun',
    skills: [
      'Solar PV Sizing & Layout Design',
      'Hybrid & String Inverter Paralleling (12 kW to 185 kW)',
      '1,500 VDC Utility Architecture',
      'LiFePO4 Battery Storage Cabinets & BMS',
      'DC String Combiners & Overcurrent Protection',
      'Surge Protective Devices (Type I/II SPD)',
      'System Earthing, Grounding & Equipotential Bonding',
      'Pre-Commissioning Inspection & IV-Curve Testing',
    ],
  },
  {
    category: 'EV Infrastructure & Industrial Automation',
    icon: 'Zap',
    skills: [
      'AC & DC Fast EV Charging Station Commissioning',
      'ESP32 & Embedded C Hardware Interfacing',
      'Modbus RTU / RS485 Communication',
      'MQTT Telemetry & IoT Gateways',
      'Raspberry Pi & Industrial Edge Gateways',
      'Docker Containerization for Edge Services',
      'FreeRTOS Task Orchestration',
      'Motor Starters & Control Panels (DOL, VFD)',
    ],
  },
  {
    category: 'Software, Engineering Tools & Analytics',
    icon: 'Cpu',
    skills: [
      'AutoCAD (Electrical Schematics & SLDs)',
      'Python (Data Analysis, Pandas, NumPy)',
      'Machine Learning Basics (Decision Trees, SVM)',
      'EasyEDA & Wokwi Circuit Simulation',
      'PVSyst System Modeling Concepts',
      'SCADA & Grafana Real-Time Dashboards',
      'Linux / Bash Scripting',
      'Git & Version Control',
    ],
  },
  {
    category: 'Standards, Safety & Quality Assurance',
    icon: 'ShieldCheck',
    skills: [
      'EBK Graduate Engineer Regulations',
      'IEK Engineering Practice Guidelines',
      'IEC 62446 & IEC 60364 Photovoltaic Standards',
      'Grid Interconnection & Utility Net Metering Codes',
      'Occupational Safety & Health (OSHA / LOTO)',
      'Project Management (PMI / PMP Methodologies)',
      'Single-Line Diagram (SLD) Preparation',
      'Factory Acceptance & Commissioning Sign-offs (FAT/SAT)',
    ],
  },
];
