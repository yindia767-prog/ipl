import Link from "next/link";
import { Globe } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-white text-slate-400 py-12 border-t border-slate-100">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-black uppercase tracking-[0.3em]">
          <div className="flex flex-col items-center md:items-start gap-2">
            <p>© 2026 TATA IPL 2026 TICKET MARKETPLACE. ALL RIGHTS RESERVED.</p>
            <p className="opacity-50">This is a secondary marketplace. We are not affiliated with the BCCI or IPL.</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            <Link href="/privacy-policy" className="hover:text-slate-900 transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-900 transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-slate-900 transition-colors cursor-pointer">Accessibility</Link>
            <div className="flex items-center gap-2 text-slate-300">
              <Globe className="w-3 h-3" />
              <span>India (EN)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
