import { buildWhatsAppUrl } from "@/lib/cafe";
import { CafeBleLogo, WhatsAppIcon } from "@/components/logo";

const navLinks = [
  { href: "#cafes", label: "Cafés" },
  { href: "#origen", label: "Origen" },
  { href: "#reconocimiento", label: "Reconocimiento" },
  { href: "#contacto", label: "Contacto" },
];

export function SiteHeader() {
  return (
    <header className="relative z-20 bg-dawn">
      <div className="mx-auto flex h-[84px] w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
        <a href="#inicio" aria-label="CaféBle, ir al inicio" className="text-espresso">
          <CafeBleLogo />
        </a>

        <nav className="hidden items-center gap-9 text-[0.82rem] font-medium md:flex" aria-label="Navegación principal">
          {navLinks.map((link) => (
            <a key={link.href} className="underline decoration-transparent decoration-1 underline-offset-[7px] transition-colors hover:decoration-espresso" href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <a className="inline-flex min-h-11 items-center gap-2.5 rounded-md bg-espresso px-4 text-[0.66rem] font-extrabold tracking-[0.12em] text-white uppercase transition-colors hover:bg-roast sm:px-6" href={buildWhatsAppUrl()} target="_blank" rel="noreferrer">
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          <span className="hidden sm:inline">Pedir por WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
