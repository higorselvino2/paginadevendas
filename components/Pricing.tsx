'use client';
import { CheckCircle, X, ShieldCheck, AlertCircle } from 'lucide-react';

export default function Pricing() {
  return (
    <section id="oferta" className="py-24 md:py-32 bg-[#050505] border-t border-gray-900 relative">
        
        {/* Glow Effects */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            
            <div className="max-w-3xl mx-auto mb-16 text-center">
                 <h2 className="text-3xl md:text-5xl font-black text-white mb-6 leading-tight tracking-tight">
                    Qual Decisão Você Tomará <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Agora?</span>
                 </h2>
                 <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-6">
                    <strong>Imagine você daqui a algumas semanas:</strong> você acorda, abre o Paypal e tem o pagamento antecipado de $150 Dólares por uma única arte. Naquele mês você só pegou 4 clientes, o suficiente para te render um salário de quase R$ 3.000, trabalhando do seu jeito, sem depender de "likes" ou implorar atenção no Brasil.
                 </p>
                 <p className="text-purple-400 font-bold text-lg md:text-xl">
                    Essa vida está a um clique de distância.
                 </p>
            </div>

            <div className="max-w-3xl mx-auto mb-16 bg-[#0a0614] border border-purple-500/20 rounded-2xl p-8 md:p-10 shadow-[0_0_30px_rgba(124,58,237,0.1)]">
                <h3 className="text-xl md:text-2xl font-bold text-purple-400 mb-6 flex items-center justify-center gap-3 text-center">
                    <AlertCircle className="w-6 h-6 shrink-0" />
                    "Por que um método validado para vender em dólar custa tão barato?"
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                    Nós poderíamos facilmente cobrar 1.000 Reais por essa informação. Mas o nosso objetivo não é fazer dinheiro <strong>apenas com você</strong>, e sim <strong>com você prosperando</strong>. <br /><br />
                    O valor está subvalorizado porque nós queremos <strong>destruir a sua última desculpa</strong>. Queremos separar os artistas prontos para agir daqueles que só reclamam. Se você não pode investir R$ 37 na sua carreira, o mercado internacional simplesmente não funcionará para você.
                </p>
                <hr className="border-purple-500/20 mb-6" />
                <p className="text-white text-center font-bold text-lg md:text-xl">
                    Pense comigo: Se você fechar apenas 1 simples comissão de avaliação, o investimento já se pagará na hora, dezenas de vezes.
                </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-stretch justify-center">
                
                {/* Plano Básico */}
                <div className="w-full lg:w-5/12 bg-[#0a0a0a] border border-gray-800 rounded-[2rem] p-8 md:p-10 flex flex-col hover:border-gray-600 transition-colors opacity-90">
                    <h3 className="text-xl font-bold text-gray-300 uppercase tracking-widest mb-2">O Código Básico</h3>
                    <div className="mb-8">
                        <span className="text-red-500/70 line-through text-lg font-medium">De R$ 197</span>
                        <div className="text-white text-4xl font-black">R$ 17,00</div>
                    </div>
                    
                    <ul className="space-y-4 mb-10 flex-grow text-gray-400">
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gray-600 mr-3 shrink-0" /> Manual completo (O Código)</li>
                        <li className="flex items-start"><CheckCircle className="w-5 h-5 text-gray-600 mr-3 shrink-0" /> Planilha de Precificação</li>
                        <li className="flex items-start opacity-30"><X className="w-5 h-5 text-red-500 mr-3 shrink-0" /> <span className="line-through">Os 20 Nichos Fechados</span></li>
                        <li className="flex items-start opacity-30"><X className="w-5 h-5 text-red-500 mr-3 shrink-0" /> <span className="line-through">Scripts Prontos</span></li>
                    </ul>

                    <a href="https://pay.kiwify.com.br/s8ByRUH" target="_blank" rel="noopener noreferrer" className="w-full py-4 text-center rounded-xl bg-gray-800 text-white font-bold hover:bg-gray-700 transition uppercase tracking-widest">
                        Adquirir o Básico
                    </a>
                </div>

                {/* Plano Premium */}
                <div className="w-full lg:w-6/12 bg-[#100d1e] border-2 border-purple-500 shadow-[0_0_50px_rgba(124,58,237,0.15)] rounded-[2rem] p-0 flex flex-col relative overflow-hidden transform lg:-translate-y-4">
                    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-black text-center py-3 text-xs tracking-[0.2em] uppercase shadow-lg">
                        ⭐️ A ESCOLHA DOS VENCEDORES ⭐️
                    </div>
                    <div className="p-8 md:p-10 flex flex-col flex-grow">
                        <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-2">Arte Magnética <span className="text-purple-400">PRO</span></h3>
                        <div className="mb-8">
                            <span className="text-red-500/70 line-through text-lg font-medium">De R$ 297</span>
                            <div className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 text-6xl font-black">R$ 37,00</div>
                            <span className="text-gray-400 text-sm mt-2 block">(Acesso vitalício imediato)</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-grow text-gray-300 font-medium">
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">O Código (Passo a Passo)</span></li>
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">Plano Prático de 14 Dias</span></li>
                            
                            <li className="flex items-start bg-purple-900/30 p-4 rounded-xl border border-purple-500/50 my-6 transform hover:scale-[1.02] transition-transform">
                                <ShieldCheck className="w-8 h-8 text-purple-400 mr-4 shrink-0" /> 
                                <div>
                                    <span className="font-black text-white text-lg block">App Exclusivo (Acesso Vitalício)</span>
                                    <span className="text-sm text-purple-300">Sua IA pessoal para gerar scripts em inglês perfeito e organizar todo o seu fluxo de clientes americanos.</span>
                                </div>
                            </li>

                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">Top 20 Nichos Lucrativos</span></li>
                            <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-400 mr-4 shrink-0" /> <span className="pt-0.5">Pack de Scripts Prontos</span></li>
                        </ul>

                        <a href="https://pay.kiwify.com.br/JOrEjmT" target="_blank" rel="noopener noreferrer" className="w-full py-5 text-center rounded-xl bg-white text-black font-black hover:bg-gray-200 transition shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] text-lg tracking-wider uppercase">
                            QUERO VENDER MAIS CARO
                        </a>
                        <p className="text-center mt-3 text-red-500 font-bold uppercase text-xs tracking-widest animate-pulse">Aviso: Oferta Válida Apenas Por Tempo Limitado</p>
                        <p className="text-center mt-2 text-xs text-gray-500 font-medium"><ShieldCheck className="inline w-3 h-3 mr-1" /> Garantia incondicional de 7 dias</p>
                    </div>
                </div>

            </div>

            {/* Garantia Section */}
            <div className="max-w-4xl mx-auto mt-24 bg-[#0a0a0a] border border-gray-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 shadow-[0_0_40px_rgba(34,197,94,0.05)]">
                <div className="shrink-0 transform hover:scale-105 transition-transform duration-500">
                    <div className="relative w-32 h-32 md:w-40 md:h-40 drop-shadow-[0_0_30px_rgba(234,179,8,0.3)]">
                        <img 
                            src="/garantia.png" 
                            alt="Garantia Incondicional de 7 dias"
                            className="w-full h-full object-contain"
                            onError={(e) => {
                                // Fallback mock image Se a foto não estiver no public
                                e.currentTarget.src = "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=2670&auto=format&fit=crop";
                            }}
                        />
                    </div>
                </div>
                <div>
                   <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                     O Seu Dinheiro de Volta. <span className="text-green-400">Risco Zero.</span>
                   </h3>
                   <p className="text-gray-400 text-lg leading-relaxed">
                     Você tem a minha <strong>Garantia Incondicional de 7 Dias</strong>. Entre no portal, devore o material, acesse o aplicativo de Inteligência Artificial e veja com seus próprios olhos. 
                     Se por qualquer motivo você não gostar e achar que não serve para você, eu devolvo 100% do seu dinheiro. Sem perguntas, sem burocracia. O risco é todo meu.
                   </p>
                </div>
            </div>

        </div>
    </section>
  );
}
