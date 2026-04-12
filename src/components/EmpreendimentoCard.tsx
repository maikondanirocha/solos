import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";
import type { Empreendimento } from "@/data/empreendimentos";

const statusColors: Record<string, string> = {
  "Lançamento": "bg-primary text-primary-foreground",
  "Em obras": "bg-accent text-accent-foreground",
  "Pronto": "bg-green-700 text-white",
  "Pronto para construir": "bg-solos-dark text-white",
};

const EmpreendimentoCard = ({ emp }: { emp: Empreendimento }) => {
  return (
    <Link
      to={`/empreendimentos/${emp.slug}`}
      className="group block bg-card rounded-xl overflow-hidden border border-border hover:shadow-xl transition-all duration-300"
    >
      <div className="relative overflow-hidden aspect-[4/3]">
        <img
          src={emp.imagem}
          alt={emp.nome}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${statusColors[emp.status] || "bg-muted text-foreground"}`}>
          {emp.status}
        </span>
      </div>
      <div className="p-6 space-y-3">
        <h3 className="font-heading text-xl text-foreground group-hover:text-primary transition-colors">
          {emp.nome}
        </h3>
        <div className="flex items-center gap-1.5 text-muted-foreground text-sm">
          <MapPin className="w-3.5 h-3.5" />
          <span>{emp.localizacao}, {emp.cidade}</span>
        </div>
        <p className="text-sm text-foreground/70 leading-relaxed line-clamp-2">
          {emp.resumo}
        </p>
        <span className="inline-block text-sm font-medium text-primary group-hover:underline">
          Ver detalhes →
        </span>
      </div>
    </Link>
  );
};

export default EmpreendimentoCard;
