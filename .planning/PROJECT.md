# IPL 2026 Ticket Booking Platform

## What This Is
A professional, high-speed platform for booking IPL 2026 tickets. It allows users to view match schedules, book tickets using email and phone number, and process payments via QR code with manual admin verification.

## Core Value
A seamless, fast, and professional ticket booking experience that feels authorized and secure.

## Requirements

### Validated
(None yet — ship to validate)

### Active
- [ ] Homepage with upcoming matches, teams, timing, and venue.
- [ ] Match details page with banner, description, venue details, and ticket pricing categories.
- [ ] Booking flow requiring only email and phone number (no account creation).
- [ ] Payment page with QR code for manual payment.
- [ ] Screenshot upload for payment verification.
- [ ] Admin panel to manage matches, ticket categories/prices, booking details, and payment verification.
- [ ] Email notification to users upon booking and payment verification.
- [ ] Feature to download tickets as PDF/image.
- [ ] High-speed performance (speed is a priority over complex animations).
- [ ] Authentic IPL 2026 branding and team logos.

### Out of Scope
- [ ] User account creation/login for buyers — User explicitly requested no auth for booking.
- [ ] Automated payment gateway integration — User requested manual QR verification.
- [ ] Advanced complex animations — User prioritized speed.

## Context
- The project is for IPL 2026 (Dummy project).
- Schedule is provided via a PDF (TATA IPL 2026 Season Schedule.pdf).
- Standard IPL aesthetics should be followed.
- Supabase is chosen as the database/storage/auth provider.

## Constraints
- **Tech Stack**: Next.js (App Router), Supabase (DB/Auth/Storage), Tailwind CSS, Shadcn UI.
- **Data Source**: Use match details extracted from the provided PDF schedule.
- **Performance**: High speed and responsiveness are top priorities.

## Key Decisions
| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js + Supabase | Industry standard for high-speed, scalable web apps with built-in storage/auth. | — Pending |
| No User Auth for Booking | Streamlines the booking process for higher conversion/simplicity. | — Pending |
| Manual QR Verification | Practical for a dummy project and simplifies payment handling. | — Pending |

---
## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-04-03 after initialization*
