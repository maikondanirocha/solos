import { Link } from "react-router-dom";
import { ArrowRight, Target, Building2, TrendingUp, LayoutGrid, Search, BarChart3, Compass, Hammer, Handshake, Users } from "lucide-react";
import heroImg from "@/assets/hero-residencial.jpg";
import institucionalImg from "@/assets/institucional-solos.jpg";
import { empreendimentos } from "@/data/empreendimentos";
import EmpreendimentoCard from "@/components/EmpreendimentoCard";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const destaques = empreendimentos.filter((e) => e.destaque).slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-solos-dark overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImg}
            alt="Empreendimento residencial moderno"
            className="w-full h-full object-cover opacity-30"
            width={1920}
            height={1080}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-solos-dark/90 via-solos-dark/70 to-transparent" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-20">
          <div className="max-w-2xl space-y-6">
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white leading-tight">
              Empreendimentos planejados para morar bem e investir com inteligência.
            </h1>
            <p className="text-white/70 text-lg md:text-xl leading-relaxed max-w-xl">
              A Solos desenvolve projetos imobiliários com foco em confiança, planejamento e valorização, criando oportunidades reais para viver, conquistar patrimônio e construir futuro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/empreendimentos"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-medium hover:bg-accent transition-colors"
              >
                Ver empreendimentos
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="https://wa.me/5547991783005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-4 rounded-lg font-medium hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                Falar com um especialista
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Empreendimentos em destaque */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Empreendimentos em destaque
            </h2>
            <p className="text-muted-foreground">
              Conheça os projetos da Solos e descubra oportunidades pensadas para morar bem e investir com segurança.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destaques.map((emp) => (
              <EmpreendimentoCard key={emp.slug} emp={emp} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              to="/empreendimentos"
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Ver todos os empreendimentos <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Por que a Solos?
            </h2>
            <p className="text-muted-foreground">
              Cada decisão é orientada por inteligência, planejamento e compromisso com resultados reais.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: LayoutGrid,
                title: "Projetos otimizados",
                desc: "Mais valor por metro quadrado, com inteligência de planta e melhor aproveitamento dos espaços.",
              },
              {
                icon: Hammer,
                title: "Construção eficiente",
                desc: "Qualidade, racionalidade construtiva e foco em execução segura e bem planejada.",
              },
              {
                icon: TrendingUp,
                title: "Alto potencial de valorização",
                desc: "Empreendimentos pensados para unir moradia e investimento com visão de longo prazo.",
              },
              {
                icon: Building2,
                title: "Padrão moderno e funcional",
                desc: "Arquitetura contemporânea, boa distribuição interna e soluções pensadas para o dia a dia.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-5">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-xl mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bloco institucional */}
      <section className="py-20 lg:py-28 bg-solos-dark text-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-heading text-3xl md:text-4xl leading-tight">
                Uma empresa construída com propósito
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                A Solos nasceu de um sonho cultivado por mais de 10 anos. Sua história começa no desejo de contribuir com o planejamento das cidades e ajudar famílias a conquistarem a casa própria de forma acessível, planejada e inteligente.
              </p>
              <p className="text-white/70 text-lg leading-relaxed">
                Mais do que construir imóveis, a Solos quer desenvolver oportunidades reais de moradia, valorização e patrimônio.
              </p>
              <Link
                to="/a-solos"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-medium hover:bg-accent transition-colors mt-2"
              >
                Conheça a Solos <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={institucionalImg}
                alt="Empreendimento moderno Solos"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-primary-foreground p-6 rounded-xl shadow-lg hidden lg:block">
                <p className="font-heading text-3xl">+10</p>
                <p className="text-sm">anos de planejamento</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como trabalhamos */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
              Como trabalhamos
            </h2>
            <p className="text-muted-foreground">
              Cada empreendimento segue um processo cuidadoso, da análise do terreno à entrega final.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: "01", icon: Search, title: "Estudo do terreno", desc: "Análise da localização, vocação e potencial de desenvolvimento." },
              { step: "02", icon: BarChart3, title: "Análise de viabilidade", desc: "Estudo financeiro, técnico e mercadológico do empreendimento." },
              { step: "03", icon: Compass, title: "Planejamento técnico e comercial", desc: "Definição do produto, projeto e estratégia comercial." },
              { step: "04", icon: Target, title: "Desenvolvimento do produto", desc: "Projeto arquitetônico, aprovações e preparação para obra." },
              { step: "05", icon: Hammer, title: "Construção e acompanhamento", desc: "Execução com qualidade, cronograma e controle rigoroso." },
              { step: "06", icon: Handshake, title: "Comercialização e relacionamento", desc: "Venda, atendimento e pós-venda com proximidade." },
            ].map((item) => (
              <div key={item.step} className="relative p-8 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors group">
                <span className="font-heading text-5xl text-primary/15 absolute top-4 right-6 group-hover:text-primary/25 transition-colors">
                  {item.step}
                </span>
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-primary/10 text-primary mb-4">
                  <item.icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para parceiros */}
      <section className="py-20 lg:py-28 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card p-10 lg:p-14 rounded-2xl border border-border space-y-4">
              <Target className="w-8 h-8 text-primary" />
              <h3 className="font-heading text-2xl">Tem uma área com potencial?</h3>
              <p className="text-muted-foreground leading-relaxed">
                A Solos está aberta a avaliar terrenos e áreas com potencial para novos empreendimentos. Se você possui uma área, vamos conversar.
              </p>
              <Link
                to="/para-parceiros/ofereca-sua-area"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Ofereça sua área <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-card p-10 lg:p-14 rounded-2xl border border-border space-y-4">
              <Users className="w-8 h-8 text-primary" />
              <h3 className="font-heading text-2xl">É corretor e quer ser parceiro?</h3>
              <p className="text-muted-foreground leading-relaxed">
                Valorizamos relações sólidas com corretores que compartilham da nossa visão de atendimento, confiança e resultado.
              </p>
              <Link
                to="/para-parceiros/para-corretores"
                className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
              >
                Cadastre-se <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contato rápido */}
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">
                Fale com a Solos
              </h2>
              <p className="text-muted-foreground">
                Tire suas dúvidas, conheça nossos empreendimentos ou solicite atendimento personalizado.
              </p>
            </div>
            <ContactForm showInteresse />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
