import { useState } from "react";
import { empreendimentos, statusOptions, cidadeOptions, tipoOptions } from "@/data/empreendimentos";
import EmpreendimentoCard from "@/components/EmpreendimentoCard";

const Empreendimentos = () => {
  const [status, setStatus] = useState("");
  const [cidade, setCidade] = useState("");
  const [tipo, setTipo] = useState("");

  const filtered = empreendimentos.filter((e) => {
    if (status && e.status !== status) return false;
    if (cidade && e.cidade !== cidade) return false;
    if (tipo && e.tipo !== tipo) return false;
    return true;
  });

  const selectClass = "h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <>
      <section className="py-16 lg:py-24 bg-secondary">
        <div className="container mx-auto px-4 lg:px-8 text-center max-w-3xl">
          <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Empreendimentos Solos
          </h1>
          <p className="text-muted-foreground text-lg">
            Conheça os empreendimentos da Solos e descubra oportunidades pensadas para morar bem, investir com segurança e construir patrimônio com inteligência.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectClass}>
              <option value="">Todos os status</option>
              {statusOptions.map((s) => <option key={s} value={s}>{s}</option>)}
            </select>
            <select value={cidade} onChange={(e) => setCidade(e.target.value)} className={selectClass}>
              <option value="">Todas as cidades</option>
              {cidadeOptions.map((c) => <option key={c} value={c}>{c}</option>)}
            </select>
            <select value={tipo} onChange={(e) => setTipo(e.target.value)} className={selectClass}>
              <option value="">Todos os tipos</option>
              {tipoOptions.map((t) => <option key={t} value={t}>{t}</option>)}
            </select>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-muted-foreground py-16">Nenhum empreendimento encontrado com os filtros selecionados.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((emp) => (
                <EmpreendimentoCard key={emp.slug} emp={emp} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Empreendimentos;
