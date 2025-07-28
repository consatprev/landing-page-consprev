import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { useState } from "react";

export const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Maria Silva",
      role: "Empresária - Setor Alimentício",
      company: "Restaurante Sabor & Cia",
      content: "A ConsAt'preV nos ajudou a regularizar toda nossa situação trabalhista. Evitamos multas de mais de R$ 50.000 e agora temos tranquilidade para focar no crescimento do negócio.",
      rating: 5,
      result: "Economia de R$ 50.000 em multas"
    },
    {
      name: "João Santos", 
      role: "Aposentado",
      company: "Metalúrgico - 35 anos",
      content: "Depois de 3 anos tentando minha aposentadoria especial sozinho, a ConsAt'preV resolveu em 6 meses. Profissionais competentes e atenciosos. Recomendo!",
      rating: 5,
      result: "Aposentadoria aprovada em 6 meses"
    },
    {
      name: "Ana Costa",
      role: "Gestora de RH",
      company: "TechSolutions Ltda",
      content: "O compliance trabalhista nunca foi tão tranquilo. A equipe da ConsAt'preV nos orienta em cada processo e mantém nossa empresa sempre em conformidade.",
      rating: 5,
      result: "100% de conformidade legal"
    },
    {
      name: "Carlos Oliveira",
      role: "Microempreendedor",
      company: "Oficina Mecânica",
      content: "Ação trabalhista que poderia quebrar meu negócio foi resolvida com um acordo justo. A ConsAt'preV salvou minha empresa e minha família.",
      rating: 5,
      result: "Acordo favorável em ação trabalhista"
    },
    {
      name: "Lucia Ferreira",
      role: "Viúva",
      company: "Beneficiária INSS",
      content: "Consegui minha pensão por morte depois de meses de negativas. O atendimento foi humano e eficiente. Gratidão eterna à equipe!",
      rating: 5,
      result: "Pensão por morte aprovada"
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const current = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Histórias reais de pessoas que transformaram suas vidas com nossa assessoria
          </p>
        </div>

        {/* Carrossel de Depoimentos */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl shadow-strong p-8 md:p-12 relative">
            {/* Navegação */}
            <div className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 bg-white shadow-medium rounded-full flex items-center justify-center hover:shadow-strong transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="w-5 h-5 text-primary" />
              </button>
            </div>
            
            <div className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-8">
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 bg-white shadow-medium rounded-full flex items-center justify-center hover:shadow-strong transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="w-5 h-5 text-primary" />
              </button>
            </div>

            {/* Conteúdo do Depoimento */}
            <div className="text-center">
              {/* Estrelas */}
              <div className="flex justify-center mb-6">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Depoimento */}
              <blockquote className="text-lg md:text-xl text-foreground mb-8 leading-relaxed italic">
                "{current.content}"
              </blockquote>

              {/* Resultado Destacado */}
              <div className="inline-block bg-gradient-to-r from-primary to-secondary text-white px-6 py-2 rounded-full text-sm font-semibold mb-6">
                ✨ {current.result}
              </div>

              {/* Informações do Cliente */}
              <div>
                <div className="font-semibold text-foreground text-lg">
                  {current.name}
                </div>
                <div className="text-muted-foreground">
                  {current.role}
                </div>
                <div className="text-primary text-sm font-medium">
                  {current.company}
                </div>
              </div>
            </div>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-primary scale-125' 
                    : 'bg-border hover:bg-primary/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-muted-foreground">Taxa de Sucesso</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-secondary mb-2">+100</div>
            <div className="text-muted-foreground">Casos Resolvidos</div>
          </div>
          <div className="p-6">
            <div className="text-4xl font-bold text-primary mb-2">4.9</div>
            <div className="text-muted-foreground">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};