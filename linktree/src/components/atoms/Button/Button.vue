<template>
  <button :class="buttonClass" :disabled="disabled" @click="onClick">
    <slot />
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: { type: String, default: "button" },
    disabled: { type: Boolean, default: false },
    buttonClass: { type: String, default: "btn" },
  },
  emits: ["click"],
  methods: {
    onClick() {
      if (!this.disabled) {
        this.$emit("click");
      }
    },
  },
};
</script>

<style lang="scss">
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.btn {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 5rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  @include m.transition;
}

.btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
