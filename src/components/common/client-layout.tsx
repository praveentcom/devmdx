"use client";

import { PageLayout } from "passport-ui/page-layout";
import { ThemeProvider } from "passport-ui/theme-provider";

import Providers from "@/app/providers";

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
      <PageLayout
        header={<Header />}
        headerOptions={{
          variant: "relaxed",
          sticky: true,
          blurred: true,
          revealStylesOnScroll: true,
        }}
        footer={<Footer />}
        footerOptions={{
          variant: "relaxed",
        }}
      >
        <Providers>{children}</Providers>
      </PageLayout>
    </ThemeProvider>
  );
}
