import Image from "next/image";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-white backdrop-blur-md border-b border-slate-100 h-16 md:h-20 flex items-center shadow-sm">
      <div className="container mx-auto px-4 max-w-7xl flex items-center justify-between h-full">
        <div className="flex items-center gap-4 md:gap-12">
          <Link href="/" className="flex items-center gap-2 md:gap-4 group">
            <div className="relative w-8 h-8 md:w-12 md:h-12 transform group-hover:scale-105 transition-transform duration-500">
              <Image 
                src="/ipl-logo.png" 
                alt="IPL Logo" 
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-slate-900 text-sm md:text-xl font-black tracking-tighter leading-none uppercase">
                TATA IPL <span className="text-[#f04e23]">2026</span>
              </span>
              <span className="text-[8px] md:text-[10px] text-[#f04e23] font-black uppercase tracking-[0.1em] md:tracking-[0.2em] leading-none mt-0.5 md:mt-1">
                Official Tickets
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link href="/#schedule" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#f04e23] transition-colors">Fixtures</Link>
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#f04e23] transition-colors">Venues</Link>
            <Link href="/" className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-[#f04e23] transition-colors">Support</Link>
          </nav>
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-2 md:gap-6">
          <Link 
            href="/" 
            className="px-4 md:px-8 py-2 md:py-3 bg-[#192356] hover:bg-[#f04e23] text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] rounded-lg md:rounded-xl transition-all shadow-lg shadow-blue-900/10 active:scale-95 whitespace-nowrap"
          >
            My Bookings
          </Link>
        </div>
      </div>
    </header>
  );
}
