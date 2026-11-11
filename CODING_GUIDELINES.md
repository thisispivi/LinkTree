# Coding Guidelines

The canonical standard for every change, by a person or an agent. `AGENTS.md`
holds the workflow and the quality gate; this file holds how the code is
written. Existing deviations are not precedent.

## Principles

- Prefer the least code that fully solves the task: platform features first,
  then an installed dependency, then new code. No speculative options.
- Comments explain why, never what.
- Every visible string goes through i18n, in English and Italian together.
- Accessible by default: semantic elements, labels on icon-only controls,
  visible focus, `rel="noopener noreferrer"` on external links, and motion
  that respects `prefers-reduced-motion`.

## Components

- Vue 3 single-file components with `<script setup lang="ts">`, one component
  per folder named in `PascalCase`, exported through the layer's `index.ts`.
- Atoms hold no data; molecules combine atoms; organisms own a page section;
  templates lay out a page; pages only compose.
- Props and emits are typed with `defineProps<...>()` and `defineEmits<...>()`.

## TypeScript

- Strict mode. No `any`; type data in `src/data/` with the shared types.
- Imports are sorted (`simple-import-sort`); ESLint and Prettier format code.

## Styles

- Scoped SCSS with BEM class names. Colors, spacing, and gradients come from
  `src/styles/variables.scss`; never hard-code a color.
- Animations use GSAP and are cleaned up when the component unmounts.

## Tooling

ESLint, Prettier, `vue-tsc`, and Knip enforce most of this. Knip must report
nothing.
