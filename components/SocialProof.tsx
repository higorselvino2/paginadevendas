'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function SocialProof() {
  const container = useRef<HTMLDivElement>(null);
  
  // Nomes de placeholder, caso a imagem falhe o fallback entra em cena
  const proofs = [
    '/print valor recebido 01.jpg',
    '/print valor recebido 02.jpg',
    '/print valor recebido 03.jpg',
    '/print valor recebido 04.jpg',
    '/print valor recebido 06.jpg',
    '/print valor recebido 07.jpg',
    '/print valor recebido 08.jpg'
  ];

  useGSAP(() => {
    // GSAP Marquee for cinematic smooth scrolling without CSS jaggedness
    const track = container.current?.querySelector('.marquee-track');
    if(track) {
      gsap.to(track, {
        xPercent: -50, // Move half the track (first set of duplicated items)
        ease: 'none',
        duration: 40,
        repeat: -1,
      });
    }

    gsap.from('.proof-title', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: 'power3.out'
    });

  }, { scope: container });

  return (
    <section ref={container} className="py-24 overflow-hidden bg-[#030303] border-t border-gray-900">
        <div className="container mx-auto px-4 text-center mb-16">
            <h2 className="proof-title text-3xl md:text-5xl font-black text-white tracking-tight">O Mundo Está Comprando <span className="text-green-400">em Dólar</span></h2>
            <p className="text-gray-400 mt-4 text-lg">Notificações reais de pagamentos de artistas que deixaram o vitimismo.</p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-[150vw] left-1/2 -translate-x-1/2 h-[300px] flex items-center overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />

            <div className="marquee-track flex gap-6 absolute left-0 w-max pr-6">
                {/* Dobramos a array para criar o efeito infinito contínuo */}
                {[...proofs, ...proofs].map((src, i) => (
                    <div key={i} className="relative w-[280px] h-[220px] rounded-2xl overflow-hidden border border-gray-800 shadow-[0_0_20px_rgba(34,197,94,0.1)] shrink-0 grayscale hover:grayscale-0 transition duration-500">
                        <Image 
                            src={encodeURI(src)} 
                            alt={`Comprovante ${i}`} 
                            fill
                            referrerPolicy="no-referrer"
                            className="object-cover" 
                            onError={(e) => {
                                // Fallback mock image Se as fotos nao forem enviadas pra public
                                e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop";
                            }}
                        />
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
