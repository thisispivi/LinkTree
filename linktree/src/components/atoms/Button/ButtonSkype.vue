<template>
  <Button class="btn btn--skype" @click="openLink(skypeUrl)">
    <SkypeIcon />
  </Button>
</template>

<script lang="ts" setup>
import { SkypeIcon } from "../../../assets";
import { openExternalUrl } from "../../../utils/openExternalUrl";
import { Button } from "..";

const openLink = (url: string) => openExternalUrl(url);
const skypeUrl = "https://join.skype.com/invite/ATdDavVvAdtT";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--skype {
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
