export type EmpreendimentoStatus = "Lançamento" | "Em obras" | "Pronto" | "Pronto para construir";

export interface Empreendimento {
  slug: string;
  nome: string;
  localizacao: string;
  cidade: string;
  status: EmpreendimentoStatus;
  tipo: string;
  resumo: string;
  descricao: string;
  imagem: string;
  galeria: string[];
  metragem: string;
  padrao: string;
  diferenciais: string[];
  destaque: boolean;
}

export const empreendimentos: Empreendimento[] = [
  {
    slug: "residencial-alameda-park",
    nome: "Residencial Alameda Park",
    localizacao: "Setor Jardim Europa",
    cidade: "Goiânia",
    status: "Lançamento",
    tipo: "Apartamento",
    resumo: "Apartamentos compactos com design inteligente e alto potencial de valorização.",
    descricao: "O Residencial Alameda Park foi projetado para oferecer o máximo de funcionalidade em cada metro quadrado. Com plantas otimizadas, áreas comuns pensadas para o dia a dia e localização estratégica, é a escolha ideal para quem busca moradia moderna ou investimento seguro.",
    imagem: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1200&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=1200&q=80",
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=1200&q=80",
    ],
    metragem: "38m² a 62m²",
    padrao: "Médio-alto",
    diferenciais: ["Planta otimizada", "Área de lazer completa", "Vaga de garagem", "Próximo ao metrô", "Alto potencial de valorização"],
    destaque: true,
  },
  {
    slug: "villa-serena",
    nome: "Villa Serena",
    localizacao: "Região Sul",
    cidade: "Aparecida de Goiânia",
    status: "Em obras",
    tipo: "Casa",
    resumo: "Casas em condomínio fechado com arquitetura moderna e áreas verdes planejadas.",
    descricao: "O Villa Serena é um condomínio de casas que une segurança, conforto e contato com a natureza. Com projeto arquitetônico contemporâneo, cada unidade foi pensada para oferecer privacidade, funcionalidade e valorização contínua.",
    imagem: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80",
    ],
    metragem: "120m² a 180m²",
    padrao: "Alto",
    diferenciais: ["Condomínio fechado", "Áreas verdes", "Arquitetura moderna", "Infraestrutura completa", "Segurança 24h"],
    destaque: true,
  },
  {
    slug: "terreno-prime-central",
    nome: "Loteamento Prime Central",
    localizacao: "Centro Expandido",
    cidade: "Anápolis",
    status: "Pronto para construir",
    tipo: "Lote",
    resumo: "Lotes urbanizados em localização privilegiada, prontos para construção imediata.",
    descricao: "O Loteamento Prime Central oferece lotes com infraestrutura completa em uma das regiões que mais cresce na cidade. Ideal para quem deseja construir com liberdade e investir em uma área de alta valorização.",
    imagem: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
      "https://images.unsplash.com/photo-1448630360428-65456659e5fc?w=1200&q=80",
    ],
    metragem: "200m² a 450m²",
    padrao: "Médio",
    diferenciais: ["Infraestrutura pronta", "Localização central", "Documentação regularizada", "Alta valorização", "Pronto para construir"],
    destaque: true,
  },
  {
    slug: "residencial-monte-verde",
    nome: "Residencial Monte Verde",
    localizacao: "Setor Bueno",
    cidade: "Goiânia",
    status: "Pronto",
    tipo: "Apartamento",
    resumo: "Empreendimento entregue com unidades prontas para morar, em região consolidada.",
    descricao: "O Residencial Monte Verde já foi entregue e conta com unidades disponíveis para ocupação imediata. Localizado em região nobre, oferece infraestrutura completa, acabamento de qualidade e excelente custo-benefício.",
    imagem: "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=800&q=80",
    galeria: [
      "https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=1200&q=80",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=1200&q=80",
    ],
    metragem: "55m² a 78m²",
    padrao: "Médio-alto",
    diferenciais: ["Pronto para morar", "Região nobre", "Acabamento premium", "Área de lazer", "Portaria 24h"],
    destaque: false,
  },
];

export const statusOptions: EmpreendimentoStatus[] = ["Lançamento", "Em obras", "Pronto", "Pronto para construir"];
export const cidadeOptions = [...new Set(empreendimentos.map(e => e.cidade))];
export const tipoOptions = [...new Set(empreendimentos.map(e => e.tipo))];
