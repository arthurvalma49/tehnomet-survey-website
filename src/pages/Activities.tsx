import { useState } from "react";
import { Waves, Magnet, Droplets, Eye, Zap, CircuitBoard, Ruler, AlertTriangle, FileText, Anchor, Clock, ShieldCheck, BadgeCheck, ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { TranslationKey } from "@/i18n/translations";

function ExpandableCard({ icon: Icon, abbr, title, desc, fullText }: {
  icon: React.ElementType;
  abbr: string;
  title: string;
  desc: string;
  fullText?: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const { t } = useLanguage();

  return (
    <div className="group bg-surface border border-border rounded-lg p-6 hover:border-brand-red hover:bg-background hover:shadow-elevated transition-all flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="w-11 h-11 rounded-md bg-primary/5 group-hover:bg-brand-red/10 flex items-center justify-center transition-colors">
          <Icon className="w-5 h-5 text-brand-red" />
        </div>
        <span className="text-xs font-extrabold tracking-widest text-brand-red bg-brand-red/10 px-2 py-1 rounded">
          {abbr}
        </span>
      </div>
      <h3 className="text-base mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      {fullText && (
        <>
          <div
            className={`overflow-hidden transition-all duration-300 ${
              expanded ? "max-h-[1000px] opacity-100 mt-3" : "max-h-0 opacity-0"
            }`}
          >
            {fullText.split("\n\n").map((para, i) => (
              <p key={i} className="text-sm text-muted-foreground leading-relaxed mb-2 last:mb-0">
                {para}
              </p>
            ))}
          </div>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-brand-red hover:text-brand-red/80 transition-colors self-start"
          >
            {expanded ? t("activities.readLess") : t("activities.readMore")}
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""}`}
            />
          </button>
        </>
      )}
    </div>
  );
}

export default function Activities() {
  const { t } = useLanguage();

  const tabs = [
    {
      id: "ndt" as const,
      label: t("activities.ndt.label"),
      short: "NDT",
      intro: t("activities.ndt.intro"),
      methods: [
        { icon: Waves, abbr: "UT", title: t("activities.ut.title"), desc: t("activities.ut.desc"), fullText: t("activities.ut.full" as TranslationKey) },
        { icon: Magnet, abbr: "MT", title: t("activities.mt.title"), desc: t("activities.mt.desc"), fullText: t("activities.mt.full" as TranslationKey) },
        { icon: Droplets, abbr: "PT", title: t("activities.pt.title"), desc: t("activities.pt.desc"), fullText: t("activities.pt.full" as TranslationKey) },
        { icon: Eye, abbr: "VT", title: t("activities.vt.title"), desc: t("activities.vt.desc"), fullText: t("activities.vt.full" as TranslationKey) },
        { icon: Zap, abbr: "RT", title: t("activities.rt.title"), desc: t("activities.rt.desc"), fullText: t("activities.rt.full" as TranslationKey) },
        { icon: CircuitBoard, abbr: "ET", title: t("activities.et.title"), desc: t("activities.et.desc"), fullText: t("activities.et.full" as TranslationKey) },
      ],
    },
    {
      id: "utm" as const,
      label: t("activities.utm.label"),
      short: "UTM",
      intro: t("activities.utm.intro"),
      methods: [
        { icon: Ruler, abbr: "UTM", title: t("activities.utm.utmTitle" as TranslationKey), desc: t("activities.utm.utmDesc" as TranslationKey), fullText: t("activities.utm.utmFull" as TranslationKey) },
        { icon: FileText, abbr: "RSC", title: t("activities.utm.repairTitle"), desc: t("activities.utm.repairDesc" as TranslationKey), fullText: t("activities.utm.repairFull" as TranslationKey) },
        { icon: AlertTriangle, abbr: "PCD", title: t("activities.utm.pittingTitle" as TranslationKey), desc: t("activities.utm.pittingDesc" as TranslationKey), fullText: t("activities.utm.pittingFull" as TranslationKey) },
        { icon: Anchor, abbr: "ACC", title: t("activities.utm.anchorTitle" as TranslationKey), desc: t("activities.utm.anchorDesc" as TranslationKey), fullText: t("activities.utm.anchorFull" as TranslationKey) },
      ],
    },
  ];

  const [active, setActive] = useState<"ndt" | "utm">("ndt");
  const tab = tabs.find((t) => t.id === active)!;

  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">{t("activities.label")}</p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">{t("activities.heroTitle")}</h1>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container-pro">
          <div className="inline-flex flex-wrap p-1 bg-surface border border-border rounded-lg mb-10">
            {tabs.map((tb) => (
              <button
                key={tb.id}
                onClick={() => setActive(tb.id)}
                className={`px-5 sm:px-7 py-3 text-sm font-bold rounded-md transition-all ${
                  active === tb.id
                    ? "bg-primary text-white shadow-card-pro"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {tb.label}
              </button>
            ))}
          </div>

          <div key={tab.id} className="animate-fade-in">
            <div className="max-w-3xl mb-10">
              <h2 className="text-2xl lg:text-3xl mb-4 heading-underline">{tab.label}</h2>
              <p className="text-foreground/80 leading-relaxed">{tab.intro}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              {tab.methods.map((m) => (
                <ExpandableCard
                  key={m.abbr}
                  icon={m.icon}
                  abbr={m.abbr}
                  title={m.title}
                  desc={m.desc}
                  fullText={m.fullText}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-20 bg-surface">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">{t("activities.whyLabel")}</p>
            <h2 className="text-3xl lg:text-4xl heading-underline-center">{t("activities.whyTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Clock, title: t("activities.why.mobilisation"), desc: t("activities.why.mobilisationDesc") },
              { icon: BadgeCheck, title: t("activities.why.classSocieties"), desc: t("activities.why.classSocietiesDesc") },
              { icon: ShieldCheck, title: t("activities.why.certified"), desc: t("activities.why.certifiedDesc") },
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
