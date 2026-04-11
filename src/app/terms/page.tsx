import { FileText, Gavel, AlertTriangle, CheckCircle2 } from "lucide-react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms and conditions for IPL 2026 ticket bookings through our marketplace.",
};

export default function TermsOfService() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-white">
        {/* Header */}
        <section className="bg-slate-900 py-32 relative overflow-hidden">
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#f04e23]/10 rounded-full blur-[120px]" />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Gavel className="w-4 h-4 text-[#f04e23]" />
              Platform Agreement
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
              Terms of <span className="text-[#f04e23]">Service</span>
            </h1>
            <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Valid for the 2026 Season</p>
          </div>
        </section>

        {/* Content */}
        <section className="py-32">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <AlertTriangle className="w-10 h-10 text-[#f04e23] mb-6" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Ticketing Policy</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase">
                  All ticket sales are final. Resale of tickets on unauthorized platforms is strictly prohibited by BCCI regulations.
                </p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <CheckCircle2 className="w-10 h-10 text-[#f04e23] mb-6" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Venue Conduct</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase">
                  Ticketholders must adhere to the stadium code of conduct. Failure to comply may lead to immediate eviction.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg text-sm font-black">01</span>
                  Ticket Assignment
                </h2>
                <p className="text-slate-600 font-medium leading-loose mb-4">
                  Tickets are assigned based on a first-come, first-served basis. Your reservation ID confirms your request, but final seat allocation is subject to payment verification and availability within the selected category.
                </p>
              </div>

              <div className="bg-slate-900 text-white p-12 rounded-[3rem] shadow-2xl shadow-slate-900/20">
                <h2 className="text-2xl font-black tracking-tight mb-6 uppercase flex items-center gap-4">
                  <FileText className="w-8 h-8 text-[#f04e23]" />
                  Cancellation & Refunds
                </h2>
                <p className="text-white/60 font-medium leading-loose mb-8">
                  Due to the high demand for TATA IPL 2026 tickets, we maintain a no-refund policy except in cases of match cancellation without a rescheduled date. Rescheduled matches will honor original tickets.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-[#f04e23] font-black uppercase text-[10px] tracking-widest block mb-2">Refund Processing</span>
                    <p className="text-xs font-bold uppercase tracking-tight text-white/40">7-10 Business Days</p>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <span className="text-[#f04e23] font-black uppercase text-[10px] tracking-widest block mb-2">Admin Fee</span>
                    <p className="text-xs font-bold uppercase tracking-tight text-white/40">Non-reimbursable</p>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 bg-slate-900 text-white flex items-center justify-center rounded-lg text-sm font-black">02</span>
                  Limitation of Liability
                </h2>
                <p className="text-slate-600 font-medium leading-loose">
                  The platform is not responsible for any delays in payment processing beyond our control or for lost or stolen tickets after digital delivery.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
