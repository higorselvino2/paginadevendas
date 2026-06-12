'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

export default function PainPoints() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    // GSAP ScrollTrigger timeline to simulate a camera pushing forward
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: '+=350%', // Hold the pin for a long scroll
        pin: true,
        scrub: 1.5, // Cinematic heavy smoothing
      }
    });

    // We scale from 0.8 (far) to 1 (focus) to 1.5 (past the camera)
    
    // Slide 1
    tl.to('.pain-1', { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.inOut' })
      .to('.pain-1', { opacity: 0, scale: 1.3, duration: 1.5, ease: 'power2.in' })
      
      // Slide 2
      .to('.pain-2', { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.inOut' }, '-=0.5')
      .to('.pain-2', { opacity: 0, scale: 1.3, duration: 1.5, ease: 'power2.in' })
      
      // Slide 3
      .to('.pain-3', { opacity: 1, scale: 1, duration: 1.5, ease: 'power2.inOut' }, '-=0.5')
      .to('.pain-3', { opacity: 0, scale: 1.3, duration: 1.5, ease: 'power2.in' });

  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="h-screen bg-[#030303] text-white flex items-center justify-center relative overflow-hidden shadow-[inset_0_0_100px_#000]">
        
        {/* Background vignette & subtlety */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#111_0%,_#000_100%)] pointer-events-none" />

        <div className="pain-1 absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-75 p-6 text-center px-4">
            <h2 className="text-red-500 text-sm md:text-lg font-bold tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">A Síndrome do Fantasma</h2>
            <p className="text-3xl md:text-6xl font-black max-w-4xl leading-[1.1] tracking-tight">Você posta. Espera. <br /><span className="text-gray-600 block mt-2">Nada acontece.</span></p>
            <p className="text-gray-400 mt-6 md:mt-8 text-base md:text-xl max-w-2xl leading-relaxed">Horas de dedicação sendo completamente ignoradas por um algoritmo que não se importa com a sua arte.</p>
        </div>

        <div className="pain-2 absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-75 p-6 text-center px-4">
            <h2 className="text-red-500 text-sm md:text-lg font-bold tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]">A Humilhação do Preço</h2>
            <p className="text-3xl md:text-6xl font-black max-w-4xl leading-[1.1] tracking-tight">Seu traço melhora, mas <br /><span className="text-gray-600 block mt-2">você continua invisível.</span></p>
            <p className="text-gray-400 mt-6 md:mt-8 text-base md:text-xl max-w-2xl leading-relaxed">Abaixa o preço para 30 Reais só para não ficar parado, sentindo que seu esforço não vale nada.</p>
        </div>

        <div className="pain-3 absolute inset-0 flex flex-col items-center justify-center opacity-0 scale-75 p-6 text-center px-4">
            <h2 className="text-purple-400 text-sm md:text-lg font-bold tracking-widest uppercase mb-4 drop-shadow-[0_0_10px_rgba(167,139,250,0.4)]">A Falsa Promessa</h2>
            <p className="text-3xl md:text-6xl font-black max-w-4xl leading-[1.1] tracking-tight">A culpa não é da sua arte.</p>
            <p className="text-gray-300 mt-6 md:mt-8 text-base md:text-xl max-w-3xl leading-relaxed">É de quem te convenceu que perder sua juventude gravando <span className="text-red-400 font-semibold underline decoration-red-900 border-red-500">vídeos virais</span> te faria fechar clientes de alto valor.</p>
        </div>

    </section>
  );
}
