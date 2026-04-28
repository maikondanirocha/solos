## Adicionar 2 novos empreendimentos: Residencial Jardim Flórida

Cadastrar duas casas (projetos de Lançamento) no catálogo, usando as imagens 3D enviadas.

### Dados aplicados aos dois imóveis
- **Nome:** Residencial Jardim Flórida (Casa 1 / Casa 2)
- **Status:** Lançamento
- **Tipo:** Casa
- **Localização:** Loteamento Flórida – Bairro Warnow
- **Cidade:** Indaial, SC
- **Slug:** `residencial-jardim-florida-1` e `residencial-jardim-florida-2`

### Mudanças técnicas

1. **Copiar imagens** para `src/assets/`:
   - `user-uploads://3d-2.jpeg` → `src/assets/emp-jardim-florida-1.jpg`
   - `user-uploads://3d-3.jpeg` → `src/assets/emp-jardim-florida-2.jpg`

2. **`src/data/empreendimentos.ts`** – adicionar 2 novos objetos no array `empreendimentos` (no topo, pois são lançamentos), com:
   - `imagem` e `galeria` apontando para as novas imagens
   - `resumo` e `descricao` em PT-BR descrevendo casas térreas modernas no Loteamento Flórida, em Warnow – Indaial/SC
   - `metragem`: a confirmar (sugestão de placeholder: "60m² a 75m²")
   - `padrao`: "Médio"
   - `diferenciais`: ["Casa térrea", "Arquitetura moderna", "Acabamento de qualidade", "Quintal com gramado", "Bairro Warnow – Indaial/SC", "Pronta entrega prevista"]
   - `destaque: true`

3. Como `cidadeOptions` e `tipoOptions` são derivados automaticamente do array, "Indaial" passará a aparecer no filtro de cidades sem alterações adicionais.

### Pontos a confirmar (posso seguir com placeholders se preferir)
- Metragem real das unidades
- Número de dormitórios / vagas
- Existência de previsão de entrega ou data de lançamento

Confirme o plano (ou informe os dados acima) para eu implementar.