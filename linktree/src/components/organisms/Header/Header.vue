<script lang="ts" setup>
import { MailIcon } from "../../../assets";
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
    <button
      class="rotating-btn contact-btn"
      aria-label="Contact me via email"
      @click="onClick"
    >
      <span class="btn__glow" aria-hidden="true"></span>
      <span class="btn__inner">
        <MailIcon class="btn__icon" />
        <span class="btn__label">{{ $t("contactMe") }}</span>
      </span>
    </button>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

@property --angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}
@keyframes spin {
  to {
    --angle: 1turn;
  }
}

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
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    height: 3rem;
    padding: 0 1.6rem;
    margin-top: 1.5rem;
    border-radius: 999rem;
    outline: none;
    border: 0.125rem solid transparent;
    background:
      linear-gradient(v.$background, v.$background) padding-box,
      conic-gradient(
          from var(--angle, 0deg),
          v.$background 0turn,
          v.$pink 0.3turn,
          v.$orange 0.4turn,
          v.$pink 0.6turn,
          v.$orange 0.7turn,
          v.$background 0.9turn,
          v.$background 1turn
        )
        border-box;
    cursor: pointer;
    animation: spin 3.5s linear infinite;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
    @include m.transition(all, 0.25s, ease);

    --grad-start: #{v.$pink};
    --grad-end: #{v.$orange};

    &::before {
      content: "";
      position: absolute;
      inset: -0.125rem;
      border-radius: inherit;
      background: radial-gradient(
        60% 80% at 50% 120%,
        rgba(v.$pink, 0.25),
        rgba(v.$orange, 0.18),
        transparent 70%
      );
      filter: blur(0.75rem);
      z-index: 0;
      pointer-events: none;
    }

    &:hover {
      transform: translateY(-0.125rem);
      filter: brightness(1.1);
      animation-duration: 1.25s;
      box-shadow:
        0 0.75rem 1.75rem rgba(0, 0, 0, 0.35),
        0 0 1.25rem rgba(v.$background, 0.25);
    }

    &:active {
      transform: translateY(0);
      box-shadow: 0 0.375rem 1rem rgba(0, 0, 0, 0.35);
    }

    &:focus-visible {
      box-shadow:
        0 0 0 0.1875rem rgba(255, 255, 255, 0.08),
        0 0 0 0.375rem rgba(v.$orange, 0.45);
      outline: none;
    }

    .btn__inner {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.6rem;
    }

    .btn__icon {
      width: 1.125rem;
      height: 1.125rem;
      filter: drop-shadow(0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.25));
    }

    .btn__label {
      margin: 0;
      font-size: 1.1rem;
      font-weight: 700;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      font-family: "Raleway", sans-serif;
      background: -webkit-linear-gradient(270deg, v.$pink, v.$orange);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: brightness(1.35);
    }

    h3 {
      display: none;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rotating-btn {
      animation: none;
    }
  }
}
</style>
