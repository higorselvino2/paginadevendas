'use client';
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  
  useGSAP(() => {
    const tl = gsap.timeline({});
    
    // Tensão cinematográfica: espera um pouco e revela de baixo para cima lentamente com fade out.
    // Duração prolongada para o tom épico (>=1.2s) e ease "expo.out".
    tl.fromTo('.hero-badge', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', delay: 0.8 }
      )
      .fromTo('.hero-title-word', 
        { y: 60, opacity: 0, rotationX: -20 },
        { y: 0, opacity: 1, rotationX: 0, duration: 1.5, stagger: 0.15, ease: 'power3.out' },
        '-=1.0'
      )
      .fromTo('.hero-subtitle', 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out' },
        '-=1.2'
      )
      .fromTo('.hero-cta', 
        { scale: 0.95, y: 30, opacity: 0 },
        { scale: 1, y: 0, opacity: 1, duration: 1.5, ease: 'expo.out' },
        '-=1.2'
      )
      .fromTo('.hero-img', 
        { opacity: 0, y: 50, filter: 'blur(10px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 2, ease: 'power3.out' },
        '-=1.5'
      );

    // O scroll indicator some ao descer.
    gsap.to('.scroll-indicator', {
      scrollTrigger: {
        trigger: container.current,
        start: 'top top',
        end: '+=300',
        scrub: true,
      },
      opacity: 0,
      y: 50,
      ease: 'none',
    });

  }, { scope: container });

  return (
    <header ref={container} className="relative min-h-screen flex items-center justify-center pt-24 pb-16 z-10 border-b border-gray-900 overflow-hidden">
        {/* Placeholder Cinematográfico de Vídeo */}
        <div className="absolute inset-0 pointer-events-none z-0">
            {/* O "Vídeo" seria inserido aqui. Substituo por um gradiente que simula luz de background. */}
            <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-purple-900/20 blur-[150px] rounded-full animate-pulse" style={{ animationDuration: '6s' }} />
            <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-900/10 blur-[120px] rounded-full animate-pulse" style={{ animationDuration: '8s' }} />
            {/* Vinheta escura nas bordas para focar no centro */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#050505_100%)]" />
        </div>

        <div className="container mx-auto px-4 max-w-6xl relative z-10 flex flex-col md:flex-row items-center gap-12">
            
            {/* Text Content */}
            <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
                
                <div className="hero-badge opacity-0 inline-flex items-center px-4 py-1.5 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold uppercase tracking-widest mb-8 shadow-[0_0_15px_rgba(124,58,237,0.2)]">
                    <span className="w-2 h-2 rounded-full bg-purple-400 mr-3 animate-pulse"></span>
                    O fim do "Postar e Rezar"
                </div>

                <h1 className="text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.1] mb-6 text-white tracking-tight drop-shadow-2xl hero-title perspective-1000">
                    <span className="hero-title-word inline-block opacity-0">Como</span>{' '}
                    <span className="hero-title-word inline-block opacity-0">artistas</span>{' '}
                    <span className="hero-title-word inline-block opacity-0">comuns</span>{' '}
                    <span className="hero-title-word inline-block opacity-0">fecham</span>{' '}
                    <span className="hero-title-word inline-block opacity-0 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500 drop-shadow-[0_0_15px_rgba(167,139,250,0.5)]">3 a 5 commissions</span>{' '}
                    <span className="hero-title-word inline-block opacity-0">por</span>{' '}
                    <span className="hero-title-word inline-block opacity-0">semana</span>{' '}
                    <span className="hero-title-word inline-block opacity-0 text-green-400 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]">em DÓLAR.</span>
                </h1>

                <p className="hero-subtitle opacity-0 text-gray-400 text-base md:text-lg lg:text-xl leading-relaxed mb-10 max-w-xl">
                    <span className="text-white font-semibold">Você não precisa de mais seguidores. Você precisa de 10 clientes certos.</span>{' '}
                    Descubra o método exato que transforma artistas ignorados pelo algoritmo em profissionais muito bem pagos no mercado internacional.
                </p>

                <div className="hero-cta opacity-0 w-full sm:w-auto">
                    <a href="#oferta" className="group relative inline-flex items-center justify-center w-full sm:w-auto bg-white hover:bg-gray-100 text-black font-black py-4 px-10 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-500">
                        <span className="relative z-10 flex items-center text-sm sm:text-base uppercase tracking-wider">
                            Quero Vender em Dólar <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </a>
                </div>
            </div>

            {/* Image / Book Mockup */}
            <div className="md:w-1/2 flex justify-center w-full mt-8 md:mt-0 relative group">
                <div className="hero-img opacity-0 relative w-[280px] sm:w-[350px] lg:w-[420px]">
                    {/* Glow behind image */}
                    <div className="absolute -inset-4 bg-gradient-to-br from-purple-600/30 to-indigo-600/30 rounded-2xl blur-3xl opacity-50 group-hover:opacity-80 transition duration-1000"></div>
                    
                    <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10 rotate-y-[-10deg] rotate-x-[5deg] transform-gpu hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-all duration-1000 ease-out">
                        {/* Como não temos a imagem real injetada ainda, prevemos a tag que o usuário vai usar */}
                        <img 
                            src="/Gravi.jpg" 
                            alt="Capa do Livro Arte Magnética" 
                            className="w-full h-auto object-cover"
                            onError={(e) => {
                                // Fallback caso a imagem não esteja no root public do usuário
                                e.currentTarget.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop";
                            }}
                        />
                    </div>
                </div>
            </div>

        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center opacity-70 text-gray-500">
            <span className="text-[10px] uppercase tracking-[0.3em] mb-2 font-bold">Deslize</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
    </header>
  );
}
