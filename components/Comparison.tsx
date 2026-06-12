'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { XCircle, CheckCircle2 } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Comparison() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 70%',
      }
    });

    tl.from('.comp-title', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out' })
      .from('.comp-desc', { y: 20, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.9')
      .from('.fail-card', { y: 50, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=0.9')
      .from('.mag-card', { y: 50, opacity: 0, duration: 1.5, ease: 'power3.out' }, '-=1.2');

  }, { scope: container });

  return (
    <section ref={container} className="py-24 md:py-32 bg-[#050505] border-t border-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="comp-title text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tight">O Fim da Era das <span className="text-red-500">Migalhas</span></h2>
                <p className="comp-desc text-gray-400 text-base md:text-xl leading-relaxed">Entenda exatamente o que está drenando sua energia e o que os artistas de alto valor estão fazendo diferente.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* O Caminho da Frustração */}
                <div className="fail-card flex-1 bg-[#0a0a0a] border border-red-900/30 p-8 md:p-10 rounded-[2rem] relative shadow-[0_0_30px_rgba(239,68,68,0.03)]">
                    <h3 className="font-bold text-xl md:text-2xl text-red-500 mb-8 flex items-center border-b border-red-900/30 pb-5">
                        <XCircle className="w-8 h-8 mr-4 opacity-80" /> O Caminho do Fracasso
                    </h3>
                    <ul className="space-y-8">
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">A Ilusão</span>
                            <span className="text-gray-300 text-base md:text-lg">Desenha sem estratégia, posta e reza para o algoritmo entregar.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">A Espera</span>
                            <span className="text-gray-300 text-base md:text-lg">Fica refém de seguidores que dão like, mas nunca sacam o cartão.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">A Concorrência</span>
                            <span className="text-gray-300 text-base md:text-lg">Disputa preço com dezenas de artistas disputando os mesmos 50 reais.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">O Resultado</span>
                            <span className="text-red-400 font-semibold text-base md:text-lg">Frustração, bloqueio criativo e sensação de inutilidade.</span>
                        </li>
                    </ul>
                </div>

                {/* O Caminho Magnético */}
                <div className="mag-card flex-1 bg-[#0c0a1a] border border-purple-500/40 p-8 md:p-10 rounded-[2rem] relative shadow-[0_0_50px_rgba(124,58,237,0.1)] lg:-translate-y-8 z-10">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] md:text-xs font-black px-6 py-2 rounded-full shadow-lg tracking-widest uppercase">O NOVO PADRÃO</div>
                    <h3 className="font-bold text-xl md:text-2xl text-purple-400 mb-8 flex items-center border-b border-purple-500/20 pb-5 mt-2">
                        <CheckCircle2 className="w-8 h-8 mr-4 text-green-400" /> O Caminho Magnético
                    </h3>
                    <ul className="space-y-8">
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">A Direção</span>
                            <span className="text-gray-200 text-base md:text-lg">Escolhe um nicho faminto (ex: RPG, Casais à distância).</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">A Ação</span>
                            <span className="text-gray-200 text-base md:text-lg">Vai pro ativamente aos fóruns gringos (Reddit, Discord) onde o dinheiro está.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">A Abordagem</span>
                            <span className="text-gray-200 text-base md:text-lg">Usa scripts persuasivos e diretos para o desejo de compra americano.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">O Resultado</span>
                            <span className="text-green-400 font-bold text-lg md:text-xl">Vendas previsíveis e lucro multiplicado em dólares.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
