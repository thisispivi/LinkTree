<script setup lang="ts">
import { Header } from "../../organisms";
import { ref } from "vue";
import { Projects as ProjectType } from "../../../data/projects";
import { Projects } from "../../../components/organisms";

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
