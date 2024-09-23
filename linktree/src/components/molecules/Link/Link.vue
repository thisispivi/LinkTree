<script setup lang="ts">
import { defineProps } from "vue";
import { Link } from "../../../data/links";

const { link } = defineProps({
  link: { type: Object as () => Link, required: true },
});

const openLink = () => {
  window.open(link.url, "_blank");
};
</script>

<template>
  <div class="link" v-on:click="openLink">
    <img :src="link.imageUrl" alt="image" class="image" />
    <div class="footer">
      <h3>{{ $t(`links.${link.key}.title`) }}</h3>
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
  background-color: v.$backgroundLight;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
  @include m.transition(all, 0.2s);
  &:hover {
    cursor: pointer;
    background-color: v.$backgroundLightHover;
    scale: 1.04;
  }
  .image {
    width: 100%;
    height: 100%;
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
