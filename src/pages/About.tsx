import { Link } from "react-router-dom";
import { Building2, Ship, Clock, Award, Globe2, ArrowRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function About() {
  const { t } = useLanguage();

  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">{t("about.label")}</p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">{t("about.heroTitle")}</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-pro grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
            <h2 className="text-2xl lg:text-3xl heading-underline">{t("about.ourStory")}</h2>
            <p>{t("about.storyP1")}</p>
            <p>{t("about.storyP2")}</p>
            <p>{t("about.storyP3")}</p>
          </div>

          <aside className="space-y-4">
            {[
              { v: "300+", l: t("about.stat.vessels") },
              { v: "24/7", l: t("about.stat.availability") },
              { v: "27", l: t("about.stat.experience") },
              { v: t("about.stat.worldwide"), l: t("about.stat.coverage") },
            ].map((s) => (
              <div key={s.l} className="bg-surface border-l-4 border-brand-red p-5 rounded-r-md">
                <div className="text-3xl font-extrabold text-primary leading-none">{s.v}</div>
                <div className="text-sm text-muted-foreground mt-2 font-medium">{s.l}</div>
              </div>
            ))}
          </aside>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="container-pro grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="inline-flex items-center gap-2 mb-5">
              <Building2 className="w-5 h-5 text-brand-red" />
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red">{t("about.parentLabel")}</span>
            </div>
            <h2 className="text-3xl lg:text-4xl mb-6 heading-underline">{t("about.parentTitle")}</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              {t("about.parentP1")}
            </p>
            <p className="text-foreground/80 leading-relaxed">
              {t("about.parentP2")}
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Ship, t: t("about.card.shipyard") },
              { icon: Award, t: t("about.card.industrial") },
              { icon: Globe2, t: t("about.card.baltic") },
              { icon: Clock, t: t("about.card.decades") },
            ].map((b, i) => (
              <div key={i} className="bg-background border border-border rounded-lg p-6">
                <div className="w-11 h-11 bg-primary/5 rounded-md flex items-center justify-center mb-3">
                  <b.icon className="w-5 h-5 text-brand-red" />
                </div>
                <div className="font-bold text-primary text-sm">{b.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-deep text-white">
        <div className="container-pro flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl text-white mb-2">{t("about.ctaTitle")}</h3>
            <p className="text-white/70">{t("about.ctaDesc")}</p>
          </div>
          <Link to="/contacts" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-7 py-4 rounded-md shadow-red whitespace-nowrap">
            {t("nav.requestSurvey")} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
