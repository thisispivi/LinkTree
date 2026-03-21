<template>
  <div
    class="pill"
    :style="{
      backgroundColor: color + '26',
      color: color,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
const { color } = defineProps({
  color: { type: String, default: "#eb3678" },
});
</script>

<style lang="scss">
@use "../../../styles/variables.scss" as v;

.pill {
  width: auto;
  padding: 0.2rem 0.75rem;
  border-radius: 1rem;
  transition: background-color 0.3s;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    text-transform: uppercase;
    font-family: v.$font-family;
    font-size: 0.65rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    color: inherit;
  }
}
</style>
