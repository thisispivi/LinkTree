<script setup lang="ts">
import { Project } from "../../../data/projects";
import { Pill } from "../../atoms";
import ButtonGithub from "../../atoms/Button/ButtonGithub.vue";

const { project } = defineProps({
  project: { type: Object as () => Project, required: true },
});

const openProject = () => {
  window.open(project.url, "_blank");
};
</script>

<template>
  <div class="project" @click="openProject">
    <img :src="project.imageUrl" alt="image" class="image" />
    <div class="metadata">
      <div class="title__area">
        <div class="title">
          <h3>{{ $t(`projects.${project.key}.title`) }}</h3>
          <ButtonGithub
            v-if="project.githubUrl"
            :github-url="project.githubUrl"
          />
        </div>
        <Pill :color="project.pillColor">
          <p>{{ $t(`categories.${project.pillKey}`) }}</p>
        </Pill>
      </div>
      <div class="description">
        <p>
          {{ $t(`projects.${project.key}.description`) }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.project {
  margin: auto;
  display: flex;
  padding: 1rem;
  $borderRadius: 1rem;
  border-radius: $borderRadius;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(2rem);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  margin-bottom: auto;
  max-width: 55rem;
  column-gap: 1rem;
  @include m.transition(all, 0.4s);

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.17);
  }

  .image {
    aspect-ratio: 1920 / 1080;
    flex: 0;
    height: 13rem;
    border-radius: 0.5rem;
  }

  .metadata {
    display: flex;
    flex-direction: column;

    .title__area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.75rem;
      .title {
        display: flex;
        align-items: center;
        h3 {
          margin: 0;
          font-size: 1.5rem;
          color: v.$color600;
          font-family: "Raleway", sans-serif;
        }
        .btn--github {
          width: 1.2rem;
          height: 1.2rem;
          margin-left: 0.5rem;
          svg {
            fill: v.$color600;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .project {
    flex-direction: column;
    width: 24rem;
    .image {
      height: 16rem;
      border-radius: 0.5rem 0.5rem 0 0;
      margin-bottom: 0.8rem;
    }
  }
}
</style>
