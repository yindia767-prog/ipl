import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Official Ticket Booking",
  description: "Secure your seats for TATA IPL 2026. Official ticketing partner for all matches.",
};

export default async function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-black text-slate-900 uppercase tracking-tighter mb-4">
          TATA IPL <span className="text-[#f04e23]">2026</span>
        </h1>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">
          Ticketing Platform
        </p>
      </div>
    </div>
  );
}
