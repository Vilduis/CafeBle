import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Eyebrow, buttonDark } from "@/components/ui";

export function OriginStory() {
  return (
    <section id="origen" className="bg-linen">
      <div className="mx-auto grid w-full max-w-[1440px] lg:min-h-[560px] lg:pr-14 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
        <div className="relative z-10 flex flex-col justify-center px-5 py-20 sm:px-8 lg:px-14" data-aos="fade-up">
          <Eyebrow>Nuestra tierra</Eyebrow>

          <h2 className="font-display mt-6 max-w-[17ch] text-[clamp(2.4rem,4.4vw,3.7rem)] leading-[1.02] font-normal tracking-[-0.035em]">
            Tingo María,{" "}
            <span className="lg:block">la cuna de nuestro café.</span>
          </h2>

          <p className="mt-6 max-w-[52ch] text-pretty text-[0.88rem] leading-7 text-stone">
            En las laderas de la cordillera Azul, a 3,500 msnm, se cultivan nuestros granos. Un territorio privilegiado donde la biodiversidad, el clima y la tradición se unen para dar vida a un café excepcional.
          </p>

          <a
            href="#reconocimiento"
            className={`${buttonDark} group/more mt-9 w-fit gap-4 px-6 hover:-translate-y-0.5`}
          >
            Conocer más
            <ArrowRight className="transition-transform group-hover/more:translate-x-1" aria-hidden="true" size={16} />
          </a>
        </div>

        <figure className="relative aspect-[3/2] bg-clay lg:overflow-hidden lg:rounded-lg sm:aspect-[16/9] lg:aspect-auto lg:min-h-[560px]">
          <Image
            src="/images/products/farm.webp"
            alt="Montañas y cultivos de café en Tingo María"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-cover"
          />
          <figcaption className="absolute top-10 right-8 text-right text-[0.66rem] leading-5 font-extrabold tracking-[0.24em] text-white uppercase [text-shadow:0_1px_12px_rgb(18_26_14/60%)] sm:right-12">
            Tingo María
            <br />
            Perú
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
