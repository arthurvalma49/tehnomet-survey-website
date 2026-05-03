import { useState, FormEvent } from "react";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Contacts() {
  const [submitting, setSubmitting] = useState(false);
  const { t } = useLanguage();

  const services = [
    t("contacts.service.ndt"),
    t("contacts.service.utm"),
    t("contacts.service.steel"),
    t("contacts.service.class"),
    t("contacts.service.repair"),
    t("contacts.service.other"),
  ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      (e.target as HTMLFormElement).reset();
      toast({
        title: t("contacts.toastTitle"),
        description: t("contacts.toastDesc"),
      });
    }, 600);
  };

  return (
    <>
      <section className="bg-gradient-navy text-white py-20">
        <div className="container-pro">
          <p className="text-xs uppercase tracking-[0.3em] font-bold text-brand-red mb-4">{t("contacts.label")}</p>
          <h1 className="text-4xl lg:text-5xl text-white max-w-3xl">{t("contacts.heroTitle")}</h1>
          <p className="text-white/75 mt-4 max-w-2xl">{t("contacts.heroDesc")}</p>
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
                <span className="text-xs font-bold uppercase tracking-wider text-white">{t("contacts.available")}</span>
              </div>

              <h2 className="text-2xl text-white mb-2">{t("contacts.companyName")}</h2>
              <p className="text-white/65 mb-10">{t("contacts.companyDesc")}</p>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">{t("contacts.phone")}</div>
                    <a href="tel:+3726102997" className="text-white font-semibold text-lg hover:text-brand-red">+372 610 2997</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">{t("contacts.email")}</div>
                    <a href="mailto:info@tehnometsurvey.ee" className="text-white font-semibold text-lg hover:text-brand-red break-all">info@tehnometsurvey.ee</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">{t("contacts.address")}</div>
                    <div className="text-white font-semibold">Kopli 103, Tallinn</div>
                    <div className="text-white/65 text-sm mt-0.5">Estonia · BLRT Grupp</div>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-md bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5 text-brand-red" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white/55 font-bold mb-1">{t("contacts.hours")}</div>
                    <div className="text-white font-semibold">{t("contacts.hoursValue")}</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="bg-surface border border-border rounded-lg p-8 lg:p-10">
            <h2 className="text-2xl mb-2">{t("contacts.formTitle")}</h2>
            <p className="text-sm text-muted-foreground mb-8">{t("contacts.formDesc")}</p>

            <div className="grid sm:grid-cols-2 gap-5">
              <Field label={t("contacts.firstName")} name="firstName" required />
              <Field label={t("contacts.lastName")} name="lastName" required />
              <Field label={t("contacts.company")} name="company" />
              <Field label={t("contacts.emailField")} name="email" type="email" required />
              <Field label={t("contacts.phoneField")} name="phone" type="tel" />
              <div>
                <Label>{t("contacts.serviceRequired")}</Label>
                <select name="service" required className="w-full bg-background border border-input rounded-md px-3.5 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary">
                  <option value="">{t("contacts.selectService")}</option>
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div className="sm:col-span-2">
                <Field label={t("contacts.vesselField")} name="vessel" />
              </div>
              <div className="sm:col-span-2">
                <Label>{t("contacts.detailsLabel")}</Label>
                <textarea
                  name="details"
                  rows={5}
                  required
                  placeholder={t("contacts.detailsPlaceholder")}
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
              {submitting ? t("contacts.sending") : t("contacts.sendRequest")}
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
