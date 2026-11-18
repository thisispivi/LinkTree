<template>
  <Button class="btn btn--youtube" @click="openLink(youtubeUrl)">
    <YoutubeIcon />
  </Button>
</template>

<script lang="ts" setup>
import { YoutubeIcon } from "../../../assets";
import { openExternalUrl } from "../../../utils/openExternalUrl";
import { Button } from "..";

const openLink = (url: string) => openExternalUrl(url);
const youtubeUrl = "https://www.youtube.com/@andreapiras4885";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--youtube {
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
