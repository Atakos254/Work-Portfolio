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
  client: string;
  category: ProjectCategory;
  location: string;
  period: string;
  pvArray: string;
  inverterCapacity: string;
  inverterBrand?: string;
  batteryStorage: string;
  dcArchitecture?: string;
  status: 'Completed' | 'Ongoing';
  employerContractor: string;
  technologies: string[];
  summary: string;
  narrative?: ProjectNarrative;
  responsibilities: string[];
  keyHighlights: string[];
  imagePlaceholder: string;
  coverImage?: string;
  media?: ProjectMedia[];
}

export const projectsData: ProjectItem[] = [
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
    media: [
      {
        type: 'image',
        url: '/media/projects/rainbow-resort-hybrid/cover.jpg',
        title: 'Elevated Canopy Solar Array (145.6 kWp)',
        caption: '320 high-efficiency 455 W Mono PERC modules mounted on elevated structural steel canopies.',
      },
      {
        type: 'image',
        url: '/media/projects/rainbow-resort-hybrid/inverters.jpg',
        title: '3 × 50 kW Jua Power Inverter Cluster',
        caption: 'Parallel synchronized 3-phase hybrid inverter cluster delivering 150 kW AC continuous output.',
      },
      {
        type: 'image',
        url: '/media/projects/rainbow-resort-hybrid/storage.jpg',
        title: '336 kWh LiFePO4 Storage Cabinets',
        caption: 'Three 112 kWh outdoor cabinets coupled through an automated combiner and master BMS.',
      },
      {
        type: 'video',
        url: '/media/projects/rainbow-resort-hybrid/walkthrough.mp4',
        title: 'System Walkthrough & Commissioning',
        caption: 'Field video footage of the energized microgrid and live transfer testing under load.',
      },
    ],
  },
  {
    id: 'tatu-city-link-grid-tied',
    title: '1.3 MWp Utility-Scale High-Voltage Grid-Connected Solar PV',
    client: 'Tatu City Link',
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
      'Utility-scale distributed generation plant delivering 1.11 MW AC synchronized power into medium-voltage infrastructure via six 185 kW Huawei high-voltage string inverters configured on a 1,500 VDC bus topology.',
    narrative: {
      challenge:
        'An expanding industrial zone required a direct 1.11 MW AC clean power injection into the medium-voltage grid, where standard 1,000 VDC layouts would have caused severe I²R copper losses and costly trenching.',
      solution:
        'Engineered a 1,500 VDC high-voltage bus topology utilizing 2,052 high-density 635 W bifacial modules across 108 strings, paired with six 185 kW Huawei high-power string inverters.',
      impact:
        'Drastically reduced cabling weight and transmission losses, synchronizing 1.11 MW AC directly into industrial feeders with full SCADA and IV-curve diagnostic monitoring.',
    },
    responsibilities: [
      'Executed high-voltage 1,500 VDC string cable management, labeling, and crimp terminations across 108 string sections.',
      'Managed heavy-gauge cable pulling through underground containment trenches and structural raceways.',
      'Implemented grounding rods, earth tape equipotential bonding, and lightning counter connections.',
      'Assisted senior engineers with pre-commissioning string polarity checks, IV-curve performance tracing, and grid synchronization testing.',
    ],
    keyHighlights: [
      'Operates at 1,500 VDC architecture across 108 string sections to minimize transmission I²R losses',
      'Direct 1.11 MW AC synchronization to medium-voltage industrial distribution feeders',
      'Array of 2,052 high-efficiency 635 W bifacial/mono modules',
    ],
    imagePlaceholder: '/images/projects/tatu-city.jpg',
    coverImage: '/media/projects/tatu-city-link-grid-tied/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/cover.jpg',
        title: '1.30 MWp Utility Ground Array',
        caption: 'Panoramic view of 2,052 high-power 635 W bifacial panels mounted on utility racking.',
      },
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/inverters.jpg',
        title: 'Huawei 185 kW String Inverter Stations',
        caption: 'Six 185 kW high-voltage string inverters operating on a 1,500 VDC bus topology.',
      },
      {
        type: 'image',
        url: '/media/projects/tatu-city-link-grid-tied/transformer.jpg',
        title: 'Medium-Voltage Transformer Station',
        caption: 'Step-up transformer coupling utility solar generation directly into industrial feeders.',
      },
      {
        type: 'video',
        url: '/media/projects/tatu-city-link-grid-tied/drone.mp4',
        title: 'Drone Aerial Survey & IV-Curve Testing',
        caption: 'Aerial perspective of array string alignment and field testing procedures.',
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
      'Turnkey 40.04 kWp solar carport canopy and workshop microgrid powering heavy vehicle diagnostic machinery, vehicle hoists, and lighting with a 48 kWh LiFePO4 battery bank and Growatt parallel hybrid inverters.',
    narrative: {
      challenge:
        'Automotive diagnostics and vehicle hoists draw massive inductive startup inrush currents that repeatedly tripped conventional backup generators during frequent grid blackouts.',
      solution:
        'Built a 40.04 kWp structural steel solar carport canopy paired with three 12 kW Growatt parallel hybrid inverters, a 48 kWh LiFePO4 bank, and an ATS cabinet with inductive surge suppression.',
      impact:
        'Provided shaded customer parking while ensuring vehicle hoists and diagnostic tools operate continuously through outages without motor stalling or inverter trips.',
    },
    responsibilities: [
      'Supported elevated installation and clamping of 88 modules on high-clearance vehicle parking structures.',
      'Configured Growatt inverter communication wiring (CAN/RS485) and synchronized parallel AC output.',
      'Interconnected 48 kWh battery banks, verified internal BMS cell voltages, and set charging limits.',
      'Commissioned the system under full shop operating loads, testing vehicle hoist inrush handling.',
    ],
    keyHighlights: [
      'Dual-purpose structural steel carport providing customer vehicle shade and 40.04 kWp generation',
      '3-phase balanced 36 kW AC inverter cluster configured for diagnostic hoists with severe inductive inrush',
      'Automated Transfer Switch (ATS) cabinet with selective load-shedding contactors',
    ],
    imagePlaceholder: '/images/projects/mushroom-motors.jpg',
    coverImage: '/media/projects/mushroom-motors-hybrid/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/cover.jpg',
        title: 'Solar Carport Canopy (40.04 kWp)',
        caption: 'High-clearance commercial carport framing with 88 monocrystalline modules.',
      },
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/inverters.jpg',
        title: 'Growatt 3-Phase Inverter Bank',
        caption: 'Three 12 kW Growatt hybrid inverters synchronized in parallel with ATS cabinet.',
      },
      {
        type: 'image',
        url: '/media/projects/mushroom-motors-hybrid/storage.jpg',
        title: '48 kWh LiFePO4 Server-Rack Batteries',
        caption: 'Modular 48 kWh battery bank supporting workshop hoists and diagnostic equipment.',
      },
    ],
  },
  {
    id: 'kiambu-water-treatment',
    title: 'Kiambu Water Pump Solar Hybrid Plant',
    client: 'Kiambu Water',
    category: 'C&I Solar & BESS',
    location: 'Kiambu County, Kenya',
    period: '2026',
    pvArray: '30.03 kWp DC (66 × 455 W PV Modules)',
    inverterCapacity: '45 kW AC (3 × 15 kW Growatt Hybrid Inverters in 3-Phase Parallel)',
    inverterBrand: 'Growatt',
    dcArchitecture: 'Ground-mounted utility array with high-speed DC fuse disconnects and busbars',
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
      'Engineered a 30.03 kWp solar hybrid installation with 45 kW AC continuous output and 48 kWh LiFePO4 battery storage to drive municipal water treatment pumps and borehole motors with surge suppression and VFD coordination.',
    narrative: {
      challenge:
        'Municipal water pumping booster motors suffered destructive 5–7× startup current spikes during utility outages, causing chronic water supply disruptions and hydraulic pipe stress.',
      solution:
        'Installed a 30.03 kWp ground-mounted solar array, three 15 kW Growatt hybrid inverters in 3-phase parallel (45 kW AC), a 48 kWh LiFePO4 bank, and Variable Frequency Drive (VFD) surge coordination relays.',
      impact:
        'Guaranteed continuous 415V 3-phase municipal water pumping through power cuts while eliminating pump startup tripping and hydraulic water hammer.',
    },
    responsibilities: [
      'Installed array layout on utility ground structures optimized to mitigate localized vegetative shading.',
      'Configured three 15 kW Growatt inverters in parallel mode to deliver balanced 415 V line-to-line output for water pumping motors.',
      'Terminated 48 kWh battery storage banks to common DC distribution busbars with high-speed fuse disconnects.',
      'Verified earth fault loop impedance, phase rotation, and automatic restart behavior under pump startup surges.',
    ],
    keyHighlights: [
      'Delivers balanced 415V 3-phase power tailored for high-inductance pumping motor startup',
      'Variable frequency drive (VFD) coordination relays to manage inductive pump surges',
      '48 kWh battery storage guarantees uninterrupted water supply during utility grid load-shedding',
    ],
    imagePlaceholder: '/images/projects/kiambu-water.jpg',
    coverImage: '/media/projects/kiambu-water-treatment/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/cover.jpg',
        title: '30.03 kWp Ground-Mount Array',
        caption: '66 photovoltaic modules configured to avoid vegetative shading at water pumping site.',
      },
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/inverters.jpg',
        title: '45 kW Growatt 3-Phase Inverter Bank',
        caption: 'Three 15 kW inverters providing balanced 415V output for high-draw water pump motors.',
      },
      {
        type: 'image',
        url: '/media/projects/kiambu-water-treatment/pumps.jpg',
        title: 'VFD Pump Motor Coordination',
        caption: 'Integrated VFD control panels suppressing inductive startup inrush on borehole pumps.',
      },
    ],
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
    media: [
      {
        type: 'image',
        url: '/media/projects/tsuku-tsuku-hybrid/cover.jpg',
        title: 'Commercial Rooftop PV Array (30.03 kWp)',
        caption: 'Low-loss DC cable routing across commercial roof sections.',
      },
      {
        type: 'image',
        url: '/media/projects/tsuku-tsuku-hybrid/storage.jpg',
        title: '96 kWh Modular Battery Clusters',
        caption: 'Six 16 kWh LiFePO4 modules supplying 14+ hours of cold-room autonomy.',
      },
      {
        type: 'image',
        url: '/media/projects/tsuku-tsuku-hybrid/inverters.jpg',
        title: '3-Unit Jua Power Inverter Setup',
        caption: 'Master-slave parallel synchronization delivering balanced 36 kW AC capacity.',
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
    coverImage: '/media/projects/willis-auto-spa-hybrid/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/willis-auto-spa-hybrid/cover.jpg',
        title: 'Roof-Mounted Commercial Array',
        caption: '34 modules securely anchored to commercial pitched roof trusses.',
      },
      {
        type: 'image',
        url: '/media/projects/willis-auto-spa-hybrid/inverters.jpg',
        title: 'Inverter & Protection Sub-Board',
        caption: 'Three 12 kW Jua Power inverters with metallic conduit pathways.',
      },
      {
        type: 'image',
        url: '/media/projects/willis-auto-spa-hybrid/storage.jpg',
        title: '32 kWh LiFePO4 Battery Bank',
        caption: 'Two 16 kWh batteries in parallel powering vehicle detailing bays.',
      },
    ],
  },
  {
    id: 'runda-bifacial-carport',
    title: 'Runda Bifacial Solar Carport & Energy Storage System',
    client: 'Runda Residence',
    category: 'Residential Hybrid',
    location: 'Runda, Nairobi, Kenya',
    period: '2026',
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
      'Engineered an architectural solar carport utilizing 18 large-format 710 W bifacial dual-glass panels paired with three 12 kW Jua Power hybrid inverters in 3-phase parallel and 32 kWh LiFePO4 storage to supply luxury residential loads and EV charging.',
    narrative: {
      challenge:
        'A luxury residence in Runda required high-capacity solar backup for heavy air conditioning, borehole pumps, and EV charging without modifying or risking leaks on delicate clay roof tiles.',
      solution:
        'Constructed an architectural steel carport fitted with 18 large-format 710 W bifacial dual-glass panels (12.78 kWp), three 12 kW Jua Power 3-phase parallel inverters, and 32 kWh LiFePO4 storage.',
      impact:
        'Harvested ground-albedo reflection for increased bifacial yields, provided sheltered parking with EV charging capability, and delivered whole-home blackout protection without touching the roof.',
    },
    responsibilities: [
      'Handled mechanical installation and alignment of large-format 710 W bifacial panels with rubber-damped clamping.',
      'Positioned and terminated three 12 kW Jua Power inverters with balanced neutral links.',
      'Installed battery protection cabinets and integrated thermal safety disconnects.',
      'Programmed smart charging schedules to support home circuits and electric vehicle charging equipment.',
    ],
    keyHighlights: [
      'High-density 710 W bifacial dual-glass modules harvesting ground albedo reflection',
      'Architectural steel carport providing vehicle shelter, EV charging, and clean energy',
      '3-phase balanced 36 kW AC capacity with dedicated thermal safety disconnects',
    ],
    imagePlaceholder: '/images/projects/runda-carport.jpg',
    coverImage: '/media/projects/runda-bifacial-carport/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/cover.jpg',
        title: 'Architectural Bifacial Solar Carport',
        caption: '18 high-efficiency 710 W bifacial panels mounted on custom steel framing.',
      },
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/inverters.jpg',
        title: '3-Phase Inverter & EV Station',
        caption: '36 kW AC Jua Power system with smart charging circuits for residential EV equipment.',
      },
      {
        type: 'image',
        url: '/media/projects/runda-bifacial-carport/storage.jpg',
        title: '32 kWh Battery Enclosure',
        caption: 'Two 16 kWh lithium storage units with integrated thermal disconnects.',
      },
    ],
  },
  {
    id: 'prof-jacob-bifacial-carport',
    title: 'Prof. Jacob Bifacial Carport Microgrid',
    client: 'Prof. Jacob (Karen)',
    category: 'Residential Hybrid',
    location: 'Karen, Nairobi, Kenya',
    period: '2026',
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
      'Designed and implemented a 12.78 kWp residential bifacial carport microgrid in Karen, integrating a single 15 kW Growatt hybrid inverter and 32 kWh LiFePO4 battery bank with essential/non-essential load sub-panel segregation.',
    narrative: {
      challenge:
        'Lush tree coverage in Karen caused frequent grid drops, and the residence needed dependable power failover that kept essential living circuits live without rapidly draining batteries on pool heating.',
      solution:
        'Erected a custom carport array of 18 units of 710 W bifacial panels (12.78 kWp), a single 15 kW Growatt hybrid inverter, 32 kWh LiFePO4 storage, and physically segregated essential/non-essential sub-panels.',
      impact:
        'Provided automated grid failover with zero interruption to essential living circuits, prioritized battery life for nighttime essentials, and delivered vehicle shade.',
    },
    responsibilities: [
      'Conducted site survey, string calculations, and mechanical integrity checks for carport steel framework.',
      'Installed the 15 kW Growatt hybrid inverter and wired both essential and non-essential load sub-panels.',
      'Balanced and synchronized two 16 kWh lithium batteries via parallel busway links.',
      'Commissioned automated grid failure failover testing with complete residential loads.',
    ],
    keyHighlights: [
      '18 units of 710 W bifacial modules mounted on custom steel carport framing',
      'Segregated essential and non-essential residential load circuits with seamless automatic transfer',
      'Single high-output 15 kW Growatt hybrid inverter maximizing equipment efficiency',
    ],
    imagePlaceholder: '/images/projects/prof-jacob.jpg',
    coverImage: '/media/projects/prof-jacob-bifacial-carport/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/cover.jpg',
        title: 'Residential Carport Structure',
        caption: 'Custom steel framing positioned for optimal solar irradiance in Karen.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/inverters.jpg',
        title: '15 kW Growatt Hybrid Inverter',
        caption: 'Single high-capacity hybrid inverter wired to segregated load sub-panels.',
      },
      {
        type: 'image',
        url: '/media/projects/prof-jacob-bifacial-carport/storage.jpg',
        title: '32 kWh Lithium Storage',
        caption: 'Two 16 kWh LiFePO4 batteries coupled via low-voltage parallel busways.',
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
      'Coastal-engineered off-grid and hybrid solar system designed for high ambient temperatures and saline coastal humidity, utilizing a 12 kW Deye hybrid inverter and 32 kWh modular Valley lithium batteries.',
    narrative: {
      challenge:
        'Extreme tropical heat and airborne saline moisture in coastal Kilifi rapidly corrode electrical hardware, while erratic grid outages disabled air conditioning during sweltering heatwaves.',
      solution:
        'Installed 21 units of 580 W panels on coastal-grade anodized aluminum racking with 316 stainless fasteners, a 12 kW Deye hybrid inverter with generator auto-start, and 32 kWh modular Valley LiFePO4 batteries.',
      impact:
        'Delivered 100% off-grid autonomy during prolonged coastal blackouts, sustained continuous air conditioning through tropical nights, and resisted marine corrosion.',
    },
    responsibilities: [
      'Installed coastal-grade corrosion-resistant rooftop mounting rails and clamps.',
      'Configured Deye inverter parameters including peak-shaving, smart-load port, and generator auto-start contacts.',
      'Stacked, inter-connected, and balanced six modular Valley lithium batteries with common parallel links.',
      'Performed earthing continuity checks and safety tripping verification prior to handover.',
    ],
    keyHighlights: [
      'Tailored for high ambient temperatures and saline coastal humidity with marine-grade fasteners',
      'Deye smart-load port programmed for generator auto-start and peak-shaving',
      'Modular 6-battery stack providing 32 kWh resilient off-grid energy storage',
    ],
    imagePlaceholder: '/images/projects/mariakani.jpg',
    coverImage: '/media/projects/mariakani-residential-hybrid/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/mariakani-residential-hybrid/cover.jpg',
        title: 'Coastal Corrosion-Resistant Array',
        caption: '21 high-output 580 W panels on marine-grade anodized aluminum rails.',
      },
      {
        type: 'image',
        url: '/media/projects/mariakani-residential-hybrid/inverters.jpg',
        title: '12 kW Deye Hybrid Inverter',
        caption: 'Deye smart-load port configured for peak shaving and generator autostart.',
      },
      {
        type: 'image',
        url: '/media/projects/mariakani-residential-hybrid/storage.jpg',
        title: '32 kWh Modular Battery Stack',
        caption: 'Six stackable Valley lithium batteries delivering resilient off-grid storage.',
      },
    ],
  },
  {
    id: 'mombasa-3phase-residential',
    title: 'Mombasa 3-Phase Residential Hybrid System',
    client: 'Mombasa Residence',
    category: 'Residential Hybrid',
    location: 'Mombasa, Kenya',
    period: '2026',
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
      'Installed a 10.92 kWp 3-phase residential hybrid solar and 30 kWh battery system in Mombasa, engineered with coastal-grade materials and tuned to run continuous household air conditioning loads during power outages.',
    narrative: {
      challenge:
        'Unbalanced single-phase air conditioning and water heater loads across a 3-phase supply caused neutral conductor overheating and inverter overload tripping during coastal power outages.',
      solution:
        'Engineered a balanced 3-phase system with 10.92 kWp rooftop solar, three 6 kW Jua Power hybrid inverters synchronized across L1/L2/L3, and 30 kWh of LiFePO4 batteries tuned for night AC loads.',
      impact:
        'Restored complete 3-phase electrical balance, eliminated neutral overheating, and kept multiple household air conditioners running smoothly through coastal blackouts.',
    },
    responsibilities: [
      'Installed coastal-grade, anti-corrosive aluminum mounting rails and stainless steel fasteners.',
      'Terminated three 6 kW Jua Power inverters across distinct phases (L1, L2, L3) to maintain balanced load draw.',
      'Paralleled three 10 kWh standalone LiFePO4 batteries and established communication with inverter charging stages.',
      'Tuned night-time battery discharge limits to sustain continuous air conditioning loads during coastal power cuts.',
    ],
    keyHighlights: [
      'Balanced 3-phase architecture (L1, L2, L3) prevents neutral overheating and phase drift',
      'Tuned battery discharge profile sustaining high-draw coastal air conditioning through the night',
      'Corrosion-resistant aluminum rails and stainless steel fasteners built for sea-spray durability',
    ],
    imagePlaceholder: '/images/projects/mombasa-residential.jpg',
    coverImage: '/media/projects/mombasa-3phase-residential/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/mombasa-3phase-residential/cover.jpg',
        title: 'Mombasa Rooftop Installation',
        caption: '24 monocrystalline modules on corrosion-resistant coastal mounting hardware.',
      },
      {
        type: 'image',
        url: '/media/projects/mombasa-3phase-residential/inverters.jpg',
        title: '3-Phase Synchronized Inverters',
        caption: 'Three 6 kW Jua Power inverters balanced across L1, L2, and L3.',
      },
      {
        type: 'image',
        url: '/media/projects/mombasa-3phase-residential/storage.jpg',
        title: '30 kWh Standalone Batteries',
        caption: 'Three 10 kWh lithium batteries tuned to carry heavy nighttime air conditioning loads.',
      },
    ],
  },
  {
    id: 'catherine-garden-city-residence',
    title: 'Catherine Residence Hybrid Solar & Storage',
    client: 'Catherine Residence',
    category: 'Residential Hybrid',
    location: 'Garden City, Nairobi, Kenya',
    period: '2026',
    pvArray: '7.28 kWp DC (16 × 455 W High-Efficiency Panels)',
    inverterCapacity: '12 kW AC (1 × 12 kW Jua Power Hybrid Inverter)',
    inverterBrand: 'Jua Power',
    dcArchitecture: 'Residential tile-roof bracket mounting with integrated DC breakers and display',
    batteryStorage: '16 kWh LiFePO4 (1 × 16 kWh Battery Unit)',
    status: 'Completed',
    employerContractor: 'Voltifix New Energy SEZ Limited',
    technologies: [
      'Jua Power 12 kW Inverter',
      '16 kWh LiFePO4 Battery',
      'Tile Roof Mounting Brackets',
      'DC Isolators',
      'Wi-Fi Telemetry Dongle',
      'Mobile App Monitoring',
    ],
    summary:
      'Compact 7.28 kWp residential hybrid solar PV and 16 kWh LiFePO4 battery installation on a tile roof in Garden City, offering clean backup power and smartphone real-time energy tracking.',
    narrative: {
      challenge:
        'The homeowner suffered unpredictable daytime power cuts that disrupted remote work, but needed an installation that strictly avoided roof penetrations that would void the tile warranty.',
      solution:
        'Installed a 7.28 kWp array using non-penetrating stainless tile brackets and weatherproof flashings, coupled to a compact 12 kW Jua Power hybrid inverter, 16 kWh LiFePO4 battery, and Wi-Fi cloud monitoring.',
      impact:
        'Preserved 100% roof water-tightness, slashed monthly utility power costs by over 70%, and enabled real-time smartphone tracking of solar production and backup reserves.',
    },
    responsibilities: [
      'Installed rooftop mounting rails on residential tile roof using specialized tile brackets and flashings.',
      'Connected and commissioned the 12 kW Jua Power hybrid inverter.',
      'Wired the 16 kWh LiFePO4 battery with integrated DC circuit breakers and battery status display.',
      'Configured local Wi-Fi monitoring dongle for homeowner mobile real-time tracking.',
    ],
    keyHighlights: [
      'Specialized residential tile roof flashing preventing water ingress',
      '16 kWh LiFePO4 battery pack with comprehensive DC circuit breaker protection',
      'Real-time homeowner monitoring via integrated Wi-Fi cloud telemetry',
    ],
    imagePlaceholder: '/images/projects/catherine-residence.jpg',
    coverImage: '/media/projects/catherine-garden-city-residence/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/cover.jpg',
        title: 'Tile-Roof Solar Array (7.28 kWp)',
        caption: 'Precision tile-bracket mounting preserving clay tile integrity.',
      },
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/inverters.jpg',
        title: '12 kW Jua Power Hybrid Inverter',
        caption: 'Compact wall-mounted hybrid inverter with Wi-Fi telemetry dongle.',
      },
      {
        type: 'image',
        url: '/media/projects/catherine-garden-city-residence/storage.jpg',
        title: '16 kWh Wall-Mounted LiFePO4',
        caption: 'Lithium battery with integrated DC disconnects and digital status display.',
      },
    ],
  },
  {
    id: 'bm-security-operations',
    title: 'BM Security Operations Center Solar Backup',
    client: 'BM Security',
    category: 'C&I Solar & BESS',
    location: 'Nairobi, Kenya',
    period: '2026',
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
    coverImage: '/media/projects/bm-security-operations/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/bm-security-operations/cover.jpg',
        title: 'Critical Support Array (8 Panels)',
        caption: 'Dedicated 3.64 kWp monocrystalline array feeding emergency radio infrastructure.',
      },
      {
        type: 'image',
        url: '/media/projects/bm-security-operations/inverters.jpg',
        title: '6 kW Pure Sine Wave Inverter',
        caption: 'Low-noise pure sine wave inversion preventing radio frequency hum.',
      },
      {
        type: 'image',
        url: '/media/projects/bm-security-operations/storage.jpg',
        title: '10 kWh LiFePO4 Emergency Storage',
        caption: 'Dedicated 10 kWh lithium storage bank delivering 100% control-room uptime.',
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
      'Multi-villa residential solar and storage deployment at Oaklands 5 Villas, featuring a 4.55 kWp rooftop PV array, 6 kW Jua Power hybrid inverter, and 16 kWh LiFePO4 battery pack for clean backup power.',
    narrative: {
      challenge:
        'A multi-villa luxury gated community in Kiambu needed a standardized, clean backup power model that could be replicated across multiple homes while complying with strict estate aesthetic rules.',
      solution:
        'Standardized a 4.55 kWp rooftop PV system (10 × 455 W modules), a 6 kW Jua Power hybrid inverter, and 16 kWh LiFePO4 storage with pre-engineered conduit pathways and standardized ATS backplates.',
      impact:
        'Currently in commissioning, establishing a repeatable and scalable residential microgrid template providing overnight lighting, refrigeration, and Wi-Fi autonomy across the estate.',
    },
    responsibilities: [
      'Assembled roof mounting structures and positioned 10 photovoltaic panels.',
      'Prepared DC/AC conduit pathways, cable terminations, and equipment backplates.',
      'Coordinated equipment labeling, circuit verification, and pre-commissioning paperwork.',
    ],
    keyHighlights: [
      'Standardized scalable residential hybrid architecture suited for multi-unit gated villa communities',
      '16 kWh LiFePO4 battery reserve delivering overnight residential lighting and appliance autonomy',
      'Currently in active commissioning and system validation',
    ],
    imagePlaceholder: '/images/projects/oaklands-villas.jpg',
    coverImage: '/media/projects/oaklands-5-villas-residence/cover.jpg',
    media: [
      {
        type: 'image',
        url: '/media/projects/oaklands-5-villas-residence/cover.jpg',
        title: 'Villa Rooftop Solar Array',
        caption: '10 modules positioned on roof trusses adhering to estate aesthetic codes.',
      },
      {
        type: 'image',
        url: '/media/projects/oaklands-5-villas-residence/inverters.jpg',
        title: '6 kW Jua Power Inverter Board',
        caption: 'Pre-fabricated mounting backplate and residential ATS integration.',
      },
      {
        type: 'image',
        url: '/media/projects/oaklands-5-villas-residence/storage.jpg',
        title: '16 kWh Residential Storage Pack',
        caption: '16 kWh battery pack providing overnight lighting and appliance autonomy.',
      },
    ],
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
    media: [
      {
        type: 'image',
        url: '/media/projects/industry-4-energy-iot/cover.jpg',
        title: 'Switchboard IoT Gateways',
        caption: 'Industrial Raspberry Pi edge gateways connected to Modbus digital meters.',
      },
      {
        type: 'image',
        url: '/media/projects/industry-4-energy-iot/dashboard.jpg',
        title: 'Real-Time Cloud Telemetry Dashboard',
        caption: 'Live time-series tracking of voltage, power factor, harmonics, and kWh.',
      },
      {
        type: 'video',
        url: '/media/projects/industry-4-energy-iot/demo.mp4',
        title: 'MQTT Streaming & Alerting Demo',
        caption: 'Live demonstration of sub-second MQTT telemetry and automated anomaly alerts.',
      },
    ],
  },
  {
    id: 'esp32-ev-chargepoint-reporter',
    title: 'ESP32 Cloud-Connected EV Charge-Point Status Reporter',
    client: 'Engineering R&D Infrastructure',
    category: 'IoT & Automation',
    location: 'Nairobi, Kenya',
    period: '2026',
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
    media: [
      {
        type: 'image',
        url: '/media/projects/esp32-ev-chargepoint-reporter/cover.jpg',
        title: 'Custom Noise-Isolated PCB Unit',
        caption: 'EasyEDA 2-layer board with optocoupler isolation and transient suppressors.',
      },
      {
        type: 'image',
        url: '/media/projects/esp32-ev-chargepoint-reporter/breadboard.jpg',
        title: 'Hardware-in-the-Loop Simulation',
        caption: 'Wokwi virtual simulation testing FreeRTOS state transitions and MQTT triggers.',
      },
      {
        type: 'video',
        url: '/media/projects/esp32-ev-chargepoint-reporter/demo.mp4',
        title: 'EV Telemetry State Machine Demo',
        caption: 'Video demonstrating bidirectional start/stop commands and RGB state transitions.',
      },
    ],
  },
];
