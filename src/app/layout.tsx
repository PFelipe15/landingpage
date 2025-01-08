import type { Metadata } from "next";
import { Geist    } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from 'sonner'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

 

export const metadata: Metadata = {
  title: "MEIpro",
  description: "Abertura Inteligente",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
           <body className={cn("h-screen", geistSans.variable)}>

        {children}
        <Toaster 
          position="top-right"
          expand={true}
          richColors
          closeButton
        />
      </body>
    </html>
  );
}
