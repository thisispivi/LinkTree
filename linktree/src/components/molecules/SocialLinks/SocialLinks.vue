<script setup lang="ts">
import {
  ButtonGithub,
  ButtonInstagram,
  ButtonLinkedIn,
  ButtonResume,
  ButtonX,
  ButtonYoutube,
} from "../../atoms";
</script>

<template>
  <div class="social-links">
    <ButtonResume />
    <ButtonGithub />
    <ButtonInstagram />
    <ButtonLinkedIn />
    <ButtonX />
    <ButtonYoutube />
  </div>
</template>

<style scoped lang="scss">
.social-links {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
