import WhatsAppCTA from "@/components/WhatsAppCTA";

const OferecaSuaArea = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Tem uma área com potencial? Vamos conversar.
          </h1>
          <p className="text-muted-foreground text-lg">
            A Solos está aberta a avaliar terrenos e áreas com potencial para novos empreendimentos. Se você possui uma área e deseja entender possibilidades de desenvolvimento, entre em contato conosco.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl text-center space-y-6">
          <p className="text-muted-foreground">
            Fale diretamente com nossa equipe pelo WhatsApp. Conte sobre a localização, tamanho aproximado e características da área — analisamos cada oportunidade com atenção.
          </p>
          <WhatsAppCTA
            message="Olá Solos! Tenho uma área com potencial e gostaria de conversar sobre uma possível parceria."
            label="Apresentar minha área no WhatsApp"
          />
        </div>
      </section>
    </>
  );
};

export default OferecaSuaArea;
