<template>
  <Button class="btn btn--facebook" @click="openLink(facebookUrl)">
    <FacebookIcon />
  </Button>
</template>

<script lang="ts" setup>
import { FacebookIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const facebookUrl = "https://www.facebook.com/thisispivi/";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--facebook {
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
