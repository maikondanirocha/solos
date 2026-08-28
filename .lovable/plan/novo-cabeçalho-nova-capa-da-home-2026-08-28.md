# Novo cabeçalho + nova capa da Home

Mantém todos os links, rotas e conteúdos atuais. Muda apenas apresentação.

## Cabeçalho novo

- Barra superior fina (topbar) em verde profundo com telefone/WhatsApp (47) 99178-3005, e-mail e cidade Indaial/SC à direita, e Instagram à esquerda. Some ao rolar.
- Barra principal transparente sobre o hero na Home (logo e menu em branco) e sólida clara ao rolar, com sombra suave e altura reduzida — transição animada.
- Menu centralizado, com espaçamento maior e sublinhado dourado animado no item ativo/hover; dropdowns com abertura suave e borda superior dourada.
- Botão "Fale conosco" com contorno dourado (outline) que preenche no hover, no lugar do botão sólido.
- Mobile: menu em painel deslizante de tela cheia em fundo escuro, itens em serifa grande, acordeões para submenus e CTA WhatsApp fixo no rodapé do painel.

## Nova imagem de capa

- Gerar `src/assets/hero-solos-capa.jpg` (1920x1080): casa térrea contemporânea no fim de tarde, fachada clara com madeira e ripados, iluminação quente interna, jardim e céu suave — coerente com os renders do Jardim Flórida.
- Hero passa a usar essa imagem com overlay em degradê verde profundo (esquerda densa → transparente à direita), garantindo contraste do texto branco e do cabeçalho transparente.
- A imagem anterior permanece no projeto e pode ser reativada se preferir.

## Detalhes técnicos

- Editar apenas `src/components/Header.tsx` (estado de scroll com listener, classes condicionais) e a seção hero de `src/pages/Index.tsx`.
- Cores via tokens semânticos existentes (`primary`, `solos-dark`, `background`), sem valores hardcoded.
- Compensar o header transparente: `Layout.tsx` pode perder o `pt-20` fixo na Home, mantendo-o nas demais páginas.
