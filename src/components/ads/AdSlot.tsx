/**
 * AdSlot — espaço reservado para anúncios futuros.
 * DESATIVADO por padrão. Em produção não renderiza nada.
 * Em desenvolvimento, só mostra placeholder se VITE_SHOW_AD_PLACEHOLDERS=true.
 * Nunca insira scripts de terceiros aqui sem revisão; nunca posicione perto do tabuleiro.
 */
export type AdPlacement = "home" | "result" | "sidebar-desktop";

export const ADS_ENABLED = false;

export function AdSlot({ placement, className = "" }: { placement: AdPlacement; className?: string }) {
  if (!ADS_ENABLED) {
    if (import.meta.env.PROD) return null;
    if (import.meta.env["VITE_SHOW_AD_PLACEHOLDERS"] !== "true") return null;
    return (
      <div
        aria-hidden
        data-ad-placement={placement}
        className={`rounded-lg border border-dashed border-border px-3 py-4 text-center text-xs text-muted-foreground ${className}`}
      >
        AdSlot · {placement} (placeholder dev)
      </div>
    );
  }
  return <div data-ad-placement={placement} className={className} />;
}
