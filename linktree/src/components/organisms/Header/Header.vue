<template>
  <div id="navbar" class="header">
    <Profile />
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
  img {
    height: calc(100% - 4rem);
  }
  .header__links {
    display: flex;
    gap: 1rem;
    justify-content: center;
    width: auto;
    flex-wrap: wrap;
    .btn {
      height: 2.5rem;
    }
  }

  &.header--scrolled {
    height: v.$headerHeightScrolled;
    padding: 0.5rem 2rem;
    flex-direction: row;
    img {
      height: calc(100% - 2rem);
    }
    .header__links {
      gap: 0.5rem;
      .btn {
        height: 2rem;
      }
    }
  }
}
</style>
