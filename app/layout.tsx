import type { Metadata } from "next";
import { Inter } from "next/font/google";
import {
  ContextProvider,
  SlideShowContextProvider,
} from "@/components/ContextProviderComponent";
import NavBar from "@/components/NavBarComponent";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Galleria App",
  description: "Website created as part of front end mentor challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ContextProvider>
          <SlideShowContextProvider>
            <NavBar />
            {children}
          </SlideShowContextProvider>
        </ContextProvider>
      </body>
    </html>
  );
}
