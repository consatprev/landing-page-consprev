import { ArrowLeft, Briefcase, Target, Settings, BarChart3, CheckCircle, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const InterNegocios = () => {
  const services = [
    { 
      name: "BPO Financeiro", 
      description: "Terceirização completa de processos financeiros e administrativos",
      icon: BarChart3 
    },
    { 
      name: "Organização de Processos", 
      description: "Mapeamento, otimização e automatização de fluxos operacionais",
      icon: Settings 
    },
    { 
      name: "Mapeamento de Riscos", 
      description: "Identificação e mitigação de riscos operacionais e estratégicos",
      icon: Target 
    },
    { 
      name: "Implantação de Compliance", 
      description: "Desenvolvimento de políticas e procedimentos de conformidade",
      icon: CheckCircle 
    },
    { 
      name: "Consultoria Estratégica", 
      description: "Planejamento e execução de estratégias de crescimento",
      icon: TrendingUp 
    },
    { 
      name: "Gestão de Projetos", 
      description: "Coordenação e execução de projetos empresariais complexos",
      icon: Users 
    }
  ];

  const cases = [
    {
      title: "Redução de Custos Operacionais",
      description: "Conseguimos reduzir os custos operacionais em 40% em uma empresa de médio porte através da otimização de processos.",
      result: "40% de economia"
    },
    {
      title: "Implementação de Compliance",
      description: "Desenvolvemos um programa completo de compliance que eliminou 100% das não conformidades identificadas.",
      result: "100% de conformidade"
    },
    {
      title: "Automatização de Processos",
      description: "Automatizamos 80% dos processos manuais, aumentando a produtividade e reduzindo erros operacionais.",
      result: "80% de automatização"
    }
  ];

  const howWeWork = [
    {
      step: "1",
      title: "Diagnóstico",
      description: "Análise completa da situação atual da empresa e identificação de oportunidades"
    },
    {
      step: "2", 
      title: "Planejamento",
      description: "Desenvolvimento de estratégias personalizadas e cronograma de implementação"
    },
    {
      step: "3",
      title: "Execução",
      description: "Implementação das soluções com acompanhamento contínuo e ajustes necessários"
    },
    {
      step: "4",
      title: "Monitoramento",
      description: "Avaliação de resultados e otimização contínua dos processos implementados"
    }
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
            Transformamos processos, otimizamos resultados e impulsionamos o crescimento sustentável do seu negócio
          </p>
          <CTAButton variant="secondary" size="lg">
            Solicite uma Análise Gratuita
          </CTAButton>
        </div>
      </section>

      {/* Soluções para sua empresa */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Soluções para sua empresa</h3>
            <p className="text-lg text-gray-600">
              Oferecemos soluções completas de consultoria empresarial, focadas na otimização de processos, 
              redução de custos e crescimento sustentável.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-gray-50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-gray-700 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Cases de Sucesso */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Cases de Sucesso
          </h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {cases.map((case_, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-gray-700 mb-2">{case_.result}</div>
                  <h4 className="font-semibold text-gray-800">{case_.title}</h4>
                </div>
                <p className="text-gray-600 text-sm text-center">{case_.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como atuamos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Como atuamos
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {howWeWork.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gray-700 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-gray-800 mb-2">{step.title}</h4>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sobre nós */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">Quem somos</h3>
                <p className="text-gray-600 mb-6">
                  A InterNegócios Soluções é especializada em consultoria empresarial, oferecendo 
                  soluções inovadoras e personalizadas para empresas que buscam crescimento sustentável 
                  e excelência operacional.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-700 mr-3" />
                    <span className="text-gray-600">Mais de 15 anos de experiência</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-700 mr-3" />
                    <span className="text-gray-600">Consultores especializados</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-gray-700 mr-3" />
                    <span className="text-gray-600">Metodologia comprovada</span>
                  </div>
                </div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossa Missão</h4>
                <p className="text-gray-600 mb-4">
                  Transformar organizações através de soluções estratégicas que promovem 
                  eficiência, crescimento e sustentabilidade empresarial.
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossos Valores</h4>
                <p className="text-gray-600">
                  Excelência, inovação, transparência e compromisso com os resultados 
                  dos nossos clientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-gray-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Pronto para transformar seu negócio?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não deixe oportunidades de crescimento passarem despercebidas. 
            Conte com nossa consultoria especializada para alavancar seus resultados e otimizar seus processos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="whatsapp" size="lg">
              Falar com Consultor
            </CTAButton>
            <CTAButton variant="secondary" size="lg">
              Solicitar Diagnóstico
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 InterNegócios Soluções. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Uma empresa do Grupo ConsAt'preV</p>
        </div>
      </footer>
    </div>
  );
};

export default InterNegocios;