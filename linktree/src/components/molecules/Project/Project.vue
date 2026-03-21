<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from "vue";

import { Project } from "../../../data/projects";
import { Pill } from "../../atoms";
import ButtonGithub from "../../atoms/Button/ButtonGithub.vue";

const { project } = defineProps({
  project: { type: Object as () => Project, required: true },
});

const cardRef = ref<HTMLElement | null>(null);
const glareRef = ref<HTMLElement | null>(null);
const descRef = ref<HTMLElement | null>(null);
const expanded = ref(false);
const isOverflow = ref(false);
let bounds: DOMRect | null = null;
let rafId = 0;
let ro: ResizeObserver | null = null;

function checkOverflow() {
  if (!descRef.value) return;
  isOverflow.value = descRef.value.scrollHeight > descRef.value.clientHeight;
}

onMounted(() => {
  checkOverflow();
  ro = new ResizeObserver(checkOverflow);
  if (descRef.value) ro.observe(descRef.value);
});

function onMouseEnter() {
  if (!cardRef.value) return;
  bounds = cardRef.value.getBoundingClientRect();
}

function onMouseMove(e: MouseEvent) {
  if (!bounds || !cardRef.value) return;
  cancelAnimationFrame(rafId);
  rafId = requestAnimationFrame(() => {
    if (!bounds || !cardRef.value) return;
    const x = e.clientX - bounds.left;
    const y = e.clientY - bounds.top;
    const midX = bounds.width / 2;
    const midY = bounds.height / 2;
    cardRef.value.style.transform = `perspective(50rem) rotateX(${((midY - y) / midY) * 3}deg) rotateY(${((x - midX) / midX) * 3}deg) scale3d(1.01, 1.01, 1.01)`;
    if (glareRef.value) {
      glareRef.value.style.background = `radial-gradient(circle at ${(x / bounds.width) * 100}% ${(y / bounds.height) * 100}%, rgba(255,255,255,0.06) 0%, transparent 60%)`;
      glareRef.value.style.opacity = "1";
    }
  });
}

function onMouseLeave() {
  cancelAnimationFrame(rafId);
  bounds = null;
  if (cardRef.value)
    cardRef.value.style.transform =
      "perspective(50rem) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
  if (glareRef.value) glareRef.value.style.opacity = "0";
}

function toggleExpand(e: Event) {
  e.stopPropagation();
  expanded.value = !expanded.value;
  // re-check after expansion collapses back
  if (!expanded.value) setTimeout(checkOverflow, 420);
}

const openProject = () => window.open(project.url, "_blank");

onBeforeUnmount(() => {
  cancelAnimationFrame(rafId);
  ro?.disconnect();
});
</script>

<template>
  <article
    ref="cardRef"
    class="project"
    :style="{ '--pill-color': project.pillColor }"
    @mouseenter="onMouseEnter"
    @mousemove="onMouseMove"
    @mouseleave="onMouseLeave"
    @click="openProject"
  >
    <div ref="glareRef" class="project__glare"></div>
    <div class="project__preview">
      <img :src="project.imageUrl" alt="image" class="project__image" />
      <div class="project__overlay">
        <span class="project__open">{{ $t("viewProject") }} &rarr;</span>
      </div>
    </div>
    <div class="project__info">
      <div class="project__head">
        <Pill :color="project.pillColor">
          <p>{{ $t(`categories.${project.pillKey}`) }}</p>
        </Pill>
        <ButtonGithub
          v-if="project.githubUrl"
          :github-url="project.githubUrl"
          class="project__github"
        />
      </div>
      <h3 class="project__title">
        {{ $t(`projects.${project.key}.title`) }}
      </h3>
      <p
        ref="descRef"
        class="project__desc"
        :class="{ 'project__desc--expanded': expanded }"
      >
        {{ $t(`projects.${project.key}.description`) }}
      </p>
      <button
        v-if="isOverflow || expanded"
        class="project__toggle"
        @click="toggleExpand"
      >
        {{ expanded ? $t("less") : $t("more") }}
      </button>
    </div>
  </article>
</template>

<style lang="scss">
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.project {
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  background: v.$surface-1;
  cursor: pointer;
  border: 0.0625rem solid rgba(255, 255, 255, 0.04);
  transform-style: preserve-3d;
  transition:
    transform 0.25s ease-out,
    background 0.35s ease,
    border-color 0.35s ease,
    box-shadow 0.35s ease;

  &:hover {
    background: v.$surface-2;
    border-color: rgba(255, 255, 255, 0.1);
    box-shadow:
      0 1rem 3rem rgba(0, 0, 0, 0.35),
      0 0 1.5rem rgba(v.$pink, 0.06);

    .project__overlay {
      opacity: 1;
    }

    .project__title {
      color: var(--pill-color);
      -webkit-text-fill-color: var(--pill-color);
    }
  }

  .project__glare {
    position: absolute;
    inset: 0;
    z-index: 5;
    border-radius: inherit;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.3s ease;
    mix-blend-mode: overlay;
  }

  .project__preview {
    position: relative;
    overflow: hidden;
    margin: 0.6rem 0.6rem 0;
    border-radius: 0.6rem;
    background: #131313;
  }

  .project__image {
    width: 100%;
    aspect-ratio: 16 / 9;
    object-fit: cover;
    display: block;
    border-radius: 0.6rem;
  }

  .project__overlay {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 0.6rem;
    opacity: 0;
    transition: opacity 0.35s ease;

    .project__open {
      font-size: 0.8rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: v.$on-surface;
      padding: 0.5rem 1.25rem;
      border-radius: 9999px;
      border: 0.0625rem solid rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(0.5rem);
      background: rgba(255, 255, 255, 0.08);
    }
  }

  .project__info {
    padding: 1rem 1.25rem 1.25rem;

    .project__head {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.6rem;

      .project__github {
        width: 1.5rem;
        height: 1.5rem;
        background: transparent;
        box-shadow: none;

        svg {
          width: 1rem;
          height: 1rem;
        }
        &:hover {
          background: transparent;
          box-shadow: none;
        }
      }
    }

    .project__title {
      font-size: 1.15rem;
      font-weight: 700;
      color: v.$on-surface;
      -webkit-text-fill-color: v.$on-surface;
      margin-bottom: 0.35rem;
      transition:
        color 0.3s ease,
        -webkit-text-fill-color 0.3s ease;
    }

    .project__desc {
      font-size: 0.85rem;
      font-weight: 400;
      color: v.$on-surface-variant;
      line-height: 1.55;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      transition: all 0.4s ease;

      &--expanded {
        -webkit-line-clamp: unset;
        overflow: visible;
      }
    }

    .project__toggle {
      display: inline-flex;
      align-items: center;
      margin-top: 0.5rem;
      padding: 0;
      background: none;
      border: none;
      cursor: pointer;
      font-size: 0.78rem;
      font-weight: 600;
      letter-spacing: 0.04em;
      @include m.text-gradient;
      opacity: 0.8;
      transition: opacity 0.2s ease;

      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
