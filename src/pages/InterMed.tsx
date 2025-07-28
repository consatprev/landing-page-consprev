import { ArrowLeft, Heart, Stethoscope, UserCheck, ClipboardCheck, CheckCircle, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const InterMed = () => {
  const services = [
    { 
      name: "Exames Admissionais", 
      description: "Avaliação médica completa para novos colaboradores",
      icon: UserCheck 
    },
    { 
      name: "Exames Periódicos", 
      description: "Monitoramento contínuo da saúde ocupacional dos trabalhadores",
      icon: Calendar 
    },
    { 
      name: "PCMSO", 
      description: "Programa de Controle Médico de Saúde Ocupacional personalizado",
      icon: ClipboardCheck 
    },
    { 
      name: "Laudos Médicos", 
      description: "PPP, ASO e documentos médicos especializados",
      icon: ClipboardCheck 
    },
    { 
      name: "Campanhas de Saúde", 
      description: "Programas de prevenção e promoção da saúde no trabalho",
      icon: Heart 
    },
    { 
      name: "Consultoria Ocupacional", 
      description: "Orientação médica especializada em saúde do trabalhador",
      icon: Stethoscope 
    }
  ];

  const team = [
    {
      name: "Dr. João Silva",
      specialty: "Medicina do Trabalho",
      experience: "CRM 12345 - 15 anos de experiência"
    },
    {
      name: "Dra. Maria Santos",
      specialty: "Medicina Ocupacional",
      experience: "CRM 67890 - 12 anos de experiência"
    },
    {
      name: "Dr. Carlos Lima",
      specialty: "Cardiologia Ocupacional",
      experience: "CRM 54321 - 18 anos de experiência"
    }
  ];

  const benefits = [
    "Equipe médica especializada e qualificada",
    "Atendimento personalizado para cada empresa",
    "Tecnologia avançada em exames ocupacionais",
    "Relatórios detalhados e pontuais",
    "Compliance total com normas regulamentadoras"
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
            Cuidando da saúde dos trabalhadores com excelência médica, tecnologia avançada e compromisso com o bem-estar
          </p>
          <CTAButton variant="secondary" size="lg">
            Agendar Consulta Gratuita
          </CTAButton>
        </div>
      </section>

      {/* Nossa Missão */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Nossa Missão</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Compromisso com a Saúde</h4>
                <p className="text-gray-600 mb-6">
                  A InterMed tem como missão promover e preservar a saúde dos trabalhadores, 
                  contribuindo para ambientes de trabalho mais seguros e produtivos através 
                  de serviços médicos ocupacionais de excelência.
                </p>
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-teal-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossos Valores</h4>
                <ul className="space-y-2 text-gray-600">
                  <li>• Ética e transparência em todos os procedimentos</li>
                  <li>• Excelência técnica e científica</li>
                  <li>• Humanização do atendimento médico</li>
                  <li>• Inovação e melhoria contínua</li>
                  <li>• Responsabilidade social e ambiental</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Oferecidos */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Serviços Oferecidos
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-teal-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Equipe Médica */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossa Equipe Médica
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {team.map((doctor, index) => (
              <div key={index} className="text-center bg-teal-50 p-6 rounded-xl">
                <div className="w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="w-10 h-10 text-white" />
                </div>
                <h4 className="font-semibold text-gray-800 mb-2">{doctor.name}</h4>
                <p className="text-teal-600 font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-gray-600">{doctor.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atendimento Empresarial */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">
              Atendimento Empresarial
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Como Funciona</h4>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">1</div>
                    <div>
                      <p className="font-medium text-gray-800">Análise das Necessidades</p>
                      <p className="text-sm text-gray-600">Avaliamos o perfil da empresa e dos colaboradores</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">2</div>
                    <div>
                      <p className="font-medium text-gray-800">Proposta Personalizada</p>
                      <p className="text-sm text-gray-600">Elaboramos um plano de saúde ocupacional específico</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-teal-600 text-white rounded-full flex items-center justify-center text-sm font-bold mr-3 mt-1">3</div>
                    <div>
                      <p className="font-medium text-gray-800">Implementação</p>
                      <p className="text-sm text-gray-600">Executamos os serviços com acompanhamento contínuo</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Benefícios para sua Empresa</h4>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    Redução do absenteísmo
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    Conformidade com NRs
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    Melhoria da produtividade
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    Redução de custos com afastamentos
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-teal-600 mr-3" />
                    Ambiente de trabalho mais saudável
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            A saúde dos seus colaboradores em primeiro lugar
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não comprometa a saúde e segurança da sua equipe. 
            Conte com nossa equipe médica especializada para garantir o bem-estar ocupacional.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="whatsapp" size="lg">
              Falar com Médico
            </CTAButton>
            <CTAButton variant="secondary" size="lg">
              Agendar Visita
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InterMed - Medicina Ocupacional. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Uma empresa do Grupo ConsAt'preV</p>
        </div>
      </footer>
    </div>
  );
};

export default InterMed;