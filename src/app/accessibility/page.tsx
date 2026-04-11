import { Accessibility as AccessibilityIcon, Eye, Ear, UserCheck, ShieldCheck } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Accessibility",
  description: "Our commitment to providing an inclusive experience for all IPL 2026 fans.",
};

export default function Accessibility() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f04e23]/5 rounded-full blur-[150px] animate-pulse" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <AccessibilityIcon className="w-4 h-4 text-[#f04e23]" />
            Inclusive Experience
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Accessi<span className="text-[#f04e23]">bility</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Commitment to All Fans</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-24">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter leading-tight mb-8">
              Cricket is for <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f04e23] to-[#ff7c5c]">EVERYONE</span>
            </h2>
            <p className="text-slate-500 font-medium leading-loose text-lg uppercase tracking-tight max-w-2xl mx-auto">
              We are dedicated to ensuring that our digital platform and physical match experiences are accessible to individuals of all abilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center">
              <Eye className="w-12 h-12 text-[#f04e23] mb-6" />
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 Small">Visual Aids</h3>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
                High contrast modes & screen reader optimization for our booking portal.
              </p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center">
              <UserCheck className="w-12 h-12 text-[#f04e23] mb-6" />
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 Small">Wheelchair Access</h3>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
                Dedicated seating categories in all TATA IPL 2026 partner venues.
              </p>
            </div>
            <div className="p-10 bg-slate-50 border border-slate-100 rounded-[2.5rem] flex flex-col items-center text-center">
              <Ear className="w-12 h-12 text-[#f04e23] mb-6" />
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4 Small">Assisted Hearing</h3>
              <p className="text-slate-500 text-[11px] font-bold uppercase tracking-wider leading-relaxed">
                T-Loop systems available in select premium stands and corporate boxes.
              </p>
            </div>
          </div>

          <div className="bg-[#192356] p-12 md:p-16 rounded-[4rem] text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl font-black uppercase tracking-tight mb-8 flex items-center gap-4">
                <ShieldCheck className="w-10 h-10 text-[#f04e23]" />
                Compliance Standards
              </h2>
              <div className="space-y-8">
                <p className="text-white/60 font-medium leading-relaxed">
                  Our website aims to conform to the World Wide Web Consortium (W3C) Web Content Accessibility Guidelines (WCAG) 2.1 Level AA platform wide.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="pb-8 border-b border-white/10">
                    <span className="text-[#f04e23] font-black uppercase text-[10px] tracking-widest block mb-1">Keyboard Nav</span>
                    <p className="text-xs font-bold uppercase tracking-tight text-white/40">Full site navigation support</p>
                  </div>
                  <div className="pb-8 border-b border-white/10">
                    <span className="text-[#f04e23] font-black uppercase text-[10px] tracking-widest block mb-1">Aria Labels</span>
                    <p className="text-xs font-bold uppercase tracking-tight text-white/40">Descriptive interactive elements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
