import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-slate-900 py-16 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[11px] font-black uppercase tracking-[0.2em]">
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-slate-900">© 2026 TATA IPL 2026 TICKET MARKETPLACE. ALL RIGHTS RESERVED.</p>
            <p className="text-slate-400 font-bold">This is a secondary marketplace. We are not affiliated with the BCCI or IPL.</p>
            <p className="text-slate-300 font-bold mt-1">Reg. Office: HQ 12, Level 4, Bandra Kurla Complex, Mumbai, MH 400051</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <Link href="/privacy-policy" className="hover:text-[#f04e23] transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#f04e23] transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-[#f04e23] transition-colors cursor-pointer">Accessibility</Link>
            <div className="flex items-center gap-2 text-slate-400">
              <Globe className="w-3" />
              <span>India (EN)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
