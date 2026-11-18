<script setup lang="ts">
const VERSION = __APP_VERSION__;
const REPOSITORY = "https://github.com/thisispivi/LinkTree";
</script>

<template>
  <footer class="site-footer">
    <div class="site-footer__line"></div>
    <p class="site-footer__text">
      &copy; {{ new Date().getFullYear() }} Andrea Piras ·
      <a
        :href="`${REPOSITORY}/releases/tag/v${VERSION}`"
        target="_blank"
        rel="noopener"
        >v{{ VERSION }}</a
      >
      ·
      <a :href="REPOSITORY" target="_blank" rel="noopener">GitHub</a>
    </p>
  </footer>
</template>

<style scoped lang="scss">
@use "../../../styles/variables.scss" as v;

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

    a {
      color: inherit;
      text-decoration: underline;
      text-underline-offset: 0.2em;
    }
  }
}
</style>
