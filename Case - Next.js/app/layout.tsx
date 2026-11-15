import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sistema de Tickets | Meta",
  description: "Case final da fase trainee",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // A variável da fonte é injetada aqui na raiz
    <html lang="pt-BR" className={montserrat.variable}>
      {/* O body já aplica as cores base da identidade */}
      <body className="font-sans antialiased bg-meta-light text-meta-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}
