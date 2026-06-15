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
    a: "Os primeiros resultados aparecem nos primeiros dias. O objetivo central do Plano Gamificado é estruturar o seu perfil e te guiar até a sua primeira comissão em dólares nas duas semanas iniciais."
  },
  {
    q: "Não sei falar inglês, e agora?",
    a: "É para isso que existe o Arte Magnética App. Ele gera a resposta educada, persuasiva e em inglês nativo para você apenas copiar e colar. O medo do inglês acabou."
  },
  {
    q: "O acesso é vitalício?",
    a: "Sim! Adquirindo o plano COMPLETO de R$ 37 hoje, você garante acesso vitalício ao Método e ao Assistente IA, sem ter que pagar nenhuma das futuras mensalidades."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-[#050505]">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-black text-white text-center mb-12">Últimas Dúvidas</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
               <div 
                  key={i} 
                  className={`border border-gray-800 rounded-xl overflow-hidden transition-colors duration-300 ${isOpen ? 'bg-[#0a0a0a]' : 'bg-transparent'}`}
               >
                 <button 
                   onClick={() => setOpenIndex(isOpen ? null : i)}
                   className="w-full flex items-center justify-between p-6 text-left"
                 >
                   <span className="text-white font-bold text-lg">{faq.q}</span>
                   <ChevronDown className={`w-5 h-5 text-purple-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                 </button>
                 
                 <div 
                    className={`px-6 overflow-hidden transition-all duration-300 ease-in-out`}
                    style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
                 >
                   <p className="text-gray-400 pb-6">{faq.a}</p>
                 </div>
               </div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
