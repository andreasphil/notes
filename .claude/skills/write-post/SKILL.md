---
name: write-post
description: 'Draft-to-published workflow for Andreas'' monthly team newsletter posts (content/notes/YYYY-MM.md in this repo). Use when the user is writing, drafting, or polishing a monthly notes post — providing a list of links with notes or TODO markers, asking to turn raw notes into prose, asking to research/summarize linked articles, or asking for a final proofread/style pass on a finished draft. Covers two distinct phases that must not be collapsed into one: (1) drafting — resolving TODOs by visiting links and summarizing them, turning terse notes into full sentences matching this newsletter''s established tone, then pausing for review; and (2) polish — spelling/grammar fixes plus this newsletter''s specific house style rules (link punctuation, italic quotes, bullet spacing, "Notable releases" heading, front matter title).'
---

# Writing monthly notes posts

This is a two-phase workflow. Do the phases in order and **pause between them** — never jump from drafting straight into polish without the user reviewing first.

## Phase 1 — Draft

Triggered when the user hands you a post (new or in progress) in `content/notes/YYYY-MM.md` that mixes finished bullets, links with a short note about why they matter, and links marked with some kind of TODO/placeholder (`TODO`, `todo:`, `???`, an empty note, etc. — ask if a marker is ambiguous rather than guessing).

Work in this order:

1. **Resolve TODOs first.** For every link marked as a TODO, fetch it and write a concise summary of the most relevant point(s) — not a full recap, just what makes it worth including. Match the level of detail used for similar links elsewhere in recent posts (some get one clause, some get a full paragraph with an opinion attached).
2. **Turn notes into prose.** Take the user's own notes — which may be sentence fragments, bare keywords, or nothing but a link — and turn them into full sentences: concise, clear, for an informed frontend/software-engineering audience, not overly formal. Preserve the user's actual point; don't invent facts or opinions they didn't give you. If a note is genuinely just a link with no context, it's fine to leave it as a short, factual one-liner rather than padding it.
3. **Calibrate tone before writing.** Read 4–6 of the most recently published posts in `content/notes/` (skip the one being edited) to recalibrate tone, sentence rhythm, and structure — style drifts slightly over time and the most recent posts are the best reference. Read `references/style-guide.md` for the concrete conventions to apply as you write, don't just wing it from memory.
4. **No new emojis.** Don't add any. If the user's own notes already contain one, keep it exactly where they put it.
5. **Stop.** Present the drafted post and wait for the user's review. Do not proceed to Phase 2 on your own initiative.

## Phase 2 — Final polish

Triggered when the user says the draft has been reviewed and is ready for a final pass.

This phase is proofreading and style consistency **only**. Do not touch content, opinions, or meaning beyond fixing outright mistakes — if a sentence reads awkwardly for a reason other than a spelling/grammar/punctuation error, flag it for the user instead of silently rewriting it.

1. Fix spelling, grammar, and punctuation mistakes.
2. Apply every rule in `references/style-guide.md` across the whole file, not just the newly drafted parts — inconsistencies can exist anywhere.
3. Show the user what changed (a diff, or just point them to `git diff`) so they can see exactly what was touched, since this phase is supposed to be low-risk.

## Reference

- `references/style-guide.md` — the full house style guide with concrete examples pulled from published posts: front matter/title conventions, bold/link/quote conventions, "Notable releases" formatting, and tone notes. Read this during both phases; it's the source of truth, this file is just the workflow.
