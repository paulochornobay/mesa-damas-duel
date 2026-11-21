import { useState } from "react";
import { checkersEngine, createInitialBoard, type Board, type Color, type Square } from "../engine";
import { CheckersBoard } from "./CheckersBoard";
import { PlayerPanel } from "./PlayerPanel";
import type { GameConfig } from "./GameSetup";

const btn = "min-h-11 rounded-xl border border-border bg-card px-3 text-sm font-medium hover:bg-secondary disabled:cursor-not-allowed disabled:opacity-50";

export function CheckersGame({ config, onBack, onRules }: { config: GameConfig; onBack: () => void; onRules: () => void }) {
  const [board, setBoard] = useState<Board>(createInitialBoard);
  const [selected, setSelected] = useState<Square | null>(null);
  const [turn] = useState<Color>("light"); // será controlado pelo motor
  const engineReady = checkersEngine !== null;

  const handleSquare = (sq: Square) => {
    const piece = board[sq.row]?.[sq.col];
    // Sem motor: apenas seleção visual das peças do turno atual. Nenhuma jogada é executada.
    if (piece && piece.color === turn) {
      setSelected((s) => (s && s.row === sq.row && s.col === sq.col ? null : sq));
    } else setSelected(null);
  };

  const reset = () => { setBoard(createInitialBoard()); setSelected(null); };

  return (
    <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
      <div className="mx-auto w-full max-w-[min(100%,calc(100svh-14rem),40rem)] space-y-3 lg:max-w-[40rem]">
        <PlayerPanel name="Jogador 2" color="dark" active={turn === "dark"} time={config.time} />
        <CheckersBoard board={board} selected={selected} onSquareClick={handleSquare} />
        <PlayerPanel name="Jogador 1" color="light" active={turn === "light"} time={config.time} />
      </div>
      <aside className="space-y-3">
        {!engineReady && (
          <div role="status" className="rounded-xl bg-accent/20 p-3 text-sm">
            <strong>Em desenvolvimento:</strong> o motor de regras ainda não está ativo. Você pode selecionar peças, mas jogadas ainda não são executadas.
          </div>
        )}
        <div className="rounded-xl bg-card p-3 text-sm shadow-card">
          <p>Turno: <strong>Brancas</strong></p>
          <p className="text-muted-foreground">{config.mode === "local" ? "Duas pessoas, mesmo dispositivo" : "Contra computador"} · {config.time === 0 ? "Sem tempo" : `${config.time} min`}</p>
        </div>
        <div className="grid grid-cols-2 gap-2">
          <button className={btn} onClick={reset}>Nova partida</button>
          <button className={btn} disabled={!engineReady} title={engineReady ? undefined : "Disponível quando o motor for integrado"}>Desfazer</button>
          <button className={btn} onClick={onRules}>Regras</button>
          <button className={btn} onClick={onBack}>Voltar</button>
        </div>
      </aside>
    </div>
  );
}
