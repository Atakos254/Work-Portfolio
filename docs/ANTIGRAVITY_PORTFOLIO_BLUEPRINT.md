# Emmanuel Atakos — Professional Engineering Portfolio Website
## Comprehensive Antigravity Agent Build Specification & Implementation Playbook

---

### Document Overview
This document serves as the **complete, end-to-end blueprint and executable prompt playbook** for building the personal engineering portfolio website of **Emmanuel Thomas Atakos** (EBK Reg: B25236) using **Google Antigravity**.

It contains:
1. **Architectural Blueprint & Tech Stack**: Selection of modern, agent-friendly frameworks.
2. **Design System & Theme Tokens**: Solar-tech clean aesthetic (Emerald / Amber / Deep Slate).
3. **Structured Data Schemas**: Verbatim project data, employment records, competencies, and credentials.
4. **Step-by-Step Antigravity Agent Prompts**: 10 sequential, bite-sized agent instructions designed for flawless code synthesis without context drifting.
5. **Component Specifications & Code Blueprints**: Core React/TypeScript components.
6. **Deployment & Quality Assurance Protocol**: Vercel/Netlify deployment, SEO, and accessibility checks.

---

## 1. System Architecture & Tech Stack

| Layer | Technology | Justification for Antigravity Build |
| :--- | :--- | :--- |
| **Framework** | **React 18 / 19 + Vite (TypeScript)** | Blazing-fast HMR, lightweight bundle, zero backend overhead, easy static hosting. |
| **Styling** | **Tailwind CSS v3 / v4** | Utility-first, predictable styling tokens, native dark/light mode classes. |
| **Icons** | **Lucide React** | Consistent, lightweight SVG engineering and UI iconography (`Sun`, `Zap`, `BatteryCharging`, `Cpu`, `Layers`). |
| **Animations** | **Framer Motion** | Micro-interactions, smooth page transitions, interactive hover telemetry cards. |
| **Routing** | **React Router DOM v6** | Client-side routing (`/`, `/projects`, `/projects/:id`, `/about`, `/experience`, `/contact`). |
| **Data Layer** | **Static JSON / TypeScript Data Models** | Decoupled content architecture allowing simple updates without touching layout logic. |
| **Deployment** | **Vercel / GitHub Pages / Netlify** | Zero-config edge deployment with automated preview branches. |

---

## 2. Brand Identity & Design Tokens

### 2.1 Aesthetic Vision: "Industrial Clean-Tech Precision"
The portfolio reflects an engineer bridging physical solar/power infrastructure with digital telemetry, IoT, and data intelligence. The interface evokes clean-room precision, high-efficiency energy dashboards, and industrial telemetry.

### 2.2 Color Palette (Tailwind Configuration)
* **Background Dark:** `#090d16` (Deep Midnight Obsidian)
* **Background Surface Dark:** `#111827` (Charcoal Slate)
* **Background Light:** `#f8fafc` (Clean Off-White)
* **Primary Brand Accent (Solar PV):** `#f59e0b` (Amber Gold / Solar Flare)
* **Secondary Brand Accent (Clean Energy & Storage):** `#10b981` (Emerald / Battery Active)
* **Tech / Automation Accent:** `#3b82f6` (Electric Blue / IoT Signal)
* **Text High-Contrast:** `#f8fafc` (Dark Mode) / `#0f172a` (Light Mode)
* **Muted Text:** `#94a3b8` (Dark Mode) / `#64748b` (Light Mode)
* **Borders / Gridlines:** `rgba(255, 255, 255, 0.08)` (Dark) / `rgba(0, 0, 0, 0.08)` (Light)

---

## 3. Structured Data Models (`src/data/`)

### 3.1 Profile & Bio Data (`src/data/profile.ts`)
```typescript
export interface ProfileData {
  name: string;
  professionalTitle: string;
  tagline: string;
  summary: string;
  contact: {
    email: string;
    phone: string;
    location: string;
    github?: string;
    linkedin?: string;
  };
  registrations: {
    ebkRegistration: string;
    iekMembership: string;
  };
  metrics: {
    totalSolarCapacityMWp: string;
    totalBatteryStorageKWh: string;
    commercialSitesCompleted: number;
    iotGatewaysDeployed: string;
  };
}

export const profileData: ProfileData = {
  name: "Emmanuel Thomas Atakos",
  professionalTitle: "Electrical & Electronics Engineer | Solar PV & Energy Storage Specialist",
  tagline: "Bridging Megawatt-Scale Clean Power Systems with IoT Telemetry & Industrial Automation",
  summary:
    "Registered Graduate Engineer with proven hands-on expertise in hybrid solar PV system sizing, 1,500 VDC utility arrays, lithium-iron-phosphate (LiFePO4) storage, EV charging infrastructure, and Industry 4.0 IoT energy monitoring. Proven track record across commercial, residential, and megawatt grid-tied installations.",
  contact: {
    email: "emmanuelatakos@gmail.com",
    phone: "+254 795 628 615",
    location: "Nairobi, Kenya",
    linkedin: "https://linkedin.com/in/emmanuel-atakos",
    github: "https://github.com/emmanuelatakos"
  },
  registrations: {
    ebkRegistration: "Graduate Engineer (B25236) — Engineers Board of Kenya",
    iekMembership: "Graduate Engineer Member — Institution of Engineers of Kenya"
  },
  metrics: {
    totalSolarCapacityMWp: "1.65+ MWp",
    totalBatteryStorageKWh: "500+ kWh",
    commercialSitesCompleted: 7,
    iotGatewaysDeployed: "50+"
  }
};
```

