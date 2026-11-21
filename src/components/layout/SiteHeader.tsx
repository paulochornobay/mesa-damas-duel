import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-4 py-4">
      <Link to="/" className="flex items-center gap-2 rounded-md">
        <span aria-hidden className="grid h-8 w-8 grid-cols-2 overflow-hidden rounded-md shadow-card">
          <span className="bg-wood-dark" /><span className="bg-wood-light" />
          <span className="bg-wood-light" /><span className="bg-wood-dark" />
        </span>
        <span className="font-display text-xl font-semibold tracking-tight">MesaPlay</span>
      </Link>
      <nav className="flex gap-1 text-sm">
        <Link to="/damas" className="rounded-md px-3 py-2 hover:bg-secondary" activeProps={{ className: "bg-secondary font-semibold" }}>Damas</Link>
        <Link to="/regras" className="rounded-md px-3 py-2 hover:bg-secondary" activeProps={{ className: "bg-secondary font-semibold" }}>Regras</Link>
      </nav>
    </header>
  );
}
