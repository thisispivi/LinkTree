<template>
  <Button class="btn btn--resume" @click="openLink(resumeUrl)">
    <ResumeIcon />
  </Button>
</template>

<script lang="ts" setup>
import { ResumeIcon } from "../../../assets";
import i18n from "../../../i18n";
import { Button } from "..";

const openLink = (url: string) => window.open(url, "_blank");
const resumeUrl = `https://github.com/thisispivi/LinkTree/blob/main/resume/Andrea_Piras_Resume_${i18n.global.locale.toUpperCase().slice(0, 2)}.pdf`;
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--resume {
  svg {
    width: 100%;
    height: 100%;
    opacity: 0.75;
    stroke: v.$linkButtonsIconColor !important;
    @include m.transition(all, 0.2s, ease-in-out);
  }
  &:hover {
    svg {
      opacity: 1;
    }
  }
}
</style>
