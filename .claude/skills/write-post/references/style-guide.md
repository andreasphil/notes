# House style guide for content/notes/*.md

Derived from published posts, particularly the last 6 months (`2026-02.md` through `2026-07.md`), plus a punctuation-consistency cleanup commit that fixed several posts to match the rules below. When in doubt, go find a recent post and match what it does rather than inventing something new.

## Front matter

```toml
+++
date = 2026-07-01
title = "ECMAScript 2026, revisiting best practices, TypeScript's native port"

[extra]
icon = "🍇"
+++
```

- `title` is a comma-separated list of roughly 3 short phrases or topics covered in the post, lowercase except for proper nouns, no trailing period. It reads like a subtitle, not a sentence.
- `icon` is a single emoji (may be a multi-codepoint sequence like `🧘‍♀️` or `🍄‍🟫`) loosely themed to the season or the post's vibe. Not required to relate to the content directly.
- **If `title` is empty**: pick the 3 most important keywords or very short phrases from the post's actual content — the same way existing titles read — and fill it in. Don't write a generic label like "Monthly notes."
- While drafting, the file may carry `draft = true` in the front matter; that's expected and gets removed when the post is published (not something the skill needs to manage unless asked).

## Bullets

- Top-level content is a flat bulleted list (`- `). Each bullet is separated from the next by a **blank line** — never stack bullets back to back with no gap.
- Bullet length varies a lot: some are a single short clause, others run several sentences with added context or opinion. Match the weight of the source material — don't pad a throwaway link into a paragraph, and don't compress a genuinely interesting find into one clause.
- A bullet that reads as an actual sentence ends in a period. A bullet that's just a bare link or headline with nothing wrapped around it does not need a period forced onto it:

```markdown
- [You can't design software you don't work on](https://www.seangoedecke.com/you-cant-design-software-you-dont-work-on/)

- [Opus 4.5 Changed Everything](https://changelog.com/podcast/678)
```

- Occasionally a personal update opens the post as its own bullet, separated from the rest of the list by a horizontal rule (`---` on its own line, blank lines around it). This is rare — only for something substantial like a site migration announcement — not a pattern to force into every post.
- Rhetorical questions are a fine way to open a bullet when introducing a broader topic ("Is React the last JavaScript framework? How do you design frameworks for code that might not be written by humans?").
- A light aside in parentheses, or an occasional strikethrough correction (`Safari ~~19~~ 26`), is consistent with the tone — dry, a little playful, never forced.

## Links

- Trailing punctuation that follows a link in the sentence — `.` `,` `:` `;` — goes **inside** the link brackets, so the punctuation is part of the clickable text:

```markdown
- [Vite+,](https://voidzero.dev/posts/announcing-vite-plus-alpha) the _"unified toolchain for the web"_, has been released in alpha
- [How to favicon in 2026:](https://evilmartians.com/chronicles/how-to-favicon-in-2021-six-files-that-fit-most-needs) A practical guide on...
```

Wrong: `[Vite+](url), the...` or `[Kill the newsletter](url), a free service...`

- Internal cross-references to another month's post use Zola's internal-link syntax: `[last month's](@/notes/2026-04.md#notable-releases)`.
- Inline code (package names, flags, APIs, CLI commands) uses backticks: `` `tabindex` ``, `` `minimumReleaseAge` ``, `` `git rebase --autostash` ``.

## Quotes

- Short inline quotes (roughly a sentence or less) are wrapped in italics using underscores, with straight double quotes inside:

```markdown
...allowing you to _"catch bugs by utilizing TypeScript's type system."_
```

Not `"catch bugs..."` (upright, no italics) and not `*catch bugs*` (asterisks).

- A quote longer than about a sentence — multiple sentences, or a substantial excerpt — becomes a real Markdown blockquote instead of an inline italic quote:

```markdown
> LLMs inherently lack the virtue of laziness. Work costs nothing to an LLM. [...]
```

Use `[...]` to mark elisions inside a blockquote, same as ordinary quoting conventions.

## Bold

- Bold is used for exactly one thing: the release name/version in a **Notable releases** entry — every entry there is bold, always, e.g. `[**Vite 8,**](url)`.
- Never add bold anywhere else — not for emphasis, not for key terms, not combined with a link outside Notable releases. If the user's own notes already bold something outside Notable releases, leave it as they wrote it, but don't introduce new bold yourself.

## Em dashes

- Written as three literal hyphens `---` directly in the markdown source (no spaces around them), e.g. `Anders Hejlsberg---co-creator of TypeScript, C#, and Turbo Pascal---sits down with...`. Zola's `smart_punctuation` (set in `config.toml`) converts these to a real em dash at build time — never type a literal — or – character yourself.

## Emojis

- Used sparingly, only by the author, to punctuate a specific moment of delight, surprise, or self-deprecation (🎉, 🐳, 😊, 😬) — never decoratively on every bullet, and never as a substitute for a word.
- The skill should not introduce new emojis. Only preserve ones already present in the user's own notes, in their original position.

## "Notable releases" section

- Appears at most once per post, near the end, introduced by a level-3 heading ending in a colon:

```markdown
### Notable releases:
```

- Entries follow the same bullet/blank-line/link-punctuation rules as the rest of the post. The shape is always `[**Name X.Y,**](link) <description starting with a lowercase gerund>.` — the release name is always bold (see Bold, above):

```markdown
- [**Vite 8,**](https://vite.dev/blog/announcing-vite8) replacing esbuild and Rollup with a faster, unified bundler during both development and production; as well as integrated devtools and built-in support for tsconfig `paths`.
```

- Entries are ordered alphabetically by product/tool name.

## Tone

- First person, informed-peer register: casual but technically precise, written for engineers who already know the domain — no need to over-explain fundamentals.
- Personal opinions and light editorializing are welcome and expected ("Developments in both don't exactly inspire confidence; I recommend sticking with Node."), but should read as considered, not snarky.
- Not overly formal: contractions are fine ("it's", "don't", "here's"), sentence fragments are fine for punchy openers, but avoid slang that would date badly.
- When resolving a TODO link during drafting, aim for the same register: a factual, opinionated-where-warranted summary of why the link is worth the reader's time, not a neutral abstract.
