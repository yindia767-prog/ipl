import { getMatchById } from "@/lib/matches";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { MatchHeader, MatchAbout, ThingsToKnow } from "@/components/match-modern";
import { CategorySelector } from "@/components/category-selector";
import { MatchMore } from "@/components/match-more";
import { getBookingPolicy } from "@/lib/settings";

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const match = await getMatchById(id);

  if (!match) {
    return {
      title: "Match Not Found",
    };
  }

  const matchTitle = match.title || `${match.home_team} vs ${match.away_team}`;
  
  return {
    title: matchTitle,
    description: `Book tickets for ${matchTitle} at ${match.venue}. IPL 2026 Season 19.`,
  };
}

export default async function MatchDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const match = await getMatchById(id);

  if (!match) {
    notFound();
  }

  const policy = await getBookingPolicy();

  return (
    <main className="min-h-screen bg-white">
      {/* Modern Match Header */}
      <MatchHeader match={match} />

      <div className="container mx-auto px-4 max-w-6xl">
        {/* About & Sidebar Info */}

        {/* Category Selection */}
        <section className="py-12 border-t border-slate-100">
          <div className="flex flex-col items-start mb-16">
            <h2 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tight">Select Seats</h2>
            <p className="text-sm font-bold text-slate-400 uppercase tracking-widest leading-loose">Choose your preferred stadium experience</p>
          </div>
          <div className="bg-slate-50 p-6 md:p-12 rounded-[3rem] border border-slate-100">
            <CategorySelector matchId={id} categories={match.categories || []} />
          </div>
        </section>
        <MatchAbout description={match.description} venue={match.venue} />

        {/* Things To Know Grid */}
        <ThingsToKnow />

        {/* More Section (FAQs/Terms) */}
        <MatchMore policy={policy} />
      </div>
    </main>
  );
}
