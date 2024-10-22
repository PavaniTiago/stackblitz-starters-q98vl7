import Image from 'next/image';
import HowItWorks from './components/HowItWorks';
import VideoSection from './components/VideoSection';
import Carousel from './components/Carousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white">
      <header className="relative z-10">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/m3-logo.svg"
              alt="M3 Logo"
              width={40}
              height={40}
              className="h-10 w-auto"
              priority
            />
            <span className="font-tusker text-2xl tracking-wide text-neon">MESA</span>
          </div>
          <button className="px-6 py-2 bg-neon/10 text-neon rounded-lg hover:bg-neon/20 transition-colors">
            Área do Cliente
          </button>
        </nav>
      </header>

      <main>
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/chart-bg.png"
              alt="Background"
              fill
              className="object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark"></div>
            <div className="absolute inset-0 grid-animation">
              <div className="grid grid-cols-6 h-full">
                {[...Array(24)].map((_, i) => (
                  <div
                    key={i}
                    className="border-r border-t border-neon/5"
                    style={{ '--delay': i } as any}
                  ></div>
                ))}
              </div>
            </div>
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon/20 rounded-full blur-[128px]"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon/20 rounded-full blur-[128px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-neon to-transparent mx-auto mb-8"></div>
              
              <h1 className="text-7xl font-tusker leading-tight mb-8 relative">
                <span className="absolute -inset-2 bg-neon/5 blur-2xl rounded-full"></span>
                DIGA ADEUS AO LOSS NO{' '}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon/70">
                    DAY TRADE
                  </span>
                  <span className="absolute inset-0 bg-neon/20 blur-xl"></span>
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-12">
                A Mesa Proprietária M3 está em busca de traders talentosos para patrocinar.{' '}
                <span className="text-neon font-medium">Repassamos até 90% do lucro</span> de suas operações e{' '}
                <span className="text-white font-medium">absorvemos 100% de qualquer eventual perda</span>.
              </p>
              
              <button className="relative px-8 py-4 bg-neon text-dark font-bold rounded-xl hover:bg-neon/90 transition-all group">
                <span className="absolute inset-0 bg-neon blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></span>
                <span className="relative text-lg flex items-center gap-2">
                  QUERO SER PATROCINADO
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 16 16" fill="none">
                    <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center relative">
              <div className="absolute inset-0 bg-dark-100/10 blur-3xl"></div>
              {[
                { icon: '💼', text: 'Plataforma Profissional' },
                { icon: '🎓', text: 'M3 Academy' },
                { icon: '✅', text: 'Aprovação direta' },
                { icon: '📊', text: 'Analista de Performance' },
                { icon: '🚀', text: 'Suporte Ágil' }
              ].map(({ icon, text }, index) => (
                <div
                  key={index}
                  className="relative group"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/20 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative px-6 py-4 rounded-xl bg-dark-100/50 backdrop-blur-sm border border-white/5 hover:border-neon/20 transition-colors">
                    <div className="text-2xl mb-2">{icon}</div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">{text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <VideoSection />
        <Carousel />
        <HowItWorks />
      </main>
    </div>
  );
}