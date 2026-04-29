"use client";

interface RatingProps {
  label?: string;
  value?: number;
  max?: number;
}

export function Rating({ label, value = 0, max = 5 }: RatingProps) {
  return (
    <div>
      {label && <div className="text-xs text-muted-foreground mb-1">{label}</div>}
      <div className="flex gap-1">
        {Array.from({ length: max }).map((_, i) => (
          <span key={i} className={`text-lg ${i < value ? "text-yellow-400" : "text-border"}`}>★</span>
        ))}
      </div>
    </div>
  );
}
