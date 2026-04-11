"use client";

import { useState, useMemo } from "react";
import { Filter, Calendar, X, ChevronDown, ChevronUp, Share2 } from "lucide-react";
import { MatchFixtureRow } from "./match-fixture-row";
import { TEAMS } from "@/lib/team-utils";
import { cn } from "@/lib/utils";
import Image from "next/image";

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

interface MatchFilterListProps {
  allMatches: Match[];
}

export function MatchFilterList({ allMatches }: MatchFilterListProps) {
  const [teamFilter, setTeamFilter] = useState<string | null>(null);
  const [venueFilter, setVenueFilter] = useState<string | null>(null);
  const [showAll, setShowAll] = useState(false);

  const isFiltering = teamFilter !== null || venueFilter !== null;

  const activeMatches = useMemo(() => {
    // Precise local date string (YYYY-MM-DD) for timezone-accurate filtering
    const now = new Date();
    const localDateStr = now.toLocaleDateString('en-CA'); // 'en-CA' gives YYYY-MM-DD reliably

    // Only show future/today matches (FIXTURES)
    const baseList = allMatches.filter(match => match.date >= localDateStr);

    const filtered = baseList.filter((match) => {
      const matchesTeam = teamFilter 
        ? (match.home_team === teamFilter || match.away_team === teamFilter)
        : true;
      
      const matchesVenue = venueFilter ? match.venue === venueFilter : true;
      
      return matchesTeam && matchesVenue;
    });

    // If searching/filtering, show all matches. Otherwise respect showAll toggle.
    return (showAll || isFiltering) ? filtered : filtered.slice(0, 10);
  }, [teamFilter, venueFilter, showAll, allMatches, isFiltering]);

  const teamList = Object.values(TEAMS);
  const venues = Array.from(new Set(allMatches.map(m => m.venue))).sort();

  return (
    <div className="bg-white">
      {/* Official Tabs Navigation (Simplified to Fixtures Only) */}
      <div className="flex justify-center mb-12">
        <div className="bg-slate-50 p-1.5 rounded-full flex items-center shadow-inner border border-slate-200/50">
          <div className="px-12 py-3 bg-[#192356] text-white shadow-lg rounded-full text-[11px] font-black uppercase tracking-widest transition-all">
            FIXTURES
          </div>
        </div>
      </div>

      {/* Official Filter Bar */}
      <div className="container mx-auto px-4 mb-20 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 py-6 md:py-10 bg-slate-50/50 rounded-2xl md:rounded-3xl border border-slate-100 shadow-sm">
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 md:gap-6 w-full">
          {/* Team Dropdown */}
          <div className="relative group w-full sm:w-64 md:w-64">
            <select 
              value={teamFilter || ""}
              onChange={(e) => setTeamFilter(e.target.value || null)}
              className="appearance-none w-full h-11 md:h-12 pl-6 pr-12 bg-white border border-slate-200 rounded-lg text-[10px] md:text-xs font-black tracking-widest text-slate-700 uppercase focus:ring-4 focus:ring-[#f04e23]/5 focus:border-[#f04e23] outline-none shadow-sm transition-all"
            >
              <option value="">ALL TEAMS</option>
              {teamList.map((team) => (
                <option key={team.id} value={team.name}>{team.name}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-[#f04e23] transition-colors" />
          </div>

          {/* Venue Dropdown */}
          <div className="relative group w-full sm:w-64 md:w-64">
            <select 
              value={venueFilter || ""}
              onChange={(e) => setVenueFilter(e.target.value || null)}
              className="appearance-none w-full h-11 md:h-12 pl-6 pr-12 bg-white border border-slate-200 rounded-lg text-[10px] md:text-xs font-black tracking-widest text-slate-700 uppercase focus:ring-4 focus:ring-[#f04e23]/5 focus:border-[#f04e23] outline-none shadow-sm transition-all"
            >
              <option value="">ALL VENUES</option>
              {venues.map((v) => (
                <option key={v} value={v}>{v}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-[#f04e23] transition-colors" />
          </div>
        </div>
      </div>

      {/* Row Listings */}
      <div className="border-t border-slate-100">
        {activeMatches.length > 0 ? (
          <div className="flex flex-col">
            {activeMatches.map((match) => (
              <MatchFixtureRow key={match.id} match={match} />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center bg-slate-50/20">
            <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-slate-100">
              <Calendar className="w-8 h-8 text-slate-200" />
            </div>
            <h3 className="text-xl font-black text-slate-900 tracking-tight mb-2">No fixtures found</h3>
            <p className="text-sm text-slate-400 font-bold tracking-tight">Adjust your filters to see more upcoming games</p>
          </div>
        )}
      </div>

      {/* Load More Style Footer */}
      {!showAll && !isFiltering && activeMatches.length === 10 && (
        <div className="py-20 text-center container mx-auto px-4 bg-slate-50/30 border-t border-slate-100">
          <button 
            onClick={() => setShowAll(true)}
            className="group relative px-12 py-5 bg-[#192356] text-white font-black tracking-widest rounded-md hover:bg-[#0c133a] transition-all flex items-center gap-4 mx-auto shadow-xl shadow-[#192356]/20"
          >
            BROWSE FULL SCHEDULE
            <ChevronDown className="w-5 h-5 text-white group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      )}
    </div>
  );
}
