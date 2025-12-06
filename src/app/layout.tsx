import type { Metadata } from "next";
import { Inter , Calistoga } from "next/font/google";

import "./globals.css";


const inter = Inter({ subsets: ["latin"]});
const calistoga = Calistoga({ subsets: ["latin"] , weight: "400"});

export const metadata: Metadata = {
  title: "Skouza Portfolio",
  description: "Portfolio of Skouza | Fullstack Developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-gray-950 text-slate-50`}>
        {children}</body>
    </html>
  );
}
