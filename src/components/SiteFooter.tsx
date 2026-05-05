import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-white-clean.png";
import { useLanguage } from "@/i18n/LanguageContext";

export default function SiteFooter() {
  const { t } = useLanguage();

  return (
    <footer className="bg-primary-deep text-white/80 border-t-[3px] border-brand-red mt-auto">
      <div className="container-pro py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-5">
            <img src={logo} alt="Tehnomet Survey — BLRT Grupp" width={180} height={64} className="h-14 w-auto object-contain" style={{ filter: "brightness(0) invert(1)" }} loading="lazy" />
          </div>
          <p className="text-sm leading-relaxed text-white/65 max-w-xs">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 heading-underline">{t("footer.pages")}</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white">{t("nav.home")}</Link></li>
            <li><Link to="/about" className="hover:text-white">{t("nav.about")}</Link></li>
            <li><Link to="/activities" className="hover:text-white">{t("nav.activities")}</Link></li>
            <li><Link to="/contacts" className="hover:text-white">{t("nav.contacts")}</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 heading-underline">{t("footer.services")}</h4>
          <ul className="space-y-2.5 text-sm">
            <li>{t("footer.service.ndt")}</li>
            <li>{t("footer.service.utm")}</li>
            <li>{t("footer.service.steel")}</li>
            <li>{t("footer.service.class")}</li>
            <li>{t("footer.service.repair")}</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 heading-underline">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5"><Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><a href="tel:+3726102997" className="hover:text-white">+372 610 2997</a></li>
            <li className="flex items-start gap-2.5"><Mail className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><a href="mailto:info@tehnometsurvey.ee" className="hover:text-white">info@tehnometsurvey.ee</a></li>
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><span>Kopli 103, Tallinn<br />Estonia · BLRT Grupp</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Tehnomet Survey OÜ. {t("footer.rights")}</div>
          <div className="font-semibold tracking-wider uppercase">{t("footer.motto")}</div>
        </div>
      </div>
    </footer>
  );
}
