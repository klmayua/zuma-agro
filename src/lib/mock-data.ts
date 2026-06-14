export interface SBU {
  id: string;
  title: string;
  category: string;
  description: string;
  capacity: string;
  location: string;
  investedCapital: string;
  status: 'Operational' | 'Expanding' | 'Proposed';
}

export interface Metric {
  id: string;
  label: string;
  value: string;
  change: string;
  trend: 'up' | 'down' | 'neutral';
  category: 'growth' | 'value' | 'risk';
}

export interface Partnership {
  id: string;
  partnerName: string;
  sector: string;
  commitment: string;
  alignment: string;
  phase: string;
  status: 'Signed' | 'Active' | 'Pending';
}

export const SBUS: SBU[] = [
  {
    id: 'sbu-1',
    title: 'Grain Storage & Silo Corridor',
    category: 'Logistics',
    description: 'State-of-the-art metal silo complexes with automated aeration and temperature controls to mitigate post-harvest losses.',
    capacity: '250,000 MT',
    location: 'Makurdi Hub',
    investedCapital: '$42M',
    status: 'Operational',
  },
  {
    id: 'sbu-2',
    title: 'Soybean & Oilseed Extraction Facility',
    category: 'Processing',
    description: 'High-throughput crushing plant producing industrial-grade vegetable oil and high-protein animal feed cake.',
    capacity: '1,200 Tons/Day',
    location: 'Lagos Terminal',
    investedCapital: '$58M',
    status: 'Expanding',
  },
  {
    id: 'sbu-3',
    title: 'Cold-Chain Logistics Fleet',
    category: 'Logistics',
    description: 'Refrigerated transport corridors linking remote harvest areas to urban distribution terminals.',
    capacity: '500 active trucks',
    location: 'National Route',
    investedCapital: '$24M',
    status: 'Operational',
  },
  {
    id: 'sbu-4',
    title: 'Irrigated Cultivation Blocks',
    category: 'Cultivation',
    description: 'Pivot-irrigated farmland blocks utilizing sustainable water resources for year-round agricultural production.',
    capacity: '15,000 Hectares',
    location: 'Abuja Corridor',
    investedCapital: '$35M',
    status: 'Proposed',
  }
];

export const METRICS: Metric[] = [
  {
    id: 'met-1',
    label: 'Agro-Industrial Multiplier',
    value: '4.2x',
    change: '+12%',
    trend: 'up',
    category: 'growth',
  },
  {
    id: 'met-2',
    label: 'Post-Harvest Losses',
    value: '4.8%',
    change: '-35%',
    trend: 'down',
    category: 'risk',
  },
  {
    id: 'met-3',
    label: 'Capital Committed',
    value: '$159.2M',
    change: 'DFI Secured',
    trend: 'neutral',
    category: 'value',
  },
  {
    id: 'met-4',
    label: 'Direct Employment',
    value: '18,450',
    change: '+18% YoY',
    trend: 'up',
    category: 'growth',
  }
];

export const PARTNERSHIPS: Partnership[] = [
  {
    id: 'part-1',
    partnerName: 'Global Agrarian Investment Fund (GAIF)',
    sector: 'Institutional Capital',
    commitment: '$45.0M committed',
    alignment: '100% compliant with ESG-3',
    phase: 'Phase 1: Capital Inflow',
    status: 'Signed',
  },
  {
    id: 'part-2',
    partnerName: 'Benue Agro-Cooperative Union',
    sector: 'Sourcing & Outgrowers',
    commitment: '12,500 farmers enrolled',
    alignment: 'High yield seed multiplication standard',
    phase: 'Phase 2: Sowing Program',
    status: 'Active',
  },
  {
    id: 'part-3',
    partnerName: 'Federal Ministry of Agriculture & Food Security',
    sector: 'Sovereign Oversight',
    commitment: 'Sovereign land concessions & clearance',
    alignment: 'National multiplier compliance verified',
    phase: 'Phase 0: Licensing',
    status: 'Signed',
  },
  {
    id: 'part-4',
    partnerName: 'West African Agribusiness Bank (WAAB)',
    sector: 'Project Finance',
    commitment: '$30.0M proposed debt facility',
    alignment: 'Credit rating clearance pending',
    phase: 'Structuring Stage',
    status: 'Pending',
  }
];

export const BOARD_MEMBERS = [
  {
    name: 'Dr. Abubakar Zuma',
    role: 'Chairman & Founder',
    organization: 'Zuma Agro-Allied',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Dame Helen Alao',
    role: 'Managing Director, Agrarian Investments',
    organization: 'Heritage Capital Trust',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=300&h=300'
  },
  {
    name: 'Col. Tunde Salami (Rtd.)',
    role: 'Director of Logistics & Safety Controls',
    organization: 'Zuma Agro-Allied',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=300&h=300'
  }
];
