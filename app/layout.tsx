import { Toaster } from "sonner";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme";
import { ClerkProvider } from '@clerk/nextjs'
import { ConvexClientProvider } from "@/components/providers/convex-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The perfect workspace, where all your desires and needs are met - Flowi",
  description: "The perfect workspace, where all your desires and needs are met",
  icons:{
    icon:[
      {
        media:"(prefers-color-scheme:light)",
        url:"/fav.svg",
        href:"/fav.svg",
      },
      {
        media:"(prefers-color-scheme:dark)",
        url:"/favblack.svg",
        href:"/favblack.svg",
      }
    ]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en" suppressHydrationWarning>
        <body className={inter.className}>
          <ConvexClientProvider>
            <EdgeStoreProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="system"
                enableSystem
                disableTransitionOnChange
                storageKey="flowi-theme"
              >
                <Toaster position="bottom-center"/>
                <ModalProvider/>
                {children}
              </ThemeProvider>
            </EdgeStoreProvider>
          </ConvexClientProvider>
        </body>
      </html>
  );
};
