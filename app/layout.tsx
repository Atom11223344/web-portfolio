import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "@/components/Navbar"; // <--- 1. ต้อง import บรรทัดนี้

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
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}>
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {/* 2. ใส่ Navbar ไว้ตรงนี้ (เหนือ children) */}
            <Navbar /> 
            
            {children}
          </ThemeProvider>
      </body>
    </html>
  );
}