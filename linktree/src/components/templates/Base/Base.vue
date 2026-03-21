<script setup lang="ts">
import gsap from "gsap";
import { nextTick, onMounted } from "vue";

import { Projects as ProjectType } from "../../../data/projects";
import { SelectLanguage } from "../../molecules";
import { Footer, Header, Projects } from "../../organisms";

defineProps({
  projects: { type: Array as () => ProjectType, required: true },
});

onMounted(async () => {
  await nextTick();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  gsap.fromTo(
    ".lang-selector",
    { opacity: 0 },
    { opacity: 1, duration: 0.6, delay: 2, ease: "power2.out" }
  );
});
</script>

<template>
  <div class="base">
    <div class="lang-selector">
      <SelectLanguage />
    </div>

    <Header />
    <Projects :projects />

    <Footer />
  </div>
</template>

<style lang="scss" scoped>
.lang-selector {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  opacity: 0;
}
</style>
