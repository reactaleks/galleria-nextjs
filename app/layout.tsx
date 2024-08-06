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
      <body className='font-baskerville min-h-[100vh] xl:h-[100vh] 2xl:min-h-[100vh]'>
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
