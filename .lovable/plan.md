## Objetivo

Remover todos os formulários de contato do site e substituí-los por um botão CTA que abre o WhatsApp (47 99178-3005) com uma mensagem pré-preenchida relacionada ao contexto da página.

## Páginas afetadas e mensagens

| Página | Mensagem pré-preenchida no WhatsApp |
|---|---|
| `Contato.tsx` | "Olá Solos! Gostaria de mais informações." |
| `EmpreendimentoDetail.tsx` | "Olá Solos! Tenho interesse no empreendimento {nome} e gostaria de mais informações." |
| `OferecaSuaArea.tsx` | "Olá Solos! Tenho uma área com potencial e gostaria de conversar sobre uma possível parceria." |
| `ParaCorretores.tsx` | "Olá Solos! Sou corretor(a) e tenho interesse em ser parceiro da Solos." |

## Implementação

1. **Criar componente reutilizável** `src/components/WhatsAppCTA.tsx`
   - Props: `message: string`, `label?: string` (padrão "Falar no WhatsApp"), variante de estilo opcional (claro/escuro).
   - Gera o link `https://wa.me/5547991783005?text=` + `encodeURIComponent(message)`.
   - Visual: botão grande verde WhatsApp (#25D366) com ícone `MessageCircle`, abre em nova aba.

2. **Atualizar `Contato.tsx`**
   - Remover `<ContactForm />` e o título "Envie sua mensagem".
   - Reorganizar layout: cartão central com canais de contato + bloco CTA grande do WhatsApp.

3. **Atualizar `EmpreendimentoDetail.tsx`**
   - Remover seção `#solicitar` com `<ContactForm />`.
   - Substituir por seção CTA com texto motivacional + botão WhatsApp passando o nome do empreendimento na mensagem.
   - Manter âncora `#solicitar` para o link "Solicitar informações" no header continuar funcionando.

4. **Atualizar `OferecaSuaArea.tsx`**
   - Remover `<ContactForm />` e campos extras (cidade, área, tamanho, arquivo).
   - Substituir por bloco CTA WhatsApp com a mensagem da tabela.

5. **Atualizar `ParaCorretores.tsx`**
   - Remover `<ContactForm />` e campos extras (cidade, CRECI).
   - Substituir por bloco CTA WhatsApp com a mensagem da tabela.

6. **Limpeza**
   - Remover o arquivo `src/components/ContactForm.tsx` (não terá mais usos).
   - Remover imports órfãos de `Input`, `Label`, `ContactForm` nas páginas.

## Detalhes técnicos

- Número WhatsApp: `5547991783005` (já usado em `WhatsAppButton.tsx`).
- URL pattern: `https://wa.me/5547991783005?text={encoded}`.
- `target="_blank"` e `rel="noopener noreferrer"` em todos os links.
- Manter botão flutuante `WhatsAppButton` global como está.
