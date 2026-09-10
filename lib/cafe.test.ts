import assert from "node:assert/strict";
import test from "node:test";
import {
  buildWhatsAppUrl,
  coffeeVarieties,
  coffeeWeights,
  getCoffeePrice,
} from "./cafe.ts";

test("calcula todos los precios por variedad y peso", () => {
  const expected = {
    caturra: [15, 30, 60],
    catimor: [20, 40, 80],
    geisha: [20, 40, 80],
  } as const;

  for (const variety of coffeeVarieties) {
    const prices = coffeeWeights.map((weight) => getCoffeePrice(variety.id, weight.id));
    assert.deepEqual(prices, expected[variety.id]);
  }
});

test("un acceso general a WhatsApp no inventa una selección", () => {
  const message = new URL(buildWhatsAppUrl()).searchParams.get("text")!;

  assert.match(message, /conocer las opciones/);
  assert.doesNotMatch(message, /Caturra|250 g|Precio/);
});

test("un acceso de producto solo expresa interés en la variedad", () => {
  const message = new URL(buildWhatsAppUrl({ varietyId: "geisha" })).searchParams.get("text")!;

  assert.match(message, /café Geisha/);
  assert.match(message, /elegir la presentación/);
  assert.doesNotMatch(message, /250 g|Precio/);
});

test("una configuración completa genera el pedido exacto", () => {
  const message = new URL(
    buildWhatsAppUrl({ varietyId: "catimor", weightId: "1 kg", grind: "Molido" }),
  ).searchParams.get("text")!;

  assert.match(message, /café Catimor/);
  assert.match(message, /molido/);
  assert.match(message, /1 kg/);
  assert.match(message, /S\/ 80/);
});
