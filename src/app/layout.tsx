import { redirect } from 'next/navigation';
import { Inter } from 'next/font/google';

import { Navbar } from '@/components';

import { useLanguage, useTheme } from '@/hooks';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Portifólio | Eduardo Maciel',
  icons: {
    icon: '/icon/favicon.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();
  const { language } = useLanguage();

  if (!language) {
    redirect('/');
  }

  return (
    <html lang="pt-BR" className={theme}>
      <body className={inter.className}>
        <Navbar {...{ theme, language }} />

        {children}
      </body>
    </html>
  );
}
