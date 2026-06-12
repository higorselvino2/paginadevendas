'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Gamepad2, Brain, MessageCircle, Users, Calculator, Wand2 } from 'lucide-react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TheApp() {
  const container = useRef<HTMLDivElement>(null);

  const features = [
    { icon: <Gamepad2 className="w-8 h-8 text-white" />, title: 'Plano Gamificado', desc: 'Sistema bloqueado dia a dia até a primeira comissão gringa.' },
    { icon: <Brain className="w-8 h-8 text-white" />, title: 'Dossiê de Nichos', desc: '20 nichos milionários. Saiba onde achar o cliente certo.' },
    { icon: <Users className="w-8 h-8 text-white" />, title: 'CRM Integrado', desc: 'Seu painel profissional para organizar os pedidos e faturas.' },
    { icon: <MessageCircle className="w-8 h-8 text-white" />, title: 'Scripts em Inglês', desc: 'Copie a frase perfeita e nativa na hora de vender.' },
    { icon: <Wand2 className="w-8 h-8 text-white" />, title: 'Geradores IA', desc: 'Travou? Crie textos de Storytelling e ganchos em segundos.' },
    { icon: <Calculator className="w-8 h-8 text-white" />, title: 'Calc em Dólar', desc: 'Descubra o valor exato para não cobrar barato nunca mais.' },
  ];

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });

    tl.from('.app-badge', { scale: 0.8, opacity: 0, duration: 1.2, ease: 'expo.out' })
      .from('.app-title', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=0.8')
      .from('.app-desc', { y: 30, opacity: 0, duration: 1.2, ease: 'power3.out' }, '-=1')
      .from('.app-frame', { y: 40, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, '-=0.8')
      .from('.app-feat', { y: 40, opacity: 0, duration: 1.2, stagger: 0.1, ease: 'power3.out' }, '-=0.8');

  }, { scope: container });

  return (
    <section ref={container} className="py-12 md:py-16 bg-[#050505] relative overflow-hidden">
        
        {/* Glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-8">
                <span className="app-badge inline-block border border-green-500/50 bg-green-500/10 text-green-400 font-black tracking-widest text-[10px] uppercase mb-4 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)]">O Seu Maior Diferencial</span>
                <h2 className="app-title text-3xl md:text-5xl font-black mb-6 text-white leading-tight">O Assistente <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Web App</span></h2>
                <p className="app-desc text-gray-400 text-lg md:text-xl leading-relaxed">
                    Não é apenas um PDF. Você recebe acesso vitalício a um <strong className="text-white">Assistente de Vendas Pro</strong> com Inteligência Artificial integrada para quebrar de vez a barreira do inglês.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="app-frame relative w-full aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(124,58,237,0.15)] group">
                        <Image 
                            src={`/appimg${num}.png`} 
                            alt={`App frame ${num}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-700"
                            onError={(e) => {
                                e.currentTarget.src = `https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=400&h=400&auto=format&fit=crop`;
                            }}
                        />
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((f, i) => (
                    <div key={i} className="app-feat group bg-[#111] border border-gray-800 p-8 rounded-3xl hover:border-purple-500/50 transition duration-500 hover:-translate-y-2 flex flex-col items-start shadow-[0_0_30px_rgba(0,0,0,0.5)]">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(124,58,237,0.4)] group-hover:scale-110 transition-transform duration-500">
                            {f.icon}
                        </div>
                        <h3 className="font-bold text-white text-xl mb-3">{f.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
