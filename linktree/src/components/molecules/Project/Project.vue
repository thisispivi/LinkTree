<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { Project } from "../../../data/projects";
import { Pill } from "../../atoms";
import ButtonGithub from "../../atoms/Button/ButtonGithub.vue";

const { project } = defineProps({
  project: { type: Object as () => Project, required: true },
});

const openProject = () => {
  window.open(project.url, "_blank");
};

const getNumTechsPerRow = (width: number) => {
  if (width > 984) return 15;
  if (width > 948) return 14;
  if (width > 909) return 13;
  return 12;
};

const numTechsPerRow = ref(getNumTechsPerRow(window.innerWidth));

const isTechsOverflowing = ref(
  (project.tags || []).length > numTechsPerRow.value
);

const updateLayout = () => {
  numTechsPerRow.value = getNumTechsPerRow(window.innerWidth);
  isTechsOverflowing.value = (project.tags || []).length > numTechsPerRow.value;
};

onMounted(() => {
  window.addEventListener("resize", updateLayout);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateLayout);
});
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
  width: 100%;
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
      margin-bottom: 1.5rem;
      p {
        font-weight: 300;
        opacity: 0.8;
      }
    }

    .techs {
      margin-top: auto;
      display: flex;
      gap: 0.45rem;
      flex-wrap: wrap;
      svg {
        flex-shrink: 0;
        width: 1.5rem;
        height: 1.5rem;
      }
      button {
        background: none;
        border: none;
        color: v.$lightPurple;
        width: 3rem;
        cursor: pointer;
        font-size: 1rem;
        padding: 0;
        font-style: italic;
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}

@media screen and (max-width: 890px) {
  .project {
    flex-direction: column;
    width: min(100%, 25rem);
    .image {
      height: 16rem;
      border-radius: 0.5rem 0.5rem 0 0;
      margin-bottom: 0.8rem;
    }
  }
}
</style>
