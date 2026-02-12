<template>
  <Button class="btn btn--instagram" @click="openLink(instagramUrl)">
    <InstagramIcon />
  </Button>
</template>

<script lang="ts" setup>
import { InstagramIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const instagramUrl = "https://www.instagram.com/pi_waitforit_vi/";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--instagram {
  svg {
    fill: v.$linkButtonsIconColor;
    width: 100%;
    height: 100%;
    opacity: 0.75;
    @include m.transition(all, 0.2s, ease-in-out);
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
}
</style>
