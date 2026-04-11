import { Metadata } from "next";
import { getMatches } from "@/lib/matches";
import { MatchFilterList } from "@/components/match-filter-list";

export const metadata: Metadata = {
  title: "Official Ticket Booking",
  description: "Secure your seats for TATA IPL 2026. Official ticketing partner for all matches.",
};

export default async function Home() {
  const searchableMatches = await getMatches();

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Main Schedule Section */}
      <section id="schedule" className="bg-white pt-2">
        <div className="container mx-auto px-2 py-2">
          <MatchFilterList allMatches={searchableMatches} />
        </div>
      </section>
    </div>
  );
}
