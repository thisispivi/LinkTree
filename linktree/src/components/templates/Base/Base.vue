<script setup lang="ts">
import { Links as LinkType } from "../../../data/links";
import { Links } from "../../organisms";
import { defineProps } from "vue";
defineProps({
  links: { type: Array as () => LinkType, required: true },
});
</script>

<template>
  <div class="base">
    <div class="container">
      <Links :links="links" />
    </div>
  </div>
</template>

<style scoped>
.base {
  display: flex;
  width: 100%;
  height: 100%;
}
.container {
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
