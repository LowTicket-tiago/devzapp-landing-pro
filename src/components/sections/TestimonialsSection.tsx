import { Card } from "@/components/ui/card";
import testimonialsImage from "@/assets/testimonials.jpg";

export function TestimonialsSection() {
  const testimonials = [
    {
      text: "Depois desse curso, parei de ter medo de vender no WhatsApp. Tudo ficou mais simples e prático!",
      author: "Camila S.",
      location: "Goiânia"
    },
    {
      text: "Só de evitar o bloqueio do meu número já valeu cada centavo. Estou vendendo mais com menos esforço!",
      author: "Rafael M.",
      location: "São Paulo"
    },
    {
      text: "Transformei o WhatsApp em minha principal ferramenta de vendas com esse conteúdo.",
      author: "Letícia T.",
      location: "Recife"
    }
  ];

  return (
    <section className="py-20 bg-darker-bg relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            O que nossos <span className="text-primary">alunos dizem</span>
          </h2>
          <div className="w-20 h-2 bg-gradient-primary rounded-full mx-auto" />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Testimonials */}
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 bg-card border-primary/20 hover:border-primary/40 transition-colors">
                <div className="space-y-4">
                  <div className="text-2xl text-primary">"</div>
                  <p className="text-gray-text text-lg leading-relaxed">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-foreground">— {testimonial.author}</p>
                      <p className="text-sm text-primary">{testimonial.location}</p>
                    </div>
                    <div className="flex text-primary">
                      {"★".repeat(5)}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          {/* Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-2xl" />
            <img 
              src={testimonialsImage} 
              alt="Pessoas de sucesso" 
              className="relative z-10 w-full rounded-3xl border border-primary/20"
            />
          </div>
        </div>
      </div>
    </section>
  );
}