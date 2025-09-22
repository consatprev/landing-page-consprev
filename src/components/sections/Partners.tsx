import { Link } from "react-router-dom";
import { CTAButton } from "../ui/cta-button";

export const Partners = () => {
  const msg = "Olá, gostaria de mais informações sobre como ser parceiro.";
  const whatsappMessage = encodeURIComponent(msg);
  const whatsappNumber = "5513981158016"; // Substitua pelo número real

  const partners = [
    {
      name: "InterNegócios Soluções",
      description: "Consultoria empresarial completa",
      // route: "/internegocios",
    },
    {
      name: "BenSeg",
      description: "Saúde e Segurança do Trabalho",
      route: "/benseg",
    },
    {
      name: "InterContábil",
      description: "Serviços contábeis especializados",
      // route: "/intercontabil",
    },
    {
      name: "InterMed",
      description: "Medicina do trabalho e perícias",
      // route: "/intermed",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos em conjunto com instituições para oferecer o
            melhor atendimento
          </p>
        </div>

        {/* Submarcas ConsAt'preV */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Grupo ConsAt'preV
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {partners.slice(0, 4).map((partner, index) => {
              const CardContent = (
                <div className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group hover:transform hover:scale-105">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <span className="text-white font-bold text-lg">
                      {partner.name
                        .split(" ")
                        .map((word) => word[0])
                        .join("")}
                    </span>
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {partner.description}
                  </p>
                  <p className="flex ml-5 items-center justify-center gap-2 text-sm font-semibold underline text-secondary cursor-pointer transition-colors group-hover:text-secondary-dark">
                    Ver detalhes
                    {/* Ícone de seta para a direita SVG */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
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
                  </p>
                </div>
              );

              return partner.route ? (
                <Link key={index} to={partner.route} className="block">
                  {CardContent}
                </Link>
              ) : (
                <div key={index}>{CardContent}</div>
              );
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Quer ser nosso parceiro?
          </h3>
          <p className="text-muted-foreground mb-6">
            Construímos relacionamentos duradouros baseados na confiança e
            resultados mútuos
          </p>
          
          <CTAButton
                          variant="secondary"
                          size="lg"
                          href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                          className="bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:shadow-3xl transform hover:scale-105"
                        >
                           Entre em contato →
          </CTAButton>
        </div>
      </div>
    </section>
  );
};
