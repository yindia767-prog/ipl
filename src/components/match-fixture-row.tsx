"use client";

import { cn } from "@/lib/utils";
import { MapPin, Ticket, ChevronRight, Calendar } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getTeamBrand } from "@/lib/team-utils";

interface Match {
  id: string;
  match_no: number;
  date: string;
  time: string;
  home_team: string;
  away_team: string;
  venue: string;
  status: string;
}

interface MatchFixtureRowProps {
  match: Match;
}

export function MatchFixtureRow({ match }: MatchFixtureRowProps) {
  const homeBrand = getTeamBrand(match.home_team);
  const awayBrand = getTeamBrand(match.away_team);

  // Parse date for fancy display
  const matchDate = new Date(match.date);
  const day = matchDate.toLocaleDateString("en-US", { day: "2-digit" });
  const month = matchDate.toLocaleDateString("en-US", { month: "short" }).toUpperCase();
  const weekday = matchDate.toLocaleDateString("en-US", { weekday: "short" }).toUpperCase();
  
  // Clean time format
  const cleanTime = match.time.split(':').slice(0, 2).join(':');

  return (
    <div className="group relative bg-white hover:bg-slate-50 border-b border-slate-100 transition-all duration-300">
      <div className="container mx-auto px-4 py-4 lg:py-10">
        <div className="flex flex-col lg:grid lg:grid-cols-[140px_1fr_80px_1fr_220px] items-center gap-4 lg:gap-0">
          
          {/* Section 1: Top Row (Mobile) / Left Side (Desktop) */}
          <div className="flex items-center gap-6 w-full lg:w-auto justify-between lg:justify-start">
            <div className="flex items-center gap-4 min-w-[120px]">
              <div className="flex flex-col items-center">
                <span className="text-[8px] font-black text-[#f04e23] tracking-[0.2em]">{weekday}</span>
                <span className="text-xl md:text-3xl font-black text-slate-900 tracking-tighter leading-none">{day}</span>
                <span className="text-[8px] font-black text-slate-400 tracking-[0.2em]">{month}</span>
              </div>
              <div className="w-px h-8 bg-slate-100" />
              <div className="flex flex-col">
                <span className="text-[8px] font-black text-slate-400 uppercase tracking-widest">Match {match.match_no}</span>
                <span className="text-[10px] font-black text-slate-900 uppercase">{cleanTime} PM</span>
              </div>
            </div>
            
            <div className="flex lg:hidden items-center gap-2 text-slate-400">
              <MapPin className="w-3 h-3" />
              <span className="text-[8px] font-bold uppercase tracking-widest">{match.venue}</span>
            </div>
          </div>

          {/* Section 2: Intense Battle Row (Full Names Restored) */}
          <div className="w-full lg:contents py-2">
            <div className="flex items-center justify-between lg:contents gap-2">
              {/* Home Team */}
              <div className="flex flex-[2] items-center justify-end gap-2 md:gap-6 lg:pr-10">
                <span className="text-[10px] md:text-lg font-black text-slate-900 uppercase tracking-tight text-right leading-none max-w-[100px] md:max-w-none">
                  {match.home_team}
                </span>
                <div className="w-10 h-10 md:w-16 md:h-16 relative bg-white rounded-full p-2 border border-slate-100 shadow-sm shrink-0">
                  {homeBrand?.logo && (
                    <Image src={homeBrand.logo} alt={match.home_team} fill className="object-contain p-1.5" />
                  )}
                </div>
              </div>

              {/* VS Divider */}
              <div className="px-2 py-0.5 bg-slate-50 rounded-full border border-slate-100 flex-shrink-0">
                <span className="text-[8px] font-black text-slate-400 uppercase italic">VS</span>
              </div>

              {/* Away Team */}
              <div className="flex flex-[2] items-center justify-start gap-2 md:gap-6 lg:pl-10">
                <div className="w-10 h-10 md:w-16 md:h-16 relative bg-white rounded-full p-2 border border-slate-100 shadow-sm shrink-0">
                  {awayBrand?.logo && (
                    <Image src={awayBrand.logo} alt={match.away_team} fill className="object-contain p-1.5" />
                  )}
                </div>
                <span className="text-[10px] md:text-lg font-black text-slate-900 uppercase tracking-tight leading-none max-w-[100px] md:max-w-none">
                  {match.away_team}
                </span>
              </div>
            </div>
          </div>

          {/* Section 3: Action */}
          <div className="w-full lg:w-auto flex flex-col items-center justify-end gap-4 lg:pl-10 mt-1 lg:mt-0">
            <div className="hidden lg:flex items-center gap-2 text-slate-400 shrink-0 mb-2">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[10px] font-bold uppercase tracking-widest max-w-[150px] truncate">{match.venue}</span>
            </div>

            <Link 
              href={`/matches/${match.id}`}
              className="group/btn relative h-11 lg:h-14 px-8 bg-[#192356] hover:bg-[#f04e23] text-white rounded-lg lg:rounded-full flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-blue-900/10 hover:shadow-[#f04e23]/30 overflow-hidden w-full lg:w-40 shrink-0"
            >
              <span className="relative z-10 text-[9px] font-black uppercase tracking-[0.2em] flex items-center gap-2">
                Book Tickets
                <ChevronRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
