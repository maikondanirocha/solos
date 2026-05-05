import { MessageCircle } from "lucide-react";

interface WhatsAppCTAProps {
  message: string;
  label?: string;
  variant?: "light" | "dark";
  className?: string;
}

const WhatsAppCTA = ({ message, label = "Falar no WhatsApp", variant = "light", className = "" }: WhatsAppCTAProps) => {
  const href = `https://wa.me/5547991783005?text=${encodeURIComponent(message)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1faa55] text-white px-8 py-4 rounded-lg font-medium text-base shadow-lg hover:shadow-xl transition-all ${className}`}
    >
      <MessageCircle className="w-5 h-5" />
      <span>{label}</span>
    </a>
  );
};

export default WhatsAppCTA;