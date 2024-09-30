<script setup lang="ts">
import { computed, defineProps, ref } from "vue";
import { Link } from "../../../data/links";
import { useI18n } from "vue-i18n";

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
const shouldShowReadMore = computed(() => {
  return i18n.t(`links.${link.key}.description`).length > 100;
});
</script>

<template>
  <div class="link" @click="openLink">
    <img :src="link.imageUrl" alt="image" class="image" />
    <div class="footer">
      <h3>{{ $t(`links.${link.key}.title`) }}</h3>
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
  padding: 1rem;
  $borderRadius: 1rem;
  border-radius: $borderRadius;
  border: 2px solid v.$backgroundDarkCard;
  background-color: v.$backgroundDarkCard;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  margin-bottom: auto;
  @include m.transition(all, 0.4s);

  &:hover {
    cursor: pointer;
    background-color: v.$backgroundDarkCardHover;
    border: 2px solid v.$color500;
  }

  .image {
    aspect-ratio: 1920 / 1080;
    flex: 0;
  }

  .footer {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;

    h3 {
      margin: 0;
      margin-bottom: 0.5rem;
      font-size: 1.3rem;
      color: v.$color500;
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
        color: v.$color400;
        background: none;
        border: none;
        cursor: pointer;
        font-size: 0.85rem;
        margin-right: auto;
        padding: 0;
        font-style: italic;
        @include m.transition(color, 0.4s);

        &:hover {
          color: v.$color200;
        }
      }
    }
  }
}
</style>
