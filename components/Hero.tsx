'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative flex flex-col pt-10 md:pt-16 pb-12 z-10 overflow-hidden bg-[#050505]">
        
        {/* Top Centered Logo (if needed, or maybe we remove it if it clutters? The reference doesn't have a big logo at top, but let's keep it smaller) */}
        <div className="w-full flex justify-center mb-12 z-20 hidden md:flex">
           <div className="relative w-40 h-16">
             <Image 
                src="/logo.png" 
                alt="Código da Arte Magnética" 
                fill
                className="object-contain"
                priority
             />
           </div>
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12 flex-grow">
            
            {/* Text Content */}
            <div className="md:w-1/2 flex flex-col items-start text-left">
                
                <div className="inline-flex items-center px-4 py-1.5 rounded bg-purple-500/20 text-purple-400 text-[10px] md:text-xs font-bold uppercase tracking-wider mb-6">
                    PARA QUEM POSTA TODO DIA E NÃO FECHA NADA
                </div>

                <h1 className="text-4xl md:text-6xl font-black leading-[1.1] mb-6 text-white tracking-tight">
                    Você não tem problema de talento. <span className="text-purple-500 block mt-2">Você tem problema de vendas.</span>
                </h1>

                <p className="text-gray-300 text-base md:text-xl leading-relaxed mb-8 max-w-xl">
                    O método de <strong className="text-white">4 passos</strong> para transformar artes que ninguém vê em commissions fechadas em dólar. <strong className="text-white">Mesmo que você nunca tenha vendido para gringos na vida.</strong>
                </p>

                <div className="w-full sm:w-auto flex flex-col items-start">
                    <a href="#oferta" className="group relative flex items-center justify-center w-full sm:w-auto bg-green-500 hover:bg-green-600 text-black font-black py-4 md:py-5 px-10 rounded-full transition-all duration-300 min-h-[54px] w-[90%] md:w-auto mx-auto sm:mx-0">
                        <span className="relative z-10 flex items-center justify-center text-base md:text-lg tracking-wide">
                            <span className="w-5 h-5 mr-3 bg-black rounded-full flex items-center justify-center">
                                <ArrowRight className="w-3 h-3 text-green-500" />
                            </span>
                            Quero ganhar em dólar agora
                        </span>
                    </a>
                    <span className="text-gray-500 text-xs mt-3 text-center sm:text-left w-full font-medium">Acesso imediato • Garantia de 7 dias</span>
                </div>
            </div>

            {/* Image Block */}
            <div className="md:w-1/2 flex justify-end w-full mt-8 md:mt-0 relative group">
                <div className="relative w-full max-w-md aspect-square md:aspect-[4/5] rounded-3xl overflow-hidden pointer-events-none">
                    <Image 
                        src="/gravi.jpg" 
                        alt="Capa do Livro Arte Magnética" 
                        fill
                        className="object-cover"
                        priority
                    />
                    {/* Shadow overlay at bottom */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent opacity-80" />
                    
                    <div className="absolute bottom-6 left-6 flex flex-col">
                        <span className="text-white font-bold text-xl drop-shadow-md">O Método Arte Magnética</span>
                        <span className="text-gray-300 text-sm drop-shadow-md">O guia definitivo para faturar em dólar</span>
                    </div>
                </div>
            </div>

        </div>
    </header>
  );
}
