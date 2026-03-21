<template>
  <div class="profile-wrapper">
    <img
      class="profile"
      src="https://pivi-travel-map.b-cdn.net/LinkTree/Images/Profile.png"
      alt="profile"
    />
  </div>
</template>

<style lang="scss" scoped>
@use "../../../styles/variables.scss" as v;

.profile-wrapper {
  position: relative;
  width: 7rem;
  height: 7rem;
  border-radius: 50%;

  &::before {
    content: "";
    position: absolute;
    inset: -0.1875rem;
    border-radius: 50%;
    background: v.$gradient-pink-orange;
    z-index: -1;
    opacity: 0.7;
  }

  &::after {
    content: "";
    position: absolute;
    inset: -1rem;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(v.$pink, 0.2) 0%,
      rgba(v.$orange, 0.12) 40%,
      transparent 70%
    );
    z-index: -2;
    filter: blur(1rem);
  }
}

.profile {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  display: block;
}
</style>
