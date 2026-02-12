<script setup lang="ts">
import { projects } from "../../../data/projects";
import { Base } from "../../templates";
</script>

<template>
  <div class="home">
    <div class="background-bubbles" aria-hidden="true">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>

    <div class="content">
      <Base :projects="projects" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;
@use "sass:map";
@use "sass:math";

.home {
  width: 100%;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
  background: v.$backgroundGradient;
  color: v.$fontColor;
  isolation: isolate;

  .content {
    position: relative;
    z-index: 1;
  }

  .background-bubbles {
    position: fixed;
    inset: 0;
    z-index: 0;
    pointer-events: none;
    contain: paint;
    background:
      radial-gradient(
        60rem 36rem at 8rem 4rem,
        rgba(255, 255, 255, 0.025),
        transparent 30rem
      ),
      radial-gradient(
        56rem 44rem at 80rem 50rem,
        rgba(255, 255, 255, 0.02),
        transparent 28rem
      );
    span {
      position: absolute;
      border-radius: 50%;
      opacity: 0.6;
      --padding-x: 6rem;
      --padding-y: 6rem;
      filter: blur(6rem);
      animation: bubble-roam var(--duration, 36s) linear infinite;
      animation-delay: var(--animation-delay, 0s);
      mix-blend-mode: soft-light;
      will-change: transform;
      backface-visibility: hidden;
      transform: translate3d(var(--min-x), var(--min-y), 0);
    }
  }
}

@mixin bubble-glow-pink {
  background: radial-gradient(
    circle at 30% 30%,
    v.$bubblePinkFrom 0%,
    v.$bubblePinkTo 70%,
    transparent 80%
  );
  box-shadow:
    0 0 3.125rem 1rem v.$bubbleGlowPink,
    0 0 8.75rem 2rem rgba(v.$pink, 0.06) inset;
}

@mixin bubble-glow-orange {
  background: radial-gradient(
    circle at 30% 30%,
    v.$bubbleOrangeFrom 0%,
    v.$bubbleOrangeTo 70%,
    transparent 80%
  );
  box-shadow:
    0 0 3.125rem 1rem v.$bubbleGlowOrange,
    0 0 8.75rem 2rem rgba(v.$orange, 0.06) inset;
}

@mixin bubble-base(
  $width,
  $height,
  $left,
  $top,
  $delay,
  $duration,
  $x-min,
  $x-max,
  $y-min,
  $y-max,
  $direction: normal,
  $rotate: 0deg
) {
  width: $width;
  height: $height;
  left: $left;
  top: $top;
  rotate: $rotate;
  --half-width: #{math.div($width, 2)};
  --half-height: #{math.div($height, 2)};
  --animation-delay: #{$delay};
  --duration: #{$duration};
  --min-x: calc(#{$x-min} + var(--half-width) + var(--padding-x));
  --max-x: calc(#{$x-max} - var(--half-width) - var(--padding-x));
  --min-y: calc(#{$y-min} + var(--half-height) + var(--padding-y));
  --max-y: calc(#{$y-max} - var(--half-height) - var(--padding-y));
  animation-direction: $direction;
}

$background-bubble-configs: (
  1: (
    w: 35rem,
    h: 28rem,
    left: 20vw,
    top: 65vh,
    rotate: 45deg,
    delay: -6s,
    duration: 40s,
    x-min: -50vw,
    x-max: 0vw,
    y-min: -50vh,
    y-max: 0vh,
    direction: normal,
    theme: orange,
  ),
  2: (
    w: 26rem,
    h: 18rem,
    left: 40vw,
    top: 50vh,
    rotate: 0deg,
    delay: -3s,
    duration: 33s,
    x-min: 0vw,
    x-max: 50vw,
    y-min: -50vh,
    y-max: 0vh,
    direction: reverse,
    theme: pink,
  ),
  3: (
    w: 18rem,
    h: 18rem,
    left: 50vw,
    top: 30vh,
    rotate: 0deg,
    delay: -9s,
    duration: 28s,
    x-min: -50vw,
    x-max: 0vw,
    y-min: 0vh,
    y-max: 50vh,
    direction: normal,
    theme: pink,
  ),
  4: (
    w: 32rem,
    h: 22rem,
    left: 25vw,
    top: 25vh,
    rotate: 0deg,
    delay: -12s,
    duration: 38s,
    x-min: 0vw,
    x-max: 50vw,
    y-min: 0vh,
    y-max: 50vh,
    direction: reverse,
    theme: orange,
  ),
  5: (
    w: 20rem,
    h: 28rem,
    left: 35vw,
    top: 25vh,
    rotate: 0deg,
    delay: -15s,
    duration: 45s,
    x-min: -30vw,
    x-max: 30vw,
    y-min: -30vh,
    y-max: 30vh,
    direction: normal,
    theme: pink,
  ),
);

@each $i, $cfg in $background-bubble-configs {
  .background-bubbles span:nth-child(#{$i}) {
    @include bubble-base(
      map.get($cfg, w),
      map.get($cfg, h),
      map.get($cfg, left),
      map.get($cfg, top),
      map.get($cfg, delay),
      map.get($cfg, duration),
      map.get($cfg, x-min),
      map.get($cfg, x-max),
      map.get($cfg, y-min),
      map.get($cfg, y-max),
      map.get($cfg, direction),
      map.get($cfg, rotate)
    );

    @if map.get($cfg, theme) == pink {
      @include bubble-glow-pink;
    } @else {
      @include bubble-glow-orange;
    }
  }
}

@keyframes bubble-roam {
  0% {
    transform: translate3d(var(--min-x), var(--min-y), 0);
  }
  25% {
    transform: translate3d(var(--max-x), var(--min-y), 0);
  }
  50% {
    transform: translate3d(var(--max-x), var(--max-y), 0);
  }
  75% {
    transform: translate3d(var(--min-x), var(--max-y), 0);
  }
  100% {
    transform: translate3d(var(--min-x), var(--min-y), 0);
  }
}

@media (max-width: 64rem) {
  .background-bubbles span:nth-child(1),
  .background-bubbles span:nth-child(2),
  .background-bubbles span:nth-child(3),
  .background-bubbles span:nth-child(4),
  .background-bubbles span:nth-child(5) {
    left: 50vw;
    top: 50vh;
  }
}
@media (max-height: 44rem) {
  .background-bubbles span:nth-child(4),
  .background-bubbles span:nth-child(5) {
    top: 50vh;
  }
}

@media (prefers-reduced-motion: reduce) {
  .background-bubbles span {
    animation: none;
    opacity: 0.6;
  }
}
</style>
