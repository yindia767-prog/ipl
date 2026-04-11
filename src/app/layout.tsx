import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import Script from "next/script";
import { Footer } from "@/components/footer";
import { Analytics } from "@vercel/analytics/next";
import { BookingNotification } from "@/components/booking-notification";
import { HelpBubble } from "@/components/help-bubble";

const poppins = Poppins({ 
  subsets: ["latin"], 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins" 
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: {
    default: "TATA IPL 2026 Ticket Marketplace",
    template: "%s | TATA IPL 2026",
  },
  description: "Secure and fast ticket marketplace for the 19th season of TATA IPL.",
  keywords: ["IPL 2026", "TATA IPL Tickets", "IPL Resale", "IPL Schedule", "Match Tickets"],
  authors: [{ name: "Premium Ticket Marketplace" }],
  openGraph: {
    title: "TATA IPL 2026 Ticket Marketplace",
    description: "Secure your seats for the 19th season of TATA IPL through our premium marketplace.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${montserrat.variable} scroll-smooth`} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className="antialiased min-h-screen bg-slate-50 dark:bg-slate-950 font-sans" suppressHydrationWarning>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-82T5Z6KYGP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-82T5Z6KYGP');
          `}
        </Script>
        <header>
          <Navbar />
        </header>
        <main className="flex-grow md:pt-20">
          {children}
        </main>
        <Footer />
        <Analytics />
        <BookingNotification />
        <HelpBubble />
      </body>
    </html>
  );
}
