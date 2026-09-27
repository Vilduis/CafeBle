"use client";

import { useEffect, useState } from "react";
import { buildWhatsAppUrl, navLinks } from "@/lib/cafe";
import { CafeBleLogo, WhatsAppIcon } from "@/components/logo";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-300 ${
        scrolled
          ? "border-sand/70 bg-dawn/90 shadow-[0_8px_24px_rgb(43_24_17/6%)] backdrop-blur-md"
          : "border-transparent bg-dawn"
      }`}
    >
      <div className="mx-auto flex h-[84px] w-full max-w-[1440px] items-center justify-between gap-6 px-5 sm:px-8 lg:px-14">
        <a
          href="#inicio"
          aria-label="CaféBle, ir al inicio"
          className="text-espresso"
        >
          <CafeBleLogo />
        </a>

        <nav
          className="hidden items-center gap-9 text-[0.82rem] font-medium md:flex"
          aria-label="Navegación principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              className="underline decoration-transparent decoration-1 underline-offset-[7px] transition-colors hover:decoration-espresso"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          className="inline-flex min-h-11 items-center gap-2.5 rounded-[10px] bg-espresso px-4 text-[0.7rem] font-extrabold tracking-[0.12em] text-white uppercase transition-colors hover:bg-roast sm:px-6"
          href={buildWhatsAppUrl()}
          target="_blank"
          rel="noreferrer"
        >
          <WhatsAppIcon className="h-[18px] w-[18px]" />
          <span className="hidden sm:inline">Pedir por WhatsApp</span>
        </a>
      </div>
    </header>
  );
}
