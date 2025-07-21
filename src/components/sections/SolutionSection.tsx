import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";
import automationImage from "@/assets/automation-flow.jpg";

export function SolutionSection() {
  const steps = [
    "Escolher a versão certa do WhatsApp para o seu negócio.",
    "Proteger sua conta contra golpes e fraudes.",
    "Aplicar técnicas para aumentar as vendas com consistência.",
    "Aquecer seu número e organizar o atendimento.",
    "Automatizar mensagens de forma natural e personalizada.",
    "Reduzir drasticamente os riscos de bloqueio com boas práticas."
  ];

  return (
    <section className="py-20 bg-darker-bg">
      <div className="container mx-auto px-6">
        {/* Transition */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-xl mb-4">⚡ Atenção:</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            E se eu te disser que existe um <span className="text-primary">passo a passo simples</span> 
            pra resolver tudo isso?
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-text max-w-3xl mx-auto mb-6">
            Um método que organiza, automatiza e protege seu número, 
            e ainda melhora a experiência do seu cliente.
          </p>
          <p className="text-2xl text-foreground font-semibold mb-4">
            ✨ Com as estratégias certas, seu WhatsApp vira uma máquina de conversão.
          </p>
          <p className="text-xl text-primary font-bold">
            🎯 Esse curso é o caminho entre o caos do atendimento e a tranquilidade 
            de uma operação profissional.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-8">
              📌 Veja o que você vai aprender em ordem:
            </h3>
            <div className="space-y-4">
              {steps.map((step, index) => (
                <Card key={index} className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-gray-text">{step}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl" />
            <img 
              src={automationImage} 
              alt="Fluxo de automação" 
              className="relative z-10 w-full rounded-3xl border border-primary/20"
            />
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="cta" 
            size="xl"
            onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            🚀 Quero Aprender Agora
          </Button>
        </div>
      </div>
    </section>
  );
}