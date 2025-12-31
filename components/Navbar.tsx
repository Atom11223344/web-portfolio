"use client";

import Link from "next/link";
import { Menu } from "lucide-react"; // ไอคอนแฮมเบอร์เกอร์
import { ModeToggle } from "@/components/ModeToggle"; // ปุ่มสลับสีที่เราทำไว้
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"; // เมนูเลื่อนด้านข้าง

export default function Navbar() {
  // ลิงก์เมนูต่างๆ เก็บไว้ในตัวแปร จะได้แก้ที่เดียว
  const navLinks = [
    { href: "/", label: "My work" },
    { href: "/profile", label: "About me" },
  ];

  return (
    // ใช้ bg-background/80 เพื่อให้สีพื้นหลังเปลี่ยนตาม theme (ขาว/ดำ) และมีความโปร่งใส
    <nav className="
      fixed top-0 w-full z-50 h-16 flex items-center
      bg-background/80 backdrop-blur-sm 
      transition-all duration-300
      
      /* 1. ขอบล่างหนา 2px */
      border-b-2 
      
      /* 2. สีขอบปกติ (เหมือนการ์ด) */
      border-zinc-400        /* Light: เทาเข้ม */
      dark:border-zinc-700   /* Dark: เทาสว่าง */

      /* 3. Hover Effect (ชี้ที่แถบเมนูแล้วขอบเปลี่ยนสีเข้ม/สว่างขึ้น) */
      hover:border-black     /* Light Hover: ดำสนิท */
      dark:hover:border-white /* Dark Hover: ขาวจั๊วะ */
    ">
      <div className="max-w-6xl mx-auto px-4 w-full flex items-center justify-between">
        
        {/* --- LOGO (ซ้ายสุด) --- */}
        {/* ใช้ text-foreground เพื่อให้สีตัวหนังสือเปลี่ยนตาม theme (ดำ/ขาว) */}
        <Link
          href="/"
          className="text-2xl font-extrabold text-foreground tracking-tighter uppercase hover:opacity-80 transition-opacity"
        >
          My Portfolio
        </Link>

        {/* --- DESKTOP MENU (แสดงเฉพาะจอใหญ่ md ขึ้นไป) --- */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors duration-300 hover:text-primary font-medium"
            >
              {link.label}
            </Link>
          ))}
          {/* ปุ่มสลับสี (Desktop) */}
          <ModeToggle />
        </div>

        {/* --- MOBILE MENU (แสดงเฉพาะจอมือถือ) --- */}
        <div className="md:hidden flex items-center gap-2">
          {/* ปุ่มสลับสี (Mobile) */}
          <ModeToggle />
          
          {/* ปุ่มแฮมเบอร์เกอร์ และ Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            {/* เนื้อหาที่จะเลื่อนออกมาจากด้านขวา */}
            <SheetContent side="right">
              <div className="flex flex-col gap-8 mt-8 text-xl font-bold">
                {navLinks.map((link) => (
                  // ใช้ SheetClose เพื่อให้กดลิงก์แล้วเมนูหุบกลับไป
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-foreground hover:text-muted-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}