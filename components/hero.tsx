import Image from "next/image";
import { Coffee, Leaf, Mountain } from "lucide-react";
import { WhatsAppIcon } from "@/components/logo";
import { buildWhatsAppUrl } from "@/lib/cafe";
import heroImage from "@/public/images/products/hero.webp";
import { Eyebrow, buttonDark } from "@/components/ui";

const facts = [
  { icon: Mountain, title: "3,500 msnm", detail: "Altura de cultivo" },
  { icon: Leaf, title: "100% natural", detail: "Sin aditivos" },
  { icon: Coffee, title: "Tueste fresco", detail: "Sabor auténtico" },
];

export function Hero() {
  return (
    <section id="inicio" className="bg-[linear-gradient(180deg,var(--color-dawn)_0%,#f0e9df_100%)]">
      <div className="mx-auto grid w-full max-w-[1440px] lg:min-h-[660px] lg:grid-cols-[minmax(420px,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-14 sm:px-8 lg:px-14 lg:py-20">
          <Eyebrow>Café de origen peruano</Eyebrow>

          <h1 className="font-display mt-6 max-w-[9ch] text-[clamp(3.2rem,5.6vw,5.4rem)] leading-[0.98] font-normal tracking-[-0.04em]">
            Grandes momentos empiezan con buen café.
          </h1>

          <p className="mt-6 max-w-[46ch] text-pretty text-[0.92rem] leading-7 text-stone">
            CaféBle, cafés de altura cultivados en Tingo María. Granos que cuentan una historia de tierra, personas y un sabor extraordinario.
          </p>

          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noreferrer"
            className={`${buttonDark} mt-8 w-fit gap-3 px-6 hover:-translate-y-0.5`}
          >
            <WhatsAppIcon className="h-5 w-5" /> Pedir por WhatsApp
          </a>

          <ul className="mt-12 grid max-w-[560px] grid-cols-3 gap-4 sm:gap-6">
            {facts.map(({ icon: Icon, title, detail }) => (
              <li key={title} className="flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-3">
                <Icon className="h-6 w-6 shrink-0 stroke-[1.3]" aria-hidden="true" />
                <span>
                  <strong className="block text-[0.75rem] font-bold sm:text-[0.8rem]">{title}</strong>
                  <span className="mt-0.5 block text-[0.7rem] leading-4 text-stone sm:text-[0.75rem]">{detail}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <figure className="relative min-h-[350px] sm:min-h-[480px] lg:min-h-[660px]">
          <Image
            src={heroImage}
            alt="Bolsa de café CaféBle junto a una taza recién servida"
            fill
            preload
            placeholder="blur"
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover object-center [mask-image:linear-gradient(to_bottom,transparent_0%,black_16%)] lg:[mask-image:linear-gradient(to_right,transparent_0%,black_18%)]"
          />
          <figcaption className="absolute top-16 right-[8%] hidden text-right text-[0.66rem] leading-5 font-extrabold tracking-[0.24em] text-[#4a382d] uppercase after:mt-4 after:ml-auto after:block after:h-px after:w-16 after:bg-[#a08b7b] sm:block lg:right-[32%]">
            Más que café,
            <br />
            es origen.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
