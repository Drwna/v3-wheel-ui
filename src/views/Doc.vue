<template>
  <div class="layout">
    <Topnav toggleMenuButtonVisible class="nav"/>
    <div class="content">
      <aside v-if="asideVisible">
        <h2>文档列表</h2>
        <ol>
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li>
            <router-link to="/doc/get-started">开始使用</router-link>
          </li>
        </ol>
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
          <li>
            <a>未完待续...</a>
          </li>
        </ol>
      </aside>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Topnav from '../components/Topnav.vue';
import {inject, Ref} from 'vue';

export default {
  components: {Topnav},
  setup() {
    const asideVisible = inject<Ref<boolean>>('asideVisible');
    return {asideVisible};
  },
};
</script>

<style lang="scss" scoped>
$aside-index: 10;
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
}

.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    flex-grow: 1;
    padding: 16px;
  }
}

aside {
  background: linear-gradient(90deg,
      rgba(212, 235, 249, 1) 0%, rgba(186, 244, 244, 1) 100%);
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 80px;
  height: 100%;
  z-index: $aside-index;
  @media (max-width: 500px) {
    width: 150px;
  }
  > h2 {
    margin-bottom: 4px;
    padding: 4px 56px;
    @media (max-width: 500px) {
      padding: 0 16px;
    }
  }
  > ol {
    > li {
      > a {
        display: block;
        padding: 14px 56px;
        text-decoration: none;
        @media(max-width: 500px) {
          padding: 10px 16px;
        }
      }
      .router-link-active {
        background: #f4f5f7;
      }
    }
  }
}

main {
  margin-left: 96px;
  overflow: auto;
  @media (max-width: 500px) {
    margin: 0 auto;
  }
}
</style>
