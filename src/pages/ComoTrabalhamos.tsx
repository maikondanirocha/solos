import { Search, BarChart3, Compass, Target, Hammer, Handshake, Users } from "lucide-react";

const ComoTrabalhamos = () => {
  const etapas = [
    { icon: Search, title: "Leitura do terreno e da oportunidade", desc: "Avaliamos localização, vocação da área, contexto urbano e potencial de desenvolvimento imobiliário." },
    { icon: BarChart3, title: "Estudo de viabilidade", desc: "Análise financeira, técnica e mercadológica para garantir que o projeto faça sentido em todas as frentes." },
    { icon: Compass, title: "Planejamento técnico", desc: "Definição do produto, projeto arquitetônico, aprovações e engenharia de valor para maximizar resultado." },
    { icon: Target, title: "Definição do produto", desc: "Inteligência de planta, definição de tipologias, áreas comuns e diferenciais que geram valor real." },
    { icon: Hammer, title: "Construção eficiente", desc: "Execução com qualidade, racionalidade construtiva, cronograma rigoroso e acompanhamento próximo." },
    { icon: Handshake, title: "Inteligência comercial", desc: "Estratégia de preço, posicionamento, comunicação e relacionamento com clientes e parceiros." },
    { icon: Users, title: "Relacionamento próximo", desc: "Atendimento humanizado, transparência no processo e pós-venda com proximidade e seriedade." },
  ];

  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Como trabalhamos</h1>
          <p className="text-muted-foreground text-lg">
            A Solos acredita que bons empreendimentos nascem de decisões bem planejadas. Cada projeto deve unir inteligência de produto, viabilidade, execução eficiente e potencial de valorização.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <div className="space-y-6">
            {etapas.map((etapa, i) => (
              <div key={i} className="flex gap-6 p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <etapa.icon className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-1 rounded-full">
                      Etapa {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="font-heading text-xl">{etapa.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{etapa.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ComoTrabalhamos;
