// Tipos puros do domínio de Damas Brasileiras. Sem React aqui.
export type Color = "light" | "dark";
export type PieceKind = "man" | "king";
export interface Piece { color: Color; kind: PieceKind }
/** row 0 = fileira 1 (embaixo), col 0 = coluna "a". a1 = {row:0,col:0} é casa escura. */
export interface Square { row: number; col: number }
export type Board = (Piece | null)[][]; // board[row][col]

export interface GameState {
  board: Board;
  turn: Color;
  /** Histórico para desfazer — preenchido pelo motor. */
  history: GameState[];
}

export interface Move {
  from: Square;
  /** Caminho completo (inclui capturas em sequência). */
  path: Square[];
  captured: Square[];
}

export type GameResult = { status: "ongoing" } | { status: "win"; winner: Color } | { status: "draw"; reason: string };

/**
 * Contrato do motor de regras. A implementação oficial (captura obrigatória,
 * Lei da Maioria, dama voadora, promoção etc.) será escrita em TypeScript puro.
 */
export interface CheckersEngine {
  createInitialState(): GameState;
  getLegalMoves(state: GameState): Move[];
  applyMove(state: GameState, move: Move): GameState;
  undo(state: GameState): GameState;
  getResult(state: GameState): GameResult;
}
