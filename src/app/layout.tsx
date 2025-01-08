import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StepMEI | Abertura Inteligente de MEI e CNPJ",
  description: "Simplifique a abertura do seu MEI e CNPJ com a StepMEI. Processos ágeis, gamificados e seguros para transformar sua ideia em realidade.",
  icons: {
    icon: "/Logo.png",
  },
  openGraph: {
    title: "StepMEI | Abertura Inteligente de MEI e CNPJ",
    description: "Você é uma empresa de contabilidade online? Automatize e gamifique a abertura de MEI e CNPJ com a StepMEI. Transforme processos burocráticos em uma jornada envolvente.",
    images: [
      {
        url: "/Logo.png",
        alt: "Logo da StepMEI",
      },
    ],
    type: "website",
    locale: "pt_BR",
    url: "https://stepmei.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "StepMEI | Abertura Inteligente de MEI e CNPJ",
    description: "StepMEI: transforme a abertura de empresas em uma jornada gamificada.",
    site: "@stepmei",
    images: "/Logo.png",
  },
  robots: "index, follow", // Alterado para permitir indexação, se desejado.
  keywords: [
    "StepMEI",
    "Abertura MEI",
    "Gamificação",
    "Contabilidade online",
    "Abertura CNPJ",
    "Tecnologia contábil",
    "Gestão de negócios",
    "Empreendedorismo",
    "MEI fácil",
    "MEI gamificado",
  ],
  authors: [
    { name: "StepMEI", url: "https://stepmei.com.br" },
  ],
  creator: "StepMEI",
  publisher: "StepMEI",
  category: "Tecnologia e Negócios",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
    <link rel="icon" href="/Logo.png" />


      <body className={cn("h-screen", geistSans.variable)}>
        {children}
        <Toaster position="top-right" expand={true} richColors closeButton />
      </body>
    </html>
  );
}
