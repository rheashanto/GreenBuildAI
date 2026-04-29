"use client";

interface SelectProps {
  label?: string;
  name?: string;
  options?: Array<{ value: string; label: string }>;
  placeholder?: string;
}

export function Select({ label, name, options = [], placeholder }: SelectProps) {
  return (
    <div>
      {label && <label className="text-xs text-muted-foreground block mb-1">{label}</label>}
      <select
        name={name}
        className="h-9 w-full bg-background border border-border rounded px-3 text-sm focus:outline-none focus:ring-2 focus:ring-foreground/20"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
