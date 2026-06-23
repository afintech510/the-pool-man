"use client";

import { useState } from "react";

const options = [
  {
    mil: 20,
    label: "20-mil Standard",
    description:
      "Our most popular option. Durable, attractive, and cost-effective for most residential pools. Typical lifespan of 7–10 years with proper water chemistry.",
    features: [
      "Best value for most pools",
      "Wide selection of patterns and colors",
      "7–10 year typical lifespan",
      "Ideal for standard residential use",
    ],
  },
  {
    mil: 28,
    label: "28-mil Heavy-Duty",
    description:
      "Premium thickness for pools that need extra durability. Resists punctures, stretching, and UV degradation better than standard liners. Best for families with pets, heavy use, or rough pool floors.",
    features: [
      "40% thicker than standard",
      "Superior puncture and tear resistance",
      "Better UV and chemical resistance",
      "10–15 year typical lifespan",
      "Ideal for heavy use or pet owners",
    ],
  },
];

export function LinerSelector() {
  const [selected, setSelected] = useState(0);
  const option = options[selected];

  return (
    <div>
      <div className="flex gap-3 mb-6">
        {options.map((opt, i) => (
          <button
            key={opt.mil}
            onClick={() => setSelected(i)}
            className={`px-5 py-3 rounded-lg font-semibold text-sm transition-all cursor-pointer ${
              i === selected
                ? "bg-pool-600 text-slate-900 shadow-md"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {opt.label}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-xl font-bold text-slate-900">{option.label}</h3>
        <p className="mt-3 text-slate-600 leading-relaxed">
          {option.description}
        </p>
        <ul className="mt-4 space-y-2">
          {option.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm text-slate-700">
              <svg className="h-5 w-5 text-pool-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
              </svg>
              {f}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
