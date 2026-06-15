const commodities = [
  {
    name: "High-Yield Maize",
    yield: "5.5 MT/Ha",
    description: "Primary calorie foundation. Focus on drought-resistant hybrid seeds calibrated for Benue Valley soil composition.",
    icon: "agriculture",
    badge: "Anchor I",
  },
  {
    name: "Industrial Soybeans",
    yield: "2.8 MT/Ha",
    description: "High-protein protein core. Critical for establishing the poultry feed value chain and domestic supply security.",
    icon: "eco",
    badge: "Anchor II",
  },
];

export function MVZSection() {
  return (
    <div className="space-y-stack-lg">
      <div>
        <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
          4.1 Minimum Viable Zuma (MVZ)
        </h2>
        <div className="h-1 w-16 bg-secondary mb-6"></div>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">
          The MVZ philosophy dictates a constrained, high-fidelity operational footprint designed to prove unit economics before massive capital deployment. We reject the standard model of broad, shallow agricultural investment in favor of deep, systemic control over a specific geographic and agronomic node.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          {commodities.map((commodity) => (
            <div key={commodity.name} className="bg-surface-container border border-surface-variant p-6 rounded hover:border-secondary transition-colors">
              <div className="flex justify-between items-start mb-4">
                <span className="material-symbols-outlined text-primary text-3xl">{commodity.icon}</span>
                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-bold tracking-widest uppercase">
                  {commodity.badge}
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface mb-2">{commodity.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{commodity.description}</p>
              <div className="mt-4 pt-4 border-t border-surface-variant flex justify-between items-center text-sm">
                <span className="text-on-surface-variant">Target Yield</span>
                <span className="font-label-bold text-label-bold text-primary">{commodity.yield}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative w-full h-[300px] bg-surface-container-high rounded overflow-hidden border border-surface-variant group">
        <img 
          alt="Benue Valley Map" 
          className="w-full h-full object-cover opacity-80 mix-blend-multiply group-hover:scale-105 transition-transform duration-700" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqYQFjLVCZrlAPqcPhQQHpXKNF1eGHO0imnEZBONGeP-xs3ooAYcOLUTtoyZ9T7USgo0TfZEKIYWSPxE4TgHCH_G9_RTAAtxPdvZLfF7b6Y4SiHmkL23jJX-FeduNprpbB3vVvJhHOVE0KYyjq4Ud_by-FmHk8eIyBjlp9_uTinH5xIoBy9j1XhWgzNXOJBT0a-tTPBmuOaKUaP6Xm2WIXVSIviLxo0xsimlhL9xXXos3VD5KLTi7kMIxT7VNCApyDhxYtGs27MCa0"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent"></div>
        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="font-headline-md text-headline-md">Benue Valley Corridor</h3>
          <p className="font-body-md text-body-md opacity-80 flex items-center mt-1">
            <span className="material-symbols-outlined text-sm mr-1">location_on</span>
            Primary Deployment Zone
          </p>
        </div>
      </div>
    </div>
  );
}
