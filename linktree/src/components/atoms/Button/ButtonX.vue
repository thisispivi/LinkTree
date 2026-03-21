<template>
  <Button class="btn btn--x" @click="openLink(xUrl)">
    <XIcon />
  </Button>
</template>

<script lang="ts" setup>
import { XIcon } from "../../../assets";
import { openExternalUrl } from "../../../utils/openExternalUrl";
import { Button } from "..";

const openLink = (url: string) => openExternalUrl(url);
const xUrl = "https://x.com/ThisIsPivi";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--x {
  svg {
    fill: v.$linkButtonsIconColor;
    width: 1.25rem;
    height: 1.25rem;
    opacity: 0.6;
    @include m.transition(all, 0.2s, ease-in-out);
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
}
</style>
