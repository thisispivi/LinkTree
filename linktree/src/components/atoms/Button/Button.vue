<template>
  <button
    :type="type"
    :class="buttonClass"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
type ButtonType = "button" | "submit" | "reset";

const { buttonClass, disabled, type } = defineProps({
  type: { type: String as () => ButtonType, default: "button" },
  disabled: { type: Boolean, default: false },
  buttonClass: { type: String, default: "btn" },
});

const emit = defineEmits<{
  click: [];
}>();

const onClick = () => {
  if (!disabled) {
    emit("click");
  }
};
</script>

<style lang="scss">
@use "../../../styles/variables.scss" as v;
@use "../../../styles/mixins.scss" as m;

.btn {
  background: v.$glass-bg;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0.75rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  width: 2.75rem;
  height: 2.75rem;
  box-shadow: inset 0 0.0625rem 0 rgba(255, 255, 255, 0.06);
  @include m.transition(all, 0.3s, ease);

  &:hover {
    background: v.$surface-3;
    box-shadow:
      inset 0 0.0625rem 0 rgba(255, 255, 255, 0.06),
      0 0 1.5rem rgba(v.$pink, 0.15);
  }
}

.btn:disabled {
  background-color: #cccccc;
  cursor: not-allowed;
}
</style>
