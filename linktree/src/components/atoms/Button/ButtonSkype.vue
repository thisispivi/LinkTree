<template>
  <Button class="btn btn--skype" @click="openLink(URL)">
    <SkypeIcon />
  </Button>
</template>

<script lang="ts" setup>
import { SkypeIcon } from "../../../assets";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const URL = "https://join.skype.com/invite/ATdDavVvAdtT";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--skype {
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
