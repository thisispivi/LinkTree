<template>
  <div
    id="navbar"
    class="header"
  >
    <div class="header__profile">
      <div class="header__profile__image">
        <Profile />
      </div>
      <div class="header__texts">
        <h1 class="header__texts__name">
          Andrea Piras <i>(Pivi)</i>
        </h1>
        <p class="header__texts__description">
          Full Stack Developer and Machine Learning consultant
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
</script>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.header {
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: v.$headerHeight;
  background-color: v.$headerBackgroundDark;
  width: 100%;
  z-index: 10;
  box-shadow:
    rgba(0, 0, 0, 0.3) 0px 19px 38px,
    rgba(0, 0, 0, 0.22) 0px 15px 12px;
  padding: 2rem;
  @include m.transition;
  .header__profile {
    height: 100%;
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;
    min-height: 0;
    margin-bottom: 1rem;
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
        color: white;
        opacity: 0.6;
        font-weight: 300;
        text-align: center;
        margin: 0;
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

  &.header--scrolled {
    height: v.$headerHeightScrolled;
    padding: 0.5rem 2rem;
    flex-direction: row;
    .header__profile {
      .header__texts {
        display: none;
      }
    }
    .header__links {
      gap: 0.25rem;
      .btn {
        height: 1.5rem;
      }
    }
  }
}
</style>
