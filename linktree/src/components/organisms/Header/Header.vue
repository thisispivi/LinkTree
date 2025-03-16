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

document.addEventListener("DOMContentLoaded", () => {
  const element = document.querySelector(".rotating-btn") as HTMLElement | null;
  if (element) {
    let angle = 0;
    const rotate = () => {
      angle = (angle + 3) % 360;
      element.style.setProperty("--angle", `${angle}deg`);
      requestAnimationFrame(rotate);
    };

    rotate();
  }
});

const onClick = () => {
  window.open("mailto:andreapiras2809@gmail.com");
};
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
    <button class="rotating-btn" @click="onClick">
      <h3>{{ $t("contactMe") }}</h3>
    </button>
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
      height: 2.25rem;
      width: 2.25rem;
    }
  }

  .rotating-btn {
    width: auto;
    height: 3rem;
    border-radius: 3rem;
    outline: none;
    background: v.$background;
    border: 2px solid transparent;
    cursor: pointer;
    padding-inline: 2rem;
    margin-top: 1.5rem;
    background:
      linear-gradient(v.$background, v.$background) padding-box,
      conic-gradient(
          from var(--angle, 0),
          transparent,
          white 10%,
          transparent 20%
        )
        border-box;
    @include m.transition(all, 0.2s, ease-in-out);

    &:hover {
      background:
        linear-gradient(v.$background, v.$background) padding-box,
        conic-gradient(
            from var(--angle, 0),
            transparent,
            v.$pink 10%,
            v.$orange 5%,
            transparent 20%
          )
          border-box;
      filter: brightness(1.4);
    }

    h3 {
      margin: 0;
      font-size: 1.25rem;
      color: v.$lightPurple;
      background: -webkit-linear-gradient(270deg, v.$pink, v.$orange);
      filter: brightness(1.4);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      font-family: "Raleway", sans-serif;
      text-transform: uppercase;
    }
  }
}
</style>
