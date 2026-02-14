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

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  const elements = gsap.utils.toArray<HTMLElement>(".project-item");
  if (elements.length === 0) {
    console.warn("No .project-item elements found.");
    return;
  }

  elements.forEach((el, i) => {
    gsap.fromTo(
      el,
      { y: 60, scale: 0.92, opacity: 0 },
      {
        y: 0,
        scale: 1,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.08,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 95%",
          end: "top 70%",
          scrub: 0.6,
          scroller: ".home",
          fastScrollEnd: true,
          invalidateOnRefresh: true,
        },
      }
    );
  });
});
</script>

<template>
  <div class="projects">
    <div class="container">
      <div class="projects__list">
        <Project
          v-for="project in projects"
          :key="project.key"
          :project="project"
          class="project-item"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-block: 1.5rem;
  width: 100%;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;

    .projects__list {
      display: flex;
      flex-direction: column;
      gap: 1.5rem;
      justify-content: center;
      width: 90%;
      padding-bottom: 3rem;

      :deep(.project-item) {
        will-change: transform, opacity;
        backface-visibility: hidden;
        transform: translateZ(0);
      }
    }
  }
}
</style>
