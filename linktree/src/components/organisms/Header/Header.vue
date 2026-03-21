<script lang="ts" setup>
import gsap from "gsap";
import { nextTick, onMounted, ref } from "vue";

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
import ButtonResume from "../../atoms/Button/ButtonResume.vue";

const heroRef = ref<HTMLElement | null>(null);

const onContact = () => {
  window.open("mailto:andreapiras2809@gmail.com");
};

onMounted(async () => {
  await nextTick();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (!heroRef.value) return;

  const avatar = heroRef.value.querySelector(".hero__avatar");
  const firstName = heroRef.value.querySelector(".hero__name--first");
  const nickName = heroRef.value.querySelector(".hero__name--accent");
  const title = heroRef.value.querySelector(".hero__title");
  const socialItems = heroRef.value.querySelectorAll(".hero__socials > *");
  const contactBtn = heroRef.value.querySelector(".hero__contact");
  const scrollHint = heroRef.value.querySelector(".hero__scroll");

  gsap.set([avatar, firstName, nickName, title, contactBtn, scrollHint], {
    opacity: 0,
  });
  gsap.set(socialItems, { opacity: 0 });

  const tl = gsap.timeline({ defaults: { ease: "expo.out" }, delay: 0.3 });

  tl.to(avatar, { opacity: 1, duration: 1.2 })
    .fromTo(
      firstName,
      { y: 60, opacity: 0, filter: "blur(8px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 1 },
      "-=0.7"
    )
    .fromTo(
      nickName,
      { y: 30, opacity: 0, filter: "blur(6px)" },
      { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.8 },
      "-=0.5"
    )
    .fromTo(
      title,
      { opacity: 0, filter: "blur(4px)" },
      { opacity: 1, filter: "blur(0px)", duration: 0.8 },
      "-=0.4"
    )
    .fromTo(
      socialItems,
      { y: 15, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.04 },
      "-=0.3"
    )
    .fromTo(
      contactBtn,
      { y: 15, opacity: 0, scale: 0.95 },
      { y: 0, opacity: 1, scale: 1, duration: 0.6 },
      "-=0.2"
    )
    .to(scrollHint, { opacity: 1, duration: 0.8 }, "-=0.1");
});
</script>

<template>
  <section ref="heroRef" class="hero">
    <div class="hero__identity">
      <Profile class="hero__avatar" />
      <h1 class="hero__name">
        <span class="hero__name--first">Andrea Piras</span>
        <span class="hero__name--accent">(Pivi)</span>
      </h1>
      <p class="hero__title">
        {{ $t("header.description") }}
      </p>
    </div>
    <div class="hero__socials">
      <ButtonResume />
      <ButtonGithub />
      <ButtonInstagram />
      <ButtonLinkedIn />
      <ButtonSkype />
      <ButtonX />
      <ButtonYoutube />
    </div>
    <button class="hero__contact" @click="onContact">
      <span class="hero__contact-glow" aria-hidden="true"></span>
      <span class="hero__contact-inner">
        <MailIcon class="hero__contact-icon" />
        <span class="hero__contact-label">{{ $t("contactMe") }}</span>
      </span>
    </button>

    <div class="hero__scroll" aria-hidden="true">
      <div class="hero__scroll-mouse">
        <div class="hero__scroll-dot"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

@property --contact-angle {
  syntax: "<angle>";
  inherits: false;
  initial-value: 0deg;
}

@keyframes contact-spin {
  to {
    --contact-angle: 1turn;
  }
}

@keyframes scroll-dot {
  0% {
    transform: translateX(-50%) translateY(0);
    opacity: 0;
  }
  15% {
    opacity: 1;
  }
  85% {
    opacity: 1;
  }
  100% {
    transform: translateX(-50%) translateY(1.6rem);
    opacity: 0;
  }
}

.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100svh;
  width: 100%;
  padding: 4rem 2rem 6rem;
  position: relative;
  z-index: 10;
  gap: 2rem;

  .hero__identity {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 0.75rem;
  }

  .hero__name {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.1rem;
    font-family: "Playfair Display", serif;
    margin-top: 0.5rem;

    .hero__name--first {
      font-size: clamp(2.8rem, 7vw, 4.5rem);
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -0.01em;
      @include m.text-gradient;
    }

    .hero__name--accent {
      font-size: clamp(1.6rem, 4vw, 2.4rem);
      font-weight: 400;
      font-style: italic;
      color: rgba(241, 241, 241, 0.45);
      line-height: 1.3;
    }
  }

  .hero__title {
    color: v.$on-surface-variant;
    font-size: 1.05rem;
    font-weight: 500;
    letter-spacing: 0.02em;
    max-width: 28rem;
    text-align: center;
    line-height: 1.6;
    margin-top: 0.5rem;
  }

  .hero__socials {
    display: flex;
    gap: 0.75rem;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero__contact {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    padding: 0 2rem;
    margin-top: 0.5rem;
    border-radius: 9999px;
    outline: none;
    border: 0.125rem solid transparent;
    cursor: pointer;
    background:
      linear-gradient(v.$surface-0, v.$surface-0) padding-box,
      conic-gradient(
          from var(--contact-angle, 0deg),
          v.$surface-0 0turn,
          v.$pink 0.25turn,
          v.$orange 0.45turn,
          v.$pink 0.65turn,
          v.$surface-0 0.85turn,
          v.$surface-0 1turn
        )
        border-box;
    animation: contact-spin 4s linear infinite;
    box-shadow: 0 0.5rem 1.5rem rgba(0, 0, 0, 0.25);
    transition:
      transform 0.3s ease,
      box-shadow 0.3s ease;

    .hero__contact-glow {
      position: absolute;
      inset: -0.125rem;
      border-radius: inherit;
      background: radial-gradient(
        60% 80% at 50% 120%,
        rgba(v.$pink, 0.2),
        rgba(v.$orange, 0.15),
        transparent 70%
      );
      filter: blur(0.75rem);
      z-index: 0;
      pointer-events: none;
    }

    .hero__contact-inner {
      position: relative;
      z-index: 1;
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
    }

    .hero__contact-icon {
      width: 1rem;
      height: 1rem;
      color: v.$pink;
    }

    .hero__contact-label {
      font-size: 0.9rem;
      font-weight: 700;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      @include m.text-gradient;
      filter: brightness(1.3);
    }

    &:hover {
      transform: translateY(-0.125rem);
      animation-duration: 1.5s;
      box-shadow:
        0 0.75rem 2rem rgba(0, 0, 0, 0.35),
        0 0 1.5rem rgba(v.$pink, 0.15);
    }

    &:active {
      transform: translateY(0);
    }
  }

  .hero__scroll {
    position: absolute;
    bottom: 3.5rem;
    left: 50%;
    transform: translateX(-50%);
    pointer-events: none;
    opacity: 0.5;
  }

  .hero__scroll-mouse {
    width: 0.175rem;
    height: 3rem;
    position: relative;
    border-radius: 0.175rem;
    overflow: hidden;
    mask-image: linear-gradient(to bottom, transparent 0%, black 45%);
    -webkit-mask-image: linear-gradient(to bottom, transparent 0%, black 45%);
  }

  .hero__scroll-dot {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 0.175rem;
    height: 1.25rem;
    border-radius: 0.175rem;
    background: v.$gradient-pink-orange;
    animation: scroll-dot 1.8s ease-in-out infinite;
  }

  @media (max-width: 40rem) {
    padding-bottom: 7rem;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__contact {
    animation: none;
  }
  .hero__scroll-dot {
    animation: none;
  }
}
</style>
