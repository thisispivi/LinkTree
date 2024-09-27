<template>
  <Button class="btn btn--x" @click="openLink(URL)">
    <XIcon />
  </Button>
</template>

<script lang="ts" setup>
import { XIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const URL = "https://x.com/ThisIsPivi";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--x {
  svg {
    fill: v.$color500;
    @include m.transition;
  }
  &:hover {
    svg {
      fill: v.$color400;
    }
  }
}
</style>
