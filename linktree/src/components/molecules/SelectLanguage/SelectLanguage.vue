<script setup lang="ts">
import { ref } from "vue";

import { ChevronIcon, ItalyIcon, UnitedKingdomIcon } from "../../../assets";
import i18n from "../../../i18n";
const show = ref(false);

const storedLocale = localStorage.getItem("locale");
if (storedLocale) i18n.global.locale = storedLocale as "en" | "it";
else localStorage.setItem("locale", i18n.global.locale as "en" | "it");

const onLanguageClick = (lang: "en" | "it") => {
  i18n.global.locale = lang;
  localStorage.setItem("locale", lang);
  show.value = false;
};
</script>

<template>
  <div class="select-language">
    <div class="select-language__button" @click="show = !show">
      <ItalyIcon v-if="$i18n.locale.includes('it')" />
      <UnitedKingdomIcon v-if="$i18n.locale.includes('en')" />
      <ChevronIcon
        class="select-language__button__chevron"
        :style="{ transform: show ? 'rotate(90deg)' : 'rotate(-90deg)' }"
      />
    </div>
    <Transition>
      <template v-if="show">
        <div class="select-language__dropdown">
          <div
            :class="{ active: $i18n.locale.includes('it') }"
            @click="onLanguageClick('it')"
          >
            <ItalyIcon />
            <p>Italiano</p>
          </div>
          <div
            :class="{ active: $i18n.locale.includes('en') }"
            @click="onLanguageClick('en')"
          >
            <UnitedKingdomIcon />
            <p>English</p>
          </div>
        </div>
      </template>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.select-language {
  position: relative;
  background-color: transparent;
  color: white;
  border: none;
  font-size: 1rem;
  font-weight: 300;
  cursor: pointer;
  &:focus {
    outline: none;
  }

  .select-language__button {
    display: flex;
    align-items: center;
    svg {
      width: 1.5rem;
      height: 1.5rem;
      margin-right: 0.2rem;
    }
    .select-language__button__chevron {
      width: 1rem;
      height: 1rem;
      stroke: v.$fontColor;
      margin: 0;
      @include m.transition(transform, 0.18s, ease);
    }
  }
  .select-language__dropdown {
    position: absolute;
    top: 2.5rem;
    right: 0;
    background-color: v.$surface-0;
    backdrop-filter: blur(4rem);
    -webkit-backdrop-filter: blur(4rem);
    border-radius: 1rem;
    box-shadow: 0 0.5rem 2rem rgba(0, 0, 0, 0.4);
    padding: 0.5rem;
    will-change: transform, opacity;
    contain: paint;
    div {
      display: flex;
      align-items: center;
      cursor: pointer;
      padding: 0.25rem 0.75rem;
      border-radius: 0.5rem;
      @include m.transition(all, 0.2s);
      &:hover {
        background-color: v.$surface-2;
      }
      &.active {
        background-color: v.$orange;
        color: white;
        cursor: default;
        &:hover {
          background-color: v.$orange;
        }
      }
      svg {
        width: 1.25rem;
        height: 1.25rem;
        margin-right: 0.75rem;
      }
      p {
        font-weight: 500;
        font-size: 0.85rem;
      }
    }
  }
}

.v-enter-active,
.v-leave-active {
  opacity: 1;
  transform: translate3d(0, 0, 0);
  transition:
    opacity 180ms ease,
    transform 180ms ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  transform: translate3d(0, -0.75rem, 0);
}
</style>
