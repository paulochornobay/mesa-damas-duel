export function RulesContent() {
  const items = [
    ["Tabuleiro", "8×8, com a casa a1 (canto inferior esquerdo) escura. Cada lado começa com 12 pedras nas casas escuras. As brancas (claras) começam."],
    ["Movimento", "A pedra anda uma casa na diagonal, sempre para frente."],
    ["Captura obrigatória", "Se houver captura disponível, ela deve ser feita."],
    ["Pedra captura para trás", "A pedra pode capturar tanto para frente quanto para trás."],
    ["Sequência de capturas", "Após capturar, se for possível continuar capturando com a mesma peça, a sequência continua no mesmo lance."],
    ["Lei da Maioria", "Entre várias capturas possíveis, é obrigatório escolher a que captura o maior número de peças."],
    ["Dama", "Ao chegar à última fileira, a pedra vira dama e passa a mover-se a qualquer distância na diagonal, para frente ou para trás, inclusive ao capturar."],
  ];
  return (
    <div className="space-y-3">
      <p className="text-sm text-muted-foreground">Resumo das Damas Brasileiras. As regras ainda não são aplicadas automaticamente no app — o motor está em desenvolvimento.</p>
      <dl className="space-y-3">
        {items.map(([t, d]) => (
          <div key={t} className="rounded-lg bg-muted p-3">
            <dt className="font-semibold">{t}</dt>
            <dd className="mt-1 text-sm text-muted-foreground">{d}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}
