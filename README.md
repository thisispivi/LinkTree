<div align="center">
   <div style="display: flex; padding-block: 40px; margin-bottom: 20px; background-color: #1f1f1f">
      <picture>
         <source media="(prefers-color-scheme: dark)" srcset="./logos/Logo.png">
         <source media="(prefers-color-scheme: light)" srcset="./logos/Logo.png">
         <img alt="logo" src="./logos/Logo.png" height="75">
      </picture>
   </div>
</div>

# [LinkTree](https://linktree.pivi.dev/)

A personal portfolio and link page built with Vue 3, TypeScript, and GSAP. It
has a dark theme with gradient accents, project cards that tilt in 3D under the
pointer, scroll-triggered animations, and English and Italian translations.

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-%23CB3837.svg?style=for-the-badge&logo=pnpm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![GSAP](https://img.shields.io/badge/gsap-0AE448.svg?style=for-the-badge&logo=greensock&logoColor=black) ![Prettier](https://img.shields.io/badge/prettier-F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black) ![GitHub Pages](https://img.shields.io/badge/github_pages-222222.svg?style=for-the-badge&logo=github&logoColor=white)

## Tech Stack

- **Framework**: Vue 3 (Composition API + `<script setup>`)
- **Language**: TypeScript
- **Styling**: SCSS with design tokens (variables/mixins)
- **Animations**: GSAP + ScrollTrigger
- **Fonts**: Plus Jakarta Sans (body), Playfair Display (headings)
- **i18n**: vue-i18n (EN/IT)
- **Build**: Vite
- **Package Manager**: pnpm

## Features

### Profile

- A profile photo, name, and job title at the top of the page.
- A Contact Me button that opens an email to the owner.

### Social links

- Buttons for the resume, GitHub, Instagram, LinkedIn, X, and YouTube.
- The resume button opens the PDF from `resume/` in the current language.

### Project showcase

- A "Selected Work" section with one card per project defined in
  `linktree/src/data/projects.ts`.
- Each card has an image, a title, a description that expands with More and
  collapses with Less, category pills (Work, Projects, AI Generated), and a
  GitHub button when the project has a repository link.
- Clicking a card opens the project. Cards fade in on scroll and tilt toward
  the pointer.

### Language switch

- A flag dropdown in the top-right corner switches between English and Italian.
- The chosen language is saved in `localStorage` and restored on the next visit.

### Footer

- The copyright year and the owner's name.
- The app version, linked to its GitHub release, and a link to the repository.

## Getting Started

Requires Node.js and [pnpm](https://pnpm.io/installation).

```bash
git clone https://github.com/thisispivi/LinkTree.git
cd LinkTree/linktree
pnpm install
pnpm dev
```

## Development checks

Run the project checks from the `linktree` directory:

```bash
pnpm lint
pnpm knip
pnpm build
```

To update dependencies, run `pnpm update:packages`, review the changes, and then
run `pnpm install`. npm-check-updates is configured to leave TypeScript on its
current version.

## Deployment

When a new version reaches `main`, the Release workflow builds `linktree/` and
deploys it to GitHub Pages at <https://linktree.pivi.dev/>. There is no manual
deploy step.

## Versioning and releases

Releases are automatic and follow [Semantic Versioning](https://semver.org/).
Every pull request that changes code bumps the version in
`linktree/package.json`, as
[AGENTS.md](./AGENTS.md#versioning-and-releases) describes. When CI passes on
`main`, the Release workflow tags the new version, publishes the
[GitHub release](https://github.com/thisispivi/LinkTree/releases), and deploys
the site to GitHub Pages. Dependabot alerts and security updates are on; the
`fix-vulnerabilities` skill triages them.

## Documentation

| Document                                    | Covers                                               |
| ------------------------------------------- | ---------------------------------------------------- |
| [AGENTS.md](./AGENTS.md)                    | Workflow, quality gate, versioning, and commit rules |
| [Coding guidelines](./CODING_GUIDELINES.md) | How components, TypeScript, and styles are written   |

## Project Structure

```text
.
├── logos/              # Brand assets
├── resume/             # Resume PDFs (EN, IT) linked from the page
└── linktree/           # Vue 3 app
    └── src/
        ├── assets/     # SVG icons and flag images
        ├── components/ # Atomic design (atoms → molecules → organisms → templates → pages)
        ├── data/       # Project data definitions
        ├── i18n/       # Locale files (en, it)
        ├── router/     # Vue Router config
        └── styles/     # SCSS variables, mixins, global styles
```

## License

[MIT](./LICENSE)
