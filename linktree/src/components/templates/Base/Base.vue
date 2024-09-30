<script setup lang="ts">
import { Links as LinkType } from "../../../data/links";
import { Links, Header } from "../../organisms";
import { defineProps, ref } from "vue";

defineProps({
  links: { type: Array as () => LinkType, required: true },
});

const containerRef = ref<HTMLElement | null>(null);
const headerClass = ref("header");
</script>

<template>
  <div class="base">
    <Header :class="headerClass" />
    <div ref="containerRef" class="container">
      <Links :links="links" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.base {
  display: flex;
  height: 100%;
  width: 100%;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
    margin-top: v.$headerHeight;
    @include m.transition;
  }
}
</style>
