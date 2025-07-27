export const Partners = () => {
  const partners = [
    { name: "InterNegócios Soluções", description: "Consultoria empresarial completa" },
    { name: "BenSeg", description: "Saúde e Segurança do Trabalho" },
    { name: "InterContábil", description: "Serviços contábeis especializados" },
    { name: "InterMed", description: "Medicina do trabalho e perícias" },
    { name: "OAB", description: "Ordem dos Advogados do Brasil" },
    { name: "INSS", description: "Instituto Nacional do Seguro Social" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Parceiros
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trabalhamos em conjunto com instituições renomadas para oferecer o melhor atendimento
          </p>
        </div>

        {/* Submarcas ConsAt'preV */}
        <div className="mb-12">
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Grupo ConsAt'preV
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {partners.slice(0, 4).map((partner, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {partner.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {partner.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Parceiros Institucionais */}
        <div>
          <h3 className="text-xl font-semibold text-center text-foreground mb-8">
            Parceiros Institucionais
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {partners.slice(4).map((partner, index) => (
              <div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-all duration-300 text-center group hover:transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-white font-bold text-lg">
                    {partner.name.split(' ').map(word => word[0]).join('')}
                  </span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">
                  {partner.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {partner.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl">
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Quer ser nosso parceiro?
          </h3>
          <p className="text-muted-foreground mb-6">
            Construímos relacionamentos duradouros baseados na confiança e resultados mútuos
          </p>
          <button 
            onClick={() => document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-primary hover:text-primary-dark font-semibold transition-colors"
          >
            Entre em contato →
          </button>
        </div>
      </div>
    </section>
  );
};