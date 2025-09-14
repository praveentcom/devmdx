"use client";

import { PageLayout } from "passport-ui/page-layout";
import { ThemeProvider } from "passport-ui/theme-provider";

import Providers from "@/app/providers";

import { PrefetchProvider } from "../providers/prefetch-provider";
import { Footer } from "./footer";
import { Header } from "./header";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <PrefetchProvider>
        <PageLayout
          header={<Header />}
          headerVariant="relaxed"
          headerSticky
          headerBlurred
          headerRevealStylesOnScroll
          footer={<Footer />}
          footerVariant="relaxed"
        >
          <Providers>{children}</Providers>
        </PageLayout>
      </PrefetchProvider>
    </ThemeProvider>
  );
}
