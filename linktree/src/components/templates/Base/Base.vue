<script setup lang="ts">
import { Links as LinkType } from "../../../data/links";
import { Links, Header } from "../../organisms";
import { defineProps, ref, onMounted, watch } from "vue";

defineProps({
  links: { type: Array as () => LinkType, required: true },
});

const containerRef = ref<HTMLElement | null>(null);
const MIN_HEADER_HEIGHT = 6;
const MAX_HEADER_HEIGHT = 22;
const headerHeight = ref(`${MAX_HEADER_HEIGHT}rem`);
const headerClass = ref("header");

function onScroll() {
  if (!containerRef.value) return;
  const container = containerRef.value;
  const isScrollable =
    container.scrollHeight > container.clientHeight &&
    container.scrollHeight - container.clientHeight > 6 * 16;
  if (isScrollable) {
    const scrollTop = container.scrollTop;
    headerHeight.value =
      scrollTop > 20 ? `${MIN_HEADER_HEIGHT}rem` : `${MAX_HEADER_HEIGHT}rem`;
    headerClass.value = scrollTop > 20 ? "header header--scrolled" : "header";
  }
}

onMounted(() => {
  if (containerRef.value) {
    containerRef.value.addEventListener("scroll", onScroll);
  }
});

watch(containerRef, (newValue, oldValue) => {
  if (oldValue) {
    oldValue.removeEventListener("scroll", onScroll);
  }
  if (newValue) {
    newValue.addEventListener("scroll", onScroll);
  }
});
</script>

<template>
  <div class="base">
    <Header :style="{ height: headerHeight }" :class="headerClass" />
    <div
      ref="containerRef"
      class="container"
      :style="{ marginTop: headerHeight }"
    >
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
    @include m.transition;
  }
}
</style>
