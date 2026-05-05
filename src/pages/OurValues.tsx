import { useLanguage } from "@/i18n/LanguageContext";
import { Heart, Shield, Zap, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Heart,
    titleKey: "values.people.title" as const,
    subtitleKey: "values.people.subtitle" as const,
    items: [
      "values.people.1" as const,
      "values.people.2" as const,
      "values.people.3" as const,
      "values.people.4" as const,
    ],
  },
  {
    icon: Shield,
    titleKey: "values.reliability.title" as const,
    subtitleKey: "values.reliability.subtitle" as const,
    items: [
      "values.reliability.1" as const,
      "values.reliability.2" as const,
      "values.reliability.3" as const,
    ],
  },
  {
    icon: Zap,
    titleKey: "values.efficiency.title" as const,
    subtitleKey: "values.efficiency.subtitle" as const,
    items: [
      "values.efficiency.1" as const,
      "values.efficiency.2" as const,
      "values.efficiency.3" as const,
    ],
  },
  {
    icon: TrendingUp,
    titleKey: "values.development.title" as const,
    subtitleKey: "values.development.subtitle" as const,
    items: [
      "values.development.1" as const,
      "values.development.2" as const,
      "values.development.3" as const,
      "values.development.4" as const,
      "values.development.5" as const,
    ],
  },
];

export default function OurValues() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">
            {t("values.label")}
          </p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">
            {t("values.heroTitle")}
          </h1>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container-pro grid gap-10 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.titleKey}
              className="rounded-2xl border border-border bg-card p-8 shadow-card-pro hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red">
                  <v.icon className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-extrabold text-primary">{t(v.titleKey)}</h2>
                  <p className="text-xs font-bold tracking-widest uppercase text-muted-foreground">
                    {t(v.subtitleKey)}
                  </p>
                </div>
              </div>
              <ul className="space-y-3">
                {v.items.map((key) => (
                  <li key={key} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-red shrink-0" />
                    {t(key)}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
