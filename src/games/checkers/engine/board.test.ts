import { describe, expect, it } from "vitest";
import { createInitialBoard, isDarkSquare } from "./board";

describe("posição inicial", () => {
  it("a1 é escura", () => expect(isDarkSquare({ row: 0, col: 0 })).toBe(true));
  it("12 peças de cada cor, só em casas escuras, centro vazio", () => {
    const b = createInitialBoard();
    let light = 0, dark = 0;
    b.forEach((r, row) => r.forEach((p, col) => {
      if (!p) return;
      expect(isDarkSquare({ row, col })).toBe(true);
      if (p.color === "light") light++; else dark++;
    }));
    expect([light, dark]).toEqual([12, 12]);
    expect(b[3]!.every((p) => p === null) && b[4]!.every((p) => p === null)).toBe(true);
  });
});
