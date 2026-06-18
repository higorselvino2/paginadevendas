'use client';
import { Ghost, HandCoins, Scale } from 'lucide-react';

export default function PainPoints() {
  return (
    <section className="py-10 md:py-16 bg-[#050505] text-white">
        <div className="container mx-auto px-4 max-w-5xl">
            
            <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
              Seu talento é muito bom para você <span className="text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.4)]">ganhar tão pouco.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="bg-[#0a0a0a] border border-gray-900 rounded-2xl p-8 hover:border-red-900/30 transition-colors">
                    <Ghost className="w-8 h-8 text-red-500 mb-6" />
                    <h3 className="font-bold text-lg text-white mb-3">A Morte do Algoritmo</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Você posta aquela sua melhor arte e ninguém vê. Horas de suor jogadas no lixo de um feed que prioriza dancinhas e não dá valor para artistas de verdade.
                    </p>
                </div>
                
                <div className="bg-[#0a0a0a] border border-gray-900 rounded-2xl p-8 hover:border-red-900/30 transition-colors">
                    <HandCoins className="w-8 h-8 text-red-500 mb-6" />
                    <h3 className="font-bold text-lg text-white mb-3">O Desespero do Preço</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Você abaixa seu preço para R$ 30, R$ 40 em grupos nacionais só para fechar o mês com algo. Sentindo que está leiloando seu principal dom por qualquer miséria.
                    </p>
                </div>
                
                <div className="bg-[#0a0a0a] border border-gray-900 rounded-2xl p-8 hover:border-red-900/30 transition-colors">
                    <Scale className="w-8 h-8 text-red-500 mb-6" />
                    <h3 className="font-bold text-lg text-white mb-3">O Sentimento de Vergonha</h3>
                    <p className="text-gray-400 text-base leading-relaxed">
                        Enquanto você assiste outros artistas com traços muito piores fechando clientes e faturando alto, você tem a sensação amarga de que estagnou completamente.
                    </p>
                </div>
            </div>

            <div className="max-w-4xl mx-auto rounded-3xl p-[1px] bg-gradient-to-br from-purple-600 to-indigo-900/30 shadow-[0_0_40px_rgba(124,58,237,0.15)]">
               <div className="bg-[#050505] rounded-3xl p-8 md:p-12 text-center h-full">
                  <h3 className="text-2xl md:text-3xl font-black mb-4">
                     Se continuar postando sem parar e de graça fosse funcionar, você não estaria sofrendo para pagar as contas.
                  </h3>
                  <p className="text-purple-400 font-bold mb-6">Existe um erro silencioso que extermina a sua chance de ter a tranquilidade e reconhecimento de ser um artista respeitado.</p>
                  <p className="text-gray-400 text-base max-w-3xl mx-auto leading-relaxed">
                     Em vez de disputar atenção no Brasil com centenas de outros artistas cobrando R$ 40, saiba que americanos no Reddit, Discord e Twitter possuem um poder de troca onde $100 dólares para eles é uma pequena folga no orçamento. Você quer resolver o seu problema financeiro de forma imediata ou quer mais curtidas?
                  </p>
               </div>
            </div>

        </div>
    </section>
  );
}
