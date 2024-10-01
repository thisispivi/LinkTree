<template>
  <Button class="btn btn--youtube" @click="openLink(youtubeUrl)">
    <YoutubeIcon />
  </Button>
</template>

<script lang="ts" setup>
import { YoutubeIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const youtubeUrl = "https://www.youtube.com/@andreapiras4885";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--youtube {
  svg {
    fill: v.$color600;
    @include m.transition;
  }
  &:hover {
    svg {
      fill: v.$color500;
    }
  }
}
</style>
