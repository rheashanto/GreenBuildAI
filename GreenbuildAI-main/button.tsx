"use client";

interface ButtonProps {
  label: string;
  variant?: "primary" | "secondary" | "outline";
  onClick?: () => void;
}

export function Button({ label, variant = "primary", onClick }: ButtonProps) {
  const baseClass = "px-4 py-2 rounded text-sm font-medium transition-colors";
  const variantClass = variant === "primary" 
    ? "bg-foreground text-background hover:bg-foreground/90"
    : variant === "outline"
    ? "border border-border hover:bg-border/50"
    : "bg-border/50 hover:bg-border";
    
  return (
    <button onClick={onClick} className={`${baseClass} ${variantClass}`}>
      {label}
    </button>
  );
}
