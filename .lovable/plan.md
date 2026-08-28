# Nova proposta de layout — Solos

Mesma estrutura de páginas, mesmas rotas e mesmos conteúdos. Muda apenas a linguagem visual: paleta, composição e ritmo das seções.

## Direção visual escolhida

- Paleta: dourado #CCA85B sobre verde profundo #1F3A32, fundo escuro #0F1714 e claro #EFEFEF.
- Tipografia: Instrument Serif (títulos) + Work Sans (texto) — mantida.
- Estrutura: seções largas full-bleed, empilhadas, com alternância entre faixas claras e faixas verde-escuras.

## O que muda em cada página

**Home**
- Hero full-bleed com imagem em altura total, overlay verde profundo, título serifado grande alinhado à esquerda e uma linha dourada fina como assinatura.
- Destaques em faixa clara, cards mais limpos (sem sombra pesada, borda fina e hover dourado).
- "Por que a Solos" em faixa verde escura, ícones dourados em linha, sem caixas.
- Bloco institucional com imagem sangrando até a borda da tela.
- "Como trabalhamos" como lista numerada em faixa clara, numeração serifada grande em dourado.
- Parceiros e contato em faixa final escura com CTA WhatsApp em destaque.

**Demais páginas** (A Solos, Nossa História, Como Trabalhamos, Empreendimentos, Detalhe, Ofereça sua Área, Para Corretores, Contato)
- Cabeçalho de página em faixa verde profunda com título serifado e subtítulo, substituindo o atual bloco cinza.
- Alternância clara/escura entre seções, mesma grade e mesmos textos.
- Cards de empreendimento e galeria mantêm o comportamento atual de imagem (zoom da listagem preservado, galeria em object-contain).

**Header / Footer**
- Header transparente sobre o hero e sólido ao rolar; logo no tamanho atual.
- Footer em verde profundo com divisórias douradas finas.

## Detalhes técnicos

- Atualizar tokens HSL em `src/index.css` (background, foreground, primary, secondary, muted, card, border) e cores nomeadas em `tailwind.config.ts` (`solos-dark` passa a verde profundo, adicionar `solos-green`/`solos-cream`).
- Reescrever apenas o markup de apresentação das páginas em `src/pages/*` e dos componentes `Header`, `Footer`, `EmpreendimentoCard`, `WhatsAppCTA`.
- Nenhuma alteração em `src/data/empreendimentos.ts`, rotas, imagens ou lógica.
- Sem cores hardcoded: tudo via tokens semânticos.
