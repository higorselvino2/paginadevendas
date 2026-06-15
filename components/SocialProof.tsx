'use client';
import Image from 'next/image';
import { Info } from 'lucide-react';

export default function SocialProof() {
    const proofs = [
      { src: '/comen01.png', width: 400, height: 500 },
      { src: '/comen02.png', width: 400, height: 500 },
      { src: '/comen03.png', width: 400, height: 500 },
      { src: '/comen04.png', width: 400, height: 500 },
      { src: '/comen05.png', width: 400, height: 500 },
      { src: '/comen06.png', width: 400, height: 500 },
    ];

  return (
    <section className="py-24 overflow-hidden bg-[#050505]">
        <div className="container mx-auto px-4 text-center mb-16 max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-4">
               Descubra Como Esses 6 Alunos Estão Faturando Altamente de Forma Comprovada
            </h2>
            <p className="text-purple-400 mt-2 text-lg font-medium mb-6">Veja com seus próprios olhos. Esses resultados são 100% reais.</p>
            
            <div className="inline-flex items-center gap-3 bg-[#0a0a0a] border border-purple-500/20 px-6 py-3 rounded-full shadow-[0_0_20px_rgba(124,58,237,0.1)]">
               <Info className="w-5 h-5 text-purple-400" />
               <span className="text-sm md:text-base text-gray-300">Você não é o único. Muitas dessas pessoas nunca tinham ganhado 1 Dólar antes.</span>
            </div>
        </div>

        {/* CSS Marquee Wrapper */}
        <div className="relative w-[150vw] md:w-[120vw] left-1/2 -translate-x-1/2 h-[350px] md:h-[400px] flex items-center overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-[#050505] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-[#050505] to-transparent z-10 pointer-events-none" />

            <div className="flex gap-6 absolute left-0 w-max pr-6 items-center animate-[marquee_40s_linear_infinite]">
                {/* Dobramos a array para criar o efeito infinito contínuo */}
                {[...proofs, ...proofs].map((proof, i) => (
                    <div key={i} 
                         className="relative h-[250px] w-[400px] md:h-[300px] md:w-[500px] rounded-xl overflow-hidden border border-gray-800 bg-[#0a0a0a] shadow-[0_0_20px_rgba(255,255,255,0.05)] shrink-0 transition duration-500 hover:scale-[1.02]"
                    >
                        <Image 
                            src={encodeURI(proof.src)} 
                            alt={`Comprovante ${i}`} 
                            fill
                            referrerPolicy="no-referrer"
                            className="object-contain p-2 md:p-4" 
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
