import { Card } from "@/components/ui/card";
import { Target, Shield, Cog, TrendingUp, Award } from "lucide-react";

export function TargetAudienceSection() {
  const targetAudience = [
    {
      icon: Target,
      title: "Vende pelo WhatsApp e sente que está sobrecarregado",
      description: "Você já faz vendas, mas sente o peso de fazer tudo manualmente"
    },
    {
      icon: Shield,
      title: "Já teve medo de perder seu número por bloqueio",
      description: "A preocupação constante com a segurança da sua conta"
    },
    {
      icon: Cog,
      title: "Não sabe por onde começar com automação",
      description: "Quer automatizar mas não sabe os primeiros passos"
    },
    {
      icon: TrendingUp,
      title: "Deseja organizar seu atendimento e aumentar conversões",
      description: "Busca um sistema organizado que converte mais"
    },
    {
      icon: Award,
      title: "Busca profissionalizar seu negócio com estratégias práticas",
      description: "Quer sair do amadorismo e ter processos profissionais"
    }
  ];

  return (
    <section className="py-20 bg-darker-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            🎯 Este curso é para <span className="text-primary">você que</span>:
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {targetAudience.map((item, index) => (
            <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow group text-center">
              <item.icon className="w-16 h-16 text-primary mx-auto mb-6 group-hover:text-neon-glow transition-colors" />
              <h3 className="text-xl font-semibold text-foreground mb-4 leading-tight">
                {item.title}
              </h3>
              <p className="text-gray-text leading-relaxed">
                {item.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-gradient-neon border-primary/40 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              ⚡ Se você se identificou com pelo menos 2 desses pontos...
            </h3>
            <p className="text-xl text-gray-text">
              Este curso foi feito especialmente para <strong className="text-primary">transformar sua realidade</strong> no WhatsApp!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}