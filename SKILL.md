---
name: Read Agent Docs
description: Loads global rules from /AGENTS.md once per session, then lazily resolves only the relevant skill from /.agent/skills/ based on the user's current request — avoiding full re-scan on every turn.
---

# Read Agent Docs

## When to Use

- **Once at session start** — to load global rules from `/AGENTS.md`
- **On each user request** — to match and load only the single most relevant skill
- When the user explicitly asks *"what skills do you have?"* — only then do a full skill index scan

## Instructions

### Phase 0 — Pre-Command Guard (Run Before ANY Command)

Before executing any terminal command:
1. Check if `use-pnpm` skill exists in skills-lock.json and is accessible
2. If accessible and not loaded → lazy-load it, apply rules, mark loaded
3. If inaccessible → log warning but proceed with command (don't block execution)
4. If skill fails to load → fall back to default pnpm behavior with warning

> This phase runs **in addition to** Phase 2 skill matching, not instead of it.

---

### Phase 1 — Session Init (Run Once Only)

Run this phase only if global rules haven't been loaded THIS SESSION:

1. Read `/AGENTS.md`
2. **Check skills-lock.json for authoritative skill list** (don't rely solely on filesystem)
3. For each skill in lock file, read frontmatter from cached location or fallback to filesystem
4. Cache index with TTL or version stamp for refresh capability

> After Phase 1 completes, mark session as `AGENT_DOCS_LOADED = true`

---

### Phase 2 — On-Demand Skill Resolution (Run Every Request)

1. **Match intent** — Compare the user's request against the cached skill index (names + descriptions only)
2. **Identify the best match** — Select at most 1–2 skills whose description is most relevant to the current request. If no skill is relevant, skip to step 4
3. **Lazy-load the matched skill(s)** — Only now read the full `SKILL.md` body of the matched skill(s)
4. **Execute** — Follow the loaded skill's instructions combined with global rules from `AGENTS.md`
5. **Discard after use** — Do not retain the full skill body in context after the task is done; only keep the shallow index

---

### Phase 3 — Full Scan (On Explicit Request Only)

Only run when the user explicitly asks *"list all skills"*, *"what can you do?"*, or similar:

1. Load the full `SKILL.md` body for **all** skills from the index
2. Summarize each skill's name and purpose to the user
3. Discard full bodies after summarizing — revert to shallow index only

---

## Skill Matching Logic

1. **Exact keyword match** — skill `name` appears in the user's message
2. **Semantic match** — user's intent clearly aligns with a skill `description`
3. **No match** — proceed without loading any skill body; apply only `AGENTS.md` rules

---

## References

- Root agent doc: `/AGENTS.md`
- Skills directory: `/.agent/skills/`
- Skill entry point: `/.agent/skills/<skill-name>/SKILL.md`
- Pre-command guard: `/.agent/skills/use-pnpm/SKILL.md`