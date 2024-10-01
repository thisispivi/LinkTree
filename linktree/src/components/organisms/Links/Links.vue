<script setup lang="ts">
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
        <Link v-for="link in links" :key="link.key" :link="link" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.links {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-block: 1.5rem;
  width: inherit;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    .links__list {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      justify-content: center;
      width: 90%;
      .link {
        width: 100%;
        max-width: 25rem;
      }
    }
  }
}
</style>
