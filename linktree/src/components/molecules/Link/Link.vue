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
      <h3>{{ link.titleKey }}</h3>
      <p>{{ link.descriptionKey }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
.link {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  $borderRadius: 1rem;
  border-radius: $borderRadius;
  background-color: v.$backgroundLight;
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
      font-size: 1.5rem;
    }
    p {
      margin: 0;
      font-size: 1rem;
    }
  }
}
</style>
