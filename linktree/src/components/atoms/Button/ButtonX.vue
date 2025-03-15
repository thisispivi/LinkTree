<template>
  <Button class="btn btn--x" @click="openLink(xUrl)">
    <XIcon />
  </Button>
</template>

<script lang="ts" setup>
import { XIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const xUrl = "https://x.com/ThisIsPivi";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--x {
  svg {
    fill: v.$linkButtonsIconColor;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    @include m.transition(all, 0.2s, ease-in-out);
    &:hover {
      opacity: 1;
    }
  }
}
</style>
