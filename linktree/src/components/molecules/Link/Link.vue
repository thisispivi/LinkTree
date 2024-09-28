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
      <p>
        <span v-if="!isExpanded">
          {{ $t(`links.${link.key}.description`).slice(0, 100) }}...
          <button
            v-if="shouldShowReadMore"
            class="read-more"
            @click.stop="toggleExpand"
          >
            {{ isExpanded ? "Read less" : "Read more" }}
          </button>
        </span>
        <span v-else>
          {{ $t(`links.${link.key}.description`) }}
          <button class="read-more" @click.stop="toggleExpand">
            Read less
          </button>
        </span>
      </p>
      <p>{{ $t(`links.${link.key}.description`) }}</p>
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
  background-color: v.$backgroundDarkCard;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  max-width: 25rem;
  @include m.transition(all, 0.2s);
  &:hover {
    cursor: pointer;
    background-color: v.$backgroundDarkCardHover;
    scale: 1.04;
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
    p {
      margin: 0;
      font-size: 0.9rem;
      color: white;
      opacity: 0.8;
    }
  }
}
</style>
