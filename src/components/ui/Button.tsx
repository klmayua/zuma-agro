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
    "inline-flex items-center justify-center gap-2 font-bold transition-all";

  const variants = {
    primary:
      "bg-secondary text-white h-[56px] px-[40px] rounded hover:opacity-90",
    secondary:
      "bg-transparent border-2 border-white/30 text-white h-[56px] px-[40px] rounded hover:bg-white/10",
    tertiary: "text-secondary hover:underline",
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
