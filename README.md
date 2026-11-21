# Mesa Damas Duel

Crie a BASE VISUAL e a ESTRUTURA INICIAL de um aplicativo web chamado MesaPlay (nome provisório), pensado para crescer em uma plataforma de jogos de tabuleiro. O único jogo ativo nesta primeira fase é Damas Brasileiras (8x8); xadrez e truco aparecerão como "Em breve", desativados. Quero um produto agradável e com personalidade, não um dashboard genérico. A direção visual se inspira na simplicidade dos jogos clássicos de tabuleiro do Windows, mas sem copiar imagens, marcas, sons ou código da Microsoft: tabuleiro elegante em madeira discreta, peças redondas com leve profundidade, tipografia limpa, excelente visual mobile.



TECNOLOGIA E PORTABILIDADE:

- Use a stack web TypeScript + React disponível neste projeto, Tailwind e componentes reutilizáveis. Use SVG/CSS para desenhar peças e tabuleiro; evite renderizadores 3D e bibliotecas pesadas.

- O código deve funcionar com npm em localhost e poder ser mantido no GitHub/VS Code/Codex. Não faça nada que dependa de hospedagem do Lovable para o funcionamento da V1.

- Não crie login, banco, Supabase, Lovable Cloud como dependência, APIs, WebSocket, multiplayer, pagamentos, anúncios reais, analytics nem IA generativa. Não instale backend.

TELAS E FUNCIONALIDADES DESTA PRIMEIRA CHAMADA:

1. Home responsiva com cabeçalho MesaPlay, frase curta "Jogue em segundos. Sem complicação.", cards Damas (ativo), Xadrez/Truco ("Em breve"), navegação funcional e link para regras.

2. Página /damas com setup elegante: "Duas pessoas no mesmo dispositivo" (ativo) e "Contra computador" (marcado em desenvolvimento nesta etapa); controle visual de tempo "Sem tempo / 5 / 10 / 15 min", visualmente preparado para implementação futura.

3. Tabuleiro 8x8 responsivo com 12 peças claras e 12 escuras nas casas escuras, a1 (canto inferior esquerdo) ESCURO, 2 linhas centrais vazias e brancas iniciando. Desenhe com componentes reutilizáveis; suporte toque e clique, seleção visual e realce de peças/casas. Junto ao tabuleiro: painéis para jogador, turno, relógio, botões Nova partida, Regras, Voltar e Desfazer (se não tiver lógica pronta, não fingir funcionalidade).

4. Modal de regras com descrição resumida das regras brasileiras: captura obrigatória, Lei da Maioria, pedra captura para trás, dama se move a distância e sequência de capturas. A implementação oficial das regras será feita depois no Codex. Não implementar regras parciais e apresentá-las como completas.

5. Crie componente AdSlot reutilizável com identificador de placement (home e resultado, lateral desktop futura). Deve ficar DESATIVADO por padrão e ocultar-se completamente em produção; no desenvolvimento pode mostrar placeholder discreto. Não inserir scripts Google, nem publicidade perto das peças ou botões, especialmente no celular.

6. Separe diretórios/componentes: src/games/checkers/components, src/games/checkers/engine (interfaces/stubs apenas), src/components/ads e páginas. Deixe ponto de integração explícito para um motor puro TypeScript criado pelo Codex, sem regras espalhadas em JSX.

7. Use estados verdadeiros de navegação/configuração/seleção, sem botões de faz-de-conta. Quando a funcionalidade ainda não existir, mostre "Em desenvolvimento" em vez de fingir partida real. A home, setup, navegação, modal e visual de seleção devem funcionar.

UX/A11Y:

- Mobile first (320px+), tabuleiro quadrado sem rolagem horizontal, toque-toque como interação principal, boa área de toque, foco visível, contraste, prefers-reduced-motion.

- No desktop permitir painel lateral; no celular painel acima/abaixo. Preservar área do tabuleiro e não sobrepor anúncios.

- Ter aparência polida e consistente, mas usar poucas dependências e poucos arquivos de imagem. Não requerer acesso à internet para desenhar peças.

PRIORIDADE NESTA CHAMADA: ENTREGAR SHELL, DESIGN E COMPONENTES, COM BUILD FUNCIONAL E CÓDIGO LIMPO. NÃO TENTE ENTREGAR CPU, REGRAS OFICIAIS COMPLETAS OU PARTIDAS ONLINE AGORA. O Codex continuará esses itens localmente. No final informe os arquivos criados e quaisquer dependências necessárias para npm install, npm run dev, npm run build.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0f854d16-e941-4b47-8da7-4d758364eeec).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
