import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Phone, Mail, MapPin, Instagram } from "lucide-react";
import logoSolos from "@/assets/logo-solos.png";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const isHome = location.pathname === "/";
  const transparent = isHome && !scrolled;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setDropdownOpen(null);
  }, [location.pathname]);

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

  const linkTone = transparent ? "text-white/85 hover:text-primary" : "text-foreground/75 hover:text-primary";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Topbar */}
      <div
        className={`bg-solos-dark text-white/70 overflow-hidden transition-all duration-300 ${
          scrolled ? "max-h-0 opacity-0" : "max-h-12 opacity-100"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8 flex items-center justify-between h-10 text-xs">
          <a
            href="https://www.instagram.com/solos.empreendimentos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-primary transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">@solos.empreendimentos</span>
          </a>
          <div className="flex items-center gap-6">
            <span className="hidden lg:inline-flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-primary" /> Indaial, SC
            </span>
            <a
              href="mailto:solos.incorporadora@gmail.com"
              className="hidden md:inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-primary" /> solos.incorporadora@gmail.com
            </a>
            <a
              href="https://wa.me/5547991783005"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-primary" /> (47) 99178-3005
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`transition-all duration-300 border-b ${
          transparent
            ? "bg-transparent border-white/10"
            : "bg-background/95 backdrop-blur-md border-border shadow-sm"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? "h-16" : "h-20"}`}>
            <Link to="/" className="flex-shrink-0">
              <img
                src={logoSolos}
                alt="Solos Empreendimentos Imobiliários"
                className={`transition-all duration-300 ${scrolled ? "h-12" : "h-[68px]"} ${transparent ? "brightness-0 invert" : ""}`}
              />
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item) =>
                item.children ? (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setDropdownOpen(item.label)}
                    onMouseLeave={() => setDropdownOpen(null)}
                  >
                    <button
                      className={`group flex items-center gap-1 px-4 py-2 text-sm font-medium tracking-wide transition-colors ${linkTone}`}
                    >
                      {item.label}
                      <ChevronDown className="w-3.5 h-3.5" />
                      <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                    </button>
                    {dropdownOpen === item.label && (
                      <div className="absolute top-full left-0 py-2 bg-background border border-border border-t-2 border-t-primary rounded-b-lg shadow-xl min-w-[220px] animate-in fade-in slide-in-from-top-1 duration-200">
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className={`block px-4 py-2.5 text-sm transition-colors hover:bg-secondary hover:text-primary ${
                              isActive(child.path) ? "text-primary font-medium" : "text-foreground/70"
                            }`}
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
                    className={`group relative px-4 py-2 text-sm font-medium tracking-wide transition-colors ${
                      isActive(item.path!) ? "text-primary" : linkTone
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute left-4 right-4 -bottom-0.5 h-px bg-primary origin-left transition-transform duration-300 ${
                        isActive(item.path!) ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                )
              )}
            </nav>

            <a
              href="https://wa.me/5547991783005"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:inline-flex items-center gap-2 border px-6 py-2.5 rounded-full text-sm font-medium transition-colors border-primary text-primary hover:bg-primary hover:text-primary-foreground`}
            >
              Fale conosco
            </a>

            {/* Mobile toggle */}
            <button
              onClick={() => setMobileOpen(true)}
              className={`lg:hidden p-2 ${transparent ? "text-white" : "text-foreground"}`}
              aria-label="Abrir menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel */}
      <div
        className={`lg:hidden fixed inset-0 z-50 bg-solos-dark text-white transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between h-20 px-4">
          <img src={logoSolos} alt="Solos" className="h-12 brightness-0 invert" />
          <button onClick={() => setMobileOpen(false)} className="p-2 text-white" aria-label="Fechar menu">
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-6 py-4 space-y-1 overflow-y-auto max-h-[calc(100vh-11rem)]">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.label} className="border-b border-white/10">
                <button
                  onClick={() => setDropdownOpen(dropdownOpen === item.label ? null : item.label)}
                  className="flex items-center justify-between w-full py-4 font-heading text-2xl text-white/90"
                >
                  {item.label}
                  <ChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${dropdownOpen === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                {dropdownOpen === item.label && (
                  <div className="pb-4 pl-4 space-y-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        onClick={() => setMobileOpen(false)}
                        className={`block py-1.5 text-sm ${isActive(child.path) ? "text-primary" : "text-white/60"}`}
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
                className={`block py-4 font-heading text-2xl border-b border-white/10 ${
                  isActive(item.path!) ? "text-primary" : "text-white/90"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <a
            href="https://wa.me/5547991783005"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-primary text-primary-foreground px-5 py-3.5 rounded-full text-sm font-medium"
          >
            Fale conosco via WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
