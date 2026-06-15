'use client';
import Image from 'next/image';
import { Globe, DollarSign, Users } from 'lucide-react';

export default function Creator() {
  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden shrink-0 shadow-[0_0_50px_rgba(255,255,255,0.05)] border-2 border-[#ffeedd]">
             <Image 
                src="/eu.jpg" 
                alt="Criador do Arte Magnética"
                fill
                className="object-cover"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />
          </div>

          <div className="max-w-xl">
             <h2 className="text-3xl md:text-5xl font-black text-white mb-1">O Criador</h2>
             <p className="text-purple-400 font-bold text-sm tracking-widest uppercase mb-6">Por trás do Arte Magnética</p>
             
             <p className="text-gray-300 text-lg leading-relaxed mb-8">
               Passei muito tempo travado no Brasil. Hoje, já realizei <strong className="text-white underline decoration-white underline-offset-4">mais de 200 ilustrações internacionais</strong> recebendo em <strong className="text-white">Dólar, Euro e Libra</strong> (com desenhos avaliados entre <strong className="text-green-400 font-bold">$100 a $300 dólares cada</strong>). Descobri o padrão do mercado internacional e decidi empacotar esse exato conhecimento para que você não precise passar anos no escuro.
             </p>

             <div className="border-t border-gray-800 pt-6">
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 bg-transparent border border-gray-800 rounded-lg px-4 py-2">
                    <Globe className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm font-medium">+200 Comissões</span>
                  </div>
                  <div className="flex items-center gap-2 bg-transparent border border-gray-800 rounded-lg px-4 py-2">
                    <DollarSign className="w-4 h-4 text-green-400" />
                    <span className="text-gray-300 text-sm font-medium">Recebendo em Moeda Forte</span>
                  </div>
                  <div className="flex items-center gap-2 bg-transparent border border-gray-800 rounded-lg px-4 py-2">
                    <Users className="w-4 h-4 text-purple-400" />
                    <span className="text-gray-300 text-sm font-medium">+300 Alunos</span>
                  </div>
                </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
