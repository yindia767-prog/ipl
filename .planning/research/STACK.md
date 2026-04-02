# Tech Stack Research: IPL 2026 Ticket Booking

## Proposed Stack

| Layer | Standard Selection | Rationale | Confidence |
|-------|-------------------|-----------|------------|
| **Frontend** | Next.js 15+ (App Router) | Best-in-class performance, SEO, and developer experience. | High |
| **Styling** | Tailwind CSS + Shadcn UI | Rapid development of premium, professional interfaces. | High |
| **Backend/DB** | Supabase (PostgreSQL) | ACID compliance for ticket transactions, built-in Auth and Storage. | High |
| **Auth** | Supabase Auth | Simple integration for Admin panel; session-less flow for users. | High |
| **Storage** | Supabase Storage | For storing user-uploaded payment screenshots. | High |
| **Emails** | Resend / Nodemailer | reliable email delivery for ticket confirmations. | High |
| **PDF Generation** | @react-pdf/renderer | Client-side or server-side ticket generation. | Medium |

## Standards & Patterns (2026)
- **Server Components**: Use for schedule pages to maximize speed and SEO.
- **Server Actions**: For ticket booking and payment screenshot uploads.
- **Optimistic UI**: For a snappy booking feel.
- **SQL Transactions**: Essential for ensuring a seat is not double-booked (ACID).

## What NOT to use
- **Plain React (CRA)**: Too slow for a professional, "authorized" feel; lacks built-in SSR.
- **Tailwind-only (no components)**: Building premium UI from scratch takes too long; Shadcn is the 2026 standard.
- **NoSQL (MongoDB)**: Risk of race conditions in ticket inventory without complex manual locking.

## Rationale
The combination of Next.js and Supabase provides the best balance of **v1 speed** and **production-ready transactional integrity**. Supabase's built-in storage handles the "manual verification" requirement (screenshot uploads) without extra infra.

---
*Last updated: 2026-04-03*
