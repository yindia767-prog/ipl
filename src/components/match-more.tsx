"use client";

import { useState } from "react";
import { ChevronRight, HelpCircle, FileText, ChevronDown, ChevronUp } from "lucide-react";
import { type BookingPolicy } from "@/lib/settings";
import { cn } from "@/lib/utils";

export function MatchMore({ policy }: { policy: BookingPolicy }) {
  const [activeSection, setActiveSection] = useState<'faqs' | 'terms' | null>(null);

  const toggleSection = (section: 'faqs' | 'terms') => {
    setActiveSection(prev => prev === section ? null : section);
  };

  return (
    <div className="py-24 border-t border-slate-100">
      <div className="flex flex-col mb-16">
        <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Support & Information</h2>
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose">Need help? Explore our booking guidelines and FAQs</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
        {/* FAQs Trigger */}
        <button 
          onClick={() => toggleSection('faqs')}
          className={cn(
            "text-left p-8 rounded-[2.5rem] border transition-all duration-500 group",
            activeSection === 'faqs' 
              ? "bg-[#192356] border-[#192356] shadow-2xl shadow-blue-900/20" 
              : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50"
          )}
        >
          <div className="flex items-center gap-6">
            <div className={cn(
              "w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-colors",
              activeSection === 'faqs' ? "bg-white/10 border-white/20" : "bg-slate-50 border-slate-100"
            )}>
              <HelpCircle className={cn(
                "w-6 h-6 transition-colors",
                activeSection === 'faqs' ? "text-white" : "text-slate-400 group-hover:text-blue-500"
              )} />
            </div>
            <div className="flex-1">
              <h3 className={cn(
                "font-black text-sm uppercase tracking-widest transition-colors",
                activeSection === 'faqs' ? "text-white" : "text-slate-900 group-hover:text-blue-600"
              )}>Frequently asked questions</h3>
              <p className={cn(
                "text-[10px] uppercase tracking-widest font-bold mt-1.5 transition-colors",
                activeSection === 'faqs' ? "text-white/40" : "text-slate-400"
              )}>Get instant answers</p>
            </div>
            {activeSection === 'faqs' ? <ChevronUp className="w-5 h-5 text-white/40" /> : <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />}
          </div>
        </button>

        {/* Terms Trigger */}
        <button 
          onClick={() => toggleSection('terms')}
          className={cn(
            "text-left p-8 rounded-[2.5rem] border transition-all duration-500 group",
            activeSection === 'terms' 
              ? "bg-[#192356] border-[#192356] shadow-2xl shadow-blue-900/20" 
              : "bg-white border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-200/50"
          )}
        >
          <div className="flex items-center gap-6">
            <div className={cn(
              "w-14 h-14 rounded-2xl border flex items-center justify-center shrink-0 transition-colors",
              activeSection === 'terms' ? "bg-white/10 border-white/20" : "bg-slate-50 border-slate-100"
            )}>
              <FileText className={cn(
                "w-6 h-6 transition-colors",
                activeSection === 'terms' ? "text-white" : "text-slate-400 group-hover:text-red-500"
              )} />
            </div>
            <div className="flex-1">
              <h3 className={cn(
                "font-black text-sm uppercase tracking-widest transition-colors",
                activeSection === 'terms' ? "text-white" : "text-slate-900 group-hover:text-red-600"
              )}>Terms and Conditions</h3>
              <p className={cn(
                "text-[10px] uppercase tracking-widest font-bold mt-1.5 transition-colors",
                activeSection === 'terms' ? "text-white/40" : "text-slate-400"
              )}>Booking rules & policies</p>
            </div>
            {activeSection === 'terms' ? <ChevronUp className="w-5 h-5 text-white/40" /> : <ChevronRight className="w-5 h-5 text-slate-300 group-hover:translate-x-1 transition-transform" />}
          </div>
        </button>
      </div>

      {/* Expanded Content Area */}
      {activeSection === 'faqs' && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {policy.faqs.map((faq, i) => (
              <div key={i} className="space-y-3">
                <h4 className="text-xs font-black text-[#192356] uppercase tracking-widest flex items-center gap-3">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-[10px] font-black">{i + 1}</span>
                  {faq.question}
                </h4>
                <p className="text-xs font-bold text-slate-400 leading-relaxed uppercase tracking-tight pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'terms' && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 bg-slate-50 rounded-[3rem] p-8 md:p-12 border border-slate-100">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {policy.terms.map((term, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="w-2 h-2 rounded-full bg-red-500 mt-1.5 shrink-0" />
                <p className="text-xs font-bold text-slate-600 leading-relaxed uppercase tracking-tight">{term}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
