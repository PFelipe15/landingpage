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
  title: "MEIpro | Abertura Inteligente de MEI e CNPJ",
  description: "Simplifique a abertura do seu MEI e CNPJ com a MEIpro. Processos ágeis, automatizados e seguros para transformar sua ideia em realidade.",
  icons: {
    icon: "/Logo.png",
  },
  openGraph: {
    title: "MEIpro | Abertura Inteligente de MEI e CNPJ",
    description: "Você é uma empresa de contabilidade online? Automatize a abertura de MEI e CNPJ com a MEIpro. Transforme processos burocráticos em algo simples e rápido, para sua equipe e clientes",
    images: [
      {
        url: "/Logo.png",
        alt: "Logo da MEIpro",
      },
    ],
    type: "website",
    locale: "pt_BR",
    url: "https://meipro.com.br",
  },
  twitter: {
    card: "summary_large_image",
    title: "MEIpro | Abertura Inteligente de MEI e CNPJ",
    description: "MEIpro: simplifique a abertura de empresas com tecnologia e automação.",
    site: "@meipro",
    images: "/Logo.png",
  },
  robots: "index, follow", // Alterado para permitir indexação, se desejado.
  keywords: [
    "MEIpro",
    "Abertura MEI",
    "Automação de processos",
    "Contabilidade online",
    "Abertura CNPJ",
    "Tecnologia contábil",
    "Gestão de negócios",
    "Empreendedorismo",
    "MEI fácil",
    "MEI rápido",
  ],
  authors: [
    { name: "MEIpro", url: "https://meipro.com.br" },
  ],
  creator: "MEIpro",
  publisher: "MEIpro",
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
