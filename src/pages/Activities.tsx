import { useState } from "react";
import { Waves, Magnet, Droplets, Eye, Zap, CircuitBoard, Ruler, AlertTriangle, FileCheck, FileText, Clock, ShieldCheck, BadgeCheck } from "lucide-react";

const tabs = [
  {
    id: "ndt",
    label: "Non-Destructive Testing (NDT)",
    short: "NDT",
    intro:
      "Inspection of hull structures and welds without interrupting vessel operations. Our certified technicians detect surface and sub-surface defects to confirm structural integrity, with reports accepted by all major classification societies.",
    methods: [
      { icon: Waves, abbr: "UT", title: "Ultrasonic Testing", desc: "Detects internal flaws and weld defects using high-frequency sound waves." },
      { icon: Magnet, abbr: "MT", title: "Magnetic Particle", desc: "Reveals surface and near-surface discontinuities in ferromagnetic materials." },
      { icon: Droplets, abbr: "PT", title: "Penetrant Testing", desc: "Identifies surface-breaking defects using capillary action of dye penetrants." },
      { icon: Eye, abbr: "VT", title: "Visual Inspection", desc: "Systematic visual examination of welds, structures and coatings." },
      { icon: Zap, abbr: "RT", title: "Radiographic Testing", desc: "X-ray and gamma-ray imaging for full volumetric weld inspection." },
      { icon: CircuitBoard, abbr: "ET", title: "Eddy Current", desc: "Electromagnetic detection of surface and sub-surface flaws in conductive materials." },
    ],
  },
  {
    id: "utm",
    label: "UTM & Steel Supervision",
    short: "UTM",
    intro:
      "Ultrasonic thickness measurement, corrosion monitoring and structural integrity assessment in support of class surveys and steel renewal works. We deliver actionable thickness mappings and engineering documentation.",
    methods: [
      { icon: Ruler, abbr: "UTM", title: "Thickness Mapping", desc: "Precise UT thickness measurement of hull plating, frames and tanks." },
      { icon: AlertTriangle, abbr: "CML", title: "Corrosion Analysis", desc: "Condition Monitoring Locations and corrosion rate assessment over time." },
      { icon: FileCheck, abbr: "IACS", title: "Class Surveys", desc: "Support and supervision for IACS member class surveys and certification." },
      { icon: FileText, abbr: "DOC", title: "Repair Specification", desc: "Engineering documentation and steel renewal repair specifications." },
    ],
  },
] as const;

export default function Activities() {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("ndt");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">Activities</p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">Inspection services for the modern fleet.</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-pro">
          {/* Tabs */}
          <div className="inline-flex flex-wrap p-1 bg-surface border border-border rounded-lg mb-10">
            {tabs.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                className={`px-5 sm:px-7 py-3 text-sm font-bold rounded-md transition-all ${
                  active === t.id
                    ? "bg-primary text-white shadow-card-pro"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div key={tab.id} className="animate-fade-in">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl lg:text-3xl mb-4 heading-underline">{tab.label}</h2>
              <p className="text-foreground/80 leading-relaxed">{tab.intro}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {tab.methods.map((m) => (
                <div key={m.abbr} className="group bg-surface border border-border rounded-lg p-6 hover:border-brand-red hover:bg-background hover:shadow-elevated transition-all">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-md bg-primary/5 group-hover:bg-brand-red/10 flex items-center justify-center transition-colors">
                      <m.icon className="w-5 h-5 text-brand-red" />
                    </div>
                    <span className="text-xs font-extrabold tracking-widest text-brand-red bg-brand-red/10 px-2 py-1 rounded">
                      {m.abbr}
                    </span>
                  </div>
                  <h3 className="text-base mb-2">{m.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-surface">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">Why Choose Us</p>
            <h2 className="text-3xl lg:text-4xl heading-underline-center">Built for fleet operators who can't afford guesswork</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: "24/7 Mobilisation", desc: "On-call technicians ready to deploy to any port worldwide within 24 hours of your request." },
              { icon: BadgeCheck, title: "All Major Class Societies", desc: "Reports and surveys accepted by LR, DNV, BV, ABS, ClassNK, RINA and CCS." },
              { icon: ShieldCheck, title: "Certified Technicians", desc: "All inspectors hold internationally recognised qualifications and class society approvals." },
            ].map((c, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-8 text-center">
                <div className="w-14 h-14 rounded-full bg-brand-red/10 flex items-center justify-center mx-auto mb-5">
                  <c.icon className="w-7 h-7 text-brand-red" />
                </div>
                <h3 className="text-lg mb-3">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
