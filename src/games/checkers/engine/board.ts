import type { Board, Square } from "./types";

export const BOARD_SIZE = 8;
const FILES = "abcdefgh";

/** a1 (row 0, col 0) é escura: escura quando (row + col) é par. */
export const isDarkSquare = ({ row, col }: Square) => (row + col) % 2 === 0;
export const squareName = ({ row, col }: Square) => `${FILES[col]}${row + 1}`;

/** Posição inicial: 12 claras (fileiras 1–3), 12 escuras (6–8), centro vazio. */
export function createInitialBoard(): Board {
  return Array.from({ length: BOARD_SIZE }, (_, row) =>
    Array.from({ length: BOARD_SIZE }, (_, col) => {
      if (!isDarkSquare({ row, col })) return null;
      if (row <= 2) return { color: "light", kind: "man" } as const;
      if (row >= 5) return { color: "dark", kind: "man" } as const;
      return null;
    }),
  );
}
