import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-white-clean.png";

export default function SiteFooter() {
  return (
    <footer className="bg-primary-deep text-white/80 border-t-[3px] border-brand-red mt-auto">
      <div className="container-pro py-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="mb-5">
            <img src={logo} alt="Tehnomet Survey — BLRT Grupp" width={180} height={64} className="h-14 w-auto object-contain brightness-0 invert" loading="lazy" />
          </div>
          <p className="text-sm leading-relaxed text-white/65 max-w-xs">
            Be Aware. Be Confident. Be Safe. Marine vessel inspection trusted by ship owners worldwide since 1998.
          </p>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 heading-underline">Pages</h4>
          <ul className="space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-white">Home</Link></li>
            <li><Link to="/about" className="hover:text-white">About Us</Link></li>
            <li><Link to="/activities" className="hover:text-white">Activities</Link></li>
            <li><Link to="/global-reach" className="hover:text-white">Global Reach</Link></li>
            <li><Link to="/contacts" className="hover:text-white">Contacts</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 heading-underline">Services</h4>
          <ul className="space-y-2.5 text-sm">
            <li>Non-Destructive Testing (NDT)</li>
            <li>Ultrasonic Thickness Measurement</li>
            <li>Steel Renewal Supervision</li>
            <li>Class Surveys (IACS)</li>
            <li>Repair Specifications</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 heading-underline">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-2.5"><Phone className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><a href="tel:+3726102997" className="hover:text-white">+372 610 2997</a></li>
            <li className="flex items-start gap-2.5"><Mail className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><a href="mailto:info@tehnometsurvey.ee" className="hover:text-white">info@tehnometsurvey.ee</a></li>
            <li className="flex items-start gap-2.5"><MapPin className="w-4 h-4 mt-0.5 text-brand-red shrink-0" /><span>Kopli 103, Tallinn<br />Estonia · BLRT Grupp</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-pro py-5 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-white/55">
          <div>© {new Date().getFullYear()} Tehnomet Survey OÜ. All rights reserved.</div>
          <div className="font-semibold tracking-wider uppercase">Be Aware · Be Confident · Be Safe</div>
        </div>
      </div>
    </footer>
  );
}
