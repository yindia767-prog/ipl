# Pitfalls Research: IPL 2026 Ticket Booking

## Domain-Specific Pitfalls
- **Inventory Race Conditions**: Multiple users booking the last "Platinum" ticket simultaneously.
  - *Mitigation*: Use PostgreSQL transactions with `UPDATE ... WHERE available > 0` checks.
- **Fragmented Schedule**: Matches spread across 13 venues (some distant like Guwahati/Dharamshala).
  - *Mitigation*: Ensure venue-specific data is clear to avoid travel confusion for users.
- **Logo Legality/Availability**: Finding high-res official logos for 10 teams.
  - *Mitigation*: Use clear placeholders if not found, or ask user for official assets as offered.
- **Manual Verification Bottleneck**: Admin cannot verify 1000s of tickets in real-time.
  - *Mitigation*: managing user expectations with a "Verification usually takes X hours" message.

## Technical Pitfalls
- **Supabase RLS Gaps**: Admin data leaking to public.
  - *Mitigation*: Strict RLS policies on `bookings` and `ticket_categories`.
- **Email Deliverability**: confirmation emails landing in Spam.
  - *Mitigation*: Use Resend with verified domain if possible, or clear instructions for users.
- **Large PDF Assets**: Tickets being too heavy for mobile download.
  - *Mitigation*: Generate lean SVGs or optimized images for tickets.

---
*Last updated: 2026-04-03*
