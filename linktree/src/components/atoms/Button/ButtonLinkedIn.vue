<template>
  <Button class="btn btn--linkedin" @click="openLink(linkedInUrl)">
    <LinkedInIcon />
  </Button>
</template>

<script lang="ts" setup>
import { LinkedInIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const linkedInUrl = "https://www.linkedin.com/in/andrea-piras-pivi";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--linkedin {
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
