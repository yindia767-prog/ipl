# Architecture Research: IPL 2026 Ticket Booking

## Component Boundaries
1. **Public Site (Next.js)**:
   - `/`: Homepage with match schedule.
   - `/matches/[id]`: Booking details and category selection.
   - `/book/[id]`: Booking form (email/phone).
   - `/payment/[bookingId]`: QR code and screenshot upload.
2. **Admin Panel (Next.js + Supabase Auth)**:
   - `/admin`: Dashboard with pending verifications.
   - `/admin/bookings`: Full list of transactions.
   - `/admin/matches`: Manage match data (prices/availability).
3. **Database (Supabase/Postgres)**:
   - `matches`: ID, Teams, Date, Time, Venue, Status.
   - `ticket_categories`: MatchID, Name, Price, TotalSeats, AvailableSeats.
   - `bookings`: ID, UserEmail, UserPhone, CategoryID, Status (Pending/Success/Rejected), ScreenshotURL, TicketCode.

## Data Flow
- **Booking**: User selects category -> Submits Email/Phone -> `bookings` entry created as `Pending` -> User redirected to `/payment/[id]`.
- **Payment**: User uploads screenshot -> Supabase Storage saves file -> `bookings` entry updated with `ScreenshotURL`.
- **Verification**: Admin reviews screenshot -> Updates status to `Success` -> Trigger (Edge Function or Server Action) sends email with Ticket link.

## Build Order
1. **Foundation**: Core Next.js setup + Supabase schema.
2. **Data**: Import match schedule from PDF.
3. **Core Flow**: Match listing -> Category selection -> Booking form.
4. **Payment**: QR display + File upload (Supabase Storage).
5. **Admin**: Verification dashboard.
6. **Polish**: Email integrations + PDF ticket generation.

---
*Last updated: 2026-04-03*
