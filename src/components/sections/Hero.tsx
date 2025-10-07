import { CTAButton } from "@/components/ui/cta-button";
import heroImage from "@/assets/hero-image.jpg";

export const Hero = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Gostaria de solicitar uma análise gratuita da minha situação trabalhista/previdenciária."
  );
  const whatsappNumber = "5513981158016"; // Substitua pelo número real

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image com Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Assessoria trabalhista profissional"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-secondary/80"></div>
      </div>

      {/* Conteúdo Principal */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Logo/Título Principal */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Cons<span className="text-secondary">At'</span>preV
          </h1>

          {/* Título da Proposta */}
          <h2 className="text-2xl md:text-4xl font-semibold mb-4 leading-relaxed">
            Proteção Preventiva dos Direitos e Interesses de Pessoas Físicas e Jurídicas - Assessoria Especializada
          </h2>

          {/* Subtítulo */}
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl mx-auto">
            Consultoria em: Trabalhista e Previdenciária | Saúde e Segurança do Trabalho | Serviços e Negócios
          </p>

          {/* CTA Principal */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <CTAButton
              variant="whatsapp"
              size="lg"
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              
            >
              Solicite uma análise gratuita
            </CTAButton>
            
            <button
              onClick={() => document.getElementById('areas-atuacao')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Nossas Áreas de Atuação
            </button>

            <CTAButton
              variant="secondary"
              size="lg"
              onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Conheça nossos serviços
            </CTAButton>
          </div>

          {/* Indicadores de Confiança */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-gray-200">
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              +100% casos resolvidos
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              20 anos de experiência
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              Resultados garantidos
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};