import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
export function FooterSection() {
  const handlePurchase = () => {
    window.open('https://checkout4.xgrow.com/pt/89f5236f-9399-4d34-89b6-d5b6d561e4cf/NDk3MTM=', '_blank');
  };
  return <footer className="py-20 bg-background border-t border-primary/20">
      <div className="container mx-auto px-6">
        {/* Final CTA */}
        <div className="text-center mb-16">
          <Card className="p-12 bg-card border-primary/20 max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              📌 Última chance de garantir
            </h3>
            <div className="space-y-4 mb-8">
              <div className="flex items-center justify-center gap-2 text-lg">
                <span className="text-gray-text">💰 R$ 67 ou até</span>
                <span className="text-primary font-bold">7x de R$ 10,18</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-text">
                <span>📈 Resultado em poucos dias</span>
                <span>•</span>
                <span>🛠️ Aplicação imediata</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-text">
                <span>💡 Método validado</span>
                <span>•</span>
                <span>🔒 Garantia de 7 dias</span>
              </div>
            </div>
            <Button variant="cta" size="xl" className="w-full font-bold" onClick={handlePurchase}>
              👉 Quero garantir meu acesso agora
            </Button>
          </Card>
        </div>

        {/* Footer Info */}
        <div className="border-t border-primary/20 pt-8">
          <div className="text-center space-y-4">
            <p className="text-gray-text text-lg font-semibold">
              © 2025 Todos os direitos reservados | Desenvolvido por Tiago Devzapp{" "}
              <span className="text-primary"></span>
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-text">
              
            </div>
            
            <div className="flex justify-center items-center gap-6 text-sm text-gray-text">
              <a href="https://www.instagram.com/tiagodevzapp/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                📸 Instagram
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                📱 Política de Privacidade
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Termos de Uso
              </a>
            </div>

            <div className="mt-8 pt-4 border-t border-primary/10">
              <p className="text-xs text-muted-foreground max-w-2xl mx-auto">Este produto é comercializado com . A plataforma não faz controle editorial prévio dos produtos comercializados, nem avalia a tecnicidade e experiência daqueles que os produzem. A existência de um produto e sua aquisição, através da plataforma, não podem ser consideradas como garantia de qualidade de conteúdo e resultado, em qualquer hipótese.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>;
}