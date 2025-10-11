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
  position: relative;
  overflow: hidden;
  border: 0.0625rem solid rgba(255, 255, 255, 0.2);
  background: linear-gradient(
    135deg,
    rgba(60, 60, 60, 0.45),
    rgba(10, 10, 20, 0.54)
  );
  box-shadow:
    0 0.625rem 1.875rem rgba(0, 0, 0, 0.22),
    inset 0 0.0625rem 0.0625rem rgba(255, 255, 255, 0.24);
  cursor: pointer;
  margin-bottom: auto;
  max-width: 55rem;
  column-gap: 1rem;
  width: 100%;
  @include m.transition(transform, 0.25s);

  &:hover {
    transform: scale(1.02) !important;
  }

  .media {
    position: relative;
    flex: 0;

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 0.5rem;
      background: radial-gradient(
        6rem 6rem at 50% 50%,
        rgba(v.$pink, 0.14),
        rgba(v.$orange, 0.1) 40%,
        transparent 70%
      );
      filter: blur(1rem);
      z-index: 0;
    }
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
      flex-wrap: wrap;
      gap: 0.5rem;
      width: 100%;
      .title {
        display: flex;
        align-items: center;
        h3 {
          margin: 0;
          font-size: 1.5rem;
          color: v.$lightPurple;
          background: -webkit-linear-gradient(270deg, v.$pink, v.$orange);
          filter: brightness(1.4);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-family: "Raleway", sans-serif;
        }
        .btn--github {
          width: 1.2rem;
          height: 1.2rem;
          margin-left: 0.5rem;
          svg {
            fill: v.$fontColor;
          }
        }
      }
    }

    .description {
      p {
        color: v.$fontColor;
        opacity: 0.9;
        line-height: 1.6;
        font-weight: 300;
      }
    }
  }
}

@media screen and (max-width: 55.625rem) {
  .project {
    flex-direction: column;
    width: min(100%, 25rem);
    .image {
      height: 16rem;
      border-radius: 0.5rem;
      margin-bottom: 0.8rem;
    }
  }
}
</style>
