import { Metadata } from "next";
import { getMatches } from "@/lib/matches";
import { MatchFilterList } from "@/components/match-filter-list";
import { ShieldCheck, Lock, Award } from "lucide-react";

export const metadata: Metadata = {
  title: "IPL 2026 Ticket Booking",
  description: "Secure your seats for TATA IPL 2026. Premium ticket marketplace for all matches.",
};

export default async function Home() {
  const allMatches = await getMatches();
  
  // Filter matches to show only those from tomorrow (+1 day) onwards
  const now = new Date();
  const tomorrow = new Date(now);
  tomorrow.setDate(now.getDate() + 1);
  tomorrow.setHours(0, 0, 0, 0);

  const searchableMatches = allMatches.filter(m => {
    const matchDate = new Date(m.date);
    return matchDate >= tomorrow;
  });

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
            PREMIUM <br />
            <span className="text-[#f04e23]">RESALE</span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-400 font-bold uppercase tracking-[0.2em] text-[11px] leading-relaxed">
            Leading Marketplace for TATA IPL 2026 Tickets. <br />
            Guaranteed Delivery & Secure Entry.
          </p>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="bg-[#f04e23] py-4 overflow-hidden border-b border-white/10">
        <div className="flex whitespace-nowrap animate-marquee items-center gap-12">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-4 text-white text-[10px] font-black uppercase tracking-widest">
              <Award className="w-4 h-4" />
              Guaranteed Delivery
              <span className="opacity-30">•</span>
              <Lock className="w-4 h-4" />
              SSL Secured
              <span className="opacity-30">•</span>
              <ShieldCheck className="w-4 h-4" />
              Verified Authenticity
            </div>
          ))}
        </div>
      </div>

      {/* Fan Guard & Stats Section */}
      <section className="bg-slate-50 py-20 border-b border-slate-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Guarantee Box */}
            <div className="bg-[#192356] rounded-[3rem] p-10 md:p-16 text-white relative overflow-hidden shadow-2xl">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#f04e23] blur-[100px] opacity-20 -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#f04e23] rounded-2xl flex items-center justify-center mb-8 shadow-xl shadow-[#f04e23]/20">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-6 leading-tight">
                  THE FAN <br /><span className="text-[#f04e23]">GUARD</span> PROMISE
                </h2>
                <p className="text-white/60 font-medium text-sm md:text-base mb-10 leading-relaxed uppercase tracking-wide">
                  Your entry is 100% guaranteed. If your tickets aren't valid for entry, we'll refund <span className="text-white font-black">100% of your money.</span> Period.
                </p>
                <div className="flex items-center gap-4 py-4 px-6 bg-white/5 border border-white/10 rounded-2xl">
                  <div className="w-2 h-2 bg-[#f04e23] rounded-full animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em]">Verified Seller Network</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 md:gap-10">
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-black text-[#192356] tracking-tighter">15K+</h3>
                <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Tickets Delivered</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-black text-[#192356] tracking-tighter">4.8/5</h3>
                <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Customer Rating</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-black text-[#192356] tracking-tighter">100%</h3>
                <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Secure Checkout</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-4xl md:text-6xl font-black text-[#192356] tracking-tighter">24/7</h3>
                <p className="text-[10px] md:text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Expert Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Schedule Section */}
      <section id="schedule" className="bg-white pt-2">
        <div className="container mx-auto px-2 py-2">
          <MatchFilterList allMatches={searchableMatches} />
        </div>
      </section>
    </div>
  );
}
