"use client";

import { useState, useEffect } from "react";
import {
  CheckCircle2,
  Ticket,
  Plus,
  Minus,
  ArrowRight,
  Info,
  Eye,
  AlertCircle,
  Zap,
  TrendingUp,
  Award,
  Heart,
  Users,
  ShieldCheck
} from "lucide-react";

const BLOCKS = ["Lower A-G", "Upper Block C", "Stand K", "Premium Wing", "North Tier", "South Terrace", "Grand Stand J"];
import { cn } from "@/lib/utils";
import Link from "next/link";
import { type MatchCategory } from "@/lib/matches";

interface CategorySelectorProps {
  matchId: string;
  categories?: MatchCategory[];
}

export function CategorySelector({ matchId, categories = [] }: CategorySelectorProps) {
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  // Fallback defaults if no categories provided
  const displayCategories = categories.length > 0 ? categories : [
    {
      id: "hospitality-lounge",
      name: "Hospitality Lounge",
      sub_name: "Level 2 • AC Box",
      price: 45000,
      seats_available: 4,
      total_seats: 20,
      features: ["VIP Parking", "Includes Signature Buffet", "Premium Mini-Bar"]
    },
    {
      id: "corporate-box",
      name: "Corporate Box",
      sub_name: "Grand Stand • Level 1",
      price: 25000,
      seats_available: 1,
      total_seats: 15,
      features: ["Reserved Padded Seats", "Match Day Snacks", "Exclusive Lobby Entry"]
    },
    {
      id: "upper-box-a",
      name: "Upper Box A",
      sub_name: "High View North",
      price: 8500,
      seats_available: 1,
      total_seats: 100,
      features: ["Elevated Panoramic View", "Mobile Ticket Entry"]
    },
    {
      id: "lower-stand-k",
      name: "Lower Stand K",
      sub_name: "Pitch Side East",
      price: 4500,
      seats_available: 0,
      total_seats: 200,
      features: ["Close Proximity to Boundary", "Atmospheric Fan Zone"]
    },
    {
      id: "general-admission",
      name: "General Admission",
      sub_name: "North Tier 3",
      price: 1800,
      seats_available: 0,
      total_seats: 500,
      features: ["Standard Seating", "Access to Food Court"]
    }
  ] as MatchCategory[];

  const sortedCategories = [...displayCategories].sort((a, b) => {
    if (a.seats_available > 0 && b.seats_available === 0) return -1;
    if (a.seats_available === 0 && b.seats_available > 0) return 1;
    return 0;
  });

  const updateQuantity = (id: string, delta: number, max: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const next = Math.max(0, Math.min(Math.min(5, max), current + delta));

      // If we are setting a quantity for one, clear others (typical for ticket sites)
      if (next > 0) {
        return { [id]: next };
      }
      return { ...prev, [id]: next };
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        {sortedCategories.map((cat) => {
          const qty = quantities[cat.id] || 0;
          const isSelected = qty > 0;
          const isSoldOut = cat.seats_available === 0;
          const isLowStock = !isSoldOut && cat.seats_available <= 5;

          return (
            <div
              key={cat.id}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  if (!isSoldOut && qty === 0) updateQuantity(cat.id, 1, cat.seats_available);
                }
              }}
              className={cn(
                "group relative border-2 rounded-[2.5rem] overflow-hidden outline-none transition-all duration-300 z-10 touch-manipulation pointer-events-auto",
                isSoldOut
                  ? "opacity-50 grayscale bg-slate-50 border-slate-100 cursor-not-allowed"
                  : "cursor-pointer",
                isSelected
                  ? "bg-[#192356] border-[#192356] shadow-[0_30px_60px_-15px_rgba(25,35,86,0.3)] ring-4 ring-[#192356]/10"
                  : !isSoldOut && "bg-white border-slate-100 hover:border-[#f04e23]/30"
              )}
            >
              <div className="relative flex flex-col items-stretch min-h-[120px]">
                <div className={cn(
                  "absolute left-0 top-0 bottom-0 w-2 transition-colors duration-500 z-20",
                  isSelected ? "bg-[#f04e23]" : isSoldOut ? "bg-slate-300" : "bg-slate-100 group-hover:bg-[#f04e23]/40"
                )} />

                <div className="flex-1 flex flex-col p-6 md:p-8">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10">
                    <div className="flex-1 space-y-3 w-full text-center md:text-left">
                      <div className="flex flex-col md:flex-row items-center gap-4">
                        <h4 className={cn(
                          "text-xl md:text-2xl font-black uppercase tracking-tight",
                          isSelected ? "text-white" : "text-slate-900",
                          isSoldOut && "text-slate-400"
                        )}>
                          {cat.name} {cat.id !== "general-admission" && `• ${BLOCKS[cat.name.length % BLOCKS.length]}`}
                        </h4>
                        {!isSoldOut && (
                          <div className={cn(
                            "inline-flex items-center gap-1.5 px-3 py-1 bg-blue-500/10 text-blue-600 rounded-lg border border-blue-500/20",
                            isSelected && "bg-white/10 text-white border-white/20"
                          )}>
                            <ShieldCheck className="w-3.5 h-3.5" />
                            <span className="text-[9px] font-black uppercase tracking-widest">Verified Ticket</span>
                          </div>
                        )}
                        {isSoldOut ? (
                          <span className="px-3 py-1 bg-slate-200 text-slate-500 text-[9px] uppercase tracking-widest rounded-lg font-black shrink-0">
                            Sold Out
                          </span>
                        ) : isLowStock && (
                          <span className={cn(
                            "px-3 py-1 text-[9px] uppercase tracking-widest rounded-lg font-black shrink-0",
                            isSelected ? "bg-white/20 text-white" : "bg-rose-50 text-rose-500 animate-pulse"
                          )}>
                            Only {cat.seats_available} Left
                          </span>
                        )}
                      </div>
                      <p className={cn(
                        "text-[10px] font-black uppercase tracking-[0.2em]",
                        isSelected ? "text-white/40" : "text-slate-400"
                      )}>
                        {cat.sub_name}
                      </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center gap-10 w-full md:w-auto">
                      <div className="flex flex-col items-center md:items-end">
                        <div className="flex items-baseline gap-1">
                          <span className={cn("text-2xl font-bold", isSelected ? "text-[#f04e23]" : "text-[#192356]/40 mb-1")}>₹</span>
                          <span className={cn("text-3xl font-black tracking-tighter transition-colors", isSelected ? "text-white" : "text-[#192356]")}>
                            {cat.price.toLocaleString()}
                          </span>
                        </div>
                      </div>

                      {/* Global Quantity Selector */}
                      {!isSoldOut && (
                        <div className={cn(
                          "flex items-center gap-4 p-1 rounded-2xl border transition-all duration-300",
                          isSelected ? "bg-white/10 border-white/20" : "bg-slate-50 border-slate-100"
                        )}>
                          <button
                            disabled={qty <= 0}
                            onClick={(e) => { e.stopPropagation(); updateQuantity(cat.id, -1, cat.seats_available); }}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-90 disabled:opacity-20",
                              isSelected ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white text-slate-400 border border-slate-100"
                            )}
                          >
                            <Minus className="w-4 h-4" />
                          </button>
                          <span className={cn(
                            "text-xl font-black min-w-[2rem] text-center",
                            isSelected ? "text-white" : "text-slate-900"
                          )}>{qty}</span>
                          <button
                            disabled={qty >= Math.min(5, cat.seats_available)}
                            onClick={(e) => { e.stopPropagation(); updateQuantity(cat.id, 1, cat.seats_available); }}
                            className={cn(
                              "w-10 h-10 rounded-xl flex items-center justify-center transition-all active:scale-90 disabled:opacity-20",
                              isSelected ? "bg-[#f04e23] text-white shadow-lg" : "bg-[#192356] text-white shadow-md shadow-blue-900/10"
                            )}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dynamic Booking Zone */}
                  {isSelected && (
                    <div className="mt-8 pt-8 border-t border-white/10 animate-in slide-in-from-top-4 duration-500">
                      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex-1 w-full md:w-auto flex flex-col md:flex-row items-center gap-8 justify-end">
                          <div className="flex flex-col items-center md:items-end">
                            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-white/40">Total Amount</span>
                            <span className="text-3xl font-black text-white">₹{(cat.price * qty).toLocaleString()}</span>
                          </div>

                          <Link
                            href={`/payment/${matchId}?category=${cat.id}&qty=${qty}&amount=${cat.price * qty}`}
                            className="h-16 px-12 bg-[#f04e23] text-white font-black rounded-2xl flex items-center justify-center gap-4 transition-all hover:bg-slate-900 hover:scale-[1.02] active:scale-[0.98] uppercase tracking-[0.15em] text-xs group w-full md:w-auto shadow-2xl"
                          >
                            BOOK TICKETS NOW
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
