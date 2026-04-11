import { MatchFilterList } from "@/components/match-filter-list";
import { getMatches } from "@/lib/matches";
import { Ticket, Zap, Trophy } from "lucide-react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Ticket Booking",
  description: "Secure your seats for TATA IPL 2026. Official ticketing partner for all matches.",
};

export default async function Home() {
  const searchableMatches = await getMatches();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Schedule Section */}
      <section id="schedule" className="bg-white pt-10">
        <div className="bg-[#192356] h-40 md:h-56 flex items-center mb-[-4rem] relative z-10 overflow-hidden">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter uppercase">
              The <span className="text-white/30">Schedule</span>
            </h2>
            <div className="h-1.5 w-32 bg-[#f04e23] mt-4 rounded-full" />
          </div>
        </div>

        <div className="container mx-auto px-4 py-32">
          <MatchFilterList allMatches={searchableMatches} />
        </div>
      </section>
    </div>
  );
}
