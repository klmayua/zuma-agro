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
    { label: 'Framework', href: '/strategic-framework' },
    { label: 'Governance', href: '/governance-controls' },
    { label: 'Impact', href: '/impact' },
    { label: 'Investors', href: '/investor-intelligence' },
    { label: 'Partnership', href: '/institutional-partnerships' },
    { label: 'Platform', href: '/platform-architecture' },
  ],
  cta: { label: 'Executive Access', href: '/enrollment-step-1' },
  mobile: [
    { label: 'Home', href: '/', icon: 'home' },
    { label: 'About', href: '/about', icon: 'info' },
    { label: 'Framework', href: '/strategic-framework', icon: 'layers' },
    { label: 'Investors', href: '/investor-intelligence', icon: 'trending_up' },
    { label: 'More', href: '#more', icon: 'ellipsis' },
  ],
  footer: {
    platform: [
      { label: 'Enterprise Intelligence System', href: '/platform-architecture' },
      { label: 'Operational Nodes', href: '/platform-architecture' },
      { label: 'SBU Alpha (Staples)', href: '/platform-architecture' },
      { label: 'SBU Beta (Cash Crops)', href: '/platform-architecture' },
    ],
    framework: [
      { label: 'Five Doctrines', href: '/strategic-framework' },
      { label: 'MVZ Philosophy', href: '/strategic-framework' },
      { label: 'Deployment Timeline', href: '/strategic-framework' },
      { label: 'Benue Valley Pilot', href: '/strategic-framework' },
    ],
    governance: [
      { label: 'Board Committees', href: '/governance-controls' },
      { label: 'Control Doctrine', href: '/governance-controls' },
      { label: 'Separation of Powers', href: '/governance-controls' },
      { label: 'Compliance Protocols', href: '/governance-controls' },
    ],
    connect: [
      { label: 'Partnership Inquiry', href: '/institutional-partnerships' },
      { label: 'Investor Briefing', href: '/investor-intelligence' },
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
    { name: 'Production', icon: 'landscape', description: 'Managing company-owned farms, outgrowers, and cooperatives. Accountable for yield optimization, input efficiency, and driving down the cost of primary production.' },
    { name: 'Inputs & Genetics', icon: 'biotech', description: 'Ensuring the availability, quality, and cost-effectiveness of critical inputs through seed multiplication, fertilizer blending, and livestock genetics.' },
    { name: 'Processing & Mfg.', icon: 'precision_manufacturing', description: 'Converting raw agricultural output into stable, transportable, higher-value products. Accountable for throughput, conversion cost, and product quality.' },
    { name: 'Logistics & Warehousing', icon: 'local_shipping', description: 'Managing aggregation hubs, warehouse networks, and fleet logistics to minimize post-harvest loss, optimize routing, and ensure on-time delivery.' },
    { name: 'Commercial & Trading', icon: 'monitoring', description: 'Driving wholesale distribution, securing institutional supply contracts, managing export documentation, and generating market intelligence to secure margins.' },
    { name: 'Infrastructure & Eng.', icon: 'architecture', description: 'Developing and maintaining the physical backbone: irrigation systems, power supply, feeder roads, and facility engineering to ensure asset uptime.' },
  ],
  doctrines: [
    { number: '01', title: 'Backward Integration is Mandatory', description: 'No processing facility is commissioned without secured feedstock supply. No export contract is signed without verified production capacity. The enterprise never builds capacity ahead of supply or promises delivery ahead of reality.' },
    { number: '02', title: 'Infrastructure Precedes Production', description: 'Zuma Agro does not plant crops without water security, harvest without storage, or process without logistics. We accept slower deployment in exchange for operational reliability.' },
    { number: '03', title: 'Data-Driven Execution', description: 'Every field, cooperative, warehouse, and transaction is recorded in the enterprise intelligence system. Decisions – from planting calendars to pricing to credit allocation – are made on documented evidence, not intuition.' },
    { number: '04', title: 'Commercial Discipline Overrides Subsidy Logic', description: 'While accessing development finance, every line of business must ultimately stand on its own commercial terms. Permanent loss-making is not permitted anywhere within the platform.' },
    { number: '05', title: 'Governability Determines Scale', description: 'The enterprise does not expand into regions where it cannot maintain operational control, security coordination, and financial visibility. Growth is constrained by institutional capacity, not ambition.' },
  ],
} as const;
