import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const HonoredPartners = () => {
  const [selectedPartner, setSelectedPartner] = useState<any>(null);

  const partners = [
    {
      name: "Conceitu's Med",
      summary: "Parceria estratégica com foco em Medicina Ocupacional e Segurança do Trabalho, fortalecendo o compromisso com saúde e bem-estar corporativo.",
      fullContent: (
        <>
          <div className="mb-6 bg-muted rounded-xl p-12 text-center border-2 border-dashed border-border">
            <p className="text-muted-foreground italic">(Espaço reservado para imagem do profissional ou parceiro)</p>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">Parceria Estratégica com a ConsAt'preV</h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-justify">
              A Conceitu's Med tem orgulho de ser parceira da ConsAt'preV, uma aliança que fortalece nosso compromisso com a excelência em Medicina Ocupacional e Segurança do Trabalho.
            </p>
            <p className="text-justify">
              Essa parceria estratégica nos permite ampliar nossa capacidade de atendimento, oferecendo soluções integradas e eficientes para empresas que buscam conformidade legal, bem-estar dos colaboradores e ambientes de trabalho seguros.
            </p>
            <p className="text-justify">
              Juntas, Conceitu's Med e ConsAt'preV unem experiência, qualidade técnica e responsabilidade para entregar resultados com transparência, agilidade e confiança.
            </p>
            <p className="text-justify font-semibold text-foreground">
              Mais do que uma parceria — uma união de propósitos em favor da saúde e da segurança no trabalho.
            </p>
          </div>
        </>
      )
    },
    {
      name: "Denis Rogger",
      summary: "Personal Trainer e especialista em ergonomia. Atuação com foco em saúde ocupacional, qualidade de vida e desempenho físico no ambiente de trabalho.",
      fullContent: (
        <>
          <div className="mb-6 bg-muted rounded-xl p-12 text-center border-2 border-dashed border-border">
            <p className="text-muted-foreground italic">(Espaço reservado para imagem do profissional ou parceiro)</p>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-2">Denis Rogger</h3>
          <p className="text-sm text-primary font-semibold mb-4">Personal Trainer | Especialista em Ergonomia e Fisiologia do Exercício</p>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-justify">
              Denis Rogger é parceiro do nosso projeto e atua com foco em saúde ocupacional, desempenho físico e qualidade de vida.
            </p>
            <p className="text-justify">
              Com sólida formação acadêmica e experiência prática, integra conhecimentos em fisiologia do exercício e gestão educacional para oferecer soluções completas em treinamento e bem-estar.
            </p>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Formação Acadêmica:</h4>
              <ul className="list-disc list-inside space-y-1 text-justify">
                <li>Graduado pela Scelisul (UNISEPE)</li>
                <li>MBA em Trabalho e Ergonomia pela Facuvale – Faculdade de Minas EaD</li>
                <li>Pós-graduação em Fisiologia do Exercício e Treinamento Físico pela Faveni Educacional</li>
                <li>Pós-graduação em Gestão Escolar pela Faveni Educacional</li>
                <li>Pós-graduação em Ergonomia pela Faveni Educacional</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Atuação Profissional:</h4>
              <ul className="list-disc list-inside space-y-1 text-justify">
                <li>Personal Trainer</li>
                <li>Consultor em saúde ocupacional e ergonomia</li>
                <li>Educador com foco em gestão escolar e formação continuada</li>
              </ul>
            </div>
            <p className="text-justify">
              Denis Rogger é um profissional comprometido com resultados e o bem-estar de seus alunos e clientes. Sua abordagem multidisciplinar fortalece a atuação da ConsAt'preV e amplia o alcance das nossas soluções.
            </p>
          </div>
        </>
      )
    },
    {
      name: "Nádia Shinkarenko Batista",
      summary: "Psicóloga e terapeuta natural com atuação em saúde emocional, terapias integrativas e coaching em qualidade de vida.",
      fullContent: (
        <>
          <div className="mb-6 bg-muted rounded-xl p-12 text-center border-2 border-dashed border-border">
            <p className="text-muted-foreground italic">(Espaço reservado para imagem do profissional ou parceiro)</p>
          </div>
          <h3 className="text-xl font-bold text-foreground mb-4">Sobre mim</h3>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-justify">
              Sou Nádia Shinkarenko Batista, psicóloga, terapeuta natural e health coach.
            </p>
            <p className="text-justify">
              Minha atuação integra ciência, práticas naturais e estratégias de mudança de comportamento para promover saúde física, mental e emocional de forma completa e personalizada.
            </p>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Minhas competências:</h4>
              <ul className="space-y-2">
                <li className="text-justify">
                  <strong className="text-foreground">Psicologia Clínica:</strong> escuta qualificada e acompanhamento terapêutico focado no equilíbrio emocional e desenvolvimento pessoal.
                </li>
                <li className="text-justify">
                  <strong className="text-foreground">Terapias Naturais e Integrativas:</strong> uso de recursos naturais e práticas complementares para redução do estresse e promoção do bem-estar.
                </li>
                <li className="text-justify">
                  <strong className="text-foreground">Health Coaching em Saúde Física e Mental:</strong> apoio na construção de hábitos saudáveis e sustentáveis, com foco em alimentação, sono e qualidade de vida.
                </li>
                <li className="text-justify">
                  <strong className="text-foreground">Atendimento Integrativo e Personalizado:</strong> abordagem que respeita a individualidade de cada pessoa, promovendo mudanças positivas e duradouras no estilo de vida.
                </li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      name: "Rhema Medicina e Segurança no Trabalho",
      summary: "Parceria técnica em Medicina e Segurança do Trabalho, promovendo ambientes laborais mais saudáveis e em conformidade com a legislação.",
      fullContent: (
        <>
          <div className="mb-6 bg-muted rounded-xl p-12 text-center border-2 border-dashed border-border">
            <p className="text-muted-foreground italic">(Espaço reservado para imagem do profissional ou parceiro)</p>
          </div>
          <div className="space-y-4 text-muted-foreground">
            <p className="text-justify">
              A união entre o Engenheiro de Segurança do Trabalho André Bueno e o Médico do Trabalho Dr. Deusdete Bispo, proprietário da clínica Rhema, representa uma parceria sólida e estratégica voltada para promover ambientes laborais mais seguros e saudáveis.
            </p>
            <p className="text-justify">
              A Rhema é responsável pela gestão clínica e pela realização de exames ocupacionais, laudos e pareceres médicos por meio de uma estrutura especializada.
            </p>
            <p className="text-justify">
              Essa parceria apoia a ConsAt'preV, compartilhando valores de excelência, responsabilidade e inovação.
            </p>
            <p className="text-justify">
              A colaboração entre André Bueno, Dr. Deusdete Bispo e a ConsAt'preV potencializa a capacidade de atendimento, garantindo suporte especializado e personalizado para empresas e colaboradores.
            </p>
            <p className="text-justify font-semibold text-foreground">
              Três forças, um propósito: proteger vidas, promover saúde e construir ambientes de trabalho mais seguros.
            </p>
          </div>
        </>
      )
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Honrados Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Profissionais e empresas que confiam e trabalham conosco
          </p>
        </div>

        {/* Cards dos Parceiros */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              onClick={() => setSelectedPartner(partner)}
              className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 cursor-pointer hover:transform hover:scale-105"
            >
              {/* Espaço reservado para imagem */}
              <div className="mb-4 bg-muted rounded-lg p-8 text-center border-2 border-dashed border-border">
                <p className="text-muted-foreground text-xs italic">(Espaço reservado para imagem do profissional ou parceiro)</p>
              </div>
              
              <h4 className="font-bold text-foreground text-lg mb-3">{partner.name}</h4>
              <p className="text-sm text-muted-foreground text-justify line-clamp-3">
                {partner.summary}
              </p>
              
              <div className="mt-4 flex items-center text-primary font-semibold text-sm">
                Ver perfil completo
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal com perfil completo */}
      <Dialog open={!!selectedPartner} onOpenChange={() => setSelectedPartner(null)}>
        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold text-foreground">
              {selectedPartner?.name}
            </DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            {selectedPartner?.fullContent}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};
