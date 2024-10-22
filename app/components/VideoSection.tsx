import React from 'react';
import Image from 'next/image';

export default function VideoSection() {
  return (
    <section className="relative z-10 py-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark to-dark/50"></div>
        <Image
          src="/geometric-bg.png"
          alt="Background Pattern"
          fill
          className="object-cover opacity-10"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="relative rounded-2xl overflow-hidden bg-dark-100/30 backdrop-blur-sm border border-white/5">
          <div className="aspect-video relative">
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 rounded-full bg-neon/20 flex items-center justify-center group transition-all hover:scale-110">
                <div className="w-16 h-16 rounded-full bg-neon flex items-center justify-center">
                  <span className="text-dark text-4xl">▶</span>
                </div>
              </button>
            </div>
            <Image
              src="/video-thumbnail.jpg"
              alt="Video Thumbnail"
              fill
              className="object-cover"
            />
          </div>
          <div className="p-6 text-center border-t border-white/5">
            <p className="text-gray-400 text-sm">
              Você não está com tempo para ver o vídeo?{' '}
              <button className="text-neon hover:underline">Clique aqui para ler</button>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}