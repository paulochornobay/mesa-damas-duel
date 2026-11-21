import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { AdSlot } from "@/components/ads/AdSlot";
import { CheckerPiece } from "@/games/checkers/components/CheckerPiece";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MesaPlay — Jogos de tabuleiro em segundos" },
      { name: "description", content: "Jogue Damas Brasileiras no navegador. Sem cadastro, sem complicação." },
      { property: "og:title", content: "MesaPlay — Jogos de tabuleiro em segundos" },
      { property: "og:description", content: "Jogue Damas Brasileiras no navegador. Sem cadastro, sem complicação." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-4 pb-12">
        <section className="py-8 text-center sm:py-14">
          <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">Jogue em segundos.<br /><span className="text-primary">Sem complicação.</span></h1>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">Clássicos de tabuleiro direto no navegador, no celular ou no computador.</p>
        </section>
        <section aria-label="Jogos" className="grid gap-4 sm:grid-cols-3">
          <Link to="/damas" className="group rounded-2xl bg-card p-5 shadow-card transition-transform hover:-translate-y-0.5">
            <div className="wood-frame mb-4 flex h-28 items-center justify-center gap-2 rounded-xl">
              <span className="h-14 w-14"><CheckerPiece piece={{ color: "light", kind: "man" }} /></span>
              <span className="h-14 w-14"><CheckerPiece piece={{ color: "dark", kind: "king" }} /></span>
            </div>
            <h2 className="text-xl font-semibold">Damas</h2>
            <p className="text-sm text-muted-foreground">Regras brasileiras · 8×8</p>
            <span className="mt-3 inline-block font-semibold text-primary">Jogar →</span>
          </Link>
          {["Xadrez", "Truco"].map((g) => (
            <div key={g} aria-disabled className="rounded-2xl border border-dashed border-border p-5 opacity-70">
              <div className="mb-4 h-28 rounded-xl bg-muted" />
              <h2 className="text-xl font-semibold">{g}</h2>
              <span className="mt-2 inline-block rounded-full bg-secondary px-2 py-0.5 text-xs">Em breve</span>
            </div>
          ))}
        </section>
        <p className="mt-8 text-center text-sm"><Link to="/regras" className="underline underline-offset-4">Ver regras das Damas Brasileiras</Link></p>
        <AdSlot placement="home" className="mt-10" />
      </main>
    </div>
  );
}
