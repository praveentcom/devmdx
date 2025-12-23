import "./globals.css";

import type { Metadata } from "next";
import { Google_Sans_Code, Google_Sans_Flex } from "next/font/google";

import { Providers } from "@/components/providers";

const fontSans = Google_Sans_Flex({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  adjustFontFallback: false,
});

const fontMono = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  adjustFontFallback: false,
});

import {
  SITE_DESCRIPTION,
  SITE_IMAGE,
  SITE_TITLE,
} from "@/components/helpers/config";
import { createPageMetadata } from "@/components/helpers/metadata";
import { BASE_URL, URLS } from "@/components/helpers/urls";
import { ClientLayout } from "@/components/layout/client-layout";
import { configData } from "@/data/config";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased min-h-screen flex flex-col max-w-full overflow-x-hidden`}
      >
        <Providers>
          <ClientLayout>{children}</ClientLayout>
        </Providers>
      </body>
    </html>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const metadata = createPageMetadata({
    description: SITE_DESCRIPTION,
    keywords: configData.seo.keywords,
    url: BASE_URL,
    image: SITE_IMAGE,
  });

  return {
    ...metadata,
    other: {
      ...metadata.other,
    },
    alternates: {
      ...metadata.alternates,
      types: {
        "application/rss+xml": [
          {
            url: `${BASE_URL}${URLS.RSS_FEED()}`,
            title: `${SITE_TITLE} RSS feed`,
          },
        ],
      },
    },
  };
}
