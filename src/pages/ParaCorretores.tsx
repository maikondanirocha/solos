import ContactForm from "@/components/ContactForm";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

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
        <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
          <ContactForm
            buttonText="Cadastrar como parceiro"
            extraFields={
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="cidade">Cidade de atuação</Label>
                  <Input id="cidade" name="cidade" placeholder="Onde você atua" maxLength={100} />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="creci">CRECI</Label>
                  <Input id="creci" name="creci" placeholder="Número do CRECI" maxLength={20} />
                </div>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
};

export default ParaCorretores;
