# Phase 1: Foundation & Data - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish the core project structure and data layer. This includes the Next.js scaffolding, Supabase integration, and importing the IPL 2026 match schedule from the provided PDF.

</domain>

<decisions>
## Implementation Decisions

### Tech Stack
- **D-01:** Framework: Next.js 15+ (App Router) for high-speed delivery.
- **D-02:** Database: Supabase (PostgreSQL) with Row-Level Security (RLS).
- **D-03:** Styling: Tailwind CSS + Shadcn UI for a premium, professional interface.
- **D-04:** Deployment: Optimized for high-performance edge execution.

### Data & Branding
- **D-05:** Match Schema: Include Home Team, Away Team, Venue, Date (ISO), Time (IST), and Match Number.
- **D-06:** Seeding: Load all 74 matches from the extracted PDF data into the PostgreSQL `matches` table.
- **D-07:** Team Assets: Map each team (CSK, RCB, MI, GT, DC, SRH, LSG, RR, PBKS, KKR) to their official 2026 colors and logos.

### Design System
- **D-08:** Aesthetic: Follow official IPL 2026 branding (Royal Blue, vibrant energetic streaks).
- **D-09:** Visuals: Prioritize clean typography and high-fidelity imagery/SVG logos.

### the agent's Discretion
- Exact folder structure for assets and components.
- Implementation of the "Upcoming Matches" filtering logic (e.g., date-based).
- Loading skeleton designs for the schedule list.

</decisions>

<specifics>
## Specific Ideas

- "Speed is my real aim, I don't want so many advanced animations."
- "Homepage where user can see upcoming matches teams playing and timing and venue, it should look like professional website."
- Use the first 21 matches already extracted from the PDF as a baseline, but aim to import the full set.

</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Project Context
- `.planning/PROJECT.md` — approved vision and constraints.
- `.planning/REQUIREMENTS.md` — SCHED-01 to SCHED-04 and UI-01 to UI-03 details.
- `.planning/research/SUMMARY.md` — standard 2026 tech stack recommendations.

### Domain Data
- `TATA IPL 2026 Season Schedule.pdf` — canonical source for all match fixtures.

</canonical_refs>

<deferred>
## Deferred Ideas

- Ticket category management and pricing — Phase 2.
- Admin panel authentication and dashboard — Phase 3.
- PDF ticket generation and email delivery — Phase 5.

</deferred>

---

*Phase: 01-foundation-data*
*Context gathered: 2026-04-03*
