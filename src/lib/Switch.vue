<template>
  <button
      class="wheel-switch"
      @click="toggle"
      :class="{ 'wheel-checked': value }"
  >
    <span></span>
  </button>
</template>

<script lang="ts">
export default {
  props: {value: Boolean,},
  setup(props, context) {
    const toggle = () => {
      context.emit('update:value', !props.value);
    };
    return {toggle};
  },
};
</script>

<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.wheel-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: grey;
  border-radius: $h/2;
  position: relative;
  &[disabled] {
    background: #b9b5b5;
  }
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h/2;
    transition: left 250ms;
  }
  &.wheel-checked {
    background: rgb(31, 127, 238);
  }
  &.wheel-checked > span {
    left: calc(100% - #{$h2} - 2px);
  }
  &:focus {
    outline: none;
  }
}
</style>
