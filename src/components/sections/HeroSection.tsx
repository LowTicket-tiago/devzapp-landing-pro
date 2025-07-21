import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-whatsapp.jpg";

export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-dark flex items-center justify-center relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-neon opacity-20" />
      <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
                Vender <span className="text-primary">Sozinho</span>?
              </h1>
              <div className="w-20 h-2 bg-gradient-primary rounded-full" />
            </div>
            
            <div className="space-y-6 text-lg text-gray-text">
              <p className="font-semibold text-primary">
                ⚠️ Atenção: Você sente que está fazendo tudo sozinho no WhatsApp?
              </p>
              
              <p>
                Responder dezenas de mensagens, criar conteúdos, fazer vendas, atender clientes… 
                e ainda se preocupar com bloqueio ou número banido?
              </p>
              
              <p className="text-foreground font-medium">
                ✨ Imagine ter um sistema que automatiza tudo isso e ainda cria conexão real 
                com seu cliente, sem perder vendas e sem surtar.
              </p>
              
              <p className="text-primary font-semibold">
                👉 Se você já tentou escalar seu atendimento, mas está preso na rotina do 
                "vendedor solitário", essa página é pra você.
              </p>
            </div>
            
            <Button 
              variant="cta" 
              size="xl" 
              className="w-full lg:w-auto"
              onClick={() => document.getElementById('cta-section')?.scrollIntoView({ behavior: 'smooth' })}
            >
              🚀 Quero Automatizar Agora
            </Button>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-2xl transform scale-110" />
            <img 
              src={heroImage} 
              alt="WhatsApp Automation Dashboard" 
              className="relative z-10 w-full rounded-3xl shadow-glow border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}