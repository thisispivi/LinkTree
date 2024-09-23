<script setup>
import { Base } from "../../templates";
import { links } from "../../../data/links";
</script>

<template>
  <div class="home">
    <Base :links="links" />
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 100%;
  width: 100%;
}
</style>
