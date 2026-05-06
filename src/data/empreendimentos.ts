import imgFlorida1 from "@/assets/emp-jardim-florida-1.jpg";
import imgFlorida2 from "@/assets/emp-jardim-florida-2.jpg";
import imgFloridaConjunto from "@/assets/emp-jardim-florida-conjunto.jpg";
import imgFloridaFrontal from "@/assets/emp-jardim-florida-frontal.jpg";
import imgFlorida1Lateral from "@/assets/emp-jardim-florida-1-lateral.jpg";
import imgFlorida2Lateral from "@/assets/emp-jardim-florida-2-lateral.jpg";
import imgFlorida1Fundos from "@/assets/emp-jardim-florida-1-fundos.jpg";
import imgFlorida2Fundos from "@/assets/emp-jardim-florida-2-fundos.jpg";

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
  diferenciais: string[];
  destaque: boolean;
}

const descricaoComum =
  "Casa térrea de arquitetura contemporânea com 54,98 m² de área construída, distribuídos em sala, copa/cozinha, área de serviço, suíte, dormitório, dois banheiros (banheiro da suíte e outro banheiro social), circulação e uma vaga de veículo descoberta. Projeto assinado pela arquiteta Simone Warmeling (CAU A168891-0), localizado no Loteamento Flórida, bairro Warnow em Indaial/SC — região em pleno desenvolvimento, ideal para morar bem ou investir com segurança.";

const diferenciaisComum = [
  "Área construída de 54,98 m²",
  "1 suíte + 1 dormitório",
  "2 banheiros (banheiro da suíte e outro banheiro social)",
  "Sala, copa/cozinha e área de serviço",
  "1 vaga de veículo descoberta",
  "Projeto da arquiteta Simone Warmeling",
  "Loteamento Flórida — Warnow, Indaial/SC",
];

export const empreendimentos: Empreendimento[] = [
  {
    slug: "residencial-jardim-florida-casa-1",
    nome: "Residencial Jardim Flórida — Casa 1",
    localizacao: "Loteamento Flórida, Bairro Warnow",
    cidade: "Indaial",
    status: "Lançamento",
    tipo: "Casa",
    resumo: "Casa térrea contemporânea de 54,98 m² no Loteamento Flórida, em Warnow.",
    descricao: descricaoComum,
    imagem: imgFlorida1,
    galeria: [imgFlorida1, imgFloridaConjunto, imgFloridaFrontal, imgFlorida1Lateral, imgFlorida1Fundos],
    metragem: "54,98 m²",
    diferenciais: diferenciaisComum,
    destaque: true,
  },
  {
    slug: "residencial-jardim-florida-casa-2",
    nome: "Residencial Jardim Flórida — Casa 2",
    localizacao: "Loteamento Flórida, Bairro Warnow",
    cidade: "Indaial",
    status: "Lançamento",
    tipo: "Casa",
    resumo: "Casa térrea contemporânea de 54,98 m² no Loteamento Flórida, em Warnow.",
    descricao: descricaoComum,
    imagem: imgFlorida2,
    galeria: [imgFlorida2, imgFloridaConjunto, imgFloridaFrontal, imgFlorida2Lateral, imgFlorida2Fundos],
    metragem: "54,98 m²",
    diferenciais: diferenciaisComum,
    destaque: true,
  },
];

export const statusOptions: EmpreendimentoStatus[] = ["Lançamento", "Em obras", "Pronto", "Pronto para construir"];
export const cidadeOptions = [...new Set(empreendimentos.map(e => e.cidade))];
export const tipoOptions = [...new Set(empreendimentos.map(e => e.tipo))];
