# Features Research: IPL 2026 Ticket Booking

## Table Stakes (Must-Have)
- **Match Listing**: Chronological list of upcoming matches with team logos, date, time, and venue.
- **Real-time Schedule**: Data source must be the official 2026 schedule.
- **Ticket Categories**: Different pricing tiers (Platinum, Gold, Silver, General).
- **Mobile Responsive**: Most users book on mobile.
- **Email Confirmation**: Automatic email upon booking (Pending) and verification (Success).
- **Payment Verification**: System for users to upload proof of payment (screenshot).
- **Admin Dashboard**: For manual approval of ticket bookings.

## Differentiators (Premium Feel)
- **Interactive Venue Map**: SVG-based venue layouts for seat category selection.
- **Dynamic Countdown**: To next/upcoming big matches.
- **"Authorized" Badge**: UI elements that instill trust (e.g., "Official Ticketing Partner" styling).
- **Single-Click Download**: Ticket available as image/PDF directly after approval.
- **No-Login Flow**: frictionless booking by only asking for Email and Phone.

## Anti-Features (Excluded)
- **User Booking History**: explicitly excluded to avoid mandatory auth for buyers.
- **Seat Map (Exact Seat)**: Too complex for v1; stick to categories (e.g., "Gold Stand").
- **Live Match Scoring**: Focus is on ticketing, not news.

## Complexity Assessment
- **High**: Payment verification workflow (state management between user upload and admin approval).
- **Medium**: PDF ticket generation.
- **Low**: Match listing and static pages.

---
*Last updated: 2026-04-03*
