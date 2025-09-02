import "../styles/globals.css";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Analytics } from "@/components/analytics/Analytics";
import { WebVitals } from "@/components/analytics/WebVitals";
import { PrefetchProvider } from "@/components/providers/prefetch-provider";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { configData } from "@/data/config";
import { BASE_URL } from "@/lib/constants";
import { SITE_DESCRIPTION, SITE_IMAGE, SITE_TITLE } from "@/lib/helpers/config";
import { createPageMetadata } from "@/lib/helpers/metadata";

import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col max-w-full overflow-x-hidden`}
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
              <Providers>{children}</Providers>
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

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    keywords: configData.seo.keywords?.join(", ") || "",
    url: BASE_URL,
    image: SITE_IMAGE,
  });

  return metadata;
}
