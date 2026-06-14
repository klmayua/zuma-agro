type CardProps = {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
};

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <div
      className={`bg-surface-white border border-surface-stone rounded-lg p-8 ${
        hover ? "hover:border-secondary transition-colors" : ""
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
    <div className="bg-surface-white border border-surface-stone rounded-lg p-6 text-center">
      <div className="text-3xl font-bold text-primary mb-2">{value}</div>
      <div className="text-sm text-surface-slate">{label}</div>
    </div>
  );
}

type SBUCardProps = {
  name: string;
  description: string;
};

export function SBUCard({ name, description }: SBUCardProps) {
  return (
    <Card className="p-8">
      <h3 className="text-lg font-semibold text-surface-charcoal mb-2">{name}</h3>
      <p className="text-sm text-surface-slate">{description}</p>
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
    <div className="flex gap-4 items-start">
      <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-semibold">
        {number}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-surface-charcoal mb-1">{title}</h3>
        <p className="text-sm text-surface-slate">{description}</p>
      </div>
    </div>
  );
}
