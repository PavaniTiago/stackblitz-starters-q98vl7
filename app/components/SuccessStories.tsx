import React from 'react';
import Image from 'next/image';

export default function SuccessStories() {
  const testimonials = [
    {
      name: "Carlos Silva",
      role: "Trader Aprovado",
      image: "/testimonial-1.jpg",
      quote: "A M3 mudou completamente minha visão sobre day trade. O ambiente seguro e o suporte foram essenciais.",
      stats: { profit: "127%", period: "3 meses" }
    },
    {
      name: "Ana Costa",
      role: "Trader Elite",
      image: "/testimonial-2.jpg",
      quote: "Graças ao programa de mentoria, consegui desenvolver uma estratégia consistente e lucrativa.",
      stats: { profit: "85%", period: "2 meses" }
    },
    {
      name: "Pedro Santos",
      role: "Trader Senior",
      image: "/testimonial-3.jpg",
      quote: "O diferencial da M3 é a transparência e o compromisso com o desenvolvimento do trader.",
      stats: { profit: "156%", period: "4 meses" }
    }
  ];

  return (
    <section className="relative z-10 py-32 overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark/50"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon/5 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-tusker leading-tight mb-6">
            HISTÓRIAS DE{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon/70">
              SUCESSO
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Conheça alguns dos traders que transformaram suas carreiras com a M3
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-transparent rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-1000"></div>
              <div className="relative p-8 bg-dark-100/50 rounded-2xl backdrop-blur-sm border border-white/5 hover:border-neon/10 transition-colors">
                <div className="flex items-start gap-4 mb-6">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-medium text-white">{testimonial.name}</h3>
                    <p className="text-neon text-sm">{testimonial.role}</p>
                  </div>
                </div>

                <blockquote className="text-gray-300 mb-6">
                  &quot;{testimonial.quote}&quot;
                </blockquote>

                <div className="flex items-center gap-6 pt-6 border-t border-white/5">
                  <div>
                    <p className="text-2xl font-tusker text-neon">+{testimonial.stats.profit}</p>
                    <p className="text-sm text-gray-400">Rentabilidade</p>
                  </div>
                  <div className="w-px h-12 bg-white/5"></div>
                  <div>
                    <p className="text-2xl font-tusker text-white">{testimonial.stats.period}</p>
                    <p className="text-sm text-gray-400">Período</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 p-6 rounded-2xl bg-dark-100/30 border border-white/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center">
                <span className="text-2xl text-neon">🏆</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-tusker text-white">+1.000</p>
                <p className="text-sm text-gray-400">Traders Aprovados</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/5"></div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center">
                <span className="text-2xl text-neon">💰</span>
              </div>
              <div className="text-left">
                <p className="text-2xl font-tusker text-white">R$ 50M+</p>
                <p className="text-sm text-gray-400">Em Lucros Distribuídos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}