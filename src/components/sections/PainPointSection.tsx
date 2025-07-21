import { Card } from "@/components/ui/card";
import { AlertTriangle, Clock, Shield, Users } from "lucide-react";

export function PainPointSection() {
  const painPoints = [
    {
      icon: AlertTriangle,
      title: "Mensagens acumuladas",
      description: "Você não consegue responder todos os clientes a tempo"
    },
    {
      icon: Clock,
      title: "Falta de tempo",
      description: "Passa o dia inteiro no WhatsApp e não sobra tempo para outras atividades"
    },
    {
      icon: Shield,
      title: "Medo de bloqueio",
      description: "Preocupação constante de perder seu número principal"
    },
    {
      icon: Users,
      title: "Perda de clientes por demora",
      description: "Vendas perdidas porque não conseguiu responder rápido"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-neon opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-xl mb-4">⚠️ Atenção:</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Você está <span className="text-primary">perdendo vendas</span> sem nem perceber.
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-text max-w-3xl mx-auto">
            Muitos empreendedores enfrentam problemas como:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {painPoints.map((point, index) => (
            <Card key={index} className="p-8 text-center bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow">
              <point.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-4">{point.title}</h3>
              <p className="text-gray-text">{point.description}</p>
            </Card>
          ))}
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-2xl text-foreground font-semibold">
            ✨ Você merece um atendimento ágil, profissional e seguro — 
            sem depender só da sorte ou do improviso.
          </p>
          <p className="text-xl text-primary font-bold">
            💸 Quantas vendas você já deixou de fazer só esta semana?
          </p>
        </div>
      </div>
    </section>
  );
}