import { pageSeo } from "@/lib/seo";
import { PageHero } from "@/components/marketing/page-hero";
import { Section, SectionHeader } from "@/components/ui/section";
import { CtaBanner } from "@/components/marketing/cta-banner";

export const metadata = pageSeo({
  title: "Pool Heater Repair",
  description:
    "Pool heater diagnostics and repair in Eastern Suffolk County. Heat pumps and gas heaters — all major brands serviced.",
  path: "/pool-heaters/heater-repair",
});

export default function HeaterRepairPage() {
  return (
    <>
      <PageHero
        eyebrow="Pool Heaters"
        title="Pool heater repair"
        description="Heater won't fire? Not reaching temperature? Throwing error codes? We diagnose and repair heat pumps and gas heaters from all major brands."
      />

      <Section>
        <SectionHeader
          title="Common issues we fix"
          description="Most heater problems fall into a few categories. We've seen them all."
        />
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: "Won't ignite / won't start", description: "Ignition failures, pilot issues, capacitor problems, or control board faults. We trace the root cause." },
            { title: "Not heating / low output", description: "Flow restrictions, dirty heat exchangers, low gas pressure, or undersized units. We diagnose why it's underperforming." },
            { title: "Error codes / lockouts", description: "Modern heaters communicate through error codes. We read them, interpret them, and fix the underlying issue." },
            { title: "Leaks & corrosion", description: "Heat exchanger leaks, header cracks, and plumbing connection failures. Some are repairable; some mean it's time for a replacement." },
            { title: "Sensor & thermostat issues", description: "Temperature sensors, pressure switches, and flow sensors can fail or drift. We test and replace as needed." },
            { title: "Noisy operation", description: "Rumbling, banging, or whistling from your heater. Usually caused by scale buildup, low flow, or combustion issues." },
          ].map((item) => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-lg p-5">
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      <CtaBanner
        title="Heater not working?"
        description="Schedule a service call. We'll diagnose the problem and give you an honest recommendation — repair or replace."
        buttonText="Schedule a Repair"
      />
    </>
  );
}