---

### 3.2 Projects Data (`src/data/projects.ts`)
```typescript
export interface ProjectItem {
  id: string;
  title: string;
  client: string;
  category: "C&I Solar & BESS" | "Utility Grid-Tied" | "Residential Hybrid" | "IoT & Automation";
  location: string;
  period: string;
  pvArray: string;
  inverterCapacity: string;
  batteryStorage: string;
  dcArchitecture?: string;
  status: "Completed" | "Ongoing";
  employerContractor: string;
  technologies: string[];
  summary: string;
  responsibilities: string[];
  keyHighlights: string[];
  imagePlaceholder: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "rainbow-resort-hybrid",
    title: "Commercial Hybrid Solar PV & High-Capacity BESS",
    client: "Rainbow Resort",
    category: "C&I Solar & BESS",
    location: "Kiambu County, Kenya",
    period: "June 2026",
    pvArray: "145.6 kWp DC (320 × 455 W Mono PERC Modules)",
    inverterCapacity: "150 kW AC (3 × 50 kW Hybrid Inverters in Parallel)",
    batteryStorage: "336 kWh LiFePO4 (3 × 112 kWh Industrial Cabinets + Combiner)",
    status: "Completed",
    employerContractor: "Voltifix New Energy SEZ Limited",
    technologies: ["LiFePO4 Storage", "Commercial Hybrid Inverters", "Battery Combiner Boxes", "DC/AC Switchgear", "Surge Protection (SPD)"],
    summary:
      "Engineered and deployed a large-scale commercial hybrid system designed to eliminate diesel generator dependency, maximize self-consumption, and guarantee uninterrupted power during utility grid outages.",
    responsibilities: [
      "Rigged and aligned racking structures and securely installed 320 high-efficiency PV modules.",
      "Configured multi-string DC combiner circuits, cable routing, and DC isolator protection.",
      "Positioned, wired, and parallel-coupled three 50 kW hybrid inverters with three 112 kWh battery cabinets.",
      "Conducted insulation resistance testing, earthing/bonding checks, and pre-commissioning synchronization."
    ],
    keyHighlights: [
      "336 kWh battery storage cabinet system with centralized master-slave BMS orchestration",
      "Suppresses diesel generator runtime during frequent utility load interruptions",
      "Engineered under strict Kenya grid code and industrial safety compliance"
    ],
    imagePlaceholder: "/images/projects/rainbow-resort.jpg"
  },
  {
    id: "tatu-city-link-grid-tied",
    title: "1.4 MWp Utility-Scale High-Voltage Grid-Connected Solar PV",
    client: "Tatu City Link",
    category: "Utility Grid-Tied",
    location: "Tatu City, Kiambu County, Kenya",
    period: "December 2025 – March 2026",
    pvArray: "1.40 MWp DC (108 arrays × 23 × 580 W High-Power Modules)",
    inverterCapacity: "1.11 MW AC (6 × 185 kW High-Voltage String Inverters)",
    dcArchitecture: "1,500 VDC High-Voltage DC Bus; 18 strings per inverter",
    batteryStorage: "Grid-Tied (No BESS)",
    status: "Completed",
    employerContractor: "Hounen & Keda Solar",
    technologies: ["1500V DC Architecture", "185 kW String Inverters", "Cable Trays & Containment", "Grid Synchronization", "HV Switchgear"],
    summary:
      "Utility-scale distributed generation plant delivering 1.11 MW AC synchronized power into the medium-voltage infrastructure via six 185 kW high-voltage string inverters.",
    responsibilities: [
      "Managed 1,500 VDC high-voltage DC string terminations across 108 string sections.",
      "Supervised cable containment, trenching, heavy-gauge AC/DC cable pulls, and stress-relief terminations.",
      "Executed array grounding, surge suppression verification, and equipment bonding protocols.",
      "Assisted senior engineers in grid pre-commissioning, inverter polarity verification, and IV-curve tracing."
    ],
    keyHighlights: [
      "Operates at advanced 1,500 VDC architecture for minimized transmission I²R losses",
      "Synchronizes 1.11 MW of continuous clean power to industrial grid feeders",
      "Total module count exceeding 2,400 high-wattage bi-facial/mono panels"
    ],
    imagePlaceholder: "/images/projects/tatu-city.jpg"
  },
  {
    id: "mushroom-motors-hybrid",
    title: "Industrial Workshop Hybrid PV & Battery Microgrid",
    client: "Mushroom Motors",
    category: "C&I Solar & BESS",
    location: "Kiambu County, Kenya",
    period: "May – June 2026",
    pvArray: "40.04 kWp DC (88 × 455 W Modules)",
    inverterCapacity: "36 kW AC (3 × 12 kW Hybrid Inverters in Parallel)",
    batteryStorage: "48 kWh LiFePO4 (3 × 16 kWh Rack Batteries)",
    status: "Completed",
    employerContractor: "Voltifix New Energy SEZ Limited",
    technologies: ["Solar Carport Racking", "12 kW Hybrid Inverters", "LiFePO4 Rack Batteries", "Parallel Sync", "Automatic Transfer Switch"],
    summary:
      "Turnkey solar carport and workshop microgrid installation powering heavy diagnostic equipment, vehicle hoists, and lighting with battery backup.",
    responsibilities: [
      "Supervised elevated solar carport mechanical mounting and panel clamping.",
      "Interconnected 3-phase hybrid inverter bank with automatic load-shedding contactors.",
      "Installed DC disconnects, type-II surge suppressors, and battery busbar terminations.",
      "Commissioned battery charge/discharge parameters and system cloud monitoring portal."
    ],
    keyHighlights: [
      "Dual-purpose solar canopy providing shelter and 40 kWp clean generation",
      "3-phase balanced inverter cluster supporting reactive motor start currents"
    ],
    imagePlaceholder: "/images/projects/mushroom-motors.jpg"
  },
  {
    id: "tsuku-tsuku-hybrid",
    title: "Commercial Facility Solar PV & Energy Storage System",
    client: "Tsuku Tsuku",
    category: "C&I Solar & BESS",
    location: "Kiambu County, Kenya",
    period: "July 2026",
    pvArray: "30.03 kWp DC (66 × 455 W Modules)",
    inverterCapacity: "36 kW AC (3 × 12 kW Hybrid Inverters)",
    batteryStorage: "96 kWh LiFePO4 Battery Bank",
    status: "Completed",
    employerContractor: "Voltifix New Energy SEZ Limited",
    technologies: ["Hybrid Inverters", "LiFePO4 Battery Clusters", "DC Protection", "Load Profiling"],
    summary:
      "Reliability-focused commercial solar installation delivering 30 kWp clean power and high-capacity battery resilience for uninterrupted business operations.",
    responsibilities: [
      "Configured string arrangements to optimize roof azimuth and avoid localized shading.",
      "Wired battery DC distribution boards and integrated battery shunt protection.",
      "Validated phase balance and power-factor correction during initial energization."
    ],
    keyHighlights: [
      "96 kWh storage reservoir ensuring 14+ hours of critical load autonomy"
    ],
    imagePlaceholder: "/images/projects/tsuku-tsuku.jpg"
  },
  {
    id: "industry-4-energy-iot",
    title: "Industry 4.0 Real-Time Energy Telemetry & Cloud Analytics",
    client: "Digital Qatalyst Projects",
    category: "IoT & Automation",
    location: "Nairobi & Dubai",
    period: "October 2024 – May 2026",
    pvArray: "Telemetry Integration Across Multiple Sub-Stations",
    inverterCapacity: "N/A (Multi-Point Power Metering)",
    batteryStorage: "N/A",
    status: "Completed",
    employerContractor: "Digital Qatalyst",
    technologies: ["MQTT", "Python", "Docker", "Raspberry Pi", "Smart Meters (Modbus RTU)", "IoT Gateways", "Time-Series Dashboards"],
    summary:
      "Designed and deployed smart energy monitoring infrastructure linking Modbus energy meters via edge IoT gateways to cloud-hosted analytics dashboards for real-time load analytics and anomaly detection.",
    responsibilities: [
      "Configured RS485/Modbus-to-MQTT edge gateways running on embedded Linux / Raspberry Pi.",
      "Built Dockerized Python microservices to ingest, filter, and stream voltage, current, harmonics, and kWh metrics.",
      "Created predictive maintenance alerts triggered by power-factor degradation and phase-unbalance thresholds."
    ],
    keyHighlights: [
      "Sub-second telemetry processing over lightweight MQTT brokers",
      "Demonstrated actionable 18% energy waste reduction on monitored commercial panels"
    ],
    imagePlaceholder: "/images/projects/iot-energy.jpg"
  },
  {
    id: "esp32-ev-chargepoint-reporter",
    title: "ESP32 Cloud-Connected EV Charger Telemetry & State Reporter",
    client: "Engineering R&D Project",
    category: "IoT & Automation",
    location: "Nairobi, Kenya",
    period: "2026",
    pvArray: "Integrated EV Infrastructure Subsystem",
    inverterCapacity: "AC & DC EV Fast-Charging Stations",
    batteryStorage: "N/A",
    status: "Completed",
    employerContractor: "Voltifix / Independent R&D",
    technologies: ["ESP-IDF", "FreeRTOS", "Embedded C", "MQTT", "NVS", "EasyEDA", "Wokwi Simulation", "RGB State Machine"],
    summary:
      "Embedded IoT telemetry device designed for EV charge-point status reporting, bidirectional cloud state control, fault detection, and visual status indication.",
    responsibilities: [
      "Wrote modular FreeRTOS tasks in embedded C under ESP-IDF for network monitoring and MQTT publishing.",
      "Engineered hardware schematics and PCB layout in EasyEDA for noise-immune 230V proximity coupling.",
      "Implemented fail-safe state machines handling EV connection, charging, fault state, and payment triggers."
    ],
    keyHighlights: [
      "Ultra-low latency remote start/stop commands via MQTT subscription",
      "Simulated and validated under Wokwi hardware-in-the-loop virtual environment"
    ],
    imagePlaceholder: "/images/projects/ev-chargepoint.jpg"
  },
  {
    id: "mariakani-residential-hybrid",
    title: "12 kW Coastal Residential Hybrid PV & Stacked Storage",
    client: "Private Residential Client",
    category: "Residential Hybrid",
    location: "Mariakani, Kilifi County, Kenya",
    period: "May 2026",
    pvArray: "12.18 kWp DC (21 × 580 W High-Output Panels)",
    inverterCapacity: "12 kW AC (1 × 12 kW Deye Hybrid Inverter)",
    batteryStorage: "32 kWh LiFePO4 (6 Stackable Valley Lithium Batteries)",
    status: "Completed",
    employerContractor: "Voltifix New Energy SEZ Limited",
    technologies: ["Deye Inverter", "Valley Lithium Batteries", "Coastal Corrosion-Resistant Racking", "Residential ATS"],
    summary:
      "Off-grid resilient residential solar system designed for high ambient temperatures and saline coastal atmosphere, supplying complete household loads and pump motors.",
    responsibilities: [
      "Installed rooftop mounting rails with marine-grade stainless fasteners.",
      "Configured Deye hybrid inverter parameters, grid curtailment, and generator autostart settings.",
      "Stacked and balanced six modular lithium batteries with low-voltage parallel busbars."
    ],
    keyHighlights: [
      "100% self-sufficient off-grid capability during frequent coastal grid dropouts"
    ],
    imagePlaceholder: "/images/projects/mariakani.jpg"
  },
  {
    id: "willis-auto-spa-hybrid",
    title: "Commercial Vehicle Spa Solar PV & Energy Storage",
    client: "Willis Auto Spa",
    category: "C&I Solar & BESS",
    location: "Kiambu County, Kenya",
    period: "July 2026",
    pvArray: "15.47 kWp DC (34 × 455 W Modules)",
    inverterCapacity: "36 kW AC (3 × 12 kW Inverters in Parallel)",
    batteryStorage: "32 kWh LiFePO4 (2 × 16 kWh Batteries)",
    status: "Completed",
    employerContractor: "Voltifix New Energy SEZ Limited",
    technologies: ["Industrial Pumps Power Supply", "Hybrid Inverters", "LiFePO4 Storage", "Cable Tray Management"],
    summary:
      "Solar power supply powering high-pressure wash pumps and vehicle detailing bays with clean solar power and emergency battery backup.",
    responsibilities: [
      "Mounted 34 photovoltaic modules on structural roof trusses.",
      "Installed 3-unit inverter cluster and battery protection board.",
      "Carried out earthing loop impedance testing and system labeling."
    ],
    keyHighlights: [
      "Surge-dampening electrical protection designed for cyclic high-draw water pumps"
    ],
    imagePlaceholder: "/images/projects/willis-autospa.jpg"
  }
];
```

