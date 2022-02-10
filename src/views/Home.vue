<template>
  <div class="topnavAndBanner">
    <Topnav/>
    <div class="banner">
      <h1>Wheel UI</h1>
      <h2>一个厉害的 UI 框架</h2>
      <p class="actions">
        <a href="https://github.com/Drwna">GitHub</a>
        <router-link to="/doc">开始</router-link>
      </p>
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
  //background: radial-gradient(circle, rgba(250, 249, 255, 1) 0%, rgba(226, 239, 247, 1) 100%);
  background: linear-gradient(330deg, rgba(205, 227, 241, 1) 0%, rgba(250, 249, 255, 1) 47%, rgba(220, 247, 247, 1) 100%);
}

.banner {
  color: #209468;
  padding: 100px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  > .actions {
    padding: 8px 0;
    a {
      margin: 0 8px;
      background: $green;
      color: white;
      display: inline-block;
      padding: 8px 24px;
      border-radius: $border-radius;
      &:hover {
        text-decoration: none;
      }
    }
  }
}
</style>
