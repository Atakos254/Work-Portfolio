export type ProjectCategory =
  | 'C&I Solar & BESS'
  | 'Utility Grid-Tied'
  | 'Residential Hybrid'
  | 'IoT & Automation';

export interface ProjectNarrative {
  challenge: string;
  solution: string;
  impact: string;
}

export interface ProjectMedia {
  type: 'image' | 'video';
  url: string;
  title: string;
  caption?: string;
  thumbnail?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle?: string;
  client: string;
  category: ProjectCategory;
  location: string;
  period: string;
  pvArray: string;
  inverterCapacity: string;
  inverterBrand?: string;
  batteryStorage: string;
  dcArchitecture?: string;
  status: 'Completed' | 'Ongoing' | 'Continuous';
  employerContractor: string;
  technologies: string[];
  summary: string;
  narrative?: ProjectNarrative;
  responsibilities: string[];
  keyHighlights: string[];
  imagePlaceholder: string;
  coverImage?: string;
  coverImagePosition?: string;
  media?: ProjectMedia[];
}

export const projectsData: ProjectItem[] = [
  {
    id: 'tatu-city-link-grid-tied',
    title: '1.3 MWp Rooftop High-Voltage Grid-Connected Solar PV at The Link',
    client: 'The Link, Tatu City',
    category: 'Utility Grid-Tied',
    location: 'Tatu City, Kiambu County, Kenya',
    period: 'December 2025 – March 2026',
    pvArray: '1.30 MWp DC (2,052 × 635 W Bi-facial / Mono Panels)',
    inverterCapacity: '1.11 MW AC (6 × 185 kW Huawei High-Voltage String Inverters)',
    inverterBrand: 'Huawei',
    dcArchitecture: '1,500 VDC High-Voltage DC Bus (18 parallel strings per inverter station)',
    batteryStorage: 'None (Grid-Synchronized Feed-In)',
    status: 'Completed',
    employerContractor: 'Hounen & Keda Solar',
    technologies: [
      'Huawei 185 kW Inverters',
      '1,500 VDC Bus Topology',
      'Underground Raceways & Trays',
      'MV Transformer Coupling',
      'SCADA Monitoring Nodes',
      'IV-Curve Tracing',
    ],
    summary:
      'The 1.3 MWp rooftop solar installation at The Link in Tatu City delivers 1.11 MW AC synchronized power to solve three critical challenges for local businesses: bypassing expensive national grid retail tariffs for SMEs, shielding logistics and manufacturing firms from grid unreliability and blackout downtime, and replacing fossil-fuel energy to meet international sustainability standards.',
    narrative: {
      challenge:
        'Businesses and SMEs operating at The Link in Tatu City faced three major problems: steep operational costs driven by expensive national grid retail tariffs, chronic national grid unreliability causing costly downtime for logistics and manufacturing facilities during blackouts, and fossil-fuel reliance creating barriers to meeting strict international carbon-reduction and eco-certification standards.',
      solution:
        'Engineered a 1.30 MWp rooftop solar plant comprising 2,052 high-density 635 W bifacial modules across a 1,500 VDC bus topology, synchronized into medium-voltage distribution infrastructure via six 185 kW Huawei high-voltage string inverters to provide cheap, clean, and reliable daytime power.',
      impact:
        'Bypasses expensive national grid retail tariffs to provide SMEs with predictable, low-cost electricity rates; delivers localized power during peak daylight hours to protect logistics and manufacturing operations from blackout downtime; and replaces fossil-fuel energy with clean solar power to help export-oriented companies meet strict international carbon-reduction and eco-certification benchmarks.',
    },
    responsibilities: [
      'Executed high-voltage 1,500 VDC string cable management, labeling, and crimp terminations across 108 string sections.',
      'Managed heavy-gauge cable pulling through underground containment trenches and structural raceways.',
      'Implemented grounding rods, earth tape equipotential bonding, and lightning counter connections.',
      'Assisted senior engineers with pre-commissioning string polarity checks, IV-curve performance tracing, and grid synchronization testing.',
    ],
    keyHighlights: [
      'Bypasses expensive national grid retail tariffs, providing SMEs with cheap, predictable electricity rates',
      'Protects logistics and manufacturing companies from costly downtime caused by national grid blackouts during peak daylight hours',
      'Replaces fossil-fuel-reliant energy with clean solar power to help firms meet strict international carbon-reduction and eco-certifications',
      'Operates on a 1,500 VDC architecture with six 185 kW Huawei string inverters to minimize transmission I²R losses',
    ],
    imagePlaceholder: '/images/projects/tatu-city.jpg',
    coverImage: '/media/projects/tatu-city-link-grid-tied/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/cover.jpg',
        title: '1.30 MWp Facility PV Array',
        caption: 'Panoramic aerial view of 2,052 high-power bifacial solar modules installed across The Link, Tatu City.',
      },
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/inverters-1-2-3.jpg',
        title: 'Huawei Inverter Stations (1, 2 & 3)',
        caption: '185 kW Huawei high-voltage string inverters with dedicated DC combiner boxes on a 1,500 VDC bus.',
      },
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/inverters-4-5-6.jpg',
        title: 'Huawei Inverter Stations (4, 5 & 6)',
        caption: '185 kW Huawei string inverters with Suntree PV fuse boxes completing the 1.11 MW AC power block.',
      },
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/Transformer Cabinet.jpg',
        title: 'Medium-Voltage Step-Up Transformer Cabinet',
        caption: 'Medium-voltage step-up transformer and grid interconnection switchgear stepping up inverter output to utility distribution voltage.',
      },
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/Panel Washing Tank & Pump.jpg',
        title: 'Array Washing Reservoir & Pump Station',
        caption: 'Dedicated high-capacity water storage and pressure pumping system engineered for regular solar module soiling maintenance.',
      },
      {
        type: 'video',
        url: '/media/projects/tatu-city-link-grid-tied/inverters-1-2-3-operation.mp4',
        title: 'Inverters 1, 2 & 3 Operational Telemetry',
        caption: 'Field video showing live operational status, synchronized grid feed-in, and monitoring telemetry for inverter bank 1–3.',
      },
      {
        type: 'video',
        url: '/media/projects/tatu-city-link-grid-tied/inverters-4-5-6-operation.mp4',
        title: 'Inverters 4, 5 & 6 Operational Telemetry',
        caption: 'Field video showing live operational status, synchronized grid feed-in, and monitoring telemetry for inverter bank 4–6.',
      },
    ],
  },
  {
    id: 'mushroom-motors-hybrid',
    title: 'Mushroom Motors Commercial Microgrid & Solar Carport',
    client: 'Mushroom Motors',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'May – June 2026',
    pvArray: '40.04 kWp DC (88 × 455 W Mono Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Growatt Hybrid Inverters in Parallel)',
    inverterBrand: 'Growatt',
    dcArchitecture: 'Structural steel carport canopy DC routing with type-II surge suppressors',
    batteryStorage: '48 kWh LiFePO4 (3 × 16 kWh Server-Rack Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Growatt Hybrid Inverters',
      'LiFePO4 Server-Rack Batteries',
      'Solar Carport Racking',
      'CAN/RS485 Bus',
      'Automatic Transfer Switch (ATS)',
      'Motor Inrush Protection',
    ],
    summary:
      'Turnkey 40.04 kWp solar carport canopy and workshop microgrid designed to drastically reduce overall utility power costs and primarily power the business centre and automotive workshops using clean solar energy, supported by a 48 kWh LiFePO4 battery bank and Growatt parallel hybrid inverters to minimize grid outage disruptions.',
    narrative: {
      challenge:
        'Escalating utility grid electricity tariffs and recurrent grid blackouts severely impacted operations across the business centre and automotive workshops, resulting in high recurring operational power bills and disruptive downtime for diagnostic equipment and vehicle hoists.',
      solution:
        'Engineered a 40.04 kWp structural steel solar carport canopy to primarily power the business centre and automotive facility using solar energy, coupled with three 12 kW Growatt parallel hybrid inverters (36 kW AC), a 48 kWh LiFePO4 battery bank, and an ATS cabinet with inductive surge suppression.',
      impact:
        'Substantially slashed overall power costs from the utility grid, minimized grid outage disruptions by ensuring continuous business centre and workshop operations, and provided shaded customer vehicle parking.',
    },
    responsibilities: [
      'Supported elevated installation and clamping of 88 modules on high-clearance vehicle parking structures.',
      'Configured Growatt inverter communication wiring (CAN/RS485) and synchronized parallel AC output.',
      'Interconnected 48 kWh battery banks, verified internal BMS cell voltages, and set charging limits.',
      'Commissioned the system under full shop operating loads, testing vehicle hoist inrush handling.',
    ],
    keyHighlights: [
      'Primarily powers the business centre and workshops with solar energy to drastically slash utility grid power costs',
      'Minimizes grid outage downtime with 48 kWh LiFePO4 battery storage and automated transfer switching',
      'Dual-purpose structural steel carport providing customer vehicle shade and 40.04 kWp clean generation',
    ],
    imagePlaceholder: '/images/projects/mushroom-motors.jpg',
    coverImage: '/media/projects/mushroom-motors-hybrid/Panel Front view.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/Panel Front view.jpg',
        title: 'Commercial Solar Carport (40.04 kWp)',
        caption: 'Cantilevered structural steel solar carport canopy providing customer vehicle shading and clean solar generation.',
      },
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/Panel Structure View.jpg',
        title: 'Carport Structural Steel Superstructure',
        caption: 'Heavy-gauge steel beams, purlins, and module mounting rails engineered for high vehicle clearance.',
      },
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/Inverters.jpg',
        title: 'Growatt Inverter Bank & 800A DC Busbar',
        caption: 'Parallel Growatt hybrid inverters, central distribution panel, and high-current 800A DC busbar enclosure.',
      },
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/Batteries in the storage.jpg',
        title: '48 kWh Modular LiFePO4 Storage',
        caption: 'Four 51.2V rack-mount LiFePO4 battery modules with quick-connect DC busbars in outdoor weatherproof cabinet.',
      },
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/Distribution Boxes.jpg',
        title: 'IP65 DC String Combiner & Protection',
        caption: 'Combiner enclosures with high-voltage DC string breakers, surge protection devices, and isolator switches.',
      },
      {
        type: 'video',
        url: '/media/projects/mushroom-motors-hybrid/panel-structure-design.mp4',
        title: 'Carport Structural CAD Flythrough',
        caption: '3D architectural engineering animation detailing carport truss geometry, vehicle clearances, and PV layouts.',
      },
    ],
  },
  {
    id: 'prof-jacob-bifacial-carport',
    title: 'Prof. Jacob Bifacial Carport Microgrid',
    client: 'Prof. Jacob (Karen)',
    category: 'Residential Hybrid',
    location: 'Karen, Nairobi, Kenya',
    period: 'September 2026',
    pvArray: '12.78 kWp DC (18 × 710 W Bifacial Modules)',
    inverterCapacity: '15 kW AC (1 × 15 kW Growatt Hybrid Inverter)',
    inverterBrand: 'Growatt',
    dcArchitecture: 'Custom steel carport framing with parallel busway battery links and split sub-panels',
    batteryStorage: '32 kWh LiFePO4 (2 × 16 kWh Lithium Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      '710W Bifacial Modules',
      'Growatt 15 kW Hybrid Inverter',
      '32 kWh LiFePO4 Storage',
      'Parallel Busways',
      'Sub-Panel Segregation',
      'Automated Grid Failover',
    ],
    summary:
      'Designed and implemented a 12.78 kWp residential bifacial carport microgrid in Karen, engineered to reduce overall power costs from the utility grid and eliminate household power shortages during grid disturbances through a 15 kW Growatt hybrid inverter, 32 kWh LiFePO4 battery bank, and intelligent sub-panel segregation.',
    narrative: {
      challenge:
        'Escalating utility grid electricity tariffs and recurrent grid disturbances in Karen subjected the residence to frequent power shortages, while heavy domestic loads generated steep recurring monthly grid power bills.',
      solution:
        'Erected a custom carport array of 18 units of 710 W bifacial panels (12.78 kWp) to maximize solar self-generation, integrated a single 15 kW Growatt hybrid inverter with 32 kWh LiFePO4 storage, and physically segregated essential and non-essential sub-panels.',
      impact:
        'Drastically reduced overall electricity costs from the utility grid, minimized power shortages during grid disturbances with seamless automatic failover for essential circuits, and delivered shaded driveway parking.',
    },
    responsibilities: [
      'Conducted site survey, string calculations, and mechanical integrity checks for carport steel framework.',
      'Installed the 15 kW Growatt hybrid inverter and wired both essential and non-essential load sub-panels.',
      'Balanced and synchronized two 16 kWh lithium batteries via parallel busway links.',
      'Commissioned automated grid failure failover testing with complete residential loads.',
    ],
    keyHighlights: [
      'Substantially cuts utility grid power costs by maximizing bifacial solar self-consumption',
      'Minimizes power shortages during grid disturbances via 32 kWh LiFePO4 storage and automated failover',
      '18 units of 710 W bifacial modules mounted on custom steel carport framing',
    ],
    imagePlaceholder: '/images/projects/prof-jacob.jpg',
    coverImage: '/media/projects/prof-jacob-bifacial-carport/Panel Aerial View.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/Carport Front View.jpg',
        title: 'Bifacial Solar Carport (12.78 kWp)',
        caption: 'Cantilevered architectural steel carport with large-format 710 W bifacial modules over driveway paving in Karen.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/Panel Aerial View.jpg',
        title: 'Carport Array Top View',
        caption: 'Aerial perspective of 18 high-efficiency 710 W bifacial dual-glass modules harvesting direct and albedo sunlight.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/Carport Side View.jpg',
        title: 'Carport Structural Steel Profile',
        caption: 'Side perspective detailing structural steel columns, cantilever beams, and integrated cable raceways.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/Growatt Inverter & Batteries.jpg',
        title: '15 kW Growatt Inverter & 32 kWh BESS',
        caption: 'Wall-mounted 15 kW Growatt hybrid inverter, DC isolators, and two 16 kWh LiFePO4 battery units.',
      },
      {
        type: 'video',
        url: '/media/projects/prof-jacob-bifacial-carport/carport-outcome-view.mp4',
        title: 'Completed Installation Walkaround',
        caption: 'Video footage of the energized carport microgrid, showing finished structural finish and driveway integration.',
      },
      {
        type: 'video',
        url: '/media/projects/prof-jacob-bifacial-carport/carport-design.mp4',
        title: 'Carport 3D Structural Model',
        caption: 'Engineering CAD 3D walkthrough modeling load stresses, module clearances, and shading angles.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/Carport Front View Design.png',
        title: 'Carport Structural Front Elevation CAD',
        caption: 'Engineering CAD dimensional drawing detailing 8.1m span, foundation footers, column rebar cages, and module mounting purlins.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/Carport Side View Design.png',
        title: 'Carport Cantilever Cross-Section CAD',
        caption: 'Structural CAD cross-section illustrating cantilever beam taper, module tilt angle, vehicle clearance height, and base anchor bolt specifications.',
      },
    ],
  },
  {
    id: 'runda-bifacial-carport',
    title: 'Runda Bifacial Solar Carport & Energy Storage System',
    client: 'Runda Residence',
    category: 'Residential Hybrid',
    location: 'Runda, Nairobi, Kenya',
    period: 'July 2026',
    pvArray: '12.78 kWp DC (18 × 710 W Bifacial Dual-Glass Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Jua Power Inverters in 3-Phase Parallel)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Architectural carport canopy structure with rubber-damped clamping and balanced neutral links',
    batteryStorage: '32 kWh LiFePO4 (2 × 16 kWh Wall/Rack Units)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      '710W Bifacial Dual-Glass Panels',
      'Jua Power 12 kW Inverters',
      'LiFePO4 Storage',
      'Architectural Carport',
      'EV Charger Integration',
      'Smart Charging Profiles',
    ],
    summary:
      'Engineered an architectural 12.78 kWp bifacial solar carport paired with three 12 kW Jua Power hybrid inverters in 3-phase parallel and 32 kWh LiFePO4 storage, built to reduce overall power costs from the utility grid and eliminate power shortages during grid disturbances for luxury residential loads and EV charging.',
    narrative: {
      challenge:
        'Escalating utility grid power tariffs and frequent grid disturbances in Runda caused recurring power shortages for heavy air conditioning, borehole pumps, and EV charging, while delicate clay roof tiles precluded roof mounting.',
      solution:
        'Constructed an architectural steel carport fitted with 18 large-format 710 W bifacial dual-glass panels (12.78 kWp) to generate primary solar power, paired with three 12 kW Jua Power 3-phase parallel inverters and 32 kWh LiFePO4 storage.',
      impact:
        'Substantially reduced overall power costs from the utility grid, minimized power shortages during grid disturbances through seamless 3-phase whole-home backup, and provided sheltered parking with EV charging capability.',
    },
    responsibilities: [
      'Handled mechanical installation and alignment of large-format 710 W bifacial panels with rubber-damped clamping.',
      'Positioned and terminated three 12 kW Jua Power inverters with balanced neutral links.',
      'Installed battery protection cabinets and integrated thermal safety disconnects.',
      'Programmed smart charging schedules to support home circuits and electric vehicle charging equipment.',
    ],
    keyHighlights: [
      'Drastically cuts overall utility power costs by supplying luxury household loads via high-output solar',
      'Shields the residence from grid disturbances and power shortages with 32 kWh LiFePO4 storage',
      'High-density 710 W bifacial dual-glass modules harvesting ground albedo reflection',
    ],
    imagePlaceholder: '/images/projects/runda-carport.jpg',
    coverImage: '/media/projects/runda-bifacial-carport/Panel & Carport Aerial view.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/Carport front view.jpg',
        title: 'Architectural Solar Carport (12.78 kWp)',
        caption: 'Modern cantilevered steel carport canopy with 18 bifacial dual-glass 710 W panels in Runda.',
      },
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/Panel & Carport Aerial view.jpg',
        title: 'Carport Drone Aerial View',
        caption: 'High-angle aerial capture of dual-glass bifacial panels harvesting overhead and reflected ground albedo.',
      },
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/Carport side view.jpg',
        title: 'Steel Cantilever Profile & Parking Bay',
        caption: 'Side profile view of custom structural steel carport framing over paved residential parking bays.',
      },
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/Inverters.jpg',
        title: '3-Phase Jua Power Inverter Cluster',
        caption: 'Three 12 kW Jua Power hybrid inverters (36 kW AC) with main switchgear and thermal disconnects.',
      },
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/Carport Design.jpg',
        title: 'Architectural 3D Structural Schematic',
        caption: 'Detailed 3D CAD schematic of carport structural steel framing, parking dimensions, and foundation footers.',
      },
    ],
  },
  {
    id: 'kiambu-water-treatment',
    title: 'Kiambu Water Pump Solar Hybrid Plant',
    client: 'Kiambu Water',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'August 2026',
    pvArray: '30.03 kWp DC (66 × 455 W PV Modules)',
    inverterCapacity: '45 kW AC (3 × 15 kW Growatt Hybrid Inverters in 3-Phase Parallel)',
    inverterBrand: 'Growatt',
    dcArchitecture: 'Elevated structural steel canopy array with high-speed DC fuse disconnects and busbars',
    batteryStorage: '48 kWh LiFePO4 (3 × 16 kWh Low-Voltage Modules)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Growatt 15 kW Inverters',
      'LiFePO4 Battery Bank',
      'Variable Frequency Drive (VFD)',
      'Motor Start Suppression',
      'Class-II Surge Arrestors',
      'Phase Rotation Verification',
    ],
    summary:
      'Engineered a 30.03 kWp elevated solar canopy installation with 45 kW AC continuous output and 48 kWh LiFePO4 battery storage, built to primarily power the borehole pump using solar energy, reduce overreliance on the utility grid, and substantially reduce overall electricity costs from the grid.',
    narrative: {
      challenge:
        'Heavy overreliance on the utility grid for continuous borehole and booster water pumping resulted in high recurring electricity bills, while frequent grid disturbances and outages caused disruptive water supply shortages and pump downtime.',
      solution:
        'Installed a 30.03 kWp elevated steel canopy solar array engineered to primarily power the borehole pump using solar energy, backed by three 15 kW Growatt hybrid inverters in 3-phase parallel (45 kW AC), a 48 kWh LiFePO4 battery bank, and Variable Frequency Drive (VFD) motor controls.',
      impact:
        'Substantially reduced the overall cost of power from the utility grid, minimized grid overreliance through self-generated solar pumping, and guaranteed continuous 415V 3-phase water distribution through grid disturbances and outages.',
    },
    responsibilities: [
      'Installed array layout on elevated structural steel canopy optimized for pump station compound clearance.',
      'Configured three 15 kW Growatt inverters in parallel mode to deliver balanced 415 V line-to-line output for water pumping motors.',
      'Terminated 48 kWh battery storage banks to common DC distribution busbars with high-speed fuse disconnects.',
      'Verified earth fault loop impedance, phase rotation, and automatic restart behavior under pump startup surges.',
    ],
    keyHighlights: [
      'Primarily powers the borehole water pump using solar energy to minimize utility grid overreliance and slash power costs',
      'Delivers balanced 415V 3-phase power tailored for high-inductance pumping motor startup',
      '48 kWh battery storage guarantees uninterrupted water supply during utility grid load-shedding',
    ],
    imagePlaceholder: '/images/projects/kiambu-water.jpg',
    coverImage: '/media/projects/kiambu-water-treatment/Panels Front View.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/Panels Front View.jpg',
        title: 'Elevated Solar Canopy Structure',
        caption: 'Front elevation of structural steel solar canopy erected over the water treatment pump station and water tower.',
      },
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/Panel Aerial view 1.jpg',
        title: 'Canopy Aerial Overview (30.03 kWp)',
        caption: 'High-angle perspective of the 30.03 kWp array (66 modules) mounted on an engineered canopy.',
      },
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/Panel Aerial View 2.jpg',
        title: 'Rooftop Canopy Array Alignment',
        caption: 'Overhead view showing module tilt, racking structure, and cable management across the canopy frame.',
      },
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/Growatt Inverters & Batteries.jpg',
        title: '45 kW Growatt Inverters & 48 kWh BESS',
        caption: 'Three 15 kW Growatt hybrid inverters in 3-phase parallel with DC combiner boxes and three 16 kWh stacked LiFePO4 batteries.',
      },
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/Pump VFD Control.jpg',
        title: 'INVT Goodrive200A Pump VFD Control',
        caption: 'Variable Frequency Drive panel providing soft-start control and inrush suppression for intake water pump motors.',
      },
    ],
  },
  {
    id: 'mombasa-3phase-residential',
    title: 'Mombasa 3-Phase Residential Hybrid System',
    client: 'Mombasa Residence',
    category: 'Residential Hybrid',
    location: 'Mombasa, Kenya',
    period: 'September 2026',
    pvArray: '10.92 kWp DC (24 × 455 W Monocrystalline Modules)',
    inverterCapacity: '18 kW AC (3 × 6 kW Jua Power Inverters across 3 Phases)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Anti-corrosive aluminum mounting rails with independent phase distribution boards',
    batteryStorage: '30 kWh LiFePO4 (3 × 10 kWh Standalone Lithium Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power 6 kW Inverters',
      '3-Phase Balancing',
      '30 kWh LiFePO4 Storage',
      'Anti-Corrosion Mounting',
      'Air Conditioning Tuning',
      'Low-Voltage DC Bus',
    ],
    summary:
      'Installed a 10.92 kWp 3-phase residential hybrid solar and 30 kWh LiFePO4 battery system in Mombasa, engineered to reduce overall utility grid electricity costs and minimize power shortages during coastal grid disturbances while maintaining balanced power for continuous air conditioning.',
    narrative: {
      challenge:
        'Steep utility grid power costs combined with chronic coastal grid disturbances and blackouts led to severe household power shortages, leaving the residence without reliable electricity to run essential air conditioning and domestic appliances during humid heatwaves.',
      solution:
        'Engineered a balanced 3-phase system with 10.92 kWp rooftop solar, three 6 kW Jua Power hybrid inverters synchronized across L1/L2/L3, and 30 kWh of LiFePO4 battery storage configured to maximize self-consumption and sustain critical cooling loads.',
      impact:
        'Significantly reduced the overall cost of power from the utility grid, eliminated household power shortages during grid disturbances, and maintained balanced, uninterrupted 3-phase power for air conditioning day and night.',
    },
    responsibilities: [
      'Installed coastal-grade, anti-corrosive aluminum mounting rails and stainless steel fasteners.',
      'Terminated three 6 kW Jua Power inverters across distinct phases (L1, L2, L3) to maintain balanced load draw.',
      'Paralleled three 10 kWh standalone LiFePO4 batteries and established communication with inverter charging stages.',
      'Tuned night-time battery discharge limits to sustain continuous air conditioning loads during coastal power cuts.',
    ],
    keyHighlights: [
      'Substantially cuts monthly utility grid power costs through high-yield rooftop solar generation',
      'Minimizes power shortages during coastal grid disturbances with 30 kWh LiFePO4 battery storage',
      'Balanced 3-phase architecture (L1, L2, L3) prevents neutral overheating and phase drift',
    ],
    imagePlaceholder: '/images/projects/mombasa-residential.jpg',
    coverImage: '/media/projects/mombasa-3phase-residential/Panel Rooftop Aerial View.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/mombasa-3phase-residential/Panel Rooftop Aerial View.jpg',
        title: 'Flat Roof Ballasted PV Array (10.92 kWp)',
        caption: '24 monocrystalline panels installed on ballasted concrete footers across flat residential rooftop in Mombasa.',
      },
      {
        type: 'image',
        url: '/media/projects/mombasa-3phase-residential/Inverter & Batteries.jpg',
        title: '3-Phase Inverter Bank & 30 kWh Battery Cabinets',
        caption: 'Three 6 kW Jua Power inverters synchronized across 3 phases, with three 10 kWh LiFePO4 battery cabinets in secure enclosure.',
      },
      {
        type: 'video',
        url: '/media/projects/mombasa-3phase-residential/panel-design.mp4',
        title: '3D Rooftop Array Simulation',
        caption: '3D structural CAD animation and solar layout simulation for the residential flat roof installation.',
      },
    ],
  },
  {
    id: 'catherine-garden-city-residence',
    title: 'Carol Daykio Residence Hybrid Solar & Storage',
    client: 'Carol Daykio Residence',
    category: 'Residential Hybrid',
    location: 'Daykio, Kiambu County, Kenya',
    period: 'September 2026',
    pvArray: '7.28 kWp DC (16 × 455 W High-Efficiency Panels)',
    inverterCapacity: '12 kW AC (1 × 12 kW Jua Power Hybrid Inverter)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Residential tile-roof bracket mounting with integrated DC breakers and display',
    batteryStorage: '16 kWh LiFePO4 (2 × Standalone Battery Modules)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power 12 kW Inverter',
      'LiFePO4 Standalone Batteries',
      'Tile Roof Mounting Brackets',
      'DC Isolators',
      'Wi-Fi Telemetry Dongle',
      'Mobile App Monitoring',
    ],
    summary:
      'Engineered a 7.28 kWp residential hybrid solar PV and 16 kWh LiFePO4 battery installation on a tile roof at Daykio, designed to reduce overall power costs from the utility grid and eliminate household power shortages during grid disturbances for uninterrupted living and remote work.',
    narrative: {
      challenge:
        'High electricity bills from the utility grid and unpredictable grid disturbances resulted in recurring power shortages that interrupted remote work and household living, while delicate clay roof tiles demanded non-penetrating mounting to prevent water ingress.',
      solution:
        'Installed a 7.28 kWp solar PV array using non-penetrating stainless tile brackets and weatherproof flashings, coupled to a 12 kW Jua Power hybrid inverter, dual standalone LiFePO4 batteries (16 kWh), and smart energy management to prioritize self-generation.',
      impact:
        'Substantially reduced overall power costs from the utility grid, minimized power shortages during grid disturbances with seamless domestic backup, and preserved total roof integrity.',
    },
    responsibilities: [
      'Installed rooftop mounting rails on residential tile roof using specialized tile brackets and flashings.',
      'Connected and commissioned the 12 kW Jua Power hybrid inverter and AC sub-distribution board.',
      'Interconnected dual standalone LiFePO4 battery modules with dedicated DC circuit breakers.',
      'Configured local Wi-Fi monitoring dongle for homeowner mobile real-time energy tracking.',
    ],
    keyHighlights: [
      'Significantly reduces overall utility grid electricity expenses through high-efficiency rooftop generation',
      'Eliminates household power shortages during grid disturbances via 16 kWh LiFePO4 battery storage',
      'Specialized residential tile roof flashing preventing water ingress',
    ],
    imagePlaceholder: '/images/projects/catherine-residence.jpg',
    coverImage: '/media/projects/catherine-garden-city-residence/Panel Rooftop aerial view.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/Panel Rooftop aerial view.jpg',
        title: 'Tile-Roof Solar Array Aerial View',
        caption: 'High-angle perspective of monocrystalline solar modules mounted on residential pitched roof tiles.',
      },
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/12kW inverter and  Batteries.jpg',
        title: '12 kW Hybrid Inverter & Battery Bank',
        caption: '12 kW wall-mounted hybrid inverter with integrated DC isolators and dual lithium battery connections.',
      },
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/2 standalone batteries.jpg',
        title: 'Dual Standalone Lithium Batteries',
        caption: 'Two high-capacity standalone LiFePO4 battery modules providing residential backup power.',
      },
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/Panel Rooftop Side view.jpg',
        title: 'Rooftop Array Side Elevation',
        caption: 'Side profile showing non-penetrating tile-roof bracket mounting and weather-tight flashing.',
      },
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/Panel Rooftop Design.jpg',
        title: 'Rooftop Solar Layout Engineering CAD',
        caption: 'Structural layout schematic showing string orientation, spacing, and roof truss alignment.',
      },
    ],
  },
  {
    id: 'bm-security-operations',
    title: 'BM Security Operations Center Solar Backup',
    client: 'BM Security',
    category: 'C&I Solar & BESS',
    location: 'Nairobi, Kenya',
    period: 'August 2026',
    pvArray: '3.64 kWp DC (8 × 455 W Mono PERC Modules)',
    inverterCapacity: '6 kW AC (1 × 6 kW Jua Power Hybrid Inverter)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Critical line isolation with high-sensitivity DC/AC surge suppressors',
    batteryStorage: '10 kWh LiFePO4 Battery',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power 6 kW Inverter',
      '10 kWh LiFePO4 Storage',
      'Clean Sine Wave Inversion',
      'High-Sensitivity SPDs',
      'Zero-Latency Transfer',
      'Critical Ops Isolation',
    ],
    summary:
      'Mission-critical solar backup power system engineered for BM Security’s central operations room, featuring an 8-panel (3.64 kWp) array and 10 kWh LiFePO4 battery storage to guarantee uninterrupted power for radio and server equipment.',
    narrative: {
      challenge:
        'BM Security’s 24/7 central alarm and radio dispatch center in Nairobi coordinates rapid armed response; even a 3-second blackout drops live radio channels, surveillance walls, and alarm servers.',
      solution:
        'Engineered an isolated critical-power topology with an 8-panel solar array (3.64 kWp), a 6 kW Jua Power pure sine wave hybrid inverter, 10 kWh LiFePO4 storage, and dual high-sensitivity SPDs.',
      impact:
        'Achieved zero-latency, noise-free emergency power transfer that prevents server reboots and keeps security radio dispatch continuously operational through utility grid failures.',
    },
    responsibilities: [
      'Configured 6 kW Jua Power inverter for critical line isolation, ensuring noise-free power for radio and server equipment.',
      'Installed high-sensitivity DC and AC surge suppressors to defend against grid switching transients.',
      'Paralleled and commissioned the 10 kWh LiFePO4 battery bank with comprehensive DC circuit breaker protection.',
      'Performed seamless transfer tests to confirm uninterruptible changeover during utility dropouts.',
    ],
    keyHighlights: [
      'Zero-interruption power changeover safeguarding mission-critical surveillance and communication racks',
      'Dedicated 10 kWh LiFePO4 storage bank delivering continuous control-room uptime',
      'Isolated electrical topology shielding sensitive radio equipment from line noise and voltage spikes',
    ],
    imagePlaceholder: '/images/projects/bm-security.jpg',
    coverImage: '/media/projects/bm-security-operations/Panel Layout.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/bm-security-operations/Panel Layout.jpg',
        title: 'Rooftop Solar Array Layout (3.64 kWp)',
        caption: '8 high-efficiency 455 W Mono PERC modules mounted on aluminum strut rails on corrugated metal roof.',
      },
      {
        type: 'image',
        url: '/media/projects/bm-security-operations/Inverter and Battery.jpg',
        title: 'Hybrid Inverter & 10 kWh LiFePO4 Battery',
        caption: 'Jua Power hybrid inverter, AC/DC breaker distribution board, changeover switch, and wall-mounted 10 kWh battery module.',
      },
    ],
  },
  {
    id: 'mariakani-residential-hybrid',
    title: 'Mariakani Coastal Residential Hybrid PV System',
    client: 'Private Residence',
    category: 'Residential Hybrid',
    location: 'Mariakani, Kilifi County, Kenya',
    period: 'May 2026',
    pvArray: '12.18 kWp DC (21 × 580 W High-Output Modules)',
    inverterCapacity: '12 kW AC (1 × 12 kW Deye Hybrid Inverter)',
    inverterBrand: 'Deye',
    dcArchitecture: 'Coastal-grade corrosion-resistant racking with modular stackable DC battery links',
    batteryStorage: '32 kWh LiFePO4 (6 Stackable Valley Lithium Batteries)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Deye 12 kW Inverter',
      'Valley Lithium Batteries',
      'Peak-Shaving Control',
      'Generator Auto-Start',
      'Marine-Grade Racking',
      'Earthing Continuity Verification',
    ],
    summary:
      'Coastal-engineered 12.18 kWp residential hybrid solar and 32 kWh LiFePO4 storage system in Mariakani, built to reduce overall power costs from the utility grid, eliminate power shortages during severe coastal grid disturbances, and withstand high ambient saline conditions.',
    narrative: {
      challenge:
        'High electricity bills from the utility grid and frequent, prolonged grid disturbances in Kilifi County caused frustrating power shortages during sweltering heat, while harsh saline humidity posed corrosion hazards to electrical hardware.',
      solution:
        'Installed 21 units of 580 W panels on coastal-grade anodized aluminum racking, paired with a 12 kW Deye hybrid inverter with peak-shaving control and 32 kWh modular Valley LiFePO4 batteries to maximize solar self-generation.',
      impact:
        'Drastically lowered overall power costs from the utility grid, minimized power shortages during grid disturbances with resilient off-grid autonomy, and sustained continuous air conditioning despite coastal heat.',
    },
    responsibilities: [
      'Installed coastal-grade corrosion-resistant rooftop mounting rails and clamps.',
      'Configured Deye inverter parameters including peak-shaving, smart-load port, and generator auto-start contacts.',
      'Stacked, inter-connected, and balanced six modular Valley lithium batteries with common parallel links.',
      'Performed earthing continuity checks and safety tripping verification prior to handover.',
    ],
    keyHighlights: [
      'Substantially reduces overall power costs from the utility grid via high-output coastal solar array',
      'Minimizes power shortages during grid disturbances with 32 kWh modular LiFePO4 storage and auto-start',
      'Tailored for high ambient temperatures and saline coastal humidity with marine-grade fasteners',
    ],
    imagePlaceholder: '/images/projects/mariakani.jpg',
    coverImage: '/media/projects/mariakani-residential-hybrid/Panel Aerial View.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/mariakani-residential-hybrid/Panel Aerial View.jpg',
        title: 'Elevated Coastal Solar Array (12.18 kWp)',
        caption: '21 high-output 580 W half-cut monocrystalline modules on elevated structural steel rooftop racking facing coastal hills.',
      },
      {
        type: 'image',
        url: '/media/projects/mariakani-residential-hybrid/Inverter & Battery.jpg',
        title: '12 kW Deye Inverter & 32 kWh Battery Bank',
        caption: 'Deye 12 kW hybrid inverter, Chint distribution switchgear, and dual modular Valley LiFePO4 battery stacks.',
      },
    ],
  },
  {
    id: 'willis-auto-spa-hybrid',
    title: 'Willis Auto Spa Solar PV & Pumping Energy System',
    client: 'Willis Auto Spa',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'July 2026',
    pvArray: '15.47 kWp DC (34 × 455 W Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Jua Power Inverters in Parallel)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Weather-tight metallic conduits to central equipment room with dedicated sub-distribution boards',
    batteryStorage: '32 kWh LiFePO4 (2 × 16 kWh Batteries in Parallel)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power Hybrid Inverters',
      '32 kWh LiFePO4 Storage',
      'Metallic Conduit Pathways',
      'High-Pressure Pump Power',
      'Inrush Surge Tuning',
      'Earthing Loop Verification',
    ],
    summary:
      'Solar PV and energy storage solution engineered to power high-pressure car wash pumps and commercial vehicle detailing bays with clean solar power and 32 kWh emergency battery backup.',
    narrative: {
      challenge:
        'High-pressure ceramic plunger pumps and vacuum extraction motors cycle intermittently hundreds of times daily, stalling operations and damaging switchgear during grid blackouts.',
      solution:
        'Deployed a 15.47 kWp rooftop solar array and three 12 kW Jua Power parallel hybrid inverters with 32 kWh LiFePO4 storage, fine-tuning inverter firmware surge thresholds for cyclic pump loads.',
      impact:
        'Eliminated wash bay downtime during peak weekend customer traffic, prolonged pump motor operating life, and cut daytime utility power draw significantly.',
    },
    responsibilities: [
      'Mounted and anchored modules on pitched commercial roof trusses.',
      'Routed DC wiring through weather-tight metallic conduits to the central equipment room.',
      'Mounted and connected three Jua Power hybrid inverters with dedicated sub-distribution boards.',
      'Programmed inverter surge thresholds to sustain inductive high-pressure water pump motor start cycles.',
    ],
    keyHighlights: [
      'Programmed surge thresholds tailored to eliminate tripping during high-inrush pressure pump starts',
      'Weather-tight metallic conduit runs protecting high-stress commercial electrical pathways',
      '32 kWh parallel LiFePO4 storage maintaining detailing operations during utility cuts',
    ],
    imagePlaceholder: '/images/projects/willis-autospa.jpg',
    coverImage: '/media/projects/willis-auto-spa-hybrid/Panel Structure 1 View.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/willis-auto-spa-hybrid/Panel Structure 1 View.jpg',
        title: 'Commercial Solar Canopy Structure',
        caption: 'Elevated structural steel canopy supporting 34 monocrystalline solar modules above auto spa wash bays.',
      },
      {
        type: 'image',
        url: '/media/projects/willis-auto-spa-hybrid/Panel Structure 2 View.jpg',
        title: 'Canopy Array Alignment & Clamping',
        caption: 'Angled view of 15.47 kWp PV array detailing rail mounting, end clamps, and weather-tight DC conduit routing.',
      },
    ],
  },
  {
    id: 'oaklands-5-villas-residence',
    title: 'Oaklands 5 Villas Residential Hybrid System',
    client: 'Oaklands 5 Villas',
    category: 'Residential Hybrid',
    location: 'Kiambu County, Kenya',
    period: 'August 2026',
    pvArray: '4.55 kWp DC (10 × 455 W Rooftop Modules)',
    inverterCapacity: '6 kW AC (1 × 6 kW Jua Power Hybrid Inverter)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Residential rooftop DC/AC conduit pathways with equipment backplates and labeling',
    batteryStorage: '16 kWh LiFePO4 (1 × 16 kWh Battery Pack)',
    status: 'Ongoing',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power 6 kW Inverter',
      '16 kWh LiFePO4 Battery',
      'Roof Truss Mounting',
      'DC/AC Conduits',
      'Pre-Commissioning Verification',
      'Residential ATS',
    ],
    summary:
      'Standardized multi-villa residential solar and storage deployment at Oaklands 5 Villas, featuring a 4.55 kWp rooftop PV array, 6 kW Jua Power hybrid inverter, and 16 kWh LiFePO4 battery pack engineered to reduce overall power costs from the utility grid and safeguard homes against grid disturbances and power shortages.',
    narrative: {
      challenge:
        'High utility grid electricity bills and frequent localized grid disturbances subjected villa homeowners to recurring power shortages, creating a need for an estate-approved microgrid solution that complied with strict community aesthetic guidelines.',
      solution:
        'Standardized a 4.55 kWp rooftop solar pergola system, a 6 kW Jua Power hybrid inverter, and 16 kWh LiFePO4 battery storage with pre-engineered conduit pathways and aesthetic structural integration.',
      impact:
        'Significantly reduced overall power costs from the utility grid, eliminated domestic power shortages during grid disturbances with seamless battery backup, and established an architecturally harmonious standard for the gated community.',
    },
    responsibilities: [
      'Assembled roof mounting structures and positioned 10 photovoltaic panels.',
      'Prepared DC/AC conduit pathways, cable terminations, and equipment backplates.',
      'Coordinated equipment labeling, circuit verification, and pre-commissioning paperwork.',
    ],
    keyHighlights: [
      'Reduces overall power costs from the utility grid via standardized rooftop pergola solar generation',
      'Safeguards villa homes against grid disturbances and power shortages with 16 kWh LiFePO4 storage',
      'Standardized scalable residential hybrid architecture suited for multi-unit gated villa communities',
    ],
    imagePlaceholder: '/images/projects/oaklands-villas.jpg',
    coverImage: '/media/projects/oaklands-5-villas-residence/Panel Front View.jpg',
    coverImagePosition: 'center 0%',
    media: [
      {
        type: 'image',
        url: '/media/projects/oaklands-5-villas-residence/Panel Front View.jpg',
        title: 'Rooftop Pergola Solar Canopy',
        caption: 'Elevated structural steel solar canopy mounted above the residential villa terrace adhering to estate aesthetics.',
      },
      {
        type: 'image',
        url: '/media/projects/oaklands-5-villas-residence/Panel Side view.jpg',
        title: 'Driveway & Villa Canopy Perspective',
        caption: 'Street view of the villa residence highlighting seamless architectural integration of the solar pergola.',
      },
    ],
  },
  {
    id: 'power-analysis-dynamic-load-calculations',
    title: 'Power Analysis & Load Calculations',
    subtitle: 'Energy Demand Modeling, Capacity Sizing & Phase Balancing',
    client: 'Residential & Industrial',
    category: 'IoT & Automation',
    location: 'Nairobi & Regional Industrial Zones',
    period: 'January 2025 – Present',
    pvArray: 'Demand Profiling & Logging (Interval Data & kVA Peaks)',
    inverterCapacity: 'Capacity Sizing Models (Continuous & Surge PV/BESS)',
    inverterBrand: 'Power Quality Analyzers & Energy Loggers',
    dcArchitecture: 'Single Line Diagrams (SLDs) & AutoCAD Electrical Cable Schedules',
    batteryStorage: 'Phase Balancing & Harmonics (IEC 60364 & IEEE 519)',
    status: 'Continuous',
    employerContractor: 'Engineering Consultancy / Technical Services',
    technologies: [
      'Power Quality Analyzers',
      'Energy Loggers',
      'Python Load Modeling',
      'Advanced Excel Modeling',
      'AutoCAD Electrical',
      'Single Line Diagrams (SLDs)',
      'IEC 60364',
      'IEEE 519',
      'National Electrical Codes',
    ],
    summary:
      'Conducted comprehensive electrical power quality analyses and dynamic load profiling across residential and industrial facilities. Translated operational demand curves and peak usage patterns into precise sizing models for hybrid solar PV, Battery Energy Storage Systems (BESS), and backup generation—ensuring power reliability, optimal power factor, and regulatory compliance.',
    narrative: {
      challenge:
        'Residential and industrial facilities frequently faced excessive utility peak kVA demand penalties, severe three-phase unbalance, and harmonic distortion that overheated transformers, overloaded neutral conductors, and caused equipment mis-sizing.',
      solution:
        'Conducted detailed power quality logging and dynamic demand profiling using advanced analyzers, formulating continuous and surge load models in Python and Excel alongside AutoCAD Electrical Single Line Diagrams (SLDs) to precisely size solar PV, BESS C-rates, and protection equipment.',
      impact:
        'Delivered mathematically verified system capacity sizing, eliminated phase unbalance and harmonic distortion under IEEE 519 and IEC 60364 guidelines, optimized power factor, and prevented switchgear failure.',
    },
    responsibilities: [
      'Demand Profiling & Logging: Analyzed historical interval data, peak kilovolt-ampere (kVA) demand, and power factor logs to isolate critical versus non-critical loads.',
      'Phase Balancing & Harmonic Mitigation: Evaluated three-phase unbalance and Total Harmonic Distortion (THD) across distribution panels to prevent transformer overheating and neutral conductor overloading.',
      'System Capacity Sizing: Formulated continuous and surge load calculations to appropriately size PV array capacities, inverter ratings, battery C-rates, and switchgear.',
      'Protective Device & Cable Sizing: Calculated prospective fault currents, voltage drop constraints, and cable schedules in accordance with IEE/IEC standards.',
    ],
    keyHighlights: [
      'Demand Profiling & Logging: Analyzed historical interval data, peak kVA demand, and power factor logs isolating critical vs non-critical loads',
      'Phase Balancing & Harmonic Mitigation: Evaluated three-phase unbalance and THD across distribution panels to eliminate neutral overloading',
      'System Capacity Sizing: Formulated continuous and surge calculations to appropriately size PV array capacities, inverter ratings, and battery C-rates',
      'Protective Device & Cable Sizing: Calculated prospective fault currents, voltage drop constraints, and cable schedules in accordance with IEE/IEC standards',
    ],
    imagePlaceholder: '/images/projects/power-analysis.jpg',
    coverImage: '/media/projects/power-analysis-dynamic-load-calculations/Growatt Power Monitoring Dashboard.png',
    media: [
      {
        type: 'image',
        url: '/media/projects/power-analysis-dynamic-load-calculations/Growatt Power Monitoring Dashboard.png',
        title: 'Growatt Cloud Power Monitoring & Load Analytics',
        caption: 'Live telemetry interface displaying PV generation, inverter throughput, battery state of charge (SOC), and building load consumption curves.',
      },
      {
        type: 'image',
        url: '/media/projects/power-analysis-dynamic-load-calculations/Energy Trend Analysis.png',
        title: '24-Hour Dynamic Energy & Self-Consumption Trend',
        caption: 'High-resolution interval telemetry capturing solar yield, domestic load profiles, battery cycling, and 98.8% self-consumption rate.',
      },
      {
        type: 'image',
        url: '/media/projects/power-analysis-dynamic-load-calculations/Battery Trend Analysis.png',
        title: 'Battery Multi-Day Charge/Discharge & SOC Performance',
        caption: '7-day historical charge/discharge cycling, daily depth of discharge (DoD), and rack power output characteristics.',
      },
      {
        type: 'image',
        url: '/media/projects/power-analysis-dynamic-load-calculations/Sample Single Line Diagram.png',
        title: 'Electrical Single Line Diagram (SLD) & Protection Schematic',
        caption: 'Engineering CAD single line diagram detailing string configuration (3 × 6 Topcon 710W modules), DC combiner box, Growatt 15kW 3-phase hybrid inverter, and 32 kWh battery storage.',
      },
    ],
  },
  {
    id: 'rainbow-resort-hybrid',
    title: 'Rainbow Resort Commercial Hybrid Solar PV & High-Capacity BESS',
    client: 'Rainbow Resort',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'June 2026',
    pvArray: '145.60 kWp DC (320 × 455 W Mono PERC Modules)',
    inverterCapacity: '150 kW AC (3 × 50 kW Jua Power Parallel Inverters)',
    inverterBrand: 'Jua Power',
    batteryStorage: '336 kWh LiFePO4 (3 × 112 kWh Industrial Cabinets)',
    dcArchitecture: 'Elevated structural steel canopies with centralized combiner boxes & automated battery combiner',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power Hybrid Inverters',
      '336 kWh LiFePO4 Cabinets',
      'Master-Slave BMS Orchestration',
      'Dual Type I+II SPDs',
      'Automatic Transfer Switchgear',
      'DC Shunt-Trip Disconnects',
    ],
    summary:
      'Engineered and deployed a high-capacity 145.60 kWp commercial hybrid solar PV and 336 kWh LiFePO4 battery storage system for Rainbow Resort, eliminating diesel generator reliance, maximizing self-consumption, and providing uninterrupted power during utility grid outages.',
    narrative: {
      challenge:
        'Volatile grid outages and crippling monthly diesel fuel costs threatened resort operations, while noisy generator runtime and voltage sags disrupted guest comfort.',
      solution:
        'Engineered a 145.6 kWp canopy solar array coupled to three 50 kW Jua Power parallel hybrid inverters and 336 kWh industrial LiFePO4 battery storage with automated transfer switchgear.',
      impact:
        'Displaced daytime diesel generator runtime completely, suppressed night-time fuel burn by 80%, and guaranteed seamless zero-interruption power across the resort.',
    },
    responsibilities: [
      'Supported structural alignment, ground-mount racking erection, and module clamping for 320 modules.',
      'Terminated high-amperage DC string inputs into centralized combiner boxes and verified open-circuit voltage polarity.',
      'Coordinated positioning, paralleling, and communication cable linking between the three 50 kW Jua Power inverters and the battery cabinet BMS.',
      'Conducted system insulation resistance testing, equipotential bonding checks, and commissioning synchronization.',
    ],
    keyHighlights: [
      '336 kWh LiFePO4 battery storage across three 112 kWh industrial outdoor cabinets with automated combiner',
      'Suppressed diesel generator runtime during frequent utility load interruptions',
      'Synchronized 150 kW AC continuous capacity with dual Type I+II SPD electrical protection',
    ],
    imagePlaceholder: '/images/projects/rainbow-resort.jpg',
    coverImage: '/media/projects/rainbow-resort-hybrid/cover.jpg',
    media: [],
  },
  {
    id: 'tsuku-tsuku-hybrid',
    title: 'Tsuku Tsuku Hospitality Solar & Storage System',
    client: 'Tsuku Tsuku',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: 'July 2026',
    pvArray: '30.03 kWp DC (66 × 455 W Modules)',
    inverterCapacity: '36 kW AC (3 × 12 kW Jua Power Hybrid Inverters)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Low-loss rooftop DC cabling with multi-rack busbar distribution and circuit isolators',
    batteryStorage: '96 kWh LiFePO4 (6 × 16 kWh Battery Clusters)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power Hybrid Inverters',
      '96 kWh LiFePO4 Storage',
      'Master-Slave Parallel Operation',
      'Busbar Distribution',
      'Phase Symmetry Balancing',
      'Circuit Isolators',
    ],
    summary:
      'Reliability-focused 30.03 kWp commercial solar installation delivering 36 kW AC combined three-phase capacity and a 96 kWh LiFePO4 high-autonomy battery bank for business continuity.',
    narrative: {
      challenge:
        'Commercial walk-in cold rooms and hospitality kitchens faced stock spoilage and revenue disruption during lengthy evening blackouts, with noisy auxiliary generators draining operational profits.',
      solution:
        'Installed a 30.03 kWp rooftop solar PV array driving three 12 kW Jua Power hybrid inverters in master-slave 3-phase parallel with a high-autonomy 96 kWh LiFePO4 battery bank.',
      impact:
        'Delivered 14+ hours of continuous off-grid autonomy for critical refrigeration, maintained perfect phase symmetry, and significantly reduced monthly commercial electricity bills.',
    },
    responsibilities: [
      'Planned DC cable routes across roof sections to reduce DC resistance losses.',
      'Set up three 12 kW Jua Power inverters for master-slave parallel operation.',
      'Integrated multi-rack 96 kWh LiFePO4 battery storage, installing busbar distribution and circuit isolators.',
      'Carried out load balancing across distribution circuits to maintain phase symmetry under backup conditions.',
    ],
    keyHighlights: [
      '96 kWh high-autonomy LiFePO4 battery reservoir offering 14+ hours of critical load autonomy',
      'Synchronized 3-phase master-slave parallel inverter architecture',
      'Maintains strict phase symmetry across commercial refrigeration and processing equipment',
    ],
    imagePlaceholder: '/images/projects/tsuku-tsuku.jpg',
    coverImage: '/media/projects/tsuku-tsuku-hybrid/cover.jpg',
    media: [],
  },
  {
    id: 'industry-4-energy-iot',
    title: 'Industry 4.0 Real-Time Energy Telemetry & Cloud Analytics',
    client: 'Digital Qatalyst Projects',
    category: 'IoT & Automation',
    location: 'Nairobi & Dubai',
    period: 'October 2024 – May 2026',
    pvArray: 'Sub-Station Meter Network & Telemetry Ingestion',
    inverterCapacity: 'Multi-Point Power Monitoring (Smart Meters)',
    inverterBrand: 'N/A (Smart Meters)',
    dcArchitecture: 'RS485 Modbus RTU bus daisy-chained across commercial distribution switchboards',
    batteryStorage: 'Real-Time Cloud Dashboards & Analytics',
    status: 'Completed',
    employerContractor: 'Digital Qatalyst',
    technologies: [
      'RS485 Modbus RTU',
      'MQTT Broker',
      'Python Pipelines',
      'Docker Microservices',
      'Raspberry Pi Gateways',
      'Time-Series Dashboards',
      'Harmonics Analysis',
    ],
    summary:
      'Engineered an edge IoT energy telemetry system connecting commercial switchboard power meters via Raspberry Pi Linux gateways to MQTT and Dockerized Python analytics pipelines, achieving an 18% reduction in unmetered energy waste.',
    narrative: {
      challenge:
        'Commercial facilities operated blind to real-time power factor penalties, phase unbalance, and unmetered energy waste, leading to unexpected switchgear trips and high utility demand charges.',
      solution:
        'Deployed multi-channel RS485 Modbus RTU power meters linked to Raspberry Pi edge gateways running Dockerized Python microservices that stream electrical telemetry over MQTT to cloud dashboards.',
      impact:
        'Provided second-by-second electrical visibility, triggered automated predictive alerts for phase unbalance and harmonics, and directly enabled a verified 18% reduction in unmetered energy waste.',
    },
    responsibilities: [
      'Deployed edge IoT gateways connected to multi-channel energy meters inside commercial distribution switchboards.',
      'Programmed Python services to ingest voltage, phase current, power factor, and harmonics.',
      'Configured lightweight MQTT pub/sub streams feeding real-time energy analytics dashboards.',
      'Derived predictive maintenance metrics that supported an 18% reduction in unmetered energy waste.',
    ],
    keyHighlights: [
      'Demonstrated actionable 18% energy waste reduction on monitored commercial panels',
      'Sub-second telemetry processing over lightweight MQTT brokers and Dockerized microservices',
      'Predictive maintenance alerts triggered by power-factor degradation and phase-unbalance thresholds',
    ],
    imagePlaceholder: '/images/projects/iot-energy.jpg',
    coverImage: '/media/projects/industry-4-energy-iot/cover.jpg',
    media: [],
  },
  {
    id: 'esp32-ev-chargepoint-reporter',
    title: 'ESP32 Cloud-Connected EV Charge-Point Status Reporter',
    client: 'Engineering R&D Infrastructure',
    category: 'IoT & Automation',
    location: 'Nairobi, Kenya',
    period: 'June 2026',
    pvArray: 'Station Power Coupling Subsystem',
    inverterCapacity: 'AC & DC EV Fast-Charger Coupling',
    inverterBrand: 'Embedded Controller',
    dcArchitecture: 'Noise-isolated PCB layout guard-banded against 230V AC / high-power DC switching noise',
    batteryStorage: 'Bidirectional MQTT Cloud Telemetry & NVS',
    status: 'Completed',
    employerContractor: 'Voltifix Infrastructure / Independent R&D',
    technologies: [
      'ESP32',
      'FreeRTOS',
      'ESP-IDF',
      'Embedded C',
      'MQTT State Machine',
      'Non-Volatile Storage (NVS)',
      'EasyEDA PCB Design',
      'Wokwi Simulation',
    ],
    summary:
      'Embedded hardware telemetry unit designed for AC & DC EV charging stations, utilizing FreeRTOS firmware in Embedded C and noise-isolated PCB circuitry to provide real-time status reporting, error alerting, and remote cloud commands.',
    narrative: {
      challenge:
        'EV charging stations required real-time cloud monitoring and remote control, but commercial controllers were costly and vulnerable to electrical noise from nearby high-current contactor switching.',
      solution:
        'Developed an embedded IoT telemetry unit around the ESP32 using FreeRTOS and Embedded C, featuring a noise-isolated 2-layer PCB with optocouplers and an MQTT state machine with local NVS caching.',
      impact:
        'Delivered sub-second cloud status reporting and remote control, verified immunity to 230V AC / 400V DC switching spikes, and validated firmware via virtual Wokwi simulation before deployment.',
    },
    responsibilities: [
      'Developed multi-tasking FreeRTOS firmware in embedded C handling network connectivity and station state transitions.',
      'Designed noise-isolated PCB layout in EasyEDA to guard against high-power AC switching interference.',
      'Implemented MQTT state machine providing live status reporting, error alerting, and remote cloud commands.',
    ],
    keyHighlights: [
      'Multi-tasking FreeRTOS firmware running non-blocking MQTT state machines',
      'Custom noise-isolated PCB layout built to withstand high-power AC & DC switching spikes',
      'Simulated and validated under Wokwi hardware-in-the-loop virtual environment',
    ],
    imagePlaceholder: '/images/projects/ev-chargepoint.jpg',
    coverImage: '/media/projects/esp32-ev-chargepoint-reporter/cover.jpg',
    media: [],
  },
];
