'use client';
import Image from 'next/image';
import { Info } from 'lucide-react';

export default function SocialProof() {
    const proofs = [
      { src: '/depo1.jpg', width: 400, height: 600 },
      { src: '/depo2.jpg', width: 400, height: 600 },
      { src: '/depo3.jpg', width: 400, height: 600 },
      { src: '/depo4.jpg', width: 400, height: 600 },
      { src: '/depo5.jpg', width: 400, height: 600 },
      { src: '/depo7.jpg', width: 400, height: 600 },
      { src: '/depo8.jpg', width: 400, height: 600 },
      { src: '/depo9.jpg', width: 400, height: 600 },
      { src: '/depo10.jpg', width: 400, height: 600 },
      { src: '/depo11.jpg', width: 400, height: 600 },
    ];

  return (
    <section className="py-24 overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 text-center mb-16 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
               A Prova de que Talento Sem Estratégia é Perda de Tempo
            </h2>
            <p className="text-purple-400 mt-2 text-lg font-medium mb-6">Esses artistas abaixo também estavam estagnados. Eles não ganharam na loteria do algoritmo do Instagram.</p>
            
            <div className="inline-flex items-center gap-3 bg-[#0a0a0a] border border-purple-500/20 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.1)]">
               <Info className="w-5 h-5 text-purple-400" />
               <span className="text-sm md:text-base text-gray-300">Detalhe: <strong>Nenhum deles tinha milhares de seguidores.</strong> Eles apenas aplicaram o Método.</span>
            </div>
        </div>

        {/* CSS Marquee Wrapper */}
        <div className="relative w-[150vw] md:w-[120vw] left-1/2 -translate-x-1/2 h-[500px] flex items-center overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 absolute left-0 w-max pr-6 items-center animate-[marquee_40s_linear_infinite]">
                {/* Dobramos a array para criar o efeito infinito contínuo */}
                {[...proofs, ...proofs].map((proof, i) => (
                    <div key={i} 
                         className="relative h-[450px] w-[300px] md:w-[350px] rounded-3xl overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-[0_0_20px_rgba(255,255,255,0.05)] shrink-0 transition duration-500 hover:scale-[1.02]"
                    >
                        <Image 
                            src={encodeURI(proof.src)} 
                            alt={`Comprovante ${i}`} 
                            fill
                            referrerPolicy="no-referrer"
                            className="object-cover" 
                            onError={(e) => {
                                // Fallback mock image Se as fotos nao forem enviadas pra public
                                e.currentTarget.srcset = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop";
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
        
        {/* Simple inline style for marquee if Tailwind config is strict */}
        <style dangerouslySetInnerHTML={{ __html: `
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}} />
    </section>
  );
}