---

### 3.3 Experience & Career Timeline (`src/data/experience.ts`)
```typescript
export interface WorkExperience {
  period: string;
  role: string;
  company: string;
  location: string;
  type: "Full-Time" | "Contract" | "Internship" | "Attachment";
  bullets: string[];
}

export const workExperience: WorkExperience[] = [
  {
    period: "May 2026 – Present",
    role: "Solar PV Engineer",
    company: "Voltifix New Energy SEZ Limited",
    location: "Nairobi, Kenya",
    type: "Full-Time",
    bullets: [
      "Lead sizing, layout engineering, and field installation for hybrid C&I solar PV systems and BESS up to 150 kW AC / 336 kWh.",
      "Deploy, configure, and troubleshoot AC & DC EV charging infrastructure ensuring strict compliance with Kenya electrical standards.",
      "Direct string interconnections, DC/AC protection switchgear, earthing, bonding, and inverter commissioning.",
      "Prepare engineering documentation, Single-Line Diagrams (SLDs), and test inspection sheets for statutory certifications."
    ]
  },
  {
    period: "October 2024 – May 2026",
    role: "Electrical & Automation Engineer",
    company: "Digital Qatalyst",
    location: "Nairobi & Dubai",
    type: "Full-Time",
    bullets: [
      "Integrated smart power meters and IoT edge gateways using Modbus RTU, MQTT, and Dockerized Python pipelines.",
      "Analyzed electrical telemetry (harmonics, power factor, reactive load) to identify anomalies and optimize operational uptime.",
      "Built real-time telemetry dashboards and predictive maintenance reporting tools for commercial facilities."
    ]
  },
  {
    period: "Nov 2022 – Nov 2023",
    role: "Intern Electrical Engineer",
    company: "Brent Networks",
    location: "Nairobi, Kenya",
    type: "Internship",
    bullets: [
      "Assisted senior engineers in preventive maintenance (PRM) across commercial electrical panels and sub-distribution boards.",
      "Conducted on-site inspection of solar PV installations, testing open-circuit voltages (Voc) and short-circuit currents (Isc).",
      "Documented field observations and upheld rigorous safety and LOTO (Lockout/Tagout) protocols."
    ]
  },
  {
    period: "2019 – 2021",
    role: "Electrical Engineering Trainee / Attachee",
    company: "Magnum Electrical Technology & Rivatex East Africa",
    location: "Nairobi & Eldoret, Kenya",
    type: "Attachment",
    bullets: [
      "Supported industrial panel layout design, AutoCAD electrical drafting, and motor control circuits (DOL, Star-Delta).",
      "Participated in plant-wide electrical maintenance, lighting systems, and safety inspections."
    ]
  }
];
```

