<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { nextTick, onMounted } from "vue";

import { Projects } from "../../../data/projects";
import { Project } from "../../molecules";

defineProps({
  projects: { type: Array as () => Projects, required: true },
});

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const label = document.querySelector(".projects__label");
  if (label) {
    gsap.fromTo(
      label,
      { opacity: 0, y: 20 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: { trigger: label, start: "top 88%", scroller: ".home" },
      }
    );
  }

  const cards = gsap.utils.toArray<HTMLElement>(".project-item");
  if (cards.length === 0) return;

  cards.forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 40, scale: 0.97 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: { trigger: card, start: "top 90%", scroller: ".home" },
        delay: (i % 2) * 0.12,
      }
    );
  });
});
</script>

<template>
  <div class="projects">
    <h2 class="projects__label">{{ $t("projects.sectionTitle") }}</h2>
    <div class="projects__grid">
      <Project
        v-for="project in projects"
        :key="project.key"
        :project="project"
        class="project-item"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @include m.section-padding;

  .projects__label {
    color: v.$on-surface-muted;
    font-size: 0.75rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.2em;
    margin-bottom: 2.5rem;
    text-align: center;
  }

  .projects__grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
    width: 100%;
    max-width: 56rem;
    padding-bottom: v.$section-gap;
  }
}

@media (max-width: 640px) {
  .projects .projects__grid {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }
}
</style>
