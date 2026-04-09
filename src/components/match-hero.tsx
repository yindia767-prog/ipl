import { getTeamBrand } from "@/lib/team-utils";
import Image from "next/image";
import { MapPin, Calendar, Clock } from "lucide-react";

interface MatchHeroProps {
  match: {
    id: string;
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

export function MatchHero({ match }: MatchHeroProps) {
  const homeBrand = getTeamBrand(match.home_team);
  const awayBrand = getTeamBrand(match.away_team);

  return (
    <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#12193b]">
      {/* Dynamic Themed Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#12193b] via-[#12193b]/80 to-transparent z-10" />
        <div className="absolute inset-0 bg-blue-900/40 mix-blend-multiply z-10" />

        {match.header_image_url ? (
          <Image
            src={match.header_image_url}
            alt="Match Header"
            fill
            className="object-cover opacity-40 grayscale-[0.5] mix-blend-overlay"
          />
        ) : (
          <>
            {/* Abstract Team Color Glows */}
            <div
              className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] opacity-20 animate-pulse"
              style={{ backgroundColor: homeBrand?.primaryColor || '#f04e23' }}
            />
            <div
              className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"
              style={{ backgroundColor: awayBrand?.primaryColor || '#0081E9' }}
            />
          </>
        )}
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col items-center">
          {/* Match Info Badge or Title */}
          {match.title ? (
            <h2 className="text-4xl md:text-7xl font-black text-white uppercase tracking-[0.05em] mb-4 text-center drop-shadow-2xl">
              {match.title}
            </h2>
          ) : (
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-white/5 border border-white/10 backdrop-blur-xl rounded-full text-white/70 text-[10px] font-black uppercase tracking-[0.3em] mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
              <span className="text-[#f04e23]">Live</span> in 2026 Season
            </div>
          )}

          {match.description && (
            <p className="max-w-2xl text-center text-white/60 font-medium text-sm md:text-base mb-12 leading-relaxed animate-in fade-in duration-1000 delay-200">
              {match.description}
            </p>
          )}
        </div>

        {/* Versus Display */}
        <div className="flex flex-col md:row items-center gap-12 md:gap-24 mb-16">
          {/* Home Team */}
          <div className="flex flex-col items-center gap-6 animate-in slide-in-from-left-8 duration-700">
            <div className="relative w-32 h-32 md:w-48 md:h-48 transform group-hover:scale-105 transition-all">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl" />
              {homeBrand?.logo && (
                <Image
                  src={homeBrand.logo}
                  alt={match.home_team}
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              )}
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter text-center">
              {match.home_team}
            </h1>
          </div>

          {/* VS Divider */}
          <div className="relative animate-in zoom-in-50 duration-1000">
            <div className="text-6xl md:text-8xl font-black text-white/10 translate-y-2">VS</div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-12 h-12 rounded-full bg-[#f04e23] flex items-center justify-center shadow-[0_0_20px_rgba(240,78,35,0.5)]">
                <span className="text-white font-black">V</span>
              </div>
            </div>
          </div>

          {/* Away Team */}
          <div className="flex flex-col items-center gap-6 animate-in slide-in-from-right-8 duration-700">
            <div className="relative w-32 h-32 md:w-48 md:h-48 transform group-hover:scale-105 transition-all">
              <div className="absolute inset-0 bg-white/5 rounded-full blur-2xl" />
              {awayBrand?.logo && (
                <Image
                  src={awayBrand.logo}
                  alt={match.away_team}
                  fill
                  className="object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                />
              )}
            </div>
            <h1 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter text-center">
              {match.away_team}
            </h1>
          </div>
        </div>

        {/* Match Details Meta */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 pt-12 border-t border-white/10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f04e23] group-hover:border-[#f04e23] transition-all">
              <MapPin className="w-5 h-5 text-[#f04e23] group-hover:text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Venue</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">{match.venue}</span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f04e23] group-hover:border-[#f04e23] transition-all">
              <Calendar className="w-5 h-5 text-[#f04e23] group-hover:text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Date</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">
                {new Date(match.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4 group">
            <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-[#f04e23] group-hover:border-[#f04e23] transition-all">
              <Clock className="w-5 h-5 text-[#f04e23] group-hover:text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-[10px] text-white/40 font-bold uppercase tracking-widest leading-none mb-1">Time</span>
              <span className="text-sm font-black text-white uppercase tracking-tight">{match.time} IST</span>
            </div>
          </div>
        </div>
      </div>
      </section>
      );
}
