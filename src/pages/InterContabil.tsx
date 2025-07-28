import { ArrowLeft, Calculator, FileText, TrendingUp, Users, CheckCircle, Star, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const InterContabil = () => {
  const services = [
    { 
      name: "Escrituração Contábil", 
      description: "Registro completo de operações financeiras e demonstrações contábeis",
      icon: FileText 
    },
    { 
      name: "Folha de Pagamento", 
      description: "Gestão completa de RH, encargos sociais e obrigações trabalhistas",
      icon: Users 
    },
    { 
      name: "Consultoria Tributária", 
      description: "Planejamento fiscal, apuração de impostos e compliance tributário",
      icon: Calculator 
    },
    { 
      name: "Relatórios Financeiros", 
      description: "Análises gerenciais, DRE, balanços e indicadores de performance",
      icon: TrendingUp 
    },
    { 
      name: "Abertura de Empresas", 
      description: "Constituição societária, registros e licenças necessárias",
      icon: FileText 
    },
    { 
      name: "Consultoria Empresarial", 
      description: "Orientação estratégica para crescimento e otimização fiscal",
      icon: DollarSign 
    }
  ];

  const differentials = [
    "Atendimento personalizado e humanizado",
    "Precisão absoluta nos números e prazos",
    "Atuação proativa na gestão tributária",
    "Tecnologia avançada para maior eficiência",
    "Consultoria estratégica para crescimento"
  ];

  const benefits = [
    {
      title: "Economia Tributária",
      description: "Planejamento fiscal inteligente que pode reduzir até 40% da carga tributária"
    },
    {
      title: "Gestão Eficiente",
      description: "Organização financeira que melhora a tomada de decisões empresariais"
    },
    {
      title: "Compliance Total",
      description: "Conformidade com todas as obrigações fiscais e trabalhistas"
    }
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
            Soluções contábeis completas e estratégicas para o crescimento sustentável do seu negócio
          </p>
          <CTAButton variant="secondary" size="lg">
            Solicite uma Proposta Gratuita
          </CTAButton>
        </div>
      </section>

      {/* O que fazemos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">O que fazemos</h3>
            <p className="text-lg text-gray-600">
              Oferecemos serviços contábeis completos com foco na gestão estratégica e crescimento empresarial. 
              Nossa equipe especializada garante precisão, agilidade e conformidade em todos os processos.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-red-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-red-600 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Resultados que transformam negócios
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <TrendingUp className="w-12 h-12 text-red-600 mx-auto mb-4" />
                <h4 className="font-semibold text-gray-800 mb-3">{benefit.title}</h4>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Nossos Diferenciais
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-6">Por que escolher a InterContábil?</h4>
                <div className="space-y-4">
                  {differentials.map((differential, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-red-600 mr-3" />
                      <p className="text-gray-600">{differential}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-red-50 p-6 rounded-xl">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossa Missão</h4>
                <p className="text-gray-600 mb-4">
                  Simplificar a gestão contábil e fiscal das empresas, oferecendo soluções personalizadas 
                  que geram valor e promovem o crescimento sustentável.
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Compromisso</h4>
                <p className="text-gray-600">
                  Manter nossos clientes sempre em conformidade legal, com relatórios precisos e 
                  orientação estratégica para maximizar resultados.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16 bg-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">
              Fale com um Contador
            </h3>
            <p className="text-lg text-gray-600 mb-8">
              Precisa de orientação contábil? Nossa equipe está pronta para ajudar sua empresa 
              a crescer com segurança fiscal e financeira.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Análise Gratuita da sua Situação Fiscal
              </h4>
              <p className="text-gray-600 mb-6">
                Oferecemos uma consultoria inicial gratuita para identificar oportunidades 
                de economia e melhorias na gestão contábil da sua empresa.
              </p>
              <CTAButton variant="whatsapp" size="lg" className="w-full sm:w-auto">
                Agendar Consultoria Gratuita
              </CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-red-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Sua contabilidade está otimizada?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não deixe oportunidades de economia passarem despercebidas. 
            Conte com nossa expertise para maximizar seus resultados financeiros.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="whatsapp" size="lg">
              Falar com Contador
            </CTAButton>
            <CTAButton variant="secondary" size="lg">
              Solicitar Proposta
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InterContábil. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Uma empresa do Grupo ConsAt'preV</p>
        </div>
      </footer>
    </div>
  );
};

export default InterContabil;