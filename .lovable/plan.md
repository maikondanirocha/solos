

## Plano: Corrigir navegação e links

### Problemas identificados

1. **Páginas não rolam para o topo ao navegar** — React Router não faz scroll-to-top automaticamente. Ao navegar de uma página rolada, a próxima página abre na mesma posição de scroll.
2. **Links mortos (`#`)** no Footer — Instagram, LinkedIn, Facebook apontam para `#`.
3. **Rota inexistente** — Link "Política de Privacidade" no Footer aponta para `/politica-de-privacidade`, que não tem rota definida.

### Correções

| Arquivo | O que fazer |
|---------|------------|
| `src/components/ScrollToTop.tsx` | **Criar** componente que escuta mudanças de rota e faz `window.scrollTo(0, 0)` |
| `src/App.tsx` | Adicionar `<ScrollToTop />` dentro do `<BrowserRouter>` |
| `src/components/Footer.tsx` | Remover links de redes sociais mortos (ou substituir por placeholders visuais sem `href="#"`). Remover ou ajustar link de Política de Privacidade |

### Detalhes técnicos

**ScrollToTop** — componente padrão do React Router:
```tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};
```

Isso resolve o problema principal de navegação. Os links mortos serão limpos para evitar confusão.

