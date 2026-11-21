import { BOARD_SIZE, isDarkSquare, squareName, type Board, type Square } from "../engine";
import { CheckerPiece } from "./CheckerPiece";

interface Props {
  board: Board;
  selected: Square | null;
  /** Casas de destino realçadas (vindas do motor). */
  highlights?: Square[];
  onSquareClick: (sq: Square) => void;
}

const same = (a: Square | null, b: Square) => !!a && a.row === b.row && a.col === b.col;

export function CheckersBoard({ board, selected, highlights = [], onSquareClick }: Props) {
  const rows = Array.from({ length: BOARD_SIZE }, (_, i) => BOARD_SIZE - 1 - i); // 8 no topo
  return (
    <div className="wood-frame aspect-square w-full rounded-xl p-[3%] shadow-board">
      <div role="grid" aria-label="Tabuleiro de damas" className="grid h-full w-full grid-cols-8 grid-rows-8 overflow-hidden rounded-md">
        {rows.map((row) =>
          Array.from({ length: BOARD_SIZE }, (_, col) => {
            const sq = { row, col };
            const dark = isDarkSquare(sq);
            const piece = board[row]?.[col] ?? null;
            const isSel = same(selected, sq);
            const isHi = highlights.some((h) => same(h, sq));
            return (
              <button
                key={`${row}-${col}`}
                role="gridcell"
                type="button"
                disabled={!dark}
                aria-label={`${squareName(sq)}${piece ? `, peça ${piece.color === "light" ? "clara" : "escura"}` : ""}`}
                aria-selected={isSel}
                onClick={() => onSquareClick(sq)}
                className={`relative flex items-center justify-center focus-visible:z-10 focus-visible:outline-offset-[-3px] ${dark ? "bg-wood-dark" : "bg-wood-light"}`}
              >
                {isSel && <span className="absolute inset-0 animate-pulse-ring ring-4 ring-inset ring-highlight" />}
                {isHi && <span className="absolute h-1/3 w-1/3 rounded-full bg-highlight/80" />}
                {piece && <CheckerPiece piece={piece} />}
                {col === 0 && <span className="pointer-events-none absolute left-0.5 top-0 text-[9px] font-semibold text-wood-light/80">{row + 1}</span>}
                {row === 0 && <span className="pointer-events-none absolute bottom-0 right-1 text-[9px] font-semibold text-wood-light/80">{"abcdefgh"[col]}</span>}
              </button>
            );
          }),
        )}
      </div>
    </div>
  );
}
