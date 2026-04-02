# Roadmap: IPL 2026 Ticket Booking Platform

## Overview
This roadmap outlines the journey from a blank repository to a professional, high-speed IPL ticket booking platform. We'll start with the foundational UI and match data, move to the core booking and category selection, build the secure admin verification system, and finally polish the manual payment workflow and ticket delivery components.

## Phases

- [ ] **Phase 1: Foundation & Data** - Core UI skeleton and match schedule integration.
- [ ] **Phase 2: Booking Flow** - Match details, category selection, and frictionless booking form.
- [ ] **Phase 3: Admin Dashboard** - Secure admin panel for managing bookings and verifications.
- [ ] **Phase 4: Payment Workflow** - QR code display and screenshot upload system.
- [ ] **Phase 5: Delivery & Polish** - Email notifications and downloadable ticket generation.

## Phase Details

### Phase 1: Foundation & Data
**Goal**: Establish the project structure and load the IPL 2026 match schedule.
**Depends on**: Nothing
**Requirements**: [SCHED-01, SCHED-02, SCHED-03, UI-01, UI-02, UI-03]
**Success Criteria**:
  1. Professional homepage exists with "Upcoming Matches" section.
  2. All match details (teams, logos, venues) are displayed accurately.
  3. App-wide design tokens (IPL colors/logos) are established.
**Plans**: 2 plans
- [ ] 01-01: Project scaffolding (Next.js, Tailwind, Supabase) and Design System.
- [ ] 01-02: Match data schema and schedule seeding from PDF data.

### Phase 2: Booking Flow
**Goal**: Allow users to explore match details and submit a booking.
**Depends on**: Phase 1
**Requirements**: [TICK-01, TICK-02, TICK-03, TICK-04, SCHED-04]
**Success Criteria**:
  1. Users can view a detailed page for any match with venue info.
  2. Users can select ticket categories with live price calculation.
  3. Users can submit a booking using only Email and Phone.
**Plans**: 2 plans
- [ ] 02-01: Match details page and category selection UI.
- [ ] 02-02: Frictionless booking form and atomic inventory check.

### Phase 3: Admin Dashboard
**Goal**: Build the secure backend for managing ticket requests.
**Depends on**: Phase 2
**Requirements**: [ADM-01, ADM-02, ADM-03, ADM-04, ADM-05]
**Success Criteria**:
  1. Admin can log in securely via Supabase Auth.
  2. Admin dashboard shows all pending/verified/rejected bookings.
  3. Admin can update booking statuses and manage match prices.
**Plans**: 2 plans
- [ ] 03-01: Admin portal and booking management dashboard.
- [ ] 03-02: Match and pricing management tools for admins.

### Phase 4: Payment Workflow
**Goal**: Implement the manual payment workflow and status tracking.
**Depends on**: Phase 3
**Requirements**: [PAY-01, PAY-02, PAY-03, PAY-04]
**Success Criteria**:
  1. Post-booking page shows payment QR code and instructions.
  2. Users can upload payment screenshots to Supabase Storage.
  3. Users see "Verification Pending" status after upload.
**Plans**: 2 plans
- [ ] 04-01: Payment UI component with QR code and upload logic.
- [ ] 04-02: Backend state management for booking payment tracking.

### Phase 5: Delivery & Polish
**Goal**: Finalize the user loop with email alerts and ticket downloads.
**Depends on**: Phase 4
**Requirements**: [DEL-01, DEL-02, DEL-03]
**Success Criteria**:
  1. Users receive emails for booking received and payment verified.
  2. Verified users can download a professional ticket (PDF or Image).
**Plans**: 1 plan
- [ ] 05-01: Email integration (Resend) and PDF ticket generation.

## Progress

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Foundation & Data | 0/2 | Not started | - |
| 2. Booking Flow | 0/2 | Not started | - |
| 3. Admin Dashboard | 0/2 | Not started | - |
| 4. Payment Workflow | 0/2 | Not started | - |
| 5. Delivery & Polish | 0/1 | Not started | - |

---
*Roadmap defined: 2026-04-03*
*Last updated: 2026-04-03 after initial definition*
