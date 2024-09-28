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
