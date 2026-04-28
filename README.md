# Solos Empreendimentos

Site institucional e comercial da **Solos Empreendimentos Imobiliários** — incorporadora familiar focada em projetos residenciais planejados para morar bem e investir com inteligência..

🌐 **Produção:** [solos.lovable.app](https://solos.lovable.app)

## Sobre o projeto

Site de página única em React com múltiplas rotas, voltado para:

- Apresentação institucional da empresa (história, propósito, forma de trabalho).
- Vitrine de empreendimentos com páginas de detalhe.
- Geração de leads (formulário de contato, WhatsApp, oferta de áreas, cadastro de corretores).

Não há blog, área do cliente, FAQ ou seção de notícias — o foco é institucional + comercial + captação.

## Stack

- **React 18** + **TypeScript** + **Vite 5**
- **React Router** v6 para navegação
- **Tailwind CSS** v3 com tokens semânticos definidos em `src/index.css` e `tailwind.config.ts`
- **shadcn/ui** (Radix + CVA) como base de componentes
- **React Hook Form** + **Zod** para formulários e validação
- **TanStack Query** para estado assíncrono
- **Lucide React** para ícones
- **Vitest** + **Testing Library** para testes

## Identidade visual

- **Tipografia:** Instrument Serif (títulos) + Work Sans (corpo)
- **Paleta:**
  - Gold `#CCA85B` · Dark Gold `#A48343`
  - Gray `#B3B4B1` · Light `#EFEFEF` · Dark `#1A1A1A`
- Tokens HSL definidos em `src/index.css` — **nunca** usar cores literais (`text-white`, `bg-black`) nos componentes.

## Estrutura

```
src/
├── assets/            Imagens e logotipos
├── components/        Componentes reutilizáveis (Header, Footer, Cards, Forms…)
│   └── ui/            Primitivos shadcn/ui
├── data/              Dados estáticos (empreendimentos)
├── hooks/             Hooks utilitários
├── lib/               Helpers (cn, utilitários)
├── pages/             Uma página por rota
└── test/              Setup e exemplos de testes
```

### Rotas principais

| Caminho | Página |
|---|---|
| `/` | Home |
| `/a-solos` | A Solos (institucional) |
| `/nossa-historia` | Nossa História |
| `/como-trabalhamos` | Como Trabalhamos |
| `/empreendimentos` | Lista de empreendimentos |
| `/empreendimentos/:slug` | Detalhe do empreendimento |
| `/para-parceiros/ofereca-sua-area` | Ofereça sua área |
| `/para-parceiros/para-corretores` | Para corretores |
| `/contato` | Contato |

## Desenvolvimento local

Pré-requisitos: **Node.js 18+** (ou Bun) e npm.

```bash
npm install         # instalar dependências
npm run dev         # servidor de desenvolvimento (http://localhost:8080)
npm run build       # build de produção → dist/
npm run build:dev   # build em modo desenvolvimento (não-minificado)
npm run preview     # preview local do build
npm run lint        # ESLint
npm run test        # rodar testes (Vitest)
npm run test:watch  # testes em modo watch
```

## Deploy

### Via Lovable (recomendado)

Clique em **Publish** no editor Lovable. O build e deploy são automáticos.
Site em produção: <https://solos.lovable.app>.

### Self-host

```bash
npm install
npm run build
# servir o conteúdo de ./dist em qualquer host estático
```

Lembre-se de configurar **fallback SPA** (todas as rotas desconhecidas servem `index.html`) — caso contrário, deep links do React Router retornarão 404 ao recarregar.

- Netlify: arquivo `_redirects` com `/* /index.html 200`
- Vercel: funciona por padrão
- Nginx: `try_files $uri /index.html;`

## Convenções

- **PT-BR** em toda a interface e conteúdo.
- Componentes pequenos e focados; refatorar páginas que crescem demais.
- Usar tokens semânticos do design system, nunca cores literais.
- Formulários com React Hook Form + validação Zod.
- Imagens com `loading="lazy"` quando fora do viewport inicial.

## Editar via Lovable

Acesse o [projeto no Lovable](https://lovable.dev) e descreva as alterações em linguagem natural — as mudanças são commitadas automaticamente neste repositório.
