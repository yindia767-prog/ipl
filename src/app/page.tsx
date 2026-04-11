import { MatchFilterList } from "@/components/match-filter-list";
import { getMatches } from "@/lib/matches";
import { Ticket, Zap, Trophy } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Ticket Booking",
  description: "Secure your seats for TATA IPL 2026. Official ticketing partner for all matches.",
};

export default async function Home() {
  const searchableMatches = await getMatches();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Enhanced Creative Hero Section */}
      <section className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-[#12193b]">
        {/* Background Visuals */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-[#12193b] via-[#12193b]/70 to-[#12193b]/30 z-10" />
          {/* Animated Background Gradients */}
          <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse duration-[7s]" />
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#f04e23]/10 rounded-full blur-[100px] animate-pulse duration-[5s] delay-1000" />
          
          {/* Subtle Creative Mesh/Pattern */}
          <div className="absolute inset-0 opacity-[0.15] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] mix-blend-overlay" />
        </div>

        <div className="container mx-auto px-4 relative z-20 flex flex-col items-center">
          {/* Decorative Badge */}
          <div className="inline-flex items-center gap-2 md:gap-3 px-4 md:px-6 py-1.5 md:py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em] mb-8 md:mb-12 animate-in fade-in slide-in-from-top-4 duration-1000">
            <Trophy className="w-3.5 h-3.5 text-[#f04e23]" />
            Grand Season 2026
            <div className="w-1.5 h-1.5 rounded-full bg-[#f04e23] animate-ping" />
          </div>

          <div className="relative group">
            <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white tracking-tighter leading-[0.8] mb-6 md:mb-8 text-center uppercase animate-in zoom-in-95 duration-1000">
              BEYOND THE <br />
              <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] via-[#ff7c5c] to-[#f04e23] bg-[length:200%_auto] animate-gradient-x drop-shadow-[0_0_25px_rgba(240,78,35,0.4)]">BOUNDARY</span>
            </h1>
          </div>
          
          <p className="text-lg md:text-2xl text-white/70 max-w-2xl mb-10 md:mb-14 text-center font-medium tracking-tight animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Immerse yourself in 2026's biggest cricket spectacle. <br className="hidden md:block" />
            Select your match and witness history.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 animate-in zoom-in-95 duration-1000">
            <Link 
              href="#schedule" 
              className="group relative px-10 md:px-12 py-4 md:py-5 bg-[#f04e23] hover:bg-[#d9441f] text-white font-black rounded-xl md:rounded-2xl flex items-center gap-3 md:gap-4 transition-all hover:scale-105 active:scale-95 shadow-2xl shadow-[#f04e23]/30 uppercase tracking-[0.1em] text-xs md:text-sm overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <Ticket className="w-4 h-4 md:w-5 md:h-5" />
              Book Tickets Now
              <Zap className="w-3.5 h-3.5 md:w-4 md:h-4 animate-bounce" />
            </Link>
          </div>
        </div>

        {/* Floating Abstract Element */}
        <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] border-[40px] border-white/5 rounded-full z-10" />
      </section>

      {/* Main Schedule Section */}
      <section id="schedule" className="bg-white">
        <div className="bg-[#192356] h-40 md:h-56 flex items-center mb-[-4rem] relative z-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              The <span className="text-white/30">Schedule</span>
            </h2>
            <div className="h-1.5 w-32 bg-[#f04e23] mt-4 rounded-full" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-32">
          <MatchFilterList allMatches={searchableMatches} />
        </div>
      </section>
    </div>
  );
}
