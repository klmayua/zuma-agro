import Link from "next/link";

type ButtonProps = {
  variant?: "primary" | "secondary" | "tertiary";
  href?: string;
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all";

  const variants = {
    primary:
      "bg-error text-white px-6 py-3 rounded-lg hover:outline hover:outline-2 hover:outline-secondary hover:outline-offset-2",
    secondary:
      "border border-secondary text-surface-charcoal px-6 py-3 rounded-lg hover:bg-secondary hover:text-white",
    tertiary: "text-primary hover:underline",
  };

  const combinedStyles = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedStyles}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={combinedStyles} onClick={onClick}>
      {children}
    </button>
  );
}
