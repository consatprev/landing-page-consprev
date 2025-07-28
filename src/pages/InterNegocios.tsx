import { ArrowLeft, Briefcase, Target, Settings, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const InterNegocios = () => {
  const services = [
    { name: "BPO Empresarial", description: "Terceirização de processos de negócio" },
    { name: "Compliance", description: "Gestão de conformidade e riscos" },
    { name: "Organização de Processos", description: "Otimização e mapeamento de fluxos" },
    { name: "Consultoria Estratégica", description: "Planejamento e crescimento empresarial" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gray-700 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-white hover:text-gray-300 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para ConsAt'preV
          </Link>
          <h1 className="text-2xl font-bold">InterNegócios Soluções</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-gray-700 to-gray-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <Briefcase className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Consultoria e Gestão Empresarial
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transformamos processos e impulsionamos o crescimento do seu negócio
          </p>
          <CTAButton variant="secondary" size="lg">
            Solicite uma Análise
          </CTAButton>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-8">
              A InterNegócios Soluções é especializada em consultoria empresarial, oferecendo 
              soluções inovadoras para otimização de processos e crescimento sustentável.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Settings className="w-12 h-12 text-gray-700 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-xl mb-8">
            Conte com nossa consultoria especializada para alavancar seus resultados
          </p>
          <CTAButton variant="whatsapp" size="lg">
            Falar com Consultor
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InterNegócios Soluções. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default InterNegocios;