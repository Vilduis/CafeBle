"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, ChevronDown } from "lucide-react";
import { WhatsAppIcon } from "@/components/logo";
import {
  buildWhatsAppUrl,
  coffeeGrinds,
  coffeeVarieties,
  coffeeWeights,
  getCoffeePrice,
  type CoffeeGrind,
  type CoffeeWeightId,
} from "@/lib/cafe";

type Coffee = (typeof coffeeVarieties)[number];

const quietSelect =
  "appearance-none rounded-sm bg-transparent py-1 pr-6 pl-2 text-[0.72rem] font-bold text-espresso transition-colors hover:bg-cream";

function ProductCard({ coffee, revealDelay }: { coffee: Coffee; revealDelay: number }) {
  const [weightId, setWeightId] = useState<CoffeeWeightId>("250 g");
  const [grind, setGrind] = useState<CoffeeGrind>("En grano");
  const price = getCoffeePrice(coffee.id, weightId);
  const whatsappUrl = buildWhatsAppUrl({ varietyId: coffee.id, weightId, grind });

  return (
    <article data-aos="fade-up" data-aos-delay={revealDelay} className="group/card flex flex-col border border-sand bg-paper transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgb(43_24_17/10%)]">
      <div className="aspect-[5/6] overflow-hidden bg-clay">
        <Image
          src={coffee.image}
          alt={coffee.imageAlt}
          width={900}
          height={1080}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="h-full w-full object-cover transition-transform duration-500 group-hover/card:scale-[1.02]"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <h3 className="font-display text-[2rem] leading-none font-normal tracking-[-0.03em]">{coffee.name}</h3>
        <p className="mt-3 min-h-11 max-w-[30ch] text-[0.8rem] leading-6 text-stone">{coffee.notes}</p>

        <div
          className="mt-auto flex items-center justify-between gap-3 border-y border-sand py-3"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          <div className="flex flex-wrap items-center gap-1">
            <span className="relative inline-flex items-center">
              <select
                className={quietSelect}
                aria-label={`Peso de ${coffee.name}`}
                value={weightId}
                onChange={(event) => setWeightId(event.target.value as CoffeeWeightId)}
              >
                {coffeeWeights.map((weight) => (
                  <option key={weight.id} value={weight.id}>{weight.id}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-1.5 text-[#8e7566]" aria-hidden="true" size={13} />
            </span>
            <span className="text-[0.72rem] text-[#a08c7e]" aria-hidden="true">·</span>
            <span className="relative inline-flex items-center">
              <select
                className={quietSelect}
                aria-label={`Preparación de ${coffee.name}`}
                value={grind}
                onChange={(event) => setGrind(event.target.value as CoffeeGrind)}
              >
                {coffeeGrinds.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-1.5 text-[#8e7566]" aria-hidden="true" size={13} />
            </span>
          </div>
          <strong className="font-display shrink-0 text-[1.6rem] leading-none font-normal tabular-nums">S/ {price}</strong>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="group/order mt-5 inline-flex min-h-12 w-full items-center gap-3 rounded-md bg-espresso px-5 text-[0.64rem] font-extrabold tracking-[0.12em] text-white uppercase transition-colors hover:bg-roast"
        >
          <WhatsAppIcon className="h-[18px] w-[18px] shrink-0" />
          Pedir por WhatsApp
          <ArrowRight className="ml-auto shrink-0 transition-transform group-hover/order:translate-x-1" aria-hidden="true" size={16} />
        </a>
      </div>
    </article>
  );
}

export function ProductShowcase() {
  return (
    <section id="cafes" className="bg-linen px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto mb-12 max-w-[760px] text-center" data-aos="fade-up">
          <p className="text-[0.62rem] font-extrabold tracking-[0.28em] text-[#7b6659] uppercase">Nuestros cafés</p>
          <h2 className="font-display mt-5 text-[clamp(2.4rem,4.4vw,3.6rem)] leading-[1.02] font-normal tracking-[-0.035em]">
            Tres orígenes, un mismo propósito.
          </h2>
          <p className="mx-auto mt-4 max-w-[70ch] text-[0.86rem] leading-6 text-stone">
            Cafés de especialidad, cultivados con dedicación en las montañas de Tingo María.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {coffeeVarieties.map((coffee, index) => (
            <ProductCard key={coffee.id} coffee={coffee} revealDelay={index * 100} />
          ))}
        </div>
      </div>
    </section>
  );
}
