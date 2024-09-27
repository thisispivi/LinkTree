<script setup lang="ts">
import { Links as LinkType } from "../../../data/links";
import { Links, Header } from "../../organisms";
import { defineProps, ref, onMounted, watch } from "vue";

defineProps({
  links: { type: Array as () => LinkType, required: true },
});

const containerRef = ref<HTMLElement | null>(null);
const headerHeight = ref("12rem");

function onScroll() {
  if (!containerRef.value) return;

  const scrollTop = containerRef.value.scrollTop;
  headerHeight.value = scrollTop > 80 ? "5rem" : "12rem";
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
    <Header :style="{ height: headerHeight }" />
    <div
      class="container"
      ref="containerRef"
      :style="{ marginTop: headerHeight }"
    >
      <Links :links="links" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
.base {
  display: flex;
  height: 100%;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
}
</style>
