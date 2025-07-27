import { CTAButton } from "@/components/ui/cta-button";
import { CheckCircle, AlertTriangle } from "lucide-react";

export const FinalCTA = () => {
  const whatsappMessage = encodeURIComponent(
    "Olá! Quero verificar se minha empresa está 100% em conformidade com a lei. Solicito uma análise gratuita."
  );
  const whatsappNumber = "5511999999999"; // Substitua pelo número real

  const risks = [
    "Multas trabalhistas inesperadas",
    "Processos por irregularidades",
    "Problemas com fiscalizações",
    "Perda de benefícios previdenciários"
  ];

  const benefits = [
    "Tranquilidade jurídica total",
    "Prevenção de multas e processos",
    "Otimização de custos trabalhistas",
    "Assessoria especializada contínua"
  ];

  return (
    <section id="cta-final" className="py-20 bg-gradient-to-br from-primary to-secondary text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Título Principal */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Sua empresa está <span className="text-secondary-light">100% em conformidade</span> com a lei?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-gray-100">
              Descubra agora e evite problemas futuros!
            </p>
          </div>

          {/* Comparação de Riscos vs Benefícios */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Riscos */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-300 mr-3" />
                <h3 className="text-2xl font-bold">Sem nossa assessoria:</h3>
              </div>
              <ul className="space-y-3">
                {risks.map((risk, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-100">{risk}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefícios */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                <CheckCircle className="w-8 h-8 text-secondary-light mr-3" />
                <h3 className="text-2xl font-bold">Com a ConsAt'preV:</h3>
              </div>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-secondary-light rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-gray-100">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Urgência e Escassez */}
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-400 text-black px-6 py-3 rounded-full font-bold mb-6 animate-pulse">
              🚨 ANÁLISE GRATUITA - VAGAS LIMITADAS
            </div>
            <p className="text-lg text-gray-100 mb-2">
              Apenas <strong className="text-secondary-light">15 análises gratuitas</strong> por mês
            </p>
            <p className="text-sm text-gray-200">
              Não deixe para depois. Sua tranquilidade não pode esperar.
            </p>
          </div>

          {/* CTAs Principais */}
          <div className="text-center">
            <div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-8">
              <CTAButton
                variant="whatsapp"
                size="lg"
                href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                className="bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-pulse"
              >
                📱 SOLICITAR ANÁLISE GRATUITA
              </CTAButton>
              
              <div className="text-center md:text-left">
                <div className="text-sm text-gray-200">ou ligue agora:</div>
                <CTAButton
                  variant="phone"
                  size="lg"
                  href="tel:+5511999999999"
                  className="bg-white/20 hover:bg-white/30 text-white border-2 border-white"
                >
                  📞 (11) 9999-9999
                </CTAButton>
              </div>
            </div>

            {/* Garantias */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-200">
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-secondary-light" />
                Análise 100% gratuita
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-secondary-light" />
                Sem compromisso
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-secondary-light" />
                Resposta em 24h
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-secondary-light" />
                15 anos de experiência
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};