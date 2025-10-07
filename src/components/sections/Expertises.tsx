import { Scale, Users, HandHeart } from "lucide-react";

export const Expertises = () => {
  const expertises = [
    {
      icon: Scale,
      title: "Área Trabalhista",
      highlights: [
        "Revisão de cálculos rescisórios", 
        "Conciliações e acordos extrajudiciais", 
        "Regularizações", 
        "Apoio técnico para postular ou se defender em juízo (sem advogado)"
      ]
    },
    {
      icon: Users,
      title: "Área Previdenciária", 
      highlights: [
        "Orientação para perícias médicas",
        "Revisões de aposentadorias",
        "Aposentadorias", 
        "Benefícios INSS"
      ]
    },
    {
      icon: HandHeart,
      title: "Intermediação e Agenciamento – Serviços e Negócios",
      highlights: [
        "Intermediação jurídica para resolução de conflitos", 
        "Agenciamento de serviços e negócios", 
        "Conciliações e acordos extrajudiciais",
        "Facilitação ou representação para soluções de serviços e negócios",
        "Preparação de documentos",
        "Orientação processual e apoio técnico ao jus postulandi"
      ]
    }
  ];

  return (
    <section id="areas-atuacao" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossas Áreas de Atuação
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Três frentes especializadas para atender todas as suas necessidades jurídicas
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertises.map((expertise, index) => {
            const IconComponent = expertise.icon;
            return (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-soft hover:shadow-medium transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex flex-col items-center text-center">
                  {/* Ícone */}
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>

                  {/* Título */}
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {expertise.title}
                  </h3>

                  {/* Descrição 
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {expertise.description}
                  </p>
*/}
                  {/* Highlights */}
                  <div className="space-y-2 w-full">
                    {expertise.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-center">
                        <div className="w-2 h-2 bg-secondary rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </div>
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