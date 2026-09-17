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
  education: {
    degree: string;
    institution: string;
    certifications: string[];
  };
  metrics: {
    totalSolarCapacityMWp: string;
    totalBatteryStorageKWh: string;
    commercialSitesCompleted: number;
    iotGatewaysDeployed: string;
  };
}

export const profileData: ProfileData = {
  name: 'Emmanuel Thomas Atakos',
  professionalTitle: 'Electrical & Electronics Engineer | Solar PV & Energy Storage Specialist',
  tagline: 'Bridging Megawatt-Scale Clean Power Systems with IoT Telemetry & Industrial Automation',
  summary:
    'Registered Graduate Engineer with proven hands-on expertise in hybrid solar PV system sizing, 1,500 VDC utility arrays, lithium-iron-phosphate (LiFePO4) storage, EV charging infrastructure, and Industry 4.0 IoT energy monitoring. Proven track record across commercial, residential, and megawatt grid-tied installations.',
  contact: {
    email: 'emmanuelatakos@gmail.com',
    phone: '+254 795 628 615',
    location: 'Nairobi, Kenya',
    linkedin: 'https://linkedin.com/in/emmanuel-atakos',
    github: 'https://github.com/emmanuelatakos',
  },
  registrations: {
    ebkRegistration: 'Graduate Engineer (B25236) — Engineers Board of Kenya',
    iekMembership: 'Graduate Engineer Member — Institution of Engineers of Kenya',
  },
  education: {
    degree: 'B.Sc. Electrical & Electronics Engineering — JKUAT',
    institution: 'Jomo Kenyatta University of Agriculture & Technology',
    certifications: [
      'ALX Africa Data Science Program',
      'Project Management Institute (PMI) — PMP Candidate',
    ],
  },
  metrics: {
    totalSolarCapacityMWp: '1.65+ MWp',
    totalBatteryStorageKWh: '500+ kWh',
    commercialSitesCompleted: 7,
    iotGatewaysDeployed: '50+',
  },
};
