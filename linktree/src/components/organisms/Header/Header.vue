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

<template>
  <div id="navbar" class="header">
    <SelectLanguage />
    <div class="header__profile">
      <Profile class="header__profile__image" />
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

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 10;
  padding: 2rem;
  position: relative;
  @include m.transition;
  margin-bottom: 1rem;
  .header__profile {
    height: 100%;
    margin: 2rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    .header__profile__image {
      display: flex;
      width: 10rem;
      height: 10rem;
      background-color: v.$fontColor;
    }
    .header__texts {
      margin-top: 2rem;
      .header__texts__name {
        font-size: 2.2rem;
        font-weight: 700;
        color: v.$fontColor;
        font-family: "Montserrat", sans-serif;
        i {
          font-size: 2.2rem;
          font-weight: 500;
          font-family: "Montserrat", sans-serif;
        }
      }
      .header__texts__description {
        margin-top: 1rem;
        font-size: 1.2rem;
        font-weight: 400;
        color: white;
        opacity: 0.8;
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
      height: 2.5rem;
      width: 2.5rem;
    }
  }
}
</style>
