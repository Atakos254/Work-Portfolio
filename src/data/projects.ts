export type ProjectCategory =
  | 'C&I Solar & BESS'
  | 'Utility Grid-Tied'
  | 'Residential Hybrid'
  | 'IoT & Automation';

export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: ProjectCategory;
  location: string;
  period: string;
  pvArray: string;
  inverterCapacity: string;
  batteryStorage: string;
  dcArchitecture?: string;
  status: 'Completed' | 'Ongoing';
  employerContractor: string;
  technologies: string[];
  summary: string;
  responsibilities: string[];
  keyHighlights: string[];
  imagePlaceholder: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: 'rainbow-resort-hybrid',
    title: 'Commercial Hybrid Solar PV & High-Capacity BESS',
    client: 'Rainbow Resort',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'June 2026',
    pvArray: '145.6 kWp DC (320 × 455 W Mono PERC Modules)',
    inverterCapacity: '150 kW AC (3 × 50 kW Hybrid Inverters in Parallel)',
    batteryStorage: '336 kWh LiFePO4 (3 × 112 kWh Industrial Cabinets + Combiner)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: ['LiFePO4 Storage', 'Commercial Hybrid Inverters', 'Battery Combiner Boxes', 'DC/AC Switchgear', 'Surge Protection (SPD)'],
    summary:
      'Engineered and deployed a large-scale commercial hybrid system designed to eliminate diesel generator dependency, maximize self-consumption, and guarantee uninterrupted power during utility grid outages.',
    responsibilities: [
      'Rigged and aligned racking structures and securely installed 320 high-efficiency PV modules.',
      'Configured multi-string DC combiner circuits, cable routing, and DC isolator protection.',
      'Positioned, wired, and parallel-coupled three 50 kW hybrid inverters with three 112 kWh battery cabinets.',
      'Conducted insulation resistance testing, earthing/bonding checks, and pre-commissioning synchronization.',
    ],
    keyHighlights: [
      '336 kWh battery storage cabinet system with centralized master-slave BMS orchestration',
      'Suppresses diesel generator runtime during frequent utility load interruptions',
      'Engineered under strict Kenya grid code and industrial safety compliance',
    ],
    imagePlaceholder: '/images/projects/rainbow-resort.jpg',
  },
  {
    id: 'tatu-city-link-grid-tied',
    title: '1.4 MWp Utility-Scale High-Voltage Grid-Connected Solar PV',
    client: 'Tatu City Link',
    category: 'Utility Grid-Tied',
    location: 'Tatu City, Kiambu, Kenya',
    period: 'Dec 2025 – Mar 2026',
    pvArray: '1.40 MWp DC (108 arrays × 23 × 580 W High-Power Modules)',
    inverterCapacity: '1.11 MW AC (6 × 185 kW High-Voltage String Inverters)',
    dcArchitecture: '1,500 VDC High-Voltage DC Bus; 18 strings per inverter',
    batteryStorage: 'Grid-Tied (No BESS)',
    status: 'Completed',
    employerContractor: 'Keda Solar',
    technologies: ['1500V DC Architecture', '185 kW String Inverters', 'Cable Trays & Containment', 'Grid Synchronization', 'HV Switchgear'],
    summary:
      'Utility-scale distributed generation plant delivering 1.11 MW AC synchronized power into the medium-voltage infrastructure via six 185 kW high-voltage string inverters.',
    responsibilities: [
      'Managed 1,500 VDC high-voltage DC string terminations across 108 string sections.',
      'Supervised cable containment, trenching, heavy-gauge AC/DC cable pulls, and stress-relief terminations.',
      'Executed array grounding, surge suppression verification, and equipment bonding protocols.',
      'Assisted senior engineers in grid pre-commissioning, inverter polarity verification, and IV-curve tracing.',
    ],
    keyHighlights: [
      'Operates at advanced 1,500 VDC architecture for minimized transmission I²R losses',
      'Synchronizes 1.11 MW of continuous clean power to industrial grid feeders',
      'Total module count exceeding 2,400 high-wattage bi-facial/mono panels',
    ],
    imagePlaceholder: '/images/projects/tatu-city.jpg',
  },
  {
    id: 'mushroom-motors-hybrid',
    title: 'Industrial Workshop Hybrid PV & Battery Microgrid',
    client: 'Mushroom Motors',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'May – June 2026',
    pvArray: '40.04 kWp DC (88 × 455 W Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Hybrid Inverters in Parallel)',
    batteryStorage: '48 kWh LiFePO4 (3 × 16 kWh Rack Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: ['Solar Carport Racking', '12 kW Hybrid Inverters', 'LiFePO4 Rack Batteries', 'Parallel Sync', 'Automatic Transfer Switch'],
    summary:
      'Turnkey solar carport and workshop microgrid installation powering heavy diagnostic equipment, vehicle hoists, and lighting with battery backup.',
    responsibilities: [
      'Supervised elevated solar carport mechanical mounting and panel clamping.',
      'Interconnected 3-phase hybrid inverter bank with automatic load-shedding contactors.',
      'Installed DC disconnects, type-II surge suppressors, and battery busbar terminations.',
      'Commissioned battery charge/discharge parameters and system cloud monitoring portal.',
    ],
    keyHighlights: [
      'Dual-purpose solar canopy providing shelter and 40 kWp clean generation',
      '3-phase balanced inverter cluster supporting reactive motor start currents',
    ],
    imagePlaceholder: '/images/projects/mushroom-motors.jpg',
  },
  {
    id: 'tsuku-tsuku-hybrid',
    title: 'Commercial Facility Solar PV & Energy Storage System',
    client: 'Tsuku Tsuku',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'July 2026',
    pvArray: '30.03 kWp DC (66 × 455 W Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Hybrid Inverters)',
    batteryStorage: '96 kWh LiFePO4 Battery Bank',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: ['Hybrid Inverters', 'LiFePO4 Battery Clusters', 'DC Protection', 'Load Profiling'],
    summary:
      'Reliability-focused commercial solar installation delivering 30 kWp clean power and high-capacity battery resilience for uninterrupted business operations.',
    responsibilities: [
      'Configured string arrangements to optimize roof azimuth and avoid localized shading.',
      'Wired battery DC distribution boards and integrated battery shunt protection.',
      'Validated phase balance and power-factor correction during initial energization.',
    ],
    keyHighlights: [
      '96 kWh storage reservoir ensuring 14+ hours of critical load autonomy',
    ],
    imagePlaceholder: '/images/projects/tsuku-tsuku.jpg',
  },
  {
    id: 'industry-4-energy-iot',
    title: 'Industry 4.0 Real-Time Energy Telemetry & Cloud Analytics',
    client: 'Digital Qatalyst Projects',
    category: 'IoT & Automation',
    location: 'Nairobi & Dubai',
    period: 'October 2024 – May 2026',
    pvArray: 'Multi-Point Sub-Station Telemetry Ingestion',
    inverterCapacity: 'Modbus RTU → MQTT Linux Edge Gateways',
    batteryStorage: 'Real-Time Cloud Dashboards & Analytics',
    status: 'Completed',
    employerContractor: 'Digital Qatalyst',
    technologies: ['MQTT', 'Python', 'Docker', 'Raspberry Pi', 'Smart Meters (Modbus RTU)', 'IoT Gateways', 'Time-Series Dashboards'],
    summary:
      'Designed and deployed smart energy monitoring infrastructure linking Modbus energy meters via edge IoT gateways to cloud-hosted analytics dashboards for real-time load analytics and anomaly detection.',
    responsibilities: [
      'Configured RS485/Modbus-to-MQTT edge gateways running on embedded Linux / Raspberry Pi.',
      'Built Dockerized Python microservices to ingest, filter, and stream voltage, current, harmonics, and kWh metrics.',
      'Created predictive maintenance alerts triggered by power-factor degradation and phase-unbalance thresholds.',
    ],
    keyHighlights: [
      'Sub-second telemetry processing over lightweight MQTT brokers',
      'Demonstrated actionable 18% energy waste reduction on monitored commercial panels',
    ],
    imagePlaceholder: '/images/projects/iot-energy.jpg',
  },
  {
    id: 'esp32-ev-chargepoint-reporter',
    title: 'ESP32 Cloud-Connected EV Charger Telemetry & State Reporter',
    client: 'Engineering R&D Project',
    category: 'IoT & Automation',
    location: 'Nairobi, Kenya',
    period: '2026',
    pvArray: 'Integrated EV Infrastructure Subsystem',
    inverterCapacity: 'AC & DC EV Fast-Charging Stations',
    batteryStorage: 'Bidirectional MQTT Cloud Telemetry',
    status: 'Completed',
    employerContractor: 'Voltifix / Independent R&D',
    technologies: ['ESP-IDF', 'FreeRTOS', 'Embedded C', 'MQTT', 'NVS', 'EasyEDA', 'Wokwi Simulation', 'RGB State Machine'],
    summary:
      'Embedded IoT telemetry device designed for EV charge-point status reporting, bidirectional cloud state control, fault detection, and visual status indication.',
    responsibilities: [
      'Wrote modular FreeRTOS tasks in embedded C under ESP-IDF for network monitoring and MQTT publishing.',
      'Engineered hardware schematics and PCB layout in EasyEDA for noise-immune 230V proximity coupling.',
      'Implemented fail-safe state machines handling EV connection, charging, fault state, and payment triggers.',
    ],
    keyHighlights: [
      'Ultra-low latency remote start/stop commands via MQTT subscription',
      'Simulated and validated under Wokwi hardware-in-the-loop virtual environment',
    ],
    imagePlaceholder: '/images/projects/ev-chargepoint.jpg',
  },
  {
    id: 'mariakani-residential-hybrid',
    title: '12 kW Coastal Residential Hybrid PV & Stacked Storage',
    client: 'Private Residential Client',
    category: 'Residential Hybrid',
    location: 'Mariakani, Kilifi County, Kenya',
    period: 'May 2026',
    pvArray: '12.18 kWp DC (21 × 580 W High-Output Panels)',
    inverterCapacity: '12 kW AC (1 × 12 kW Deye Hybrid Inverter)',
    batteryStorage: '32 kWh LiFePO4 (6 Stackable Valley Lithium Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: ['Deye Inverter', 'Valley Lithium Batteries', 'Coastal Corrosion-Resistant Racking', 'Residential ATS'],
    summary:
      'Off-grid resilient residential solar system designed for high ambient temperatures and saline coastal atmosphere, supplying complete household loads and pump motors.',
    responsibilities: [
      'Installed rooftop mounting rails with marine-grade stainless fasteners.',
      'Configured Deye hybrid inverter parameters, grid curtailment, and generator autostart settings.',
      'Stacked and balanced six modular lithium batteries with low-voltage parallel busbars.',
    ],
    keyHighlights: [
      '100% self-sufficient off-grid capability during frequent coastal grid dropouts',
    ],
    imagePlaceholder: '/images/projects/mariakani.jpg',
  },
  {
    id: 'willis-auto-spa-hybrid',
    title: 'Commercial Vehicle Spa Solar PV & Energy Storage',
    client: 'Willis Auto Spa',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'July 2026',
    pvArray: '15.47 kWp DC (34 × 455 W Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Inverters in Parallel)',
    batteryStorage: '32 kWh LiFePO4 (2 × 16 kWh Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: ['Industrial Pumps Power Supply', 'Hybrid Inverters', 'LiFePO4 Storage', 'Cable Tray Management'],
    summary:
      'Solar power supply powering high-pressure wash pumps and vehicle detailing bays with clean solar power and emergency battery backup.',
    responsibilities: [
      'Mounted 34 photovoltaic modules on structural roof trusses.',
      'Installed 3-unit inverter cluster and battery protection board.',
      'Carried out earthing loop impedance testing and system labeling.',
    ],
    keyHighlights: [
      'Surge-dampening electrical protection designed for cyclic high-draw water pumps',
    ],
    imagePlaceholder: '/images/projects/willis-autospa.jpg',
  },
];
