import { Link } from "react-router-dom";
import { ArrowRight, Shield, Brain, Target } from "lucide-react";
import institucionalImg from "@/assets/institucional-solos.jpg";

const ASolos = () => {
  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">A Solos</h1>
          <p className="text-muted-foreground text-lg">Quem somos, o que nos move e como pensamos cada empreendimento.</p>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl">Quem somos</h2>
              <p className="text-foreground/70 text-lg leading-relaxed">
                A Solos Empreendimentos Imobiliários é uma empresa familiar, construída com profundidade, visão de longo prazo e compromisso com empreendimentos bem planejados.
              </p>
              <p className="text-foreground/70 text-lg leading-relaxed">
                Desenvolvemos projetos com foco em confiança, planejamento e inteligência, buscando unir funcionalidade, qualidade e potencial de valorização.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link to="/nossa-historia" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Conheça nossa história <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to="/como-trabalhamos" className="inline-flex items-center gap-2 text-primary font-medium hover:underline">
                  Como trabalhamos <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80"
              alt="Empreendimento Solos"
              className="w-full rounded-2xl shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Pilares */}
      <section className="py-20 lg:py-28 bg-solos-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <h2 className="font-heading text-3xl md:text-4xl text-center mb-14">Nossos pilares</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Confiança", desc: "Relações transparentes, compromisso com o que é prometido e solidez em cada decisão." },
              { icon: Target, title: "Planejamento", desc: "Cada empreendimento é fruto de estudo profundo, análise cuidadosa e visão de longo prazo." },
              { icon: Brain, title: "Inteligência", desc: "Soluções otimizadas que maximizam valor, funcionalidade e potencial de valorização." },
            ].map((p) => (
              <div key={p.title} className="text-center p-10 rounded-2xl border border-white/10 hover:border-primary/40 transition-colors">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/20 text-primary mb-6">
                  <p.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-2xl mb-3">{p.title}</h3>
                <p className="text-white/60 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ASolos;
