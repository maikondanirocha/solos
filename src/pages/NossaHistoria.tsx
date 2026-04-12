const NossaHistoria = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Nossa história</h1>
          <p className="text-muted-foreground text-lg">Uma trajetória construída com propósito, visão e dedicação.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <div className="space-y-8">
            <div className="relative pl-8 border-l-2 border-primary/30 space-y-8">
              <div className="relative">
                <div className="absolute -left-[calc(0.5rem+1px)] top-1 w-4 h-4 rounded-full bg-primary" />
                <h2 className="font-heading text-2xl mb-3">O sonho</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  A Solos nasce de um sonho cultivado por mais de 10 anos. Ao longo desse tempo, a ideia de contribuir com o planejamento das cidades e ajudar famílias a realizarem o sonho da casa própria esteve presente em longas conversas, estudos e construção de visão.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[calc(0.5rem+1px)] top-1 w-4 h-4 rounded-full bg-primary" />
                <h2 className="font-heading text-2xl mb-3">O propósito</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  Mais do que lançar empreendimentos, a Solos foi pensada para criar oportunidades reais de moradia e patrimônio, com responsabilidade, racionalidade e visão de longo prazo.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -left-[calc(0.5rem+1px)] top-1 w-4 h-4 rounded-full bg-primary" />
                <h2 className="font-heading text-2xl mb-3">Os pilares</h2>
                <p className="text-foreground/70 text-lg leading-relaxed">
                  A empresa é familiar, cuidadosamente planejada e sustentada por três pilares que orientam cada decisão: <strong className="text-primary">confiança</strong>, <strong className="text-primary">planejamento</strong> e <strong className="text-primary">inteligência</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-solos-dark text-white">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-2xl">
          <h2 className="font-heading text-3xl md:text-4xl mb-6">
            Construímos com a mesma dedicação de quem está construindo para a própria família.
          </h2>
          <p className="text-white/60 text-lg">
            Porque é assim que tudo começou — com cuidado, visão e muito planejamento.
          </p>
        </div>
      </section>
    </>
  );
};

export default NossaHistoria;
