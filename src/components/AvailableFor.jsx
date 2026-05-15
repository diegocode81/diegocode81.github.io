import { BriefcaseBusiness } from "lucide-react";
import { availableFor } from "../data/portfolio.js";

export default function AvailableFor() {
  return (
    <section className="border-b border-line bg-white py-10">
      <div className="section-shell">
        <div className="rounded-lg border border-line bg-mist p-6 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-[310px_1fr] lg:items-center">
            <div>
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-lg bg-signal/10 text-signal">
                <BriefcaseBusiness size={22} />
              </div>
              <h2 className="text-2xl font-bold text-ink">Available For</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">{availableFor.text}</p>
            </div>

            <div className="flex flex-wrap gap-2">
              {availableFor.items.map((item) => (
                <span key={item} className="chip bg-white">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
