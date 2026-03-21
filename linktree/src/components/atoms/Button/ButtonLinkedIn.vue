<template>
  <Button class="btn btn--linkedin" @click="openLink(linkedInUrl)">
    <LinkedInIcon />
  </Button>
</template>

<script lang="ts" setup>
import { LinkedInIcon } from "../../../assets";
import { openExternalUrl } from "../../../utils/openExternalUrl";
import { Button } from "..";

const openLink = (url: string) => openExternalUrl(url);
const linkedInUrl = "https://www.linkedin.com/in/andrea-piras-pivi";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--linkedin {
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
