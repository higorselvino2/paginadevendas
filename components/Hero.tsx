'use client';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Hero() {
  return (
    <header className="relative min-h-screen flex flex-col pt-12 pb-16 z-10 overflow-hidden bg-[#050505]">
        
        {/* Top Centered Logo */}
        <div className="w-full flex justify-center mb-16 md:mb-24 z-20">
           <div className="relative w-64 h-24">
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
            <div className="md:w-[55%] flex flex-col items-start text-left">
                
                <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-gray-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(124,58,237,0.15)]">
                    <span className="w-2 h-2 rounded-none transform rotate-45 border border-purple-400 mr-3"></span>
                    O fim do "Postar e Rezar"
                </div>

                <h1 className="text-[2.2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.05] mb-6 text-white tracking-tight drop-shadow-2xl">
                    Descubra Os Exatos 4 Passos Para Fechar de 3 a 5 Commissions por Semana <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">em DÓLAR</span>
                </h1>

                <p className="text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                    <span className="text-white font-bold">Você não precisa de milhares de seguidores. Você precisa da técnica que vende rápido.</span>{' '}
                    Muitos artistas tentam crescer no instagram de graça e fracassam. Entenda por que vender ativamente em fóruns gringos constrói riquezas de forma previsível e segura.
                </p>

                <div className="w-full sm:w-auto">
                    <a href="#oferta" className="group relative inline-flex items-center justify-center w-full sm:w-auto bg-gradient-to-r from-[#6b31ff] to-[#5123d4] hover:from-[#7a48ff] hover:to-[#6133eb] text-white font-black py-4 px-10 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(107,49,255,0.4)] transition-all duration-300">
                        <span className="relative z-10 flex items-center text-sm md:text-base uppercase tracking-widest">
                            Quero Cobrar em Dólar <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </a>
                </div>
            </div>

            {/* Image Block */}
            <div className="md:w-[45%] flex justify-center w-full mt-8 md:mt-0 relative group">
                <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(107,49,255,0.2)] pointer-events-none">
                    <Image 
                        src="/gravi.jpg" 
                        alt="Capa do Livro Arte Magnética" 
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>

        </div>
    </header>
  );
}
