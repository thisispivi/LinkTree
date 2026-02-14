<script setup lang="ts">
import { projects } from "../../../data/projects";
import { BubbleBackground } from "../../atoms";
import { Base } from "../../templates";
</script>

<template>
  <div class="home">
    <BubbleBackground />

    <div class="content">
      <Base :projects="projects" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;

.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  background: v.$backgroundGradient;
  color: v.$fontColor;
  isolation: isolate;

  .content {
    position: relative;
    z-index: 1;
  }
}
</style>