---

### 3.4 Technical Competencies Matrix (`src/data/skills.ts`)
```typescript
export interface SkillCategory {
  category: string;
  icon: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Solar PV & Battery Energy Storage (BESS)",
    icon: "Sun",
    skills: [
      "Solar PV Sizing & Layout Design",
      "Hybrid & String Inverter Paralleling (12 kW to 185 kW)",
      "1,500 VDC Utility Architecture",
      "LiFePO4 Battery Storage Cabinets & BMS",
      "DC String Combiners & Overcurrent Protection",
      "Surge Protective Devices (Type I/II SPD)",
      "System Earthing, Grounding & Equipotential Bonding",
      "Pre-Commissioning Inspection & IV-Curve Testing"
    ]
  },
  {
    category: "EV Infrastructure & Industrial Automation",
    icon: "Zap",
    skills: [
      "AC & DC Fast EV Charging Station Commissioning",
      "ESP32 & Embedded C Hardware Interfacing",
      "Modbus RTU / RS485 Communication",
      "MQTT Telemetry & IoT Gateways",
      "Raspberry Pi & Industrial Edge Gateways",
      "Docker Containerization for Edge Services",
      "FreeRTOS Task Orchestration",
      "Motor Starters & Control Panels (DOL, VFD)"
    ]
  },
  {
    category: "Software, Engineering Tools & Analytics",
    icon: "Cpu",
    skills: [
      "AutoCAD (Electrical Schematics & SLDs)",
      "Python (Data Analysis, Pandas, NumPy)",
      "Machine Learning Basics (Decision Trees, SVM)",
      "EasyEDA & Wokwi Circuit Simulation",
      "PVSyst System Modeling Concepts",
      "Linux / Bash Scripting",
      "Git & Version Control"
    ]
  },
  {
    category: "Standards, Safety & Certifications",
    icon: "ShieldCheck",
    skills: [
      "EBK Graduate Engineer Regulations",
      "IEK Engineering Practice Guidelines",
      "Occupational Safety & Health (OSHA / LOTO)",
      "Project Management (PMI / PMP Methodologies)",
      "Single-Line Diagram (SLD) Preparation",
      "Quality Assurance & Commissioning Sign-offs"
    ]
  }
];
```

