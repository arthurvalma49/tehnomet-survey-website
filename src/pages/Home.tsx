import { Link } from "react-router-dom";
import { ArrowRight, Ship, Clock, Award, Globe2 } from "lucide-react";
import ClassSocietiesStrip from "@/components/ClassSocietiesStrip";
import heroVessel from "@/assets/hero-vessel.jpg";
import inspectorWork from "@/assets/inspector-work.jpg";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <>
      {/* Hero */}
      <section className="relative bg-primary-deep text-white overflow-hidden">
        <img
          src={heroVessel}
          alt="Commercial cargo vessel in dry dock undergoing inspection"
          width={1920}
          height={1088}
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-deep via-primary-deep/85 to-primary-deep/40" aria-hidden="true" />

        <div className="container-pro relative py-16 sm:py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider mb-6">
              {t("home.badge")}
            </div>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
              {t("home.heroTitle1")}<br />
              {t("home.heroTitle2")}<span className="text-brand-red">{t("home.heroTitle3")}</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              {t("home.heroDesc")}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacts" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-7 py-4 rounded-md shadow-red transition-colors">
                {t("nav.requestSurvey")} <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/activities" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-7 py-4 rounded-md transition-colors">
                {t("home.viewActivities")}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ClassSocietiesStrip />

      {/* Stats bar */}
      <section className="bg-background border-b border-border">
        <div className="container-pro grid grid-cols-2 lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-border">
          {[
            { icon: Ship, value: "300+", label: t("home.stat.vessels") },
            { icon: Clock, value: "24/7", label: t("home.stat.mobilisation") },
            { icon: Award, value: "27", label: t("home.stat.experience") },
            { icon: Globe2, value: t("home.stat.worldwide"), label: t("home.stat.coverage") },
          ].map((s, i) => (
            <div key={i} className="py-6 sm:py-10 px-3 sm:px-6 flex items-center gap-3 sm:gap-5">
              <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-md bg-primary/5 flex items-center justify-center shrink-0">
                <s.icon className="w-5 h-5 sm:w-7 sm:h-7 text-brand-red" />
              </div>
              <div>
                <div className="text-xl sm:text-3xl font-extrabold text-primary leading-none">{s.value}</div>
                <div className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-1.5 font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-14 sm:py-24 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] font-bold text-brand-red mb-4">{t("home.aboutLabel")}</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl mb-6 heading-underline">
              {t("home.aboutTitle")}
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              {t("home.aboutP1")}
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-8">
              {t("home.aboutP2")}
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-brand-red text-brand-red font-bold px-6 py-3 rounded-md hover:bg-brand-red hover:text-white transition-colors"
            >
              {t("home.readMore")} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-brand-red/10 rounded-lg" aria-hidden="true" />
            <img
              src={inspectorWork}
              alt="Certified technician performing ultrasonic thickness measurement on a vessel hull"
              width={1280}
              height={896}
              loading="lazy"
              className="relative rounded-lg w-full h-full object-cover aspect-[4/3] shadow-elevated"
            />
          </div>
        </div>
      </section>

      {/* Activities preview */}
      <section className="py-14 sm:py-24 bg-surface">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.25em] font-bold text-brand-red mb-4">{t("home.activitiesLabel")}</p>
            <h2 className="text-3xl lg:text-4xl heading-underline-center">{t("home.activitiesTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t("home.ndt.title"),
                desc: t("home.ndt.desc"),
                tag: "NDT",
              },
              {
                title: t("home.utm.title"),
                desc: t("home.utm.desc"),
                tag: "UTM",
              },
            ].map((a) => (
              <Link
                key={a.tag}
                to="/activities"
                className="group relative bg-background border border-border rounded-lg p-8 hover:border-brand-red hover:shadow-elevated transition-all"
              >
                <div className="flex items-start justify-between mb-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-brand-red px-2.5 py-1 bg-brand-red/10 rounded">
                    {a.tag}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-brand-red group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-xl mb-3">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
