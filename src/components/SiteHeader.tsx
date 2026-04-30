import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, Mail, MapPin, Clock } from "lucide-react";
import logo from "@/assets/logo.png";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/activities", label: "Activities" },
  { to: "/global-reach", label: "Global Reach" },
  { to: "/contacts", label: "Contacts" },
];

const languages = ["EN", "RU", "中文"] as const;

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState<(typeof languages)[number]>("EN");

  return (
    <header className="sticky top-0 z-50 bg-background shadow-card-pro">
      {/* Top utility bar */}
      <div className="bg-primary-deep text-white/85 text-xs">
        <div className="container-pro flex items-center justify-between h-9 gap-4">
          <div className="hidden md:flex items-center gap-5">
            <a href="tel:+3726102997" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5" /> +372 610 2997
            </a>
            <a href="mailto:info@tehnometsurvey.ee" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5" /> info@tehnometsurvey.ee
            </a>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5" /> Kopli 103, Tallinn
            </span>
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <Clock className="w-3.5 h-3.5" />
            <span>Available 24/7 worldwide</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container-pro flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logo} alt="Tehnomet Survey logo" width={44} height={44} className="w-11 h-11 object-contain" />
          <div className="leading-tight">
            <div className="text-primary font-extrabold tracking-tight text-base sm:text-lg">TEHNOMET SURVEY</div>
            <div className="text-[11px] text-muted-foreground font-medium">Ship Repair &amp; Hull Inspection · OÜ</div>
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
                  isActive
                    ? "text-brand-red"
                    : "text-primary hover:text-brand-red"
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
            Request a Survey
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
                Request a Survey
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
