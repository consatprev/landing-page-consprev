import { ArrowLeft, Shield, HardHat, FileCheck, Users, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import { CTAButton } from "@/components/ui/cta-button";

const BenSeg = () => {
  const services = [
    { 
      name: "PPRA", 
      description: "Programa de Prevenção de Riscos Ambientais completo",
      icon: FileCheck 
    },
    { 
      name: "Laudos Técnicos", 
      description: "LTCAT, PPP, PCMSO e outros documentos especializados",
      icon: FileCheck 
    },
    { 
      name: "Treinamentos NR", 
      description: "NR-10, NR-35, CIPA e capacitações obrigatórias",
      icon: Users 
    },
    { 
      name: "Inspeções", 
      description: "Análise de conformidade e segurança preventiva",
      icon: Shield 
    },
    { 
      name: "Assessoria Preventiva", 
      description: "Consultoria contínua em segurança do trabalho",
      icon: HardHat 
    },
    { 
      name: "Medicina do Trabalho", 
      description: "Exames ocupacionais e acompanhamento médico",
      icon: Users 
    }
  ];

  const benefits = [
    "Redução de acidentes de trabalho em até 80%",
    "Conformidade total com normas regulamentadoras",
    "Economia em multas e penalidades",
    "Melhoria do clima organizacional",
    "Redução de afastamentos por doenças ocupacionais"
  ];

  const testimonials = [
    {
      name: "Carlos Silva",
      company: "Metalúrgica ABC",
      text: "Com a BenSeg, conseguimos implementar um programa de segurança que reduziu nossos acidentes em 90%. Excelente trabalho!"
    },
    {
      name: "Ana Costa",
      company: "Construção Delta",
      text: "O treinamento de NR-35 foi fundamental para nossa equipe. Profissionais competentes e didática excepcional."
    }
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
            Proteção integral para sua empresa e colaboradores com soluções completas em segurança ocupacional
          </p>
          <CTAButton variant="secondary" size="lg">
            Solicite uma Consultoria Gratuita
          </CTAButton>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Quem Somos</h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossa História</h4>
                <p className="text-gray-600 mb-6">
                  A BenSeg nasceu da necessidade do mercado por soluções especializadas em segurança e saúde do trabalho. 
                  Com mais de 10 anos de experiência, atendemos empresas de todos os portes em diversos segmentos.
                </p>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Missão</h4>
                <p className="text-gray-600 mb-6">
                  Garantir ambientes de trabalho seguros e saudáveis, promovendo o bem-estar dos colaboradores 
                  e a conformidade legal das empresas.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-800 mb-4">Nossos Valores</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Compromisso com a segurança
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Excelência técnica
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Atendimento personalizado
                  </li>
                  <li className="flex items-center text-gray-600">
                    <CheckCircle className="w-5 h-5 text-yellow-500 mr-3" />
                    Inovação constante
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <IconComponent className="w-12 h-12 text-yellow-500 mb-4" />
                  <h4 className="font-semibold text-gray-800 mb-2">{service.name}</h4>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-bold text-gray-800 mb-8">
              Por que escolher a BenSeg?
            </h3>
            <p className="text-lg text-gray-600 mb-12">
              Nossos clientes experimentam resultados comprovados em segurança e conformidade
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-yellow-50 p-6 rounded-lg">
                  <CheckCircle className="w-8 h-8 text-yellow-500 mx-auto mb-4" />
                  <p className="text-gray-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-12">
            O que nossos clientes dizem
          </h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <p className="font-semibold text-gray-800">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-yellow-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">
            Sua empresa está 100% segura?
          </h3>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não deixe a segurança dos seus colaboradores para depois. 
            Fale conosco e garanta a proteção total do seu ambiente de trabalho.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <CTAButton variant="whatsapp" size="lg">
              Falar com Especialista
            </CTAButton>
            <CTAButton variant="secondary" size="lg">
              Solicitar Orçamento
            </CTAButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 BenSeg - Segurança do Trabalho. Todos os direitos reservados.</p>
          <p className="text-sm text-gray-400 mt-2">Uma empresa do Grupo ConsAt'preV</p>
        </div>
      </footer>
    </div>
  );
};

export default BenSeg;