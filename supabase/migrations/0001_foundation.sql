-- Kingdom Civics foundation schema.
-- Apply with the Supabase CLI after linking a project. Demo deployment does not require a database.
create extension if not exists pgcrypto;
create extension if not exists vector;

create type public.review_state as enum ('draft', 'ai_extracted', 'needs_review', 'verified', 'rejected', 'archived');
create type public.evidence_strength as enum ('strong', 'moderate', 'limited', 'contradictory', 'none', 'outdated');
create type public.alignment_state as enum ('alignment', 'tension', 'unclear', 'insufficient_evidence', 'not_applicable');
create type public.source_tier as enum ('tier_1_primary', 'tier_2_reputable_secondary', 'tier_3_commentary', 'tier_4_unverified');
create type public.app_role as enum ('member', 'researcher', 'editor', 'theology_reviewer', 'political_data_reviewer', 'source_verifier', 'moderator', 'super_admin');

create table public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  role public.app_role not null default 'member',
  home_jurisdiction_id uuid,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.jurisdictions (
  id uuid primary key default gen_random_uuid(),
  parent_id uuid references public.jurisdictions(id),
  kind text not null check (kind in ('country','region','county','municipality','district','school')),
  name text not null,
  slug text not null,
  country_code char(2) not null,
  official_url text,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  unique(parent_id, slug)
);
alter table public.profiles add constraint profiles_home_jurisdiction_fkey foreign key (home_jurisdiction_id) references public.jurisdictions(id);

create table public.offices (
  id uuid primary key default gen_random_uuid(),
  jurisdiction_id uuid not null references public.jurisdictions(id),
  name text not null,
  slug text not null,
  description text not null,
  controls text[] not null default '{}',
  does_not_control text[] not null default '{}',
  term_months int,
  election_method text,
  contact_instructions text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  unique(jurisdiction_id, slug)
);

