import Image from "next/image";
import { Award } from "lucide-react";
import coffeeMoment from "@/public/images/coffee-moment.jpg";

export function Recognition() {
  return (
    <section id="reconocimiento" className="bg-linen px-5 py-20 sm:px-8 lg:px-14 lg:py-24">
      <div className="mx-auto grid w-full max-w-[1440px] overflow-hidden border border-sand bg-paper lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[300px] bg-clay lg:min-h-[420px]">
          <Image
            src={coffeeMoment}
            alt="Tazas de café compartidas sobre una mesa"
            fill
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-7 py-12 sm:px-12 lg:px-14" data-aos="fade-up">
          <p className="flex items-center gap-4 text-[0.62rem] font-extrabold tracking-[0.26em] text-[#7b6659] uppercase after:h-px after:w-14 after:bg-[#b7a496]">
            Reconocimiento
          </p>

          <h2 className="font-display mt-6 max-w-[12ch] text-[clamp(2.2rem,4vw,3.2rem)] leading-[1.03] font-normal tracking-[-0.035em]">
            Entre los 12 mejores en 2025.
          </h2>

          <p className="mt-6 max-w-[54ch] text-[0.86rem] leading-7 text-stone">
            El café que da origen a CaféBle obtuvo 85.33 puntos en el II Concurso de Cafés Especiales de Mariano Dámaso Beraún.
          </p>

          <div className="mt-9 flex items-center gap-5 border-t border-sand pt-7">
            <Award className="shrink-0 stroke-[1.2]" aria-hidden="true" size={34} />
            <span className="font-display text-[clamp(2.6rem,5vw,3.6rem)] leading-none font-normal tabular-nums">85.33</span>
            <span className="text-[0.68rem] leading-5 text-stone">
              Puntaje obtenido
              <br />
              en taza
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
