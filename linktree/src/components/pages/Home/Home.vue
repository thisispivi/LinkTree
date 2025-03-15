<script setup>
import { Base } from "../../templates";
import { links } from "../../../data/links";
</script>

<template>
  <div class="home">
    <div class="background-gradient-1" />
    <div class="background-gradient-2" />
    <Base :links="links" />
  </div>
</template>

<style lang="scss">
@use "../../../styles/variables.scss" as v;

.home {
  width: 100%;
  overflow-y: auto;

  $ball-size: 20rem;
  .background-gradient-1 {
    position: sticky;
    width: 60%;
    height: $ball-size;
    background: v.$orange;
    border-radius: 0 6rem 8rem 0;
    z-index: -1;
    opacity: 0.5;
    filter: blur(10rem);
  }
  .background-gradient-2 {
    position: sticky;
    margin-top: -$ball-size;
    margin-left: 20%;
    width: 80%;
    height: $ball-size;
    background: v.$pink;
    border-radius: 6rem 0 0 8rem;
    z-index: -2;
    filter: blur(17rem);
  }
  .base {
    position: sticky;
    margin-top: -$ball-size;
  }
}
</style>
