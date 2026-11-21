import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { RulesContent } from "@/games/checkers/components/RulesContent";

export const Route = createFileRoute("/regras")({
  head: () => ({
    meta: [
      { title: "Regras das Damas Brasileiras — MesaPlay" },
      { name: "description", content: "Resumo das regras: captura obrigatória, Lei da Maioria, dama voadora e mais." },
      { property: "og:title", content: "Regras das Damas Brasileiras — MesaPlay" },
      { property: "og:description", content: "Resumo das regras: captura obrigatória, Lei da Maioria, dama voadora e mais." },
    ],
  }),
  component: () => (
    <div className="min-h-screen">
      <SiteHeader />
      <main className="mx-auto max-w-2xl px-4 pb-12">
        <h1 className="mb-4 text-3xl font-semibold">Regras das Damas Brasileiras</h1>
        <RulesContent />
        <Link to="/damas" className="mt-6 inline-flex min-h-11 items-center rounded-xl bg-primary px-4 font-semibold text-primary-foreground">Jogar Damas</Link>
      </main>
    </div>
  ),
});
