import WhatsAppCTA from "@/components/WhatsAppCTA";

const ParaCorretores = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Seja um corretor parceiro da Solos
          </h1>
          <p className="text-muted-foreground text-lg">
            Valorizamos relações sólidas com corretores que compartilham da nossa visão de atendimento, confiança e resultado. Cadastre-se para conhecer oportunidades e formas de parceria com a Solos.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center space-y-6">
          <p className="text-muted-foreground">
            Fale com nossa equipe pelo WhatsApp e nos conte sua cidade de atuação e CRECI. Vamos apresentar as oportunidades e formas de parceria com a Solos.
          </p>
          <WhatsAppCTA
            message="Olá Solos! Sou corretor(a) e tenho interesse em ser parceiro da Solos."
            label="Cadastrar como parceiro no WhatsApp"
          />
        </div>
      </section>
    </>
  );
};

export default ParaCorretores;
