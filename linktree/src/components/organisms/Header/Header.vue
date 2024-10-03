<template>
  <div id="navbar" class="header">
    <SelectLanguage />
    <div class="header__profile">
      <div class="header__profile__image">
        <Profile />
      </div>
      <div class="header__texts">
        <h1 class="header__texts__name">Andrea Piras <i>(Pivi)</i></h1>
        <p class="header__texts__description">
          {{ $t("header.description") }}
        </p>
      </div>
    </div>
    <div class="header__links">
      <ButtonGithub />
      <ButtonInstagram />
      <ButtonLinkedIn />
      <ButtonSkype />
      <ButtonX />
      <ButtonYoutube />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  ButtonGithub,
  ButtonInstagram,
  ButtonLinkedIn,
  ButtonSkype,
  ButtonX,
  ButtonYoutube,
  Profile,
} from "../../atoms";
import { SelectLanguage } from "../../molecules";
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: v.$headerHeight;
  width: 100%;
  z-index: 10;
  padding: 2rem;
  position: relative;
  @include m.transition;
  .select-language {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    color: white;
    border: none;
    font-size: 1rem;
    font-weight: 300;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
  .header__profile {
    height: 100%;
    display: flex;
    flex-direction: column;
    min-width: 0;
    min-height: 0;
    margin-bottom: 2rem;
    justify-content: center;
    .header__profile__image {
      display: flex;
      min-height: 0;
      min-width: 0;
      max-height: fit-content;
      max-width: fit-content;
      width: 100%;
      height: 100%;
      margin: auto;
      img {
        height: inherit;
        margin: auto;
      }
    }
    h1,
    h2,
    h3 {
      margin: 0;
    }
    .header__texts {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 0.5rem;
      margin-top: 1rem;
      .header__texts__name {
        font-size: 1.5rem;
        color: white;
        text-align: center;
        margin: 0;
      }
      .header__texts__description {
        font-size: 1rem;
        color: rgb(224, 212, 252);
        font-weight: 300;
        text-align: center;
        margin: 0;
        opacity: 0.9;
      }
    }
  }
  .header__links {
    display: flex;
    gap: 0.75rem;
    justify-content: center;
    width: auto;
    flex-wrap: wrap;
    .btn {
      height: 2rem;
    }
  }
}

@media (max-width: 320px) {
  .header {
    padding: 1.5rem 2rem;
    .header__profile {
      margin-bottom: 1rem;
      .header__texts {
        .header__texts__name {
          font-size: 1.3rem !important;
        }
        .header__texts__description {
          font-size: 0.9rem !important;
        }
      }
    }
    .header__links {
      .btn {
        height: 1.5rem;
      }
    }
  }
}
</style>
