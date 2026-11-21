export type GameMode = "local" | "cpu";
export type TimeControl = 0 | 5 | 10 | 15;
export interface GameConfig { mode: GameMode; time: TimeControl }

const option = (active: boolean) =>
  `min-h-11 rounded-xl border-2 px-4 py-3 text-left transition-colors ${active ? "border-primary bg-primary/10" : "border-border bg-card hover:border-primary/40"}`;

export function GameSetup({ config, onChange, onStart }: { config: GameConfig; onChange: (c: GameConfig) => void; onStart: () => void }) {
  return (
    <div className="space-y-6 rounded-2xl bg-card p-5 shadow-card">
      <fieldset className="space-y-2">
        <legend className="mb-2 font-semibold">Modo de jogo</legend>
        <button type="button" aria-pressed={config.mode === "local"} className={`${option(config.mode === "local")} w-full`} onClick={() => onChange({ ...config, mode: "local" })}>
          <span className="block font-medium">Duas pessoas no mesmo dispositivo</span>
          <span className="text-sm text-muted-foreground">Passe o aparelho a cada jogada.</span>
        </button>
        <button type="button" disabled className={`${option(false)} w-full cursor-not-allowed opacity-60`}>
          <span className="flex items-center justify-between font-medium">Contra computador <span className="rounded-full bg-secondary px-2 py-0.5 text-xs">Em desenvolvimento</span></span>
        </button>
      </fieldset>
      <fieldset>
        <legend className="mb-2 font-semibold">Tempo por jogador <span className="text-xs font-normal text-muted-foreground">(relógio em desenvolvimento)</span></legend>
        <div className="grid grid-cols-4 gap-2">
          {([0, 5, 10, 15] as const).map((t) => (
            <button key={t} type="button" aria-pressed={config.time === t} onClick={() => onChange({ ...config, time: t })} className={`${option(config.time === t)} text-center text-sm font-medium`}>
              {t === 0 ? "Sem tempo" : `${t} min`}
            </button>
          ))}
        </div>
      </fieldset>
      <button type="button" onClick={onStart} className="min-h-12 w-full rounded-xl bg-primary px-4 font-semibold text-primary-foreground shadow-card hover:bg-primary/90">
        Abrir tabuleiro
      </button>
    </div>
  );
}
