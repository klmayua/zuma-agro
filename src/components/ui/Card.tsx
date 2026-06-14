type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-surface-container-lowest border border-outline-variant/10 rounded-3xl p-8 ${
        hover ? "shadow-institutional hover:shadow-elevated transition-shadow" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

type MetricCardProps = {
  value: string;
  label: string;
};

export function MetricCard({ value, label }: MetricCardProps) {
  return (
    <div className="bg-surface-container-low border border-outline-variant rounded-xl p-6 text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-on-surface-variant">{label}</div>
    </div>
  );
}

type SBUCardProps = {
  name: string;
  description: string;
  icon: string;
};

export function SBUCard({ name, description, icon }: SBUCardProps) {
  return (
    <Card className="p-xl">
      <div className="text-6xl font-light mb-4">{icon}</div>
      <div className="text-[11px] font-bold tracking-[0.15em] uppercase text-secondary mb-2">
        Strategic Business Unit
      </div>
      <h3 className="font-display text-xl font-semibold text-on-surface mb-2">{name}</h3>
      <p className="text-body-md text-on-surface-variant">{description}</p>
    </Card>
  );
}

type DoctrineCardProps = {
  number: string;
  title: string;
  description: string;
};

export function DoctrineCard({ number, title, description }: DoctrineCardProps) {
  return (
    <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-2xl border border-white/10">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center text-sm font-bold text-white">
          {number}
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{title}</h3>
      </div>
      <p className="text-body-md text-white/70">{description}</p>
    </div>
  );
}
