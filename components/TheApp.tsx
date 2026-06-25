'use client';

export default function TheApp() {
  return (
    <section className="py-16 md:py-24 bg-[#050505] relative overflow-hidden text-center">
        <div className="container mx-auto px-4 max-w-3xl">
            <h2 className="text-6xl md:text-8xl font-black text-green-500 mb-4 tracking-tighter drop-shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                Direto ao ponto
            </h2>
            <h3 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                Sem curso de 40 horas. Sem enrolação.<br />
                Aplica na próxima conversa.
            </h3>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-6">
                Você não precisa de mais um curso gigante parado na aba &quot;depois eu vejo&quot;. Precisa de um método claro que cabe no seu intervalo e te dá a resposta exata <strong className="text-white">do que você deve responder hoje à tarde pro gringo.</strong>
            </p>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-10">
                Você assiste, abre o Discord/Reddit e <strong className="text-green-400">já aplica.</strong>
            </p>

            <div className="w-full flex justify-center">
               <a href="#oferta" className="group relative flex items-center justify-center w-full max-w-sm sm:w-auto bg-green-500 hover:bg-green-600 text-black font-black py-4 px-10 rounded-full transition-all duration-300 min-h-[54px]">
                  <span className="relative z-10 flex flex-col items-center">
                    <span className="text-base md:text-lg uppercase tracking-widest flex items-center">Quero acesso imediato</span>
                  </span>
               </a>
            </div>
        </div>
    </section>
  );
}
