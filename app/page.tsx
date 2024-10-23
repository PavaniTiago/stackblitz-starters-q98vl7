import Image from "next/image";
import HowItWorks from "./components/HowItWorks";
import VideoSection from "./components/VideoSection";
import Carousel from "./components/Carousel";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-dark text-white scroll-smooth">
      <header className="relative z-10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/m3-logo.svg"
            alt="M3 Logo"
            width={40}
            height={40}
            className="h-6 sm:h-8 w-auto"
            priority
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/#como-funciona" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Como funciona
          </Link>
          <Link 
            href="/#faq" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            FAQ
          </Link>
          <Link 
            href="/#termos" 
            className="text-gray-300 hover:text-white transition-colors"
          >
            Termos e Condições
          </Link>
        </div>

        <button className="px-6 py-2 bg-neon/10 text-neon rounded-lg hover:bg-neon/20 transition-colors">
          Área do cliente
        </button>
      </nav>
    </header>

      <main>
        <section className="relative min-h-[90vh] flex items-center pt-20 pb-32 overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/chart-bg.svg"
              alt="Background"
              fill
              className="object-cover opacity-15"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark/40 via-dark/80 to-dark"></div>
            <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-neon/30 rounded-full blur-[170px]"></div>
            <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-neon/30 rounded-full blur-[170px]"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-16">
              <div className="w-32 h-px bg-gradient-to-r from-transparent via-neon/30 to-transparent mx-auto mb-8"></div>

              <h1 className="text-4xl sm:text-7xl font-tusker font-extrabold leading-tight mb-8 relative">
                <span className="absolute -inset-2 bg-neon/3 blur-3xl rounded-full"></span>
                DIGA ADEUS AO LOSS NO{" "}
                <span className="relative">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-neon/80">
                    DAY TRADE
                  </span>
                  <span className="absolute inset-0 bg-neon/10 blur-lg"></span>
                </span>
              </h1>

              <p className="text-xl text-gray-300/90 mb-12">
                A Mesa Proprietária M3 está em busca de traders talentosos para
                patrocinar.{" "}
                <span className="text-neon font-medium">
                  Repassamos até 90% do lucro
                </span>{" "}
                de suas operações e{" "}
                <span className="text-white font-medium">
                  absorvemos 100% de qualquer eventual perda
                </span>
                .
              </p>

              <button className="relative px-8 py-4 bg-neon text-dark font-bold rounded-xl hover:bg-neon/90 transition-all group">
                <span className="absolute inset-0 bg-neon/80 blur-md opacity-40 group-hover:opacity-60 transition-opacity"></span>
                <span className="relative text-lg flex items-center gap-2">
                  QUERO SER PATROCINADO
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M1 8H15M15 8L8 1M15 8L8 15"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center relative">
              <div className="absolute inset-0 bg-dark-100/5 blur-2xl"></div>
              {[
                { icon: "💼", text: "Plataforma Profissional" },
                { icon: "🎓", text: "M3 Academy" },
                { icon: "✅", text: "Aprovação direta" },
                { icon: "📊", text: "Analista de Performance" },
                { icon: "🚀", text: "Suporte Ágil" },
              ].map(({ icon, text }, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-neon/10 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
                  <div className="relative px-6 py-4 rounded-xl bg-dark-100/30 backdrop-blur-sm border border-white/5 hover:border-neon/10 transition-colors">
                    <div className="text-2xl mb-2">{icon}</div>
                    <span className="text-sm text-gray-300/90 group-hover:text-white transition-colors">
                      {text}
                    </span>
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
