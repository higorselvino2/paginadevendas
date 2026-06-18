'use client';
import { Target, Map, HandCoins } from 'lucide-react';

export default function Mechanism() {
  const cards = [
    {
      icon: <Target className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
      title: '1. O Alvejamento do Cliente',
      desc: 'Nós vamos ignorar o Instagram. O seu cliente não está lá querendo comprar. Vamos adaptar o seu portfólio para virar um ímã nos fóruns especializados americanos.'
    },
    {
      icon: <Map className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
      title: '2. Encontrando o Dinheiro',
      desc: 'Descubra os canais do Discord e do Reddit onde milhares de pessoas pedem desenhos todos os dias e gastam em média $150 dólares por arte sem sequer pestanejar.'
    },
    {
      icon: <HandCoins className="w-10 h-10 md:w-12 md:h-12 text-purple-400" />,
      title: '3. Scripts Assertivos',
      desc: 'Com as mensagens que você receberá neste método, você fará exatamente o que a mente ocidental compradora espera: ser direto e dar segurança ao passar os preços.'
    }
  ];

  return (
    <section className="py-10 md:py-16 bg-[#080808] relative">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">O Que Você Vai <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Aprender Exatamente</span></h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Você não descobrirá "teorias místicas". Você receberá 3 etapas exatas que provam que ter sucesso não é "dom", mas pura lógica comercial em uma moeda 5x mais forte.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16">
                {cards.map((card, i) => (
                    <div key={i} className="bg-[#111] p-8 md:p-10 rounded-3xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-200">
                        <div className="mb-6">
                            {card.icon}
                        </div>
                        <h4 className="font-bold text-white text-xl mb-4">{card.title}</h4>
                        <p className="text-gray-400 text-base leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center pb-4">
               <a href="#oferta" className="group relative flex items-center justify-center w-full max-w-sm sm:w-auto bg-gradient-to-r from-[#6b31ff] to-[#5123d4] hover:from-[#7a48ff] hover:to-[#6133eb] text-white font-black py-4 px-10 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(107,49,255,0.4)] transition-all duration-300 min-h-[54px]">
                  <span className="relative z-10 flex flex-col items-center">
                    <span className="text-base md:text-lg uppercase tracking-widest flex items-center">QUERO ESSA SOLUÇÃO</span>
                    <span className="text-[10px] md:text-xs font-normal opacity-80 mt-1">Acesso Imediato</span>
                  </span>
               </a>
            </div>
        </div>
    </section>
  );
}
