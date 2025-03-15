<script setup lang="ts">
import { Header } from "../../organisms";
import { ref } from "vue";

const headerClass = ref("header");

const fillData = Array.from({ length: 100 }, (_, i) => i + 1);
</script>

<template>
  <div class="base">
    <Header :class="headerClass" />
    <ul class="base__list">
      <li v-for="item in fillData" :key="item" class="base__list-item">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;
</style>
