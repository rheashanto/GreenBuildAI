"use client";

interface InputProps {
  label?: string;
  name?: string;
  type?: string;
  placeholder?: string;
}

export function Input({ label, name, type = "text", placeholder }: InputProps) {
  return (
    <div>
      {label && <label className="text-xs text-muted-foreground block mb-1">{label}</label>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="h-9 w-full bg-background border border-border rounded px-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
      />
    </div>
  );
}
