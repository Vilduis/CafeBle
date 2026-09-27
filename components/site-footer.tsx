import Image from "next/image";
import { ArrowRight, CreditCard, Heart, Truck } from "lucide-react";
import { CafeBleLogo, FacebookIcon, WhatsAppIcon } from "@/components/logo";
import { buildWhatsAppUrl, navLinks } from "@/lib/cafe";
import coffeeCherries from "@/public/images/products/cerezas_cafe.jpg";
import { Eyebrow, buttonLight } from "@/components/ui";

const assurances = [
  { icon: Truck, label: "Envíos a todo Perú" },
  { icon: CreditCard, label: "Pago al recibir" },
  { icon: Heart, label: "Atención directa" },
];

export function SiteFooter() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <footer>
      <section id="contacto" className="relative min-h-[360px] overflow-hidden bg-espresso text-white">
        <Image src={coffeeCherries} alt="" fill placeholder="blur" sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgb(38_21_13/0%)_0%,rgb(38_21_13/62%)_32%,rgb(38_21_13/94%)_60%)] max-lg:bg-[rgb(38_21_13/82%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col justify-center px-5 py-16 sm:px-8 lg:min-h-[360px] lg:px-14 lg:pl-[40%]" data-aos="fade-up">
          <Eyebrow tone="light">Un café más cerca de ti</Eyebrow>

          <h2 className="font-display mt-5 text-[clamp(2.2rem,4.2vw,3.4rem)] leading-[1.02] font-normal tracking-[-0.035em]">
            Haz tu pedido por WhatsApp
          </h2>

          <p className="mt-4 max-w-[52ch] text-pretty text-[0.86rem] leading-6 text-[#e4d8cf]">
            Recibe tu café en casa, de forma rápida y segura.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-5">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`${buttonLight} group/cta w-fit gap-3 px-6 hover:-translate-y-0.5`}
            >
              <WhatsAppIcon className="h-5 w-5" /> Pedir por WhatsApp
              <ArrowRight className="transition-transform group-hover/cta:translate-x-1" aria-hidden="true" size={16} />
            </a>

            <ul className="flex flex-wrap items-center gap-x-6 gap-y-3 text-[0.75rem] text-[#e4d8cf]">
              {assurances.map(({ icon: Icon, label }) => (
                <li key={label} className="flex items-center gap-2.5 sm:not-first:border-l sm:not-first:border-white/25 sm:not-first:pl-6">
                  <Icon className="shrink-0 stroke-[1.3]" aria-hidden="true" size={17} />
                  {label}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-linen text-espresso">
        <div className="mx-auto flex w-full max-w-[1440px] flex-wrap items-center justify-between gap-x-10 gap-y-7 px-5 py-9 sm:px-8 lg:px-14">
          <CafeBleLogo className="text-[1.6rem]" />

          <nav className="flex flex-wrap gap-x-7 gap-y-2 text-[0.78rem] font-medium text-stone" aria-label="Navegación del pie de página">
            {navLinks.map((link) => (
              <a key={link.href} className="transition-colors hover:text-espresso" href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
            <div className="flex items-center gap-2">
              <a href={whatsappUrl} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-md text-espresso transition-colors hover:bg-cream" aria-label="Pedir CaféBle por WhatsApp">
                <WhatsAppIcon className="h-[18px] w-[18px]" />
              </a>
              <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-md text-espresso transition-colors hover:bg-cream" aria-label="CaféBle en Facebook">
                <FacebookIcon className="h-[19px] w-[19px]" />
              </a>
            </div>

            <p className="border-sand text-[0.75rem] leading-5 text-stone sm:border-l sm:pl-7">
              Café que une personas.
              <br />© 2026 CaféBle. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
