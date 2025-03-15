<script setup lang="ts">
import { computed, ref } from "vue";
import { Link } from "../../../data/links";
import { useI18n } from "vue-i18n";
import { Pill } from "../../atoms";
import ButtonGithub from "../../atoms/Button/ButtonGithub.vue";

const { link } = defineProps({
  link: { type: Object as () => Link, required: true },
});

const openLink = () => {
  window.open(link.url, "_blank");
};

const isExpanded = ref(false);
const toggleExpand = () => {
  isExpanded.value = !isExpanded.value;
};

const i18n = useI18n();
const shouldShowReadMore = computed(
  () => i18n.t(`links.${link.key}.description`).length > 100
);
</script>

<template>
  <div class="link" @click="openLink">
    <img :src="link.imageUrl" alt="image" class="image" />
    <div class="footer">
      <div class="title__area">
        <div class="title">
          <h3>{{ $t(`links.${link.key}.title`) }}</h3>
          <ButtonGithub v-if="link.githubUrl" :github-url="link.githubUrl" />
        </div>
        <Pill :color="link.pillColor"
          ><p>{{ $t(`categories.${link.pillKey}`) }}</p></Pill
        >
      </div>
      <div class="description" :class="{ expanded: isExpanded }">
        <p>
          {{ $t(`links.${link.key}.description`) }}
        </p>
        <button
          v-if="shouldShowReadMore"
          class="read-more"
          @click.stop="toggleExpand"
        >
          {{ isExpanded ? $t("readLess") : $t("readMore") }}
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.link {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  $borderRadius: 1rem;
  border-radius: $borderRadius;
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(0.063rem);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  margin-bottom: auto;
  @include m.transition(all, 0.4s);

  &:hover {
    cursor: pointer;
    background-color: rgba(255, 255, 255, 0.17);
  }

  .image {
    aspect-ratio: 1920 / 1080;
    flex: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    .title__area {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 0.5rem;
      .title {
        display: flex;
        align-items: center;
        h3 {
          margin: 0;
          font-size: 1.3rem;
          color: v.$color600;
        }
        .btn--github {
          width: 1.2rem;
          height: 1.2rem;
          margin-left: 0.5rem;
        }
      }
      .pill {
        opacity: 0.8;
        p {
          margin: 0;
          text-transform: uppercase;
          line-height: 0.75rem;
        }
      }
    }

    .description {
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      height: 4.7rem;
      @include m.transition(height, 0.4s);

      p {
        margin: 0;
        font-size: 0.9rem;
        color: white;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        line-clamp: 2;
        overflow: hidden;
      }

      &.expanded {
        height: auto;
        p {
          -webkit-line-clamp: unset;
          line-clamp: unset;
          overflow: unset;
        }
      }

      .read-more {
        display: inline-block;
        margin-top: 0.5rem;
        color: v.$color500;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.85rem;
        margin-right: auto;
        padding: 0;
        font-style: italic;
        @include m.transition(color, 0.4s);

        &:hover {
          color: v.$color500;
        }
      }
    }
  }
}
</style>
