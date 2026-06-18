'use client';
import Image from 'next/image';
import { Info, ArrowRight } from 'lucide-react';

export default function SocialProof() {
    const proofs = [
      { src: '/depo1.jpg', width: 304, height: 420 },
      { src: '/depo2.jpg', width: 304, height: 351 },
      { src: '/depo3.jpg', width: 303, height: 292 },
      { src: '/depo4.jpg', width: 295, height: 371 },
      { src: '/depo5.jpg', width: 301, height: 346 },
      { src: '/depo7.jpg', width: 303, height: 368 },
      { src: '/depo8.jpg', width: 302, height: 309 },
      { src: '/depo9.jpg', width: 304, height: 309 },
      { src: '/depo10.jpg', width: 300, height: 397 },
      { src: '/depo11.jpg', width: 302, height: 374 },
    ];

  return (
    <section className="py-10 md:py-16 overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 text-center mb-10 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
               A Prova de que Talento Sem Estratégia é Perda de Tempo
            </h2>
            <p className="text-purple-400 mt-2 text-lg font-medium mb-6">Esses artistas abaixo também estavam estagnados. Eles não ganharam na loteria do algoritmo do Instagram.</p>
            
            <div className="inline-flex items-center gap-3 bg-[#0a0a0a] border border-purple-500/20 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.1)]">
               <Info className="w-5 h-5 text-purple-400" />
               <span className="text-sm md:text-base text-gray-300">Detalhe: <strong>Nenhum deles tinha milhares de seguidores.</strong> Eles apenas aplicaram o Código.</span>
            </div>
        </div>

        {/* CSS Marquee Wrapper */}
        <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Marquee Row */}
            <div className="flex gap-4 w-max animate-[marquee_50s_linear_infinite] hover:[animation-play-state:paused]">
                {/* Dobramos a array para criar o efeito infinito contínuo */}
                {[...proofs, ...proofs].map((proof, i) => (
                    <div key={i} className="relative rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-lg transition duration-300 hover:border-purple-500/30 shrink-0" style={{ height: '350px' }}>
                        <img 
                            src={encodeURI(proof.src)} 
                            alt={`Comprovante ${i}`}
                            style={{ height: '100%', width: `${(proof.width / proof.height) * 350}px` }}
                            className="object-contain"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop";
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>

        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}} />

        <div className="w-full flex justify-center mt-10 px-4">
            <a href="#oferta" className="group relative flex items-center justify-center w-full max-w-sm sm:w-auto bg-gradient-to-r from-[#6b31ff] to-[#5123d4] hover:from-[#7a48ff] hover:to-[#6133eb] text-white font-black py-4 md:py-5 px-10 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(107,49,255,0.4)] transition-all duration-300 min-h-[54px]">
               <span className="relative z-10 flex flex-col items-center">
                 <span className="text-base md:text-lg uppercase tracking-widest flex items-center">QUERO ESSES RESULTADOS</span>
                 <span className="text-[10px] md:text-xs font-normal opacity-80 mt-1">Acesso Imediato</span>
               </span>
            </a>
        </div>
    </section>
  );
}
