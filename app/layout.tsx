import type {Metadata} from 'next';
import './globals.css'; // Global styles
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: 'Código da Arte Magnética | Clientes em Dólar',
  description: 'Como artistas comuns estão fechando de 3 a 5 commissions por semana em DÓLAR sem depender de algoritmo ou muitos seguidores.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning className="bg-[#050505] text-[#e5e7eb] antialiased selection:bg-purple-500 selection:text-white">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
