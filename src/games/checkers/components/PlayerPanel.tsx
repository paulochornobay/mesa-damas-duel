import type { Color } from "../engine";

export function PlayerPanel({ name, color, active, time }: { name: string; color: Color; active: boolean; time: number }) {
  return (
    <div className={`flex items-center justify-between rounded-xl border-2 bg-card px-3 py-2 ${active ? "border-primary" : "border-transparent"}`}>
      <div className="flex items-center gap-2">
        <span aria-hidden className={`h-5 w-5 rounded-full border ${color === "light" ? "bg-piece-light" : "bg-piece-dark"}`} />
        <span className="font-medium">{name}</span>
        {active && <span className="rounded-full bg-primary/10 px-2 text-xs text-primary">Vez</span>}
      </div>
      <span className="font-mono text-sm tabular-nums text-muted-foreground" title="Relógio em desenvolvimento">
        {time === 0 ? "—:—" : `${String(time).padStart(2, "0")}:00`}
      </span>
    </div>
  );
}
