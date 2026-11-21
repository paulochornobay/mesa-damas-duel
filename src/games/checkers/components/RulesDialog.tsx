import { useEffect, useRef } from "react";
import { RulesContent } from "./RulesContent";

export function RulesDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    if (open && !d.open) d.showModal();
    if (!open && d.open) d.close();
  }, [open]);
  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(e) => e.target === ref.current && onClose()}
      aria-labelledby="rules-title"
      className="m-auto w-[min(92vw,34rem)] rounded-2xl bg-card p-0 text-card-foreground shadow-board backdrop:bg-foreground/50"
    >
      <div className="max-h-[85vh] overflow-y-auto p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 id="rules-title" className="text-2xl font-semibold">Regras</h2>
          <button onClick={onClose} className="min-h-11 rounded-md px-3 hover:bg-secondary" aria-label="Fechar regras">Fechar</button>
        </div>
        <RulesContent />
      </div>
    </dialog>
  );
}
