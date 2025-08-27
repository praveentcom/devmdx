import '../styles/globals.css';

import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import { Analytics } from '@/components/analytics/Analytics';
import { WebVitals } from '@/components/analytics/WebVitals';
import { AnimatedLayout } from '@/components/layout/animated-layout';
import { PrefetchProvider } from '@/components/providers/prefetch-provider';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { Footer } from '@/components/ui/footer';
import { Header } from '@/components/ui/header';
import { configData } from '@/data/config';
import { BASE_URL } from '@/lib/constants';
import {
  getAuthorName,
  getOgImage,
  getSeoDescription,
  getSeoTitle,
  getSiteName,
} from '@/lib/helpers/config';
import { generateOpenGraphImage } from '@/lib/helpers/image';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: getSeoTitle(),
  description: getSeoDescription(),
  keywords: configData.seo.keywords,
  openGraph: {
    title: configData.seo.ogTitle,
    description: configData.seo.ogDescription,
    siteName: getSiteName(),
    url: configData.seo.ogUrl || configData.misc.siteUrl || BASE_URL,
    images: [getOgImage() || generateOpenGraphImage(getAuthorName())],
  },
  twitter: {
    card: configData.seo.twitterCard || 'summary_large_image',
    site: configData.seo.twitterSite,
    creator: configData.seo.twitterCreator,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PrefetchProvider>
            <Header />
            <main id="main-content" className="flex-1">
              <AnimatedLayout>{children}</AnimatedLayout>
            </main>
            <Footer />
          </PrefetchProvider>
        </ThemeProvider>
        <Analytics />
        <WebVitals />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.copyCode = function(button) {
                const codeBlock = button.parentElement;
                const codeRows = Array.from(codeBlock.querySelectorAll('.flex'));
                const code = codeRows.map(row => {
                  const spans = row.querySelectorAll('span');
                  const codePart = spans[1];
                  return codePart ? (codePart.textContent || '') : '';
                }).join('\\n');
                
                navigator.clipboard.writeText(code).then(() => {
                  const originalSvg = button.innerHTML;
                  button.innerHTML = \`
                    <svg class="size-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                    </svg>
                  \`;
                  button.title = 'Copied!';
                  
                  setTimeout(() => {
                    button.innerHTML = originalSvg;
                    button.title = 'Copy code';
                  }, 2000);
                }).catch(err => {
                  console.error('Failed to copy code: ', err);
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
