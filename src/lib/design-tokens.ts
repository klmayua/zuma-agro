export const designTokens = {
  colors: {
    primary: {
      DEFAULT: '#005A43',
      dark: '#004D3A',
      light: '#006B53',
    },
    secondary: {
      DEFAULT: '#C9A03D',
      dark: '#A68533',
      light: '#D4AF37',
    },
    error: {
      DEFAULT: '#B63A3A',
      dark: '#962E2E',
      light: '#DC2626',
    },
    surface: {
      ivory: '#F8F8F4',
      stone: '#EAEDE8',
      white: '#FFFFFF',
      charcoal: '#18211D',
      slate: '#6B7280',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
      serif: ['Libre Caslon Text', 'Georgia', 'serif'],
    },
    fontSize: {
      'h1': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
      'h2': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '600' }],
      'h3': ['2rem', { lineHeight: '1.2', fontWeight: '600' }],
      'h4': ['1.5rem', { lineHeight: '1.2', fontWeight: '500' }],
      'h1-mobile': ['2.25rem', { lineHeight: '1.2', fontWeight: '700' }],
      'body-lg': ['1.125rem', { lineHeight: '1.5', fontWeight: '400' }],
      'body-md': ['1rem', { lineHeight: '1.5', fontWeight: '400' }],
      'label-sm': ['0.875rem', { lineHeight: '1', fontWeight: '600', letterSpacing: '0.05em' }],
    },
  },
  spacing: {
    base: '8px',
    gutter: '24px',
    marginDesktop: '40px',
    marginMobile: '16px',
    maxWidth: '1280px',
  },
  borderRadius: {
    sm: '0.25rem',
    DEFAULT: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  shadows: {
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    DEFAULT: '0px 4px 12px rgba(0,0,0,0.03)',
    md: '0px 8px 24px rgba(0,0,0,0.06)',
    lg: '0px 12px 32px rgba(0,0,0,0.08)',
  },
} as const;

export const navigation = {
  primary: [
    { label: 'About', href: '/about' },
    { label: 'Framework', href: '/framework' },
    { label: 'Governance', href: '/governance' },
    { label: 'Impact', href: '/impact' },
    { label: 'Investors', href: '/investors' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'Platform', href: '/platform' },
  ],
  cta: { label: 'Executive Access', href: '/enrollment/step1' },
  mobile: [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'Platform', href: '/platform', icon: 'grid' },
    { label: 'Initiatives', href: '/framework', icon: 'layers' },
    { label: 'Contact', href: '/partnership', icon: 'mail' },
    { label: 'More', href: '#more', icon: 'ellipsis' },
  ],
  footer: {
    platform: [
      { label: 'Enterprise Intelligence System', href: '/platform' },
      { label: 'Operational Nodes', href: '/platform' },
      { label: 'SBU Alpha (Staples)', href: '/platform' },
      { label: 'SBU Beta (Cash Crops)', href: '/platform' },
    ],
    framework: [
      { label: 'Five Doctrines', href: '/framework' },
      { label: 'MVZ Philosophy', href: '/framework' },
      { label: 'Deployment Timeline', href: '/framework' },
      { label: 'Benue Valley Pilot', href: '/framework' },
    ],
    governance: [
      { label: 'Board Committees', href: '/governance' },
      { label: 'Control Doctrine', href: '/governance' },
      { label: 'Separation of Powers', href: '/governance' },
      { label: 'Compliance Protocols', href: '/governance' },
    ],
    connect: [
      { label: 'Partnership Inquiry', href: '/partnership' },
      { label: 'Investor Briefing', href: '/investors' },
      { label: 'Media Relations', href: '/about' },
      { label: 'Careers', href: '/about' },
    ],
  },
} as const;

export const pages = {
  home: {
    title: 'Sovereign Agro-Industrial Transformation',
    subtitle: 'Building Nigeria\'s premier agro-industrial infrastructure',
    metrics: [
      { value: '34M+', label: 'Hectares of Arable Land' },
      { value: '400M', label: 'Population to Feed' },
      { value: '$-10B', label: 'Annual Food Import Bill' },
      { value: '20-40%', label: 'Post-Harvest Losses' },
    ],
  },
  sbus: [
    { name: 'Production', description: 'Large-scale commercial farming operations' },
    { name: 'Inputs & Genetics', description: 'Premium seeds, fertilizers, and crop protection' },
    { name: 'Processing & Manufacturing', description: 'Value-added processing facilities' },
    { name: 'Logistics & Warehousing', description: 'Cold chain and distribution networks' },
    { name: 'Commercial & Trading', description: 'Commodity trading and market access' },
    { name: 'Infrastructure & Engineering', description: 'Irrigation, storage, and processing infrastructure' },
  ],
  doctrines: [
    { number: '01', title: 'Yield Precedes Scale', description: 'Prove the yield before scaling the operation' },
    { number: '02', title: 'Data Sovereignty', description: 'Own and control all operational data' },
    { number: '03', title: 'Corridor Integrity', description: 'Maintain quality across the entire value chain' },
    { number: '04', title: 'Community Capital', description: 'Invest in local communities for sustainable growth' },
    { number: '05', title: 'Audit Transparency', description: 'Complete transparency in all operations' },
  ],
} as const;
