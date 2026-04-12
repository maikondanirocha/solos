import imgAlameda from "@/assets/emp-alameda-park.jpg";
import imgVilla from "@/assets/emp-villa-serena.jpg";
import imgPrime from "@/assets/emp-prime-central.jpg";
import imgMonte from "@/assets/emp-monte-verde.jpg";

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
    imagem: imgAlameda,
    galeria: [imgAlameda, imgVilla, imgMonte],
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
    imagem: imgVilla,
    galeria: [imgVilla, imgAlameda, imgPrime],
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
    imagem: imgPrime,
    galeria: [imgPrime, imgVilla],
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
    imagem: imgMonte,
    galeria: [imgMonte, imgAlameda],
    metragem: "55m² a 78m²",
    padrao: "Médio-alto",
    diferenciais: ["Pronto para morar", "Região nobre", "Acabamento premium", "Área de lazer", "Portaria 24h"],
    destaque: false,
  },
];

export const statusOptions: EmpreendimentoStatus[] = ["Lançamento", "Em obras", "Pronto", "Pronto para construir"];
export const cidadeOptions = [...new Set(empreendimentos.map(e => e.cidade))];
export const tipoOptions = [...new Set(empreendimentos.map(e => e.tipo))];
