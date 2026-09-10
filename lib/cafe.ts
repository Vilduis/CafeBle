export const WHATSAPP_NUMBER = "51985462157";

export const coffeeVarieties = [
  {
    id: "caturra",
    name: "Caturra",
    notes: "Café equilibrado, notas a chocolate y caramelo.",
    basePrice: 15,
    image: "/images/products/caturra.webp",
    imageAlt: "Bolsa de café CaféBle variedad Caturra",
  },
  {
    id: "catimor",
    name: "Catimor",
    notes: "Cuerpo intenso, notas a nuez y cacao.",
    basePrice: 20,
    image: "/images/products/catimor.webp",
    imageAlt: "Bolsa de café CaféBle variedad Catimor",
  },
  {
    id: "geisha",
    name: "Geisha",
    notes: "Perfil floral y frutal, una experiencia única.",
    basePrice: 20,
    image: "/images/products/geisha.webp",
    imageAlt: "Bolsa de café CaféBle variedad Geisha",
  },
] as const;

export const coffeeWeights = [
  { id: "250 g", multiplier: 1 },
  { id: "500 g", multiplier: 2 },
  { id: "1 kg", multiplier: 4 },
] as const;

export const coffeeGrinds = ["En grano", "Molido"] as const;

export type CoffeeVarietyId = (typeof coffeeVarieties)[number]["id"];
export type CoffeeWeightId = (typeof coffeeWeights)[number]["id"];
export type CoffeeGrind = (typeof coffeeGrinds)[number];

export function getCoffeePrice(varietyId: CoffeeVarietyId, weightId: CoffeeWeightId) {
  const variety = coffeeVarieties.find((item) => item.id === varietyId)!;
  const weight = coffeeWeights.find((item) => item.id === weightId)!;

  return variety.basePrice * weight.multiplier;
}

export function buildWhatsAppUrl({
  varietyId,
  weightId,
  grind,
}: {
  varietyId?: CoffeeVarietyId;
  weightId?: CoffeeWeightId;
  grind?: CoffeeGrind;
} = {}) {
  const variety = varietyId ? coffeeVarieties.find((item) => item.id === varietyId)! : undefined;
  let message = "Hola, CaféBle. Quiero conocer las opciones disponibles para hacer un pedido.";

  if (varietyId && variety && weightId && grind) {
    const price = getCoffeePrice(varietyId, weightId);
    message = `Hola, CaféBle. Quiero pedir café ${variety.name}, ${grind.toLowerCase()}, presentación de ${weightId}. Precio: S/ ${price}.`;
  } else if (variety) {
    message = `Hola, CaféBle. Me interesa el café ${variety.name}. Quiero elegir la presentación y preparación antes de pedir.`;
  }

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
