'use client';
import { XCircle, CheckCircle2 } from 'lucide-react';

export default function Comparison() {
  return (
    <section className="py-16 md:py-24 bg-[#050505] overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-5xl relative z-10">
            
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
                    A diferença entre o artista que implora e quem tem <span className="text-green-500">método</span>
                </h2>
            </div>
            
            <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                {/* Sem Método */}
                <div className="flex-1 bg-transparent border border-red-900/30 p-8 md:p-10 rounded-2xl relative">
                    <h3 className="font-bold text-xl md:text-2xl text-red-500 mb-8 flex items-center border-b border-red-900/30 pb-5">
                        <XCircle className="w-6 h-6 mr-3" /> Sem o método
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <span className="text-red-500 mr-3 font-bold">✕</span>
                            <span className="text-gray-300 text-base md:text-lg">Responde o preço e fica torcendo pro gringo decidir</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-3 font-bold">✕</span>
                            <span className="text-gray-300 text-base md:text-lg">Não sabe por que o cliente some depois de pedir informação</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-3 font-bold">✕</span>
                            <span className="text-gray-300 text-base md:text-lg">A conversa esfria e nunca mais volta</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-3 font-bold">✕</span>
                            <span className="text-gray-300 text-base md:text-lg">Trava e usa tradutor quando o cliente fala &quot;I&apos;ll think about it&quot;</span>
                        </li>
                        <li className="flex items-start">
                            <span className="text-red-500 mr-3 font-bold">✕</span>
                            <span className="text-gray-300 text-base md:text-lg">Depende da sorte, de viralizar e do algoritmo</span>
                        </li>
                    </ul>
                </div>

                {/* Com Método */}
                <div className="flex-1 bg-[#0a0a0a] border border-green-500/30 p-8 md:p-10 rounded-2xl relative shadow-[0_0_40px_rgba(34,197,94,0.05)]">
                    <h3 className="font-bold text-xl md:text-2xl text-green-400 mb-8 flex items-center border-b border-green-500/20 pb-5">
                        <CheckCircle2 className="w-6 h-6 mr-3" /> Com o método
                    </h3>
                    <ul className="space-y-6">
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-base md:text-lg">Conduz a conversa passo a passo até o pagamento em PayPal</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-base md:text-lg">Sabe exatamente onde o cliente esfria e como reaquecer</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-base md:text-lg">Tem script pronto em inglês para &quot;vou pensar&quot;</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-base md:text-lg">Vende com previsibilidade cobrando em dólar, não com sorte</span>
                        </li>
                        <li className="flex items-start">
                            <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0 mt-0.5" />
                            <span className="text-gray-200 text-base md:text-lg">Repete o que funciona e escala suas commissions</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  );
}
