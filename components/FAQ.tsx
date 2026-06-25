'use client';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: "Sou iniciante e não sou tão bom, vai funcionar?",
    a: "Sim! Você não precisa desenhar como um mestre, você precisa saber se posicionar. O método foca em achar o cliente certo para o nível que você tem hoje."
  },
  {
    q: "Em quanto tempo vejo resultados?",
    a: "Os primeiros resultados podem aparecer nos primeiros dias se você aplicar as estratégias de prospecção. O foco é te guiar até a sua primeira comissão em dólar rapidamente."
  },
  {
    q: "Não sei falar inglês, e agora?",
    a: "Você receberá o nosso pack de Scripts Prontos em Inglês. Eles foram desenhados para gerar uma comunicação educada, persuasiva e direta ao ponto. Você só precisa copiar e colar."
  },
  {
    q: "O acesso é vitalício?",
    a: "Sim! Adquirindo o método hoje por apenas R$ 37, você garante acesso vitalício ao material completo e todas as planilhas/scripts, sem mensalidades."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-5xl font-black text-white text-center mb-12">Dúvidas Frequentes</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
               <div 
                  key={i} 
                  className={`border border-gray-800 rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#111]' : 'bg-transparent'}`}
               >
                 <button 
                   onClick={() => setOpenIndex(isOpen ? null : i)}
                   className="w-full flex items-center justify-between p-6 text-left"
                 >
                   <span className="text-white font-bold text-lg md:text-xl">{faq.q}</span>
                   <ChevronDown className={`w-6 h-6 text-green-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                 </button>
                 
                 <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                 >
                   <p className="text-gray-400 pb-6 text-base md:text-lg leading-relaxed">{faq.a}</p>
                 </div>
               </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
