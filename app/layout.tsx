import { siteConfig } from '@/site.config';

import { Metadata, Viewport } from 'next';

import { fontMono, fontSans } from '@/lib/fonts';
import { cn } from '@/lib/utils';

import { ThemeProvider } from '@/components/theme-provider';

import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s - ${siteConfig.title}`,
  },
  description: siteConfig.description,
  icons: {
    icon: '/favicon.png',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            'relative flex min-h-screen flex-col bg-background font-sans antialiased',
            fontSans.variable,
            fontMono.variable
          )}
        >
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <div className="flex-1 bg-gradient-to-b from-green-600 to-green-900 px-10">
              {children}
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
