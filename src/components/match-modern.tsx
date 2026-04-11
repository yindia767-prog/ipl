import { MapPin, Calendar, Clock, ChevronRight, Info, UserCheck, Armchair, Dog, Bath, Ticket, Sun, Baby, GlassWater } from "lucide-react";
import Image from "next/image";
import { getTeamBrand } from "@/lib/team-utils";

interface MatchHeaderProps {
  match: {
    id: string;
    match_no: number;
    home_team: string;
    away_team: string;
    venue: string;
    date: string;
    time: string;
    title?: string;
    description?: string;
    header_image_url?: string;
  };
}

export function MatchHeader({ match }: MatchHeaderProps) {
  const displayTitle = match.title || `${match.home_team} vs ${match.away_team}`;
  const homeBrand = getTeamBrand(match.home_team);
  const awayBrand = getTeamBrand(match.away_team);
  
  return (
    <div className="bg-white pt-12 pb-6 border-b border-slate-100">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Text Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-black text-slate-900 mb-3 tracking-tight">
            {displayTitle}
          </h1>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-1.5 text-blue-600">
              <Calendar className="w-4 h-4" />
              <span>{new Date(match.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}, {match.time} PM</span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full hidden md:block" />
            <div className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              <span>{match.venue} Stadium, {match.venue}</span>
            </div>
          </div>
        </div>

        {/* Dynamic Team-Branded Hero Banner */}
        <div className="relative aspect-[21/9] w-full rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200 group">
          {/* Background Gradients Using Team Colors */}
          <div className="absolute inset-0 flex">
            <div 
              className="flex-1 transition-colors duration-500" 
              style={{ backgroundColor: homeBrand?.primaryColor || '#192356' }} 
            />
            <div 
              className="flex-1 transition-colors duration-500" 
              style={{ backgroundColor: awayBrand?.primaryColor || '#f04e23' }} 
            />
            {/* Diagonal Overlay */}
            <div 
              className="absolute inset-0 opacity-20"
              style={{ 
                backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,1) 0%, transparent 100%)',
              }}
            />
          </div>

          {/* Content Overlays */}
          <div className="absolute inset-0 flex items-center justify-between px-10 md:px-20">
            <div className="relative w-24 h-24 md:w-40 md:h-40 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-2xl animate-in slide-in-from-left-8 duration-700">
              {homeBrand?.logo && (
                <Image src={homeBrand.logo} alt={match.home_team} fill className="object-contain p-4 drop-shadow-2xl" />
              )}
            </div>

            <div className="flex flex-col items-center gap-4 z-10">
              <div className="px-6 py-2 bg-white/20 backdrop-blur-xl border border-white/30 rounded-full">
                <span className="text-white font-black text-xl md:text-3xl tracking-tighter uppercase italic">VS</span>
              </div>
            </div>

            <div className="relative w-24 h-24 md:w-40 md:h-40 bg-white/10 backdrop-blur-md rounded-full p-4 border border-white/20 shadow-2xl animate-in slide-in-from-right-8 duration-700">
              {awayBrand?.logo && (
                <Image src={awayBrand.logo} alt={match.away_team} fill className="object-contain p-4 drop-shadow-2xl" />
              )}
            </div>
          </div>

          {/* Texture Overlay */}
          <div className="absolute inset-0 opacity-10 mix-blend-overlay bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
        </div>
      </div>
    </div>
  );
}

export function MatchAbout({ description, venue }: { description?: string, venue: string }) {
  return (
    <div className="flex flex-col lg:flex-row gap-12 py-16">
      {/* Description Left */}
      <div className="flex-1">
        <h2 className="text-2xl font-black text-slate-900 mb-8 uppercase tracking-tight">About</h2>
        <p className="text-slate-500 leading-relaxed text-sm md:text-base font-medium">
          {description || "Experience the thrill of the IPL 2026 season live at the stadium. Witness your favorite teams battle for glory in an atmosphere like no other. From the roar of the crowd to the precision of every delivery, this is cricket at its finest."}
        </p>
      </div>

      {/* Meta Sidebar Right */}
      <div className="lg:w-[400px] shrink-0 space-y-4">
        <div className="p-6 bg-white border border-slate-100 rounded-3xl group cursor-pointer hover:border-slate-200 hover:shadow-lg transition-all">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-slate-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 text-sm">{venue} Stadium, {venue}</h3>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        <div className="p-6 bg-white border border-slate-100 rounded-3xl group cursor-pointer hover:border-slate-200 hover:shadow-lg transition-all">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-slate-600" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 text-sm">Gates open at 5 PM</h3>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ThingsToKnow() {
  const items = [
    { icon: Clock, label: "Duration", value: "3 Hours and 30 Minutes" },
    { icon: Ticket, label: "Ticket info", value: "Ages 3 and above" },
    { icon: Info, label: "Entry", value: "Allowed for all ages" },
    { icon: Sun, label: "Layout", value: "Outdoor Stadium" },
    { icon: Armchair, label: "Seating", value: "Arrangement Seated" },
    { icon: Baby, label: "Kid friendly", value: "Family welcome" },
    { icon: Dog, label: "Pets", value: "Pets not allowed" },
    { icon: GlassWater, label: "Water", value: "Free water stations" },
    { icon: Bath, label: "Facilities", value: "Washrooms available" },
  ];

  return (
    <div className="py-16 border-t border-slate-100">
      <h2 className="text-2xl font-black text-slate-900 mb-10 uppercase tracking-tight">Things to know</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4 text-slate-600">
            <item.icon className="w-5 h-5 text-slate-400 shrink-0" />
            <span className="text-sm font-bold tracking-tight">{item.label} <span className="font-medium text-slate-500 ml-1">{item.value}</span></span>
          </div>
        ))}
      </div>
    </div>
  );
}
