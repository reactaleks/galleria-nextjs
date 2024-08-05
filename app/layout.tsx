import type { Metadata } from "next";
import {
  ContextProvider,
  SlideShowContextProvider,
} from "@/components/ContextProviderComponent";
import NavBar from "@/components/NavBarComponent";
import "./globals.css";


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
      <body className='font-baskerville xl:h-screen xl:flex xl:flex-col xl:justify-between'>
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
