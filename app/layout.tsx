// src/app/layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SATAPANA | Web Developer Portfolio", // สิ่งที่จะขึ้นบน Tab Browser
  description: "Portfolio of SATAPANA, a Web Developer specializing in Next.js and Modern Web Tech.", // คำอธิบายเวลาแชร์ลิงก์
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}