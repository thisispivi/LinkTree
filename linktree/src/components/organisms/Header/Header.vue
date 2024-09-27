<script setup lang="ts">
import { Profile } from "../../atoms";
</script>

<template>
  <div id="navbar" class="header">
    <Profile />
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.header {
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
  height: v.$headerHeight;
  background-color: v.$headerBackgroundDark;
  width: 100%;
  z-index: 10;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  @include m.transition;
  padding: 2rem;
}
</style>
