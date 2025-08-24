import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { Navigation } from "@/components/navigation/Navigation";
import { Footer } from "@/components/ui/footer";
import { AnimatedLayout } from "@/components/layout/animated-layout";
import { profileData } from "@/data/profile";
import { generateOpenGraphImage } from "@/lib/helpers/image";
import { BASE_URL } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
  description: profileData.profile.description,
  openGraph: {
    siteName: `${profileData.profile.firstName} ${profileData.profile.lastName}`,
    url: BASE_URL,
    images: [
      profileData.profile.ogCoverImage ||
        generateOpenGraphImage(profileData.profile.firstName),
    ],
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
          <Navigation />
          <main id="main-content" className="flex-1">
            <AnimatedLayout>{children}</AnimatedLayout>
          </main>
          <Footer />
        </ThemeProvider>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Global code copy functionality for markdown code blocks
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
