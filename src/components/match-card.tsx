import Image from "next/image";
import Link from "next/link";
import { MapPin, Clock, Calendar, ChevronRight } from "lucide-react";
import { getTeamBrand, type TeamBrand } from "@/lib/team-utils";
import { cn } from "@/lib/utils";

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

export function MatchCard({ match }: { match: Match }) {
  const homeBrand = getTeamBrand(match.home_team);
  const awayBrand = getTeamBrand(match.away_team);

  // Format date: "SAT, 28 MAR"
  const dateObj = new Date(match.date);
  const formattedDate = dateObj.toLocaleDateString("en-IN", {
    weekday: "short",
    day: "numeric",
    month: "short",
  }).toUpperCase();

  return (
    <div className="relative group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300">
      {/* Top Banner: Match # and Status */}
      <div className="bg-slate-50 dark:bg-slate-950 px-4 py-2 flex items-center justify-between border-b border-slate-100 dark:border-slate-800">
        <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
          Match {match.match_no}
        </span>
        <span className="px-2 py-0.5 rounded-full text-[10px] font-bold uppercase bg-ipl-gold/10 text-ipl-gold border border-ipl-gold/20">
          {match.status}
        </span>
      </div>

      <div className="p-6">
        {/* Teams and Logos */}
        <div className="flex items-center justify-between gap-4 mb-8">
          <TeamIcon brand={homeBrand} name={match.home_team} side="home" />
          <div className="flex flex-col items-center">
            <span className="text-2xl font-black text-slate-200 dark:text-slate-800 tracking-tighter">VS</span>
          </div>
          <TeamIcon brand={awayBrand} name={match.away_team} side="away" />
        </div>

        {/* Match Details */}
        <div className="space-y-3 mb-6">
          <DetailItem icon={<MapPin className="w-3.5 h-3.5" />} text={match.venue} />
          <div className="flex items-center gap-6">
            <DetailItem icon={<Calendar className="w-3.5 h-3.5" />} text={formattedDate} />
            <DetailItem icon={<Clock className="w-3.5 h-3.5" />} text={match.time} />
          </div>
        </div>

        {/* Action Button */}
        <Link
          href={`/matches/${match.id}`}
          className="w-full h-12 bg-ipl-blue hover:bg-[#003570] text-sm font-bold text-white rounded-xl flex items-center justify-center gap-2 group/btn transition-all active:scale-95 shadow-md shadow-ipl-blue/10"
        >
          BOOK TICKETS
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Decorative accent for home team color */}
      <div 
        className="absolute bottom-0 left-0 h-1 transition-all group-hover:h-1.5" 
        style={{ width: "50%", backgroundColor: homeBrand?.primaryColor }}
      />
      <div 
        className="absolute bottom-0 right-0 h-1 transition-all group-hover:h-1.5" 
        style={{ width: "50%", backgroundColor: awayBrand?.primaryColor }}
      />
    </div>
  );
}

function TeamIcon({ brand, name, side }: { brand: TeamBrand | undefined; name: string; side: "home" | "away" }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", side === "home" ? "flex-1" : "flex-1")}>
      <div className="relative w-16 h-16 md:w-20 md:h-20 bg-slate-50 dark:bg-slate-950 rounded-2xl p-2 border border-slate-100 dark:border-slate-800 shadow-inner group-hover:scale-105 transition-transform duration-500">
        <div className="relative w-full h-full overflow-hidden rounded-lg">
          {brand?.logo ? (
            <Image 
              src={brand.logo} 
              alt={name} 
              fill 
              className="object-contain p-1"
            />
          ) : (
            <div className="w-full h-full bg-slate-200 dark:bg-slate-800 animate-pulse" />
          )}
        </div>
      </div>
      <span className="text-[11px] font-black uppercase text-center text-slate-700 dark:text-slate-300 tracking-tight leading-tight max-w-[80px]">
        {name.split(' ').map(w => w === 'Bengaluru' ? 'RCB' : w === 'Super' ? 'CSK' : w[0]).join('').length > 3 ? name.split(' ').pop() : name.split(' ').map(w => w[0]).join('')}
        <br />
        <span className="text-[9px] text-slate-400 font-bold tracking-normal">{brand?.id}</span>
      </span>
    </div>
  );
}

function DetailItem({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
      <div className="p-1.5 bg-slate-100 dark:bg-slate-950 rounded-lg">
        {icon}
      </div>
      <span className="text-xs font-bold tracking-tight">{text}</span>
    </div>
  );
}
