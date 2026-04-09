import { Shield, Lock, Eye, FileText } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-slate-900 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8">
            <Shield className="w-4 h-4 text-[#f04e23]" />
            Security & Trust
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-none mb-4">
            Privacy <span className="text-[#f04e23]">Policy</span>
          </h1>
          <p className="text-slate-400 font-bold uppercase tracking-widest text-[11px]">Last Updated: April 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-slate max-w-none">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <Lock className="w-10 h-10 text-[#f04e23] mb-6" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Data Protection</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase">
                  We use industry-standard encryption to protect your sensitive booking data and payment information.
                </p>
              </div>
              <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl">
                <Eye className="w-10 h-10 text-[#f04e23] mb-6" />
                <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight mb-4">Transparency</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed uppercase">
                  We only collect data necessary to facilitate your TATA IPL 2026 ticket reservation experience.
                </p>
              </div>
            </div>

            <div className="space-y-16">
              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 bg-[#f04e23] text-white flex items-center justify-center rounded-lg text-sm">01</span>
                  Information Collection
                </h2>
                <p className="text-slate-600 font-medium leading-loose mb-4">
                  When you book tickets on our platform, we collect information such as your name, email address, phone number, and matching preferences. This data is essential for verified entry and personalized scheduling updates.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 bg-[#f04e23] text-white flex items-center justify-center rounded-lg text-sm">02</span>
                  How We Use Data
                </h2>
                <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                  <li className="list-none text-slate-600 font-bold uppercase text-[11px] tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#f04e23] rounded-full" />
                    To process and confirm your match day reservations.
                  </li>
                  <li className="list-none text-slate-600 font-bold uppercase text-[11px] tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#f04e23] rounded-full" />
                    To send official TATA IPL 2026 match-day updates.
                  </li>
                  <li className="list-none text-slate-600 font-bold uppercase text-[11px] tracking-widest flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-[#f04e23] rounded-full" />
                    To ensure secure payment verification through our partners.
                  </li>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-black text-slate-900 uppercase tracking-tight mb-6 flex items-center gap-4">
                  <span className="w-8 h-8 bg-[#f04e23] text-white flex items-center justify-center rounded-lg text-sm">03</span>
                  Security Measures
                </h2>
                <p className="text-slate-600 font-medium leading-loose">
                  Our platform utilizes SOC 2 compliant infrastructure provided by Supabase and multi-factor authentication for administrative access. We never store raw credit card numbers on our servers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
