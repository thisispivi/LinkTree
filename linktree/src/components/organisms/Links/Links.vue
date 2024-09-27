<script setup lang="ts">
import { defineProps } from "vue";
import { Links } from "../../../data/links";
import { Link } from "../../molecules";

defineProps({
  links: { type: Array as () => Links, required: true },
});
</script>

<template>
  <div class="links">
    <div class="container">
      <div class="links__list">
        <Link v-for="link in links" :link="link" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1rem;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    .links__list {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
      justify-content: center;
    }
  }
}
</style>
