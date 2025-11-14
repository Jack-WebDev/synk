# Synk — Where Your Work and Money Stay in Sync

> **Synk** is an integrated business suite built for freelancers and small teams in South Africa.  
> It connects your **contracts**, **clients**, and **invoices** into a single, automated workflow —  
> from signing to payment to renewal.

---

## Overview

**Synk** merges two powerful tools into one seamless experience:

- **ContractSync** → Smart contract creation, signing, renewal & reminders.  
  - ECTA-compliant digital signatures  
  - Auto-renewals & reminders  
  - Localized templates (ZAR, VAT, SA compliance)

- **Ledgerly** → Lightweight accounting & invoicing.  
  - ZAR + VAT support  
  - PayFast integration  
  - Bank CSV import (FNB, Capitec, Standard Bank)

Together they form a **connected workflow**:

> Sign a contract →  Auto-create client →  Issue invoice → Record payment →  Renewal reminder

---

## Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | [Next.js](https://nextjs.org/) (React + TypeScript), TailwindCSS, shadcn/ui |
| Backend | [Fastify](https://fastify.dev/)  |
| Shared Code | tRPC, Zod, Drizzle ORM, TypeScript project references |
| Auth | BetterAuth |
| Database | PostgreSQL  |
| Monorepo | PNPM + Turborepo |
| Dev Tools | Biome.js, Vitest |
| Deployment | Vercel (Edge + Node functions), AWS (for workers) |

---
