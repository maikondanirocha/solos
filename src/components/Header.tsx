import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logoSolos from "@/assets/logo-solos.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Empreendimentos", path: "/empreendimentos" },
    {
      label: "A Solos",
      children: [
        { label: "Quem somos", path: "/a-solos" },
        { label: "Nossa história", path: "/nossa-historia" },
        { label: "Como trabalhamos", path: "/como-trabalhamos" },
      ],
    },
    {
      label: "Para parceiros",
      children: [
        { label: "Ofereça sua área", path: "/para-parceiros/ofereca-sua-area" },
        { label: "Para corretores", path: "/para-parceiros/para-corretores" },
      ],
    },
    { label: "Contato", path: "/contato" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <img src={logoSolos} alt="Solos Empreendimentos Imobiliários" className="h-12" />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(item.label)}
                  onMouseLeave={() => setDropdownOpen(null)}
                >
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors">
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5" />
                  </button>
                  {dropdownOpen === item.label && (
                    <div className="absolute top-full left-0 mt-0 py-2 bg-background border border-border rounded-lg shadow-lg min-w-[200px]">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          className={`block px-4 py-2.5 text-sm hover:bg-secondary transition-colors ${isActive(child.path) ? "text-primary font-medium" : "text-foreground/70"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${isActive(item.path!) ? "text-primary" : "text-foreground/80 hover:text-primary"}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <a
            href="https://wa.me/5562999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
          >
            Fale conosco
          </a>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-1">
            {navItems.map((item) =>
              item.children ? (
                <div key={item.label}>
                  <button
                    onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-3 py-3 text-sm font-medium text-foreground/80"
                  >
                    {item.label}
                    <ChevronDown className={`w-4 h-4 transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {dropdownOpen === item.label && (
                    <div className="pl-4 space-y-1">
                      {item.children.map((child) => (
                        <Link
                          key={child.path}
                          to={child.path}
                          onClick={() => setMobileOpen(false)}
                          className={`block px-3 py-2.5 text-sm ${isActive(child.path) ? "text-primary font-medium" : "text-foreground/60"}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path!}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-3 py-3 text-sm font-medium ${isActive(item.path!) ? "text-primary" : "text-foreground/80"}`}
                >
                  {item.label}
                </Link>
              )
            )}
            <a
              href="https://wa.me/5562999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center bg-primary text-primary-foreground px-5 py-3 rounded-lg text-sm font-medium mt-4"
            >
              Fale conosco via WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