---

## 4. Antigravity Agent Prompt Playbook (Step-by-Step Execution)

To build this website with **Google Antigravity**, feed the following prompts sequentially to the agent. Run each step, verify the visual output in the Antigravity preview, and then proceed to the next prompt.

```
+-----------------------------------------------------------------------------+
|                     ANTIGRAVITY PROMPT EXECUTION PIPELINE                   |
|                                                                             |
|  [01: Scaffold]  -->  [02: Theme & Tokens]  -->  [03: Layout & Nav]        |
|        |                                                |                   |
|  [04: Data Models] <-- [05: Hero & HUD]   <--  [06: Projects Gallery]      |
|        |                                                |                   |
|  [07: Project Details] -> [08: Experience & Skills] -> [09: Contact Form]   |
|                                                         |                   |
|                                                  [10: Audit & Ship]         |
+-----------------------------------------------------------------------------+
```

---

### Prompt 01: Scaffolding & Dependencies
```text
Role: Principal Frontend Engineer
Context: Building the personal engineering portfolio for Emmanuel Atakos, Electrical & Solar PV Engineer.
Task:
1. Scaffold a React 19 + Vite project with TypeScript named `emmanuel-atakos-portfolio`.
2. Install dependencies:
   - tailwindcss @tailwindcss/vite (or tailwindcss v3 with postcss/autoprefixer)
   - lucide-react
   - clsx tailwind-merge
   - framer-motion
   - react-router-dom
3. Clean out boilerplate (delete App.css, clean App.tsx).
4. Configure basic routes in `src/App.tsx` using `react-router-dom`:
   - `/` (Home)
   - `/projects` (Projects Showcase)
   - `/projects/:id` (Project Details)
   - `/about` (About & Credentials)
   - `/experience` (Career Timeline)
   - `/contact` (Contact)
5. Confirm dev server starts cleanly on localhost with zero TypeScript or build errors.
```

