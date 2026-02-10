import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { getDictionary } from "@/lib/get-dictionary";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Suetone Carneiro | Website",
  description: "Personal Website and portfolio of a Software Developer",
  openGraph:{
    title: "Suetone Carneiro | Website",
    description: "Website pessoal e portfólio",
    images: ['/home.png',]
  },
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang as 'en' | 'pt');
  return (
    <html lang={lang}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar dict={dictionary.nav} lang={lang} />
        <div className="flex-grow">
          {children}
        </div>
        <Footer lang={lang} />
      </body>
    </html>
  );
}
