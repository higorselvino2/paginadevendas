'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function TheApp() {
  const container = useRef<HTMLDivElement>(null);

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
      .from('.app-frame', { y: 40, opacity: 0, duration: 1.2, stagger: 0.2, ease: 'power3.out' }, '-=0.8');

  }, { scope: container });

  return (
    <section ref={container} className="py-12 md:py-16 bg-[#050505] relative overflow-hidden">
        
        {/* Glows */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-12">
                <span className="app-badge inline-block border border-green-500/50 bg-green-500/10 text-green-400 font-black tracking-widest text-[10px] uppercase mb-4 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)]">O Seu Maior Diferencial</span>
                <h2 className="app-title text-3xl md:text-5xl font-black mb-6 text-white leading-tight">O Assistente <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Web App</span></h2>
                <p className="app-desc text-gray-400 text-lg md:text-xl leading-relaxed">
                    Não é apenas um PDF. Você recebe acesso vitalício a um <strong className="text-white">Assistente de Vendas Pro</strong> com Inteligência Artificial integrada para quebrar de vez a barreira do inglês.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[1, 2, 3].map((num) => (
                    <div key={num} className="app-frame relative w-full aspect-square max-w-[400px] mx-auto rounded-3xl overflow-hidden border border-gray-800 shadow-[0_0_30px_rgba(124,58,237,0.15)] group bg-[#111]">
                        <Image 
                            src={`/appimg${num}.png`} 
                            alt={`App frame ${num}`}
                            fill
                            className="object-cover transition-transform duration-700"
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
