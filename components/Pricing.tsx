'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CheckCircle, X, ShieldCheck } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Pricing() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });

    tl.from('.price-header', { opacity: 0, y: 30, duration: 1.2, ease: 'power3.out' })
      .from('.price-basic', { opacity: 0, x: -30, duration: 1.2, ease: 'power3.out' }, '-=0.8')
      .from('.price-premium', { opacity: 0, scale: 0.95, duration: 1.5, ease: 'expo.out' }, '-=1.0');

  }, { scope: container });

  return (
    <section id="oferta" ref={container} className="py-24 md:py-32 bg-[#050505] border-t border-gray-900 relative">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            
            <div className="price-header text-center mb-16 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white tracking-tight">Um Ticket Ridículo para <span className="text-purple-400">Destruir Suas Desculpas</span></h2>
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                    Feche <strong className="text-green-400">uma única commission</strong> e o sistema já se pagará dezenas de vezes. Se você não pode investir R$ 37 no seu futuro, o mercado internacional não é para você.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">
                
                {/* Plano Básico */}
                <div className="price-basic w-full lg:w-5/12 bg-[#0a0a0a] border border-gray-800 rounded-[2rem] p-8 md:p-10 flex flex-col hover:border-gray-600 transition-colors opacity-90">
                    <h3 className="text-xl font-bold text-gray-300 uppercase tracking-widest mb-2">O Código Básico</h3>
                    <div className="mb-8">
                        <span className="text-red-500/70 line-through text-lg font-medium">De R$ 197</span>
                        <div className="text-white text-4xl font-black">R$ 17,00</div>
                    </div>
                    
                    <ul className="space-y-4 mb-10 flex-grow text-gray-400">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gray-600 mr-3 shrink-0" /> Manual completo (O Código)</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gray-600 mr-3 shrink-0" /> Planilha de Precificação</li>
                        <li className="flex items-start opacity-30"><X className="w-5 h-5 text-red-500 mr-3 shrink-0" /> <span className="line-through">Acesso ao Web App IA</span></li>
                        <li className="flex items-start opacity-30"><X className="w-5 h-5 text-red-500 mr-3 shrink-0" /> <span className="line-through">Scripts Prontos</span></li>
                    </ul>

                    <a href="https://pay.kiwify.com.br/s8ByRUH" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-center rounded-xl bg-gray-800 text-white font-bold hover:bg-gray-700 transition uppercase tracking-widest">
                        Adquirir o Básico
                    </a>
                </div>

                {/* Plano Premium */}
                <div className="price-premium w-full lg:w-6/12 bg-[#100d1e] border-2 border-purple-500 shadow-[0_0_50px_rgba(124,58,237,0.15)] rounded-[2rem] p-0 flex flex-col relative overflow-hidden transform lg:-translate-y-4">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-center py-3 text-xs tracking-[0.2em] uppercase shadow-lg">
                        ⭐️ A ESCOLHA DOS VENCEDORES ⭐️
                    </div>
                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Arte Magnética <span className="text-purple-400">PRO</span></h3>
                        <div className="mb-8">
                            <span className="text-red-500/70 line-through text-lg font-medium">De R$ 297</span>
                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-6xl font-black">R$ 37,00</div>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow text-gray-300 font-medium">
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">O Código (Passo a Passo)</span></li>
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">Plano Prático de 14 Dias</span></li>
                            
                            <li className="flex items-start bg-purple-900/30 p-4 rounded-xl border border-purple-500/50 my-6 transform hover:scale-[1.02] transition-transform">
                                <ShieldCheck className="w-8 h-8 text-purple-400 mr-4 shrink-0" /> 
                                <div>
                                    <span className="font-black text-white text-lg block">Acesso Vitalício ao APP</span>
                                    <span className="text-sm text-purple-300">Sua IA pessoal para gerar scripts em inglês perfeito e organizar clientes.</span>
                                </div>
                            </li>

                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">Top 20 Nichos Lucrativos</span></li>
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">Pack de Scripts Prontos</span></li>
                        </ul>

                        <a href="https://pay.kiwify.com.br/JOrEjmT" target="_blank" rel="noopener noreferrer" className="w-full py-5 text-center rounded-xl bg-white text-black font-black hover:bg-gray-200 transition shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] text-lg tracking-wider uppercase">
                            QUERO VENDER MAIS CARO
                        </a>
                        <p className="text-center mt-4 text-xs text-gray-500 font-medium"><ShieldCheck className="inline w-3 h-3 mr-1" /> Garantia incondicional de 7 dias</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  );
}
