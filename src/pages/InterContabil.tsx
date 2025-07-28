import { ArrowLeft, Calculator, FileText, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const InterContabil = () => {
  const services = [
    { name: "Contabilidade Geral", description: "Escrituração e demonstrações contábeis" },
    { name: "Folha de Pagamento", description: "Gestão completa de recursos humanos" },
    { name: "Tributos", description: "Planejamento e gestão tributária" },
    { name: "Consultoria Fiscal", description: "Orientação em obrigações fiscais" }
  ];

  return (
    <div className="min-h-screen bg-red-50">
      {/* Header */}
      <header className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-white hover:text-red-100 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para ConsAt'preV
          </Link>
          <h1 className="text-2xl font-bold">InterContábil</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Calculator className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contabilidade e Finanças Empresariais
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Soluções contábeis completas para o crescimento sustentável do seu negócio
          </p>
          <CTAButton variant="secondary" size="lg">
            Solicite uma Proposta
          </CTAButton>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-8">
              A InterContábil oferece serviços contábeis especializados, combinando expertise técnica 
              com tecnologia avançada para otimizar a gestão financeira das empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <FileText className="w-12 h-12 text-red-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Sua contabilidade está em dia?
          </h3>
          <p className="text-xl mb-8">
            Conte com nossa expertise para otimizar suas finanças
          </p>
          <CTAButton variant="whatsapp" size="lg">
            Falar com Contador
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InterContábil. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default InterContabil;