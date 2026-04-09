import { HelpCircle, ShieldAlert } from "lucide-react";
import { type BookingPolicy } from "@/lib/settings";

export function TermsAndFaqs({ policy }: { policy: BookingPolicy }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 py-24">
      {/* Terms Side */}
      <div className="space-y-12">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-red-50 text-red-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] w-fit">
            <ShieldAlert className="w-3.5 h-3.5" />
            Terms & Conditions
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 border-l-4 border-red-500 pl-6">
            Booking <span className="text-red-500">Policy</span>
          </h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose">Please read these terms carefully before making a reservation.</p>
        </div>

        <ul className="space-y-6">
          {policy.terms.map((term, i) => (
            <li key={i} className="group flex items-start gap-6 p-6 bg-slate-50 border border-slate-100 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500">
              <span className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 text-xs font-black text-slate-400 group-hover:bg-red-500 group-hover:border-red-500 group-hover:text-white transition-all">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-sm font-bold text-slate-600 leading-relaxed uppercase tracking-tight">{term}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* FAQs Side */}
      <div className="space-y-12">
        <div className="flex flex-col gap-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-[0.3em] w-fit">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h3 className="text-3xl font-black uppercase tracking-tighter text-slate-900 border-l-4 border-blue-500 pl-6">
            Frequent <span className="text-blue-500">FAQs</span>
          </h3>
          <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose">Everything you need to know about the IPL 2026 Ticketing experience.</p>
        </div>

        <div className="space-y-6">
          {policy.faqs.map((faq, i) => (
            <details key={i} className="group p-6 bg-white border border-slate-100 rounded-3xl hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 open:bg-slate-50">
              <summary className="flex items-center justify-between cursor-pointer list-none">
                <h4 className="text-sm font-black text-slate-900 uppercase tracking-tight leading-relaxed pr-8">{faq.question}</h4>
                <div className="w-8 h-8 rounded-xl bg-slate-100 flex items-center justify-center group-open:bg-blue-500 group-open:text-white transition-all">
                  <PlusMinusIcon />
                </div>
              </summary>
              <div className="mt-6 pt-6 border-t border-slate-200 animate-in fade-in duration-500">
                <p className="text-sm font-bold text-slate-500 leading-relaxed uppercase tracking-tight mb-4">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

function PlusMinusIcon() {
  return (
    <svg className="w-2.5 h-2.5 transition-transform" viewBox="0 0 10 10">
      <rect className="group-open:rotate-90 origin-center transition-transform" y="4.5" width="10" height="1" fill="currentColor"/>
      <rect className="rotate-0 origin-center transition-transform" x="4.5" width="1" height="10" fill="currentColor"/>
    </svg>
  );
}
