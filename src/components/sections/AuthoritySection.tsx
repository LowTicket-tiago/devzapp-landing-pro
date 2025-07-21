import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, TrendingUp, CheckCircle } from "lucide-react";

export function AuthoritySection() {
  const achievements = [
    {
      icon: Users,
      number: "1000+",
      text: "Lançamentos ajudados"
    },
    {
      icon: TrendingUp,
      number: "R$ 50M+",
      text: "Em vendas geradas"
    },
    {
      icon: Award,
      number: "5 anos",
      text: "De experiência"
    },
    {
      icon: CheckCircle,
      number: "100%",
      text: "Método validado"
    }
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-neon opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="bg-primary text-primary-foreground px-6 py-2 text-lg font-bold mb-8">
            👨‍💻 Quem criou este método
          </Badge>

          <Card className="p-12 bg-card border-primary/20">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-8">
              🏆 Autoridade comprovada
            </h2>

            <div className="grid md:grid-cols-4 gap-8 mb-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">
                    {achievement.number}
                  </div>
                  <p className="text-gray-text font-medium">
                    {achievement.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-6 text-lg text-gray-text">
              <p className="text-xl text-foreground font-semibold mb-6">
                Esse conteúdo foi criado por mim, criador da <span className="text-primary">Devzapp</span>, 
                plataforma que já ajudou milhares de lançamentos a escalarem seus negócios no WhatsApp.
              </p>
              
              <p>
                Com base em <strong className="text-primary">testes reais</strong>, atendimento em alto volume e 
                estratégias aplicadas por grandes nomes do mercado, esse curso é a sua oportunidade de 
                profissionalizar o que hoje ainda depende do improviso.
              </p>

              <div className="bg-gradient-neon p-6 rounded-xl mt-8">
                <p className="text-foreground font-semibold text-xl">
                  ✅ Método testado e aprovado por milhares de empreendedores
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}