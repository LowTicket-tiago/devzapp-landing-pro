import { Card } from "@/components/ui/card";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export function FaqSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "❓ Vou conseguir aplicar mesmo sem experiência?",
      answer: "Sim! O curso é didático, direto e prático. Cada aula é pensada para quem está começando, com explicações claras e exemplos reais."
    },
    {
      question: "❓ Funciona para WhatsApp Business e pessoal?",
      answer: "Sim, mas o foco é no uso profissional com WhatsApp Business. Você aprenderá as melhores práticas para cada tipo de conta."
    },
    {
      question: "❓ Preciso pagar por ferramentas?",
      answer: "Não. Você poderá aplicar com recursos gratuitos, se preferir. Também mostraremos opções pagas para quem quer acelerar ainda mais os resultados."
    },
    {
      question: "❓ Tem garantia?",
      answer: "Sim. Garantia de 7 dias. Se não curtir, é só pedir reembolso sem perguntas. Sua satisfação é nossa prioridade."
    },
    {
      question: "❓ Por quanto tempo terei acesso?",
      answer: "O acesso é vitalício! Você poderá assistir quantas vezes quiser e acompanhar todas as atualizações futuras."
    },
    {
      question: "❓ Funciona para qualquer tipo de negócio?",
      answer: "Sim! As estratégias funcionam para vendas de produtos físicos, digitais, serviços, consultorias e muito mais."
    }
  ];

  return (
    <section className="py-20 bg-darker-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            🤔 Perguntas <span className="text-primary">frequentes</span>
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-card border-primary/20 hover:border-primary/40 transition-colors">
              <Collapsible
                open={openItems.includes(index)}
                onOpenChange={() => toggleItem(index)}
              >
                <CollapsibleTrigger className="w-full p-6 text-left">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">
                      {faq.question}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-primary transition-transform ${
                        openItems.includes(index) ? 'rotate-180' : ''
                      }`} 
                    />
                  </div>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <div className="px-6 pb-6 text-gray-text">
                    {faq.answer}
                  </div>
                </CollapsibleContent>
              </Collapsible>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="p-8 bg-gradient-neon border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-text">
              Entre em contato conosco em{" "}
              <a href="mailto:suporte@devzapp.com.br" className="text-primary font-semibold hover:underline">
                suporte@devzapp.com.br
              </a>
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}