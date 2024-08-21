import type { Metadata } from 'next';
import { Merriweather } from 'next/font/google';
import { ThemeProvider } from '~/components/theme-provider';
import { cn } from '~/lib/utils';
import './globals.css';

const fontSans = Merriweather({
  weight: ['300', '400', '700', '900'],
  subsets: ['vietnamese'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Health Track',
  description: 'A healthcare management',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-dark-300 font-sans antialiased', fontSans.variable)}>
        <ThemeProvider attribute='class' defaultTheme='dark' enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
