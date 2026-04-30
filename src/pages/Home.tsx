import { Link } from "react-router-dom";
import { ArrowRight, Ship, Clock, Award, Globe2 } from "lucide-react";
import ClassSocietiesStrip from "@/components/ClassSocietiesStrip";
import heroVessel from "@/assets/hero-vessel.jpg";
import inspectorWork from "@/assets/inspector-work.jpg";

export default function Home() {
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

        <div className="container-pro relative py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/15 text-xs font-semibold uppercase tracking-wider mb-6">
              Marine Inspection · Since 1998
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.05] mb-6">
              Independent ship hull<br />
              inspection, <span className="text-brand-red">worldwide.</span>
            </h1>
            <p className="text-lg lg:text-xl text-white/80 max-w-2xl mb-10 leading-relaxed">
              Non-destructive testing, ultrasonic thickness measurement and steel renewal supervision for fleet operators. Certified technicians mobilised to any port within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contacts" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-7 py-4 rounded-md shadow-red transition-colors">
                Request a Survey <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/activities" className="inline-flex items-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold px-7 py-4 rounded-md transition-colors">
                View Activities
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
            { icon: Ship, value: "300+", label: "Vessels inspected per year" },
            { icon: Clock, value: "24/7", label: "Mobilisation availability" },
            { icon: Award, value: "27", label: "Years of experience" },
            { icon: Globe2, value: "Worldwide", label: "Operational coverage" },
          ].map((s, i) => (
            <div key={i} className="py-10 px-6 flex items-center gap-5">
              <div className="w-14 h-14 rounded-md bg-primary/5 flex items-center justify-center shrink-0">
                <s.icon className="w-7 h-7 text-brand-red" />
              </div>
              <div>
                <div className="text-3xl font-extrabold text-primary leading-none">{s.value}</div>
                <div className="text-sm text-muted-foreground mt-1.5 font-medium">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About preview */}
      <section className="py-24 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] font-bold text-brand-red mb-4">About Us</p>
            <h2 className="text-3xl lg:text-4xl mb-6 heading-underline">
              Trusted partner in marine vessel inspection
            </h2>
            <p className="text-base text-foreground/80 leading-relaxed mb-4">
              Tehnomet Survey is an actively developing service company operating in the field of ship repair and inspection of hull structures of marine vessels. Founded in 1998, we are part of the BLRT Grupp and operate worldwide.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed mb-8">
              Our technicians hold all necessary documents to be mobilised on short notice and arrive on a spot as per client's request — wherever the vessel is located.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border-2 border-brand-red text-brand-red font-bold px-6 py-3 rounded-md hover:bg-brand-red hover:text-white transition-colors"
            >
              Read More <ArrowRight className="w-4 h-4" />
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
      <section className="py-24 bg-surface">
        <div className="container-pro">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm uppercase tracking-[0.25em] font-bold text-brand-red mb-4">Activities</p>
            <h2 className="text-3xl lg:text-4xl heading-underline-center">Our Core Services</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Non-Destructive Testing (NDT)",
                desc: "Hull and weld inspection without interrupting vessel operations. UT, MT, PT, VT, RT and ET methods performed by certified technicians.",
                tag: "NDT",
              },
              {
                title: "UTM & Steel Supervision",
                desc: "Ultrasonic thickness measurement, corrosion monitoring, structural integrity assessment and class survey support.",
                tag: "UTM",
              },
            ].map((a) => (
              <Link
                key={a.title}
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
