<script setup lang="ts">
import { Projects } from "../../../data/projects";
import { Project } from "../../molecules";

defineProps({
  projects: { type: Array as () => Projects, required: true },
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
