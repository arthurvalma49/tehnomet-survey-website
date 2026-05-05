import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-symbol.png";
import { useLanguage } from "@/i18n/LanguageContext";

const languages = ["EN", "RU"] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, setLang, t } = useLanguage();

  const navItems = [
    { to: "/", label: t("nav.home") },
    { to: "/about", label: t("nav.about") },
    { to: "/activities", label: t("nav.activities") },
    { to: "/our-values", label: t("nav.values") },
    { to: "/contacts", label: t("nav.contacts") },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background shadow-card-pro">
      <div className="container-pro flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 py-2" aria-label="Tehnomet Survey home">
          <img
            src={logo}
            alt="Tehnomet Survey — BLRT Grupp"
            width={44}
            height={44}
            className="h-11 w-11 bg-transparent object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-extrabold text-primary tracking-tight">
              TEHNOMET SURVEY
            </span>
            <span className="text-[11px] font-semibold text-muted-foreground tracking-widest uppercase">
              BLRT Grupp
            </span>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                  isActive ? "text-brand-red" : "text-primary hover:text-brand-red"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center bg-muted rounded-md p-0.5">
            {languages.map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-2.5 py-1 text-xs font-bold rounded transition-colors ${
                  lang === l ? "bg-primary text-white" : "text-muted-foreground hover:text-primary"
                }`}
              >
                {l}
              </button>
            ))}
          </div>
          <Link
            to="/contacts"
            className="bg-brand-red hover:bg-brand-red-hover text-white text-sm font-bold px-5 py-2.5 rounded-md transition-colors shadow-red"
          >
            {t("nav.requestSurvey")}
          </Link>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background">
          <nav className="container-pro py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 text-sm font-semibold rounded-md ${
                    isActive ? "bg-muted text-brand-red" : "text-primary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="flex items-center gap-2 pt-3 border-t border-border mt-2">
              <div className="flex items-center bg-muted rounded-md p-0.5">
                {languages.map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 text-xs font-bold rounded ${
                      lang === l ? "bg-primary text-white" : "text-muted-foreground"
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>
              <Link
                to="/contacts"
                onClick={() => setMobileOpen(false)}
                className="ml-auto bg-brand-red text-white text-sm font-bold px-4 py-2 rounded-md"
              >
                {t("nav.requestSurvey")}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
