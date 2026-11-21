import type { Piece } from "../engine";

export function CheckerPiece({ piece }: { piece: Piece }) {
  const light = piece.color === "light";
  const id = light ? "pl" : "pd";
  return (
    <svg viewBox="0 0 100 100" className="h-[82%] w-[82%] drop-shadow-[0_3px_2px_rgb(0_0_0/0.35)]" aria-hidden>
      <defs>
        <radialGradient id={id} cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor={light ? "var(--piece-light)" : "oklch(0.42 0.03 40)"} />
          <stop offset="100%" stopColor={light ? "oklch(0.84 0.03 80)" : "var(--piece-dark)"} />
        </radialGradient>
      </defs>
      <circle cx="50" cy="52" r="44" fill={light ? "oklch(0.72 0.03 75)" : "oklch(0.16 0.01 40)"} />
      <circle cx="50" cy="48" r="44" fill={`url(#${id})`} />
      <circle cx="50" cy="48" r="31" fill="none" strokeWidth="3" stroke={light ? "oklch(0.8 0.03 78)" : "oklch(0.36 0.02 40)"} />
      {piece.kind === "king" && (
        <path d="M32 58 L35 38 L44 48 L50 34 L56 48 L65 38 L68 58 Z" fill="var(--accent)" />
      )}
    </svg>
  );
}
