import Image from "next/image";
import Link from "next/link";
import { Mail, Globe, MapPin, Share2 } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#192356] text-white pt-20 md:pt-32 pb-12 overflow-hidden relative">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16 mb-20 md:mb-24">
          {/* Logo Section */}
          <div className="space-y-6 md:space-y-8 text-center md:text-left">
            <Link href="/" className="flex flex-col md:flex-row items-center md:items-center gap-4 group justify-center md:justify-start">
              <div className="relative w-12 h-12 md:w-14 md:h-14 transform group-hover:scale-105 transition-transform duration-500">
                <Image 
                  src="/ipl-logo.png" 
                  alt="IPL Logo" 
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h2 className="text-xl md:text-2xl font-black tracking-tighter leading-none uppercase text-white">
                  TATA IPL <span className="text-[#f04e23]">2026</span>
                </h2>
                <span className="text-[9px] md:text-[10px] text-[#f04e23] font-black uppercase tracking-[0.2em] leading-none mt-1">
                  Official Tickets
                </span>
              </div>
            </Link>
            <p className="text-xs md:text-sm font-medium text-white/50 leading-relaxed max-w-xs uppercase tracking-tight mx-auto md:mx-0">
              Experience the pulse of India's biggest cricket spectacle. Secure your seats for the most anticipated matches of the 19th season.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f04e23] hover:border-[#f04e23] transition-all cursor-pointer">
                <Share2 className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f04e23] hover:border-[#f04e23] transition-all cursor-pointer" title="Social">
                <Globe className="w-4 h-4" />
              </div>
              <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-[#f04e23] hover:border-[#f04e23] transition-all cursor-pointer" title="Contact">
                <Mail className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f04e23] mb-10">Match Center</h3>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-white/70">
              <li><Link href="/#schedule" className="hover:text-[#f04e23] transition-colors">Upcoming Fixtures</Link></li>
              <li><Link href="/" className="hover:text-[#f04e23] transition-colors">Tournament Table</Link></li>
              <li><Link href="/" className="hover:text-[#f04e23] transition-colors">Venue Guide</Link></li>
              <li><Link href="/" className="hover:text-[#f04e23] transition-colors">Live Scoreboard</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f04e23] mb-10">Customer Care</h3>
            <ul className="space-y-5 text-sm font-bold uppercase tracking-widest text-white/70">
              <li><Link href="/terms" className="hover:text-[#f04e23] transition-colors">Booking Policy</Link></li>
              <li><Link href="/terms" className="hover:text-[#f04e23] transition-colors">Refund Status</Link></li>
              <li><Link href="/accessibility" className="hover:text-[#f04e23] transition-colors">Accessibility</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[#f04e23] transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Office Info */}
          <div>
            <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f04e23] mb-10">Headquarters</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#f04e23] shrink-0" />
                <p className="text-sm font-bold uppercase tracking-tight text-white/70 leading-relaxed">
                  BCCI Cricket Centre, <br />
                  Wankhede Stadium, Mumbai <br />
                  400020, India
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#f04e23] shrink-0" />
                <p className="text-sm font-bold uppercase tracking-tight text-white/70">support@ipltickets.com</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pt-10 border-t border-white/5 text-[10px] font-black uppercase tracking-[0.4em] text-white/40">
          <p>© 2026 BCCI - IPL 19. ALL RIGHTS RESERVED.</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            <Link href="/privacy-policy" className="hover:text-white transition-colors cursor-pointer">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors cursor-pointer">Terms of Service</Link>
            <Link href="/accessibility" className="hover:text-white transition-colors cursor-pointer">Accessibility</Link>
            <div className="flex items-center gap-2 text-white/60">
              <Globe className="w-3 h-3" />
              <span>International (EN)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
