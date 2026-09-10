import type { Metadata } from "next";
import { Libre_Caslon_Display, Manrope } from "next/font/google";
import "./globals.css";
import { ScrollReveal } from "@/components/scroll-reveal";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const libreCaslonDisplay = Libre_Caslon_Display({
  variable: "--font-libre-caslon-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "CafeBle | Café natural de Tingo María",
  description:
    "Café Caturra, Catimor y Geisha de Tingo María, disponible en grano o molido. Pide tu presentación directamente por WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${manrope.variable} ${libreCaslonDisplay.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ScrollReveal />
      </body>
    </html>
  );
}
