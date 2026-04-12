import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logoSolos from "@/assets/logo-solos.png";

const Footer = () => {
  return (
    <footer className="bg-solos-dark text-white">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <img src={logoSolos} alt="Solos Empreendimentos" className="h-12 brightness-0 invert" />
            <p className="text-white/60 text-sm leading-relaxed">
              Confiança, planejamento e inteligência em cada empreendimento.
            </p>
            <div className="flex gap-4 pt-2">
              <span className="text-white/40 text-sm">Instagram</span>
              <span className="text-white/40 text-sm">LinkedIn</span>
              <span className="text-white/40 text-sm">Facebook</span>
            </div>
          </div>

          {/* Menu */}
          <div>
            <h4 className="font-heading text-lg mb-4">Menu</h4>
            <ul className="space-y-2.5">
              {[
                { label: "Home", path: "/" },
                { label: "Empreendimentos", path: "/empreendimentos" },
                { label: "A Solos", path: "/a-solos" },
                { label: "Nossa história", path: "/nossa-historia" },
                { label: "Como trabalhamos", path: "/como-trabalhamos" },
                { label: "Contato", path: "/contato" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/60 hover:text-primary transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partners */}
          <div>
            <h4 className="font-heading text-lg mb-4">Para parceiros</h4>
            <ul className="space-y-2.5">
              <li>
                <Link to="/para-parceiros/ofereca-sua-area" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Ofereça sua área
                </Link>
              </li>
              <li>
                <Link to="/para-parceiros/para-corretores" className="text-white/60 hover:text-primary transition-colors text-sm">
                  Para corretores
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Phone className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>(62) 99999-9999</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <Mail className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>contato@solosempreendimentos.com.br</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-white/60">
                <MapPin className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                <span>Goiânia, GO</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs">
            © {new Date().getFullYear()} Solos Empreendimentos Imobiliários. Todos os direitos reservados. CNPJ: 00.000.000/0001-00
          </p>
          <span className="text-white/40 text-xs">
            Política de Privacidade
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
