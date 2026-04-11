"use client";

import { useState } from "react";
import { HelpCircle, X, ChevronRight, MessageSquare, ShieldCheck, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    q: "How will I receive my tickets?",
    a: "Tickets are dispatched as E-Tickets to your registered email 48 hours prior to the match day."
  },
  {
    q: "Is my payment secure?",
    a: "Yes, all transactions are processed via 256-bit SSL encrypted UPI gateways. Your payment is protected by our Fan Guard guarantee."
  },
  {
    q: "What is Fan Guard protection?",
    a: "Fan Guard ensures 100% money-back if your tickets aren't valid for entry or if the event is cancelled without a reschedule."
  },
  {
    q: "Can I cancel my booking?",
    a: "As per marketplace policy, bookings are final. However, you can relist your tickets on our platform if you cannot attend."
  }
];

export function HelpBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      {/* FAQ Panel */}
      <div className={cn(
        "bg-white rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] border border-slate-100 transition-all duration-500 origin-bottom-right overflow-hidden w-[320px] md:w-[380px]",
        isOpen ? "scale-100 opacity-100" : "scale-0 opacity-0 pointer-events-none"
      )}>
        <div className="bg-slate-900 p-8 text-white relative">
           <div className="absolute top-0 right-0 w-32 h-32 bg-[#f04e23] blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2" />
           <div className="flex justify-between items-start relative z-10">
              <div>
                <h3 className="text-xl font-black uppercase tracking-tighter">Concierge <span className="text-[#f04e23]">Support</span></h3>
                <p className="text-[10px] font-bold uppercase tracking-widest text-white/40 mt-1">Marketplace Assistance 24/7</p>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-white/10 rounded-xl transition-colors"
              >
                <X className="w-5 h-5 text-white/50" />
              </button>
           </div>
        </div>

        <div className="p-4 md:p-6 space-y-4 max-h-[400px] overflow-y-auto">
          {FAQS.map((faq, i) => (
            <div key={i} className="group p-4 bg-slate-50 border border-slate-100 rounded-2xl hover:border-[#f04e23]/30 transition-all">
              <h5 className="text-[11px] font-black uppercase tracking-tight text-slate-900 flex items-center justify-between gap-4">
                {faq.q}
                <ChevronRight className="w-3 h-3 text-[#f04e23] group-hover:translate-x-1 transition-transform" />
              </h5>
              <p className="text-[10px] font-medium text-slate-500 mt-2 leading-relaxed uppercase tracking-wide">
                {faq.a}
              </p>
            </div>
          ))}
          
          <div className="pt-2">
            <a 
              href="mailto:support@ipltickets.com"
              className="flex items-center gap-4 p-4 bg-[#f04e23]/5 border border-[#f04e23]/10 rounded-2xl hover:bg-[#f04e23]/10 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#f04e23] flex items-center justify-center shrink-0">
                <Mail className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-widest text-[#f04e23] block">Direct Support</span>
                <span className="text-[10px] font-black uppercase tracking-tighter text-slate-900">support@ipltickets.com</span>
              </div>
            </a>
          </div>
        </div>

        <div className="p-4 bg-slate-900 flex items-center justify-center gap-4 border-t border-white/5">
           <ShieldCheck className="w-4 h-4 text-[#f04e23]" />
           <span className="text-[8px] font-black uppercase tracking-[0.4em] text-white/40">Verified Secure Connection</span>
        </div>
      </div>

      {/* Toggle Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-16 h-16 rounded-2xl flex items-center justify-center shadow-2xl transition-all active:scale-90 group relative overflow-hidden",
          isOpen ? "bg-slate-900 text-white" : "bg-[#f04e23] text-white shadow-[#f04e23]/30"
        )}
      >
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        {isOpen ? <X className="w-7 h-7" /> : <MessageSquare className="w-7 h-7" />}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-slate-900 rounded-full border-2 border-white flex items-center justify-center">
             <span className="w-1.5 h-1.5 bg-[#f04e23] rounded-full animate-ping" />
          </span>
        )}
      </button>
    </div>
  );
}
