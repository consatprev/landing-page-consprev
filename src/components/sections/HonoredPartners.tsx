import { Building2, Briefcase, TrendingUp, Users } from "lucide-react";

export const HonoredPartners = () => {
  const institutionalPartners = [
    {
      name: "(Nome do Parceiro)",
      role: "Cargo/Função",
      location: "Cidade, Estado",
      category: "Institucional"
    }
  ];

  const professionalPartners = [
    {
      name: "Cáled Tarique Pereira",
      role: "Engenheiro de Controle e Automação",
      credential: "CREA ativo",
      location: "Santos, SP",
      category: "Profissional",
      description: "Técnico associado à ConsAt'preV - Consultoria & Assessoria em Gestão/Solução Estratégica",
      areas: [
        "Engenharia e Automação",
        "Desenvolvimento e Integração de Software"
      ],
      benefits: [
        "Soluções completas com gestão e execução técnica integrada",
        "Atendimento especializado com respaldo legal e profissional",
        "Economia e agilidade na contratação de serviços técnicos"
      ]
    }
  ];

  const marketingPartners = [
    {
      name: "(Nome do Parceiro)",
      role: "Especialista em Marketing",
      location: "Cidade, Estado",
      category: "Marketing"
    }
  ];

  const qvtPartners = [
    {
      name: "(Nome do Parceiro)",
      role: "Especialista em Qualidade de Vida",
      location: "Cidade, Estado",
      category: "QVT"
    }
  ];

  const allPartners = [
    ...institutionalPartners,
    ...professionalPartners,
    ...marketingPartners,
    ...qvtPartners
  ];

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Institucional":
        return Building2;
      case "Profissional":
        return Briefcase;
      case "Marketing":
        return TrendingUp;
      case "QVT":
        return Users;
      default:
        return Building2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Institucional":
        return "from-blue-500 to-blue-600";
      case "Profissional":
        return "from-purple-500 to-purple-600";
      case "Marketing":
        return "from-orange-500 to-orange-600";
      case "QVT":
        return "from-green-500 to-green-600";
      default:
        return "from-primary to-secondary";
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Honrados Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais e empresas que confiam e trabalham conosco
          </p>
        </div>

        {/* Seção Institucional */}
        {institutionalPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Building2 className="w-6 h-6 mr-2 text-blue-500" />
              Institucional
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {institutionalPartners.map((partner, index) => {
                const IconComponent = getCategoryIcon(partner.category);
                return (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                    {/* Espaço para foto/logo */}
                    <div className="mb-4 bg-muted rounded-lg p-8 text-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-xs italic">(Espaço reservado para foto/logo)</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(partner.category)} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{partner.role}</p>
                    <p className="text-xs text-muted-foreground">{partner.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Seção Profissional */}
        {professionalPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Briefcase className="w-6 h-6 mr-2 text-purple-500" />
              Profissional
            </h3>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-6">
              {professionalPartners.map((partner, index) => {
                const IconComponent = getCategoryIcon(partner.category);
                return (
                  <div key={index} className="bg-card p-8 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                    {/* Espaço para foto */}
                    <div className="mb-4 bg-muted rounded-lg p-12 text-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-xs italic">(Espaço reservado para foto)</p>
                    </div>
                    
                    <div className="flex items-start mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(partner.category)} rounded-lg flex items-center justify-center mr-4 flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground text-lg mb-1">{partner.name}</h4>
                        <p className="text-sm text-muted-foreground mb-1">{partner.role}</p>
                        {partner.credential && (
                          <p className="text-xs text-primary font-semibold">{partner.credential}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{partner.location}</p>
                      </div>
                    </div>

                    {partner.description && (
                      <div className="mb-4">
                        <p className="text-sm text-muted-foreground italic">{partner.description}</p>
                      </div>
                    )}

                    {partner.areas && partner.areas.length > 0 && (
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Áreas de Atuação Técnica:</h5>
                        <ul className="space-y-1">
                          {partner.areas.map((area, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                              {area}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {partner.benefits && partner.benefits.length > 0 && (
                      <div>
                        <h5 className="text-sm font-semibold text-foreground mb-2">Benefícios para o Cliente:</h5>
                        <ul className="space-y-1">
                          {partner.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-sm text-muted-foreground">
                              <div className="w-1.5 h-1.5 bg-secondary rounded-full mr-2"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Seção Marketing */}
        {marketingPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <TrendingUp className="w-6 h-6 mr-2 text-orange-500" />
              Marketing
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {marketingPartners.map((partner, index) => {
                const IconComponent = getCategoryIcon(partner.category);
                return (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                    {/* Espaço para foto/logo */}
                    <div className="mb-4 bg-muted rounded-lg p-8 text-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-xs italic">(Espaço reservado para foto/logo)</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(partner.category)} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{partner.role}</p>
                    <p className="text-xs text-muted-foreground">{partner.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* Seção QVT */}
        {qvtPartners.length > 0 && (
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
              <Users className="w-6 h-6 mr-2 text-green-500" />
              Qualidade de Vida no Trabalho (QVT)
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {qvtPartners.map((partner, index) => {
                const IconComponent = getCategoryIcon(partner.category);
                return (
                  <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300">
                    {/* Espaço para foto/logo */}
                    <div className="mb-4 bg-muted rounded-lg p-8 text-center border-2 border-dashed border-border">
                      <p className="text-muted-foreground text-xs italic">(Espaço reservado para foto/logo)</p>
                    </div>
                    <div className={`w-12 h-12 bg-gradient-to-br ${getCategoryColor(partner.category)} rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-1">{partner.name}</h4>
                    <p className="text-sm text-muted-foreground mb-1">{partner.role}</p>
                    <p className="text-xs text-muted-foreground">{partner.location}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};