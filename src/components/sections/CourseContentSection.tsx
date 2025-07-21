import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayCircle } from "lucide-react";
import whatsappFeaturesImage from "@/assets/whatsapp-features.jpg";

export function CourseContentSection() {
  const lessons = [
    "Boas-Vindas",
    "Comunique com o seu cliente utilizando a ferramenta certa",
    "Qual versão do WhatsApp eu uso?",
    "Como evitar de levar golpes no seu WhatsApp",
    "Princípios do WhatsApp e aquecendo meu número",
    "Como você pode vender no WhatsApp?",
    "Como evitar bloqueio no WhatsApp (Parte 1)",
    "Como evitar bloqueio no WhatsApp (Parte 2)",
    "Novas profissões do WhatsApp",
    "Vale a pena automatizar o meu negócio?",
    "Automatizando uma conversa na prática",
    "Como organizar o meu WhatsApp?",
    "Interagindo com seus clientes de forma automática e personalizada"
  ];

  return (
    <section className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-neon opacity-5" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            📚 Tudo que você vai <span className="text-primary">receber</span>
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-text max-w-4xl mx-auto">
            Você terá acesso às <strong className="text-primary">13 aulas práticas e diretas</strong> que vão 
            transformar o seu WhatsApp em uma máquina de vendas:
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Course Content */}
          <div className="space-y-4">
            {lessons.map((lesson, index) => (
              <Card key={index} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all hover:shadow-glow group">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary" className="bg-primary text-primary-foreground">
                      {String(index + 1).padStart(2, '0')}
                    </Badge>
                    <PlayCircle className="w-6 h-6 text-primary group-hover:text-neon-glow transition-colors" />
                  </div>
                  <h3 className="text-foreground font-medium group-hover:text-primary transition-colors">
                    {lesson}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {/* Features Highlight */}
          <div className="space-y-8">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
              <img 
                src={whatsappFeaturesImage} 
                alt="WhatsApp Business Features" 
                className="relative z-10 w-full rounded-3xl border border-primary/20"
              />
            </div>

            <Card className="p-8 bg-card border-primary/20">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                ✨ Bônus Inclusos:
              </h3>
              <div className="space-y-4 text-gray-text">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Acesso vitalício ao conteúdo</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Suporte direto por 30 dias</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Atualizações futuras inclusas</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Certificado de conclusão</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}