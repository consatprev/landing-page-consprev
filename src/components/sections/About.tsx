import { Award, Target, Heart, TrendingUp } from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Award,
      title: "Comprometimento",
      description: "Compromisso com a qualidade e resultados em cada caso"
    },
    {
      icon: Target,
      title: "Precisão",
      description: "Análises detalhadas e estratégias personalizadas"
    },
    {
      icon: Heart,
      title: "Humanização",
      description: "Atendimento próximo e compreensivo cada cliente é único e merece cuidado"
    },
    {
      icon: TrendingUp,
      title: "Resultados",
      description: "Foco em soluções efetivas e benefícios reais"
    }
  ];

  return (
    <section className="py-20 bg-background" id="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* História da Empresa */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Quem Somos
            </h2>
            
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Com mais de <strong className="text-primary">15 anos de experiência</strong>, a ConsAt'preV 
                nasceu da necessidade de oferecer assessoria jurídica especializada e humanizada 
                nas áreas trabalhista e previdenciária.
              </p>
              
              <p>
                Nossa missão é <strong className="text-secondary">democratizar o acesso aos orgão públicos e à justiça</strong>, 
                fornecendo orientação clara e eficiente para empresas e cidadãos que buscam 
                regularizar sua situação e garantir seus direitos.
              </p>
              
              <p>
                Através das nossas submarcas (marcas técnicas especializadas) - InterNegócios Soluções, BenSeg, InterContábil 
                e InterMed - oferecemos um <strong className="text-primary">ecossistema completo</strong> 
                de soluções jurídicas e empresariais.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">+100 casos resolvidos</span>
              </div>
              <div className="bg-secondary/10 px-4 py-2 rounded-full">
                <span className="text-secondary font-semibold">15 anos no mercado</span>
              </div>
              <div className="bg-primary/10 px-4 py-2 rounded-full">
                <span className="text-primary font-semibold">98% de aprovação</span>
              </div>
            </div>
          </div>

          {/* Valores */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Nosso Propósito
            </h3>
            <div className="prose prose-lg text-muted-foreground space-y-4">
              <p>
                Inspirar <strong className="text-primary">confiança, proteger direitos e promover dignidade</strong>. Transformamos desafios
jurídicos em soluções que respeitam o ser humano em sua totalidade.
              </p>
            </div>


            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Nossos Valores
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-6">
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