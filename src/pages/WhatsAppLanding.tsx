import { HeroSection } from "@/components/sections/HeroSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PainPointSection } from "@/components/sections/PainPointSection";
import { SolutionSection } from "@/components/sections/SolutionSection";
import { CourseContentSection } from "@/components/sections/CourseContentSection";
import { TargetAudienceSection } from "@/components/sections/TargetAudienceSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { SeriousTalkSection } from "@/components/sections/SeriousTalkSection";
import { AuthoritySection } from "@/components/sections/AuthoritySection";
import { FaqSection } from "@/components/sections/FaqSection";
import { FooterSection } from "@/components/sections/FooterSection";

const WhatsAppLanding = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 1. BLOCO - VENDER SOZINHO */}
      <HeroSection />
      
      {/* 2. BLOCO - DEPOIMENTOS */}
      <TestimonialsSection />
      
      {/* 3. BLOCO - DOR LATENTE PRINCIPAL */}
      <PainPointSection />
      
      {/* 4. BLOCO - TRANSIÇÃO DA DOR PARA A SOLUÇÃO */}
      {/* 5. BLOCO - PASSO A PASSO DA SOLUÇÃO DA DOR */}
      <SolutionSection />
      
      {/* 6. BLOCO - TUDO QUE VOCÊ VAI RECEBER */}
      <CourseContentSection />
      
      {/* 7. BLOCO - PARA QUEM SERVE */}
      <TargetAudienceSection />
      
      {/* 8. BLOCO - ANCORAGEM COM PREÇO */}
      {/* 9. BLOCO - VALOR (BOTÃO PARA COMPRAR) */}
      <PricingSection />
      
      {/* 10. BLOCO - CONVERSA SÉRIA */}
      <SeriousTalkSection />
      
      {/* 11. BLOCO - AUTORIDADE */}
      <AuthoritySection />
      
      {/* 12. BLOCO - VALOR (BOTÃO PARA COMPRAR) - Repetição no PricingSection */}
      
      {/* 13. BLOCO - FAQ */}
      <FaqSection />
      
      {/* 14. BLOCO - RODAPÉ */}
      <FooterSection />
    </div>
  );
};

export default WhatsAppLanding;