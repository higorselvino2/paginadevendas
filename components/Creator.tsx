'use client';
import Image from 'next/image';

export default function Creator() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16 bg-[#111] border border-gray-800 rounded-3xl p-8 md:p-12">
          
          <div className="relative w-full max-w-[300px] aspect-[4/5] rounded-2xl overflow-hidden shrink-0">
             <Image 
                src="/eu.jpg" 
                alt="Criador do Arte Magnética"
                fill
                className="object-cover"
             />
          </div>

          <div className="max-w-xl text-left">
             <p className="text-green-500 font-bold text-xs md:text-sm tracking-widest uppercase mb-4">Quem vai te ensinar</p>
             <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Higor Selvino</h2>
             <p className="text-green-400 font-bold mb-6">Ilustrador que vende no mercado internacional e criador do Arte Magnética.</p>
             
             <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-4">
               Ele ajuda artistas a estruturarem processos de venda que realmente convertem em dólar, unindo estratégia, prospecção ativa e o campo de batalha das comunidades internacionais.
             </p>
             <p className="text-gray-300 text-base md:text-lg leading-relaxed">
               Os 4 passos não são teoria de vídeo de YouTube. São o que ele usa no dia a dia para transformar arte em <strong className="text-green-400">faturamento previsível em moeda forte.</strong>
             </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}
