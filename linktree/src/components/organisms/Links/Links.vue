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
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  .container {
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    .links__list {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
      gap: 1rem;
    }
  }
}
</style>
