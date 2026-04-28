import imgMonte from "@/assets/emp-monte-verde.jpg";
import imgFlorida1 from "@/assets/emp-jardim-florida-1.jpg";
import imgFlorida2 from "@/assets/emp-jardim-florida-2.jpg";

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
    slug: "residencial-jardim-florida-casa-1",
    nome: "Residencial Jardim Flórida — Casa 1",
    localizacao: "Loteamento Flórida, Bairro Warnow",
    cidade: "Indaial",
    status: "Lançamento",
    tipo: "Casa",
    resumo: "Casa térrea de arquitetura contemporânea no Loteamento Flórida, em Warnow.",
    descricao: "O Residencial Jardim Flórida traz casas térreas com design moderno, fachada em volumes recortados e acabamento refinado. Localizada no Loteamento Flórida, bairro Warnow em Indaial/SC, a Casa 1 oferece amplos vidros, entrada destacada em madeira e quintal com gramado, unindo conforto, privacidade e excelente potencial de valorização.",
    imagem: imgFlorida1,
    galeria: [imgFlorida1, imgFlorida2],
    metragem: "A confirmar",
    padrao: "Médio",
    diferenciais: [
      "Casa térrea",
      "Arquitetura contemporânea",
      "Acabamento de qualidade",
      "Quintal com gramado",
      "Loteamento Flórida — Warnow, Indaial/SC",
      "Projeto de lançamento",
    ],
    destaque: true,
  },
  {
    slug: "residencial-jardim-florida-casa-2",
    nome: "Residencial Jardim Flórida — Casa 2",
    localizacao: "Loteamento Flórida, Bairro Warnow",
    cidade: "Indaial",
    status: "Lançamento",
    tipo: "Casa",
    resumo: "Casa térrea com fachada moderna e entrada em madeira no Loteamento Flórida, Warnow.",
    descricao: "Segunda unidade do Residencial Jardim Flórida, esta casa térrea apresenta volumes arquitetônicos marcantes, porta de entrada em madeira natural e jardim frontal com paisagismo. Situada no Loteamento Flórida, bairro Warnow em Indaial/SC, é ideal para quem busca uma moradia moderna, funcional e em região em pleno desenvolvimento.",
    imagem: imgFlorida2,
    galeria: [imgFlorida2, imgFlorida1],
    metragem: "A confirmar",
    padrao: "Médio",
    diferenciais: [
      "Casa térrea",
      "Fachada moderna",
      "Porta de entrada em madeira",
      "Paisagismo frontal",
      "Loteamento Flórida — Warnow, Indaial/SC",
      "Projeto de lançamento",
    ],
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
    galeria: [imgMonte],
    metragem: "55m² a 78m²",
    padrao: "Médio-alto",
    diferenciais: ["Pronto para morar", "Região nobre", "Acabamento premium", "Área de lazer", "Portaria 24h"],
    destaque: false,
  },
];

export const statusOptions: EmpreendimentoStatus[] = ["Lançamento", "Em obras", "Pronto", "Pronto para construir"];
export const cidadeOptions = [...new Set(empreendimentos.map(e => e.cidade))];
export const tipoOptions = [...new Set(empreendimentos.map(e => e.tipo))];
