import { Link } from "react-router-dom";
import { Building2, Ship, Clock, Award, Globe2, ArrowRight } from "lucide-react";

export default function About() {
  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">About Us</p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">A quarter century of marine inspection expertise.</h1>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-pro grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6 text-foreground/85 leading-relaxed">
            <h2 className="text-2xl lg:text-3xl heading-underline">Our Story</h2>
            <p>
              Tehnomet Survey is an actively developing service company, operating in the field of ship repair and inspection of hull structures of marine vessels, founded in 1998. We operate worldwide.
            </p>
            <p>
              Our technicians have all the necessary documents to be mobilized on a short notice and arrive on a spot as per client's request, wherever vessel is located. Over more than two decades we have built lasting relationships with ship owners, fleet operators, port agents and procurement managers across Europe, the Middle East and Asia-Pacific.
            </p>
            <p>
              We perform our work in close cooperation with all major classification societies, ensuring every report and certificate we produce is accepted globally. Independence and technical rigour are at the core of how we operate.
            </p>
          </div>

          <aside className="space-y-4">
            {[
              { v: "300+", l: "Vessels per year" },
              { v: "24/7", l: "Availability" },
              { v: "27", l: "Years experience" },
              { v: "Worldwide", l: "Coverage" },
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
              <span className="text-xs uppercase tracking-[0.25em] font-bold text-brand-red">Parent Company</span>
            </div>
            <h2 className="text-3xl lg:text-4xl mb-6 heading-underline">Part of BLRT Grupp</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Tehnomet Survey is part of <strong className="text-primary">BLRT Grupp</strong>, one of the largest industrial holding companies in the Baltic region with deep roots in shipbuilding, ship repair and maritime services.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Through BLRT Grupp we have access to extensive shipyard infrastructure, engineering expertise and a network of maritime specialists — strengths we bring to every inspection contract.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Ship, t: "Shipyard heritage" },
              { icon: Award, t: "Industrial scale" },
              { icon: Globe2, t: "Baltic region leader" },
              { icon: Clock, t: "Decades of trust" },
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
            <h3 className="text-2xl text-white mb-2">Need an inspection arranged?</h3>
            <p className="text-white/70">Talk to our team — response within hours, mobilisation within 24h.</p>
          </div>
          <Link to="/contacts" className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-bold px-7 py-4 rounded-md shadow-red whitespace-nowrap">
            Request a Survey <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
