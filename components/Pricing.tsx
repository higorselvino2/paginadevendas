'use client';
import { ShieldCheck, Check } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="oferta" className="py-16 md:py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
            
            <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Tudo isso por menos que uma única <span className="text-green-500">commission perdida</span>.
            </h2>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-12 max-w-2xl mx-auto">
                Se você fechar apenas 1 cliente gringo de $100 dólares depois de ler o método, o investimento já se pagou dezenas de vezes.
            </p>

            <div className="max-w-xl mx-auto bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-1 bg-green-500"></div>
                <div className="inline-flex items-center px-4 py-1.5 rounded bg-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider mb-6">
                    ACESSO IMEDIATO E VITALÍCIO
                </div>
                
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2">O Método Arte Magnética</h3>
                <p className="text-gray-400 mb-8">O passo a passo exato para fechar em dólar.</p>

                <div className="mb-8">
                    <span className="text-gray-500 line-through text-lg block mb-1">De R$ 297,00</span>
                    <div className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                        <span className="text-3xl">6x</span> R$ 6,94
                    </div>
                    <span className="text-green-400 font-bold text-lg mt-2 block">ou R$ 37,00 à vista</span>
                </div>

                <ul className="space-y-4 mb-8 text-left max-w-md mx-auto">
                    <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Método 4 Passos Completo</li>
                    <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Scripts Prontos em Inglês</li>
                    <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Ferramenta de Precificação</li>
                    <li className="flex items-center text-gray-300"><Check className="w-5 h-5 text-green-500 mr-3 shrink-0" /> Orientador de Nicho Direto ao Ponto</li>
                </ul>

                <a href="https://pay.kiwify.com.br/JOrEjmT" className="group relative flex items-center justify-center w-full bg-green-500 hover:bg-green-600 text-black font-black py-4 md:py-5 px-8 rounded-full transition-all duration-300 min-h-[54px] text-lg uppercase tracking-wider mb-4">
                    Quero cobrar em dólar hoje
                </a>
                
                <div className="flex items-center justify-center text-gray-500 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4 mr-2" /> Garantia incondicional de 7 dias
                </div>
            </div>

        </div>
    </section>
  );
}
