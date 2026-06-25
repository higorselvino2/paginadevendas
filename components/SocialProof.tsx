'use client';
import { ArrowRight } from 'lucide-react';

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
    <section className="py-16 md:py-24 overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 text-center mb-10 max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
               Quem aplicou, <span className="text-green-500">faturou em dólar</span>
            </h2>
            <p className="text-gray-400 mt-2 text-lg md:text-xl font-medium mb-6">Resultados reais de artistas que aplicaram o método.</p>
        </div>

        {/* CSS Marquee Wrapper Desktop / Scroll Mobile */}
        <div className="relative w-full max-w-[100vw] overflow-hidden flex flex-col gap-6 py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            {/* Marquee Row */}
            <div className="flex gap-4 w-full overflow-x-auto snap-x snap-mandatory px-4 md:px-0 md:w-max md:overflow-visible md:animate-[marquee_50s_linear_infinite] md:hover:[animation-play-state:paused] hide-scrollbar">
                {/* Dobramos a array para criar o efeito infinito contínuo */}
                {[...proofs, ...proofs].map((proof, i) => (
                    <div key={i} className="snap-center relative rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-lg transition duration-300 hover:border-purple-500/30 shrink-0" style={{ height: '350px' }}>
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
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}} />

        <div className="w-full flex justify-center mt-12 px-4">
            <a href="#oferta" className="group relative flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-black py-4 md:py-5 px-10 rounded-full transition-all duration-300 min-h-[54px] max-w-sm sm:max-w-none">
               <span className="relative z-10 flex flex-col items-center">
                 <span className="text-base md:text-lg uppercase tracking-widest flex items-center">Quero esses resultados em dólar</span>
               </span>
            </a>
        </div>
    </section>
  );
}
