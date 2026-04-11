import { Metadata } from "next";
import { getMatches } from "@/lib/matches";
import { MatchFilterList } from "@/components/match-filter-list";
import { ShieldCheck, Lock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "Official Ticket Booking",
  description: "Secure your seats for TATA IPL 2026. Official ticketing partner for all matches.",
};

export default async function Home() {
  const searchableMatches = await getMatches();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header & Trust Section */}
      <section className="bg-slate-900 pt-32 pb-20 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f04e23]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-10 animate-in fade-in slide-in-from-top-4 duration-700">
            <ShieldCheck className="w-4 h-4 text-[#f04e23]" />
            Your payment is 100% secured
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            SELECT YOUR <br />
            <span className="text-[#f04e23]">MATCH</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] leading-relaxed">
            Official Ticketing Platform for TATA IPL 2026. <br />
            Safe, Verified & Instant Entry.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#f04e23] py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-widest">
              <Award className="w-4 h-4" />
              Official Partner
              <span className="opacity-30">•</span>
              <Lock className="w-4 h-4" />
              SSL Secured
              <span className="opacity-30">•</span>
              <ShieldCheck className="w-4 h-4" />
              Verified Tickets
            </div>
          ))}
        </div>
      </div>

      {/* Main Schedule Section */}
      <section id="schedule" className="bg-white pt-2">
        <div className="container mx-auto px-2 py-2">
          <MatchFilterList allMatches={searchableMatches} />
        </div>
      </section>
    </div>
  );
}
