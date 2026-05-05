import { useParams, Link } from "react-router-dom";
import { MapPin, ArrowLeft, Check, MessageCircle } from "lucide-react";
import { empreendimentos } from "@/data/empreendimentos";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { useState } from "react";

const EmpreendimentoDetail = () => {
  const { slug } = useParams();
  const emp = empreendimentos.find((e) => e.slug === slug);
  const [activeImage, setActiveImage] = useState(0);

  if (!emp) {
    return (
      <div className="py-32 text-center container mx-auto px-4">
        <h1 className="font-heading text-3xl mb-4">Empreendimento não encontrado</h1>
        <Link to="/empreendimentos" className="text-primary hover:underline">← Voltar aos empreendimentos</Link>
      </div>
    );
  }

  const statusColors: Record<string, string> = {
    "Lançamento": "bg-primary text-primary-foreground",
    "Em obras": "bg-accent text-accent-foreground",
    "Pronto": "bg-green-700 text-white",
    "Pronto para construir": "bg-solos-dark text-white",
  };

  const whatsAppMessage = `Olá Solos! Tenho interesse no empreendimento ${emp.nome} e gostaria de mais informações.`;

  return (
    <>
      {/* Header */}
      <section className="py-16 lg:py-20 bg-solos-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <Link to="/empreendimentos" className="inline-flex items-center gap-2 text-white/60 hover:text-primary text-sm mb-8">
            <ArrowLeft className="w-4 h-4" /> Voltar aos empreendimentos
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${statusColors[emp.status]}`}>
                {emp.status}
              </span>
              <h1 className="font-heading text-4xl md:text-5xl">{emp.nome}</h1>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-4 h-4" />
                <span>{emp.localizacao}, {emp.cidade}</span>
              </div>
              <p className="text-white/70 text-lg leading-relaxed">{emp.descricao}</p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href={`https://wa.me/5547991783005?text=${encodeURIComponent(whatsAppMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 py-3.5 rounded-lg font-medium hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </a>
                <a
                  href="#solicitar"
                  className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3.5 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  Solicitar informações
                </a>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <img src={emp.imagem} alt={emp.nome} className="w-full aspect-[4/3] object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl mb-8">Visão geral</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Tipo", value: emp.tipo },
              { label: "Metragem", value: emp.metragem },
              { label: "Padrão", value: emp.padrao },
              { label: "Status", value: emp.status },
            ].map((item) => (
              <div key={item.label} className="p-6 rounded-xl border border-border bg-card text-center">
                <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                <p className="font-heading text-lg">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16 lg:py-20 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl mb-8">Galeria</h2>
          <div className="space-y-4">
            <img
              src={emp.galeria[activeImage]}
              alt={`${emp.nome} - imagem ${activeImage + 1}`}
              className="w-full aspect-[16/9] object-cover rounded-xl"
            />
            <div className="flex gap-3 overflow-x-auto pb-2">
              {emp.galeria.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveImage(i)}
                  className={`flex-shrink-0 w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${
                    i === activeImage ? "border-primary" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl mb-8">Diferenciais</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {emp.diferenciais.map((d) => (
              <div key={d} className="flex items-start gap-3 p-5 rounded-xl border border-border bg-card">
                <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section id="solicitar" className="py-20 lg:py-28 bg-solos-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl">Gostou deste empreendimento?</h2>
            <p className="text-white/70">
              Fale agora com a Solos pelo WhatsApp para mais informações, agendar uma visita ou conversar com um especialista.
            </p>
            <div className="pt-2">
              <WhatsAppCTA message={whatsAppMessage} label="Solicitar atendimento no WhatsApp" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EmpreendimentoDetail;
