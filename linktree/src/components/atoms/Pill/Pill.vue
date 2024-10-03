<template>
  <div class="pill" :style="{ backgroundColor: color }">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { color } = defineProps({
  color: { type: String, default: "primary" },
});
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.pill {
  width: auto;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  font-size: 0.75rem;
  color: #121212;
  transition: background-color 0.3s;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
