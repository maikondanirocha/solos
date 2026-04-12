

## Plano: Site Completo — Solos Empreendimentos Imobiliários

O projeto está em estado inicial (página placeholder). Vou construir o site completo conforme o briefing aprovado, agora com a logomarca oficial.

### Logo
- Copiar `user-uploads://Logo_clara.png` para `src/assets/logo-solos.png`
- Usar no Header, Footer e páginas institucionais

### Paleta e Tipografia
- Dourado principal `#CCA85B`, Dourado escuro `#A48343`
- Cinza grafite `#B3B4B1`, Cinza claro `#EFEFEF`
- Base escura `#1A1A1A`, Branco `#FFFFFF`
- Headings: Instrument Serif | Body: Work Sans (via Google Fonts)

### Arquivos a criar/editar (~20 arquivos)

**Configuração:**
- `index.html` — Google Fonts, título e meta tags Solos
- `src/index.css` — Variáveis CSS da marca
- `tailwind.config.ts` — Cores customizadas

**Dados:**
- `src/data/empreendimentos.ts` — Dados mock de empreendimentos

**Componentes compartilhados:**
- `src/components/Layout.tsx` — Wrapper com Header + Footer + WhatsApp
- `src/components/Header.tsx` — Menu com dropdowns (A Solos, Para parceiros)
- `src/components/Footer.tsx` — Rodapé completo com logo, links, CNPJ
- `src/components/WhatsAppButton.tsx` — Botão flutuante
- `src/components/ContactForm.tsx` — Formulário reutilizável com LGPD
- `src/components/EmpreendimentoCard.tsx` — Card de empreendimento

**Páginas (9):**
- `src/pages/Index.tsx` — Home com 8 seções (hero, empreendimentos destaque, diferenciais, institucional, processo, parceiros, contato rápido, rodapé)
- `src/pages/Empreendimentos.tsx` — Vitrine com filtros (status, cidade, tipo)
- `src/pages/EmpreendimentoDetail.tsx` — Página individual modelo
- `src/pages/ASolos.tsx` — Institucional
- `src/pages/NossaHistoria.tsx` — Storytelling
- `src/pages/ComoTrabalhamos.tsx` — Processo em etapas
- `src/pages/OferecaSuaArea.tsx` — Captação de terrenos com upload
- `src/pages/ParaCorretores.tsx` — Parceria corretores
- `src/pages/Contato.tsx` — Contato com formulário

**Rotas (`src/App.tsx`):**
`/`, `/empreendimentos`, `/empreendimentos/:slug`, `/a-solos`, `/nossa-historia`, `/como-trabalhamos`, `/para-parceiros/ofereca-sua-area`, `/para-parceiros/para-corretores`, `/contato`

### Design
- Fundo claro predominante com seções alternadas em `#1A1A1A`
- Dourado nos CTAs, ícones e detalhes de destaque
- Instrument Serif nos títulos, Work Sans no corpo
- Espaçamento generoso, cards com sombras sutis
- Mobile-first, responsivo, LGPD em todos os formulários
- Imagens placeholder via Unsplash (arquitetura moderna)
- Botão flutuante WhatsApp em todas as páginas

