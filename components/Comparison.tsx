'use client';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-24 md:py-32 bg-[#050505] border-t border-gray-900 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-black mb-6 text-white leading-tight tracking-tight">Pare de Trabalhar <span className="text-red-500">Por Migalhas</span></h2>
                <p className="text-gray-400 text-base md:text-xl leading-relaxed">Entenda exatamente o contraste entre o artista que implora por curtidas no Brasil e o profissional que fecha $200 por semana vendendo pro exterior.</p>
            </div>
            
            <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
                {/* O Caminho da Frustração */}
                <div className="flex-1 bg-[#0a0a0a] border border-red-900/30 p-8 md:p-10 rounded-[2rem] relative shadow-[0_0_30px_rgba(239,68,68,0.03)]">
                    <h3 className="font-bold text-xl md:text-2xl text-red-500 mb-8 flex items-center border-b border-red-900/30 pb-5">
                        <XCircle className="w-8 h-8 mr-4 opacity-80" /> O Caminho Comum
                    </h3>
                    <ul className="space-y-8">
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">A Falsa Promessa</span>
                            <span className="text-gray-300 text-base md:text-lg">Desenha várias horas por dia e gasta o resto do tempo editando Reels que ninguém assiste.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">Os "Fãs"</span>
                            <span className="text-gray-300 text-base md:text-lg">Fica refém de seguidores que até elogiam o seu trabalho, mas fogem quando você fala de preço.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-gray-600 text-xs font-black uppercase tracking-widest mb-2">A Humilhação</span>
                            <span className="text-gray-300 text-base md:text-lg">Abaixa o preço e trabalha quase de graça no mercado interno para não ficar totalmente parado.</span>
                        </li>
                    </ul>
                </div>

                {/* O Caminho Magnético */}
                <div className="flex-1 bg-[#0c0a1a] border border-purple-500/40 p-8 md:p-10 rounded-[2rem] relative shadow-[0_0_50px_rgba(124,58,237,0.1)] lg:-translate-y-8 z-10">
                    <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] md:text-xs font-black px-6 py-2 rounded-full shadow-lg tracking-widest uppercase">MÉTODO PROVADO</div>
                    <h3 className="font-bold text-xl md:text-2xl text-purple-400 mb-8 flex items-center border-b border-purple-500/20 pb-5 mt-2">
                        <CheckCircle2 className="w-8 h-8 mr-4 text-green-400" /> A Escolha Inteligente
                    </h3>
                    <ul className="space-y-8">
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">A Precisão</span>
                            <span className="text-gray-200 text-base md:text-lg">Você escolhe ativamente um dos 20 nichos milionários lá de fora. O mercado que paga em dólar.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">A Prospecção</span>
                            <span className="text-gray-200 text-base md:text-lg">Vai cirurgicamente direto nas comunidades americanas, onde os clientes já estão prontos para comprar.</span>
                        </li>
                        <li className="flex flex-col">
                            <span className="text-purple-500/80 text-xs font-black uppercase tracking-widest mb-2">O Fechamento</span>
                            <span className="text-gray-200 text-base md:text-lg">Usa nossos scripts de vendas estruturados e fecha o negócio recebendo 5x mais sem precisar criar conteúdo de graça.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
