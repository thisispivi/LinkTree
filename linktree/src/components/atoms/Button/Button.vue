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
.btn {
  background-color: transparent;
  color: white;
  border: none;
  cursor: pointer;
  padding: 0;
  & > svg {
    width: 100%;
    height: 100%;
  }
}

.btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