---

### Prompt 02: Design Tokens, Typography & Theme Switcher
```text
Role: UI/UX Engineer
Task:
1. Configure Tailwind CSS with our engineering palette:
   - brand-dark: #090d16
   - brand-surface: #111827
   - brand-surface-light: #1f2937
   - brand-amber (Solar PV): #f59e0b
   - brand-emerald (Clean Energy / BESS): #10b981
   - brand-cyan (IoT / Telemetry): #06b6d4
   - brand-border: rgba(255, 255, 255, 0.08)
2. Create a ThemeContext and hook (`src/context/ThemeContext.tsx`) supporting 'dark' (default) and 'light' modes, persisted to `localStorage`.
3. Build a sleek `ThemeToggle.tsx` component in `src/components/common/` with animated sun/moon icon toggle.
4. Set up base styles in `src/index.css` with smooth fonts (Inter/Geist), antialiasing, custom scrollbar styling, and subtle grid background utilities.
```

---

### Prompt 03: Global Layout, Navbar & Telemetry HUD Bar
```text
Role: Frontend Developer
Task:
1. Build `src/components/layout/Navbar.tsx`:
   - Logo / Name badge: "EMMANUEL ATAKOS" with a pulsing emerald status indicator ("Available for Engineering Roles & Consultancy").
   - Nav links: Home, Projects, Experience, Skills & Credentials, Contact.
   - Action buttons: "Download Project Report" (linking to PDF) + ThemeToggle + "Get in Touch" CTA button.
   - Full responsive mobile drawer / hamburger menu below 768px.
2. Build `src/components/layout/Footer.tsx`:
   - Official credentials statement: "EBK Reg: B25236 | IEK Graduate Engineer".
   - Fast links, contact email/phone, social handles (LinkedIn, GitHub), copyright notice.
3. Build `src/components/common/TelemetryHUD.tsx`:
   - A sticky or hero-level stats strip showcasing live key engineering metrics:
     * 1.65+ MWp Solar Installed
     * 500+ kWh LiFePO4 Deployed
     * 1,500 VDC High-Voltage Systems
     * 50+ IoT Gateways & Telemetry Nodes
4. Assemble into `src/components/layout/Layout.tsx` wrapping the `<Outlet />`.
```

---

### Prompt 04: Structured Data Layer Ingestion
```text
Role: Data Architect
Task:
1. Create directory `src/data/`.
2. Populate the 4 TypeScript data files exactly as defined in Section 3 of the blueprint:
   - `src/data/profile.ts`
   - `src/data/projects.ts` (All 8 full projects including Rainbow Resort 145.6kWp/336kWh, Tatu City 1.4MWp/1.11MW, Mushroom Motors, Industry 4.0 IoT, ESP32 EV charger, etc.)
   - `src/data/experience.ts` (Voltifix, Digital Qatalyst, Brent Networks, Magnum/Rivatex)
   - `src/data/skills.ts` (Solar PV, BESS, IoT & Embedded, Software, Standards)
3. Ensure all types are strictly typed with zero `any`. Export all constants cleanly.
```

---

### Prompt 05: Home Page Engineering Hero & Highlights
```text
Role: Senior Frontend Developer
Task:
1. Build `src/pages/Home.tsx` comprising:
   - Hero Section:
     * High-impact headline: "Engineering Scalable Solar PV, Utility Microgrids & Real-Time IoT Telemetry".
     * Subheadline emphasizing hands-on field installation, 1,500 VDC systems, multi-parallel hybrid inverters, and EBK Graduate registration.
     * CTAs: "Explore Projects (1.65+ MWp)", "View EBK Portfolio", "Contact Me".
     * Right-hand visual card: Interactive simulated "Live System Telemetry" widget displaying animated generation curves, battery State of Charge (SOC 94%), and inverter AC sync indicator.
   - Quick Metrics HUD Strip (incorporating `TelemetryHUD.tsx`).
   - "Core Engineering Disciplines" 3-column feature cards (1. Solar PV & Microgrid Engineering; 2. BESS & LiFePO4 Storage Architecture; 3. IoT Edge Gateways & Cloud Energy Analytics).
   - "Featured Flagship Projects" section showcasing the top 3 projects (Rainbow Resort 145.6kWp/336kWh, Tatu City Link 1.4MWp, Industry 4.0 IoT) with a link to view all projects.
   - Testimonial / Supervisory Endorsement quote citing Paul Mwangi (Technical Manager, Voltifix).
```

---

