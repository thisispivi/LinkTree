<template>
  <Button class="btn btn--skype" @click="openLink(skypeUrl)">
    <SkypeIcon />
  </Button>
</template>

<script lang="ts" setup>
import { SkypeIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const skypeUrl = "https://join.skype.com/invite/ATdDavVvAdtT";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--skype {
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
