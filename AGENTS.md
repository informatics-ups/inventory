<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know
# ALWAYS read Next.js docs before coding

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->


<!-- BEGIN:skills-agent-rules -->
# ALWAYS resolve skills before coding

Read the reference `/SKILL.md` before writing any code and the relevant Agent skills guide in `/.agent/skills/`. Follow this strict loading strategy to avoid wasting context:

## Session Init (Once Only)
- If not already loaded this session, scan `/.agent/skills/` and build a shallow index
- Read ONLY the frontmatter (`name` + `description`) of each `SKILL.md` — do NOT read full bodies yet
- Cache this index for the entire session — never re-scan unless explicitly asked

## On Every Request
- Match the user's request against the cached shallow index (name + description only)
- Lazy-load the full `SKILL.md` body of at most 1–2 matched skills
- Apply the loaded skill's instructions combined with rules in this file
- Discard the full skill body from context after the task is done

## Full Scan (Explicit Request Only)
- Only load all full skill bodies when the user explicitly asks "list skills" or "what can you do?"
- Revert to shallow index only after summarizing

## Matching Priority
1. Exact keyword match — skill `name` appears in the user's message
2. Semantic match — user's intent aligns with a skill `description`
3. No match — proceed using only the rules in this file, do not load any skill body
<!-- END:skills-agent-rules -->