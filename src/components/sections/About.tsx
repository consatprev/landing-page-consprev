import { Award, Target, Heart, TrendingUp } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Ouvimos com atenção e agimos com respeito"
    },
    {
      icon: Award,
      title: "Ética",
      description: "Nossa base é a integridade"
    },
    {
      icon: TrendingUp,
      title: "Resiliência",
      description: "Superamos obstáculos com coragem"
    },
    {
      icon: Target,
      title: "Comprometimento",
      description: "Entregamos com excelência"
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "Cada cliente é único e merece cuidado"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        {/* Propósito centralizado */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Nosso Propósito
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground italic text-justify">
              "Inspirar <strong className="text-primary">confiança</strong>, proteger <strong className="text-primary">direitos</strong> e promover <strong className="text-primary">dignidade</strong>. Transformamos desafios jurídicos em soluções que respeitam o ser humano em sua totalidade."
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* História da Empresa */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Nossa História
            </h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p className="text-justify">
                A ConsAt'preV nasceu com o propósito de oferecer assessoria jurídica especializada e humanizada nas áreas trabalhista e previdenciária.
              </p>
              
              <p className="text-justify">
                Nossa missão é <strong className="text-secondary">democratizar o acesso à Justiça e aos órgãos públicos</strong>, oferecendo orientação clara e eficiente para empresas e cidadãos que buscam regularizar sua situação e garantir seus direitos.
              </p>
              
              <p className="text-justify">
                Através de nossas submarcas — <strong className="text-primary">BenSeg, InterNegócios, InterContábil e InterJuridic</strong> — oferecemos um <strong className="text-primary">ecossistema completo</strong> de soluções jurídicas e empresariais.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">+100% casos resolvidos</span>
              </div>
              <div className="bg-secondary/10 px-4 py-2 rounded-full">
                <span className="text-secondary font-semibold">20 anos de experiência</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">98% de aprovação</span>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Valores
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <div 
                    key={index}
                    className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">
                        {value.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-8">
            Por que escolher a ConsAt'preV?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-muted-foreground">Conformidade Legal</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-secondary mb-2">24h</div>
              <div className="text-muted-foreground">Tempo de Resposta</div>
            </div>
            <div className="p-6">
              <div className="text-4xl font-bold text-primary mb-2">360°</div>
              <div className="text-muted-foreground">Assessoria Completa</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};