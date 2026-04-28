import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/5547991783005"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-[#25D366] text-white px-5 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
      aria-label="Falar via WhatsApp"
    >
      <MessageCircle className="w-5 h-5" />
      <span className="hidden sm:inline text-sm font-medium">WhatsApp</span>
    </a>
  );
};

export default WhatsAppButton;
