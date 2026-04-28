import ContactForm from "@/components/ContactForm";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

const Contato = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Contato</h1>
          <p className="text-muted-foreground text-lg">
            Fale com a Solos para tirar dúvidas, conhecer empreendimentos, tratar de parcerias ou solicitar atendimento.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Info */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="font-heading text-2xl mb-6">Nossos canais</h2>
                <ul className="space-y-5">
                  {[
                    { icon: MessageCircle, label: "WhatsApp", value: "(47) 99178-3005", href: "https://wa.me/5547991783005" },
                    { icon: Phone, label: "Telefone", value: "(47) 99178-3005", href: "tel:+5547991783005" },
                    { icon: Mail, label: "E-mail", value: "solos.incorporadora@gmail.com", href: "mailto:solos.incorporadora@gmail.com" },
                    { icon: MapPin, label: "Endereço", value: "Indaial, SC", href: "#" },
                    { icon: Clock, label: "Horário", value: "Seg a Sex, 8h às 18h", href: "#" },
                  ].map((item) => (
                    <li key={item.label}>
                      <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="flex items-start gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <item.icon className="w-4 h-4" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{item.label}</p>
                          <p className="font-medium text-foreground">{item.value}</p>
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <h2 className="font-heading text-2xl mb-6">Envie sua mensagem</h2>
              <ContactForm
                assuntos={["Comprar", "Investir", "Parceria", "Corretor", "Atendimento geral"]}
                buttonText="Enviar mensagem"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
