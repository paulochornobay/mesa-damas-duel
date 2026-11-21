import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { GameSetup, type GameConfig } from "@/games/checkers/components/GameSetup";
import { CheckersGame } from "@/games/checkers/components/CheckersGame";
import { RulesDialog } from "@/games/checkers/components/RulesDialog";

export const Route = createFileRoute("/damas")({
  head: () => ({
    meta: [
      { title: "Damas Brasileiras — MesaPlay" },
      { name: "description", content: "Monte sua partida de Damas Brasileiras 8×8 para duas pessoas no mesmo dispositivo." },
      { property: "og:title", content: "Damas Brasileiras — MesaPlay" },
      { property: "og:description", content: "Monte sua partida de Damas Brasileiras 8×8 para duas pessoas no mesmo dispositivo." },
    ],
  }),
  component: DamasPage,
});

function DamasPage() {
  const [config, setConfig] = useState<GameConfig>({ mode: "local", time: 0 });
  const [playing, setPlaying] = useState(false);
  const [rulesOpen, setRulesOpen] = useState(false);
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-3 pb-10 sm:px-4">
        {playing ? (
          <CheckersGame config={config} onBack={() => setPlaying(false)} onRules={() => setRulesOpen(true)} />
        ) : (
          <div className="mx-auto max-w-md">
            <h1 className="mb-1 text-3xl font-semibold">Damas</h1>
            <p className="mb-5 text-muted-foreground">Regras brasileiras · tabuleiro 8×8</p>
            <GameSetup config={config} onChange={setConfig} onStart={() => setPlaying(true)} />
            <button onClick={() => setRulesOpen(true)} className="mt-4 min-h-11 w-full rounded-xl text-sm underline underline-offset-4">Ver regras</button>
          </div>
        )}
      </main>
      <RulesDialog open={rulesOpen} onClose={() => setRulesOpen(false)} />
    </div>
  );
}
