import { ArrowLeft, Shield, HardHat, FileCheck, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const BenSeg = () => {
  const services = [
    { name: "PPRA", description: "Programa de Prevenção de Riscos Ambientais" },
    { name: "Laudos Técnicos", description: "LTCAT, PPP e outros documentos" },
    { name: "Treinamentos", description: "NR-10, NR-35, CIPA e mais" },
    { name: "Inspeções", description: "Análise de conformidade e segurança" }
  ];

  return (
    <div className="min-h-screen bg-yellow-50">
      {/* Header */}
      <header className="bg-yellow-500 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-white hover:text-yellow-100 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para ConsAt'preV
          </Link>
          <h1 className="text-2xl font-bold">BenSeg</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Segurança do Trabalho Especializada
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Proteção integral para sua empresa e colaboradores com soluções em segurança ocupacional
          </p>
          <CTAButton variant="secondary" size="lg">
            Solicite uma Consultoria
          </CTAButton>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-8">
              A BenSeg é especializada em segurança e saúde do trabalho, oferecendo soluções completas 
              para garantir o bem-estar dos colaboradores e a conformidade legal das empresas.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <HardHat className="w-12 h-12 text-yellow-500 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Sua empresa está segura?
          </h3>
          <p className="text-xl mb-8">
            Fale conosco e garanta a proteção total dos seus colaboradores
          </p>
          <CTAButton variant="whatsapp" size="lg">
            Falar com Especialista
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BenSeg - Segurança do Trabalho. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default BenSeg;