import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, Clock, Shield, Smartphone, Trophy } from "lucide-react";

export function PricingSection() {
  const features = [
    { icon: Check, text: "Acesso imediato e vitalício" },
    { icon: Smartphone, text: "Compatível com qualquer dispositivo" },
    { icon: Trophy, text: "Certificado de conclusão" },
    { icon: Shield, text: "Garantia incondicional de 7 dias" },
    { icon: Star, text: "Suporte por 30 dias" },
    { icon: Clock, text: "13 aulas práticas e diretas" }
  ];

  const handlePurchase = () => {
    window.open('https://checkout4.xgrow.com/pt/89f5236f-9399-4d34-89b6-d5b6d561e4cf/NDk3MTM=', '_blank');
  };

  return (
    <section id="cta-section" className="py-20 bg-background relative">
      <div className="absolute inset-0 bg-gradient-neon opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Price Anchoring */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-xl mb-4">⚠️ Atenção:</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Cursos com esse nível de conteúdo são vendidos por 
            <span className="line-through text-muted-foreground"> R$ 297</span> ou até 
            <span className="line-through text-muted-foreground"> R$ 497</span>.
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto mb-8" />
          <p className="text-xl text-gray-text max-w-3xl mx-auto mb-6">
            Mas nossa proposta é entregar resultado acessível, prático e aplicável de imediato.
          </p>
          <p className="text-2xl text-foreground font-semibold">
            Por isso, todo o conteúdo estará disponível para você por um valor simbólico.
          </p>
        </div>

        {/* Main Pricing Card */}
        <div className="max-w-2xl mx-auto">
          <Card className="p-12 bg-card border-primary/40 relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-primary" />
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground px-6 py-2 text-lg font-bold">
              🔥 OFERTA ESPECIAL
            </Badge>

            <div className="text-center mb-8">
              <div className="mb-6">
                <span className="text-6xl font-bold text-primary">R$ 67</span>
                <span className="text-2xl text-gray-text">,00</span>
              </div>
              <p className="text-xl text-foreground font-semibold mb-2">à vista ou até</p>
              <p className="text-2xl text-primary font-bold">7x de R$ 10,18</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <feature.icon className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-gray-text">{feature.text}</span>
                </div>
              ))}
            </div>

            <Button 
              variant="cta" 
              size="xl" 
              className="w-full text-xl font-bold py-6"
              onClick={handlePurchase}
            >
              💳 Quero meu acesso agora
            </Button>

            <p className="text-center text-sm text-muted-foreground mt-4">
              🔒 Compra 100% segura • Garantia de 7 dias
            </p>
          </Card>
        </div>

        {/* Additional CTA Section */}
        <div className="mt-20 text-center">
          <Card className="p-8 bg-darker-bg border-primary/20 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              💰 Investimento que se paga sozinho
            </h3>
            <p className="text-xl text-gray-text mb-8">
              Com apenas <strong className="text-primary">1 venda automatizada</strong> você já recupera 
              todo o investimento do curso. O resto é <strong className="text-primary">lucro puro</strong>!
            </p>
            <Button 
              variant="cta" 
              size="xl"
              onClick={handlePurchase}
            >
              🚀 Garantir minha vaga agora
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
}