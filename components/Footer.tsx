'use client';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-600 py-12 text-center border-t border-gray-900 mt-auto">
        <div className="container mx-auto px-4">
            <h2 className="text-xl font-black text-white/50 tracking-[0.2em] mb-4">CÓDIGO DA ARTE MAGNÉTICA</h2>
            <p className="font-bold text-gray-700 tracking-wide uppercase text-xs mb-6">© {new Date().getFullYear()}</p>
            <p className="max-w-2xl mx-auto leading-relaxed text-gray-800 text-[10px] sm:text-xs">
                Aviso Legal: Nenhuma informação contida neste produto deve ser interpretada como uma promessa de dinheiro fácil ou garantido sem esforço. O sucesso em vendas depende única e exclusivamente da sua dedicação em aplicar o sistema de forma consistente e profissional.
            </p>
        </div>
    </footer>
  );
}
