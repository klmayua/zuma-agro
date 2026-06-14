type BadgeProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const variants = {
    primary: "bg-primary text-white",
    secondary: "bg-secondary text-white",
    outline: "border border-primary text-primary",
  };

  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold tracking-wider uppercase ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
