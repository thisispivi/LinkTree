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

A personal portfolio and link aggregator built with Vue 3, TypeScript, and GSAP. Features a dark-themed UI with gradient accents, 3D card interactions, scroll-triggered animations, and i18n support (English/Italian).

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![pnpm](https://img.shields.io/badge/pnpm-%23CB3837.svg?style=for-the-badge&logo=pnpm&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Tech Stack

- **Framework**: Vue 3 (Composition API + `<script setup>`)
- **Language**: TypeScript
- **Styling**: SCSS with design tokens (variables/mixins)
- **Animations**: GSAP + ScrollTrigger
- **Fonts**: Plus Jakarta Sans (body), Playfair Display (headings)
- **i18n**: vue-i18n (EN/IT)
- **Build**: Vite
- **Package Manager**: pnpm

## Project Structure

```text
.
├── logos/              # Brand assets
└── linktree/           # Vue 3 app
    └── src/
        ├── assets/     # SVG icons and flag images
        ├── components/ # Atomic design (atoms → molecules → organisms → templates → pages)
        ├── data/       # Project data definitions
        ├── i18n/       # Locale files (en, it)
        ├── router/     # Vue Router config
        └── styles/     # SCSS variables, mixins, global styles
```

## Getting Started

```bash
git clone https://github.com/thisispivi/LinkTree.git
cd linktree
pnpm i
pnpm dev
```

## Deployment

```bash
cd linktree
pnpm run deploygh
```
