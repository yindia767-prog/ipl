# Requirements: IPL 2026 Ticket Booking Platform

**Defined:** 2026-04-03
**Core Value:** A seamless, fast, and professional ticket booking experience that feels authorized and secure.

## v1 Requirements

### Schedule & Matches
- [ ] **SCHED-01**: Display a chronological list of all matches from the 2026 schedule.
- [ ] **SCHED-02**: Show match details: Teams (with logos), Date, Time (IST), and Venue.
- [ ] **SCHED-03**: High-performance match cards on homepage for "Upcoming Matches".
- [ ] **SCHED-04**: Basic search/filter functionality for matches by team or venue.

### Ticketing & Booking
- [ ] **TICK-01**: Match details page showing high-fidelity banner and detailed venue info.
- [ ] **TICK-02**: Selection of ticket categories (e.g., Platinum, Gold, Silver) with real-time price display.
- [ ] **TICK-03**: Frictionless booking form requiring only Email and Phone (no login needed).
- [ ] **TICK-04**: Atomic inventory check to prevent overbooking categories.

### Payment & Verification
- [ ] **PAY-01**: Post-booking payment page showing a clear QR code and transaction total.
- [ ] **PAY-02**: User-friendly screenshot upload system for payment proof.
- [ ] **PAY-03**: Persisted "Verification Pending" state for users after screenshot submission.
- [ ] **PAY-04**: Admin-side verification input for manual cross-referencing.

### Admin Panel
- [ ] **ADM-01**: Secure Admin login (Auth managed by Supabase).
- [ ] **ADM-02**: Central dashboard displaying all bookings with status filters (Pending, Verified, Rejected).
- [ ] **ADM-03**: High-res view of user-submitted payment screenshots.
- [ ] **ADM-04**: Workflow to Approve/Reject bookings with status updates.
- [ ] **ADM-05**: Dynamic management of matches, ticket prices, and availability via Admin UI.

### Notifications & Delivery
- [ ] **DEL-01**: Automated Email notification upon booking submission (instructions + link).
- [ ] **DEL-02**: Automated Email notification upon successful payment verification.
- [ ] **DEL-03**: High-quality downloadable ticket (PDF/Image) with match details and a unique ID.

### Branding & UI/UX
- [ ] **UI-01**: Premium, professional design following standard IPL 2026 aesthetic.
- [ ] **UI-02**: Performance-first approach (fast initial payloads and smooth transitions).
- [ ] **UI-03**: Fully responsive mobile-first layout.

## v2 Requirements
- **AUTH-01**: Full user account system and history.
- **SEAT-01**: Visual seat selection map.
- **GATE-01**: Automated third-party payment gateway integration.

## Out of Scope
| Feature | Reason |
|---------|--------|
| Live Match Updates | Not core to ticket booking value. |
| Multi-Currency Support | Defer to v2+ (assume INR for v1). |
| Physical Shipping | Digital delivery is faster and more cost-effective. |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| SCHED-01 | Phase 1 | Pending |
| SCHED-02 | Phase 1 | Pending |
| UI-01 | Phase 1 | Pending |
| TICK-01 | Phase 2 | Pending |
| TICK-02 | Phase 2 | Pending |
| TICK-03 | Phase 2 | Pending |
| ADM-01 | Phase 3 | Pending |
| ADM-02 | Phase 3 | Pending |
| ADM-03 | Phase 3 | Pending |
| PAY-01 | Phase 4 | Pending |
| PAY-02 | Phase 4 | Pending |
| DEL-01 | Phase 5 | Pending |
| DEL-02 | Phase 5 | Pending |
| DEL-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 23 total
- Mapped to phases: 14 (preliminary)
- Unmapped: 9 (to be finalized in ROADMAP.md) ⚠️

---
*Requirements defined: 2026-04-03*
*Last updated: 2026-04-03 after initial definition*
