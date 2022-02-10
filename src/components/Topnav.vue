<template>
  <div class="topnav">
    <div class="logo">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-wheel"></use>
      </svg>
    </div>
    <ul class="menu">
      <li>菜单1</li>
      <li>菜单2</li>
    </ul>
    <span class="toggleAside" @click="toggleAside">
      <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
          viewBox="0 0 24 24"
          class="menu-icon"
          data-v-0d06e654=""
      >
        <path
            d="M17,11H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,11,17,11z"
        ></path>
        <path
            d="M21,7H3C2.4,7,2,6.6,2,6s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,7,21,7z"
        ></path>
        <path
            d="M21,15H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,15,21,15z"
        ></path>
        <path
            d="M17,19H3c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S17.6,19,17,19z"
        ></path>
      </svg>
    </span>
  </div>
</template>

<script lang="ts">
import {inject, Ref} from 'vue';

export default {
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible'); // get
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return {toggleAside};
  },
};
</script>

<style lang="scss" scoped>
.topnav {
  color: #209468;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 10;
  justify-content: center;
  align-content: center;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    > svg {
      width: 32px;
      height: 32px;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
    }
  }
  > .toggleAside {
    width: 24px;
    height: 24px;
    position: absolute;
    left: 16px;
    top: 50%;
    transform: translateY(-50%);
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toggleAside {
      display: inline-block;
    }
  }
}
</style>
