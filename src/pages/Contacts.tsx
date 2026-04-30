import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const services = [
  "Non-Destructive Testing (NDT)",
  "Ultrasonic Thickness Measurement (UTM)",
  "Steel Renewal Supervision",
  "Class Survey Support",
  "Repair Specification",
  "Other / Multiple",
];

export default function Contacts() {
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: "Request received",
        description: "Thank you. Our team will contact you within a few hours.",
      });
    }, 600);
  };

  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">Contacts</p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">Request a survey or get in touch.</h1>
          <p className="text-white/75 mt-4 max-w-2xl">Available 24/7 worldwide — typical response within hours, mobilisation within 24h.</p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-pro grid lg:grid-cols-2 gap-10">
          {/* Info panel */}
          <div className="bg-gradient-navy text-white rounded-lg p-8 lg:p-10 relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-64 h-64 rounded-full bg-brand-red/10 blur-3xl" aria-hidden="true" />
            <div className="relative">
              <div className="inline-flex items-center gap-2 bg-success/15 border border-success/30 px-3 py-1.5 rounded-full mb-8">
                <span className="pulse-dot bg-success" />
                <span className="text-xs font-bold uppercase tracking-wider text-white">Available 24/7</span>
              </div>

              <h2 className="text-2xl text-white mb-2">Tehnomet Survey OÜ</h2>
              <p className="text-white/65 mb-10">Ship Repair &amp; Hull Inspection</p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">Phone</div>
                    <a href="tel:+3726102997" className="text-white font-semibold text-lg hover:text-brand-red">+372 610 2997</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">Email</div>
                    <a href="mailto:info@tehnometsurvey.ee" className="text-white font-semibold text-lg hover:text-brand-red break-all">info@tehnometsurvey.ee</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">Address</div>
                    <div className="text-white font-semibold">Kopli 103, Tallinn</div>
                    <div className="text-white/65 text-sm mt-0.5">Estonia · BLRT Grupp</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">Hours</div>
                    <div className="text-white font-semibold">24 / 7 · Worldwide</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-8 lg:p-10">
            <h2 className="text-2xl mb-2">Send us your request</h2>
            <p className="text-sm text-muted-foreground mb-8">All fields help us respond faster with the right information.</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="First Name" name="firstName" required />
              <Field label="Last Name" name="lastName" required />
              <Field label="Company" name="company" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div>
                <Label>Service Required</Label>
                <select name="service" required className="w-full bg-background border border-input rounded-md px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">Select a service…</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Field label="Vessel Name & Current Port" name="vessel" />
              </div>
              <div className="sm:col-span-2">
                <Label>Details &amp; Urgency</Label>
                <textarea
                  name="details"
                  rows={5}
                  required
                  placeholder="Type of inspection, vessel type, timing, ETA at port…"
                  className="w-full bg-background border border-input rounded-md px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-8 w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-red hover:bg-brand-red-hover disabled:opacity-60 text-white font-bold px-8 py-4 rounded-md shadow-red transition-colors"
            >
              <Send className="w-4 h-4" />
              {submitting ? "Sending…" : "Send Request"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-xs font-bold uppercase tracking-wider text-primary mb-1.5">{children}</label>;
}

function Field({ label, name, type = "text", required }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <Label>{label}{required && <span className="text-brand-red ml-1">*</span>}</Label>
      <input
        type={type}
        name={name}
        required={required}
        className="w-full bg-background border border-input rounded-md px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
      />
    </div>
  );
}
