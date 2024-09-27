<template>
  <Button class="btn btn--github" @click="openLink(URL)">
    <GithubIcon />
  </Button>
</template>

<script lang="ts" setup>
import { GithubIcon } from "../../../assets";
import { Button } from "../../atoms";

const openLink = (url: string) => window.open(url, "_blank");
const URL = "https://github.com/thisispivi";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--github {
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