### Prompt 06: Projects Showcase with Category Filtering & Search
```text
Role: Frontend Engineer
Task:
1. Build `src/components/projects/ProjectCard.tsx`:
   - Displays project title, client, category badge, and location.
   - Metric callout pill boxes: `PV Array`, `Inverter AC`, `Storage kWh` (or architecture info).
   - Tech stack tags (`LiFePO4`, `1500V DC`, `MQTT`, `Deye`, etc.).
   - Hover animations with Framer Motion and arrow link to detail view.
2. Build `src/pages/Projects.tsx`:
   - Interactive category filter tabs: `All Projects`, `C&I Solar & BESS`, `Utility Grid-Tied`, `Residential Hybrid`, `IoT & Automation`.
   - Real-time search bar filtering by keyword, technology, or client name.
   - Capacity summary stats banner dynamically calculating total kWp on screen.
   - Responsive grid (1 col mobile, 2 cols tablet, 3 cols desktop).
```

---

### Prompt 07: Deep-Dive Project Detail / Case Study View
```text
Role: UI & Technical Documentation Engineer
Task:
1. Build `src/pages/ProjectDetail.tsx` matching route `/projects/:id`:
   - Look up project by `id` parameter; if not found, render a graceful 404 with back link.
   - Header with category badge, client name, completion status pill, and breadcrumb.
   - Technical Specifications Grid:
     * PV Array Nominal DC Rating
     * Inverter Output & Configuration
     * Battery Energy Storage System (BESS) capacity
     * Voltage Architecture & Strings
     * Employer / Contractor & Verification Referee
   - System Overview & Engineering Narrative.
   - "Core Responsibilities & Installation Scope" checklist with custom green check icons.
   - "Engineering Highlights & Technical Triumphs" callout box.
   - Related projects carousel / bottom navigation to previous/next project.
```

---

### Prompt 08: Experience, Credentials & Technical Competencies
```text
Role: Frontend Developer
Task:
1. Build `src/pages/Experience.tsx`:
   - Interactive vertical timeline showing roles from Voltifix (May 2026-Present), Digital Qatalyst (2024-2026), Brent Networks (2022-2023), and attachments.
   - Badges for role type (Full-Time, Internship).
   - Detailed bullet points highlighting practical field metrics and accomplishments.
2. Build `src/pages/About.tsx`:
   - Professional bio and engineering philosophy.
   - "Professional Registrations & Credentials" section:
     * Engineers Board of Kenya (EBK) Graduate Engineer No. B25236.
     * Institution of Engineers of Kenya (IEK) Graduate Member.
     * JKUAT B.Sc. Electrical & Electronics Engineering.
     * ALX Africa Data Science Certification.
     * Project Management Institute (PMI) PMP Candidate.
   - "Technical Competencies Matrix" rendering the 4 skill categories with icon headers and interactive skill chips.
   - Downloadable documents bar (Resume PDF & Solar PV Project Report PDF download buttons).
```

---

### Prompt 09: Contact Page & WhatsApp/Email Integration
```text
Role: Frontend Developer
Task:
1. Build `src/pages/Contact.tsx`:
   - Left Column: Direct contact info (emmanuelatakos@gmail.com, +254 795 628 615, Nairobi, Kenya), working hours, response time pledge (< 24 hours).
   - Direct Quick-Action buttons: "Send Email" (`mailto:`) and "Chat on WhatsApp" (`https://wa.me/254795628615?text=Hello%20Emmanuel...`).
   - Right Column: Interactive contact inquiry form with fields:
     * Full Name
     * Email Address
     * Subject / Inquiry Type (Solar PV Design, BESS Consultation, IoT Telemetry, Job Opportunity, Other)
     * Project Details / Message
   - Client-side validation (required fields, valid email format).
   - Mock submit state with loading spinner and friendly green confirmation alert ("Message received. Emmanuel will reply shortly.").
```

---

### Prompt 10: Quality Pass, Performance, SEO & Vercel Shipping
```text
Role: Lead DevOps & QA Engineer
Task:
1. Run accessibility pass (WCAG AA):
   - Ensure all buttons and links have explicit `aria-label`s.
   - Contrast check: ensure amber text and muted gray meet minimum 4.5:1 contrast against dark backgrounds.
   - Add semantic `<main>`, `<nav>`, `<header>`, `<footer>`, `<section>` landmarks.
2. Configure SEO & Meta Tags in `index.html`:
   - Title: "Emmanuel Atakos | Solar PV, BESS & Electrical Engineer"
   - Meta description highlighting EBK registration, 1.4 MWp solar, and 336 kWh BESS experience.
   - Open Graph (OG) tags for LinkedIn and social previews.
3. Configure `vercel.json` with single-page app rewrite rule:
   ```json
   {
     "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
   }
   ```
4. Run `npm run build` or `vite build` and verify 0 errors, no dead links, and bundle output optimized under 250KB gzipped.
```

---

## 5. Ready-to-Use Core Component Blueprints

### 5.1 Telemetry HUD Bar (`src/components/common/TelemetryHUD.tsx`)
```tsx
import React from 'react';
import { Sun, BatteryCharging, Zap, Radio } from 'lucide-react';
import { profileData } from '../../data/profile';

