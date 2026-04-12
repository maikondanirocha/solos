import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ContactFormProps {
  assuntos?: string[];
  showInteresse?: boolean;
  extraFields?: React.ReactNode;
  buttonText?: string;
}

const ContactForm = ({ assuntos, showInteresse = false, extraFields, buttonText = "Quero falar com a Solos" }: ContactFormProps) => {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="nome">Nome</Label>
          <Input id="nome" name="nome" required placeholder="Seu nome completo" maxLength={100} />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone">Telefone / WhatsApp</Label>
          <Input id="telefone" name="telefone" required placeholder="(00) 00000-0000" maxLength={20} />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-mail</Label>
        <Input id="email" name="email" type="email" required placeholder="seu@email.com" maxLength={255} />
      </div>

      {assuntos && (
        <div className="space-y-2">
          <Label htmlFor="assunto">Assunto</Label>
          <select
            id="assunto"
            name="assunto"
            required
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Selecione</option>
            {assuntos.map((a) => (
              <option key={a} value={a}>{a}</option>
            ))}
          </select>
        </div>
      )}

      {showInteresse && (
        <div className="space-y-2">
          <Label htmlFor="interesse">Interesse</Label>
          <select
            id="interesse"
            name="interesse"
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <option value="">Selecione</option>
            <option value="Comprar">Comprar</option>
            <option value="Investir">Investir</option>
            <option value="Conhecer">Conhecer a Solos</option>
          </select>
        </div>
      )}

      {extraFields}

      <div className="space-y-2">
        <Label htmlFor="mensagem">Mensagem</Label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          placeholder="Como podemos ajudar?"
          maxLength={1000}
          className="flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring resize-none"
        />
      </div>

      <p className="text-xs text-muted-foreground">
        Ao enviar este formulário, você concorda com nossa{" "}
        <a href="/politica-de-privacidade" className="underline hover:text-primary">Política de Privacidade</a>{" "}
        e autoriza o contato da Solos para retorno da sua solicitação.
      </p>

      <Button type="submit" disabled={loading} className="w-full sm:w-auto bg-primary hover:bg-accent text-primary-foreground px-8 py-3">
        {loading ? "Enviando..." : buttonText}
      </Button>
    </form>
  );
};

export default ContactForm;
