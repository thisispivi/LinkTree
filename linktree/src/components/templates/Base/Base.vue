<script setup lang="ts">
import { ref } from "vue";

import { Projects } from "../../../components/organisms";
import { Projects as ProjectType } from "../../../data/projects";
import { Header } from "../../organisms";

const headerClass = ref("header");

defineProps({
  projects: { type: Array as () => ProjectType, required: true },
});
</script>

<template>
  <div class="base">
    <Header :class="headerClass" />
    <Projects :projects />
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
</style>
