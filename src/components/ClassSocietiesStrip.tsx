import { useLanguage } from "@/i18n/LanguageContext";

type Society = { name: string; abbr: string };
const societies: Society[] = [
  { name: "Lloyd's Register", abbr: "LR" },
  { name: "DNV", abbr: "DNV" },
  { name: "Bureau Veritas", abbr: "BV" },
  { name: "American Bureau of Shipping", abbr: "ABS" },
  { name: "ClassNK", abbr: "NK" },
  { name: "RINA", abbr: "RINA" },
  { name: "China Classification Society", abbr: "CCS" },
];

export default function ClassSocietiesStrip() {
  const { t } = useLanguage();

  return (
    <section className="bg-primary-deep border-y border-white/5">
      <div className="container-pro py-8">
        <div className="text-center mb-6">
          <p className="text-xs uppercase tracking-[0.25em] font-bold text-white/55">
            {t("class.accepted")}
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-4 sm:gap-6 items-center">
          {societies.map((s) => (
            <div
              key={s.abbr}
              title={s.name}
              className="flex flex-col items-center justify-center text-center group"
            >
              <div className="w-full h-14 flex items-center justify-center border border-white/15 rounded-md px-3 transition-colors group-hover:border-brand-red group-hover:bg-white/5">
                <span className="text-white font-extrabold tracking-wider text-lg">{s.abbr}</span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-white/45 mt-1.5 font-medium">{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
