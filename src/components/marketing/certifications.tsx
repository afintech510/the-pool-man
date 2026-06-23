import Image from "next/image";

const certs = [
  { src: "/images/cert-cbp.png", alt: "APSP Certified Building Professional", width: 120, height: 75 },
  { src: "/images/cert-nespa.jpg", alt: "Northeast Spa & Pool Association", width: 140, height: 69 },
  { src: "/images/cert-npc.jpg", alt: "NPC Certified", width: 150, height: 51 },
  { src: "/images/cert-asset.png", alt: "HomeAdvisor Screened & Approved", width: 150, height: 74 },
];

export function Certifications() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {certs.map((cert) => (
              <Image
                key={cert.alt}
                src={cert.src}
                alt={cert.alt}
                width={cert.width}
                height={cert.height}
                className="h-12 sm:h-14 w-auto opacity-80 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-xs text-slate-600">
            <span className="flex items-center gap-1">
              <span className="text-blue-700 font-bold">BBB</span> A+ Rating
            </span>
            <span>&middot;</span>
            <span>HomeAdvisor 10+ Years</span>
            <span>&middot;</span>
            <span>LIPSA 2016 Gold Award</span>
            <span>&middot;</span>
            <span className="flex items-center gap-1">
              <span className="text-blue-600 font-bold">Facebook</span> 5-Star Reviews
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
