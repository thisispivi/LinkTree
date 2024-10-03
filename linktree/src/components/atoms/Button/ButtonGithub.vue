<template>
  <Button class="btn btn--github" @click="openLink(githubUrl)">
    <GithubIcon />
  </Button>
</template>

<script lang="ts" setup>
import { GithubIcon } from "../../../assets";
import { Button } from "../../atoms";

const { githubUrl } = defineProps({
  githubUrl: { type: String, default: "https://github.com/thisispivi" },
});

const openLink = (url: string) => window.open(url, "_blank");
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
.btn--github {
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
