"use client";

interface DataPoint {
  label: string;
  value: number;
}

export function BarGraph({ title, data }: { title: string; data: DataPoint[] }) {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">{title}</h3>

      <div className="space-y-2">
        {data.map((item) => (
          <div key={item.label} className="flex items-center gap-2">
            <span className="w-24 text-sm">{item.label}</span>

            <div className="bg-green-500 h-4" style={{ width: `${item.value * 10}px` }} />

            <span className="text-sm">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}