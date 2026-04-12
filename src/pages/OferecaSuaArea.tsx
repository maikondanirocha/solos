import ContactForm from "@/components/ContactForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <ContactForm
            buttonText="Enviar proposta"
            extraFields={
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cidade">Cidade</Label>
                    <Input id="cidade" name="cidade" placeholder="Cidade da área" maxLength={100} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="localizacao-area">Localização da área</Label>
                    <Input id="localizacao-area" name="localizacao-area" placeholder="Bairro, referência" maxLength={200} />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="tamanho">Tamanho aproximado</Label>
                  <Input id="tamanho" name="tamanho" placeholder="Ex: 5.000m², 2 hectares" maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="arquivo">Documento ou imagem (opcional)</Label>
                  <Input id="arquivo" name="arquivo" type="file" accept="image/*,.pdf,.doc,.docx" />
                </div>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
};

export default OferecaSuaArea;
