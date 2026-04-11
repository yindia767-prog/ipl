import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { CheckCircle2, Ticket, Printer, Share2, ArrowRight, Star, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ThankYouPage({ params }: PageProps) {
  const { id } = await params;

  return (
    <main className="min-h-screen bg-white">
      {/* Success Hero */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        {/* Animated Background Gradients */}
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse duration-[7s]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#f04e23]/10 rounded-full blur-[100px] animate-pulse duration-[5s] delay-1000" />
        
        <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-emerald-500 rounded-full flex items-center justify-center mb-10 shadow-2xl shadow-emerald-500/20 animate-in zoom-in duration-700">
            <CheckCircle2 className="w-12 h-12 text-white" />
          </div>
          
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter leading-none mb-6 uppercase text-center">
            YOU ARE <span className="text-emerald-500">GOING!</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/50 font-black uppercase tracking-[0.2em] mb-12 text-center">
            Reservation Confirmed <span className="mx-4 text-white/20">|</span> ID: {id.slice(0, 8)}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="px-10 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-black rounded-2xl flex items-center gap-3 transition-all active:scale-95 uppercase tracking-widest text-xs">
              <Printer className="w-4 h-4" />
              Download Receipt
            </button>
            <button className="px-10 py-4 bg-white/10 hover:bg-white/20 text-white font-black rounded-2xl flex items-center gap-3 transition-all active:scale-95 uppercase tracking-widest text-xs border border-white/10">
              <Share2 className="w-4 h-4" />
              Share Ticket
            </button>
          </div>
        </div>
      </section>

      {/* Match Details Summary */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-white rounded-[4rem] shadow-2xl shadow-slate-200/50 p-10 md:p-20 border border-slate-100 relative -mt-32">
            <div className="flex flex-col items-start gap-12">
              <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-b border-slate-100 pb-12">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#f04e23]/5 text-[#f04e23] rounded-full text-[10px] font-black uppercase tracking-widest mb-4">
                    <Star className="w-3 h-3 fill-current" />
                    Confirmed Match
                  </div>
                  <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase leading-none">
                    TATA IPL <span className="text-[#f04e23]">2026</span>
                  </h2>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-slate-900 text-white rounded-2xl flex flex-col items-center min-w-[100px]">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Gate</span>
                    <span className="text-xl font-black">04</span>
                  </div>
                  <div className="p-4 bg-[#f04e23] text-white rounded-2xl flex flex-col items-center min-w-[100px]">
                    <span className="text-[9px] font-black uppercase tracking-widest text-white/40 mb-1">Row</span>
                    <span className="text-xl font-black">12</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 w-full">
                <div className="space-y-10">
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                      <Calendar className="w-6 h-6 text-[#f04e23]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-1">Match Day</span>
                      <p className="text-lg font-black text-slate-900 leading-none">Stay tuned for match day notification</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center shrink-0 border border-slate-100">
                      <MapPin className="w-6 h-6 text-[#f04e23]" />
                    </div>
                    <div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 block mb-1">Match Venue</span>
                      <p className="text-lg font-black text-slate-900 leading-none">Refer to your booking details</p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white relative overflow-hidden flex flex-col items-center justify-center text-center">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#f04e23] blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2" />
                  <Ticket className="w-12 h-12 text-[#f04e23] mb-6" />
                  <h4 className="text-xl font-black uppercase tracking-tight mb-2">Digital Delivery</h4>
                  <p className="text-xs font-bold uppercase tracking-widest text-white/40 max-w-[200px] leading-relaxed">
                    E-Tickets will be sent to your registered email 48 hours prior to the match.
                  </p>
                </div>
              </div>

              <div className="w-full flex flex-col items-center gap-6 pt-12 border-t border-slate-100">
                <Link
                  href="/"
                  className="group inline-flex items-center gap-4 text-xs font-black uppercase tracking-[0.3em] text-slate-400 hover:text-slate-900 transition-colors"
                >
                  Return to Homepage
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300 mb-12">Verified Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-30 grayscale">
            <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">BCCI</div>
            <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">TATA</div>
            <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">SUPREMES</div>
            <div className="text-2xl font-black tracking-tighter uppercase text-slate-900">CRED</div>
          </div>
        </div>
      </section>
    </main>
  );
}
