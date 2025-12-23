"use client";

import { ContentContainer } from "@workspace/ui/layouts/content-container";
import { FooterContainer } from "@workspace/ui/layouts/footer-container";
import { HeaderContainer } from "@workspace/ui/layouts/header-container";

import { Footer } from "./footer";
import { Header } from "./header";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <main
      data-slot="page-layout"
      className="min-h-dvh w-full max-h-screen overflow-y-auto"
    >
      <div className="flex flex-col min-h-dvh">
        <HeaderContainer sticky variant="compact">
          <Header />
        </HeaderContainer>
        <ContentContainer variant="compact">{children}</ContentContainer>
        <FooterContainer variant="compact">
          <Footer />
        </FooterContainer>
      </div>
    </main>
  );
}
