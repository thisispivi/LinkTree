<script setup lang="ts">
import { Projects } from "../../../data/projects";
import { Project } from "../../molecules";
import { onMounted, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

defineProps({
  projects: { type: Array as () => Projects, required: true },
});

gsap.registerPlugin(ScrollTrigger);

onMounted(async () => {
  await nextTick();

  const elements = gsap.utils.toArray<HTMLElement>(".project-item");
  if (elements.length === 0) {
    console.warn("No .project-item elements found.");
    return;
  }

  elements.forEach((el) => {
    gsap.fromTo(
      el,
      { scale: 0.8, opacity: 0.5 },
      {
        scale: 1,
        opacity: 1,
        ease: "power2.out",
        markers: true,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          end: "top 85%",
          scrub: true,
          scroller: ".home",
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
    }
  }
}
</style>
