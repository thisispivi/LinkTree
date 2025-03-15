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

<style lang="scss">
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.pill {
  width: auto;
  padding: 0.2rem 1rem;
  border-radius: 1rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-transform: uppercase;
    font-family: "Raleway", sans-serif;
    font-size: 0.75rem;
    font-weight: 800;
    color: v.$background;
  }
}
</style>
