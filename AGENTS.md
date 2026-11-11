# Agent instructions

Read [CODING_GUIDELINES.md](./CODING_GUIDELINES.md) completely before editing
code. It is the canonical coding standard for this repository and applies to
every file in the change. Existing deviations are not precedent for new code.

This file holds the workflow rules. `CLAUDE.md` and
`.github/copilot-instructions.md` are thin adapters that point here; do not
copy rules into them.

## Repository layout

- `linktree/` is the Vue 3 app. Run every `pnpm` command there.
- `linktree/src/components/` follows Atomic Design: `atoms`, `molecules`,
  `organisms`, `templates`, `pages`.
- `linktree/src/data/` holds the links and projects shown on the page.
- `logos/` holds brand source files; `resume/` the PDFs linked from the page.

## Required verification

From `linktree/`, every change must pass:

```bash
pnpm lint && pnpm knip && pnpm build && pnpm audit --audit-level=moderate
```

## Versioning and releases

`linktree/package.json` holds the version, and it is what triggers a release. When
CI passes on `main` and that version has no tag yet, the Release workflow tags
it, publishes the GitHub release with generated notes, and deploys the site to GitHub Pages at <https://linktree.pivi.dev/>. Nobody
releases by hand, and nothing is committed back to `main`.

Every change that reaches `main` bumps the version in the same pull request,
following [Semantic Versioning](https://semver.org/):

| Bump  | When                                                                           | Commit type                                  |
| ----- | ------------------------------------------------------------------------------ | -------------------------------------------- |
| major | Breaking: removed or renamed behavior, config, API, or data users must migrate | `feat!:` or a `BREAKING CHANGE:` footer      |
| minor | A new user-visible feature                                                     | `feat:`                                      |
| patch | A fix, performance work, refactor, or dependency update                        | `fix:`, `perf:`, `refactor:`, `chore(deps):` |
| none  | Docs, tests, CI, or agent configuration only                                   | `docs:`, `test:`, `ci:`, `chore:`            |

- Compare against the last tag (`git describe --tags --abbrev=0`) and pick
  the highest bump the change needs. Bump once per pull request.
- The footer shows the version and links to its release and the repository.
- Never create tags, GitHub releases, or changelog entries yourself.
- The pull request title is the release note. The "Version bump" check fails
  when code changes without a bump, unless the title type is `docs`, `test`,
  `ci`, `style`, `build`, or `chore` (but not `chore(deps)`).

## Commits and pull requests

- Use [Conventional Commits](https://www.conventionalcommits.org/). Name
  branches `<type>/<short-description>`.
- The repository owner is the only author. Never add `Co-Authored-By`
  trailers, "Generated with" lines, or any other attribution to commits or pull
  requests.
- Do not bypass git hooks or CI checks.

## Security

Dependabot alerts and security updates are on. To triage and fix them, use the
`fix-vulnerabilities` skill in `.claude/skills/fix-vulnerabilities/`.
