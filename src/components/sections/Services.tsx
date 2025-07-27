import { Building2, User, Globe, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export const Services = () => {
  const [activeCarousel, setActiveCarousel] = useState({
    empresas: 0,
    cidadao: 0,
    geral: 0
  });

  const servicosEmpresas = [
    {
      title: "Compliance Trabalhista",
      description: "Adequação completa às normas trabalhistas vigentes",
      benefits: ["Auditoria trabalhista", "Regularização de documentos", "Prevenção de multas"]
    },
    {
      title: "Gestão de Folha de Pagamento",
      description: "Administração completa da folha com segurança jurídica",
      benefits: ["Cálculos precisos", "Controle de obrigações", "Relatórios gerenciais"]
    },
    {
      title: "Defesa em Processos",
      description: "Representação especializada em ações trabalhistas",
      benefits: ["Defesa técnica", "Acordos estratégicos", "Redução de riscos"]
    },
    {
      title: "Consultoria Previdenciária",
      description: "Orientação sobre benefícios e obrigações previdenciárias",
      benefits: ["GFIP e GPS", "Certificado digital", "Perícias técnicas"]
    },
    {
      title: "Terceirização Segura",
      description: "Estruturação legal de contratos de terceirização",
      benefits: ["Contratos seguros", "Due diligence", "Compliance contínuo"]
    }
  ];

  const servicosCidadao = [
    {
      title: "Aposentadorias",
      description: "Assessoria completa para todos os tipos de aposentadoria",
      benefits: ["Tempo de contribuição", "Aposentadoria especial", "Revisões de benefício"]
    },
    {
      title: "Auxílios e Pensões",
      description: "Solicitação e acompanhamento de benefícios",
      benefits: ["Auxílio-doença", "Pensão por morte", "Auxílio-acidente"]
    },
    {
      title: "Ações Trabalhistas",
      description: "Defesa dos seus direitos trabalhistas",
      benefits: ["Horas extras", "Verbas rescisórias", "Assédio moral"]
    },
    {
      title: "Planejamento Previdenciário",
      description: "Estratégia personalizada para sua aposentadoria",
      benefits: ["Simulações", "Otimização de contribuições", "Tempo ideal"]
    }
  ];

  const servicosGerais = [
    {
      title: "Perícias Médicas",
      description: "Avaliação técnica especializada",
      benefits: ["Perícias INSS", "Assistência técnica", "Laudos especializados"]
    },
    {
      title: "Mediação e Conciliação",
      description: "Resolução extrajudicial de conflitos",
      benefits: ["Acordos rápidos", "Custos reduzidos", "Relações preservadas"]
    },
    {
      title: "Regularização Documental",
      description: "Organização e adequação de documentos",
      benefits: ["CTPS digital", "Certidões", "Cadastros atualizados"]
    },
    {
      title: "Consultoria Especializada",
      description: "Orientação jurídica personalizada",
      benefits: ["Análise de caso", "Estratégias legais", "Acompanhamento contínuo"]
    }
  ];

  const carousels = [
    { 
      id: 'empresas', 
      title: 'Para Empresas', 
      icon: Building2, 
      services: servicosEmpresas, 
      color: 'primary' 
    },
    { 
      id: 'cidadao', 
      title: 'Para o Cidadão', 
      icon: User, 
      services: servicosCidadao, 
      color: 'secondary' 
    },
    { 
      id: 'geral', 
      title: 'Interesse Geral', 
      icon: Globe, 
      services: servicosGerais, 
      color: 'primary' 
    }
  ];

  const nextSlide = (carouselId: string) => {
    setActiveCarousel(prev => ({
      ...prev,
      [carouselId]: (prev[carouselId as keyof typeof prev] + 1) % carousels.find(c => c.id === carouselId)!.services.length
    }));
  };

  const prevSlide = (carouselId: string) => {
    setActiveCarousel(prev => ({
      ...prev,
      [carouselId]: prev[carouselId as keyof typeof prev] === 0 
        ? carousels.find(c => c.id === carouselId)!.services.length - 1 
        : prev[carouselId as keyof typeof prev] - 1
    }));
  };

  return (
    <section id="servicos" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Soluções completas e especializadas para cada necessidade
          </p>
        </div>

        <div className="space-y-16">
          {carousels.map((carousel) => {
            const IconComponent = carousel.icon;
            const currentIndex = activeCarousel[carousel.id as keyof typeof activeCarousel];
            const currentService = carousel.services[currentIndex];

            return (
              <div key={carousel.id} className="bg-card rounded-2xl p-8 shadow-soft">
                {/* Header do Carrossel */}
                <div className="flex items-center mb-8">
                  <div className={`w-12 h-12 bg-gradient-to-br from-${carousel.color} to-${carousel.color}-light rounded-lg flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{carousel.title}</h3>
                </div>

                {/* Carrossel de Serviços */}
                <div className="relative">
                  <div className="flex items-center justify-between">
                    {/* Botão Anterior */}
                    <button
                      onClick={() => prevSlide(carousel.id)}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5 text-primary" />
                    </button>

                    {/* Conteúdo do Serviço */}
                    <div className="flex-1 mx-8">
                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {currentService.title}
                        </h4>
                        <p className="text-muted-foreground mb-4">
                          {currentService.description}
                        </p>
                        
                        {/* Benefícios */}
                        <div className="flex flex-wrap justify-center gap-2">
                          {currentService.benefits.map((benefit, idx) => (
                            <span 
                              key={idx}
                              className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                            >
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Botão Próximo */}
                    <button
                      onClick={() => nextSlide(carousel.id)}
                      className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                    >
                      <ChevronRight className="w-5 h-5 text-primary" />
                    </button>
                  </div>

                  {/* Indicadores */}
                  <div className="flex justify-center mt-6 space-x-2">
                    {carousel.services.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveCarousel(prev => ({ ...prev, [carousel.id]: idx }))}
                        className={`w-3 h-3 rounded-full transition-colors ${
                          idx === currentIndex ? 'bg-primary' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};