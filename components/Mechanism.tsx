'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { Target, Map, HandCoins } from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function Mechanism() {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container.current,
        start: 'top 75%',
      }
    });

    tl.from('.mech-pre', { opacity: 0, y: 20, duration: 1.2, ease: 'power3.out' })
      .from('.mech-title', { opacity: 0, y: 30, duration: 1.2, ease: 'power3.out' }, '-=0.9')
      .from('.mech-desc', { opacity: 0, y: 30, duration: 1.2, ease: 'power3.out' }, '-=0.9')
      .from('.mech-card', { opacity: 0, y: 50, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, '-=0.8');

  }, { scope: container });

  const cards = [
    {
      icon: <Target className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
      title: 'Posicionamento Sniper',
      desc: 'Transformar seu portfólio genérico em uma vitrine magnética que atrai clientes internacionais específicos.'
    },
    {
      icon: <Map className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
      title: 'Mapeamento de Demanda',
      desc: 'Parar de gritar para o vazio do algoritmo e ir exatamente para as comunidades onde clientes com cartão de crédito na mão estão.'
    },
    {
      icon: <HandCoins className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
      title: 'Oferta Irrecusável',
      desc: 'Aprender a apresentar o seu preço (em Dólares) com tanta segurança que o gringo vai sentir que está pagando barato.'
    }
  ];

  return (
    <section ref={container} className="py-24 md:py-32 bg-[#080808] relative">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
                <span className="mech-pre block text-xs font-black text-purple-500 uppercase tracking-widest mb-4">Aviso Crítico</span>
                <h2 className="mech-title text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">O Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Operacional</span></h2>
                <p className="mech-desc text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Isso <strong className="text-white">não é</strong> um curso de perspectiva, anatomia ou dancinha pro TikTok. É um protocolo de engenharia reversa focado em apenas uma métrica: <strong className="text-white border-b border-purple-500/50 pb-1">conversão em dólar.</strong>
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {cards.map((card, i) => (
                    <div key={i} className="mech-card bg-[#111] p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-500 group">
                        <div className="mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out origin-left">
                            {card.icon}
                        </div>
                        <h4 className="font-bold text-white text-xl mb-4">{card.title}</h4>
                        <p className="text-gray-400 text-base leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