create table public.elections (
  id uuid primary key default gen_random_uuid(),
  jurisdiction_id uuid not null references public.jurisdictions(id),
  name text not null,
  slug text not null unique,
  election_date date not null,
  registration_deadline date,
  official_url text not null,
  voting_methods jsonb not null default '[]',
  review_state public.review_state not null default 'draft',
  last_verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.races (
  id uuid primary key default gen_random_uuid(),
  election_id uuid not null references public.elections(id) on delete cascade,
  office_id uuid not null references public.offices(id),
  district_name text,
  status text not null default 'declared',
  created_at timestamptz not null default now(),
  unique(election_id, office_id, district_name)
);

create table public.people (
  id uuid primary key default gen_random_uuid(),
  full_name text not null,
  slug text not null unique,
  photo_url text,
  biography text,
  education jsonb not null default '[]',
  professional_background jsonb not null default '[]',
  official_links jsonb not null default '{}',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.candidacies (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references public.people(id),
  race_id uuid not null references public.races(id),
  party_name text,
  incumbent boolean not null default false,
  campaign_url text,
  review_state public.review_state not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(person_id, race_id)
);

create table public.office_terms (
  id uuid primary key default gen_random_uuid(),
  person_id uuid not null references public.people(id),
  office_id uuid not null references public.offices(id),
  starts_on date not null,
  ends_on date,
  source_id uuid,
  created_at timestamptz not null default now()
);

create table public.policy_topics (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  description text not null,
  created_at timestamptz not null default now()
);

create table public.principles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text not null unique,
  short_definition text not null,
  biblical_context text not null,
  broad_agreement text,
  areas_of_disagreement text,
  methodology_version text not null,
  review_state public.review_state not null default 'draft',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.scriptures (
  id uuid primary key default gen_random_uuid(),
  reference text not null,
  book text not null,
  chapter int not null,
  verse_start int not null,
  verse_end int,
  translation text not null,
  text text,
  license_metadata jsonb not null default '{}',
  unique(reference, translation)
);

create table public.principle_scriptures (
  principle_id uuid not null references public.principles(id) on delete cascade,
  scripture_id uuid not null references public.scriptures(id),
  context_note text not null,
  primary key (principle_id, scripture_id)
);

create table public.sources (
  id uuid primary key default gen_random_uuid(),
  url text not null unique,
  publisher text not null,
  title text not null,
  published_at timestamptz,
  retrieved_at timestamptz not null default now(),
  source_type text not null,
  tier public.source_tier not null,
  archived_url text,
  content_hash text,
  is_reachable boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.evidence (
  id uuid primary key default gen_random_uuid(),
  person_id uuid references public.people(id),
  topic_id uuid references public.policy_topics(id),
  source_id uuid not null references public.sources(id),
  claim text not null,
  direct_quote text,
  context text not null,
  confidence numeric(4,3) check (confidence between 0 and 1),
  extraction_state public.review_state not null default 'ai_extracted',
  human_review_state public.review_state not null default 'needs_review',
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  last_checked_at timestamptz not null default now(),
  embedding vector(1536),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz
);

create table public.candidate_principle_assessments (
  id uuid primary key default gen_random_uuid(),
  candidacy_id uuid not null references public.candidacies(id),
  principle_id uuid not null references public.principles(id),
  state public.alignment_state not null,
  strength public.evidence_strength not null,
  summary text not null,
  interpretive_reasoning text not null,
  counter_evidence_note text,
  methodology_version text not null,
  review_state public.review_state not null default 'needs_review',
  reviewed_by uuid references public.profiles(id),
  reviewed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(candidacy_id, principle_id, methodology_version)
);

create table public.assessment_evidence (
  assessment_id uuid not null references public.candidate_principle_assessments(id) on delete cascade,
  evidence_id uuid not null references public.evidence(id),
  relationship text not null check (relationship in ('supports','contradicts','context')),
  primary key (assessment_id, evidence_id)
);

create table public.content_items (
  id uuid primary key default gen_random_uuid(),
  kind text not null check (kind in ('issue','learning_module','article','prayer_guide')),
  slug text not null,
  title text not null,
  summary text not null,
  body jsonb not null,
  jurisdiction_id uuid references public.jurisdictions(id),
  review_state public.review_state not null default 'draft',
  author_id uuid references public.profiles(id),
  published_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  deleted_at timestamptz,
  unique(kind, slug, jurisdiction_id)
);

create table public.saved_items (
  user_id uuid not null references public.profiles(id) on delete cascade,
  item_type text not null,
  item_id uuid not null,
  created_at timestamptz not null default now(),
  primary key (user_id, item_type, item_id)
);

create table public.error_reports (
  id uuid primary key default gen_random_uuid(),
  reporter_id uuid references public.profiles(id),
  page_url text not null,
  category text not null,
  description text not null,
  status public.review_state not null default 'needs_review',
  assigned_to uuid references public.profiles(id),
  created_at timestamptz not null default now(),
  resolved_at timestamptz
);

create table public.audit_logs (
  id bigint generated always as identity primary key,
  actor_id uuid references public.profiles(id),
  entity_table text not null,
  entity_id uuid not null,
  action text not null,
  before_data jsonb,
  after_data jsonb,
  reason text,
  created_at timestamptz not null default now()
);

create table public.ai_runs (
  id uuid primary key default gen_random_uuid(),
  run_type text not null,
  provider text not null,
  model text not null,
  prompt_version text not null,
  input_source_ids uuid[] not null default '{}',
  output jsonb,
  unsupported_claims int not null default 0,
  bias_flags jsonb not null default '[]',
  status text not null,
  started_at timestamptz not null default now(),
  completed_at timestamptz
);

create index jurisdictions_parent_idx on public.jurisdictions(parent_id) where deleted_at is null;
create index offices_jurisdiction_idx on public.offices(jurisdiction_id) where deleted_at is null;
create index elections_date_idx on public.elections(election_date) where deleted_at is null;
create index evidence_person_topic_idx on public.evidence(person_id, topic_id) where deleted_at is null;
create index evidence_review_idx on public.evidence(human_review_state, created_at);
create index evidence_embedding_idx on public.evidence using hnsw (embedding vector_cosine_ops);
create index content_kind_published_idx on public.content_items(kind, published_at) where deleted_at is null;
create index audit_entity_idx on public.audit_logs(entity_table, entity_id, created_at desc);

alter table public.profiles enable row level security;
alter table public.jurisdictions enable row level security;
alter table public.offices enable row level security;
alter table public.elections enable row level security;
alter table public.races enable row level security;
alter table public.people enable row level security;
alter table public.candidacies enable row level security;
alter table public.office_terms enable row level security;
alter table public.policy_topics enable row level security;
alter table public.principles enable row level security;
alter table public.scriptures enable row level security;
alter table public.principle_scriptures enable row level security;
alter table public.sources enable row level security;
alter table public.evidence enable row level security;
alter table public.candidate_principle_assessments enable row level security;
alter table public.assessment_evidence enable row level security;
alter table public.content_items enable row level security;
alter table public.saved_items enable row level security;
alter table public.error_reports enable row level security;
alter table public.audit_logs enable row level security;
alter table public.ai_runs enable row level security;

create policy "published civic data is public" on public.jurisdictions for select using (deleted_at is null);
create policy "published offices are public" on public.offices for select using (deleted_at is null);
create policy "verified elections are public" on public.elections for select using (review_state = 'verified' and deleted_at is null);
create policy "races are public" on public.races for select using (exists (select 1 from public.elections e where e.id = election_id and e.review_state = 'verified'));
create policy "people are public" on public.people for select using (deleted_at is null);
create policy "verified candidacies are public" on public.candidacies for select using (review_state = 'verified');
create policy "topics are public" on public.policy_topics for select using (true);
create policy "verified principles are public" on public.principles for select using (review_state = 'verified');
create policy "scripture metadata is public" on public.scriptures for select using (true);
create policy "principle scripture links are public" on public.principle_scriptures for select using (true);
create policy "sources attached to verified evidence are public" on public.sources for select using (
  exists (select 1 from public.evidence e where e.source_id = id and e.human_review_state = 'verified')
);
create policy "verified evidence is public" on public.evidence for select using (human_review_state = 'verified' and deleted_at is null);
create policy "verified assessments are public" on public.candidate_principle_assessments for select using (review_state = 'verified');
create policy "published content is public" on public.content_items for select using (review_state = 'verified' and published_at <= now() and deleted_at is null);
create policy "users read own profile" on public.profiles for select to authenticated using (id = (select auth.uid()));
create policy "users update own profile" on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));
create policy "users manage own saves" on public.saved_items for all to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy "users submit error reports" on public.error_reports for insert to authenticated with check (reporter_id = (select auth.uid()));
create policy "users read own error reports" on public.error_reports for select to authenticated using (reporter_id = (select auth.uid()));

comment on table public.candidate_principle_assessments is
  'Evidence-based assessment; never a score of Christian identity, divine endorsement, or voting instruction.';
comment on column public.scriptures.text is
  'May be null. Store text only when public domain or properly licensed; retain license_metadata.';
