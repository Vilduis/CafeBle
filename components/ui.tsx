import type { ReactNode } from "react";

const buttonBase =
  "inline-flex min-h-12 items-center rounded-[10px] text-[0.7rem] font-extrabold tracking-[0.12em] uppercase transition";

export const buttonDark = `${buttonBase} bg-espresso text-white hover:bg-roast`;
export const buttonLight = `${buttonBase} bg-white text-espresso hover:bg-[#efe5dc]`;

const eyebrowTones = {
  dark: "text-[#7b6659] after:bg-[#b7a496]",
  light: "text-[#e4d5ca] after:bg-[#bda89b]",
};

export function Eyebrow({ children, tone = "dark" }: { children: ReactNode; tone?: keyof typeof eyebrowTones }) {
  return (
    <p
      className={`flex items-center gap-4 text-[0.7rem] font-extrabold tracking-[0.26em] uppercase after:h-px after:w-14 ${eyebrowTones[tone]}`}
    >
      {children}
    </p>
  );
}
