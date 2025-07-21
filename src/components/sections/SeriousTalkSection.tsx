import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function SeriousTalkSection() {
  const handlePurchase = () => {
    window.open('https://checkout4.xgrow.com/pt/89f5236f-9399-4d34-89b6-d5b6d561e4cf/NDk3MTM=', '_blank');
  };

  return (
    <section className="py-20 bg-darker-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Card className="p-12 bg-card border-primary/20 relative">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                💬 Conversa <span className="text-primary">séria</span>
              </h2>
              <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto" />

              <div className="space-y-6 text-xl text-gray-text">
                <p className="font-semibold text-primary">
                  ⚠️ Atenção: Você pode continuar se virando sozinho…
                </p>
                
                <p>
                  Mas sabe que isso tem te custado vendas, energia e tempo.
                </p>
                
                <p className="text-foreground font-semibold text-2xl">
                  ⏰ Está na hora de parar de improvisar e começar a escalar com estratégia.
                </p>
                
                <p className="text-primary font-bold text-2xl">
                  🎯 Você não precisa de sorte. Precisa de método. 
                  E esse curso é o seu ponto de virada.
                </p>
              </div>

              <div className="pt-8">
                <Button 
                  variant="cta" 
                  size="xl" 
                  className="text-xl font-bold"
                  onClick={handlePurchase}
                >
                  🔥 Sim, quero mudar agora
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}