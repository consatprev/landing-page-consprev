import { ArrowLeft, Heart, Stethoscope, UserCheck, ClipboardCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const InterMed = () => {
  const services = [
    { name: "Exames Ocupacionais", description: "Admissionais, periódicos, demissionais" },
    { name: "PCMSO", description: "Programa de Controle Médico de Saúde Ocupacional" },
    { name: "Laudos Médicos", description: "PPP, ASO e documentos especializados" },
    { name: "Medicina do Trabalho", description: "Consultoria médica ocupacional" }
  ];

  return (
    <div className="min-h-screen bg-teal-50">
      {/* Header */}
      <header className="bg-teal-600 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <Link to="/" className="flex items-center text-white hover:text-teal-100 transition-colors">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Voltar para ConsAt'preV
          </Link>
          <h1 className="text-2xl font-bold">InterMed</h1>
        </div>
      </header>

      {/* Hero */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-20 h-20 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Medicina Ocupacional Especializada
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Cuidando da saúde dos trabalhadores com excelência médica e tecnologia
          </p>
          <CTAButton variant="secondary" size="lg">
            Agendar Consulta
          </CTAButton>
        </div>
      </section>

      {/* Sobre */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Quem Somos</h3>
            <p className="text-lg text-gray-600 mb-8">
              A InterMed é especializada em medicina ocupacional, oferecendo serviços médicos 
              de alta qualidade para empresas e trabalhadores, garantindo saúde e bem-estar no ambiente de trabalho.
            </p>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <Stethoscope className="w-12 h-12 text-teal-600 mb-4" />
                <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            A saúde dos seus colaboradores em primeiro lugar
          </h3>
          <p className="text-xl mb-8">
            Conte com nossa equipe médica especializada em saúde ocupacional
          </p>
          <CTAButton variant="whatsapp" size="lg">
            Falar com Médico
          </CTAButton>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InterMed - Medicina Ocupacional. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default InterMed;