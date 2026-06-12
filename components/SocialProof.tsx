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
  
    const proofs = [
      { src: '/depo1.jpg', width: 304, height: 420 },
      { src: '/depo2.jpg', width: 304, height: 351 },
      { src: '/depo3.jpg', width: 303, height: 292 },
      { src: '/depo4.jpg', width: 295, height: 371 },
      { src: '/depo5.jpg', width: 301, height: 353 },
      { src: '/depo7.jpg', width: 303, height: 368 },
      { src: '/depo8.jpg', width: 302, height: 309 },
      { src: '/depo9.jpg', width: 304, height: 309 },
      { src: '/depo10.jpg', width: 295, height: 397 },
      { src: '/depo11.jpg', width: 302, height: 374 },
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
        <div className="relative w-[150vw] md:w-[120vw] left-1/2 -translate-x-1/2 h-[300px] md:h-[400px] flex items-center overflow-hidden">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#030303] to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#030303] to-transparent z-10" />

            <div className="marquee-track flex gap-6 absolute left-0 w-max pr-6 items-center">
                {/* Dobramos a array para criar o efeito infinito contínuo */}
                {[...proofs, ...proofs].map((proof, i) => (
                    <div key={i} 
                         className="relative h-[250px] md:h-[350px] rounded-xl overflow-hidden border border-gray-800 shadow-[0_0_20px_rgba(34,197,94,0.1)] shrink-0 grayscale hover:grayscale-0 transition duration-500"
                         style={{ aspectRatio: `${proof.width} / ${proof.height}` }}
                    >
                        <Image 
                            src={encodeURI(proof.src)} 
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
