import { Description } from "@radix-ui/react-toast";
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
    title: "Trabalho e Previdência",
    description: "Oferecemos suporte técnico e informação detalhada para garantir que sua empresa cumpra os deveres previdenciários e aproveite todos os direitos. Acompanhamos requerimentos, revisões e asseguramos os melhores resultados.",
    benefits: ["Cálculos precisos", "Controle de obrigações", "Relatórios gerenciais"]
  },
  {
    title: "Saúde e Segurança do Trabalho",
    description: "Elaboramos PGR, Laudos como PCMSO, LTCAT, LTI, LTP e Declaração de Inexistência de Riscos. Auxiliamos no controle de EPIs e na manutenção da saúde dos colaboradores, garantindo comodidade e cumprimento das obrigações do e-Social e do Fisco.",
    benefits: ["Auditoria trabalhista", "Regularização de documentos", "Prevenção de multas"]
  },
  {
    title: "Intermediação e Agenciamento de Serviços e Negócios",
    description: "Conectando pequenas e médias empresas a soluções estratégicas, profissionais especializados e oportunidades comerciais que impulsionam resultados com segurança jurídica e eficiência operacional",
    benefits: ["Eficiência operacional", "Soluções estratégicas", "Segurança jurídica"]
  },
  {
    title: "Contabilidade Geral e Fiscal",
    description: "Administramos folha de pagamento, benefícios e obrigações trabalhistas, orientando sobre legislação e estratégias para evitar disputas. Realizamos auditorias contábeis e serviços personalizados para garantir conformidade e transparência.",
    benefits: ["Defesa técnica", "Acordos estratégicos", "Redução de riscos"]
  }
];


  // const servicosCidadao = [
  //   {
  //     title: "Direitos trabalhistas",
  //     description: "Atendimento personalizado para resolução de conflitos.",
  //     benefits: ["Tempo de contribuição", "Aposentadoria especial", "Revisões de benefício"]
  //   },
  //   {
  //     title: "Auxílios e Pensões",
  //     description: "Solicitação e acompanhamento de benefícios",
  //     benefits: ["Auxílio-doença", "Pensão por morte", "Auxílio-acidente"]
  //   },
  //   {
  //     title: "Apoio ao Jus Postulandi",
  //     description: "Empoderamento jurídico para autodefesa.",
  //     benefits: ["Horas extras", "Verbas rescisórias", "Assédio moral"]
  //   },
  //   {
  //     title: "Direitos Previdenciários",
  //     description: "Otimização de benefícios e acompanhamento de processos.",
  //     benefits: ["Simulações", "Otimização de contribuições", "Tempo ideal"]
  //   }
  // ];

 const servicosCidadao = [
  {
    title: "Proteção aos Direitos Trabalhistas",
    description: "Atendimento especializado para garantir seus direitos no trabalho e resolver conflitos de forma segura.",
    benefits: [
      "Cálculo e averbação do tempo de contribuição",
      "Orientação sobre aposentadoria especial e comum",
      "Revisões de benefícios trabalhistas e previdenciários"
    ]
  },
  {
    title: "Pensões, Auxílios e Benefícios Sociais",
    description: "Suporte completo para solicitar, acompanhar e manter seus benefícios sociais de forma eficaz  junto ao INSS ou previdência privada",
    benefits: [
      "Requerimento e prorrogação de auxílio-doença",
      "Concessão e manutenção de pensão por morte",
      "Solicitação de auxílio-acidente e acompanhamento"
    ]
  },
  {
    title: "Direitos Previdenciários e Planejamento",
    description: "Otimização de benefícios e acompanhamento detalhado dos processos previdenciários para decisões mais assertivas.",
    benefits: [
      "Simulações de aposentadoria e cenários futuros",
      "Planejamento e otimização de contribuições",
      "Definição do tempo ideal para requerer benefícios"
    ]
  },
  {
    title: "Apoio Jurídico ao Jus Postulandi (sem advogado)",
    description: "Empoderamento legal para que você possa se defender e reivindicar seus direitos de forma autônoma.",
    benefits: [
      "Orientação em pedidos de horas extras e adicionais",
      "Cálculo e reivindicação de verbas rescisórias",
      "Apoio em casos de assédio moral e direitos violados"
    ]
  },
];


 const servicosGerais = [
  {
    title: "Intermediação Jurídica",
    description: "Resolvemos conflitos e formalizamos parcerias de forma eficiente e transparente, incluindo acordos familiares e sucessórios, sempre buscando soluções justas e vantajosas.",
    benefits: [
      "Intermediação de acordos e conciliações",
      "Consultoria em questões familiares e sucessórias",
      "Laudos e perícias técnicas"
    ]
  },
  {
    title: "Mediação e Conciliação",
    description: "Resolução extrajudicial de conflitos de maneira ágil e segura, preservando relações e evitando processos longos.",
    benefits: [
      "Acordos rápidos e eficientes",
      "Redução de custos judiciais",
      "Preservação de relações pessoais e empresariais"
    ]
  },
  {
    title: "Consultoria Processual",
    description: "Orientação clara sobre etapas processuais e documentação necessária, garantindo que tudo esteja correto e atualizado.",
    benefits: [
      "Atualização e conferência de cadastros",
      "Auxílio na emissão de certidões",
      "Gestão de CTPS digital"
    ]
  },
  {
    title: "Terceirização de Serviços",
    description: "Parcerias estratégicas com fornecedores confiáveis para oferecer soluções especializadas e acompanhamento contínuo.",
    benefits: [
      "Análise de casos específicos",
      "Estratégias jurídicas personalizadas",
      "Acompanhamento completo de serviços terceirizados"
    ]
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
                  <div className={`w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mr-4`}>
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