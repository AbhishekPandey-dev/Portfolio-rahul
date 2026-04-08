import type { Metadata } from "next";
import { Space_Grotesk, Inter, Anton } from "next/font/google";
import "./globals.css";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const anton = Anton({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-anton",
});

export const metadata: Metadata = {
  title: "Rahul Sharma | Full Stack Developer & UI/UX Designer",
  description: "Portfolio of Rahul Sharma, a premium UI/UX Designer and Full Stack Developer specializing in high-end web experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${anton.variable} h-full antialiased dark scroll-smooth overflow-x-hidden`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col selection:bg-primary selection:text-black overflow-x-hidden bg-background text-on-surface">
        <CustomCursor />
        <Header />
        <main className="flex-grow pt-0">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
