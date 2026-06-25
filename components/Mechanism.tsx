'use client';

export default function Mechanism() {
  const cards = [
    {
      num: '1',
      title: 'O Alvejamento',
      desc: 'Nós vamos ignorar o Instagram. O seu cliente não está lá querendo comprar. Vamos adaptar o seu portfólio para virar um ímã nos fóruns especializados.'
    },
    {
      num: '2',
      title: 'A Prospecção',
      desc: 'Descubra os canais do Discord e do Reddit onde gringos pedem desenhos todos os dias e gastam $150 dólares por arte sem pestanejar.'
    },
    {
      num: '3',
      title: 'Scripts de Ouro',
      desc: 'Abordagens e respostas prontas em inglês que fazem exatamente o que a mente ocidental espera: ser direto e dar segurança ao passar os preços.'
    },
    {
      num: '4',
      title: 'O Fechamento',
      desc: 'Como cobrar usando o PayPal, garantindo que o dinheiro chegue rápido e seguro na sua conta bancária sem travas.'
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white mb-4 leading-tight tracking-tight">O método completo em <span className="text-purple-500">4 passos</span></h2>
                <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    Numa única leitura, eu te entrego o passo a passo exato para conduzir qualquer conversa em inglês até o pagamento.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-16">
                {cards.map((card, i) => (
                    <div key={i} className="bg-[#111] p-6 rounded-xl border border-gray-800 hover:border-purple-500/30 transition-colors duration-200">
                        <div className="text-4xl md:text-5xl font-black text-purple-500 mb-4 opacity-90">
                            {card.num}
                        </div>
                        <h4 className="font-bold text-white text-lg mb-2">{card.title}</h4>
                        <p className="text-gray-400 text-sm md:text-base leading-relaxed">{card.desc}</p>
                    </div>
                ))}
            </div>

            <div className="w-full flex justify-center pb-4">
               <a href="#oferta" className="group relative flex items-center justify-center w-full max-w-sm sm:w-auto bg-green-500 hover:bg-green-600 text-black font-black py-4 px-10 rounded-full transition-all duration-300 min-h-[54px]">
                  <span className="relative z-10 flex flex-col items-center">
                    <span className="text-base md:text-lg uppercase tracking-widest flex items-center">Quero o método completo</span>
                  </span>
               </a>
            </div>
        </div>
    </section>
  );
}
