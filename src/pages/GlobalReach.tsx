import { Clock, TrendingUp, FileText, Languages } from "lucide-react";

const regions = [
  { name: "Northern Europe", status: "Active · HQ", color: "bg-success" },
  { name: "Mediterranean", status: "Active", color: "bg-success" },
  { name: "Middle East", status: "Active", color: "bg-success" },
  { name: "Asia-Pacific", status: "Expanding now", color: "bg-gold" },
  { name: "Americas", status: "On request", color: "bg-muted-foreground" },
];

// Map dot positions in % of viewBox (1000 x 500)
const cities = [
  { name: "Tallinn", x: 53, y: 28 },
  { name: "Rotterdam", x: 49, y: 32 },
  { name: "Dubai", x: 61, y: 47 },
  { name: "Singapore", x: 76, y: 60 },
  { name: "Tokyo", x: 86, y: 38 },
];

export default function GlobalReach() {
  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">Global Reach</p>
            <h1 className="text-4xl lg:text-5xl text-white mb-6">Inspections, anywhere your vessel is.</h1>
            <p className="text-white/75 leading-relaxed mb-10 max-w-xl">
              From the Baltic to the Pacific, our technicians deploy on short notice to ports across the world. We are actively expanding our presence in the Asia-Pacific region to better serve fleet operators in the area.
            </p>
            <ul className="space-y-3">
              {regions.map((r) => (
                <li key={r.name} className="flex items-center gap-4 py-2 border-b border-white/10">
                  <span className={`relative inline-flex w-2.5 h-2.5 rounded-full ${r.color}`}>
                    <span className={`absolute inset-0 rounded-full ${r.color} opacity-60 animate-ping`} />
                  </span>
                  <span className="font-bold text-white">{r.name}</span>
                  <span className="ml-auto text-sm text-white/65 font-medium">{r.status}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* World map */}
          <div className="relative bg-primary-deep/40 border border-white/10 rounded-lg p-6">
            <svg viewBox="0 0 1000 500" className="w-full h-auto" aria-label="World map">
              {/* Simplified continents — abstract blobs */}
              <g fill="hsl(215 30% 45% / 0.45)" stroke="hsl(215 40% 60% / 0.5)" strokeWidth="1.5">
                {/* North America */}
                <path d="M80,140 Q60,100 110,80 L200,75 Q260,90 280,140 L290,200 Q260,260 220,270 L150,260 Q90,230 80,180 Z" />
                {/* South America */}
                <path d="M230,290 Q260,280 290,310 L300,400 Q280,460 250,470 L230,440 Q220,380 230,290 Z" />
                {/* Europe */}
                <path d="M460,110 Q470,90 510,95 L560,110 Q570,140 555,160 L500,170 Q470,160 460,140 Z" />
                {/* Africa */}
                <path d="M490,200 Q540,190 580,220 L590,310 Q570,390 530,410 L490,380 Q470,310 480,250 Z" />
                {/* Asia */}
                <path d="M580,90 Q650,70 760,85 L880,110 Q900,160 880,210 L820,240 Q740,250 660,220 L600,180 Q570,140 580,90 Z" />
                {/* India */}
                <path d="M680,220 Q710,225 720,260 L700,300 Q680,290 670,260 Z" />
                {/* SE Asia */}
                <path d="M780,260 Q820,255 850,275 L860,310 Q830,330 790,320 Z" />
                {/* Australia */}
                <path d="M820,360 Q880,355 910,380 L905,420 Q860,440 815,425 L800,395 Z" />
              </g>

              {/* Connecting arcs (dashed) */}
              <g stroke="hsl(351 85% 50% / 0.5)" strokeWidth="1.5" strokeDasharray="4 4" fill="none">
                <path d="M530,140 Q650,80 760,190" />
                <path d="M530,140 Q620,250 860,300" />
                <path d="M530,140 Q570,190 610,235" />
              </g>
            </svg>

            {/* Pulsing city dots */}
            {cities.map((c) => (
              <div
                key={c.name}
                className="absolute"
                style={{ left: `calc(${c.x}% + 1.5rem)`, top: `calc(${c.y}% + 1.5rem)`, transform: "translate(-50%, -50%)" }}
              >
                <span className="map-pulse" />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[11px] font-bold text-white whitespace-nowrap bg-primary-deep/80 px-1.5 py-0.5 rounded">
                  {c.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">Operational Coverage</p>
            <h2 className="text-3xl lg:text-4xl heading-underline-center">How we serve global fleets</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Clock, title: "24/7 Rapid Mobilisation", desc: "Technicians dispatched to any port within 24 hours of your request." },
              { icon: TrendingUp, title: "Asia-Pacific Expansion", desc: "Growing local presence in Singapore, Tokyo and surrounding hubs." },
              { icon: FileText, title: "Full Documentation", desc: "Class-society compliant reports, certificates and repair specifications." },
              { icon: Languages, title: "Multilingual Support", desc: "Communication in English, Russian and Mandarin Chinese." },
            ].map((c, i) => (
              <div key={i} className="bg-surface border border-border rounded-lg p-7 hover:border-brand-red transition-colors">
                <div className="w-12 h-12 rounded-md bg-brand-red/10 flex items-center justify-center mb-5">
                  <c.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-base mb-2">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
