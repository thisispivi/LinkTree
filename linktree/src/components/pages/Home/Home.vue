<script setup lang="ts">
import { projects } from "../../../data/projects";
import { Base } from "../../templates";
</script>

<template>
  <div class="home">
    <div class="background-gradient-1" />
    <div class="background-gradient-2" />
    <Base :projects="projects" />
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

  $ball-size: 20rem;
  .background-gradient-1 {
    position: absolute;
    width: 60%;
    height: $ball-size;
    background: v.$orange;
    border-radius: 0 6rem 8rem 0;
    z-index: -1;
    opacity: 0.7;
    filter: blur(10rem);
  }
  .background-gradient-2 {
    position: absolute;
    margin-left: 20%;
    width: 80%;
    height: 25rem;
    background: v.$pink;
    border-radius: 6rem 0 0 8rem;
    z-index: -2;
    filter: blur(12rem);
    transform: translateX(35%);
  }
}

@mixin blur-filters($min-width, $max-width, $blur1, $blur2) {
  @media screen and (min-width: $min-width) and (max-width: $max-width) {
    .home {
      .background-gradient-1 {
        filter: blur($blur1);
      }
      .background-gradient-2 {
        filter: blur($blur2);
      }
    }
  }
}

@include blur-filters(700px, 1024px, 9rem, 10rem);
@include blur-filters(500px, 699px, 7rem, 9rem);
@include blur-filters(0px, 499px, 6rem, 7rem);
</style>
