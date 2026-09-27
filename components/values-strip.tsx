import { BadgeCheck, HandHeart, Leaf, Mountain } from "lucide-react";

const values = [
  { icon: Leaf, title: "Cultivo sostenible", detail: "Cuidamos la tierra" },
  { icon: HandHeart, title: "Apoyo a caficultores", detail: "Comunidades locales" },
  { icon: BadgeCheck, title: "Café de especialidad", detail: "85.33 puntos en 2025" },
  { icon: Mountain, title: "Origen peruano", detail: "Un sabor con historia" },
];

export function ValuesStrip() {
  return (
    <section className="border-y border-sand bg-linen px-5 py-12 sm:px-8 lg:px-14">
      <ul className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-y-10 lg:grid-cols-4">
        {values.map(({ icon: Icon, title, detail }, index) => (
          <li
            key={title}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="flex flex-col items-center gap-3 px-4 text-center lg:not-first:border-l lg:not-first:border-sand"
          >
            <Icon className="h-7 w-7 stroke-[1.2]" aria-hidden="true" />
            <span>
              <strong className="font-display block text-[1.05rem] leading-tight font-normal">{title}</strong>
              <span className="mt-1.5 block text-[0.8rem] text-stone">{detail}</span>
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
