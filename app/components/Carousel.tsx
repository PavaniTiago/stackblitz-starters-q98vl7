import React from 'react';
import Image from 'next/image';

export default function Carousel() {
  const features = [
    {
      icon: '🎯',
      title: 'Modelo de Avaliação',
      description: 'Premiado Internacionalmente',
    },
    {
      icon: '💻',
      title: 'Simulador Profissional',
      description: 'Desenvolva e teste suas habilidades',
    },
    {
      icon: '💰',
      title: 'Saques Simulados',
      description: 'Efetue saques com trades simulados',
    },
  ];

  const benefits = [
    {
      icon: '📈',
      value: '90%',
      text: 'Repasses podem chegar a até',
    },
    {
      icon: '🛡️',
      value: '100%',
      text: 'dos prejuízos absorvidos pela M3',
    },
  ];

  return (
    <section className="relative z-10 py-24 bg-dark-100/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-tusker leading-tight">
                Desenvolva suas habilidades em um{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon/70">
                  ambiente seguro
                </span>{' '}
                com a ajuda da M3
              </h2>
              <p className="text-gray-300 text-lg">
                A M3 tem o objetivo de acelerar o desenvolvimento de traders através de um{' '}
                <span className="text-neon">ambiente seguro e lucrativo</span>. Para isso temos:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative p-6 rounded-xl bg-dark-100/50 backdrop-blur-sm border border-white/5 hover:border-neon/20 transition-colors h-full">
                    <div className="text-2xl mb-3">{feature.icon}</div>
                    <h3 className="text-white font-medium mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-400">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-dark-100/30 rounded-2xl p-6 border border-white/5">
              <p className="text-gray-300 mb-6">
                Os melhores traders são chamados para o ambiente real da M3{' '}
                <span className="text-white font-medium">quando atingir gatilhos e se provam competentes</span>.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="relative group"
                  >
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                    <div className="relative p-4 rounded-xl bg-dark-100/50 backdrop-blur-sm border border-white/5 hover:border-neon/20 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{benefit.icon}</div>
                        <div>
                          <div className="text-xl font-tusker text-neon">{benefit.value}</div>
                          <div className="text-sm text-gray-400">{benefit.text}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full bg-gradient-to-r from-neon/5 to-transparent rounded-3xl blur-2xl"></div>
            </div>
            <div className="relative grid grid-cols-3 gap-4">
              {[...Array(9)].map((_, i) => (
                <div
                  key={i}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative aspect-square rounded-xl overflow-hidden border border-white/5 hover:border-neon/20 transition-colors">
                    <Image
                      src={`/trader-${i + 1}.jpg`}
                      alt={`Trader ${i + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}