'use client';
import { Gamepad2, Book, Users, MessageCircle, PenTool, DollarSign } from 'lucide-react';

export default function TheApp() {
  const features = [
    { icon: <Gamepad2 className="w-8 h-8 text-white" />, title: 'Plano Gamificado 14 Dias', desc: 'Um sistema claro e à prova de ansiedade. Um passo a passo exato do que você deve fazer dia a dia até fechar a sua primeira comissão gringa.' },
    { icon: <Book className="w-8 h-8 text-white" />, title: 'Dossiê: 20 Nichos Milionários', desc: 'Saiba exatamente onde clientes que pagam mais de $100 dólares por um desenho estão escondidos e o que eles querem comprar.' },
    { icon: <Users className="w-8 h-8 text-white" />, title: 'CRM Prático', desc: 'Seu painel profissional. Organize os pedidos, prazos e saiba exatamente quem já pagou e quem você precisa cobrar.' },
    { icon: <MessageCircle className="w-8 h-8 text-white" />, title: 'Scripts à Prova de Falhas', desc: 'Copiou, colou, vendeu. Escolha a situação e use nossas frases validadas em inglês nativo para contornar qualquer objeção de preço.' },
    { icon: <PenTool className="w-8 h-8 text-white" />, title: 'Gerador de Bio Magnética', desc: 'Estruture o seu perfil (Twitter, Reddit, Discord) como um verdadeiro profissional. Sem achismos, focado apenas no que o americano quer ler.' },
    { icon: <DollarSign className="w-8 h-8 text-white" />, title: 'A Calculadora em Dólar', desc: 'Descubra matematicamente o valor exato que você deve cobrar pela sua arte. Sem medo de cobrar caro, sem a frustração de cobrar barato demais.' },
  ];

  return (
    <section className="py-10 md:py-16 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto mb-16 flex flex-col items-center">
                <span className="app-badge inline-block border border-green-500/50 bg-green-500/10 text-green-400 font-bold tracking-widest text-[10px] uppercase mb-6 px-4 py-1.5 rounded-full shadow-[0_0_15px_rgba(34,197,94,0.2)]">
                  Mecanismo Único
                </span>
                <h2 className="app-title text-3xl md:text-5xl font-black mb-6 text-white leading-tight">O Sistema <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Arte Magnética</span></h2>
                <p className="app-desc text-gray-400 text-lg md:text-xl leading-relaxed">
                    Você não vai receber um "cursinho" em vídeo que te dá sono. Você recebe o acesso ao <strong>nosso portal restrito</strong> com as ferramentas exatas para iniciar sua prospecção hoje mesmo. E as objeções com inglês? Já foram destruídas.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {features.map((f, i) => (
                    <div key={i} className="app-feat group bg-[#0a0a0a] border border-gray-900 p-8 rounded-3xl hover:border-purple-500/30 transition duration-500 flex flex-col items-start shadow-[0_0_30px_rgba(0,0,0,0.3)]">
                        <div className="w-14 h-14 bg-gradient-to-br from-purple-600 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                            {f.icon}
                        </div>
                        <h3 className="font-bold text-white text-xl mb-3">{f.title}</h3>
                        <p className="text-gray-400 text-base leading-relaxed">{f.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  );
}