export const TelemetryHUD: React.FC = () => {
  const items = [
    {
      label: 'Solar Installed',
      val: profileData.metrics.totalSolarCapacityMWp,
      sub: 'Peak DC Generation',
      icon: Sun,
      color: 'text-amber-400',
      borderColor: 'border-amber-500/20'
    },
    {
      label: 'BESS Deployed',
      val: profileData.metrics.totalBatteryStorageKWh,
      sub: 'LiFePO4 Storage',
      icon: BatteryCharging,
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/20'
    },
    {
      label: 'DC Bus Rating',
      val: '1,500 VDC',
      sub: 'Utility Grid-Tied Architecture',
      icon: Zap,
      color: 'text-blue-400',
      borderColor: 'border-blue-500/20'
    },
    {
      label: 'Telemetry Nodes',
      val: profileData.metrics.iotGatewaysDeployed,
      sub: 'MQTT & Modbus Gateways',
      icon: Radio,
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/20'
    }
  ];

  return (
    <div className="w-full bg-slate-900/80 backdrop-blur-md border-y border-slate-800 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className={`p-4 rounded-xl bg-slate-800/50 border ${item.borderColor} hover:bg-slate-800 transition-colors`}
            >
              <div className="flex items-center space-x-3 mb-2">
                <Icon className={`w-5 h-5 ${item.color}`} />
                <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                  {item.label}
                </span>
              </div>
              <div className="text-2xl font-bold text-white tracking-tight">{item.val}</div>
              <div className="text-xs text-slate-400 mt-1">{item.sub}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
```

---

### 5.2 Project Card Component (`src/components/projects/ProjectCard.tsx`)
```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Battery, MapPin, ArrowRight, Activity } from 'lucide-react';
import { ProjectItem } from '../../data/projects';

interface ProjectCardProps {
  project: ProjectItem;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group flex flex-col bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-amber-500/40 transition-all duration-300 hover:shadow-xl hover:shadow-amber-500/5">
      {/* Card Header & Category */}
      <div className="p-6 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-2 mb-3">
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
              {project.category}
            </span>
            <span className="text-xs text-slate-400 flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5" />
              {project.location}
            </span>
          </div>

          <h3 className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors mb-2">
            {project.title}
          </h3>

          <p className="text-sm text-slate-400 line-clamp-3 mb-4">
            {project.summary}
          </p>
        </div>

        {/* Technical Specs Grid */}
        <div className="grid grid-cols-2 gap-2 pt-4 border-t border-slate-800/80 mb-4 text-xs">
          <div className="flex items-center gap-2 text-slate-300">
            <Sun className="w-4 h-4 text-amber-400 shrink-0" />
            <span className="truncate">{project.pvArray}</span>
          </div>
          <div className="flex items-center gap-2 text-slate-300">
            <Battery className="w-4 h-4 text-emerald-400 shrink-0" />
            <span className="truncate">{project.batteryStorage}</span>
          </div>
        </div>

        {/* Technologies Pills */}
        <div className="flex flex-wrap gap-1.5 mb-6">
          {project.technologies.slice(0, 3).map((tech, i) => (
            <span
              key={i}
              className="text-[11px] px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-[11px] px-2 py-0.5 rounded bg-slate-800/60 text-slate-400">
              +{project.technologies.length - 3} more
            </span>
          )}
        </div>

        {/* Action Link */}
        <Link
          to={`/projects/${project.id}`}
          className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-lg bg-slate-800/80 text-sm font-medium text-white group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors"
        >
          <span>View Engineering Specs</span>
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};
```

---

## 6. Verification, Deployment & Handover Protocol

### 6.1 Local Build Verification Commands
Run these commands within the Antigravity Terminal interface:
```bash
# 1. Install dependencies
npm install

# 2. Run TypeScript type check
npx tsc --noEmit

# 3. Test production build
npm run build

# 4. Preview compiled production bundle locally
npm run preview
```

### 6.2 Pre-Deployment Quality Checklist
* [ ] **Identity & Verification**: Emmanuel Thomas Atakos, EBK Registration No. B25236 clearly displayed in header and footer.
* [ ] **Accuracy of Technical Metrics**: Rainbow Resort correctly listed as 145.6 kWp / 150 kW AC / 336 kWh BESS; Tatu City correctly specified as 1.4 MWp / 1,500 VDC.
* [ ] **Mobile Touch Targets**: All navigation links and buttons have at least 44px hit targets on mobile devices (tested at 390px viewport).
* [ ] **Zero Console Errors**: Open Chrome DevTools in Antigravity's internal browser; confirm zero React key warnings or failed network calls.
* [ ] **Document Downloads**: Confirm that clicking "Download Experience Report" triggers download or opens `/docs/Emmanuel_Atakos_Project_Experience_Report.pdf`.

---

**Generated for Emmanuel Thomas Atakos | Registered Graduate Engineer (EBK B25236)**  
*Ready for immediate execution in Google Antigravity IDE / Desktop / CLI.*
