import type { Metadata } from 'next';
import { Inter, Syne } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav/Nav';
import Footer from '@/components/Footer/Footer';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '900'],
  variable: '--font-inter',
  display: 'swap',
});

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'Axon AI — Custom AI Solutions for Modern Business',
    template: '%s | Axon AI',
  },
  description:
    'Axon AI builds custom AI agents, automated workflows, and intelligent data pipelines that transform how businesses operate. Enterprise-grade. Fully tailored.',
  keywords: [
    'AI agency',
    'custom AI solutions',
    'AI agents',
    'workflow automation',
    'LLM integration',
    'RAG systems',
    'AI consulting',
    'enterprise AI',
    'business automation',
  ],
  openGraph: {
    title: 'Axon AI — Custom AI Solutions for Modern Business',
    description:
      'We build AI agents, automated workflows, and intelligent systems that give your business a compounding edge.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Axon AI — Custom AI Solutions',
    description: 'AI agents, workflow automation, and custom LLM systems built for your business.',
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${syne.variable}`}>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
