import React from 'react';

interface StepProps {
  number: string;
  title: string;
  description: string;
  features: string[];
  className?: string;
}

const Step = ({ number, title, description, features, className = '' }: StepProps) => (
  <div className={`relative group ${className}`}>
    <div className="absolute -inset-1 bg-gradient-to-r from-neon/20 to-neon/0 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
    <div className="relative p-8 bg-dark-100/50 rounded-2xl backdrop-blur-sm border border-white/5">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-xl bg-neon/10 flex items-center justify-center">
          <span className="text-2xl font-tusker text-neon">{number}</span>
        </div>
        <div className="h-px flex-1 bg-gradient-to-r from-neon/50 to-transparent"></div>
      </div>
      <h3 className="text-2xl font-medium text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3 text-sm text-gray-400">
            <div className="w-6 h-6 rounded-lg bg-neon/10 flex items-center justify-center text-neon">✓</div>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default function HowItWorks() {
  return (
    <section className="relative z-10 py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/50 to-dark"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="relative w-full h-full">
            <div className="absolute inset-0 grid grid-cols-6 gap-px opacity-20">
              {[...Array(36)].map((_, i) => (
                <div key={i} className="bg-neon/20 backdrop-blur-sm"></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-tusker leading-tight mb-6">
            COMO FUNCIONA O{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon/70">
              PROCESSO
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Um caminho claro e estruturado para seu sucesso no mercado financeiro
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Step
            number="01"
            title="Avaliação Inicial"
            description="Comece sua jornada em nosso ambiente simulado. Opere com dados reais do mercado sem riscos financeiros."
            features={[
              'Conta simulada com R$ 100.000',
              'Dados em tempo real',
              'Suporte técnico especializado'
            ]}
          />

          <Step
            number="02"
            title="Desenvolvimento"
            description="Aprimore suas habilidades com nossa academia exclusiva e mentoria personalizada."
            features={[
              'Acesso à M3 Academy',
              'Mentoria individual',
              'Análise de performance'
            ]}
            className="mt-0 md:mt-12"
          />

          <Step
            number="03"
            title="Mesa Real"
            description="Após aprovação, opere com capital real e aproveite as melhores condições do mercado."
            features={[
              'Até 90% de repasse',
              '100% do loss coberto',
              'Saques semanais'
            ]}
            className="mt-0 md:mt-24"
          />
        </div>

        <div className="mt-20 text-center">
          <button className="px-8 py-4 bg-neon text-dark font-bold rounded-xl hover:bg-neon/90 transition-colors text-lg inline-flex items-center gap-2 group">
            COMECE AGORA
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}