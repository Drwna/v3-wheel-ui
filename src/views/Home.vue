<template>
  <div>
    <div class="topnavAndBanner">
      <Topnav/>
      <div class="banner">
        <h1>Wheel UI</h1>
        <h2>一个普通但值得学习的 UI 框架</h2>
        <p class="actions">
          <a href="https://github.com/Drwna/v3-wheel-ui">GitHub</a>
          <router-link to="/doc">开始</router-link>
        </p>
      </div>
    </div>
    <div class="features">
      <ul>
        <li>
          <svg>
            <use xlink:href="#icon-vue"></use>
          </svg>
          <h3>基于 Vue 3</h3>
          <p>骄傲地使用了 Vue 3 Composition API</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-ts"></use>
          </svg>
          <h3>基于 TypeScript </h3>
          <p>源代码采用 TypeScript 书写（非严格检查）</p>
        </li>
        <li>
          <svg>
            <use xlink:href="#icon-light"></use>
          </svg>
          <h3>代码易读</h3>
          <p>每个组件的源代码都极其简洁</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';

export default {
  components: {Topnav},
};
</script>

<style lang="scss" scoped>
$green: #53bd95;
$border-radius: 4px;
.topnavAndBanner {
  background: linear-gradient(330deg, rgba(205, 227, 241, 1) 0%,
      rgba(250, 249, 255, 1) 47%, rgba(220, 247, 247, 1) 100%);
  clip-path: ellipse(80% 60% at 50% 40%);
}

.features { margin: 64px auto; width: 400px;
  @media (max-width: 500px) { width: 100%; margin: auto;
    transform: scale(0.75);
  }
  @media (min-width: 800px) { width: 800px; }
  @media (min-width: 1200px) { width: 1200px; }
  > ul { display: flex; flex-wrap: wrap;
    > li {
      width: 400px;
      margin: 16px 0;
      display: grid;
      justify-content: start;
      align-content: space-between;
      grid-template-areas:
        "icon title"
        "icon text";
      grid-template-columns: 80px auto;
      grid-template-rows: 1fr auto;
      > svg { grid-area: icon; width: 64px; height: 64px; }
      > h3 { grid-area: title; font-size: 28px; }
      > p { grid-area: text }
    }
  }
}

.banner {
  color: #209468;
  padding: 80px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media (min-width: 800px) {
    > h1 { margin-top: 20px; }
    > h2 { margin-top: 20px; }
  }
  > .actions { margin-top: 20px; padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover { text-decoration: none; }
    }
  }
}
</style>
