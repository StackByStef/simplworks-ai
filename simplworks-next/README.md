# SimplWorks Editorial V1

**Production:** https://simplworks.ai
**Stack:** Next.js 14 App Router, deployed to Vercel
**Build type:** SimplWorks Editorial V1 (canonical design system)
**Status:** Active

---

## Authorities

This project is built against these process documents. Read them before editing.

- **Client Implementation Guide V1.4** — `/cortex-memory-logger/process/Client_Implementation_Guide.md`. The 6-stage build process. This site is a Stage 4–6 execution.
- **Website Engine Optimization Guide V1.0** — `/cortex-memory-logger/process/Website_Engine_Optimization_Guide.md`. Tier 1–4 technical standards for every Cortex client site.
- **Friction Audit Framework V1.1** — `/cortex-memory-logger/process/SimplWorks_Friction_Audit_Framework.md`. The 10-point audit referenced in the Reach Me CTA.

## Design source

SimplWorks Editorial V1 canonical source artifacts:

- **Structure + styling:** `/Users/stephaniebelote/Downloads/SimplWorks_V4_Hero.html` (reference only — no further edits)
- **Copy:** `/Users/stephaniebelote/Downloads/SimplWorks_V4_CC_Response.md` V1.1 (DC-locked)
- **Offer:** `/cortex-memory-logger/process/SimplWorks_Friction_Audit_Framework.md` V1.1

Zero template bleed from other client projects (Top Dog Vending, EVA Legal, Cortex Portal, Assigned Risk App).

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deployment

Auto-deploys to Vercel on push to `main`. Preview deploys on push to any other branch.

Environment variables are configured in Vercel project settings. See `.env.local.example` for the list.

## Dev stack reference

See `/Users/stephaniebelote/dev-stacks/simplworks.md` for the full project context, API credentials, and migration history.
