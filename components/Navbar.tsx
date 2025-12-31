// src/components/Navbar.tsx
import Link from 'next/link';

export default function Navbar() {
  return (
    // bg-black = ดำทึบ, h-20 = สูง 80px
    <nav className="fixed top-0 w-full z-50 bg-black border-b border-white/10 h-20 flex items-center">
      <div className="max-w-6xl mx-auto px-6 w-full flex items-center justify-between">
        
        {/* LOGO */}
        <Link href="/" className="text-3xl font-extrabold text-white tracking-tighter uppercase no-underline hover:opacity-80 transition-opacity">
          My Portfolio
        </Link>

        {/* MENU */}
        <div className="flex gap-16 text-lg font-bold">
          <Link href="/" className="text-white no-underline hover:text-gray-400 transition-colors">
            My work
          </Link>
          <Link href="/profile" className="text-white no-underline hover:text-gray-400 transition-colors">
            About me
          </Link>
        </div>
      </div>
    </nav>
  );
}