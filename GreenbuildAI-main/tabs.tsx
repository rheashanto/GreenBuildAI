"use client";

interface Tab {
  label: string;
  value: string;
}

export function Tabs({ tabs }: { tabs: Tab[] }) {
  return (
    <div className="flex gap-2">
      {tabs.map((tab) => (
        <button key={tab.value} className="px-4 py-2 border rounded">
          {tab.label}
        </button>
      ))}
    </div>
  );
}