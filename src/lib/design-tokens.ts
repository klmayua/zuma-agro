export const designTokens = {
  colors: {
    primary: {
      DEFAULT: '#005a43',
      dark: '#004a37',
      light: '#1d6a52',
      container: '#005a43',
    },
    secondary: {
      DEFAULT: '#a8862d',
      dark: '#8a6e24',
      light: '#c49e3a',
      container: '#fed574',
    },
    error: {
      DEFAULT: '#ba1a1a',
      dark: '#93000a',
      container: '#ffdad6',
    },
    surface: {
      DEFAULT: '#f8faf6',
      dim: '#d8dbd7',
      bright: '#f8faf6',
      containerLowest: '#ffffff',
      containerLow: '#f2f4f0',
      container: '#eceeeb',
      containerHigh: '#e7e9e5',
      containerHighest: '#e1e3df',
      variant: '#e1e3df',
      tint: '#1d6a52',
    },
    onSurface: {
      DEFAULT: '#191c1a',
      variant: '#3f4944',
    },
    onPrimary: '#ffffff',
    onSecondary: '#ffffff',
    outline: {
      DEFAULT: '#6f7974',
      variant: '#bfc9c2',
    },
    inverse: {
      surface: '#2e312f',
      onSurface: '#eff1ed',
      primary: '#8cd5b8',
    },
    primaryFixed: {
      DEFAULT: '#a7f2d3',
      dim: '#8cd5b8',
    },
    onPrimaryFixed: {
      DEFAULT: '#002117',
      variant: '#00513e',
    },
    secondaryFixed: {
      DEFAULT: '#ffdf9c',
      dim: '#edc15a',
    },
    onSecondaryFixed: {
      DEFAULT: '#251a00',
      variant: '#5b4300',
    },
    tertiary: {
      DEFAULT: '#77000a',
      container: '#a20012',
    },
  },
  typography: {
    fontFamily: {
      sans: ['Manrope', 'system-ui', 'sans-serif'],
      serif: ['Libre Caslon Text', 'Georgia', 'serif'],
      display: ['Libre Caslon Text', 'Georgia', 'serif'],
      inter: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      'display-lg': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em', fontWeight: '700' }],
      'display-lg-mobile': ['2.25rem', { lineHeight: '2.75rem', fontWeight: '700' }],
      'headline-xl': ['3rem', { lineHeight: '3.5rem', letterSpacing: '-0.02em', fontWeight: '700' }],
      'headline-lg': ['2rem', { lineHeight: '2.5rem', fontWeight: '600' }],
      'headline-lg-mobile': ['1.75rem', { lineHeight: '2.25rem', letterSpacing: '-0.01em', fontWeight: '600' }],
      'headline-md': ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
      'body-lg': ['1.125rem', { lineHeight: '1.75rem', fontWeight: '400' }],
      'body-md': ['1rem', { lineHeight: '1.5rem', fontWeight: '400' }],
      'label-bold': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '700', letterSpacing: '0.05em' }],
      'label-md': ['0.875rem', { lineHeight: '1.25rem', fontWeight: '600', letterSpacing: '0.05em' }],
      'label-sm': ['0.75rem', { lineHeight: '1rem', fontWeight: '500' }],
      'executive-caps': ['0.75rem', { lineHeight: '1rem', fontWeight: '700', letterSpacing: '0.1em' }],
    },
  },
  spacing: {
    base: '8px',
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
    '2xl': '48px',
    '3xl': '64px',
    '4xl': '96px',
    gutter: '24px',
    marginDesktop: '64px',
    marginMobile: '20px',
    maxWidth: '1280px',
    sidebarWidth: '280px',
  },
  borderRadius: {
    DEFAULT: '0.125rem',
    lg: '0.25rem',
    xl: '0.5rem',
    full: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
  },
  shadows: {
    soft: '0 4px 20px -2px rgba(0,0,0,0.05)',
    elevated: '0 10px 30px -5px rgba(0,0,0,0.08)',
    institutional: '0 20px 40px -10px rgba(0,0,0,0.1)',
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
    subtitle: 'Building Nigeria\'s premier agro-industrial infrastructure through institutional partnerships and data-driven operations.',
    metrics: [
      { value: '34M+', label: 'Hectares of Arable Land' },
      { value: '400M', label: 'Population to Feed' },
      { value: '$-10B', label: 'Annual Food Import Bill' },
      { value: '20-40%', label: 'Post-Harvest Losses' },
    ],
  },
  sbus: [
    { name: 'Production', icon: '🌱', description: 'Large-scale commercial farming operations across Nigeria\'s prime agricultural corridors.' },
    { name: 'Inputs & Genetics', icon: '🧬', description: 'Premium seeds, fertilizers, and crop protection solutions for optimal yield.' },
    { name: 'Processing & Manufacturing', icon: '🏭', description: 'State-of-the-art processing facilities adding value to raw commodities.' },
    { name: 'Logistics & Warehousing', icon: '🚛', description: 'Integrated cold chain and distribution networks ensuring product integrity.' },
    { name: 'Commercial & Trading', icon: '📊', description: 'Commodity trading and market access connecting producers to buyers.' },
    { name: 'Infrastructure & Engineering', icon: '⚙️', description: 'Irrigation, storage, and processing infrastructure development.' },
  ],
  doctrines: [
    { number: '01', title: 'Yield Precedes Scale', description: 'Prove the yield before scaling the operation. Every deployment must demonstrate commercial viability at pilot scale.' },
    { number: '02', title: 'Data Sovereignty', description: 'Own and control all operational data. Data is the strategic asset that enables precision agriculture.' },
    { number: '03', title: 'Corridor Integrity', description: 'Maintain quality across the entire value chain. From seed to shelf, every node must meet institutional standards.' },
    { number: '04', title: 'Community Capital', description: 'Invest in local communities for sustainable growth. Our success is measured by the prosperity we create.' },
    { number: '05', title: 'Audit Transparency', description: 'Complete transparency in all operations. Every transaction, every yield, every outcome is auditable.' },
  ],
} as const;
