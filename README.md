# Kingdom Civics

Christian civic education for understanding government, examining leadership through transparent biblical principles, praying for those in authority, and serving local communities.

**Kingdom first.** The product never treats a party, politician, ideology, nation, or movement as synonymous with the Kingdom of God.

## What ships in this repository

- Premium responsive homepage and complete navigation
- Civic learning, issues, leaders, elections, prayer, service, trust, search, comparison, My Civics, and admin demo routes
- Fictional Harbor City demonstration with explicit sample-data labeling
- Interactive Kingdom Lens research experience and structured local API
- Evidence matrix with alignment, tension, uncertainty, and source confidence
- PostgreSQL/Supabase relational schema, pgvector field, indexes, audit history, and RLS
- Hard-coded Kingdom Lens constitution
- SEO metadata, structured data, accessibility, mobile layouts, and reduced-motion support

All visible political data in the launch demo is fictional. This avoids implying that unsourced sample assessments describe real candidates.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Production checks:

```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Architecture

### Web

- Next.js 16 App Router
- React 19 and strict TypeScript
- Tailwind CSS 4 plus a custom editorial design system
- Server Components by default; Client Components only for interactive navigation, search, comparison, location lookup, and Kingdom Lens

### Data

The foundation migration lives in `supabase/migrations/0001_foundation.sql`.

- PostgreSQL is the system of record.
- `pgvector` stores evidence embeddings for retrieval.
- Public access is restricted to reviewed/published records.
- User saves are owner-only through RLS.
- Authorization belongs in trusted app metadata/server controls, never user-editable metadata.
- Assessments retain methodology version, reviewer, evidence links, counter-evidence, and review state.
- Scripture text remains nullable and may only be stored with public-domain or licensed content.

### Kingdom Lens RAG

The production pipeline is designed as:

1. Normalize a user question and resolve jurisdiction.
2. Retrieve separately from the biblical corpus, civic education corpus, verified political evidence, and public records.
3. Filter political evidence to human-verified records for high-impact assessments.
4. Generate a structured response through a provider abstraction.
5. Validate that each factual claim points to retrieved source IDs.
6. Run checks for loaded language, party favoritism, name confusion, source mismatch, quote distortion, theological overclaiming, excess certainty, and omitted counter-evidence.
7. Return answer, facts, sources, biblical principles, Scripture, interpretation, uncertainty, counterpoints, confidence, and verification date.

`src/app/api/kingdom-lens/route.ts` provides a deterministic, schema-validated demonstration that requires no provider key. A production adapter can replace generation without changing the response contract.

### Authentication and roles

The schema is ready for Supabase Auth and these roles:

- Member
- Researcher
- Editor
- Theology Reviewer
- Political Data Reviewer
- Source Verifier
- Moderator
- Super Admin

The public demo intentionally does not pretend to create real accounts. Connect a Supabase project, configure SSR clients, and apply the migration before enabling account persistence.

### Editorial and AI safety

- Primary sources are ranked above journalism, commentary, and social posts.
- Tier 4 evidence cannot support a definitive conclusion by itself.
- High-impact assessments default to `needs_review`.
- Contradictory evidence is a first-class relationship.
- “No reliable evidence” is a valid result.
- Candidate analysis is not converted into a “Christian score.”
- Every meaningful edit can be traced through `audit_logs`.

## Environment

The demo requires no secrets. Production integrations can use:

```bash
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=
AI_GATEWAY_API_KEY=
```

Never expose a Supabase secret/service-role key to the browser.

## Deployment

Vercel auto-detects the Next.js application:

```bash
vercel --prod
```

Before connecting the custom domain, configure the DNS records provided by Vercel for `KingdomCivics.org`. Domain ownership and registrar access are intentionally not assumed by this repository.

## Legal posture

Kingdom Civics defaults to education and documented analysis, not endorsement or political advertising. Election law, nonprofit compliance, privacy obligations, and theological review require qualified human counsel before real-jurisdiction launch.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
