<script setup lang="ts">
import gsap from "gsap";
import { nextTick, onMounted } from "vue";

import { Projects as ProjectType } from "../../../data/projects";
import { SelectLanguage } from "../../molecules";
import { Header } from "../../organisms";
import { Projects } from "../../organisms";

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

    <footer class="site-footer">
      <div class="site-footer__line"></div>
      <p class="site-footer__text">
        &copy; {{ new Date().getFullYear() }} Andrea Piras
      </p>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.lang-selector {
  position: fixed;
  top: 1.25rem;
  right: 1.25rem;
  z-index: 100;
  opacity: 0;
}

.site-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 2rem 4rem;
  gap: 1.5rem;

  .site-footer__line {
    width: 3rem;
    height: 0.125rem;
    background: v.$gradient-pink-orange;
    border-radius: 0.0625rem;
    opacity: 0.4;
  }

  .site-footer__text {
    font-size: 0.75rem;
    font-weight: 500;
    color: v.$on-surface-muted;
    letter-spacing: 0.08em;
  }
}
</style>
