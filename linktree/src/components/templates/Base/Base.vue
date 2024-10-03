<script setup lang="ts">
import { Links as LinkType } from "../../../data/links";
import { Links, Header } from "../../organisms";
import { ref } from "vue";

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
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  background: linear-gradient(135deg, #00172d 0%, rgba(77, 52, 131, 1) 100%);
  height: 100%;
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    @include m.transition;
  }
}
</style>
