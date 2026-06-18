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

        <div className="container mx-auto px-4 max-w-6xl">
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
                {proofs.map((proof, i) => (
                    <div key={i} className="break-inside-avoid relative rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-[0_0_20px_rgba(255,255,255,0.05)] transition duration-300 hover:border-purple-500/30">
                        <img 
                            src={encodeURI(proof.src)} 
                            alt={`Comprovante ${i}`}
                            width={proof.width}
                            height={proof.height}
                            className="w-full h-auto object-contain"
                            onError={(e) => {
                                e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop";
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>

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
